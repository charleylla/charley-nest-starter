import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import * as path from 'path';
const projectEnv = process.env.NODE_ENV || 'development';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: any };

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath))
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  // mysql 配置
  forMySQL(config){
    const { 
      MYSQL_HOST,
      MYSQL_PORT,
      MYSQL_USER_NAME,
      MYSQL_USER_PASSWORD,
      MYSQL_DATABASE
    } = this.envConfig;

    const { entities } = config;

    return {
      type: 'mysql' as any,
      host: MYSQL_HOST,
      port: MYSQL_PORT || 3306,
      username: MYSQL_USER_NAME,
      password: MYSQL_USER_PASSWORD,
      database: MYSQL_DATABASE,
      entities
    }
  }

  // JWT 配置
  forJWT(){
    const { 
      JWT_SECRET,
      JWT_EXPIRES_TIME,
    } = this.envConfig;
    return {
      secret:JWT_SECRET,
      signOptions: {
        expiresIn: JWT_EXPIRES_TIME,
      },
    }
  }
}

export const configService = new ConfigService(path.resolve(__dirname,`../../../config/${projectEnv}.env`))