import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CateegoryService {

  ARIUrl:string="http://localhost:8080/categories"
  constructor(public http:HttpClient) {
  }
  getAllCategories()
  {
    return this.http.get(this.ARIUrl)
  }
}
