import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HolidayDeleteComponent } from '../holiday-delete/holiday-delete.component';
import { HolidayAddComponent } from '../holiday-add/holiday-add.component';
import { HolidayEditComponent } from '../holiday-edit/holiday-edit.component';
import { HolidayViewComponent } from '../holiday-view/holiday-view.component';
export interface Element {
  position: number;
  CompanyName: string;
  EventName: string;
  StartDate: string;
  EndDate: string;
 
}

const ELEMENT_DATA: Element[] = [
  { position: 1, CompanyName: 'CSE', EventName: 'Eid Ul Adha', StartDate: '30-10-2020', EndDate: '30-10-2030' },
  { position: 2, CompanyName: 'CSE', EventName: 'Eid Ul Adha', StartDate: '30-10-2020', EndDate: '30-10-2030' },
  { position: 3, CompanyName: 'CSE', EventName: 'Eid Ul Adha', StartDate: '30-10-2020', EndDate: '30-10-2030' },
  { position: 4, CompanyName: 'CSE', EventName: 'Eid Ul Adha', StartDate: '30-10-2020', EndDate: '30-10-2030' },
  { position: 5, CompanyName: 'CSE', EventName: 'Eid Ul Adha', StartDate: '30-10-2020', EndDate: '30-10-2030' },
  { position: 6, CompanyName: 'CSE', EventName: 'Eid Ul Adha', StartDate: '30-10-2020', EndDate: '30-10-2030' },
 
];
@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent {

  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Holiday"


  // Table 
  displayedColumns = ['position', 'checkbox', 'EventName', 'CompanyName', 'StartDate', 'EndDate',  'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(HolidayAddComponent);
  }
  openDialogEddit() {
    this.dialog.open(HolidayEditComponent);
  }
  openDialogview() {
    this.dialog.open(HolidayViewComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
  // Table 
