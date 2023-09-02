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
      //codigo nuevo desde aca
      applyDateFilter() {
        if (this.startDate && this.endDate) {
          this.dataSource.filterPredicate = (data: Orden) => {
            const orderDate = new Date(data.fecha_creacion);
            const startDate = this.startDate;
            const endDate = this.endDate;
      
            // Comparar por año, mes y día
            return (
              orderDate >= startDate &&
              orderDate <= endDate
            );
          };
          this.dataSource.filter = 'trigger'; // Esto dispara el filtro
        }
        // Vacía el filtro de texto si existiera
      }
      
      // applyDateFilter() {
      //   if (this.startDate && this.endDate) {
      //     this.dataSource.filterPredicate = (data: Orden) => {
      //       const orderDate = new Date(data.fecha_creacion);
      //       const startMonth = this.startDate.getMonth();
      //       const startYear = this.startDate.getFullYear();
      //       const endMonth = this.endDate.getMonth();
      //       const endYear = this.endDate.getFullYear();
      
      //       const orderMonth = orderDate.getMonth();
      //       const orderYear = orderDate.getFullYear();
      
      //       return (
      //         (orderYear > startYear || (orderYear === startYear && orderMonth >= startMonth)) &&
      //         (orderYear < endYear || (orderYear === endYear && orderMonth <= endMonth))
      //       );
      //     };
      //     this.dataSource.filter = 'trigger'; // Esto dispara el filtro
      //   }
      //   // Vacía el filtro de texto si existiera
      // }
      
      //hasta aca





      //mi codigo que mutie es desde aca
      // applyDateFilter() {
      //   if (this.startDate && this.endDate) {
      //     this.dataSource.filterPredicate = (data: Orden) => {
      //       const dateString = new Date(data.fecha_creacion).toLocaleDateString();
      //       const startDateString = this.startDate.toLocaleDateString();
      //       const endDateString = this.endDate.toLocaleDateString();
      //       return dateString >= startDateString && dateString <= endDateString;
      //       };
      //       this.dataSource.filter = 'trigger'; // Esto dispara el filtro
      //   }
      //    // Vacía el filtro de texto si existiera
      // }hasta aca
      





      //a esto no hay q darle bola
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
  
  
  
    
   
  
  
    
  
  




