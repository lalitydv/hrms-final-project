import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent {

  panelOpenState = false;
  displayedColumns = ['position','CompanyName', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  masterCheckbox = false;
  masterCheckbox2 = false;
  
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(public dialog: MatDialog ) { }
  openDialog (){
    this.dialog.open(DeletComponent);
  }
  selectedOption: string | null = null;
  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
export interface Element {
  CompanyName: string;
  position: number;
  // Year: string;


 

}

const ELEMENT_DATA: Element[] = [
  { position: 1,  CompanyName: 'Calpro Specialities Pvt Ltd',},
  { position: 2,  CompanyName: 'Calpro Specialities Pvt Ltd',},
  { position: 3,  CompanyName: 'Calpro Specialities Pvt Ltd',},
  { position: 4,  CompanyName: 'Calpro Specialities Pvt Ltd',},
  { position: 5,  CompanyName: 'Calpro Specialities Pvt Ltd',},
  
];

