import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(private http: HttpClient) { }


  // agregarArticulo(articulo: Articulo):Observable<Articulo>{
  //   return this.http.post<Articulo>('http://127.0.0.1:8000/articulo/list/',articulo );
  // }



}
