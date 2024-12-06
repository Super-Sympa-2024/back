import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AppConfig } from '../../config/interfaces/app-config';
import { JwtAuthService } from './jwt-auth.service';
import { JwtPayload } from '../entities/jwt-payload.entity';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService<AppConfig>,
    private authService: JwtAuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (request: Request) => request?.cookies?.jwt,
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('auth.jwt.secret'),
    });
  }

  async validate(jwtPayload: JwtPayload) {
    const { id, username } = jwtPayload;
    return { id, username };
  }
}
