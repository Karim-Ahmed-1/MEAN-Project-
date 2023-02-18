import { CartService } from 'src/app/services/cart.service';
import { Component,OnInit } from '@angular/core';
import { CateegoryService } from 'src/app/services/cateegory.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.css']
})
export class ProductsCategoriesComponent implements OnInit {
  nItems:any
  categories:any;
  productsofCategory:any;
  constructor(public categoryservice:CateegoryService,public productservice:ProductService,public cartService:CartService){}

ngOnInit(): void {
  this.categoryservice.getAllCategories().subscribe((response)=>{
    this.categories=response;
    this.ShowProducts(this.categories[0]?._id)
  })
  this.nItems=this.cartService.countItems()
}
addItem(e:any){
  this.nItems=e;
}
ShowProducts(id:any)
{
  this.productservice.getProductswithCategoryID(id).subscribe((response)=>{
    this.productsofCategory=response;
  })
}

//Get id from component cat(child)
getIdCategory(categoryid:any)
{
  this.ShowProducts(categoryid)
}
}
