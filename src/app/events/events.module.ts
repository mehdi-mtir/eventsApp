import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';


import { EventService } from './service/event.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListEventsComponent,
    AddEventComponent,
    EditEventComponent,
    DetailEventComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers : [EventService]
})
export class EventsModule { }
