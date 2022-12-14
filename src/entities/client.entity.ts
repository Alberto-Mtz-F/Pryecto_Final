import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Consumo } from './conusmo.entity';

@Entity()  
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    telefono: string;

    @Column()
    domicilio: string;

    @Column()
    fecha_nacimiento: string;

    @OneToMany(() => Consumo, (consumo) => consumo.id_Cliente )
    consumo: Consumo[];
}