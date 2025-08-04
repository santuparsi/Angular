import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-flights',
  imports: [CommonModule],
  templateUrl: './view-flights.html',
  styleUrl: './view-flights.css'
})
export class ViewFlights implements OnInit {
  flights: any[] = [];
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5184/api/Flight/GetAllFlights')
      .subscribe((response) => {
        this.flights = response;
        console.log('API Raw Response:', response);
        console.log('Is Array?', Array.isArray(response));
        this.flights = response;

      })

  }
}
