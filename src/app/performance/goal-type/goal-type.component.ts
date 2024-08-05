import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';
import { GoalTypeAddComponent } from './goal-type-add/goal-type-add.component';


export interface Element {
  position: number;
  Type: string;
 
}

const ELEMENT_DATA: Element[] = [
  { position: 1, Type: 'John Doe' },
  { position: 2, Type: 'Jane Smith'  },
  { position: 3, Type: 'Bob Johnson' },
  // Add more data as needed
];


@Component({
  selector: 'app-goal-type',
  templateUrl: './goal-type.component.html',
  styleUrls: ['./goal-type.component.css']
})
export class GoalTypeComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png"
  HearderHeding: string = "Goal Type"

  // Table 
  displayedColumns = [ 'position','checkbox', 'Type',  'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }
  
  openDialogAdd() {
    this.dialog.open(GoalTypeAddComponent);
  }
  
  openDialogEddit() {
    this.dialog.open(GoalTypeAddComponent);
  }
  
  openDialogview() {
    // this.dialog.open(HolidayViewComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}