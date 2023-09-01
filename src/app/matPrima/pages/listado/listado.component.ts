import { Component, OnInit } from '@angular/core';
import { MatPrimaService } from '../../mat-prima.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  dataSource:any;
  displayedColumns:string[]=['id','descripcion','editar','ver'];
  
  constructor( private matPrima: MatPrimaService ) { }
  ngOnInit(): void {

    this.matPrima.getmatPrima().subscribe(resp=>{console.log('respuesta',resp)});

    this.matPrima.getmatPrima().subscribe( (resp) => {this.dataSource = new  MatTableDataSource(resp)});

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



