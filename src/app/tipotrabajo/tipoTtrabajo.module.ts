import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoTrabajoRoutingModule } from './tipoTrabajo-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';

import { HomeComponent } from './pages/home/home.component';
import { TipotrabajoComponent } from './pages/tipotrabajo/tipotrabajo.component';
import { MaterialModule } from '../materialDesigne/material.module';
import { FormsModule } from '@angular/forms';
import { PopdialogComponent } from './popdialog/popdialog.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    HomeComponent,
    TipotrabajoComponent,
    PopdialogComponent
  ],
  imports: [
    CommonModule,
    TipoTrabajoRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class TipoTrabajoModule { }
