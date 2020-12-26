import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddEventComponent } from './events/add-event/add-event.component';
import { DetailEventComponent } from './events/detail-event/detail-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { ListEventsComponent } from './events/list-events/list-events.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : "events", component : ListEventsComponent, canActivate : [AuthGuard]},
  {path : "event/add", component: AddEventComponent},
  {path : "event/:id", component: DetailEventComponent},
  {path : "event/edit/:id", component: EditEventComponent},

  {path : "login", component : LoginComponent},


  {
    path : 'users',
    loadChildren :
    () => import('./users/users.module')
      .then(m => m.UsersModule)
  },
  {path : "", redirectTo : "login", pathMatch : 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
