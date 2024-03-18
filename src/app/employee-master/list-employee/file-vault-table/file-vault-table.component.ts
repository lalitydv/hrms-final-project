import { Component } from '@angular/core';
export interface FileData {
  sNo: number;
  fileName: string;
  uploadDate: Date;
  size: string;
}
@Component({
  selector: 'app-file-vault-table',
  templateUrl: './file-vault-table.component.html',
  styleUrls: ['./file-vault-table.component.css']
})
export class FileVaultTableComponent {
  displayedColumns: string[] = ['sNo', 'checkBox', 'fileName', 'uploadDate', 'size', 'download'];
  dataSource: FileData[] = [
    {sNo: 1, fileName: 'example.txt', uploadDate: new Date(), size: '10 KB'},
    {sNo: 2, fileName: 'example2.txt', uploadDate: new Date(), size: '15 KB'},
    // Add more data as needed
  ];

  downloadFile(file: FileData) {
    // Implement your download logic here
  }
}
