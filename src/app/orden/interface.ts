export interface Orden{
    id?: number;
    cliente: string;
    tipoTrabajo: string;
    materiaPrima: string;
    cantidad: number;
    fecha_creacion:string;
    fechaEntrega:string;
    antiguedad: number;
    detalle:string;
    estado:string;
    prioridad:string;
    borrado: boolean;
}