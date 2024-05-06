import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ShiftDeleteComponent } from 'src/app/shift/shift-delete/shift-delete.component';
import { AddAwardComponent } from './add-award/add-award.component';
export interface Element {
  position: number;
  CompanyName: string;
  AwardName: string;
  EmployeeName: string;
  Department: string;
  Date: string;
 
}
const ELEMENT_DATA: Element[] = [
  { position: 1, AwardName: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', Department: 'Senior Executive 10', Date: '30-10-2030' },
  { position: 2, AwardName: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', Department: 'Senior Executive 10', Date: '30-10-2030' },
  { position: 3, AwardName: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', Department: 'Senior Executive 10', Date: '30-10-2030' },
  { position: 4, AwardName: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', Department: 'Senior Executive 10', Date: '30-10-2030' },
  { position: 5, AwardName: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', Department: 'Senior Executive 10', Date: '30-10-2030' },
  { position: 6, AwardName: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', Department: 'Senior Executive 10', Date: '30-10-2030' },
 
];

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent {
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Award"


  // Table 
  displayedColumns = ['position', 'checkbox', 'AwardName', 'EmployeeName', 'CompanyName', 'Department', 'Date',  'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ShiftDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(AddAwardComponent);
  }
  openDialogEddit() {
    this.dialog.open(AddAwardComponent);
  }
  openDialogview() {
    this.dialog.open(AddAwardComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }


}
