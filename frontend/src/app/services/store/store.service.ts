import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

const STORE_BASE_URL = 'http://localhost:8080'


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit ="12",sort="desc"):Observable<Array<Product>>
  {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/book/findbook/0/`+limit+"/"+(sort=='asc')
    )
  }
}
