import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { EventsComponent } from './events/events.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { AddEventComponent } from './events/add-event/add-event.component';
import { UpdateEventComponent } from './events/update-event/update-event.component';
import { EventInfoComponent } from './events/event-info/event-info.component';


@NgModule({
  declarations: [
    EventsComponent,
    MeetingsComponent,
    AddEventComponent,
    UpdateEventComponent,
    EventInfoComponent
  ],
  imports: [
    CommonModule,
    MeetingsRoutingModule,
    SharedImportsModule
  ]
})
export class MeetingsModule { }
