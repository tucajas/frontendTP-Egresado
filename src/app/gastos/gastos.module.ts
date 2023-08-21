import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { GastoComponent } from './pages/gasto/gasto.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    AgregarComponent,
    GastoComponent
  ],
  imports: [
    CommonModule,
    GastosRoutingModule
  ]
})
export class GastosModule { }
