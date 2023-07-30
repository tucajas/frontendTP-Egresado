import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaPrimaRoutingModule } from './materia-prima-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { MaterialModule } from '../materialDesigne/material.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MateriaPrimaComponent } from './pages/materia-prima/materia-prima.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    EstadosComponent,
    HomeComponent,
    MateriaPrimaComponent
  ],
  imports: [
    CommonModule,
    MateriaPrimaRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class MateriaPrimaModule { }
