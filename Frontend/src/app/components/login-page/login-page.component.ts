import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
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
    if(this.userForm.status=="VALID")
      console.log(this.userForm.value)
  }
}
