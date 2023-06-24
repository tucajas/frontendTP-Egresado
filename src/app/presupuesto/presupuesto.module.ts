import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresupuestoRoutingModule } from './presupuesto-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    PresupuestoRoutingModule
  ]
})
export class PresupuestoModule { }
