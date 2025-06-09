import { Module } from '@nestjs/common';
import { CommonLoggingInterceptor } from './common.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CommonLoggingInterceptor,
    },
  ],
})
export class CommonModule {}
