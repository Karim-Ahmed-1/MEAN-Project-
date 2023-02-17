import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trends:{src:String,name:String,section:String,price:String,disc:String}[]=[
    {src:'assets/1.png',name:'White Top',section:'Casual-Woman',price:'$124',disc:'$170'},
    {src:'assets/2.png',name:'Cashmere Tank +Bag ',section:'lather - Bags ',price:'$12',disc:'$170'},
    {src:'assets/3.png',name:'White Top',section:'Casual-Woman',price:'$124',disc:'$170'},
    {src:'assets/1.png',name:'Cashmere Tank +Bag ',section:'lather - Bags ',price:'$12',disc:'$170'},
    {src:'assets/2.png',name:'White Top',section:'Casual-Woman',price:'$124',disc:'$170'},
    {src:'assets/3.png',name:'Cashmere Tank +Bag ',section:'lather - Bags ',price:'$12',disc:'$170'}
  ]
  categories:{src:String,name:String}[]=[
    {src:"assets/4.png",name:'Bags '},
    {src:"assets/4.png",name:'Clothes '},
    {src:"assets/4.png",name:'Shoes '},
    {src:"assets/4.png",name:'Accessories '}
  ]
}
