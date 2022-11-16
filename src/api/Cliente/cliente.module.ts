import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Client } from 'src/entities/client.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClienteService],
  controllers: [ClienteController],
  exports:[TypeOrmModule ]
})
export class ClienteModule {}
