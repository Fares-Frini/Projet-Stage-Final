import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http : HttpClient) { }

   
  getData()
   {
    return this.http.get(
      'http://localhost:8080/book/findbook/0/100/true'
    )
   }
   delData(id: number)
   {
      this.http.delete('http://localhost:8080/book/'+id).subscribe(() => console.log( 'Delete successful'));
   }
   getFile(id:number)
   {
     return this.http.get(
      'http://localhost:8080/upload/'+id,{observe:'response',responseType:'blob'}) 
   
   }
   getImg(id:number)
   {
     return this.http.get(
      'http://localhost:8080/image/'+id,{observe:'response',responseType:'blob'}) 
   
   }
}
