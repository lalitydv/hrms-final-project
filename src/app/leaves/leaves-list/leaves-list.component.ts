import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LeavesAddComponent } from '../leaves-add/leaves-add.component';
import { LeavesViewComponent } from '../leaves-view/leaves-view.component';
export interface Element {
  position: number;
  Employee: string;
  LeaveType: string;
  Duration: string;
  AppliedDate: string;

  Department: string;
 
}

const ELEMENT_DATA: Element[] = [
  { position: 1, Employee: 'CSE', LeaveType: 'Eid Ul Adha', Duration: '30-10-2020', AppliedDate: '30-10-2030',  Department : 'CSSE' },
  { position: 2, Employee: 'CSE', LeaveType: 'Eid Ul Adha', Duration: '30-10-2020', AppliedDate: '30-10-2030' , Department : 'CSSE' },
  { position: 3, Employee: 'CSE', LeaveType: 'Eid Ul Adha', Duration: '30-10-2020', AppliedDate: '30-10-2030' , Department : 'CSSE' },
  { position: 4, Employee: 'CSE', LeaveType: 'Eid Ul Adha', Duration: '30-10-2020', AppliedDate: '30-10-2030' , Department : 'CSSE' },
  { position: 5, Employee: 'CSE', LeaveType: 'Eid Ul Adha', Duration: '30-10-2020', AppliedDate: '30-10-2030' , Department : 'CSSE' },
  { position: 6, Employee: 'CSE', LeaveType: 'Eid Ul Adha', Duration: '30-10-2020', AppliedDate: '30-10-2030' , Department : 'CSSE' },
 
];
@Component({
  selector: 'app-leaves-list',
  templateUrl: './leaves-list.component.html',
  styleUrls: ['./leaves-list.component.css']
})
export class LeavesListComponent {

  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Leaves"


  // Table 
  displayedColumns = ['position', 'checkbox', 'LeaveType', 'Employee','Department', 'Duration', 'AppliedDate',  'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }


  openDialogAdd() {
    this.dialog.open(LeavesAddComponent);
  }
 
  openDialogview() {
    this.dialog.open(LeavesViewComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
  // Table 
