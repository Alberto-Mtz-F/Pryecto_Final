import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PagoController } from './pago.controller';
import { PagoService } from './pago.service';
import { Pago } from 'src/entities/pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pago])],
  providers: [PagoService],
  controllers: [PagoController],
  exports:[]
})
export class PagoModule {}
