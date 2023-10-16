
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
    return this.http.get<Cliente>( ` https://tucajas.pythonanywhere.com/clientes/${ id }`);
  }

  agregarCliente(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>('https://tucajas.pythonanywhere.com/clientes/list/',cliente );
  }

  actualizarCliente(cliente: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`https://tucajas.pythonanywhere.com/clientes/${cliente.id}`,cliente );
  }
  eliminarCliente(id: number):Observable<any>{
    return this.http.delete<any>(`https://tucajas.pythonanywhere.com/clientes/${id}` );
  }


}
