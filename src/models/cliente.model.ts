import { IsEmail, IsString, IsNumberString, IsDateString } from "class-validator";

export class IClient{
    @IsString()
    nombre: string;

    @IsEmail()
    correo: string;

    @IsNumberString()
    telefono: string;

    @IsString()
    domicilio: string;

    @IsDateString()
    fecha_nacimiento: string;
}


