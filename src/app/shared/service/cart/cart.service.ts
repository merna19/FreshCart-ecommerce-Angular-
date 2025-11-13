import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token:string=JSON.parse(JSON.stringify(localStorage.getItem("UserToken")));
  constructor(private _httpClient:HttpClient) { }
  baseUrl:string='https://ecommerce.routemisr.com/api/v1';
  
  addProductToCart(productId:string):Observable<any>
  {
    return this._httpClient.post((this.baseUrl+'/cart'),{productId}, {headers: {
      token:this.token,
    }
  });
  }
  UpdateProductToCart(productId:string, count:string):Observable<any>
  {
    return this._httpClient.put((`${this.baseUrl}/cart/${productId}`),{count}, {headers: {
      token:this.token,
    }
  });
  }
  GetCart():Observable<any>
  {
    return this._httpClient.get((`${this.baseUrl}/cart`),{headers: {
      token:this.token,
    }
  });
  }
  RmvProductFromCart(productId:string):Observable<any>
  {
    return this._httpClient.delete((`${this.baseUrl}/cart/${productId}`),{headers: {
      token:this.token,
    }
  });
  }
  ClearCart():Observable<any>
  {
    return this._httpClient.delete((`${this.baseUrl}/cart`),{headers: {
      token:this.token,
    }
  });
  }
}
