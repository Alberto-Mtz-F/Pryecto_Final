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
    
    async getByID(id_cliente:number){
        const clienteExiste = await this.clientEntity.findOne({where:{id: id_cliente}})
        this.validarCliente(clienteExiste,id_cliente)
        return (await this.clientEntity.findOne({where:{id: id_cliente}}))
    }

    async getfechaNacimiento(id_cliente:number):Promise<string>{
        const clienteExiste = await this.clientEntity.findOne({where:{id: id_cliente}})
        if(!clienteExiste){
            console.error(`No se a encontrado el cliente con id ${id_cliente}`)
            return "1500-1-1"
        }
        return (await this.clientEntity.findOne({where:{id: id_cliente}})).fecha_nacimiento
    }

    getPago(){
        return this.clientEntity.find({
            relations: {
                consumo: {pago: true},
            },
            select: {
                id: true,
                nombre: true,
                correo: true,
                telefono: true,
                domicilio: true,
                fecha_nacimiento: true,
                consumo: {
                    id: true,
                    pago: true
                }
            }
        })
    }
    

    getPagado(){
        return this.clientEntity.find({
            relations: {
                consumo: {pago: true},
            },
            where: {consumo:{pago:{pagado: true}}},
            select: {
                id: true,
                nombre: true,
                correo: true,
                telefono: true,
                domicilio: true,
                fecha_nacimiento: true,
                consumo: {
                    id: true,
                    pago: true
                }
            }
        })
    }

    getNoPagado(){
        return this.clientEntity.find({
            relations: {
                consumo: {pago: true},
            },
            where: {consumo:{pago:{pagado: false}}},
            select: {
                id: true,
                nombre: true,
                correo: true,
                telefono: true,
                domicilio: true,
                fecha_nacimiento: true,
                consumo: {
                    id: true,
                    pago: true
                }
            }
            
        })
    }


    validarCliente(clienteExiste: Client, id_cliente:number){
        if(!clienteExiste){
            console.error(`No se a encontrado el cliente con id ${id_cliente}`)
        }
    }
}