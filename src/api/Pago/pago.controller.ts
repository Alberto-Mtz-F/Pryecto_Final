import { IPago } from './../../models/pago.model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PagoService } from './pago.service';

@Controller('pago')
export class PagoController {
    constructor(private pagoService: PagoService){}

    /*@Post()
    Create(@Body() params: IPago): boolean {
       
        try {
            this.pagoService.create(params)
            return true
        } catch (error) {
            console.log({error})
        }
         
    }*/noPagado

    @Get('/all')
    getClient(){
        return this.pagoService.getAll()
    }

    @Get('/pagado')
    getClientPagado(){
        return this.pagoService.getPagado()
    }

    @Get('/noPagado')
    getClientNoPagado(){
        return this.pagoService.getNoPagado()
    }
}
