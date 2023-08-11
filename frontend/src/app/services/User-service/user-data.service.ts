import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

   

  constructor(private http : HttpClient) { }

   
  getData()
   {
    return this.http.get(
      'http://localhost:8080/user/finduser'
    )
   }
   delData(id: number)
   {
      this.http.delete('http://localhost:8080/user/'+id).subscribe(() => console.log( 'Delete successful'));
   }
}
