import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: AppComponent
  },
  {
    path: 'clientes',
    loadChildren: ()=> import('./clientes/clientes.module').then (m=>m.ClientesModule)
  },
  {
    path: 'orden',
    loadChildren: ()=> import('./orden/orden.module').then (m=>m.OrdenModule)
  },
  {
    path: 'articulo',
    loadChildren: ()=> import ('./articulo/articulo.module').then (m=>m.ArticuloModule)
  },
  {
    path: 'presupuesto',
    loadChildren: ()=> import ('./presupuesto/presupuesto.module').then (m=>m.PresupuestoModule)
  },
  {
    path: 'materiaPrima',
    loadChildren: ()=> import ('./materia-prima/materia-prima.module').then (m=>m.MateriaPrimaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }