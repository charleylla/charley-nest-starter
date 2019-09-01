import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { BaseDto } from '~framework/common/base-dto';

export class LoginDto {
  @ApiModelProperty({
    example:'john',
    description:'用户名'
  })
  @IsString()
  readonly username:string;

  @ApiModelProperty({
    example:'123456',
    description:'密码'
  })
  @IsString()
  readonly password:string;
}

export class LoginResponseDto extends BaseDto<string>{
  @ApiModelProperty({ description:'登录成功的 TOKEN' })
  data:'登录成功的 TOKEN'
}

