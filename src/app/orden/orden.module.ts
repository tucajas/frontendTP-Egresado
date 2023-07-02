import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenRoutingModule } from './orden-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../materialDesigne/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    OrdenRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class OrdenModule { }
