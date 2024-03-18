import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { OrgWideSearchComponent } from '../org-wide-search/org-wide-search.component';

@Component({
  selector: 'app-commen-emp-master',
  templateUrl: './commen-emp-master.component.html',
  styleUrls: ['./commen-emp-master.component.css']
})
export class CommenEmpMasterComponent {
  

 
  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="All Employees"
  panelOpenState = true;
    displayedColumns = ['position','UserID', 'Name', 'DOJ','FHName','Department','Designation','FullInfo', 'Salary','Filevault'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    masterCheckbox = false;
    masterCheckbox2 = false;
    
   
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
    constructor(public dialog: MatDialog ) { }
    popup():void{
      const deletepopup =this.dialog.open(OrgWideSearchComponent,{
        width:"50%",
        data:{},
      })
    }
    selectedOption: string | null = null;
    selectOption(option: string): void {
      this.selectedOption = option;
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
  
  const ELEMENT_DATA: Element[] = [
    { position: 1,  UserID: '54463', Name:'lalit',DOJ:"22/06/1999", FHName: 'mr Rajkumar',Department: 'Production',Designation: 'UF Operator',FullInfo:'Full Info', Salary: 'Salary',Filevault : 'File vault'},
    { position: 1,  UserID: '54463', Name:'lalit',DOJ:"22/06/1999", FHName: 'mr Rajkumar',Department: 'Production',Designation: 'UF Operator',FullInfo:'Full Info', Salary: 'Salary',Filevault : 'File vault'},
    { position: 1,  UserID: '54463', Name:'lalit',DOJ:"22/06/1999", FHName: 'mr Rajkumar',Department: 'Production',Designation: 'UF Operator',FullInfo:'Full Info', Salary: 'Salary',Filevault : 'File vault'},
    { position: 1,  UserID: '54463', Name:'lalit',DOJ:"22/06/1999", FHName: 'mr Rajkumar',Department: 'Production',Designation: 'UF Operator',FullInfo:'Full Info', Salary: 'Salary',Filevault : 'File vault'},
  
    
  ];
  
