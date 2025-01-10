import { PartialType } from '@nestjs/mapped-types';
import { CreateExtratoSicoobDto } from './create-extrato-sicoob.dto';

export class UpdateExtratoSicoobDto extends PartialType(CreateExtratoSicoobDto) {}
