import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './framework/aop/filter/http-exception.filter';
import { ResponseWrapperInterceptor } from './framework/aop/interceptor/response-wrapper.interceptor';
import * as helmet from 'helmet';
// import * as csurf from 'csurf';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 异常处理
  app.useGlobalFilters(new HttpExceptionFilter())
  // 拦截器
  app.useGlobalInterceptors(new ResponseWrapperInterceptor())
  // 安全的 HTTP 头信息
  app.use(helmet());
  // 防 CSRF
  // app.use(csurf());
  // 压缩响应
  app.use(compression());

  await app.listen(3000);
}
bootstrap();
