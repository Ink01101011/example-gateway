import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('EXAMPLE_MICROSERVICES') private readonly userServiceClient: ClientProxy,
  ) {}

  @Get('users')
  getUsers(): Observable<any> {
    // this returns an Observable to the client
    return this.userServiceClient.send({ cmd: 'get_users' }, {});
  }
}
