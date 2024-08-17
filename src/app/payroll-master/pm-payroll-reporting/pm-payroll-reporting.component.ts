import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BulkImportPayrollMasterComponent } from '../pm-configuration/bulk-import-payroll-master/bulk-import-payroll-master.component';

@Component({
  selector: 'app-pm-payroll-reporting',
  templateUrl: './pm-payroll-reporting.component.html',
  styleUrls: ['./pm-payroll-reporting.component.css']
})
export class PmPayrollReportingComponent {
  panelOpenState = true;
  Monthly = true;
  Lock = true;
  ESI = true;
  PF = true;
  Process = true;
  Yearly = true;
  Management = true;
  FirstIcons: String = "assets/Dashboard/image 78.png"
  HearderHeding: String = "Payroll Reporting"


  CTC: String = "CTC Heads"
  Allowance: String = "Allowance Heads"
  Deductions: String = "Deductions"
  Deduction: String = "Deduction Salary Mapping"
  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(BulkImportPayrollMasterComponent);
  }
  checked = true;
  unchecked = false;
}
