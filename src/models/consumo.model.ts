import { IPago } from 'src/models/pago.model';
export interface IConsumo{
    consumo: number;
    id_cliente: number;
    pagado: boolean;
}