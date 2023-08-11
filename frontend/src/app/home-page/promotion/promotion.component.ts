import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  cols=1;
  category: string | undefined;
  rowHeight = 350;
  products: Array<Product> |undefined;
  sort = 'desc';
  count ='12'
  constructor(private cartService: CartService,private storeService : StoreService){}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts():void
  {
    this.storeService.getAllProducts(this.count,this.sort).subscribe((_products)=>
    {
      this.products= _products;
    })
  }
  onShowCategory(newCategory : string) : void
  {
    this.category=newCategory;
  }

  onAddToCart(product : Product):void
  {
    this.cartService.addToCart(
      {
        product: product.image,
        name:product.name,
        price:product.price,
        quantity:1,
        id:product.id
      }
    );
  }
}
