import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { EventModule } from './event/event.module';
import { JwtAuthModule } from './auth/jwt/jwt-auth.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    EventModule,
    JwtAuthModule,
  ],
})
export class AppModule {}
