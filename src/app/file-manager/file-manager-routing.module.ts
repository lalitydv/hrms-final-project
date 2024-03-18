import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { OfficialDocumentsComponent } from './official-documents/official-documents.component';
import { FileConfigurationComponent } from './file-configuration/file-configuration.component';

const routes: Routes = [
  {
    path:'file-manager', component: FileManagerComponent
  },
  {
    path:'official-documents', component: OfficialDocumentsComponent
  },
  {
    path:'file-configuration', component: FileConfigurationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { }
