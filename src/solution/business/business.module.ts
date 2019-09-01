import { Module } from '@nestjs/common';
import { GatewayModule } from '../gateway/gateway.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ArticlesController } from './article/articles.controller';
import { ArticlesService } from './article/articles.service';

@Module({
  imports: [GatewayModule],
  controllers: [
    UserController,
    ArticlesController
  ],
  providers: [
    UserService,
    ArticlesService
  ],
})
export class BusinessModule {}
