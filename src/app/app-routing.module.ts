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
  },
  {
    path: 'proveedores',
    loadChildren: ()=> import ('./proveedores/proveedores.module').then (m=>m.ProveedoresModule)
  },
  {
    path: 'tipoTrabajo',
    loadChildren: ()=> import ('./tipotrabajo/tipoTtrabajo.module').then (m=>m.TipoTrabajoModule)
  },
  {
    path:'porcentajes',
    loadChildren: ()=>import('./porcentajes/porcentajes.module').then(m=>m.PorcentajesModule)
  },
  {
    path:'informes',
    loadChildren: ()=>import('./informe-pedidos/informe-pedidos.module').then(m=>m.InformePedidosModule)
  },
  {
    path:'gastos',
    loadChildren: ()=>import('./gastos/gastos.module').then(m=>m.GastosModule)
  },
  {
    path:'matPrima',
    loadChildren: ()=>import('./matPrima/mat-prima.module').then(m=>m.MatPrimaModule)
  },
  {
    path:'correo',
    loadChildren: ()=>import('./correo/correo.module').then(m=>m.CorreoModule)
  },
  {
    path: 'graficos',
    loadChildren: ()=>import('./graficos/graficos.module').then(m=>m.GraficosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
