import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
//  
  productForm=new FormGroup({
  title:new FormControl('',[Validators.required]),
  price:new FormControl('',[Validators.required]),
  quantity:new FormControl('',[Validators.required]),
  description:new FormControl('',[Validators.required]),
  image:new FormControl('',[Validators.required]),
  categories:new FormControl('',[Validators.required]),
  smallDescription:new FormControl('',[Validators.required]),
  
});
get gettitle(){
  return this.productForm.controls["title"];
}
get getprice(){
  return this.productForm.controls["price"];
}
get getquantity(){
  return this.productForm.controls["quantity"];
}
get getdescription(){
  return this.productForm.controls["description"];
}
get getimage(){
  return this.productForm.controls["image"];
}
get getcategories(){
  return this.productForm.controls["categories"];
}
get getsmallDescription(){
  return this.productForm.controls["smallDescription"];
}

addproduct(e:any){
  e.preventDefault();
  //console.log(this.productForm)
  if(this.productForm.status=="VALID")
    console.log(this.productForm.value)
}

base64:any;
getImagePath(e:any){
  //script to get base64
  const file =e.target.files[0]
  const reader=new FileReader();
  reader.readAsDataURL(file);
  reader.onload=()=>{
    this.base64=reader.result
    //console.log(this.base64)
  }

}
}



