import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileComponent } from '../upload-file/upload-file.component';

@Component({
  selector: 'app-file-vault',
  templateUrl: './file-vault.component.html',
  styleUrls: ['./file-vault.component.css']
})
export class FileVaultComponent {
  FirstIcons:String="assets/Dashboard/image 78.png"
HearderHeding:String="File Vault"
panelOpenState = true;

constructor(public dialog: MatDialog) { }

openDialog() {
  this.dialog.open(UploadFileComponent);
}
}
