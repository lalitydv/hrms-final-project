import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayAddComponent } from 'src/app/holidays/holiday-add/holiday-add.component';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';
import { HolidayEditComponent } from 'src/app/holidays/holiday-edit/holiday-edit.component';
import { HolidayViewComponent } from 'src/app/holidays/holiday-view/holiday-view.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

export interface Element {
  position: number;
  checkbox: string;
  ProjectName: string;
  Priority: string;
  AssignedEmployee: string;
  Client: string;
  StartDate: string;
  EndDate: string;
  Progress: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, checkbox: '', ProjectName: 'Project 1', Priority: 'High', AssignedEmployee: 'John Doe', Client: 'Client A', StartDate: '2022-01-01', EndDate: '2022-12-31', Progress:"50%" },
  { position: 2, checkbox: '', ProjectName: 'Project 2', Priority: 'Medium', AssignedEmployee: 'Jane Smith', Client: 'Client B', StartDate: '2022-02-01', EndDate: '2022-11-30',Progress:"90%" },
  // Add more data as needed
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Projects";

  // Table 
  displayedColumns = ['position', 'checkbox', 'ProjectName', 'Priority', 'AssignedEmployee', 'Client', 'StartDate', 'EndDate', 'Progress', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }

  openDialogAdd() {
    this.dialog.open(AddProjectComponent);
  }

  openDialogEdit() {
    this.dialog.open(EditProjectComponent);
  }

  openDialogView() {
    this.dialog.open(HolidayViewComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
