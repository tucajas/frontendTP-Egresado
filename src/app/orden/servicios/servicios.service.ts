import { Injectable } from '@angular/core';
import { Orden } from '../interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  

  constructor(private http: HttpClient) { }
  
  getOrdenes():Observable<Orden[]>{
    return this.http.get<Orden[]>('http://127.0.0.1:8000/orden/list/')
  }
  // estoy agregando list a getordenporid para modificar la ruta
  getOrdenesPorId(id:string):Observable<Orden>{
    return this.http.get<Orden>( ` http://127.0.0.1:8000/orden/${ id }`);
  }

  agregarOrden(orden: Orden):Observable<Orden>{
    return this.http.post<Orden>('http://127.0.0.1:8000/orden/list/',orden );
  }

  actualizarOrden(orden: Orden):Observable<Orden>{
    return this.http.put<Orden>(`http://127.0.0.1:8000/orden/${orden.id}`,orden );
  }
  eliminarOrden(id: number):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/orden/${id}` );
  }
}
