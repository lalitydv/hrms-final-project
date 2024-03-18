import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { AlertComponent } from './alert/alert.component';
import { AutoMailReportComponent } from './auto-mail-report/auto-mail-report.component';
import { EmailComponent } from './email/email.component';
import { FtpComponent } from './ftp/ftp.component';
import { PdfReportComponent } from './pdf-report/pdf-report.component';
import { SMSComponent } from './sms/sms.component';
import { MDComponent } from './TD/md/md.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';


const routes: Routes = [
  {
    path:"company", component: CompanyComponent
  },
  {
    path:"alert", component: AlertComponent
  },
  {
    path:"auto-mail-report", component: AutoMailReportComponent
  },
  {
    path:"email", component: EmailComponent
  },
  {
    path:"ftp", component: FtpComponent
  },
  {
    path:"pdf", component: PdfReportComponent
  },
  {
    path:"sms", component: SMSComponent
  },
  {
    path:"td", component: MDComponent
  },
  {
    path:"whatsapp", component: WhatsappComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
