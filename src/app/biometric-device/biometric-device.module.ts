import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiometricDeviceRoutingModule } from './biometric-device-routing.module';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceAddComponent } from './device-add/device-add.component';
import { DeviceEdditComponent } from './device-eddit/device-eddit.component';
import { DeviceDeleteComponent } from './device-delete/device-delete.component';
import { DeviceEmployeeComponent } from './device-employee/device-employee.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';


@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceAddComponent,
    DeviceEdditComponent,
    DeviceDeleteComponent,
    DeviceEmployeeComponent
  ],
  imports: [
    CommonModule,
    BiometricDeviceRoutingModule,
    SharedImportsModule
  ]
})
export class BiometricDeviceModule { }
