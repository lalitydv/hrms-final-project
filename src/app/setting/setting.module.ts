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
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { CompanyComponent } from './company/company.component';
import { PdfReportComponent } from './pdf-report/pdf-report.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { SMSComponent } from './sms/sms.component';
import { EmailComponent } from './email/email.component';
import { MDComponent } from './TD/md/md.component';
import { FtpComponent } from './ftp/ftp.component';
import { AlertComponent } from './alert/alert.component';
import { AutoMailReportComponent } from './auto-mail-report/auto-mail-report.component';
import { AddFtpComponent } from './ftp/add-ftp/add-ftp.component';




@NgModule({
  declarations: [
 
   
   
  
    CompanyComponent,
                 PdfReportComponent,
                 WhatsappComponent,
                 SMSComponent,
                 EmailComponent,
                 MDComponent,
                 FtpComponent,
                 AlertComponent,
                 AutoMailReportComponent,
                 AddFtpComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedImportsModule

]  })
export class SettingModule { }
