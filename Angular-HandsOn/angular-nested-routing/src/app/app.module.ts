import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { ViewCustomersComponent } from './Admin/view-customers/view-customers.component';
import { ViewSuppliersComponent } from './Admin/view-suppliers/view-suppliers.component';
import { ReportsComponent } from './Admin/reports/reports.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { SearchProductComponent } from './Customer/search-product/search-product.component';
import { ViewCartComponent } from './Customer/view-cart/view-cart.component';
import { TransactionsComponent } from './Customer/transactions/transactions.component';
import { CustomerDashboardComponent } from './Customer/customer-dashboard/customer-dashboard.component';
import { SupplierDashboardComponent } from './Supplier/supplier-dashboard/supplier-dashboard.component';
import { AddProductComponent } from './Supplier/add-product/add-product.component';
import { ViewProductsComponent } from './Supplier/view-products/view-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ViewCustomersComponent,
    ViewSuppliersComponent,
    ReportsComponent,
    AdminDashboardComponent,
    SearchProductComponent,
    ViewCartComponent,
    TransactionsComponent,
    CustomerDashboardComponent,
    SupplierDashboardComponent,
    AddProductComponent,
    ViewProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
