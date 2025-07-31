import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit,OnChanges {
title:string=''
  constructor() { 
    this.title='Demo title'
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log('OnChanges invoked');
  }

  ngOnInit(): void {
  this.title='Demo on LifeCycle hooks'
    console.log('ngOnInit Invoked');
  }

}
