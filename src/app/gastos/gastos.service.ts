import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gastos } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(private http: HttpClient) { }

  getGastos():Observable<Gastos[]>{
    return this.http.get<Gastos[]>('http://127.0.0.1:8000/gastos/list/');
  }
  getGastosPorId(id:number):Observable<Gastos>{
    return this.http.get<Gastos>( ` http://127.0.0.1:8000/gastos/${ id }`);
  }
  agregarGastos(gastos: Gastos):Observable<Gastos>{
    return this.http.post<Gastos>('http://127.0.0.1:8000/gastos/list/',gastos );
  }
  actualizarGastos(gasto: Gastos):Observable<Gastos>{
    return this.http.put<Gastos>(`http://127.0.0.1:8000/gastos/${gasto.id}`,gasto );
  }
  eliminarGastos(id: number):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/gastos/${id}` );
  }
}
