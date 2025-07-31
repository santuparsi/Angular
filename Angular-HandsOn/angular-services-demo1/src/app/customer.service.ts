import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }
  
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:3000/customers");
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>("http://localhost:3000/customers", customer);
  }
}
