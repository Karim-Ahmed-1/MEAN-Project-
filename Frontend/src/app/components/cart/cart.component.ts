import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items=this.cartService.getItems()
  total:any;
  nItems:any
  quantityElement:any;
  calTotal(){
    this.total=0
    this.items.forEach(element => {
      this.total+=element.price*element.itemQuantity
    });
  }
  constructor(private cartService:CartService){
    this.calTotal();
  }
  ngOnInit(): void {
    this.nItems=this.cartService.countItems()
  }
  increaseQuantity(e:any,i:any){
    this.quantityElement=e.target.parentNode.parentNode.querySelector('input[type=number]')
    this.quantityElement.stepUp()
    this.items[i].itemQuantity=this.quantityElement.value
    this.calTotal()
  }
  decreaseQuantity(e:any,i:any){
    this.quantityElement=e.target.parentNode.parentNode.querySelector('input[type=number]')
    this.quantityElement.stepDown()
    this.items[i].itemQuantity=this.quantityElement.value
    this.calTotal()
  }
  removeItem(product:any){
    this.items=this.cartService.removeItem(product)
    this.calTotal()
    this.nItems=this.cartService.countItems()
  }
}
