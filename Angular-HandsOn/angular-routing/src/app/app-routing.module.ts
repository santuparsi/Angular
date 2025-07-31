import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  {path:'user-dashboard',component:UserDashboardComponent,children:[
    { path: 'add-product', component: AddProductComponent },
    { path: 'edit-profile', component: EditProfileComponent },
    { path: 'view-products', component: ViewProductsComponent }
  ]},
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
