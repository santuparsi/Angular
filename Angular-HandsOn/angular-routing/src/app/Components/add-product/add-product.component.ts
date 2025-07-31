import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
item:Product=new Product();
Save()
{
  
}
}
