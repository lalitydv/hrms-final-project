import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpDeskRoutingModule } from './help-desk-routing.module';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { HelpDeskAddComponent } from './help-desk-add/help-desk-add.component';
import { HelpDeskEditComponent } from './help-desk-edit/help-desk-edit.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';


@NgModule({
  declarations: [
    HelpDeskComponent,
    HelpDeskAddComponent,
    HelpDeskEditComponent
  ],
  imports: [
    CommonModule,
    HelpDeskRoutingModule,
    SharedImportsModule
  ]
})
export class HelpDeskModule { }
