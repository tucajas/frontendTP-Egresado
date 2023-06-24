import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }
