import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DescuentoServiciosService } from '../servicios/descuento-servicios.service';
import { subscribeOn } from 'rxjs';
import { Descuento } from '../../interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  dataSource:any;
  displayedColumns:string[]=['id','titulo','desc','editar','ver'];

  constructor(private descuento:DescuentoServiciosService){}

  ngOnInit():void {
    this.descuento.getDescuento()
    .subscribe((resp)=>{this.dataSource = new MatTableDataSource(resp);} )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  borrar(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      // this.dataSource.splice(cod, 1);
      // this.dataSource.renderRows();
      console.log (cod+1)
    }
  }

}
