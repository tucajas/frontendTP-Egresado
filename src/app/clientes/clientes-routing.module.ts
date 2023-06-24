import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
