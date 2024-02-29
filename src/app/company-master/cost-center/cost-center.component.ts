import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';

@Component({
  selector: 'app-cost-center',
  templateUrl: './cost-center.component.html',
  styleUrls: ['./cost-center.component.css']
})
export class CostCenterComponent {

  Heading ='Cost Center'
  panelOpenState = false;
  displayedColumns = ['position','CostCenter', 'actions'];
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
  CostCenter: string;
  position: number;
  // Year: string;


 

}

const ELEMENT_DATA: Element[] = [
  { position: 1,  CostCenter: 'Calpro Specialities Pvt Ltd',},
  { position: 2,  CostCenter: 'Calpro Specialities Pvt Ltd',},
  { position: 3,  CostCenter: 'Calpro Specialities Pvt Ltd',},
  { position: 4,  CostCenter: 'Calpro Specialities Pvt Ltd',},
  { position: 5,  CostCenter: 'Calpro Specialities Pvt Ltd',},
  
];
