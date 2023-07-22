import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MateriaPrimaService } from '../../servicios/materia-prima.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  dataSource:any;
  displayedColumns:string[]=['id','nombre'];

  constructor( private materiaP: MateriaPrimaService ) { }
  ngOnInit(): void {

    this.materiaP.getMateriaPrima()
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
