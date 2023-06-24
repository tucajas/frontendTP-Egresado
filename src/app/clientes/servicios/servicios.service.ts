import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }

  getCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://127.0.0.1:8000/cliente/list')
  }

}
