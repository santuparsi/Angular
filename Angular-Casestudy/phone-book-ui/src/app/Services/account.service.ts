import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../Models/contact';
import { Observable } from 'rxjs';
import { Login } from '../Models/login';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  api_path: string = 'https://localhost:7022/';
  constructor(private http: HttpClient) {}
  validate(login: Login): Observable<Contact> {
    return this.http.post<Contact>(this.api_path + '/Validate', login);
  }
  register(contact: Contact): Observable<any> {
    return this.http.post(this.api_path + '/Register', contact);
  }
}
