import { Component,OnInit } from '@angular/core';
import { CateegoryService } from 'src/app/services/cateegory.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.css']
})
export class ProductsCategoriesComponent implements OnInit {

  categories:any;
  productsofCategory:any;
  constructor(public categoryservice:CateegoryService,public productservice:ProductService){}

ngOnInit(): void {
  this.categoryservice.getAllCategories().subscribe((response)=>{
    this.categories=response;
    this.ShowProducts(this.categories[0]?._id)
  })
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
