import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items=this.cartService.getItems()
  nItems=this.items.length
  constructor(public cartService:CartService){
  }
  
}
