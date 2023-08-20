import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orden } from '../orden/interface';

@Injectable({
  providedIn: 'root'
})
export class InformePedidosService {

  private apiUrl = '.http://127.0.0.1:8000/orden/list/';
  constructor(private http: HttpClient) {}
 
  getOrdenesEntreFechas(fechaInicio: Date, fechaFin: Date): Observable<Orden[]> {
    const parametros = {
      fechaInicio: fechaInicio.toISOString(),
      fechaFin: fechaFin.toISOString()
    };
  
    return this.http.get<Orden[]>(`${this.apiUrl}`, { params: parametros });
  }
}



