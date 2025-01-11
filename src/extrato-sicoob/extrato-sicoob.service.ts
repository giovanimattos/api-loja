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
      select 
        x.*,
        DATE_FORMAT(cast(e.ecmdatadocto as datetime), '%d/%m/%Y %H:%i:%s') data_ult_venda,
        FORMAT(e.ecmvnf, 2, 'pt_BR')  valor_ult_venda  
      from (
        select 
            pessoa.pescodigo, 
            pessoa.pesnomerazao, 
            max(e.ecmcodigo) ecmcodigo,
            count(e.ecmcodigo) qtdevendas
          from ecommerce e 
          left join pessoa on pessoa.pescodigo = e.ecmpessoa 
          left join notific_venda v on v.ecmcodigo = e.ecmcodigo 
          where e.ecmorigem in (3,8) 
            and e.ecmvnf is not null 
            and e.ecmstatus = "F" 
            /*and cast(e.ecmdatadocto as date) >= current_date-10*/
          group by pessoa.pescodigo, pessoa.pesnomerazao
      ) x 
      left join ecommerce e on e.ecmcodigo = x.ecmcodigo
      order by e.ecmdatadocto desc
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
