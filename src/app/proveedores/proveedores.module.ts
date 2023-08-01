import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../materialDesigne/material.module';
import { FormsModule } from '@angular/forms';
import { PopdialogComponent } from './popdialog/popdialog.component';


@NgModule({
  declarations: [
    AgregarComponent,
    HomeComponent,
    ProveedorComponent,
    ListadoComponent,
    PopdialogComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProveedoresModule { }
