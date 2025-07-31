import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
user_name:string;
msg:string;
  constructor() { }

  ngOnInit(): void {
  }
  Greet():void
  {
    this.msg="Hello "+this.user_name;
  }

}
