import { ClienteService } from './../Cliente/cliente.service';
import { PagoService } from './../Pago/pago.service';
import { Pago } from 'src/entities/pago.entity';
import { Client } from './../../entities/client.entity';
import { ConsumoController } from './consumo.controller';
import { Consumo } from './../../entities/conusmo.entity';
import { Module } from '@nestjs/common';
import { ConsumoService } from './consumo.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Consumo,Client,Pago])],
  providers: [ConsumoService,PagoService, ClienteService],
  controllers: [ConsumoController],
  exports:[] 
})
export class ConsumoModule {}
