import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTableComponent } from './shared-table/shared-table.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';



@NgModule({
  declarations: [
    SharedTableComponent
  ],
  imports: [
    CommonModule,
    SharedImportsModule
  
  ],
  exports: [SharedTableComponent]
})
export class SharedTableModule { }
