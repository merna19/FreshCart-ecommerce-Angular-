import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IForgotPassword } from '../interfaces/iforgot-password';
import { ICodeVerify } from '../interfaces/icode-verify';
import { IChangePassword } from '../interfaces/ichange-password';
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  baseUrl:string='https://ecommerce.routemisr.com/api/v1/auth';
  
  constructor(private _httpClient: HttpClient) { }
  forgotPass(email:IForgotPassword):Observable<any>
  {
    return this._httpClient.post(this.baseUrl+'/forgotPasswords',email);
  }
  CodeVerify(code:ICodeVerify):Observable<any>
  {
    return this._httpClient.post(this.baseUrl+'/verifyResetCode',code);
  }
  changePassword(box:IChangePassword):Observable<any>{
    return this._httpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',box);
  }

}
