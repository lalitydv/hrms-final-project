import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HelpDeskAddComponent } from 'src/app/help-desk/help-desk-add/help-desk-add.component';
import { HelpDeskEditComponent } from 'src/app/help-desk/help-desk-edit/help-desk-edit.component';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventInfoComponent } from './event-info/event-info.component';

export interface Element {
  position: number;
  Checkbox: string;
  Company: string;
  Department: string;
  EventTitle: string;
  EventDate: string;
  EventTime: string;
  Status: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, Checkbox: 'checkbox data', Company: 'CSE', Department: 'HR', EventTitle: 'Event 1', EventDate: '2022-03-15', EventTime: '10:00 AM', Status: 'Open' },
  { position: 2, Checkbox: 'checkbox data', Company: 'ABC', Department: 'Finance', EventTitle: 'Event 2', EventDate: '2022-03-16', EventTime: '11:00 AM', Status: 'In Progress' },
  { position: 3, Checkbox: 'checkbox data', Company: 'XYZ', Department: 'Marketing', EventTitle: 'Event 3', EventDate: '2022-03-17', EventTime: '12:00 PM', Status: 'Closed' },
  // Add more data as needed
];

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png"
  HearderHeding: string = "Event"

  // Table 
  displayedColumns = ['position', 'Checkbox', 'Company', 'Department', 'EventTitle', 'EventDate', 'EventTime', 'Status', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(AddEventComponent);
  }
  openDialogEddit() {
    this.dialog.open(UpdateEventComponent);
  }
  openDialogview() {
    this.dialog.open(EventInfoComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
