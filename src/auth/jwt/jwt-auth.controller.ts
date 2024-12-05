import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthService } from './jwt-auth.service';
import { CreateUserDto } from '../../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private jwtAuthService: JwtAuthService) {}

  @Post('login')
  async login(
    @Req() req: Request,
  ): Promise<{ accessToken: string } | BadRequestException> {
    return this.jwtAuthService.login(req.user as CreateUserDto);
  }

  @Post('register')
  async register(
    @Body() registerBody: CreateUserDto,
  ): Promise<{ accessToken: string }> {
    return await this.jwtAuthService.register(registerBody);
  }
}
