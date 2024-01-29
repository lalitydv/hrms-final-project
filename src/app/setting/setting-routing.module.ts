import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationSettingComponent } from './application-setting/application-setting.component';
import { AgentSettingComponent } from './agent-setting/agent-setting.component';
import { ClientSettingComponent } from './client-setting/client-setting.component';
import { AgentAutoAssignComponent } from './agent-auto-assign/agent-auto-assign.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { CompanyLogoComponent } from './company-logo/company-logo.component';

const routes: Routes = [
  {path: 'application-setting', component: ApplicationSettingComponent},
  {path: 'agent-setting', component: AgentSettingComponent},
  {path: 'client-setting', component: ClientSettingComponent},
  {path: 'agent-auto-assign-setting', component: AgentAutoAssignComponent},
  {path: 'email-setting', component: EmailSettingComponent},
  {path: 'logo-setting', component: CompanyLogoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
