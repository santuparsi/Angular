import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {
//array declartion
cities:string[]=["Chennai","Hyderabad",'Pune','Bangalore','Delhi'];
employees:string[]=[
'Abishek',
'Deepak',
'Druva',
'Pooja',
'Mrinmoy'
];
salaries:number[]=[23000,45000,55000,80000];
}
