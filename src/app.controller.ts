import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('producto')
  getHello1(): string {
    return this.appService.getHello();
  }
  @Post('producto')
  getHello2(): string {
    return this.appService.getHello2();
  }
}
