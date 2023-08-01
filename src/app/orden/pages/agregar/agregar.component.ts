import { Component } from '@angular/core';
import { Orden } from '../../interface';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { ServiciosService } from '../../servicios/servicios.service';
import { ClientesService } from 'src/app/clientes/servicios/clientes_service';
import { Cliente } from 'src/app/clientes/interface';
import { MateriaPrima } from 'src/app/materia-prima/interface';
import { MateriaPrimaService } from 'src/app/materia-prima/servicios/materia-prima.service';
import { TipoTrabajo } from 'src/app/tipotrabajo/interface';
import { TipotrabajoService } from 'src/app/tipotrabajo/tipotrabajo.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  

  orden: Orden ={
    cliente:'',
    tipoTrabajo: '',
    materiaPrima: '',
    cantidad: 0,
    fechaEntrega: '',
    detalle: '',
    estado: '',
  }
  cliente:Cliente[]=[];
  materiaprima: MateriaPrima[]=[];
  tipoTrabajo: TipoTrabajo[]=[];
  
  
  
  
  
  constructor( private activateroute: ActivatedRoute,
               private ordenService: ServiciosService,
               private clienteService: ClientesService,
               private materiaPrima: MateriaPrimaService,
               private tipoTrabajoservice:TipotrabajoService,
               private router: Router) { }

  ngOnInit(): void {
    this.activateroute.params.pipe(switchMap(({id})=>this.ordenService.getOrdenesPorId(id))
      ).subscribe(orden =>this.orden=orden);
    this.clienteService.getCliente().subscribe (cliente=>this.cliente=cliente);
    this.materiaPrima.getMateriaPrima().subscribe(materiaprima=>this.materiaprima=materiaprima);
    this.tipoTrabajoservice.getTipoTrabajo().subscribe(tipoTrabajo=>this.tipoTrabajo=tipoTrabajo);
    
  }
  guardar(){
    
    
    // if (this.orden.cliente.trim().length===0){
    //   return
    // }
    // actualizar
    if (this.orden.id){
      this.ordenService.actualizarOrden( this.orden )
        .subscribe( orden => console.log ( 'actualizando', orden ))
    }else{
      // crear
      
      
      this.ordenService.agregarOrden(this.orden)
        .subscribe(resp=>{
         console.log('respuesta',resp);
         const valor=this.orden.cantidad;
         console.log(valor); 



         this.router.navigate(['orden/listado'])
      })


    }
  }
  borrar(){
    this.ordenService.eliminarOrden(this.orden.id!)
     .subscribe( resp =>{

       this.router.navigate(['orden/listado']);
     });
  }










}
