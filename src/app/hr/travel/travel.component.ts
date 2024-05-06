import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ShiftDeleteComponent } from 'src/app/shift/shift-delete/shift-delete.component';
import { AddTravelComponent } from './add-travel/add-travel.component';

export interface Element {
  position: number;
  CompanyName: string;
  PurposeOfVisit: string;
  EmployeeName: string;
  PlaceOfVisit: string;
  StartDate: string;
  EndDate: string;
 
}
const ELEMENT_DATA: Element[] = [
  { position: 1, PurposeOfVisit: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', PlaceOfVisit: 'Senior Executive 10', StartDate: '30-10-2030', EndDate: '30-10-2030' },
  { position: 2, PurposeOfVisit: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', PlaceOfVisit: 'Senior Executive 10', StartDate: '30-10-2030', EndDate: '30-10-2030' },
  { position: 3, PurposeOfVisit: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', PlaceOfVisit: 'Senior Executive 10', StartDate: '30-10-2030', EndDate: '30-10-2030' },
  { position: 4, PurposeOfVisit: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', PlaceOfVisit: 'Senior Executive 10', StartDate: '30-10-2030', EndDate: '30-10-2030' },
  { position: 5, PurposeOfVisit: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', PlaceOfVisit: 'Senior Executive 10', StartDate: '30-10-2030', EndDate: '30-10-2030' },
  { position: 6, PurposeOfVisit: 'Best Salesman', CompanyName: 'CSE', EmployeeName: 'New', PlaceOfVisit: 'Senior Executive 10', StartDate: '30-10-2030', EndDate: '30-10-2030' },
 
];

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent {
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Travel"


  // Table 
  displayedColumns = ['position', 'checkbox', 'EmployeeName' , 'CompanyName', 'PlaceOfVisit', 'PurposeOfVisit',  'StartDate', 'EndDate' , 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ShiftDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(AddTravelComponent);
  }
  openDialogEddit() {
    this.dialog.open(AddTravelComponent);
  }
  openDialogview() {
    this.dialog.open(AddTravelComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }



}
