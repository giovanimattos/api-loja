import { Module } from '@nestjs/common';
import { ExtratoSicoobService } from './extrato-sicoob.service';
import { ExtratoSicoobController } from './extrato-sicoob.controller';

@Module({
  controllers: [ExtratoSicoobController],
  providers: [ExtratoSicoobService],
})
export class ExtratoSicoobModule {}
