import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformePedidosRoutingModule } from './informe-pedidos-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../materialDesigne/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    InformePedidosRoutingModule,
    MaterialModule,
    FormsModule
    
  ]
})
export class InformePedidosModule { }
