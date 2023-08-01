import { Component } from '@angular/core';
import { TipoTrabajo } from '../../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { TipotrabajoService } from '../../tipotrabajo.service';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PopdialogComponent } from '../../popdialog/popdialog.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  tipotrabajo: TipoTrabajo={
    descripcion:'',
    precio:0,
  }
  constructor( private activateroute: ActivatedRoute,
               private tipoTrabajoService: TipotrabajoService,
               private router: Router,
               private matdialog: MatDialog) { }

  ngOnInit(): void {
  this.activateroute.params.pipe(switchMap(({id})=>this.tipoTrabajoService.getTipoTrabajoPorId(id))
  ).subscribe(tipoTrabajo =>this.tipotrabajo=tipoTrabajo);

  }
  guardar(){
    if (this.tipotrabajo.descripcion.trim().length===0){
    return
    }
    // actualizar
    if (this.tipotrabajo.id){
    this.tipoTrabajoService.actualizarTipoTrabajo( this.tipotrabajo )
    .subscribe( tipotrabajo => console.log ( 'actualizando', this.tipotrabajo ))
    }else{
    // crear
    this.tipoTrabajoService.agregarTipoTrabajo(this.tipotrabajo)
      .subscribe(resp=>{
        this.router.navigate(['tipoTrabajo/listado']);   
      console.log('respuesta',resp);
      })
    }
  }
  borrar(){
    const dialog=this.matdialog.open(PopdialogComponent,{
      
      width:'270px',
      height:'170px',
      data: {...this.tipotrabajo}
    });

    dialog.afterClosed().subscribe(
      (result)=>{
        if (result){
        this.tipoTrabajoService.eliminarTipoTrabajo(this.tipotrabajo.id!)
        .subscribe( resp =>{

          this.router.navigate(['tipoTrabajo/listado/']);
         });
        }
      }
    )
  }  
}
