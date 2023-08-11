import { Component , OnInit} from '@angular/core';
import { Cart } from 'src/app/models/cart.models';
import { CartService } from 'src/app/services/cart-service/cart.service';


@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  cart : Cart = { items: [] };

  constructor(private cartService : CartService){}
  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => 
    {
      this.cart= _cart;
    });
}
}
