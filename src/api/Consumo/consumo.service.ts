import { Consumo } from './../../entities/conusmo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IConsumo } from 'src/models/consumo.model';

@Injectable()
export class ConsumoService {
    constructor(
        @InjectRepository(Consumo) private consumoEntity : Repository<Consumo>
    ){}
     
    async create(consumo: IConsumo){
        const date = new Date;

        
        return await this.consumoEntity.insert({
            fecha: date ,
            id_Cliete: consumo.id_cliente,
            consumo: consumo.consumo
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
