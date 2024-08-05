import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HelpDeskAddComponent } from 'src/app/help-desk/help-desk-add/help-desk-add.component';
import { HelpDeskEditComponent } from 'src/app/help-desk/help-desk-edit/help-desk-edit.component';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

export interface Element {
  position: number;
  Name: string;
  Company: string;
  Website: string;
  Phone: string;
  Email: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, Name: 'John Doe', Company: 'CSE', Website: 'example.com', Phone: '1234567890', Email: 'john@example.com' },
  { position: 2, Name: 'Jane Smith', Company: 'ABC', Website: 'example.com', Phone: '9876543210', Email: 'jane@example.com' },
  { position: 3, Name: 'Bob Johnson', Company: 'XYZ', Website: 'example.com', Phone: '5555555555', Email: 'bob@example.com' },
  // Add more data as needed
];

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  FirstIcons: string = "assets/Dashboard/image 78.png"
  HearderHeding: string = "Clients"

  // Table 
  displayedColumns = ['checkbox', 'position', 'Name', 'Company', 'Website', 'Phone', 'Email', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }
  
  openDialogAdd() {
    this.dialog.open(AddClientComponent);
  }
  
  openDialogEddit() {
    this.dialog.open(EditClientComponent);
  }
  
  openDialogview() {
    // this.dialog.open(HolidayViewComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
