import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddRoleComponent } from '../add-role/add-role.component';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';

const ELEMENT_DATA: any[] = [
  { position: 1, checkbox: '', roleName: 'admin', description: 'this is test description', status: 'Active' },
  { position: 2, checkbox: '', roleName: 'user', description: 'testing..........', status: 'Active' },
  // Add more data as needed
];

@Component({
  selector: 'app-rolee-list',
  templateUrl: './rolee-list.component.html',
  styleUrls: ['./rolee-list.component.css']
})

export class RoleeListComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Role List";

  // Table 
  displayedColumns = ['position', 'checkbox', 'Role Name', 'Description', 'Status', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialogAdd() {
    this.dialog.open(AddRoleComponent);
  }

  openDialogEdit() {
    this.dialog.open(AddRoleComponent);
  }
  openDialog() {
    this.dialog.open(DeletComponent);
  }
  selectedOption: string | null = null;
  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
