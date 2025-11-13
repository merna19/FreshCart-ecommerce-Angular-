import { Component } from '@angular/core';
import { ICodeVerify } from '../interfaces/icode-verify';
import {ForgotPasswordService} from'../services/forgot-password.service'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

  constructor(private _ForgotPasswordService: ForgotPasswordService){}
  code!:ICodeVerify;
 
 sendCode()
 {
    this._ForgotPasswordService.CodeVerify(this.code).subscribe(
      {
        next: (res)=>{
          console.log(res);
        }
      }
    );
 }
}
