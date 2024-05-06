import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayEditComponent } from 'src/app/holidays/holiday-edit/holiday-edit.component';
import { HolidayViewComponent } from 'src/app/holidays/holiday-view/holiday-view.component';
import { ShiftDeleteComponent } from 'src/app/shift/shift-delete/shift-delete.component';
import { AddTransferComponent } from './add-transfer/add-transfer.component';
export interface Element {
  position: number;
  CompanyName: string;
  ToDepartment: string;
  EmployeeName: string;
  FromDepartment: string;
  Date: string;
 
 
}
const ELEMENT_DATA: Element[] = [
  { position: 1, ToDepartment: 'xyz', CompanyName: 'New', EmployeeName: 'Best Salesman', FromDepartment: 'CSE', Date: '30-10-2030', },
  { position: 2, ToDepartment: 'xyz', CompanyName: 'New', EmployeeName: 'Best Salesman', FromDepartment: 'CSE', Date: '30-10-2030', },
  { position: 3, ToDepartment: 'xyz', CompanyName: 'New', EmployeeName: 'Best Salesman', FromDepartment: 'CSE', Date: '30-10-2030', },
  { position: 4, ToDepartment: 'xyz', CompanyName: 'New', EmployeeName: 'Best Salesman', FromDepartment: 'CSE', Date: '30-10-2030', },
  { position: 5, ToDepartment: 'xyz', CompanyName: 'New', EmployeeName: 'Best Salesman', FromDepartment: 'CSE', Date: '30-10-2030', },
  { position: 6, ToDepartment: 'xyz', CompanyName: 'New', EmployeeName: 'Best Salesman', FromDepartment: 'CSE', Date: '30-10-2030', },
 
];


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Transfer"


  // Table 
  displayedColumns = ['position', 'checkbox', 'EmployeeName' , 'CompanyName', 'FromDepartment', 'ToDepartment',  'Date' , 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ShiftDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(AddTransferComponent);
  }
  openDialogEddit() {
    this.dialog.open(HolidayEditComponent);
  }
  openDialogview() {
    this.dialog.open(HolidayViewComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }



}
