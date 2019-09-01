import { Controller, Get, Param } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { TestValidationDto } from '~dto/article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService:ArticlesService){}
  @Get()
  getArticleList(){
    return this.articlesService.getArticleList();
  }

  @Get("/testValidation/:id")
  testValidation(@Param() id:TestValidationDto){
    console.log(id)
  }
}
