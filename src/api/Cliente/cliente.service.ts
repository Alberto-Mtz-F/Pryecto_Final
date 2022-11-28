import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { IClient } from 'src/models/cliente.model';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Client) private clientEntity : Repository<Client>
    ){}
    private readonly Clientes: Client[] = []

    async create(client: IClient){
        return await this.clientEntity.save(client)
    }

    getAll(){
        return this.clientEntity.find()
    }
    
}
