import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BulkImportPayrollMasterComponent } from 'src/app/payroll-master/pm-configuration/bulk-import-payroll-master/bulk-import-payroll-master.component';

@Component({
  selector: 'app-hr-calendar',
  templateUrl: './hr-calendar.component.html',
  styleUrls: ['./hr-calendar.component.css']
})
export class HrCalendarComponent {

  panelOpenState = true;
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Payroll Configurations"
  AddBUthon : string = "Payroll Bulk Entry"
  Salary: String = "March 2001"
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
