
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
    return this.http.get<Cliente[]>('http://127.0.0.1:8000/clientes/list/')
  }

}
