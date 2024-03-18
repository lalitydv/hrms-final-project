import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesListComponent } from './leaves-list/leaves-list.component';
import { LeavesAddComponent } from './leaves-add/leaves-add.component';
import { LeavesViewComponent } from './leaves-view/leaves-view.component';

import { SharedImportsModule } from '../shared-imports/shared-imports.module';


@NgModule({
  declarations: [
    LeavesListComponent,
    LeavesAddComponent,
    LeavesViewComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    SharedImportsModule
  ]
})
export class LeavesModule { }
