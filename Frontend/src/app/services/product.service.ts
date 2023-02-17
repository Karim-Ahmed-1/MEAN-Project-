import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  URL:string="http://localhost:8080"
  constructor(private client: HttpClient) {}
    getAllProducts(){
      return this.client.get(`${this.URL}/products`)
    }
    getFeaturedProducts(){
      return this.client.get(`${this.URL}/Featured/`)
    }
//
    getProductswithCategoryID(id:any)
    {
      return this.client.get(`${this.URL}/products/${id}`)
    }
    getProductDetailsById(id:any){
      return this.client.get(`${this.URL}/products/${id}`)
    }

}
