import { Consumo } from './../entities/conusmo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { Pago } from 'src/entities/pago.entity';

export const Connection = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'proyecto_BD',
    entities: [Client, Consumo, Pago],
    synchronize: true,
})