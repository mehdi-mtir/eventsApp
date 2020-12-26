import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEventComponent } from '../events/edit-event/edit-event.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {path : "", component : ListUsersComponent},
  {path : "add", component : AddUserComponent},
  {path : "edit/:id", component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
