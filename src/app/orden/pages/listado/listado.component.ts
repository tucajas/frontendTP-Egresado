import { Component } from '@angular/core';
import { ServiciosService } from '../../servicios/servicios.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  dataSource:any;
  displayedColumns:string[]=['id','cliente'];
  
  constructor( private ordenes_service: ServiciosService ) { }
  ngOnInit(): void {

    this.ordenes_service.getOrdenes()
    .subscribe( (resp) => {this.dataSource = new  MatTableDataSource(resp);})
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
