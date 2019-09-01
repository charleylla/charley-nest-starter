import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      // 修改验证的字段
      // 默认为 username，password
      // 有了 username 和 password 才能进行验证
      // usernameField: 'username',
      // passwordField: 'password'
    });
    // 有了 username 和 password 字段后，才会走下面的 validate 方法验证
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    // 这里返回一个对象，表示查询到了用户之后，才能进行下一步
    // 这里的下一步，也就是登录
    // 登录接口中，对 user 中的信息进行签名
    // 签名就拿到了 token，然后返回客户端
    if (!user) {
      throw new HttpException('账号名或密码错误',HttpStatus.UNAUTHORIZED)
    }
    return user;
  }
}