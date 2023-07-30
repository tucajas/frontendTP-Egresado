import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoTrabajo } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipotrabajoService {

  constructor(private http:HttpClient) { }

  getTipoTrabajo():Observable<TipoTrabajo[]>{
    return this.http.get<TipoTrabajo[]>('http://127.0.0.1:8000/tipoTrabajo/list/');
  }
  getTipoTrabajoPorId(id:string):Observable<TipoTrabajo>{
    return this.http.get<TipoTrabajo>( `http://127.0.0.1:8000/tipoTrabajo/${ id }`);
  }

  agregarTipoTrabajo(tipoTrabajo: TipoTrabajo):Observable<TipoTrabajo>{
    return this.http.post<TipoTrabajo>('http://127.0.0.1:8000/tipoTrabajo/list/',tipoTrabajo );
  }

  actualizarTipoTrabajo(tipoTrabajo: TipoTrabajo):Observable<TipoTrabajo>{
    return this.http.put<TipoTrabajo>(`http://127.0.0.1:8000/tipoTrabajo/${tipoTrabajo.id}`,tipoTrabajo );
  }
  eliminarTipoTrabajo(id: number):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/tipoTrabajo/${id}` );
  }








}
