import { Consumo } from './../entities/conusmo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { Pago } from 'src/entities/pago.entity';

export const Connection = TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) ,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Client, Consumo, Pago],
    synchronize: true,
})