import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  getArticulo():Observable<Articulo[]>{
    return this.http.get<Articulo[]>('http://127.0.0.1:8000/articulo/list/')
  }
  agregarArticulo(articulo: Articulo):Observable<Articulo>{
    return this.http.post<Articulo>('http://127.0.0.1:8000/articulo/list/',articulo );
  }



}
