import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ShiftDeleteComponent } from 'src/app/shift/shift-delete/shift-delete.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
export interface Element {
  position: number;
  CompanyName: string;
  EmployeeName: string;
  PromotionTitle: string;
  Date: string;
 
}
const ELEMENT_DATA: Element[] = [
  { position: 1, CompanyName: 'CSE', EmployeeName: 'New', PromotionTitle: 'Senior Executive 10', Date: '30-10-2030' },
  { position: 2, CompanyName: 'CSE', EmployeeName: 'New', PromotionTitle: 'Senior Executive 10', Date: '30-10-2030' },
  { position: 3, CompanyName: 'CSE', EmployeeName: 'New', PromotionTitle: 'Senior Executive 10', Date: '30-10-2030' },
  { position: 4, CompanyName: 'CSE', EmployeeName: 'New', PromotionTitle: 'Senior Executive 10', Date: '30-10-2030' },
  { position: 5, CompanyName: 'CSE', EmployeeName: 'New', PromotionTitle: 'Senior Executive 10', Date: '30-10-2030' },
  { position: 6, CompanyName: 'CSE', EmployeeName: 'New', PromotionTitle: 'Senior Executive 10', Date: '30-10-2030' },
 
];

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent {
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Promotion"


  // Table 
  displayedColumns = ['position', 'checkbox', 'EmployeeName', 'CompanyName', 'PromotionTitle', 'Date',  'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ShiftDeleteComponent);
  }
  openDialogAdd() {
    this.dialog.open(AddPromotionComponent);
  }
  openDialogEddit() {
    this.dialog.open(AddPromotionComponent);
  }
  openDialogview() {
    this.dialog.open(AddPromotionComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }

}
