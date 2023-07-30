import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { MateriaPrimaComponent } from './pages/materia-prima/materia-prima.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
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
        path:'editar/:id',
        component:AgregarComponent
      },
      {
        path:':id',
        component: MateriaPrimaComponent
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
