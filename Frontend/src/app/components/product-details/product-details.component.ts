import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:any
  product:any
constructor(private activeRoute:ActivatedRoute,private productService:ProductService){
  this.productId=this.activeRoute.snapshot.params['productid'];

}
  ngOnInit(): void {
    this.productService.getProductDetailsById(this.productId).subscribe((res)=>{
      this.product=res
      console.log(this.product)
    })
  }
}
