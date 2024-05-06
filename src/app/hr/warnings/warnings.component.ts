import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ShiftDeleteComponent } from 'src/app/shift/shift-delete/shift-delete.component';
import { AddWarningComponent } from './add-warning/add-warning.component';
export interface Element {
  position: number;
  CompanyName: string;
  WarningDate: string;
  Employee: string;
  Subject: string;
  Status: string;
 
}
const ELEMENT_DATA: Element[] = [
  { position: 1, WarningDate: 'Best Salesman', CompanyName: 'CSE', Employee: 'New', Subject: 'Senior Executive 10',  Status: '' },
  { position: 2, WarningDate: 'Best Salesman', CompanyName: 'CSE', Employee: 'New', Subject: 'Senior Executive 10',  Status: '' },
  { position: 3, WarningDate: 'Best Salesman', CompanyName: 'CSE', Employee: 'New', Subject: 'Senior Executive 10',  Status: '' },
  { position: 4, WarningDate: 'Best Salesman', CompanyName: 'CSE', Employee: 'New', Subject: 'Senior Executive 10',  Status: '' },
  { position: 5, WarningDate: 'Best Salesman', CompanyName: 'CSE', Employee: 'New', Subject: 'Senior Executive 10',  Status: '' },
  { position: 6, WarningDate: 'Best Salesman', CompanyName: 'CSE', Employee: 'New', Subject: 'Senior Executive 10',  Status: '' },
 
];

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.css']
})
export class WarningsComponent {
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Warnings"


  // Table 
  displayedColumns = ['position', 'checkbox', 'Employee' , 'CompanyName', 'Subject',   'WarningDate',  'Status' , 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ShiftDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(AddWarningComponent);
  }
  openDialogEddit() {
    this.dialog.open(AddWarningComponent);
  }
  openDialogview() {
    this.dialog.open(AddWarningComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }


}
