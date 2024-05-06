import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayViewComponent } from 'src/app/holidays/holiday-view/holiday-view.component';
import { AddResignationComponent } from './add-resignation/add-resignation.component';

export interface Element {
  position: number;
  CompanyName: string;
  ResignationDate: string;
  EmployeeName: string;
  Department: string;
  NoticeDate: string;
 
 
}
const ELEMENT_DATA: Element[] = [
  { position: 1, ResignationDate: '30-10-2030', CompanyName: 'New', EmployeeName: 'Best Salesman', Department: 'CSE', NoticeDate: '30-10-2030', },
  { position: 2, ResignationDate: '30-10-2030', CompanyName: 'New', EmployeeName: 'Best Salesman', Department: 'CSE', NoticeDate: '30-10-2030', },
  { position: 3, ResignationDate: '30-10-2030', CompanyName: 'New', EmployeeName: 'Best Salesman', Department: 'CSE', NoticeDate: '30-10-2030', },
  { position: 4, ResignationDate: '30-10-2030', CompanyName: 'New', EmployeeName: 'Best Salesman', Department: 'CSE', NoticeDate: '30-10-2030', },
  { position: 5, ResignationDate: '30-10-2030', CompanyName: 'New', EmployeeName: 'Best Salesman', Department: 'CSE', NoticeDate: '30-10-2030', },
  { position: 6, ResignationDate: '30-10-2030', CompanyName: 'New', EmployeeName: 'Best Salesman', Department: 'CSE', NoticeDate: '30-10-2030', },
 
];
@Component({
  selector: 'app-resignations',
  templateUrl: './resignations.component.html',
  styleUrls: ['./resignations.component.css']
})
export class ResignationsComponent {
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Resignation"


  // Table 
  displayedColumns = ['position', 'checkbox', 'EmployeeName' , 'CompanyName', 'Department', 'ResignationDate',  'NoticeDate' , 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  
  openDialogAdd() {
    this.dialog.open(AddResignationComponent);
  }
  
  openDialogview() {
    this.dialog.open(AddResignationComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }

}
