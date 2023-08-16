import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http:HttpClient) { }

  getProveedores():Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>('http://127.0.0.1:8000/materiaPrima/proveedores/');
  }
  getProveedorPorId(id:string):Observable<Proveedor>{
    return this.http.get<Proveedor>( ` http://127.0.0.1:8000/proveedores/${ id }`);
  }

  agregarProveedor(proveedor: Proveedor):Observable<Proveedor>{
    return this.http.post<Proveedor>('http://127.0.0.1:8000/proveedores/list/',proveedor );
  }

  actualizarProveedor(proveedor: Proveedor):Observable<Proveedor>{
    return this.http.put<Proveedor>(`http://127.0.0.1:8000/proveedores/${proveedor.id}`,proveedor );
  }
  eliminarProveedor(id: number):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/proveedores/${id}` );
  }
    




}
