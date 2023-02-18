import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent {
constructor(private router: Router){}
  userForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  });
  get getusername(){
    return this.userForm.controls["username"];
  }
  get getPassword(){
    return this.userForm.controls["password"];
  }
  login(e:any){
    e.preventDefault();
    //console.log(this.userForm)
    if(this.userForm.status=="VALID"){
      console.log(this.userForm.value)
      if(this.userForm.value.username=='admin'&& this.userForm.value.password=='12345678'){
        this.router.navigateByUrl('/dashboard');
      }
    }
      
      
  }
}
