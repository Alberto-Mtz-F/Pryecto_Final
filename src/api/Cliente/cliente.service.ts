import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { IClient } from 'src/models/cliente.model';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Client) private clientEntity : Repository<Client>
    ){}

    async create(client: IClient){
        return await this.clientEntity.save(client)
    }

    getAll(){
        return this.clientEntity.find()
    }

    getReporte(){
        return this.clientEntity.find({
            relations: {
                consumo: {pago: true},
                
            },
        })
    }

    async getByID(id_cliente:number):Promise<string>{
        const clienteExiste = await this.clientEntity.findOne({where:{id: id_cliente}})
        if(!clienteExiste){
            console.error(`No he encontrado el producto con id ${id_cliente}`)
            return "1500-1-1"
           // throw new NotFoundException(`No he encontrado el producto con id ${id_cliente}`);
        }
        return (await this.clientEntity.findOne({where:{id: id_cliente}})).fecha_nacimiento
    }
    
}