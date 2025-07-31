import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  products:Product[]=[];
  constructor(private productService:ProductService)
  {
    //Calling GetAllProduct service method
    this.productService.GetAllProducts().subscribe(response=>{
        this.products=response;
        console.log(this.products);
    });
  }

}
