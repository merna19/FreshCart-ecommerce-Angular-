import { Component } from '@angular/core';
import { ICodeVerify } from '../interfaces/icode-verify';
import {ForgotPasswordService} from'../services/forgot-password.service'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

  constructor(private _ForgotPasswordService: ForgotPasswordService, private _router: Router){}
  code!:string;
  ErrorStatus:boolean=false;
 VerifyCode()
 {
    this._ForgotPasswordService.CodeVerify({ resetCode: this.code }).subscribe(
      {
          next: (res)=>{
          console.log(res);
          //"status": "Success"
          if(res.status=='Success')
          {
            this._router.navigate(['/changepassword'])
            this.ErrorStatus=false;
          }
          else
          {
            this.ErrorStatus=true;
          }
        },
        error:(err)=>{
          console.log(typeof(this.code));
          this.ErrorStatus=true;
        },
        complete: ()=>{
          console.log("done recieving code");
        }
      }
    );
 }
}
