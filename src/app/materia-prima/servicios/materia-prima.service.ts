import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MateriaPrima } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class MateriaPrimaService {

  constructor(private http:HttpClient) { }

  getMateriaPrima():Observable<MateriaPrima[]>{
    return this.http.get<MateriaPrima[]>('http://127.0.0.1:8000/materiaPrima/proveedormateriaprima/');
  }
  getMateriaPrima2():Observable<MateriaPrima[]>{
    return this.http.get<MateriaPrima[]>('http://127.0.0.1:8000/materiaPrima/materias-primas/');
  }
  getMateriaPrimaPorId(id:string):Observable<MateriaPrima>{
    return this.http.get<MateriaPrima>( ` http://127.0.0.1:8000/materiaPrima/proveedormateriaprima/${ id }`);
  }

  agregarMateriaPrima(materiaPrima: MateriaPrima):Observable<MateriaPrima>{
    return this.http.post<MateriaPrima>('http://127.0.0.1:8000/materiaPrima/proveedormateriaprima/', materiaPrima );
  }
  actualizarMateriaPrima(materiaPrima: MateriaPrima):Observable<MateriaPrima>{
    return this.http.put<MateriaPrima>(`http://127.0.0.1:8000/materiaPrima/${materiaPrima.id}`, materiaPrima );
  }
  eliminarMateriaPrima(id: number):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/materiaPrima/${id}` );
  }
  

}
