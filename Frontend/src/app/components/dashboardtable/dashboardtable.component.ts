import { Product } from 'src/app/models/products';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-dashboardtable',
  templateUrl: './dashboardtable.component.html',
  styleUrls: ['./dashboardtable.component.css']
})
export class DashboardtableComponent {
  products: any;
  body: any;
  constructor (private productService:ProductService){}
  ngOnInit():void{this.productService.getAllProducts().subscribe((res)=>{
    this.products=res
  }) 
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
  updateproduct(e:any){
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
 deleteUserHandler(productId: any)
 {
   this.productService.deletProduct(productId).subscribe((response) => {
     this.products = this.products.filter((product: any) => {
       return product._id != productId;
     })
   }) 
  }
}

