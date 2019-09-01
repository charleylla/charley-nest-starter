import { IsNumberString, IsNumber, IsEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDto, BasePagerDto } from '~framework/common/base-dto';
import { ArticleListEntity } from '~solution/entities/article.entity';

export class TestValidationDto {
  @IsNumberString({ message:'id 格式错误' })
  readonly id:number
}

export class GetArticleListDto extends BasePagerDto{

}

export class GetArticleListResponseDto extends BaseDto<ArticleListEntity>{
  @ApiModelProperty({
    example:100,
    description:'总条数'
  })
  total:number

  @ApiModelProperty({
    description:'列表数据'
  })
  data:ArticleListEntity
}