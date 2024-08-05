import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';
import { AddNewGoalTrackingComponent } from '../goal-tracking/add-new-goal-tracking/add-new-goal-tracking.component';
import { IndicatorAddComponent } from './indicator-add/indicator-add.component';

export interface Element {
  position: number;
  checkbox: string;
  Designation: string;
  Company: string;
  Department: string;
  AddedBy: string;
  CreatedAt: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, checkbox: '', Designation: 'Project 1', Company: 'High', Department: 'John Doe', AddedBy: 'Client A', CreatedAt: '2022-01-01' },
  { position: 2, checkbox: '', Designation: 'Project 2', Company: 'Medium', Department: 'Jane Smith', AddedBy: 'Client B', CreatedAt: '2022-02-01' },
  // Add more data as needed
];

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Performance Indicator";

  // Table 
  displayedColumns = ['position', 'checkbox', 'Designation', 'Company', 'Department', 'AddedBy', 'CreatedAt', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialogAdd() {
    this.dialog.open(IndicatorAddComponent);
  }

  openDialogEdit() {
    this.dialog.open(IndicatorAddComponent);
  }

  openDialog() {
    this.dialog.open(DeletComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
