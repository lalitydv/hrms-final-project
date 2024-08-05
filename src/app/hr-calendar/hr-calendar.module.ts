import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRCalendarRoutingModule } from './hr-calendar-routing.module';
import { HrCalendarComponent } from './hr-calendar/hr-calendar.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { MonthComponent } from './hr-calendar/month/month.component';
import { WeekComponent } from './hr-calendar/week/week.component';
import { DayComponent } from './hr-calendar/day/day.component';
import { HolidayComponent } from './hr-calendar/holiday/holiday.component';
import { HolidayspopupComponent } from './hr-calendar/holidayspopup/holidayspopup.component';
import { LeaveRequestComponent } from './hr-calendar/leave-request/leave-request.component';
import { TrainingsComponent } from './hr-calendar/trainings/trainings.component';
import { ProjectsComponent } from './hr-calendar/projects/projects.component';
import { EventsComponent } from './hr-calendar/events/events.component';
import { MeetingsComponent } from './hr-calendar/meetings/meetings.component';


@NgModule({
  declarations: [
    HrCalendarComponent,
    MonthComponent,
    WeekComponent,
    DayComponent,
    HolidayComponent,
    HolidayspopupComponent,
    LeaveRequestComponent,
    TrainingsComponent,
    ProjectsComponent,
    EventsComponent,
    MeetingsComponent
  ],
  imports: [
    CommonModule,
    HRCalendarRoutingModule,
    SharedImportsModule
  ]
})
export class HRCalendarModule { }
