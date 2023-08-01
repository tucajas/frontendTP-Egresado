import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from 'src/app/articulo/interface';
import { ArticuloService } from 'src/app/articulo/servicios/articulo.service';
import { TipoTrabajo } from 'src/app/tipotrabajo/interface';
import { TipotrabajoService } from 'src/app/tipotrabajo/tipotrabajo.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  precioVenta:number=0;
  
  cantidad:number=0;

  subtotal:number=0;
  articulos:Articulo[]=[];
  servicio:TipoTrabajo[]=[];
  subtotal2:number=0;
  subtotal3:number=0;
  total:number=0;

  

  constructor( private articuloService: ArticuloService,private servicios: TipotrabajoService ) { }
  ngOnInit(): void {
    this.servicios.getTipoTrabajo().subscribe(resp=>this.servicio=resp);
    this.articuloService.getArticulo().subscribe( articulos => this.articulos=articulos);

  }
  tarjeta(){
    this.subtotal2=this.subtotal*25/100;
    this.total=this.subtotal+this.subtotal2;
  }
  efectivo(){
    const porcenDesc=this.subtotal*80/100;
    this.subtotal2=this.subtotal-porcenDesc;
    this.total=this.subtotal-this.subtotal2;
  }
  sumar(){
    
    this.subtotal=this.precioVenta*this.cantidad;
   
  }
  

  


}
