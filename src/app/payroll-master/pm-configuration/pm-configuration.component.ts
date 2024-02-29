import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BulkImportPayrollMasterComponent } from './bulk-import-payroll-master/bulk-import-payroll-master.component';

@Component({
  selector: 'app-pm-configuration',
  templateUrl: './pm-configuration.component.html',
  styleUrls: ['./pm-configuration.component.css']
})
export class PmConfigurationComponent {
  panelOpenState = true;
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Payroll Configurations"
  AddBUthon : string = "Payroll Bulk Entry"
  Salary: String = "Salary Heads"
  CTC: String = "CTC Heads"
  Allowance: String = "Allowance Heads"
  Deductions: String = "Deductions"
  Deduction: String = "Deduction Salary Mapping"
  constructor(public dialog: MatDialog) { }
  openDialog (){
    this.dialog.open(BulkImportPayrollMasterComponent);
  }
  checked = true;
  unchecked = false;
}
