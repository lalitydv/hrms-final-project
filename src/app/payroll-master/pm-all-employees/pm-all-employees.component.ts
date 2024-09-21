import { Component, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pm-all-employees',
  templateUrl: './pm-all-employees.component.html',
  styleUrls: ['./pm-all-employees.component.css']
})
export class PmAllEmployeesComponent {
  FirstIcons: String = "assets/Dashboard/image 78.png"
  HearderHeding: String = "All Employees"
  panelOpenState = true;
  displayedColumns = ['position', 'UserID', 'Name', 'DOJ', 'FHName', 'Department', 'Designation', 'FullInfo', 'Salary', 'Filevault','DOB', 'DOL', 'Category', 'Cadre', 'Division', 'Sub department','Location', 'Gender', 'ESI no', 'UAN no'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  masterCheckbox = false;
  masterCheckbox2 = false;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(public dialog: MatDialog,private renderer: Renderer2) { }
  openDialog() {
    // this.dialog.open(DeletComponent);
  }
  selectedOption: string | null = null;
  selectOption(option: string): void {
    this.selectedOption = option;
  }

  onScroll(event: any) {
    const elements = document.getElementsByClassName('mat-column-fName') as HTMLCollectionOf<HTMLElement>;
    if(event.target.scrollLeft > 1){
      for (let i = 0; i < elements.length; i++) {
        this.renderer.addClass(elements[i], 'shadow-right');
      }
    }else{
      for (let i = 0; i < elements.length; i++) {
        this.renderer.removeClass(elements[i], 'shadow-right');
      }
    }
  }
}

export interface Element {
  UserID: string;
  Name: string;
  DOJ: string;
  FHName: string;
  Department: string;
  Designation: string;
  FullInfo: string;
  Salary: string;
  Filevault: string;
  position: number;
}

const ELEMENT_DATA: any[] = [
  { position: 1, UserID: '54463', Name: 'lalit', DOJ: "22/06/1999", FHName: 'mr Rajkumar', Department: 'Production', Designation: 'UF Operator', FullInfo: 'Full Info', Salary: 'Salary', Filevault: 'File vault', dob:'20/07/200', dol:'',category:'Staff', cadre:'Slkilled',division:'GENERAL',subDepartment:'accounts', location:'indore', gender:'Male',esiNo:'345654678',uanNo:'45687656789'  },
  { position: 1, UserID: '54463', Name: 'lalit', DOJ: "22/06/1999", FHName: 'mr Rajkumar', Department: 'Production', Designation: 'UF Operator', FullInfo: 'Full Info', Salary: 'Salary', Filevault: 'File vault', dob:'20/07/200', dol:'',category:'Staff', cadre:'Slkilled',division:'GENERAL',subDepartment:'accounts', location:'indore', gender:'Male',esiNo:'345654678',uanNo:'45687656789'  },
  { position: 1, UserID: '54463', Name: 'lalit', DOJ: "22/06/1999", FHName: 'mr Rajkumar', Department: 'Production', Designation: 'UF Operator', FullInfo: 'Full Info', Salary: 'Salary', Filevault: 'File vault', dob:'20/07/200', dol:'',category:'Staff', cadre:'Slkilled',division:'GENERAL',subDepartment:'accounts', location:'indore', gender:'Male',esiNo:'345654678',uanNo:'45687656789'  },
  { position: 1, UserID: '54463', Name: 'lalit', DOJ: "22/06/1999", FHName: 'mr Rajkumar', Department: 'Production', Designation: 'UF Operator', FullInfo: 'Full Info', Salary: 'Salary', Filevault: 'File vault', dob:'20/07/200', dol:'',category:'Staff', cadre:'Slkilled',division:'GENERAL',subDepartment:'accounts', location:'indore', gender:'Male',esiNo:'345654678',uanNo:'45687656789'  },


];

