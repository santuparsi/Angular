import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo3',
  imports: [FormsModule],
  templateUrl: './demo3.html',
  styleUrl: './demo3.css'
})
export class Demo3 {
  name: string = 'Sachin';
}
