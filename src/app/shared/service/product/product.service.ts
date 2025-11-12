import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://ecommerce.routemisr.com/api/v1/products';

  constructor(private _httpClient:HttpClient) { }

  getAllProducts(): Observable<any> {
    return this._httpClient.get(this.apiUrl);
  }

  getProductById(id:string):Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
}
