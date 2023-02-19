import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ARIUrl:string="http://localhost:8080/login"
  constructor(public http:HttpClient) {
  }
  loginAdmin(body:any)
  {
    //console.log(body)
    return this.http.post(this.ARIUrl,body)
  }
}
