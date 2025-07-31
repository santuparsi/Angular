import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { ReportsComponent } from './Admin/reports/reports.component';
import { ViewCustomersComponent } from './Admin/view-customers/view-customers.component';
import { ViewSuppliersComponent } from './Admin/view-suppliers/view-suppliers.component';
import { CustomerDashboardComponent } from './Customer/customer-dashboard/customer-dashboard.component';
import { SearchProductComponent } from './Customer/search-product/search-product.component';
import { TransactionsComponent } from './Customer/transactions/transactions.component';
import { ViewCartComponent } from './Customer/view-cart/view-cart.component';
import { AddProductComponent } from './Supplier/add-product/add-product.component';
import { SupplierDashboardComponent } from './Supplier/supplier-dashboard/supplier-dashboard.component';
import { ViewProductsComponent } from './Supplier/view-products/view-products.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,children:[
    {path:'reports',component:ReportsComponent},
    {path:'view-customers',component:ViewCustomersComponent},
    {path:'view-suppliers',component:ViewSuppliersComponent}
  ]},
  {path:'customer-dashboard',component:CustomerDashboardComponent,children:[
    {path:'search',component:SearchProductComponent},
    {path:'view-cart',component:ViewCartComponent},
    {path:'transaction',component:TransactionsComponent}
  ]},
  {path:'supplier-dashboard',component:SupplierDashboardComponent,children:[
    {path:'add-product',component:AddProductComponent},
    {path:'view-products',component:ViewProductsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
