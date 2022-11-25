import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pago } from 'src/entities/pago.entity';
import { IPago } from 'src/models/pago.model';
import { Repository } from 'typeorm';

@Injectable()
export class PagoService {
    constructor(
        @InjectRepository(Pago) private pagoEntity : Repository<Pago>
    ){}
     
    async create(pago: IPago){
        const total = 1 //Se calcula por a partir de la coneccion entre las tablas. 

        
        return await this.pagoEntity.insert({
            total: total ,
            id_consumo: pago.id_consumo,
            pagado: pago.pagado
        })
    }


    getAll(){
        return this.pagoEntity.find()
    }
}
