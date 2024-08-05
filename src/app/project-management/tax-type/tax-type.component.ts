import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HelpDeskAddComponent } from 'src/app/help-desk/help-desk-add/help-desk-add.component';
import { HelpDeskEditComponent } from 'src/app/help-desk/help-desk-edit/help-desk-edit.component';
import { HolidayDeleteComponent } from 'src/app/holidays/holiday-delete/holiday-delete.component';
import { AddClientComponent } from '../clients/add-client/add-client.component';
import { EditClientComponent } from '../clients/edit-client/edit-client.component';
import { TaxTypeUpdateComponent } from './tax-type-update/tax-type-update.component';

export interface Element {
  position: number;
  TaxName: string;
  TaxRate: string;
  TaxType: string;
  Description: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, TaxName: 'VAT', TaxRate: '10%', TaxType: 'Sales Tax', Description: 'Value Added Tax' },
  { position: 2, TaxName: 'GST', TaxRate: '8%', TaxType: 'Sales Tax', Description: 'Goods and Services Tax' },
  { position: 3, TaxName: 'Income Tax', TaxRate: '20%', TaxType: 'Direct Tax', Description: 'Tax on Income' },
  // Add more data as needed
];

@Component({
  selector: 'app-tax-type',
  templateUrl: './tax-type.component.html',
  styleUrls: ['./tax-type.component.css']
})
export class TaxTypeComponent {

  FirstIcons: string = "assets/Dashboard/image 78.png"
  HearderHeding: string = "Add Tax Type"

  displayedColumns = ['position', 'checkbox', 'TaxName', 'TaxRate', 'TaxType', 'Description', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HolidayDeleteComponent);
  }
  
  openDialogAdd() {
    this.dialog.open(AddClientComponent);
  }
  
  openDialogEddit() {
    this.dialog.open(TaxTypeUpdateComponent);
  }
  
  openDialogview() {
    // this.dialog.open(HolidayViewComponent);
  }

  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}

