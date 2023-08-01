import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficosRoutingModule } from './graficos-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { NgChartsModule } from 'ng2-charts';
import { DonasComponent } from './pages/donas/donas.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    BarrasComponent,
    DonasComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule,
    NgChartsModule
  ]
})
export class GraficosModule { }
