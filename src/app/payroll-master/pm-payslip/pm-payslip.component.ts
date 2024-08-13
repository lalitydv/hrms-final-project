import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RangepopupComponent } from './rangepopup/rangepopup.component';
@Component({
  selector: 'app-pm-payslip',
  templateUrl: './pm-payslip.component.html',
  styleUrls: ['./pm-payslip.component.css']
})
export class PmPayslipComponent {
  panelOpenState = true;
  Payslips = true;
  FirstIcons: String = "assets/Dashboard/image 78.png"
  HearderHeding: String = "Payslip"

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(RangepopupComponent);
  }

}
