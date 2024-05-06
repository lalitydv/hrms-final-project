import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search-icon',
  templateUrl: './search-icon.component.html',
  styleUrls: ['./search-icon.component.css']
})
export class SearchIconComponent {

  displayedColumns: string[] = ['paycode', 'name', 'company', 'department', 'designation', 'joiningDate', 'leavingDate'];

  dataSource = new MatTableDataSource<YourRowData>(YOUR_DATA_ARRAY);
}

interface YourRowData {
  paycode: string;
  name: string;
  company: string;
  department: string;
  designation: string;
  joiningDate: Date;
  leavingDate: Date;
}

const YOUR_DATA_ARRAY: YourRowData[] = [
  { paycode: '001', name: 'John Doe', company: 'ABC Inc.', department: 'HR', designation: 'Manager', joiningDate: new Date('2022-01-01'), leavingDate: new Date('2022-12-31') },
  // Add more rows as needed
];