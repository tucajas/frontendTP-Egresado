import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorcentajesRoutingModule } from './porcentajes-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../materialDesigne/material.module';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { PorcentajeComponent } from './pages/porcentaje/porcentaje.component';


@NgModule({
  declarations: [
    ListadoComponent,
    HomeComponent,
    AgregarComponent,
    PorcentajeComponent
  ],
  imports: [
    CommonModule,
    PorcentajesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PorcentajesModule { }
