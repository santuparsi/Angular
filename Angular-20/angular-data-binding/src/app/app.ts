import { Component, signal } from '@angular/core';
import { Demo1 } from "./demo1/demo1";
import { Demo2 } from "./demo2/demo2";
import { Demo3 } from "./demo3/demo3";

@Component({
  selector: 'app-root',
  imports: [Demo1, Demo2, Demo3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-data-binding');
}
