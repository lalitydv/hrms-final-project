import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { MeetingsComponent } from './meetings/meetings.component';

const routes: Routes = [
  {
    path: 'event', component: EventsComponent
  },
  {
    path: 'meeting', component: MeetingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }
