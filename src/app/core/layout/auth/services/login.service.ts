import { afterNextRender, Injectable } from '@angular/core';
import { ILogIn } from '../interfaces/ilog-in';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {jwtDecode} from'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  
  constructor(private _HttpClient:HttpClient) { 
    //Solve Refresh Bug
    afterNextRender(()=>this.CheckLogIn());
  }
  userData: BehaviorSubject<any>= new BehaviorSubject(null);
  private LogInUrl= 'https://ecommerce.routemisr.com/api/v1/auth/signin';

  LoginApi(userInfo:ILogIn):Observable<any>
  {
    return this._HttpClient.post(this.LogInUrl, userInfo);
  }

  SaveUser()
  {
    if(localStorage.getItem("UserToken"))
    {
      //console.log(localStorage.getItem("UserToken"));
      //promise it won't be null with!
      this.userData.next(jwtDecode(localStorage.getItem("UserToken")!));
    }
  }
  CheckLogIn():boolean
  {
    if(localStorage.getItem("UserToken"))
    {
      this.userData.next(jwtDecode(localStorage.getItem("UserToken")!))
      return true;
    }
    else
    {
      return false;
    }
  }
}
