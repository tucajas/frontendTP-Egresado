import { Component } from '@angular/core';
import { Articulo } from '../../interface';
import { ArticuloService } from '../../servicios/articulo.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  articulo: Articulo = {
    descripcion: '',
    stock: 0,
    precioCosto: 0,
    precioVenta: 0,
  }
  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
  }
  guardar(){
    if (this.articulo.descripcion.trim().length===0){
      return
    }
    this.articuloService.agregarArticulo(this.articulo).subscribe(resp=>{
      console.log('respuesta',resp)})
   
  }
}
