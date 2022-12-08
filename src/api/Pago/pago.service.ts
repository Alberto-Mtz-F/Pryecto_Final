import { ClienteService } from './../Cliente/cliente.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pago } from 'src/entities/pago.entity';
import { Repository  } from 'typeorm';

@Injectable()
export class PagoService {
    constructor(
        @InjectRepository(Pago) private pagoEntity : Repository<Pago>,
        private clinteServicio: ClienteService,
    ){}
     
    async create(id: number, total : number, pagado: boolean){
        
        return await this.pagoEntity.save({
            total: total ,
            id_Consumo: id,
            pagado: pagado
        })
    }


    getAll(){
        return this.clinteServicio.getPago()
        
    }

    getPagado(){
        return this.clinteServicio.getPagado()
    }

    getNoPagado(){
        return this.clinteServicio.getNoPagado()
    }
}
