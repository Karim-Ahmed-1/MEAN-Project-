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
  likes:{src:String,name:String,section:String}[]=[
    {src:"assets/4.png",name:'Cashmere Tank +Bag ',section:'lather - Bags '},
    {src:"assets/4.png",name:'Cashmere Tank +Bag ',section:'lather - Bags '},
    {src:"assets/4.png",name:'Cashmere Tank +Bag ',section:'lather - Bags '},
    {src:"assets/4.png",name:'Cashmere Tank +Bag ',section:'lather - Bags '}
  ]
}
