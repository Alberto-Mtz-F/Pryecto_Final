import { ConsumoController } from './consumo.controller';
import { Consumo } from './../../entities/conusmo.entity';
import { Module } from '@nestjs/common';
import { ConsumoService } from './consumo.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Consumo])],
  providers: [ConsumoService],
  controllers: [ConsumoController],
  exports:[]
})
export class ConsumoModule {}
