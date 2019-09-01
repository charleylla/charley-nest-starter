import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, } from '@nestjs/common';
import { AuthJwtPayload } from '~dto/auth.dto';
import { configService } from '~framework/config/config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.forJWT().secret,
    });
  }

  async validate(payload: AuthJwtPayload) {
    const { userId,userName } = payload;
    return { userId,userName };
  }
}