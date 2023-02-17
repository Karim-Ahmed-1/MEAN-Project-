import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
items:{src:String,title:String,description:String,quantity:Number,price:Number}[]=[
  {src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp",title:"Shirt",description:"Cotton T-shirt",quantity:1,price:300},
  {src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp",title:"Shirt",description:"Cotton T-shirt",quantity:2,price:150},
  {src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp",title:"Shirt",description:"Cotton T-shirt",quantity:3,price:200}
]
total:Number=0
calTotal(){
  this.items.forEach(element => {
    console.log(typeof(element.price))
    //this.total+=element.price
  });
}

}
