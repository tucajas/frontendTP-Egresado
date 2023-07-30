import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresupuestoRoutingModule } from './presupuesto-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../materialDesigne/material.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { PresupuestoComponent } from './pages/presupuesto/presupuesto.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    HomeComponent,
    PresupuestoComponent
  ],
  imports: [
    CommonModule,
    PresupuestoRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PresupuestoModule { }
