import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import * as path from 'path';
const projectEnv = process.env.NODE_ENV || 'development'

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(path.resolve(__dirname,`../../config/${projectEnv}.env`)),
    }
  ],
  exports: [ConfigService]
})
export class FrameworkModule {}
