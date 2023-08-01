import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriaPrimaService } from '../../servicios/materia-prima.service';
import { switchMap } from 'rxjs/operators';
import { MateriaPrima } from '../../interface';
import { ProveedoresService } from 'src/app/proveedores/proveedores.service';
import { Proveedor } from 'src/app/proveedores/interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopdialogComponent } from '../../popdialog/popdialog.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  materiaPrima: MateriaPrima={
    descripcion:'',
    stock: 0,
    precioCosto:0,
    proveedor: '',
  }
  proveedor: Proveedor[] =[];

    constructor(  private activateroute: ActivatedRoute,
                  private materiaPrimaService: MateriaPrimaService,
                  private router: Router,
                  private http: HttpClient,
                  private proveedorServicio2:ProveedoresService,
                  private matdialog: MatDialog) { }
                  
                 
    ngOnInit(): void {
      this.activateroute.params.pipe(switchMap(({id})=>this.materiaPrimaService.getMateriaPrimaPorId(id))
      ).subscribe(materiaPrima =>this.materiaPrima=materiaPrima);
      this.proveedorServicio2.getProveedores().subscribe(proveedor=>this.proveedor=proveedor);
      
    }
    guardar(){
      if (this.materiaPrima.descripcion.trim().length===0){
        return
      }
      // actualizar
      if (this.materiaPrima.id){
        console.log('entro a actualizar ')
        this.materiaPrimaService.actualizarMateriaPrima( this.materiaPrima )
        .subscribe( materiaPrima => console.log ( 'actualizando', materiaPrima ))
      }
      else{
        // crear
        console.log('entro a crear');
        console.log(this.proveedor);
        this.materiaPrimaService.agregarMateriaPrima(this.materiaPrima).subscribe(resp=>{
          this.router.navigate(['materiaPrima/listado']);
          console.log('respuesta agregando',resp);
        })
      }
    }
    
    borrar(){

      const dialog=this.matdialog.open(PopdialogComponent,{
      
        width:'270px',
        height:'170px',
        data: {...this.materiaPrima}
      });
  
      dialog.afterClosed().subscribe(
        (result)=>{
          if (result){
           this.materiaPrimaService.eliminarMateriaPrima(this.materiaPrima.id!)
           .subscribe( resp =>{

              this.router.navigate(['materiaPrima/listado']);
             });
          }
        }
      )
    }
}
