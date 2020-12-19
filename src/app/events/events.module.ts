import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';



@NgModule({
  declarations: [
    ListEventsComponent,
    AddEventComponent,
    EditEventComponent,
    DetailEventComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }
