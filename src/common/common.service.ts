import { CallHandler, ExecutionContext, Injectable } from '@nestjs/common';
import { tap } from 'rxjs/operators';

@Injectable()
export class CommonLoggingInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const http = context.switchToHttp();
    const request = http.getRequest();
    console.log('Start...', request.route.path);

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`End Process... | ${Date.now() - now}ms`)));
  }
}
