import { CategoryService } from './../../services/category.service';
import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  categories:any
  constructor (private productService:ProductService,private categoryService:CategoryService) {
  }
  ngOnInit():void{
    this.categoryService.getAllCategories().subscribe((res)=>{

      console.log(res)
    })
    this.productService.getFeaturedProducts(6).subscribe((res)=>{

      console.log(res)
    })
  }
  trends:{src:String,name:String,section:String,price:String,disc:String}[]=[
    {src:'assets/1.png',name:'White Top',section:'Casual-Woman',price:'$124',disc:'$170'},
    {src:'assets/2.png',name:'Cashmere Tank +Bag ',section:'lather - Bags ',price:'$12',disc:'$170'},
    {src:'assets/3.png',name:'White Top',section:'Casual-Woman',price:'$124',disc:'$170'},
    {src:'assets/1.png',name:'Cashmere Tank +Bag ',section:'lather - Bags ',price:'$12',disc:'$170'},
    {src:'assets/2.png',name:'White Top',section:'Casual-Woman',price:'$124',disc:'$170'},
    {src:'assets/3.png',name:'Cashmere Tank +Bag ',section:'lather - Bags ',price:'$12',disc:'$170'}
  ]
}
