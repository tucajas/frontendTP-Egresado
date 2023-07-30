import { Component } from '@angular/core';
import { ArticuloService } from '../../servicios/articulo.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {


  dataSource:any;
  displayedColumns:string[]=['id','descripcion','stock','precioCosto','precioVenta','editar','ver'];

  constructor( private articuloService: ArticuloService ) { }
  ngOnInit(): void {

    this.articuloService.getArticulo()
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
