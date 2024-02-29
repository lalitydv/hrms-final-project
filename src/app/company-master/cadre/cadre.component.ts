import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';

@Component({
  selector: 'app-cadre',
  templateUrl: './cadre.component.html',
  styleUrls: ['./cadre.component.css']
})
export class CadreComponent {

  Heading ='Cadre'
  panelOpenState = false;
  displayedColumns = ['position','cadre', 'actions'];
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
  cadre: string;
  position: number;
  // Year: string;


 

}

const ELEMENT_DATA: Element[] = [
  { position: 1,  cadre: 'Calpro Specialities Pvt Ltd',},
  { position: 2,  cadre: 'Calpro Specialities Pvt Ltd',},
  { position: 3,  cadre: 'Calpro Specialities Pvt Ltd',},
  { position: 4,  cadre: 'Calpro Specialities Pvt Ltd',},
  { position: 5,  cadre: 'Calpro Specialities Pvt Ltd',},
  
];



