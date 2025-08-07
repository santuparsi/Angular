import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'//// Automatically provides this service in the root injector
})
export class Flightservice {
  constructor(private http: HttpClient) { }
  getFlights() {
    return ['Flight 101', 'Flight 202'];
  }
  getallFlights() {
    return this.http.get('http://localhost:5184/api/Flight/GetAllFlights');
  }
}
