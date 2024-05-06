
import { Component, inject } from '@angular/core';

export interface Fruit {
  name: string;
}
export interface PeriodicElement {
  sno: number;
  title: string;
  client: string;
  startDate: string;
  endDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sno: 1, title: 'Title 1', client: 'Client A', startDate: '2024-01-01', endDate: '2024-01-10'},
  {sno: 2, title: 'Title 2', client: 'Client B', startDate: '2024-02-01', endDate: '2024-02-15'},
  {sno: 3, title: 'Title 3', client: 'Client C', startDate: '2024-03-01', endDate: '2024-03-20'},
  // Add more data here if needed
];
@Component({
  selector: 'app-view-project-overview',
  templateUrl: './view-project-overview.component.html',
  styleUrls: ['./view-project-overview.component.css']
})
export class ViewProjectOverviewComponent {
  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Projects Details";


  
  displayedColumns: string[] = ['sno', 'title', 'client', 'startDate', 'endDate'];
  dataSource = ELEMENT_DATA;

 
}
