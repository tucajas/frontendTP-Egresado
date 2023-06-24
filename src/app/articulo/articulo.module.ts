import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticuloRoutingModule } from './articulo-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ArticuloRoutingModule
  ]
})
export class ArticuloModule { }
