import { Component,OnInit } from '@angular/core';
import { CateegoryService } from 'src/app/services/cateegory.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.css']
})
export class ProductsCategoriesComponent implements OnInit {

  categories:any;
  constructor(public categoryservice:CateegoryService){

  }
  ngOnInit(): void { 
   this.categoryservice.getAllCategories().subscribe((response)=>{
    console.log(response)
    this.categories=response;
   })
  }

}
 