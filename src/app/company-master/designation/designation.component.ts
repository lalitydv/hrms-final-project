import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent {

  Heading = 'Designation'
  panelOpenState = true;
  displayedColumns = ['position', 'Designation', 'actions'];
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
  Designation: string;
  position: number;
  // Year: string;




}

const ELEMENT_DATA: Element[] = [
  { position: 1, Designation: 'Calpro Specialities Pvt Ltd', },
  { position: 2, Designation: 'Calpro Specialities Pvt Ltd', },
  { position: 3, Designation: 'Calpro Specialities Pvt Ltd', },
  { position: 4, Designation: 'Calpro Specialities Pvt Ltd', },
  { position: 5, Designation: 'Calpro Specialities Pvt Ltd', },

];