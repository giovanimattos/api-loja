import { Injectable } from '@nestjs/common';
import { CreateExtratoSicoobDto } from './dto/create-extrato-sicoob.dto';
import { UpdateExtratoSicoobDto } from './dto/update-extrato-sicoob.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class ExtratoSicoobService {

  constructor(private readonly dataSource: DataSource) {}

  create(createExtratoSicoobDto: CreateExtratoSicoobDto) {
    return 'This action adds a new extratoSicoob';
  }

  async findAll(): Promise<any> {
    const rawQuery = `
      SELECT 
        pescodigo, pesnomerazao
      FROM pessoa 
      limit 10
    `;

    const result = await this.dataSource.query(rawQuery);
    return result;
  }

  // findAll() {
  //   return `This action returns all extratoSicoob`;
  // }

  findOne(id: number) {
    return `This action returns a #${id} extratoSicoob`;
  }
  

  update(id: number, updateExtratoSicoobDto: UpdateExtratoSicoobDto) {
    return `This action updates a #${id} extratoSicoob`;
  }

  remove(id: number) {
    return `This action removes a #${id} extratoSicoob`;
  }
}
