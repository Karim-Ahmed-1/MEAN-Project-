import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { CateegoryService } from 'src/app/services/cateegory.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private productService:ProductService,private categorService:CateegoryService){}
    
  productForm=new FormGroup({
  title:new FormControl('',[Validators.required]),
  price:new FormControl('',[Validators.required]),
  quantity:new FormControl('',[Validators.required]),
  description:new FormControl('',[Validators.required]),
  image:new FormControl('',[Validators.required]),
  category:new FormControl('',[Validators.required]),
  richDescription:new FormControl('',[Validators.required]),
  
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
  return this.productForm.controls["richDescription"];
}
get getimage(){
  return this.productForm.controls["image"];
}
get getcategories(){
  return this.productForm.controls["category"];
}
get getsmallDescription(){
  return this.productForm.controls["description"];
}


categories:any;
ngOnInit(): void {this.categorService.getAllCategories().subscribe((response)=>{
  this.categories=response;})}

addproduct(e:any){
  e.preventDefault();
  //console.log(this.productForm)
  if(this.productForm.status=="VALID")
  {
    this.productService.addProduct(this.productForm.value).subscribe((res)=>{
    })
  }
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



