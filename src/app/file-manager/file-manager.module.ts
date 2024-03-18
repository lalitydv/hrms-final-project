import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { OfficialDocumentsComponent } from './official-documents/official-documents.component';
import { FileConfigurationComponent } from './file-configuration/file-configuration.component';
import { AddFileComponent } from './add-file/add-file.component';
import { UpdateFileComponent } from './update-file/update-file.component';
import { FileUpdateComponent } from './file-update/file-update.component';
import { AddFileOfficialDocumenComponent } from './add-file-official-documen/add-file-official-documen.component';


@NgModule({
  declarations: [
    FileManagerComponent,
    OfficialDocumentsComponent,
    FileConfigurationComponent,
    AddFileComponent,
    UpdateFileComponent,
    FileUpdateComponent,
    AddFileOfficialDocumenComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    SharedImportsModule
  ]
})
export class FileManagerModule { }
