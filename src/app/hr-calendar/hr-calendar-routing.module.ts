import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrCalendarComponent } from './hr-calendar/hr-calendar.component';
import { MonthComponent } from './hr-calendar/month/month.component';
import { WeekComponent } from './hr-calendar/week/week.component';
import { DayComponent } from './hr-calendar/day/day.component';

const routes: Routes = [
  {
    path:'', component: HrCalendarComponent
  },
  {
    path: 'month', component: MonthComponent
  },
  {
    path: 'Week', component: WeekComponent
  },
  {
    path: 'day', component: DayComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HRCalendarRoutingModule { }
