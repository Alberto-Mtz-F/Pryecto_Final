import { Consumo } from './../../entities/conusmo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IConsumo } from 'src/models/consumo.model';
import { Client } from 'src/entities/client.entity';

@Injectable()
export class ConsumoService {
    constructor(
        @InjectRepository(Consumo) private consumoEntity : Repository<Consumo>
    ){}
     
    async create(consumo: IConsumo){
        const date = new Date;
        
        return await this.consumoEntity.save({
            fecha: date ,
            consumo: consumo.consumo,
            id_Cliente : consumo.id_cliente
        })
    }


    getAll(){
        return this.consumoEntity.find()
    }

    getMaxConsumo(){
        return this.consumoEntity.find()
    }

    getMinConsumo(){
        return this.consumoEntity.find()
    }
}
