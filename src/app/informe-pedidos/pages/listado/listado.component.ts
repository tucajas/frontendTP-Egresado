import { Component } from '@angular/core';
import { Orden } from 'src/app/orden/interface';
import { InformePedidosService } from '../../informe-pedidos.service';
import { ServiciosService } from 'src/app/orden/servicios/servicios.service';

 
 import { MatTableDataSource } from '@angular/material/table';
 import { Cliente } from 'src/app/clientes/interface';
 import { ClientesService } from 'src/app/clientes/servicios/clientes_service';

import { DatePipe } from '@angular/common';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    startDate!: Date;
    endDate!: Date;
               
  
    dataSource:any;
    displayedColumns:string[]=['id','cliente_nombre','tipoTrabajo','materiaprima_descripcion','cantidad','fecha_creacion','fechaEntrega','antiguedad','detalle','estado','prioridad','editar','ver'];
    constructor( private ordenes_service: ServiciosService,
                 private clienteservicio: ClientesService,
                 private ordenserv:ServiciosService,
                  ) { }
    ngOnInit(): void {
  
      this.ordenes_service.getOrdenes().subscribe( (resp) => {
        
        const currentDate = new Date();
          resp.forEach((orden) => {
            const fecha_creacion = new Date(orden.fecha_creacion);
            const timeDiff = Math.abs(currentDate.getTime() - fecha_creacion.getTime());
            const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            orden.antiguedad = daysDiff;
          });
        
        
        this.dataSource = new  MatTableDataSource(resp);})
        
      }
      applyDateFilter() {
        if (this.startDate && this.endDate) {
          this.dataSource.filterPredicate = (data: Orden) => {
            const dateString = new Date(data.fecha_creacion).toLocaleDateString();
            const startDateString = this.startDate.toLocaleDateString();
            const endDateString = this.endDate.toLocaleDateString();
            return dateString >= startDateString && dateString <= endDateString;
            };
            this.dataSource.filter = 'trigger'; // Esto dispara el filtro
        }
         // Vacía el filtro de texto si existiera
      }
      
      // applyFilter(event: Event) {
      //   if (this.startDate && this.endDate) {
      //           this.dataSource.filterPredicate = (data: Orden, filter: string) => {
      //           const dateString = new Date(data.fecha_creacion).toLocaleDateString();
      //           const startDateString = this.startDate.toLocaleDateString();
      //           const endDateString = this.endDate.toLocaleDateString();
      //           return dateString >= startDateString && dateString <= endDateString;
      //         };  
      //       }
      //       const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
      //       this.dataSource.filter = filterValue;
      //   }
   
  }
  
  
  
    
   
  
  
    
  
  




