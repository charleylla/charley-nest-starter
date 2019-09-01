import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/jwt.strategy';
import { LocalStrategy } from './auth/local.strategy';
import { AuthUserEntity } from '../entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: '10d',
      },
    }),
    TypeOrmModule.forFeature([AuthUserEntity])
  ],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy
  ],
  exports:[
    PassportModule,
    AuthService
  ]
})
export class GatewayModule {}
