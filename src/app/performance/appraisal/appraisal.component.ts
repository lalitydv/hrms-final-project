import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';
import { AddNewGoalTrackingComponent } from '../goal-tracking/add-new-goal-tracking/add-new-goal-tracking.component';
import { AddPerformanceAppraisalComponent } from './add-performance-appraisal/add-performance-appraisal.component';

export interface Element {
  position: number;
  checkbox: string;
  Company: string;
  Employee: string;
  Department: string;
  Designation: string;
  AppraisalDate: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, checkbox: '', Company: 'Project 1', Employee: 'High', Department: 'John Doe', Designation: 'Client A', AppraisalDate: '2022-01-01' },
  { position: 2, checkbox: '', Company: 'Project 2', Employee: 'Medium', Department: 'Jane Smith', Designation: 'Client B', AppraisalDate: '2022-02-01' },
  // Add more data as needed
];

@Component({
  selector: 'app-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.css']
})
export class AppraisalComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Appraisal";

  // Table 
  displayedColumns = ['position', 'checkbox', 'Company', 'Employee', 'Department', 'Designation', 'AppraisalDate', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialogAdd() {
    this.dialog.open(AddPerformanceAppraisalComponent);
  }

  openDialogEdit() {
    this.dialog.open(AddPerformanceAppraisalComponent);
  }

  openDialog() {
    this.dialog.open(DeletComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
