import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { log } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Index
  @Get()
  getProduct(){
    return this.appService.index();
  }

  //Create
  @Post()
  createProduct(@Body() jsonRequest : Request ){
    return this.appService.create(jsonRequest);
  }

  //Show
  @Get(':id')
  showProduct(@Param('id') id: string ){
    console.log(id);
    return this.appService.show(id);

  }





}
