import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Consumo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;

    @Column()
    consumo: number;

    @Column()
    id_Cliete: number;
}