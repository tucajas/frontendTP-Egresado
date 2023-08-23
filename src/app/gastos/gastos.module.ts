import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { GastoComponent } from './pages/gasto/gasto.component';
import { MaterialModule } from '../materialDesigne/material.module';
import { PopdialogGastoComponent } from './popdialog-gasto/popdialog-gasto.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    AgregarComponent,
    GastoComponent,
    PopdialogGastoComponent
  ],
  imports: [
    CommonModule,
    GastosRoutingModule,
    MaterialModule,
    FormsModule
   
  ]
})
export class GastosModule { }
