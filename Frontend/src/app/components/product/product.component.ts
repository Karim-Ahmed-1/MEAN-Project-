import { Component,Input } from '@angular/core';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 @Input() childproductsofcategory:any;

 constructor (private cartService: CartService) {
}
addToCart(product: Product) {
  product.itemQuantity=1
  this.cartService.addToCart(product);
}

}
