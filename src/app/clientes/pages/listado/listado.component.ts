import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from '../../servicios/clientes_service';





@Component({
  selector: 'app-lista',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {



  dataSource:any;
  displayedColumns:string[]=['id','nombre','apellido','direccion','telefono','cuenta corriente','editar','ver'];

  constructor( private clientes_service: ClientesService ) { }
  ngOnInit(): void {

    this.clientes_service.getCliente()
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
