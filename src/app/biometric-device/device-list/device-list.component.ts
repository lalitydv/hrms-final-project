import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';

export interface Element {
  position: number;
  DeviceName: string;
  DeviceCode: string;
  ConnectionStatus: string;
  IPAddress: string;
  Port: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, DeviceName: 'Device 1', DeviceCode: 'DC001', ConnectionStatus: 'Connected', IPAddress: '192.168.1.1', Port: '8080' },
  { position: 2, DeviceName: 'Device 2', DeviceCode: 'DC002', ConnectionStatus: 'Disconnected', IPAddress: '192.168.1.2', Port: '8081' },
  { position: 3, DeviceName: 'Device 3', DeviceCode: 'DC003', ConnectionStatus: 'Connected', IPAddress: '192.168.1.3', Port: '8082' },
  // Add more data as needed
];

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Device";

  // Table 
  displayedColumns = ['position', 'checkbox', 'DeviceName', 'DeviceCode', 'ConnectionStatus', 'IPAddress', 'Port', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
