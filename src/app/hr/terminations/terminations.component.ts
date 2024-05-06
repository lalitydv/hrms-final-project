import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ShiftDeleteComponent } from 'src/app/shift/shift-delete/shift-delete.component';
import { AddTerminationComponent } from './add-termination/add-termination.component';
export interface Element {
  position: number;
  CompanyName: string;
  NoticeDate: string;
  Employee: string;
  TerminateDate: string;
 
}
const ELEMENT_DATA: Element[] = [
  { position: 1, NoticeDate: '31-01-2023', CompanyName: 'CSE', Employee: 'New', TerminateDate: '31-01-2023'},
  { position: 2, NoticeDate: '31-01-2023', CompanyName: 'CSE', Employee: 'New', TerminateDate: '31-01-2023'},
  { position: 3, NoticeDate: '31-01-2023', CompanyName: 'CSE', Employee: 'New', TerminateDate: '31-01-2023'},
  { position: 4, NoticeDate: '31-01-2023', CompanyName: 'CSE', Employee: 'New', TerminateDate: '31-01-2023'},
  { position: 5, NoticeDate: '31-01-2023', CompanyName: 'CSE', Employee: 'New', TerminateDate: '31-01-2023'},
  { position: 6, NoticeDate: '31-01-2023', CompanyName: 'CSE', Employee: 'New', TerminateDate: '31-01-2023'},
 
];

@Component({
  selector: 'app-terminations',
  templateUrl: './terminations.component.html',
  styleUrls: ['./terminations.component.css']
})
export class TerminationsComponent {
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Termination"


  // Table 
  displayedColumns = ['position', 'checkbox', 'Employee' , 'CompanyName', 'TerminateDate',   'NoticeDate' , 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ShiftDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(AddTerminationComponent);
  }
  openDialogEddit() {
    this.dialog.open(AddTerminationComponent);
  }
  openDialogview() {
    this.dialog.open(AddTerminationComponent);
    
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }

}
