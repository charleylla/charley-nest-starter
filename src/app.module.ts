import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { FrameworkModule } from './framework/framework.module';
import { BusinessModule } from './solution/business/business.module';
import { GatewayModule } from './solution/gateway/gateway.module';
import { configService } from './framework/config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      configService.forMySQL({
        entities:[path.join(__dirname, '**/**.entity{.ts,.js}')]
      })
    ),
    FrameworkModule, 
    BusinessModule,
    GatewayModule,
  ],
})
export class AppModule {}
