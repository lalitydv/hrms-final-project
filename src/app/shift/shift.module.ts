import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftRoutingModule } from './shift-routing.module';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { ShiftAddComponent } from './shift-add/shift-add.component';
import { ShiftEdditComponent } from './shift-eddit/shift-eddit.component';
import { ShiftDeleteComponent } from './shift-delete/shift-delete.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';


@NgModule({
  declarations: [
    ShiftListComponent,
    ShiftAddComponent,
    ShiftEdditComponent,
    ShiftDeleteComponent
  ],
  imports: [
    CommonModule,
    ShiftRoutingModule,
    SharedImportsModule
  ]
})
export class ShiftModule { }
