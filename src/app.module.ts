import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from './configs/DBConnection';
import { ClienteModule } from './api/Cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';
import { ConsumoModule } from './api/Consumo/consumo.module';
import { PagoModule } from './api/Pago/pago.module';



@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'docker' ? '.env' : '.env.local'
  }),Connection, ClienteModule, ConsumoModule, PagoModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
