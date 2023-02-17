import { CateegoryService } from './../../services/cateegory.service';
import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  categories:any
  featured:any
  constructor (private productService:ProductService,private categoryService:CateegoryService) {
  }
  ngOnInit():void{
    this.categoryService.getAllCategories().subscribe((res)=>{
      this.categories=res
    })
    this.productService.getFeaturedProducts().subscribe((res)=>{
      this.featured=res
      this.featured=this.featured.Products
      console.log(this.featured)
    })
  }
}
