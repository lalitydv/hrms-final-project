import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeCodeComponent } from '../employee-code/employee-code.component';
import { SearchIconComponent } from '../search-icon/search-icon.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  FirstIcons: String = "assets/Dashboard/image 78.png"
  HearderHeding: String = "Add Employees"

  panelOpenState = true;
  Qualification = true;
  Examination = true;
  Job = true;
  Family = true;
  PF = true;
  ESI = true;
  Gratuity = true;
  LWF = true;
  Leaves = true;
  Other = true;
  isChecked: boolean = true;

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(EmployeeCodeComponent);
  }
  openDialogsearch() {
    this.dialog.open(SearchIconComponent);
  }
}
