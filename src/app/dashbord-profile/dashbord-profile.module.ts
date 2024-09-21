import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordProfileRoutingModule } from './dashbord-profile-routing.module';
import { DashProfileComponent } from './dash-profile/dash-profile.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';


@NgModule({
  declarations: [
    DashProfileComponent
  ],
  imports: [
    CommonModule,
    DashbordProfileRoutingModule,
    SharedImportsModule,
  ]
})
export class DashbordProfileModule { }
