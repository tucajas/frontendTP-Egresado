export interface Orden{
    id?: number;
    cliente: string;
    tipoTrabajo: string;
    materiaPrima: string;
    cantidad: number;
    precio:number;
    fechaEntrega:string;
    detalle:string;
    estado:string;
}