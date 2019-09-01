import { IsNumberString } from 'class-validator';

export class TestValidationDto {
  @IsNumberString({ message:'id 格式错误' })
  readonly id:number
}