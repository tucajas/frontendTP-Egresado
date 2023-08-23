import { Component } from '@angular/core';
import { ServiciosService } from '../../servicios/servicios.service';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/clientes/interface';
import { ClientesService } from 'src/app/clientes/servicios/clientes_service';
import { Orden } from '../../interface';
import { JsonPipe } from '@angular/common';




@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
 
 

  getPriorityClass(priority: string) {
    if (priority === '1') {
      return 'priority-high';
    } else if (priority === '2') {
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
  // displayedColumns:string[]=['id','cliente','cliente_nombre','tipoTrabajo','materiaPrima','cantidad','fechaEntrega','detalle','estado','editar','ver'];
    // displayedColumns:string[]=['id','cliente_nombre','tipoTrabajo','materiaPrima','cantidad','fechaEntrega','detalle','estado','editar','ver'];
    displayedColumns:string[]=['id','cliente_nombre','tipoTrabajo','materiaprima_descripcion','cantidad','fecha_creacion','fechaEntrega','antiguedad','detalle','estado','prioridad','editar','ver'];
  constructor( private ordenes_service: ServiciosService,
               private clienteservicio: ClientesService,
               private ordenserv:ServiciosService,
                ) { }
  

 
  ngOnInit(): void {

    

    this.ordenes_service.getOrdenes()
    .subscribe( (resp) => {
      
      const currentDate = new Date();
        resp.forEach((orden) => {
          const fecha_creacion = new Date(orden.fecha_creacion);
          const timeDiff = Math.abs(currentDate.getTime() - fecha_creacion.getTime());
          const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
          orden.antiguedad = daysDiff;
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

