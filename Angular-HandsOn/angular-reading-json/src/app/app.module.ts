import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersViewComponent } from './users-view/users-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [UsersViewComponent]
})
export class AppModule { }
