import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pago{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column()
    pagado: boolean

    @Column()
    id_consumo: number;
}