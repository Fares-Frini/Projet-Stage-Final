import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.models';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { AxiosService } from 'src/app/axios.service';
import { first } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  private _cart : Cart = {items: []};
  itemsQuantity= 0 ;
  fname: string ='';
  lname: string='';
  role : boolean=false;
  auth:boolean = false;
  @Input()
  get cart(): Cart
  {
    return this._cart;
  }
  ngOnInit(): void { 
    this.loginHeader();
  }
  HeaderReload():void
  {
   window.location.reload;
   console.log('hello');
  }
  loginHeader():void
  {
    if ((typeof this.axiosService.getDecodedToken())!=null) {
      this.fname=(<any>Object).values(this.axiosService.getDecodedToken() as object)[1];
      this.lname=(<any>Object).values(this.axiosService.getDecodedToken() as object)[2];
      this.role=(<any>Object).values(this.axiosService.getDecodedToken() as object)[0] == "admin";
       
     this.auth=true;
   }
   else
   {
     this.auth=false;
   }
   window.location.reload;
  }

  set cart(cart : Cart)
  {
    this._cart=cart;
    this.itemsQuantity = cart.items
    .map((item) => item.quantity)
    .reduce((prev,current) => prev + current, 0);
  }
 
  constructor(    private axiosService: AxiosService,
    private cartService : CartService){}
  getTotal(items: Array<CartItem>): number
  {
    return this.cartService.getTotal(items)
  }

  onClearCart()
  {
    this.cartService.clearCart();
  }
  onDisconnect():void
  {
    this.axiosService.disconnect();
    window.location.reload();
  }
}
