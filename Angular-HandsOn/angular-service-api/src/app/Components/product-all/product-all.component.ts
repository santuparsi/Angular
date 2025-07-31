import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent {
item:Product

  constructor(private productService:ProductService)
  {
    this.item=new Product();
  }
  Save() //Add Product
  {
    console.log(this.item);
    this.productService.AddProduct(this.item).subscribe(response=>{
      
    })
  }
  Details() //Get Product
  {
   
    this.productService.GetProduct(this.item.pid).subscribe(response=>{
      this.item=response;
      console.log(this.item);
    })
  }
  Edit() //Update Product
  {
    this.productService.EditProduct(this.item).subscribe(response=>{

    })
  }
  Delete() //Delete Product
  {
    this.productService.DeleteProduct(this.item.pid).subscribe(response=>{

    })
  }
}
