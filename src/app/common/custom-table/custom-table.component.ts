import { Component, Input } from '@angular/core';
import { DeletComponent } from './delet/delet.component';
import { MatDialog } from '@angular/material/dialog';
interface FinancialData {
  FinancialYear: string;
  Year: string;
  Action: string[]; // Assuming Action is an array of strings (image paths)
}
@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent {
  @Input() data: any[] = [];
  @Input() displayedColumns: string[] = [];

  
  getColumnHeader(column: string): string {
    // You can customize this method to provide dynamic column headers
    // For example, you can capitalize the first letter of each column
    return column.charAt(0).toUpperCase() + column.slice(1);
  }
  

  // Define editItem and deleteItem methods
  editItem(row: any): void {
    // Implement edit logic here
    console.log('Edit item:', row);
  }

  deleteItem(row: any): void {
    // Implement delete logic here
    console.log('Delete item:', row);
  }

  constructor(private dialog: MatDialog) {}

  openDeleteConfirmation(row: FinancialData): void {
    const dialogRef = this.dialog.open(DeletComponent, {
      width: '300px',
      data: { FinancialYear: row.FinancialYear }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Perform delete operation
        console.log('Delete confirmed');
      } else {
        console.log('Delete canceled');
      }
    });
  }
}
