import { Component } from '@angular/core';
import { Proveedor } from '../../interface';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from '../../proveedores.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  proveedor: Proveedor ={

      nombreDeEmpresa:'',
      direccion:'',
      telefono:'',
  }

  constructor( private activateroute: ActivatedRoute,
               private proveedorService: ProveedoresService,
               private router: Router) { }

  ngOnInit(): void {
  this.activateroute.params.pipe(switchMap(({id})=>this.proveedorService.getProveedorPorId(id))
  ).subscribe(proveedor =>this.proveedor=proveedor);

  }
  guardar(){
    if (this.proveedor.nombreDeEmpresa.trim().length===0){
  return
  }
  // actualizar
  if (this.proveedor.id){
      this.proveedorService.actualizarProveedor( this.proveedor )
      .subscribe( proveedor => console.log ( 'actualizando', proveedor ))
  }else{
  // crear
    this.proveedorService.agregarProveedor(this.proveedor)
      .subscribe(resp=>{
      console.log('respuesta',resp);
    })
  }
  }
  borrar(){
    this.proveedorService.eliminarProveedor(this.proveedor.id!)
    .subscribe( resp =>{

    this.router.navigate(['proveedores/listado']);
    });
  }
    



}
