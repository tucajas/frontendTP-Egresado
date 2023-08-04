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
  descuentoEfectivo:number=0;
  //valores del option descuento por efectivo
  porcenDesc:number=0;
  porcentaje:number=0;

  total:number=0;
  


  precioVenta2:number=0;
  
  cantidad2:number=0;

  articulos:Articulo[]=[];
  servicio:TipoTrabajo[]=[];
  
  subtotalb1:number=0;
  subtotal2:number=0;
  subtotalb2:number=0;
  subtotal3:number=0;
  total2:number=0;
  totalfinal:number=0;

  porcentaje2:number=0;
  porcenDesc2:number=0;

  

  constructor( private articuloService: ArticuloService,private servicios: TipotrabajoService ) { }
  ngOnInit(): void {
    this.servicios.getTipoTrabajo().subscribe(resp=>this.servicio=resp);
    this.articuloService.getArticulo().subscribe( articulos => this.articulos=articulos);

  }
  efectivo(){
    this.porcentaje=(this.porcenDesc/100)*this.subtotal;
    this.total=this.subtotal-this.porcentaje;
  }
  tarjeta(){
    this.porcentaje2=(this.porcenDesc2/100)*this.subtotal;
    this.total=this.subtotal+this.porcentaje2;
  }




  tarjeta2(){
    this.subtotalb2=this.subtotalb1*25/100;
    this.total2=this.subtotalb1+this.subtotalb2;
  }
  efectivo2(){
    const porcenDesc=this.subtotalb1*80/100;
    this.subtotalb2=this.subtotalb1-porcenDesc;
    this.total2=this.subtotalb1-this.subtotalb2;
  }

  sumar(){
    
    this.subtotal=this.precioVenta*this.cantidad;
   
  }
  sumar2(){
    
    this.subtotalb1=this.precioVenta2*this.cantidad2;
   
  }
  
  calculofinal(){
    this.totalfinal=this.total+this.total2;
  }

  


}
