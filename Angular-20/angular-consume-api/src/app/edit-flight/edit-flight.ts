import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../flight';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit-flight',
  imports: [FormsModule],
  templateUrl: './edit-flight.html',
  styleUrl: './edit-flight.css'
})
export class EditFlight {
  flight: Flight = { flightId: 0, flightName: '', flightCode: '', seats: 0 };

  constructor(private http: HttpClient) { }

  updateFlight() {
    console.log('Updating flight:', this.flight);
    this.http.put('http://localhost:5184/api/Flight/UpdateFlight', this.flight)
      .subscribe((response) => {
        console.log('Flight updated successfully:', response);
        // Optionally, reset the form or handle success
        this.flight = { flightId: 0, flightName: '', flightCode: '', seats: 0 };
      });
  }
}
