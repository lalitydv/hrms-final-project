import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';

@Component({
  selector: 'app-sub-division',
  templateUrl: './sub-division.component.html',
  styleUrls: ['./sub-division.component.css']
})
export class SubDivisionComponent {

  Heading = 'Sub Division'
  panelOpenState = true;
  displayedColumns = ['position', 'SubDivision', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  masterCheckbox = false;
  masterCheckbox2 = false;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(DeletComponent);
  }
  selectedOption: string | null = null;
  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
export interface Element {
  SubDivision: string;
  position: number;
  // Year: string;




}

const ELEMENT_DATA: Element[] = [
  { position: 1, SubDivision: 'Calpro Specialities Pvt Ltd', },
  { position: 2, SubDivision: 'Calpro Specialities Pvt Ltd', },
  { position: 3, SubDivision: 'Calpro Specialities Pvt Ltd', },
  { position: 4, SubDivision: 'Calpro Specialities Pvt Ltd', },
  { position: 5, SubDivision: 'Calpro Specialities Pvt Ltd', },

];
