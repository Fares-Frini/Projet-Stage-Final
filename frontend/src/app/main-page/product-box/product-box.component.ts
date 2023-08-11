import { Component, Input, OnInit ,Output ,EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { BookDataService } from 'src/app/services/book-service/book-data.service';
@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {
  url = "../assets/images/bookDefault.png";
@Input() fullWidthMode= false;
@Input() product : Product  =
{
  id: 1,
    name :"Book",
    price : 150,
    category : "category",
    description : "lorem",
    image: "https://via.placeholder.com/150",
};
@Output() addToCart = new EventEmitter();
constructor(private bookDataService:BookDataService) {}

ngOnInit(): void
{
  this.imageGet();
}
onAddToCart(): void{
  this.addToCart.emit(this.product)

}

imageGet(): void {
  this.bookDataService.getImg(this.product.id).subscribe((response)=>
  {
    let blob: Blob=response.body as Blob;
    var reader = new FileReader();
    reader.readAsDataURL(blob)
    reader.onload = (event: any) => {
      this.url = event.target.result;
    }
  })
}
}
