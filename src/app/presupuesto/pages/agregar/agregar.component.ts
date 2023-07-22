import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from 'src/app/articulo/interface';
import { ArticuloService } from 'src/app/articulo/servicios/articulo.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  precioVenta:number=0;
  precioVenta2:number=0;
  cantidad:number=0;
  cantidad2:number=0;
  subtotal:number=0;
  articulos:Articulo[]=[];
  subtotal2:number=0;
  subtotal3:number=0;
  total:number=0;

  

  constructor( private articuloService: ArticuloService ) { }
  ngOnInit(): void {

    this.articuloService.getArticulo()
    .subscribe( articulos => this.articulos=articulos);

  }
  
  sumar(){
    this.subtotal=this.precioVenta*this.cantidad;
    this.subtotal2=this.precioVenta2*this.cantidad2;
    this.total=this.subtotal+this.subtotal2;
  }
  

  


}
