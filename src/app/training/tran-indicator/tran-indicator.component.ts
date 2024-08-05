import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';
import { GoalTypeAddComponent } from 'src/app/performance/goal-type/goal-type-add/goal-type-add.component';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';

export interface Element {
  position: number;
  Type: string;
  company: string;
  phone: string;
  email: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, Type: 'John Doe', company: 'Company A', phone: '123-456-7890', email: 'john@example.com' },
  { position: 2, Type: 'Jane Smith', company: 'Company B', phone: '234-567-8901', email: 'jane@example.com' },
  { position: 3, Type: 'Bob Johnson', company: 'Company C', phone: '345-678-9012', email: 'bob@example.com' },
  // Add more data as needed
];

@Component({
  selector: 'app-tran-indicator',
  templateUrl: './tran-indicator.component.html',
  styleUrls: ['./tran-indicator.component.css']
})
export class TranIndicatorComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png"
  HearderHeding: string = "Trainer"
  
  // Table columns
  displayedColumns = ['position', 'Type', 'company', 'phone', 'email', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialogdelt() {
    this.dialog.open(DeletComponent);
  }
  
  openDialogAdd() {
    this.dialog.open(AddTrainerComponent);
  }
  
  openDialogEddit() {
    this.dialog.open(AddTrainerComponent);
  }
  
  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
