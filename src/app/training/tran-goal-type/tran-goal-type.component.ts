import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';
import { AddPerformanceAppraisalComponent } from 'src/app/performance/appraisal/add-performance-appraisal/add-performance-appraisal.component';
import { TrainingListAddComponent } from './training-list-add/training-list-add.component';

export interface Element {
  position: number;
  checkbox: string;
  TrainingType: string;
  Employee: string;
  Trainer: string;
  Company: string;
  StartDate: string;
  EndDate: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, checkbox: '', TrainingType: 'Project 1', Employee: 'High', Trainer: 'John Doe', Company: 'Client A', StartDate: '2022-01-01', EndDate: '2022-01-10' },
  { position: 2, checkbox: '', TrainingType: 'Project 2', Employee: 'Medium', Trainer: 'Jane Smith', Company: 'Client B', StartDate: '2022-02-01', EndDate: '2022-02-15' },
  // Add more data as needed
];

@Component({
  selector: 'app-tran-goal-type',
  templateUrl: './tran-goal-type.component.html',
  styleUrls: ['./tran-goal-type.component.css']
})
export class TranGoalTypeComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Training";

  // Table 
  displayedColumns = ['position', 'checkbox', 'TrainingType', 'Employee', 'Trainer', 'Company', 'StartDate', 'EndDate', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialogAdd() {
    this.dialog.open(TrainingListAddComponent);
  }

  openDialogEdit() {
    this.dialog.open(TrainingListAddComponent);
  }

  openDialog() {
    this.dialog.open(DeletComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
