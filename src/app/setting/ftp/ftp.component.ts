import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ShiftAddComponent } from 'src/app/shift/shift-add/shift-add.component';
import { ShiftDeleteComponent } from 'src/app/shift/shift-delete/shift-delete.component';
import { ShiftEdditComponent } from 'src/app/shift/shift-eddit/shift-eddit.component';
import { AddFtpComponent } from './add-ftp/add-ftp.component';
export interface Element {
  position: number;
  HostAddress: string;
  PortNumber: string;
  FtpMethod: string;
  Username: string;
 
}

const ELEMENT_DATA: Element[] = [
  { position: 1, HostAddress: 'Calpro Specialities Pvt Ltd', PortNumber: 'Shift A', FtpMethod: 'Shift B', Username: 'Shift C', },
  { position: 2, HostAddress: 'Calpro Specialities Pvt Ltd', PortNumber: 'Shift A', FtpMethod: 'Shift B', Username: 'Shift C', },
  { position: 3, HostAddress: 'Calpro Specialities Pvt Ltd', PortNumber: 'Shift A', FtpMethod: 'Shift B', Username: 'Shift C', },
  { position: 4, HostAddress: 'Calpro Specialities Pvt Ltd', PortNumber: 'Shift A', FtpMethod: 'Shift B', Username: 'Shift C', },
  { position: 5, HostAddress: 'Calpro Specialities Pvt Ltd', PortNumber: 'Shift A', FtpMethod: 'Shift B', Username: 'Shift C', },
  { position: 6, HostAddress: 'Calpro Specialities Pvt Ltd', PortNumber: 'Shift A', FtpMethod: 'Shift B', Username: 'Shift C', },
  // Add more data as needed
];
@Component({
  selector: 'app-ftp',
  templateUrl: './ftp.component.html',
  styleUrls: ['./ftp.component.css']
})
export class FtpComponent {
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="System Setting"
  panelOpenState2 = false;
  checked = true;

  // Table 
  displayedColumns = ['position', 'checkbox', 'HostAddress', 'PortNumber', 'FtpMethod', 'Username'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ShiftDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(AddFtpComponent);
  }
  openDialogEddit() {
    this.dialog.open(ShiftEdditComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
