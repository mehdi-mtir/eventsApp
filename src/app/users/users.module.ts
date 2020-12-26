import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AddUserComponent,
    ListUsersComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule

  ]
})
export class UsersModule { }
