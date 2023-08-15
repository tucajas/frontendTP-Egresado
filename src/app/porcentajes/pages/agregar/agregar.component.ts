import { Component } from '@angular/core';
import { Descuento } from '../../interface';
import { DescuentoServiciosService } from '../servicios/descuento-servicios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  descuento: Descuento = {
    titulo: '',
    desc: 0,
  }
  constructor(private descuentoService:DescuentoServiciosService,
              private router: Router,
              private activateroute: ActivatedRoute ){}
  
  // con esto verifico que tiene una id apenas carga y asi determinar si es actualizar o agregar
  ngOnInit(): void {
     this.activateroute.params.pipe(switchMap(({id})=>this.descuentoService.getDescuentoPorId(id))
        ).subscribe(descuento =>this.descuento=descuento);
  }

  guardar(){
    
    if (this.descuento.titulo.trim().length===0){
      return
    }
    // actualizar
    if (this.descuento.id){
      this.descuentoService.actualizarDescuento( this.descuento )
        .subscribe( descuento => console.log ( 'actualizando', descuento ))
    }else
    {
    // crear
      this.descuentoService.agregarDescuento(this.descuento)
        .subscribe(resp=>{
        console.log('anda')
        this.router.navigate(['porcentajes/listado']);   
        console.log('respuesta',resp);
      })
    }
  }
  borrar(){
    
  }



}
