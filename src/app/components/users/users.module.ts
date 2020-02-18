import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    AppMaterialModule,
    Ng2SearchPipeModule
  ],
  declarations: [UsersListComponent, UserComponent]
})
export class UsersModule { }
