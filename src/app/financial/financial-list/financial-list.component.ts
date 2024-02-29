import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';

@Component({
  selector: 'app-financial-list',
  templateUrl: './financial-list.component.html',
  styleUrls: ['./financial-list.component.css']
})
export class FinancialListComponent  {
  

 
  tableheading = 'Financial Year';
  
  // Define tableData1 as a class member
  tableData1 = [
    { FinancialYear: '2023-2024', Year: '$500', Action: ['assets/Finens/Group 1000006040.png', 'assets/Finens/Group 1000006040.png'] },
    { FinancialYear: '2023-2024', Year: '$500', Action: ['assets/Finens/Group 1000006040.png', 'assets/Finens/Group 1000006040.png'] },
    { FinancialYear: '2023-2024', Year: '$500', Action: ['assets/Finens/Group 1000006040.png', 'assets/Finens/Group 1000006040.png'] },
    { FinancialYear: '2023-2024', Year: '$500', Action: ['assets/Finens/Group 1000006040.png', 'assets/Finens/Group 1000006040.png'] },
    // Add more data as needed
  ];

  display: any = ['FinancialYear', 'Year', 'Action'];
 
  
}