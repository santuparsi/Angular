import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component {
url:string='http://www.twitter.com';
title:string='Welcome to Angular World';
bordersize:number=2;
width:number=300;
height:number=200;
img_src:string='../../assets/d.jfif';
}
