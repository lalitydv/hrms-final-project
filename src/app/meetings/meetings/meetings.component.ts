import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { UpdateMeetingComponent } from './update-meeting/update-meeting.component';
import { MeetingInfoComponent } from './meeting-info/meeting-info.component';

export interface Element {
  position: number;
  Checkbox: string;
  Company: string;
  Employee: string; // Changed from Department to Employee
  MeetingTitle: string; // Changed from EventTitle to Meeting Title
  MeetingDate: string; // Changed from EventDate to Meeting Date
  MeetingTime: string; // Changed from EventTime to Meeting Time
  Status: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, Checkbox: '', Company: 'CSE', Employee: 'HR', MeetingTitle: 'Meeting 1', MeetingDate: '2022-03-15', MeetingTime: '10:00 AM', Status: 'Open' },
  { position: 2, Checkbox: '', Company: 'ABC', Employee: 'Finance', MeetingTitle: 'Meeting 2', MeetingDate: '2022-03-16', MeetingTime: '11:00 AM', Status: 'In Progress' },
  { position: 3, Checkbox: '', Company: 'XYZ', Employee: 'Marketing', MeetingTitle: 'Meeting 3', MeetingDate: '2022-03-17', MeetingTime: '12:00 PM', Status: 'Closed' },
  // Add more data as needed
];

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png"
  HearderHeding: string = "Meetings"

  // Table 
  displayedColumns = ['position', 'Checkbox', 'Company', 'Employee', 'MeetingTitle', 'MeetingDate', 'MeetingTime', 'Status', 'actions']; // Modified column names
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(AddMeetingComponent);
  }
  openDialogEddit() {
    this.dialog.open(UpdateMeetingComponent);
  }
  openDialogview() {
    this.dialog.open(MeetingInfoComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
