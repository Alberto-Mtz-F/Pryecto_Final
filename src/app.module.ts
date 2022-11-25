import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from './configs/DBConnection';
import { ClienteModule } from './api/Cliente/cliente.module';
import { ConsumoModule } from './api/consumo/consumo.module';
import { PagoModule } from './api/pago/pago.module';



@Module({
  imports: [Connection, ClienteModule, ConsumoModule, PagoModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
