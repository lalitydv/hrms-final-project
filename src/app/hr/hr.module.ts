import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRRoutingModule } from './hr-routing.module';
import { PromotionComponent } from './promotion/promotion.component';
import { AwardComponent } from './award/award.component';
import { TravelComponent } from './travel/travel.component';
import { TransferComponent } from './transfer/transfer.component';
import { ResignationsComponent } from './resignations/resignations.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { WarningsComponent } from './warnings/warnings.component';
import { TerminationsComponent } from './terminations/terminations.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { AddAwardComponent } from './award/add-award/add-award.component';
import { AddPromotionComponent } from './promotion/add-promotion/add-promotion.component';
import { AddTravelComponent } from './travel/add-travel/add-travel.component';
import { AddTransferComponent } from './transfer/add-transfer/add-transfer.component';
import { AddResignationComponent } from './resignations/add-resignation/add-resignation.component';
import { AddComplaintComponent } from './complaints/add-complaint/add-complaint.component';
import { AddWarningComponent } from './warnings/add-warning/add-warning.component';
import { AddTerminationComponent } from './terminations/add-termination/add-termination.component';


@NgModule({
  declarations: [
    PromotionComponent,
    AwardComponent,
    TravelComponent,
    TransferComponent,
    ResignationsComponent,
    ComplaintsComponent,
    WarningsComponent,
    TerminationsComponent,
    AddAwardComponent,
    AddPromotionComponent,
    AddTravelComponent,
    AddTransferComponent,
    AddResignationComponent,
    AddComplaintComponent,
    AddWarningComponent,
    AddTerminationComponent
  ],
  imports: [
    CommonModule,
    HRRoutingModule,
    SharedImportsModule
  ]
})
export class HRModule { }
