import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';

@Component({
  selector: 'app-tablefinacial',
  templateUrl: './tablefinacial.component.html',
  styleUrls: ['./tablefinacial.component.css']
})
export class TablefinacialComponent {

  displayedColumns = [ 'FinancialYear','Year', 'actions'];
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
  FinancialYear: string;
  // position: number;
  Year: string;


 

}

const ELEMENT_DATA: Element[] = [
  {  FinancialYear: '2023-2024', Year: "$580",},
  {  FinancialYear: '2023-2024', Year: "$580",},
  {  FinancialYear: '2023-2024', Year: "$580",},
  {  FinancialYear: '2023-2024', Year: "$580",},
  {  FinancialYear: '2023-2024', Year: "$580",},
  
];