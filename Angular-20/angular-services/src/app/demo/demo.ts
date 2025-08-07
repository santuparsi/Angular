import { Component } from '@angular/core';
import { Flightservice } from '../flightservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})
export class Demo {
  items: any;
  flights: any;
  constructor(private flightService: Flightservice) {
    this.items = flightService.getFlights();
    flightService.getallFlights().subscribe((data) => {
      this.flights = data;
      console.log(this.flights);
    });
  }

}
