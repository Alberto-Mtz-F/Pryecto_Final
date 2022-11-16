import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';

export const Connection = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'proyecto_BD',
    entities: [Client],
    synchronize: true
})