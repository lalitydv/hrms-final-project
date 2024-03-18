import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';
import { AddFileComponent } from '../add-file/add-file.component';
import { FileUpdateComponent } from '../file-update/file-update.component';
import { AddFileOfficialDocumenComponent } from '../add-file-official-documen/add-file-official-documen.component';

export interface Element {
  Sno: number;
  Title: string;
  Company: string;
  Type: string;
  ExpiryDate: string;
  Notification: string;
  AddedBy: string;
}

const ELEMENT_DATA: Element[] = [
  { Sno: 1, Title: 'File 1', Company: 'Department 1', Type: '100 KB', ExpiryDate: 'pdf', Notification: 'Link 1', AddedBy: '2022-01-01' },
  { Sno: 2, Title: 'File 2', Company: 'Department 2', Type: '200 KB', ExpiryDate: 'docx', Notification: 'Link 2', AddedBy: '2022-01-02' },
  
];


@Component({
  selector: 'app-official-documents',
  templateUrl: './official-documents.component.html',
  styleUrls: ['./official-documents.component.css']
})
export class OfficialDocumentsComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Official Document";

  // Table 
  displayedColumns = ['Sno', 'checkbox', 'Title', 'Company', 'Type', 'ExpiryDate', 'Notification', 'AddedBy', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }

  openDialogAdd() {
    this.dialog.open(AddFileOfficialDocumenComponent);
  }

  openDialogEddit() {
    this.dialog.open(AddFileOfficialDocumenComponent);
  }

  openDialogview() {
    // this.dialog.open(HolidayViewComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
