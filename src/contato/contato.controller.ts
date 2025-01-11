import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContatoService } from './contato.service';

@Controller('contato')
export class ContatoController {
    
    constructor(private readonly contatoService: ContatoService) {}

    @Get()
    findAll() {
        return this.contatoService.findAll();
    }

    @Post('contato-feito')
    contatoFeito(@Body() body: any) {
        return this.contatoService.contatoFeito(body);
    }
}
