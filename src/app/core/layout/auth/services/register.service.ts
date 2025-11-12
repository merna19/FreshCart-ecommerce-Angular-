import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegister } from '../interfaces/iregister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private RegUrl= 'https://ecommerce.routemisr.com/api/v1/auth/signup'
  
  constructor(private _HttpClient:HttpClient) { }
  RegisterApi(userInfo:IRegister):Observable<any>
  {
    return this._HttpClient.post(this.RegUrl,userInfo);
  }
  
}
