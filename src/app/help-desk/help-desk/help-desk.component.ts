import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HelpDeskAddComponent } from '../help-desk-add/help-desk-add.component';
import { HelpDeskEditComponent } from '../help-desk-edit/help-desk-edit.component';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';

export interface Element {
  position: number;
  TicketCode: string;
  Employee: string;
  Company: string;
  Subject: string;
  Priority: string;
  Status: string;
  Date: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, TicketCode: '123', Employee: 'John Doe', Company: 'CSE', Subject: 'Issue with login', Priority: 'High', Status: 'Open', Date: '2022-03-15' },
  { position: 2, TicketCode: '124', Employee: 'Jane Smith', Company: 'ABC', Subject: 'Payment not processing', Priority: 'Medium', Status: 'In Progress', Date: '2022-03-16' },
  { position: 3, TicketCode: '125', Employee: 'Bob Johnson', Company: 'XYZ', Subject: 'Product not found', Priority: 'Low', Status: 'Closed', Date: '2022-03-17' },
  // Add more data as needed
];

@Component({
  selector: 'app-help-desk',
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})
export class HelpDeskComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png"
  HearderHeding: string = "Help Desk"

  // Table 
  displayedColumns = ['position', 'checkbox', 'TicketCode', 'Employee', 'Company', 'Subject', 'Priority', 'Status', 'Date', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(HelpDeskAddComponent);
  }
  openDialogEddit() {
    this.dialog.open(HelpDeskEditComponent);
  }
  openDialogview() {
    // this.dialog.open(HolidayViewComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
