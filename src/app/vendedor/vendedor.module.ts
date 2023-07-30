import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HomeComponent } from './pages/home/home.component';
import { VendedorComponent } from './pages/vendedor/vendedor.component';
import { ListadoComponent } from './pages/listado/listado.component';


@NgModule({
  declarations: [
    AgregarComponent,
    HomeComponent,
    VendedorComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule
  ]
})
export class VendedorModule { }
