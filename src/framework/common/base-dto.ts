import { ApiModelProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsEmpty, IsNumber } from 'class-validator';


export class BaseDto<T=string> {
  @ApiModelProperty({ description: '请求状态',})
  @IsBoolean()
  readonly status:true;

  @ApiModelProperty({ description: '提示消息',})
  @IsString()
  readonly message:string;

  @ApiModelProperty({ description:'返回数据' })
  data:T
}

export class BasePagerDto {
  @ApiModelProperty({
    example:1,
    description:'当前页码',
    default:1
  })
  @IsEmpty()
  @IsNumber()
  readonly page:number;

  @ApiModelProperty({
    example:10,
    description:'每页显示的数量',
    default:10
  })
  @IsEmpty()
  @IsNumber()
  readonly size:number;
}