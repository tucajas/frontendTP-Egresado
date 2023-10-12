
import { Injectable } from '@angular/core';
import { Cliente } from '../interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  getCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>('https://tucajas.pythonanywhere.com/clientes/list/');
  }
  getClientePorId(id:string):Observable<Cliente>{
    return this.http.get<Cliente>( ` http://127.0.0.1:8000/clientes/${ id }`);
  }

  agregarCliente(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>('http://127.0.0.1:8000/clientes/list/',cliente );
  }

  actualizarCliente(cliente: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`http://127.0.0.1:8000/clientes/${cliente.id}`,cliente );
  }
  eliminarCliente(id: number):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/clientes/${id}` );
  }


}
