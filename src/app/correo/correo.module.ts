import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorreoRoutingModule } from './correo-routing.module';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MaterialModule } from '../materialDesigne/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    CorreoRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CorreoModule { }
