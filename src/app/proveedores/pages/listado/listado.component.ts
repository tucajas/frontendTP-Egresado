import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../proveedores.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  implements OnInit{


  dataSource:any;
  displayedColumns:string[]=['id','nombreDeEmpresa','direccion','telefono','editar','ver'];

  constructor( private proveedoresServices: ProveedoresService ) { }
  ngOnInit(): void {

    this.proveedoresServices.getProveedores()
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
