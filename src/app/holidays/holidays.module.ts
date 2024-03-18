import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidaysRoutingModule } from './holidays-routing.module';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidayAddComponent } from './holiday-add/holiday-add.component';
import { HolidayEditComponent } from './holiday-edit/holiday-edit.component';
import { HolidayViewComponent } from './holiday-view/holiday-view.component';
import { HolidayDeleteComponent } from './holiday-delete/holiday-delete.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';


@NgModule({
  declarations: [
    HolidayListComponent,
    HolidayAddComponent,
    HolidayEditComponent,
    HolidayViewComponent,
    HolidayDeleteComponent
  ],
  imports: [
    CommonModule,
    HolidaysRoutingModule,
    SharedImportsModule
  ]
})
export class HolidaysModule { }
