import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  URL: string = "http://localhost:8080"
  constructor(private client: HttpClient) {}
    getAllProducts(){
      return this.client.get(`${this.URL}/allproducts`)
    }
    getFeaturedProducts(){
      return this.client.get(`${this.URL}/Featured/`)
  }
  
    getProductswithCategoryID(id:any)
    {
      return this.client.get(`${this.URL}/products/${id}`)
    }
    
    getProductDetailsById(id:any){
      return this.client.get(`${this.URL}/productdetails/${id}`)
  }
  updateProductByID(body:any){
    return this.client.patch(`${this.URL}/products`,body)
  }
  deletProduct(id: any) {
    return this.client.delete(`${this.URL}/products/${id}`); 
  }
  addProduct(body:any){
    return this.client.post(`${this.URL}/products`,body)
  }
}
