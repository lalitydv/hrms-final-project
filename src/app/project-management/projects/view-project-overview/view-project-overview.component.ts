
import { Component, inject } from '@angular/core';
export interface Item {
  user: string;
  message: string;
}
export interface Item2 {
  title: string;
  endDate: string;
  status: string;
  createdBy: string;
  progress: string;
}

@Component({
  selector: 'app-view-project-overview',
  templateUrl: './view-project-overview.component.html',
  styleUrls: ['./view-project-overview.component.css']
})
export class ViewProjectOverviewComponent {
  FirstIcons: string = "assets/Dashboard/image 78.png";
  HeaderHeading: string = "Projects Details";
  panelOpenState = true;
  value = 0;
  displayedColumns: string[] = ['user', 'message', 'action'];
  
  dataSource: Item[] = [
    { user: 'User 1', message: 'Message 1' },
    { user: 'User 2', message: 'Message 2' },
    { user: 'User 3', message: 'Message 3' }
  ];

  displayedColumns1: string[] = ['title', 'endDate', 'status', 'createdBy', 'progress', 'action'];
  
  dataSource1: Item2[] = [
    { title: 'Title 1', endDate: 'End Date 1', status: 'Status 1', createdBy: 'Created By 1', progress: 'Progress 1' },
    { title: 'Title 2', endDate: 'End Date 2', status: 'Status 2', createdBy: 'Created By 2', progress: 'Progress 2' },
    { title: 'Title 3', endDate: 'End Date 3', status: 'Status 3', createdBy: 'Created By 3', progress: 'Progress 3' }
  ];



  dataSource2 = [
    { title: 'Title 1', description: 'Description 1', dateTime: '2024-05-08', action: '' },
    { title: 'Title 2', description: 'Description 2', dateTime: '2024-05-08', action: '' },
    { title: 'Title 3', description: 'Description 3', dateTime: '2024-05-08', action: '' },
    // Add more data as needed
  ];

  displayedColumns2: string[] = ['title', 'description', 'dateTime', 'action'];
}