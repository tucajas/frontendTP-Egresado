import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from '../../servicios/clientes_service';
import { Cliente } from '../../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  cliente: Cliente ={
    nombre:'',
    apellido: '',
    direccion: '',
    telefono: '',
    cuenta_Corriente: '',
  }
  
  
  constructor( private activateroute: ActivatedRoute,
               private clienteService: ClientesService,
               private router: Router) { }

  ngOnInit(): void {
    this.activateroute.params.pipe(switchMap(({id})=>this.clienteService.getClientePorId(id))
      ).subscribe(cliente =>this.cliente=cliente);

  }
  guardar(){
    if (this.cliente.nombre.trim().length===0){
      return
    }
    // actualizar
    if (this.cliente.id){
      this.clienteService.actualizarCliente( this.cliente )
        .subscribe( cliente => console.log ( 'actualizando', cliente ))
    }else{
      // crear
      this.clienteService.agregarCliente(this.cliente)
        .subscribe(resp=>{
         console.log('respuesta',resp);
      })
    }
  }
  borrar(){
    this.clienteService.eliminarCliente(this.cliente.id!)
     .subscribe( resp =>{

       this.router.navigate(['clientes/']);
     });
  }
  
}
