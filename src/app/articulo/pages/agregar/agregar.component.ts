import { Component } from '@angular/core';
import { Articulo } from '../../interface';
import { ArticuloService } from '../../servicios/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
  constructor(private articuloService: ArticuloService,
              private activateroute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activateroute.params.pipe(switchMap(({id})=>this.articuloService.getArticuloPorId(id))
      ).subscribe(articulo =>this.articulo=articulo);
  }
  guardar(){
    if (this.articulo.descripcion.trim().length===0){
      return
    }
    // actualizar
    if (this.articulo.id){
      this.articuloService.actualizarArticulo( this.articulo )
        .subscribe( articulo => console.log ( 'actualizando', articulo ))
    }else{
    // crear
      this.articuloService.agregarArticulo(this.articulo)
        .subscribe(resp=>{
        console.log('respuesta',resp);
      })
   }
  }
  borrar(){
    this.articuloService.eliminarArticulo(this.articulo.id!)
     .subscribe( resp =>{

       this.router.navigate(['articulo/listado']);
     });
  }
}