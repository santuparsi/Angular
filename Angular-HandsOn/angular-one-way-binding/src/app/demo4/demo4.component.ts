import { Component } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component {
message:string='Good Morning All';
name:string='Abhishek'
//method
Greet():void
{
  this.message='Good Night All';
}
SetName()
{
  this.name='Pavan';
}
}
