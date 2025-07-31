import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }
  //service methods
  Add(n1:number,n2:number):number
  {
    return n1+n2;
  }
  Div(n1:number,n2:number):number
  {
    if(n2==0)
    return 0;
    else
    return n1/n2;
  }
  GetCases():number[]
  {
    return [200,456,678,543,321,123];
  }
  GetCities():string[]
  {
    return ['Pune','Mumbai','Chennai','Hyderabad','Banglore'];
  }
}
