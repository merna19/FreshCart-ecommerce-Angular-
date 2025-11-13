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
  code!:string;

 sendCode()
 {
    this._ForgotPasswordService.CodeVerify({ resetCode: this.code }).subscribe(
      {
        next: (res)=>{
          console.log(res);
          /*if(res.status=='success')
          {
            //_route.navigate(['/'])
          }*/
        },
        error:(err)=>{
          console.log(typeof(this.code));
          
        },
        complete: ()=>{
          console.log("done recieving code");
        }
      }
    );
 }
}
