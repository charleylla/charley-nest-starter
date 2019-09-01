import { Controller, Get, Param, HttpStatus, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { TestValidationDto, GetArticleListDto, GetArticleListResponseDto } from '~dto/article.dto';
import { 
  ApiUseTags,
  ApiOperation, 
  ApiResponse
} from '@nestjs/swagger';

@ApiUseTags('文章/发帖模块')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService:ArticlesService){}

  @ApiOperation({ title: '帖子列表' })  
  @Get()
  @ApiResponse({ 
    status: HttpStatus.UNAUTHORIZED,
    description: 'UNAUTHORIZED',
    type:GetArticleListResponseDto 
  })
  getArticleList(@Body() params:GetArticleListDto){
    return this.articlesService.getArticleList();
  }

  @ApiOperation({ title: '测试参数验证' })  
  @Get("/testValidation/:id")
  testValidation(@Param() id:TestValidationDto){
    console.log(id)
  }
}
