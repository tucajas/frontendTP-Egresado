import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaPrimaRoutingModule } from './materia-prima-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EstadosComponent } from './pages/estados/estados.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    EstadosComponent
  ],
  imports: [
    CommonModule,
    MateriaPrimaRoutingModule
  ]
})
export class MateriaPrimaModule { }
