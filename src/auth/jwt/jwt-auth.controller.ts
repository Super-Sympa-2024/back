import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { JwtAuthService } from './jwt-auth.service';
import { CreateUserDto } from '../../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private jwtAuthService: JwtAuthService) {}

  @Post('login')
  async login(
    @Body() req: CreateUserDto,
  ): Promise<{ accessToken: string } | BadRequestException> {
    return this.jwtAuthService.login(req);
  }

  @Post('register')
  async register(
    @Body() registerBody: CreateUserDto,
  ): Promise<{ accessToken: string }> {
    return await this.jwtAuthService.register(registerBody);
  }
}
