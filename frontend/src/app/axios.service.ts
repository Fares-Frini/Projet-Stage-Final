import { Injectable } from '@angular/core';
import axios from 'axios';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  auth = '';
  helper = new JwtHelperService();

  constructor() { 
    axios.defaults.baseURL= "http://localhost:8080"
    axios.defaults.headers.post["Content-type"] = "application/json"
  }
  getDecodedToken():object | null
  {
    if (this.getAuthToken()!=null) {
      return this.helper.decodeToken(this.getAuthToken() as string)as object;
    }else
    {
      return null;
    }
    
  }

  getAuthToken(): string | null
  {
    return window.localStorage.getItem("auth_token");
  }
  setAuthToken(token : string | null): void 
  {
    if(token !== null)
    {
      window.localStorage.setItem("auth_token",token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }
  request (method: string,url : string, data : any): Promise<any>
  {
    let headers = {};

    if(this.getAuthToken() !== null )
    {
      headers = {"Authorization" : "Bearer" + this.getAuthToken()};
    }
    return axios({
      method:method,
      url:url,
      data:data,  
      headers:headers
    })
  }
  disconnect():void
  {
    window.localStorage.removeItem("auth_token");
  }
  post(method: string ,url:string,data:any ):Promise<any>
  {
    return axios({
      method:method,
      url:url,
      data:data
    })
    .then(function (response) {
      console.log(response);
  });
  }
  
}
  
