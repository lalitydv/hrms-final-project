import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ShiftDeleteComponent } from 'src/app/shift/shift-delete/shift-delete.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
export interface Element {
  position: number;
  CompanyName: string;
  ComplaintTitle: string;
  ComplaintFrom: string;
  ComplaintAgainst: string;
  Date: string;
 
}
const ELEMENT_DATA: Element[] = [
  { position: 1, ComplaintTitle: 'Best Salesman', CompanyName: 'CSE', ComplaintFrom: 'New', ComplaintAgainst: 'Senior Executive 10',  Date: '30-10-2030' },
  { position: 2, ComplaintTitle: 'Best Salesman', CompanyName: 'CSE', ComplaintFrom: 'New', ComplaintAgainst: 'Senior Executive 10',  Date: '30-10-2030' },
  { position: 3, ComplaintTitle: 'Best Salesman', CompanyName: 'CSE', ComplaintFrom: 'New', ComplaintAgainst: 'Senior Executive 10',  Date: '30-10-2030' },
  { position: 4, ComplaintTitle: 'Best Salesman', CompanyName: 'CSE', ComplaintFrom: 'New', ComplaintAgainst: 'Senior Executive 10',  Date: '30-10-2030' },
  { position: 5, ComplaintTitle: 'Best Salesman', CompanyName: 'CSE', ComplaintFrom: 'New', ComplaintAgainst: 'Senior Executive 10',  Date: '30-10-2030' },
  { position: 6, ComplaintTitle: 'Best Salesman', CompanyName: 'CSE', ComplaintFrom: 'New', ComplaintAgainst: 'Senior Executive 10',  Date: '30-10-2030' },
 
];

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Complaints"


  // Table 
  displayedColumns = ['position', 'checkbox', 'ComplaintFrom' ,'ComplaintAgainst', 'CompanyName',  'ComplaintTitle',  'Date' , 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ShiftDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(AddComplaintComponent);
  }
  openDialogEddit() {
    this.dialog.open(AddComplaintComponent);
  }
  openDialogview() {
    this.dialog.open(AddComplaintComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }

}
