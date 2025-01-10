import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello() {
    return { 
      title: 'Vue.js com NestJS',
      message: 'Olá do NestJS com Handlebars!'
    };
  }
}

