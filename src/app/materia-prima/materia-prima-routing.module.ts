import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EstadosComponent } from './pages/estados/estados.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'estado',
        component: EstadosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaPrimaRoutingModule { }
