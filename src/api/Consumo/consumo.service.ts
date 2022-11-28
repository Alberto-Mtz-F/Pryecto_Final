import { ClienteService } from './../Cliente/cliente.service';
import { PagoService } from './../Pago/pago.service';
import { Consumo } from './../../entities/conusmo.entity';
import { Injectable, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IConsumo } from 'src/models/consumo.model';
@Injectable()
export class ConsumoService {
    constructor(
        @InjectRepository(Consumo) private consumoEntity : Repository<Consumo>,
        private pagoService : PagoService,
        private clienteService:ClienteService
    ){}
     
    async create(consumo: IConsumo){
        const date = new Date;
        let total = 0;
        let pago = consumo.pagado;
        let fecha = new Date("2001-10-16")
        let edad = this.getEdad(fecha)
        console.log(edad)

        if (consumo.consumo > 1 && consumo.consumo < 101) {
            total = consumo.consumo * 150;
        }else if (consumo.consumo > 101 && consumo.consumo < 301) {
            total = consumo.consumo * 170;
        } else {
            total = consumo.consumo * 190;
        }

        if (edad > 50 ){
            total = total - (total * .10)
        }
        const response = await this.consumoEntity.save({
            fecha: date ,
            consumo: consumo.consumo,
            id_Cliente : consumo.id_cliente
        })
        

        return await this.pagoService.create(response.id, total, pago)
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

    getEdad(date: Date) {
        let hoy = new Date()
        let fechaNacimiento = new Date(date)
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if (
          diferenciaMeses < 0 ||
          (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
          edad--
        }
        return edad
    }
}
