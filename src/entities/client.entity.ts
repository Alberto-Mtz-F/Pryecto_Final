import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()  
export class Client{
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
}