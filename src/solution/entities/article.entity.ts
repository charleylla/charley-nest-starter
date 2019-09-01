import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity({ name:'t_blog' })
export class ArticleListEntity {
  @PrimaryColumn()
  @ApiModelProperty({ description:'文章 ID' })
  id:number;

  @ApiModelProperty({ description:'文章标题' })
  @Column()
  title: string;

  @ApiModelProperty({ description:'文章内容' })
  @Column()
  content: string;

  @ApiModelProperty({ description:'最后修改时间' })
  @Column()
  updateTime: string;

  @ApiModelProperty({ description:'创建时间' })
  @Column()
  createTime: number;
}
