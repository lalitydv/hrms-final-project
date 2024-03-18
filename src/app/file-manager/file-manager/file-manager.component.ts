import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';
import { AddFileComponent } from '../add-file/add-file.component';
import { FileUpdateComponent } from '../file-update/file-update.component';

export interface Element {
  position: number;
  File: string;
  Department: string;
  Size: string;
  Extension: string;
  ExternalLink: string;
  UploadedDate: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, File: 'File 1', Department: 'Department 1', Size: '100 KB', Extension: 'pdf', ExternalLink: 'Link 1', UploadedDate: '2022-01-01' },
  { position: 2, File: 'File 2', Department: 'Department 2', Size: '200 KB', Extension: 'docx', ExternalLink: 'Link 2', UploadedDate: '2022-01-02' },
  // Add more data as needed
];

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent {
  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "File Manager";

  // Table 
  displayedColumns = ['position', 'checkbox', 'File', 'Department', 'Size', 'Extension', 'ExternalLink', 'UploadedDate', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }

  openDialogAdd() {
    this.dialog.open(AddFileComponent);
  }

  openDialogEddit() {
    this.dialog.open(FileUpdateComponent);
  }

  openDialogview() {
    // this.dialog.open(HolidayViewComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
