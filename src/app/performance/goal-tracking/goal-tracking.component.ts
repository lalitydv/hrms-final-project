import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';
import { AddProjectComponent } from 'src/app/project-management/projects/add-project/add-project.component';
import { EditProjectComponent } from 'src/app/project-management/projects/edit-project/edit-project.component';
import { AddNewGoalTrackingComponent } from './add-new-goal-tracking/add-new-goal-tracking.component';

export interface Element {
  position: number;
  checkbox: string;
  GoalType: string;
  Company: string;
  TargetAchievement: string;
  StartDate: string;
  EndDate: string;
  Progress: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, checkbox: '', GoalType: 'Project 1', Company: 'High', TargetAchievement: 'John Doe', StartDate: 'Client A', EndDate: '2022-01-01', Progress: '50%' },
  { position: 2, checkbox: '', GoalType: 'Project 2', Company: 'Medium', TargetAchievement: 'Jane Smith', StartDate: 'Client B', EndDate: '2022-02-01', Progress: '90%' },
  // Add more data as needed
];

@Component({
  selector: 'app-goal-tracking',
  templateUrl: './goal-tracking.component.html',
  styleUrls: ['./goal-tracking.component.css']
})
export class GoalTrackingComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Goal Tracking";

  // Table 
  displayedColumns = ['position', 'checkbox', 'GoalType', 'Company', 'TargetAchievement', 'StartDate', 'EndDate', 'Progress', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialogAdd() {
    this.dialog.open(AddNewGoalTrackingComponent);
  }

  openDialogEdit() {
    this.dialog.open(AddNewGoalTrackingComponent);
  }
  openDialog() {
    this.dialog.open(DeletComponent);
  }
  selectedOption: string | null = null;
  selectOption(option: string): void {
    this.selectedOption = option;
  }
}

