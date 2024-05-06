import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionComponent } from './promotion/promotion.component';
import { AwardComponent } from './award/award.component';
import { TravelComponent } from './travel/travel.component';
import { TransferComponent } from './transfer/transfer.component';
import { ResignationsComponent } from './resignations/resignations.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { WarningsComponent } from './warnings/warnings.component';
import { TerminationsComponent } from './terminations/terminations.component';
import { AddAwardComponent } from './award/add-award/add-award.component';
import { AddPromotionComponent } from './promotion/add-promotion/add-promotion.component';
import { AddTravelComponent } from './travel/add-travel/add-travel.component';
import { AddTransferComponent } from './transfer/add-transfer/add-transfer.component';
import { AddResignationComponent } from './resignations/add-resignation/add-resignation.component';
import { AddComplaintComponent } from './complaints/add-complaint/add-complaint.component';
import { AddWarningComponent } from './warnings/add-warning/add-warning.component';
import { AddTerminationComponent } from './terminations/add-termination/add-termination.component';

const routes: Routes = [
 { 
  path:'promotion',component: PromotionComponent
},
 { 
  path:'award',component: AwardComponent
},
 { 
  path:'travel',component: TravelComponent
},
 { 
  path:'transfer',component: TransferComponent
},
 { 
  path:'resignations',component: ResignationsComponent
},
 { 
  path:'complaints',component: ComplaintsComponent
},
 { 
  path:'warnings',component: WarningsComponent
},
 { 
  path:'terminations',component: TerminationsComponent
},
{
  path:'add-award',component:AddAwardComponent
},
{
  path:'add-promotion',component:AddPromotionComponent
},
{
  path:'add-travel',component:AddTravelComponent
},
{
  path:'add-transfer',component:AddTransferComponent
},
{
  path:'add-resgination',component:AddResignationComponent
},
{
  path:'add-complaint',component:AddComplaintComponent
},
{
  path:'add-warning',component:AddWarningComponent
},
{
  path:'add-termination',component:AddTerminationComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HRRoutingModule { }
