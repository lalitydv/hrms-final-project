import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceAddComponent } from './device-add/device-add.component';
import { DeviceEdditComponent } from './device-eddit/device-eddit.component';
import { DeviceEmployeeComponent } from './device-employee/device-employee.component';

const routes: Routes = [
  {
    path:'device-list',component: DeviceListComponent
  },
  {
    path:'device-add',component: DeviceAddComponent
  },
  {
    path:'device-edit',component: DeviceEdditComponent
  },
  {
    path:'device-employee',component: DeviceEmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiometricDeviceRoutingModule { }
