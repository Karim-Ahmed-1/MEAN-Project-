import { Component,OnInit } from '@angular/core';
import { CateegoryService } from 'src/app/services/cateegory.service';
import { ProductService } from 'src/app/services/product.service';
import { CookieService } from 'ngx-cookie-service';
// import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.css']
})
export class ProductsCategoriesComponent implements OnInit {

  categories:any;
  productsofCategory:any;
  constructor(public categoryservice:CateegoryService,public productservice:ProductService,private cookieService: CookieService){}

ngOnInit(): void {
  this.categoryservice.getAllCategories().subscribe((response)=>{
    this.categories=response;
    this.ShowProducts(this.categories[0]?._id)
  })
}
// setcookies()
// {
//   const dateNow = new Date();
//   dateNow.setMinutes(dateNow.getMinutes() + 1);
//   this.cookieService.set('isLogin', 'true',dateNow);
//   alert(this.cookieService.get('isLogin'))
// }
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
