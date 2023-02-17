import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items:{src:String,title:String,description:String,quantity:number,price:any}[]=[
    {src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp",title:"Shirt",description:"Cotton T-shirt",quantity:1,price:300},
    {src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp",title:"Shirt",description:"Cotton T-shirt",quantity:1,price:150},
    {src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp",title:"Shirt",description:"Cotton T-shirt",quantity:1,price:200}
  ]
  total:any;
  quantityElement:any;
  calTotal(){
    this.total=0
    this.items.forEach(element => {
      this.total+=element.price*element.quantity
    });
  }
  constructor(){
    this.calTotal();
  }
  increaseQuantity(e:any,i:any){
    this.quantityElement=e.target.parentNode.parentNode.querySelector('input[type=number]')
    this.quantityElement.stepUp()
    this.items[i].quantity=this.quantityElement.value
    this.calTotal()
  }
  decreaseQuantity(e:any,i:any){
    this.quantityElement=e.target.parentNode.parentNode.querySelector('input[type=number]')
    this.quantityElement.stepDown()
    this.items[i].quantity=this.quantityElement.value
    this.calTotal()
  }
  removeItem(index:any){
    this.items=this.items.filter((item,i)=>index!=i)
    this.calTotal()
  }
}
