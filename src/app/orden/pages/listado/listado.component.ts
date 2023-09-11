import { Component } from '@angular/core';
import { ServiciosService } from '../../servicios/servicios.service';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/clientes/interface';
import { ClientesService } from 'src/app/clientes/servicios/clientes_service';
import { Orden } from '../../interface';
import { JsonPipe } from '@angular/common';
import { PopdialogComponent } from '../../popdialog/popdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioComponent } from 'src/app/correo/pages/formulario/formulario.component';




@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
 
 

  getPriorityClass(priority: string) {
    if (priority === 'alta') {
      return 'priority-high';
    } else if (priority === 'media') {
      return 'priority-medium';
    } else {
      return 'priority-low';
    }
  }
  getEstadoClass(priority: string) {
    if (priority === 'finalizado') {
      return 'priority-low';
    } else if (priority === 'en proceso') {
      return 'priority-medium';
    } else {
      return 'priority-low';
    }
  }
             

  dataSource:any;
    displayedColumns:string[]=['id','cliente_nombre','cliente_direccion','tipoTrabajo','materiaprima_descripcion','cantidad','fecha_creacion',
    'fechaEntrega','antiguedad','detalle','estado','prioridad','editar','cambiarEstado'];
  constructor( private ordenes_service: ServiciosService,
              //  private clienteservicio: ClientesService,
              //  private ordenserv:ServiciosService,
               private dialog:MatDialog,
                ) { }
  

 
  ngOnInit(): void {

    
  
      

    this.ordenes_service.getOrdenes()
    .subscribe( (resp) => {
      
      const currentDate = new Date();
        resp.forEach((orden) => {
          const fecha_creacion = new Date(orden.fecha_creacion);
          const timeDiff = Math.abs(currentDate.getTime() - fecha_creacion.getTime());
          const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
          orden.antiguedad = daysDiff-1;
        });
      
      
      this.dataSource = new  MatTableDataSource(resp);})
      

    // this.clienteservicio.getCliente().subscribe(resp => this.cliente = resp)
    // this.ordenserv.getOrdenes().subscribe(resp2 => this.orden=resp2);
    //   console.log(this.orden);
    

    
    
  }
  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    
  }
 
  cambiarEstado(orden: Orden) {
    if (orden.estado === 'en proceso' && orden.prioridad === 'alta') {
      // Actualiza el estado en la base de datos utilizando el servicio
      orden.estado = 'Finalizado';
      orden.prioridad ='finalizada';
      this.ordenes_service.actualizarOrden( orden )
      .subscribe( orden => console.log ( 'actualizando', orden ))  
          this.dataSource = [...this.dataSource];
    }
      
  }
  abrirFormularioCorreo() {
    const dialogRef = this.dialog.open(FormularioComponent, {
      width: '500px', // Personaliza el tamaño de la ventana modal según tus necesidades
    });

    
    dialogRef.afterClosed().subscribe((result) => {
      // Puedes realizar acciones después de que se cierre el formulario, si es necesario
    });
  }
  
  
  
  
  borrar(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      // this.dataSource.splice(cod, 1);
      // this.dataSource.renderRows();
      console.log (cod+1)
    }
  }



}
function differenceInDays(today: any, fechaEntrega: any) {
  throw new Error('Function not implemented.');
}

