import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { UsersComponent }      from './components/users/users.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { UserDetailComponent }  from './components/userDetail/user-detail.component';

import { UserService }  from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    UsersComponent,
    DashboardComponent,
    UserDetailComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
