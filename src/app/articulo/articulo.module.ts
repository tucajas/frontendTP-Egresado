import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticuloRoutingModule } from './articulo-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../materialDesigne/material.module';
import { FormsModule } from '@angular/forms';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    ArticuloComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ArticuloRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class ArticuloModule { }
