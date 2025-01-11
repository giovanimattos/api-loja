import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ContatoService {

    constructor(private readonly dataSource: DataSource) {}

    async findAll(): Promise<any> {
        const rawQuery = `
            select 
            x.*,
            DATE_FORMAT(cast(e.ecmdatadocto as datetime), '%d/%m/%Y %H:%i:%s') data_ult_venda, 
            FORMAT(e.ecmvnf, 2, 'pt_BR')  valor_ult_venda,
            DATE_FORMAT(cast(t.dtultimocontato as datetime), '%d/%m/%Y') data_ultimo_contato,
            false is_loading
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
            left join tj_pessoa_contato t on t.pescodigo = x.pescodigo
            where coalesce(t.ativo,1) = 1
            and cast(coalesce(t.dtultimocontato, '2000-01-01') as date) < DATE_SUB(current_date, INTERVAL 15 DAY)
            order by e.ecmdatadocto desc
        `;

        const result = await this.dataSource.query(rawQuery);
        return result;
    }

    async contatoFeito(dados) {
        let idPessoa = dados.pescodigo;
        const result = await this.dataSource.query(`
            INSERT INTO tj_pessoa_contato (pescodigo, dtultimocontato)
            VALUES (?, NOW())
            ON DUPLICATE KEY UPDATE
            dtultimocontato = NOW();
            `,
            [idPessoa] // Passa o valor do parâmetro
        );
        return result;
    }
}
