import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-demo1',
  imports: [CommonModule],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css'
})
export class Demo1 {
  title: string = 'Welcome to Angular';
  count: number = 787;
  cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  item: Product | null = null;
  constructor() {
    // this.item = {
    //   id: 1,
    //   name: 'Sample Product',
    //   price: 100,
    //   stock: 50
    // };
  }
}
