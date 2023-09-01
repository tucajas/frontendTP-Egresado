import { Component } from '@angular/core';
import { matPrima } from '../../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPrimaService } from '../../mat-prima.service';
import { switchMap } from 'rxjs';
import { PopDialogComponent } from '../../pop-dialog/pop-dialog.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  matPrima: matPrima={
    id:0,
    descripcion: '',
  }

  constructor(  private activateroute: ActivatedRoute,
    private matPrimaService: MatPrimaService,
    private router: Router,
    private http: HttpClient,
    private matdialog: MatDialog) { }
    ngOnInit(): void {
      this.activateroute.params.pipe(switchMap(({id})=>this.matPrimaService.getmatPrimaPorId(id))
      ).subscribe(matPrima =>this.matPrima=matPrima);
    }

    guardar(){
      if (this.matPrima.descripcion.trim().length===0){
        return
      }
      // actualizar
      if (this.matPrima.id){
          this.matPrimaService.actualizarmatPrima( this.matPrima )
            .subscribe( matPrima => console.log ( 'actualizando', matPrima ))
             this.router.navigate(['matPrima/listado']);
      }
      else{
        // crear
          console.log('entroa crear')
          this.matPrimaService.agregarmatPrima(this.matPrima)
            .subscribe(resp=>{
              console.log('respuesta agregando',resp);
               this.router.navigate(['matPrima/listado']);
        })
      }
    }
    
    borrar(){

      const dialog=this.matdialog.open(PopDialogComponent,{
      
        width:'270px',
        height:'170px',
        data: {...this.matPrima}
      });
  
      dialog.afterClosed().subscribe(
        (result)=>{
          if (result){
           this.matPrimaService.eliminarmatPrima(this.matPrima.id!)
           .subscribe( resp =>{

              this.router.navigate(['matPrima/listado']);
             });
          }
        }
      )
    }
}
