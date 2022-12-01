import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from './configs/DBConnection';
import { ClienteModule } from './api/Cliente/cliente.module';
import { ConsumoModule } from './api/consumo/consumo.module';
import { PagoModule } from './api/pago/pago.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'docker' ? '.env' : '.env.local'
  }),Connection, ClienteModule, ConsumoModule, PagoModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
