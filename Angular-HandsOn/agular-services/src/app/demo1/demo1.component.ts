import { Component } from '@angular/core';
import { CalculateService } from '../shared/calculate.service';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css'],
})
export class Demo1Component {
  cities:string[]=[];
  cases:number[]=[];
  constructor(public calcService: CalculateService) {
    console.log(calcService.Add(2, 3));
    console.log(calcService.Div(4,2));
    console.log(calcService.GetCases());
    console.log(calcService.GetCities());
    this.cities=calcService.GetCities();
    console.log(this.cities);
    this.cases=calcService.GetCases();
    console.log(this.cases);
  }
}
