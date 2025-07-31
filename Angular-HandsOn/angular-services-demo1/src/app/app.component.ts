import { Component } from '@angular/core';
import { Customer } from 'src/model/customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  customers: Customer[] = [];
  customer: Customer = new Customer();
  errorMessage: String = "";

  constructor(private customerService: CustomerService) { }
  title = 'Customer-app';
  ngOnInit() {
    this.getCustomersFromServer();

  }

  getCustomersFromServer() {
      this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    })
  }

  newCustomer() {
    if (this.customer.name == "" || this.customer.id == 0 || this.customer.amount==0 ) {
           this.errorMessage = "Fields cannot be empty";
    } else {
        this.customerService.addCustomer(this.customer).subscribe((addedcustomer) => {
        this.customers.push(addedcustomer);
        this.customer= new Customer();
        this.errorMessage="";
      })
      
    }
  }



}
