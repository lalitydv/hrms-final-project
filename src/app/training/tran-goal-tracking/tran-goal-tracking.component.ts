import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeletComponent } from 'src/app/common/custom-table/delet/delet.component';
import { AddPerformanceAppraisalComponent } from 'src/app/performance/appraisal/add-performance-appraisal/add-performance-appraisal.component';
import { TrainingTypeEditComponent } from './training-type-edit/training-type-edit.component';

@Component({
  selector: 'app-tran-goal-tracking',
  templateUrl: './tran-goal-tracking.component.html',
  styleUrls: ['./tran-goal-tracking.component.css']
})
export class TranGoalTrackingComponent {

  FirstIcons:String="assets/Dashboard/image 78.png"
  HearderHeding:String="Training"
  panelOpenState = true;
    displayedColumns = ['position','TrainingName', 'actions'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    masterCheckbox = false;
    masterCheckbox2 = false;
    
   
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
    constructor(public dialog: MatDialog ) { }
    openDialogAdd() {
      this.dialog.open(TrainingTypeEditComponent);
    }
    openDialogEdit() {
      this.dialog.open(TrainingTypeEditComponent);
    }
    openDialog() {
      this.dialog.open(DeletComponent);
    }
    selectedOption: string | null = null;
    selectOption(option: string): void {
      this.selectedOption = option;
    }
  }
  export interface Element {
    TrainingName: string;
   
    position: number;
  }
  
  const ELEMENT_DATA: Element[] = [
    { position: 1,  TrainingName: '54463',},
    { position: 1,  TrainingName: '54463',},
    { position: 1,  TrainingName: '54463',},
    { position: 1,  TrainingName: '54463',}, 
  ];
