import { IsNumber, IsBoolean } from "class-validator";

export class IConsumo{
    @IsNumber()
    consumo: number;

    @IsNumber()
    id_cliente: number;

    @IsBoolean()
    pagado: boolean;
}