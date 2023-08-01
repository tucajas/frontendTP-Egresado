import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MateriaPrima } from '../materia-prima/interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonasService {

  constructor(private http:HttpClient) { }

  getMateriaPrima():Observable<MateriaPrima[]>{
    return this.http.get<MateriaPrima[]>('http://127.0.0.1:8000/materiaPrima/list/');
  }
  getMateriaPrimaDona(){
    return this.getMateriaPrima()
      .pipe(
        map(data=>{
             const labels= Object.keys(data);
             const values= Object.values(data);
             return {
              labels,values
             };
          }
        )
      )
  }



}
