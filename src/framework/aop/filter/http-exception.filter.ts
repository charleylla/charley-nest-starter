import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    let 
      // 上下文
      ctx,
      // 响应对象
      response,
      // 请求对象
      request,
      // 默认错误码
      status = HttpStatus.INTERNAL_SERVER_ERROR,
      // 默认错误提示
      description:any = "Internal Server Error";
    try{
      description =  exception.message;
      ctx = host.switchToHttp();
      response = ctx.getResponse();
      request = ctx.getRequest();
      status = exception.getStatus();
    }catch(e){
      console.log(e)
    }finally{
      response
        .status(status)
        .json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          status:false,
          path: request.url,
          description
        });
    }
  }
}
