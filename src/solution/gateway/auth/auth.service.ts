import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { FrameUtil } from '~framework/common/frame-util';
import { BaseViewModel } from '~framework/common/base-view-model';
import { AuthUserEntity } from '~entities/auth.entity';
import { AuthUserDto } from '~dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthUserEntity)
    private readonly userRepository: Repository<AuthUserEntity>,
    private readonly jwtService:JwtService
  ){}
  async validateUser(username:string, password:string): Promise<any> {
    const passwordMd5 = FrameUtil.genMd5PasswordHex(password)
    const res = await this.userRepository
      .createQueryBuilder('user')
      .where('user.username = :username AND password = :password',{
        username,
        password:passwordMd5
      })
      .getOne();
    return res;                          
  }

  async login(user:AuthUserDto){
    const { id,username } = user;
    return new BaseViewModel(
      this.jwtService.sign({ username,userId:id }),
      true,
      '登录成功'
    )
  }
}
