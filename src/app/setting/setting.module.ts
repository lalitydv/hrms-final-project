import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';

import {  MatIconModule } from '@angular/material/icon';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import {  MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ApplicationSettingComponent } from './application-setting/application-setting.component';
import { AgentSettingComponent } from './agent-setting/agent-setting.component';
import { ClientSettingComponent } from './client-setting/client-setting.component';
import { AgentAutoAssignComponent } from './agent-auto-assign/agent-auto-assign.component';
import { SelectTechnicianComponent } from './select-technician/select-technician.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { CompanyLogoComponent } from './company-logo/company-logo.component';



@NgModule({
  declarations: [
    ApplicationSettingComponent,
    AgentSettingComponent,
    ClientSettingComponent,
    AgentAutoAssignComponent,
    SelectTechnicianComponent,
    EmailSettingComponent,
    CompanyLogoComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatMenuModule,
    FormsModule,
    MatDividerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    CKEditorModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class SettingModule { }
