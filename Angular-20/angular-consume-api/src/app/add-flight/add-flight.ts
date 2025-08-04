import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../flight';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-flight',
  imports: [FormsModule],
  templateUrl: './add-flight.html',
  styleUrl: './add-flight.css'
})
export class AddFlight {
  flight: Flight = { flightId: 0, flightName: '', flightCode: '', seats: 0 };
  constructor(private http: HttpClient) { }
  addFlight() {
    console.log('Adding flight:', this.flight);
    this.http.post('http://localhost:5184/api/Flight/AddFlight', this.flight)
      .subscribe((response) => {
        console.log('Flight added successfully:', response);
        // Optionally, reset the form or handle success
        this.flight = { flightId: 0, flightName: '', flightCode: '', seats: 0 };
      });
  }
}
