
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';

export interface Element {
  // position: number;
  FullName: string;
  Email: string;
  Mobile: string;
  HaveFinger: boolean;
  HaveFace: boolean;
  JoinDate: string;
  Count: number;
}

const ELEMENT_DATA: Element[] = [
  {  FullName: 'John Doe', Email: 'john@example.com', Mobile: '1234567890', HaveFinger: true, HaveFace: false, JoinDate: '2022-01-01', Count: 5 },
  {  FullName: 'Jane Doe', Email: 'jane@example.com', Mobile: '9876543210', HaveFinger: false, HaveFace: true, JoinDate: '2022-01-15', Count: 8 },
  {  FullName: 'Alice Smith', Email: 'alice@example.com', Mobile: '4567890123', HaveFinger: true, HaveFace: true, JoinDate: '2022-02-01', Count: 10 },
  // Add more data as needed
];

@Component({
  selector: 'app-device-employee',
  templateUrl: './device-employee.component.html',
  styleUrls: ['./device-employee.component.css']
})
export class DeviceEmployeeComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Device Employee";

  // Table 
  displayedColumns = [ 'FullName', 'Email', 'Mobile', 'HaveFinger', 'HaveFace', 'JoinDate', 'Count',];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
   // Function to get profile image URL (replace this with your logic to get the actual profile image URL)
   getProfileImageUrl(element: Element): string {
    // Assuming profile images are stored in assets folder with filenames as FullName
    return `../../../assets/EMP/Rectangle 12349.png`;
  }
}
