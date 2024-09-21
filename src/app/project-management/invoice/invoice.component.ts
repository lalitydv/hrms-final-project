import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddClientComponent } from '../clients/add-client/add-client.component';
import { EditClientComponent } from '../clients/edit-client/edit-client.component';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';
import { InvoiceAddComponent } from './invoice-add/invoice-add.component';

export interface Element {
  position: number;
  Invoice: string;
  Project: string;
  Total: string;
  InvoiceDate: string;
  DueDate: string;
  Status: string;
  ChangesStatus: string; // Add ChangesStatus property
}

const ELEMENT_DATA: Element[] = [
  { position: 1, Invoice: '1234', Project: 'Project 1', Total: '$1000', InvoiceDate: '2024-05-08', DueDate: '2024-05-15', Status: 'Paid', ChangesStatus:'Select' },
  { position: 2, Invoice: '5678', Project: 'Project 2', Total: '$1500', InvoiceDate: '2024-05-10', DueDate: '2024-05-17', Status: 'Pending', ChangesStatus:'Select' },
  { position: 3, Invoice: '91011', Project: 'Project 3', Total: '$800', InvoiceDate: '2024-05-12', DueDate: '2024-05-20', Status: 'Paid' , ChangesStatus:'Select'},
  // Add more data as needed
];

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png";
  HearderHeding: string = "Invoice";
  statusOptions: string[] = ['Select','Option 1', 'Option 2', 'Option 3']; // Add your select options here
  displayedColumns = ['checkbox', 'position', 'Invoice', 'Project', 'Total', 'Invoice Date', 'Due Date', 'Status', 'action', 'ChangesStatus'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }
  
  openDialogAdd() {
    this.dialog.open(InvoiceAddComponent);
  }
  
  openDialogEdit() {
    this.dialog.open(InvoiceAddComponent);
  }
  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
  statusChanged(newValue: string) {
    console.log('Selected status:', newValue);
    // You can perform any necessary actions here when the status is changed
  }
}
