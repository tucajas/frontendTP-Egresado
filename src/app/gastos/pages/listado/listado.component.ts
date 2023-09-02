import { Component } from '@angular/core';
import { GastosService } from '../../gastos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Gastos } from '../../interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  startDate!: Date;
  endDate!: Date;

  dataSource:any;
  displayedColumns:string[]=['id','fecha','mate','prov_nombre','cantidadCompra','valorCompra','valorAbonadoCC','valorAbonadoFt','saldo'];
  filteredData: any[] = [];

  constructor( private gastosService: GastosService ) { }
  ngOnInit(): void {

    this.gastosService.getGastos()
    .subscribe( (resp) => {this.dataSource = new  MatTableDataSource(resp);})
  }
  calcularSumaSaldo(): number {
    return this.filteredData.reduce((suma, gastos) => suma + gastos.saldo, 0);
  }
  
 


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filteredData = this.dataSource.filteredData;
    
  }
  //nuevo codigo desde aca
  applyDateFilter() {
    if (this.startDate && this.endDate) {
      this.dataSource.filterPredicate = (data: Gastos) => {
        const expenseDate = new Date(String(data.fecha));
        const startDate = this.startDate;
        const endDate = this.endDate;
  
        // Comparar por año, mes y día
        return (
          expenseDate >= startDate &&
          expenseDate <= endDate
        );
      };
      this.dataSource.filter = 'trigger'; // Esto dispara el filtro
    }
    // Vacía el filtro de texto si existiera
  }
  
  //hasta aca


  // applyDateFilter() {
  //   if (this.startDate && this.endDate) {
  //     this.dataSource.filterPredicate = (data: Gastos) => {
  //       const dateString = new Date(String(data.fecha)).toLocaleDateString();
  //       const startDateString = this.startDate.toLocaleDateString();
  //       const endDateString = this.endDate.toLocaleDateString();
  //       return dateString >= startDateString && dateString <= endDateString;
  //       };
  //       this.dataSource.filter = 'trigger'; // Esto dispara el filtro
  //   }
  //    // Vacía el filtro de texto si existiera
  // }




  // borrar(cod: number) {
  //   if (confirm("Realmente quiere borrarlo?")) {
  //     // this.dataSource.splice(cod, 1);
  //     // this.dataSource.renderRows();
  //     console.log (cod+1)
  //   }
  }


