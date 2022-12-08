import { PagoService } from './../Pago/pago.service';
import { ConsumoService } from './../Consumo/consumo.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Client } from 'src/entities/client.entity';
import { Consumo } from 'src/entities/conusmo.entity';
import { Pago } from 'src/entities/pago.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Client,Consumo, Pago])],
  providers: [ClienteService, ConsumoService, PagoService],
  controllers: [ClienteController],
  exports:[ ]
})
export class ClienteModule {}
