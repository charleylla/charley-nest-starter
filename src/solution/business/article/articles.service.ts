import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  getArticleList(){
    return [
      { title:'A' },
      { title:'B' },
      { title:'C' },
    ]
  }
}
