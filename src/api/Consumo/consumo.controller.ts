import { Body, Controller, Post, Get } from '@nestjs/common';
import { IConsumo } from 'src/models/consumo.model';
import { ConsumoService } from './consumo.service';

@Controller('consumo')
export class ConsumoController {
    constructor(private consumoService: ConsumoService){}

    @Post()
    Create(@Body() params: IConsumo): boolean {
       
        try {
            this.consumoService.create(params)
            return true
        } catch (error) {
            console.log({error})
        }
         
    }

    @Get('/all')
    getClient(){
        return this.consumoService.getAll()
    }

    @Get('/maxConsumo')
    getMaxConsumo(){
        return this.consumoService.getMaxConsumo()
    }

    @Get('/minConsumo')
    getMinConsumo(){
        return this.consumoService.getMinConsumo()
    }

    @Get('/Reporte')
    getReportePCLiente(){
        return this.consumoService.getReporte()
    }
}
