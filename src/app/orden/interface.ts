export interface Orden{
    id?: number;
    cliente: string;
    tipoTrabajo: string;
    materiaPrima: string;
    cantidad: number;
    fechaEntrega:string;
    antiguedad: number;
    detalle:string;
    estado:string;
    prioridad:string;
}