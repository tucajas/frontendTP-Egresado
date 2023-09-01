import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPrimaRoutingModule } from './mat-prima-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MatPrimaComponent } from './pages/mat-prima/mat-prima.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { PopDialogComponent } from './pop-dialog/pop-dialog.component';
import { MaterialModule } from '../materialDesigne/material.module';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MatPrimaComponent,
    ListadoComponent,
    AgregarComponent,
    PopDialogComponent
  ],
  imports: [
    CommonModule,
    MatPrimaRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class MatPrimaModule { }
