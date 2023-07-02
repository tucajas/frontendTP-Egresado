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
}
