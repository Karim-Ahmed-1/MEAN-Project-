import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  userForm=new FormGroup({
    fullname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    city:new FormControl('',[Validators.required]),
    street:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),

  });
  get getfullname(){
    return this.userForm.controls["fullname"];
  }
  get getemail(){
    return this.userForm.controls["email"];
  }
  get getecity(){
    return this.userForm.controls["city"];
  }
  get getstreet(){
    return this.userForm.controls["street"];
  }
  get getusername(){
    return this.userForm.controls["username"];
  } get getphone(){
    return this.userForm.controls["phone"];
  }
  get getpassword(){
    return this.userForm.controls["password"];
  }
  login(e:any){
    e.preventDefault();
    //console.log(this.userForm)
    if(this.userForm.status=="VALID")
      console.log(this.userForm.value)
  }
}
