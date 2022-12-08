import { ClienteService } from './../Cliente/cliente.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PagoController } from './pago.controller';
import { PagoService } from './pago.service';
import { Pago } from 'src/entities/pago.entity';
import { Client } from 'src/entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pago,Client])],
providers: [PagoService, ClienteService],
  controllers: [PagoController],
  exports:[]
})
export class PagoModule {}
