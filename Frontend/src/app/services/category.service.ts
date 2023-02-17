import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL:String="http://localhost:8080"
  constructor(private client: HttpClient) { }
  getAllCategories(){
    return this.client.get(`${this.URL}/categories`)
  }
}
