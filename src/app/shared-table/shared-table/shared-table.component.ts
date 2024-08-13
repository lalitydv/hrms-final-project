import { Component, Input, OnInit } from '@angular/core';

export interface TableColumn {
  columnDef: string;
  header: string;
  cell: (element: any) => string;
}

export interface TableAction {
  icon: string;
  tooltip: string;
  action: (row: any) => void;
}

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.css']
})
export class SharedTableComponent implements OnInit {
  @Input() columns: TableColumn[] = [];
  @Input() dataSource: any[] = [];
  @Input() actions: TableAction[] = []; // New Input for actions

  displayedColumns: string[] = [];

  ngOnInit() {
    this.displayedColumns = this.columns.map(c => c.columnDef);
    if (this.actions.length) {
      this.displayedColumns.push('action'); // Add 'action' column if actions are provided
    }
  }
}
