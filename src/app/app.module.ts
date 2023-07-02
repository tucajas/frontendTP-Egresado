import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncabezadoComponent } from './shared/encabezado/encabezado.component';
import { MaterialModule } from './materialDesigne/material.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './shared/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PieComponent } from './shared/pie/pie.component';


@NgModule({
  declarations: [
    AppComponent,
    
    EncabezadoComponent,
    MenuComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
