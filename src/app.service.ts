import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello() {
    return { 
      title: 'Traje Amor - CRM',
      message: 'Olá do NestJS com Handlebars!'
    };
  }
}

