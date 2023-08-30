import { Injectable } from '@angular/core';
import { Orden } from '../interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  

  constructor(private http: HttpClient) { }
  
  // listar orden esta ok
  getOrdenes():Observable<Orden[]>{
    return this.http.get<Orden[]>('http://127.0.0.1:8000/orden/list/')
  }
  // ver mas en orden esta ok
  getOrdenesPorId(id:string):Observable<Orden>{
    return this.http.get<Orden>( ` http://127.0.0.1:8000/orden/${ id }`);
  }

  agregarOrden(orden: Orden):Observable<Orden>{
    return this.http.post<Orden>('http://127.0.0.1:8000/orden/list/',orden );
  }

  // actualizar esta ok
  actualizarOrden(orden: Orden):Observable<Orden>{
    return this.http.put<Orden>(`http://127.0.0.1:8000/orden/${orden.id}`,orden );
  }

  actualizarEstado(ordenId: number, nuevoEstado: string) {
    // Realiza la llamada a la API o la base de datos para actualizar el estado
    const url = `http://127.0.0.1:8000/orden/${ordenId}`;
    const body = { estado: nuevoEstado };

    return this.http.put(url, body); // Suponiendo que la API utiliza el método PUT
  }



  
  eliminarOrden(id: number):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/orden/${id}` );
  }
}
