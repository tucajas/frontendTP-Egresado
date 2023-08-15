import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Descuento } from '../../interface';


@Injectable({
  providedIn: 'root'
})
export class DescuentoServiciosService {

  constructor(private http: HttpClient) { }

  getDescuento():Observable<Descuento[]>{
    return this.http.get<Descuento[]>('http://127.0.0.1:8000/porcentaje/list');
  }
  getDescuentoPorId(id:number):Observable<Descuento>{
    return this.http.get<Descuento>( ` http://127.0.0.1:8000/porcentaje/${ id }`);
  }
  agregarDescuento(descuento:Descuento):Observable<Descuento>{
    return this.http.post<Descuento>('http://127.0.0.1:8000/porcentaje/list/',descuento);
  }
  actualizarDescuento(descuento: Descuento):Observable<Descuento>{
    return this.http.put<Descuento>(`http://127.0.0.1:8000/porcentaje/${descuento.id}`,descuento );
  }
  eliminarDescuento(id: number):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/porcentaje/${id}` );
  }





}
