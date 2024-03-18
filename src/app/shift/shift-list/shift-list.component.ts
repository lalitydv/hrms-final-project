import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShiftDeleteComponent } from '../shift-delete/shift-delete.component';
import { MatTableDataSource } from '@angular/material/table';
import { ShiftAddComponent } from '../shift-add/shift-add.component';
import { ShiftEdditComponent } from '../shift-eddit/shift-eddit.component';

export interface Element {
  position: number;
  CompanyName: string;
  Shift: string;
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, CompanyName: 'Calpro Specialities Pvt Ltd', Shift: 'Morning', Monday: 'Shift A', Tuesday: 'Shift B', Wednesday: 'Shift C', Thursday: 'Shift D', Friday: 'Shift E', Saturday: 'Shift F', Sunday: 'Shift G' },
  { position: 2, CompanyName: 'Calpro Specialities Pvt Ltd', Shift: 'Morning', Monday: 'Shift A', Tuesday: 'Shift B', Wednesday: 'Shift C', Thursday: 'Shift D', Friday: 'Shift E', Saturday: 'Shift F', Sunday: 'Shift G' },
  { position: 3, CompanyName: 'Calpro Specialities Pvt Ltd', Shift: 'Morning', Monday: 'Shift A', Tuesday: 'Shift B', Wednesday: 'Shift C', Thursday: 'Shift D', Friday: 'Shift E', Saturday: 'Shift F', Sunday: 'Shift G' },
  { position: 4, CompanyName: 'Calpro Specialities Pvt Ltd', Shift: 'Morning', Monday: 'Shift A', Tuesday: 'Shift B', Wednesday: 'Shift C', Thursday: 'Shift D', Friday: 'Shift E', Saturday: 'Shift F', Sunday: 'Shift G' },
  { position: 5, CompanyName: 'Calpro Specialities Pvt Ltd', Shift: 'Morning', Monday: 'Shift A', Tuesday: 'Shift B', Wednesday: 'Shift C', Thursday: 'Shift D', Friday: 'Shift E', Saturday: 'Shift F', Sunday: 'Shift G' },
  { position: 6, CompanyName: 'Calpro Specialities Pvt Ltd', Shift: 'Morning', Monday: 'Shift A', Tuesday: 'Shift B', Wednesday: 'Shift C', Thursday: 'Shift D', Friday: 'Shift E', Saturday: 'Shift F', Sunday: 'Shift G' },
  // Add more data as needed
];
@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.css']
})
export class ShiftListComponent {
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Shift"


  // Table 
  displayedColumns = ['position', 'checkbox', 'CompanyName', 'Shift', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ShiftDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(ShiftAddComponent);
  }
  openDialogEddit() {
    this.dialog.open(ShiftEdditComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
  // Table 


