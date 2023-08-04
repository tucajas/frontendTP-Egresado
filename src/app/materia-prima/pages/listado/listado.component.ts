import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MateriaPrimaService } from '../../servicios/materia-prima.service';
import { Proveedor } from 'src/app/proveedores/interface';
import { ProveedoresService } from 'src/app/proveedores/proveedores.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  dataSource:any;
  displayedColumns:string[]=['id','descripcion','precioCosto','proveedor','editar','ver'];
  // proveedor: Proveedor[]=[];


  constructor( private materiaP: MateriaPrimaService,
              ) { }
  ngOnInit(): void {
    
    this.materiaP.getMateriaPrima().subscribe(resp=>{
    console.log('respuesta',resp)});
    
    this.materiaP.getMateriaPrima()
    .subscribe( (resp) => {this.dataSource = new  MatTableDataSource(resp);});
    // this.proveedorserv.getProveedores().subscribe(proveedor => this.proveedor=proveedor);
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
