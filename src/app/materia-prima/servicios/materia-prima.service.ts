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
    return this.http.get<MateriaPrima[]>('http://127.0.0.1:8000/materiaPrima/list/')
  }

}
