import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewEmployeeComponent } from '../add-new-employee/add-new-employee.component';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: any[] = [
  { position: 1, checkbox: '', empId: 'HFG2354GH', name: 'Raghav', email:'test@gmail.com', contact:'9977418921', city:'indore', district:'indore', panNo:'HGHHY765L', balance:'test', role:'admin', status: 'Active' },
  { position: 2, checkbox: '', empId: 'HJU5678FGH', name: 'Hritik', email:'test@gmail.com', contact:'9977418921', city:'indore', district:'indore', panNo:'HGHHY765L', balance:'test', role:'admin', status: 'Active' },
];

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent {
  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Employee List";

  // Table 
  displayedColumns = ['position', 'checkbox', 'empId', 'name', 'email','contact','city','district','panNo','balance','role','status','actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialogAdd() {
    this.dialog.open(AddNewEmployeeComponent);
  }

  openDialogEdit() {
    this.dialog.open(AddNewEmployeeComponent);
  }
  openDialog() {
    this.dialog.open(DeletComponent);
  }
  selectedOption: string | null = null;
  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
