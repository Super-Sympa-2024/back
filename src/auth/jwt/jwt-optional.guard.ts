import { AuthGuard } from '@nestjs/passport';

export class JwtOptionalGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: any, context: any) {
    return user || null;
  }
}
