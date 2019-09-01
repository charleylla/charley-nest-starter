import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseWrapper } from '../../interface/response-wrapper.interface'
import { BaseViewModel } from '../../common/base-view-model';

@Injectable()
export class ResponseWrapperInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseWrapper<any>> {
    return next.handle().pipe(
      map(data => {
        if(data instanceof BaseViewModel) return data;
        return {
          data,
          status:true,
          messsage:'',
        }
      })
    );
  }
}
