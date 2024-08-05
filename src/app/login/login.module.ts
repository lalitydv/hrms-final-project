import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { NewPassComponent } from './components/new-pass/new-pass.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    ForgotPassComponent,
    NewPassComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedImportsModule

  ]
})
export class LoginModule { }
