import { IClient } from './../../models/cliente.model';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    constructor(private clientService: ClienteService){}

    @Post()
    Create(@Body() params: IClient): boolean {
       
        try {
            this.clientService.create(params)
            return true
        } catch (error) {
            console.log({error})
        }
         
    }

    @Get('/all')
    getClient(){
        return this.clientService.getAll()
    }

    @Get('/byID')
    get(@Body() params: number){
        this.clientService.getByID(params)
    }

}
