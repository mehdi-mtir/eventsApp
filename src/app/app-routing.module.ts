import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './events/add-event/add-event.component';
import { DetailEventComponent } from './events/detail-event/detail-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { ListEventsComponent } from './events/list-events/list-events.component';

const routes: Routes = [
  {path : "events", component : ListEventsComponent},
  {path : "event/add", component: AddEventComponent},
  {path : "event/:id", component: DetailEventComponent},
  {path : "event/edit/:id", component: EditEventComponent},
  {path : "", redirectTo : "events", pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
