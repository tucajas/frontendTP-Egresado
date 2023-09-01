import { Injectable } from '@angular/core';
import { matPrima } from './interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatPrimaService {

  constructor(private http:HttpClient) { }

  
  
  getmatPrima():Observable<matPrima[]>{
    return this.http.get<matPrima[]>('http://127.0.0.1:8000/materiaPrima/materias-primas/');
  }
  getmatPrimaPorId(id:string):Observable<matPrima>{
    return this.http.get<matPrima>( ` http://127.0.0.1:8000/materiaPrima/materias-primas/${ id }`);
  }

  agregarmatPrima(matPrima: matPrima):Observable<matPrima>{
    return this.http.post<matPrima>('http://127.0.0.1:8000/materiaPrima/materias-primas/', matPrima );
  }
  actualizarmatPrima(matPrima: matPrima):Observable<matPrima>{
    return this.http.put<matPrima>(`http://127.0.0.1:8000/materiaPrima/${matPrima.id}`, matPrima );
  }
  eliminarmatPrima(id: number):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/materiaPrima/materias-primas/${id}` );
  }






}
