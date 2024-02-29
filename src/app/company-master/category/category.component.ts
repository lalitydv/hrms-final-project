import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
Heading ='Category'
  panelOpenState = false;
  displayedColumns = ['position','Categroy', 'actions'];
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
  Categroy: string;
  position: number;
  // Year: string;


 

}

const ELEMENT_DATA: Element[] = [
  { position: 1,  Categroy: 'Calpro Specialities Pvt Ltd',},
  { position: 2,  Categroy: 'Calpro Specialities Pvt Ltd',},
  { position: 3,  Categroy: 'Calpro Specialities Pvt Ltd',},
  { position: 4,  Categroy: 'Calpro Specialities Pvt Ltd',},
  { position: 5,  Categroy: 'Calpro Specialities Pvt Ltd',},
  
];


