import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { ClientsComponent } from './clients/clients.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TaxTypeComponent } from './tax-type/tax-type.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { ViewProjectOverviewComponent } from './projects/view-project-overview/view-project-overview.component';
import { CommonTagComponent } from './common-tag/common-tag.component';
import { ProjectsDetailsTableComponent } from './projects/projects-details-table/projects-details-table.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { InvoiceAddComponent } from './invoice/invoice-add/invoice-add.component';
import { TaxTypeUpdateComponent } from './tax-type/tax-type-update/tax-type-update.component';
import { AddTaskTestComponent } from './tasks/add-task-test/add-task-test.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    TasksComponent,
    ClientsComponent,
    InvoiceComponent,
    TaxTypeComponent,
    AddProjectComponent,
    EditProjectComponent,
    ViewProjectOverviewComponent,
    CommonTagComponent,
    ProjectsDetailsTableComponent,
    AddClientComponent,
    EditClientComponent,
    InvoiceAddComponent,
    TaxTypeUpdateComponent,
    AddTaskTestComponent
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    SharedImportsModule,
    RichTextEditorModule
  ]
})
export class ProjectManagementModule { }
