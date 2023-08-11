import { Component, Input, OnInit ,Output ,EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box-slide',
  templateUrl: './product-box-slide.component.html',
  styleUrls: ['./product-box-slide.component.scss']
})
 


export class ProductBoxSlideComponent {
@Input() fullWidthMode= false;
product : Product | undefined =
{
  id: 1,
    name :"Book",
    price : 150,
    category : "category",
    description : "lorem",
    image: "https://via.placeholder.com/150",
};
@Output() addToCart = new EventEmitter();
constructor() {}

ngOnInit(): void
{

}
onAddToCart(): void{
  this.addToCart.emit(this.product)
}
}
