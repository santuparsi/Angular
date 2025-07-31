import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../Models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  api_path: string = 'https://localhost:7022/';
  constructor(private http: HttpClient) {}
  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.api_path + '/GetAllContacts');
  }
  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(this.api_path + '/GetContact/' + id);
  }
  deleteContact(id: number): Observable<Contact> {
    return this.http.delete<Contact>(this.api_path + '/DeleteContact/' + id);
  }
  editContact(contact: Contact): Observable<any> {
    return this.http.put(this.api_path + '/EditContact', contact);
  }
}
