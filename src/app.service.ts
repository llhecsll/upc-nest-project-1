import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Mundo!';
  }
  getHello2(): string {
    return 'Hello World!';
  }
}
