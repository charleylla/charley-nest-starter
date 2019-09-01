import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/jwt.strategy';
import { LocalStrategy } from './auth/local.strategy';
import { AuthUserEntity } from '../entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '~framework/config/config.service';

@Module({
  imports:[
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register(configService.forJWT()),
    TypeOrmModule.forFeature([AuthUserEntity]),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
  ],
  exports:[
    PassportModule,
    AuthService
  ]
})
export class GatewayModule {}
