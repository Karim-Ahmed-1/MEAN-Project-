import { Product } from 'src/app/models/products';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { CateegoryService } from 'src/app/services/cateegory.service';



@Component({
  selector: 'app-dashboardtable',
  templateUrl: './dashboardtable.component.html',
  styleUrls: ['./dashboardtable.component.css']
})
export class DashboardtableComponent {
  products: any;
  body: any;
  categories:any;
  constructor (private productService:ProductService,private categorService:CateegoryService){}
  ngOnInit():void{
    this.productService.getAllProducts().subscribe((res)=>{
    this.products=res
  });
  this.categorService.getAllCategories().subscribe((response)=>{
    this.categories=response;})
}






  productForm=new FormGroup({
    title:new FormControl('',[]),
    price:new FormControl('',[]),
    quantity:new FormControl('',[]),
    description:new FormControl('',[]),
    image:new FormControl('',[]),
    categories:new FormControl('',[]),
    smallDescription:new FormControl('',[]),
  })

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
 deleteUserHandler(productId: any)
 {
   this.productService.deletProduct(productId).subscribe((response) => {
     this.products = this.products.filter((product: any) => {
       return product._id != productId;
     })
   }) 
  }

  product:any={data:{}}
  productID:any
  openUpdateProductForm(prodID:any){
    this.productID=prodID;
    this.productService.getProductDetailsById(prodID).subscribe((response) =>{
      this.product=response
     // console.log(this.product)
    })
  }
  updateFormBody:any
  
  updateproduct(e:any){
    e.preventDefault();
    console.log(this.productForm)
    this.updateFormBody=this.productForm.value;
    this.updateFormBody.id=this.productID;
    this.productService.updateProductByID(this.updateFormBody).subscribe((res)=>{
      //console.log(res)
    })
    if(this.productForm.controls.quantity)
    {
      console.log("changed")
    }
    else
      console.log("unchanged")
    }
}

