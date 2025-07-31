import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/Account/login/login.component';
import { RegisterComponent } from './Pages/Account/register/register.component';
import { AddAirlineComponent } from './Pages/Admin/add-airline/add-airline.component';
import { AddScheduleComponent } from './Pages/Admin/add-schedule/add-schedule.component';
import { SearchAirlineComponent } from './Pages/Customer/search-airline/search-airline.component';
import { BookAirlineComponent } from './Pages/Customer/book-airline/book-airline.component';
import { AdminDashboardComponent } from './Pages/Admin/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './Pages/Customer/customer-dashboard/customer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddAirlineComponent,
    AddScheduleComponent,
    SearchAirlineComponent,
    BookAirlineComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
