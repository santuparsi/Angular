import { Injectable } from '@angular/core';
import { Product } from '../product'; //importing product class
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api_url:string='http://localhost:5152/api/Product/'; //rest-apu url
  constructor(public httpClient:HttpClient) { }
  GetAllProducts():Observable<Product[]> //get all the products
  {
    return this.httpClient.get<Product[]>(this.api_url+'GetProducts');
  }
  GetProduct(id?:number):Observable<Product> //get product by id
  {
    return this.httpClient.get<Product>(this.api_url+'GetProductById/'+id);
  }
  AddProduct(item:Product):Observable<any>
  {
    return this.httpClient.post(this.api_url+'AddProduct',item); //Add Product
  }
  EditProduct(item:Product):Observable<any>
  {
    return this.httpClient.put(this.api_url+'EditProduct',item); //Edit Product
  }
  DeleteProduct(id?:number):Observable<any>
  {
    return this.httpClient.delete(this.api_url+'DeleteProduct/'+id); //Delete Product by id
  }
}
