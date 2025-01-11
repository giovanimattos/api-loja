import { Module } from '@nestjs/common';
import { ContatoController } from './contato.controller';
import { ContatoService } from './contato.service';

@Module({
  imports: [], // Se necessário, adicione módulos aqui
  controllers: [ContatoController],
  providers: [ContatoService], // Registre o serviço aqui
})
export class ContatoModule {}

