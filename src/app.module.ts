import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { FrameworkModule } from './framework/framework.module';
import { BusinessModule } from './solution/business/business.module';
import { GatewayModule } from './solution/gateway/gateway.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'charley_blog',
      entities: [path.join(__dirname, '**/**.entity{.ts,.js}')],
      // synchronize: true,
    }),
    FrameworkModule, 
    BusinessModule,
    GatewayModule,
  ],
})
export class AppModule {}
