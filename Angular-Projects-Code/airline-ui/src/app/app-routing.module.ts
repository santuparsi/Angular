import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/Account/login/login.component';
import { RegisterComponent } from './Pages/Account/register/register.component';
import { AddAirlineComponent } from './Pages/Admin/add-airline/add-airline.component';
import { AddScheduleComponent } from './Pages/Admin/add-schedule/add-schedule.component';
import { AdminDashboardComponent } from './Pages/Admin/admin-dashboard/admin-dashboard.component';
import { BookAirlineComponent } from './Pages/Customer/book-airline/book-airline.component';
import { CustomerDashboardComponent } from './Pages/Customer/customer-dashboard/customer-dashboard.component';
import { SearchAirlineComponent } from './Pages/Customer/search-airline/search-airline.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,children:[
    {path:'add-airline',component:AddAirlineComponent},
    {path:'add-schedule',component:AddScheduleComponent},
  ]},
  {path:'customer-dashboard',component:CustomerDashboardComponent,children:[
    {path:'search-airline',component:SearchAirlineComponent},
    {path:'book-airline',component:BookAirlineComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
