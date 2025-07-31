import { Component } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
products:Product[]=[]; //empty product array
item:Product
constructor()
{
 //initialize the product
  this.item=new Product();
}
Save() // to add product details to products array
{
console.log(this.item);
this.products.push(this.item); //adding new product details to array
console.log(this.products);
this.item=new Product(); //reinitialize the product
}
}
