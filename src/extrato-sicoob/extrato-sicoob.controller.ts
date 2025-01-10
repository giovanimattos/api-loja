import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExtratoSicoobService } from './extrato-sicoob.service';
import { CreateExtratoSicoobDto } from './dto/create-extrato-sicoob.dto';
import { UpdateExtratoSicoobDto } from './dto/update-extrato-sicoob.dto';

@Controller('extrato-sicoob')
export class ExtratoSicoobController {
  constructor(private readonly extratoSicoobService: ExtratoSicoobService) {}

  @Post()
  create(@Body() createExtratoSicoobDto: CreateExtratoSicoobDto) {
    return this.extratoSicoobService.create(createExtratoSicoobDto);
  }

  @Get()
  findAll() {
    return this.extratoSicoobService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.extratoSicoobService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExtratoSicoobDto: UpdateExtratoSicoobDto) {
    return this.extratoSicoobService.update(+id, updateExtratoSicoobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.extratoSicoobService.remove(+id);
  }
}
