import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddClientComponent } from '../clients/add-client/add-client.component';
import { EditClientComponent } from '../clients/edit-client/edit-client.component';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';
import { AddTaskTestComponent } from './add-task-test/add-task-test.component';

export interface TaskElement {
  position: number;
  Title: string;
  StartDate: string;
  EndDate: string;
  Status: string;
  AssignedEmployee: string;
  CreatedBy: string;
  Progress: string;
}

const TASK_DATA: TaskElement[] = [
  { position: 1, Title: 'Task 1', StartDate: '2024-05-08', EndDate: '2024-05-10', Status: 'Pending', AssignedEmployee: 'John Doe', CreatedBy: 'Admin', Progress: '50%' },
  { position: 2, Title: 'Task 2', StartDate: '2024-05-09', EndDate: '2024-05-12', Status: 'In Progress', AssignedEmployee: 'Jane Smith', CreatedBy: 'Admin', Progress: '70%' },
  { position: 3, Title: 'Task 3', StartDate: '2024-05-10', EndDate: '2024-05-15', Status: 'Completed', AssignedEmployee: 'Bob Johnson', CreatedBy: 'Admin', Progress: '100%' }
  // Add more data as needed
];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png";
  HearderHeding: string = "Tasks";


  displayedColumns: string[] = ['checkbox', 'position', 'Title', 'StartDate', 'EndDate', 'Status', 'AssignedEmployee', 'CreatedBy', 'Progress', 'actions'];
  dataSource = new MatTableDataSource<TaskElement>(TASK_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }

  openDialogAdd() {
    this.dialog.open(AddTaskTestComponent);
  }

  openDialogEddit() {
    this.dialog.open(AddTaskTestComponent);
  }

  statusChanged(status: string) {
    console.log('Selected Status:', status);
  }
  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
