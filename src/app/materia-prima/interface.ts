import { Proveedor } from "../proveedores/interface";

export interface MateriaPrima {
    id? : number;
    proveedor:string;
    precio: number;
    materia_prima: string;
    descripcion?:string;
}
