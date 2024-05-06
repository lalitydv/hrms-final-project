import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { ClientsComponent } from './clients/clients.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TaxTypeComponent } from './tax-type/tax-type.component';
import { ViewProjectOverviewComponent } from './projects/view-project-overview/view-project-overview.component';

const routes: Routes = [
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'projects-view', component: ViewProjectOverviewComponent
  },
  {
    path: 'tasks', component: TasksComponent
  },
  {
    path: 'clients', component: ClientsComponent
  },
  {
    path: 'invoice', component: InvoiceComponent
  },
  {
    path: 'tax-type', component: TaxTypeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule { }
