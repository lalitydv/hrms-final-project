import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HolidayspopupComponent } from '../holidayspopup/holidayspopup.component';
import { LeaveRequestComponent } from '../leave-request/leave-request.component';
import { TrainingsComponent } from '../trainings/trainings.component';
import { ProjectsComponent } from '../projects/projects.component';
import { EventsComponent } from '../events/events.component';
import { MeetingsComponent } from '../meetings/meetings.component';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent {
  constructor(public dialog: MatDialog) { }
  openDialogHolidays (){
    this.dialog.open(HolidayspopupComponent);
  }
  openDialogLeaveRequest (){
    this.dialog.open(LeaveRequestComponent);
  }
  openDialogTrainings(){
    this.dialog.open(TrainingsComponent);
  }
  openDialogProjects(){
    this.dialog.open(ProjectsComponent);
  }
  openDialogEvents(){
    this.dialog.open(EventsComponent);
  }
  openDialogMeetings(){
    this.dialog.open(MeetingsComponent);
  }
}
