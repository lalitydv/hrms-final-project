import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { NewPassComponent } from './components/new-pass/new-pass.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {
    path:'',component:LoginPageComponent
  },
  {
    path:'forgot',component:ForgotPassComponent
  },
  {
    path:'new',component:NewPassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
