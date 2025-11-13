import { Component } from '@angular/core';
import {ForgotPasswordService} from'../services/forgot-password.service'

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  constructor(private _ForgotPasswordService:ForgotPasswordService, private _router: Router){}
  ErrorStatus!: boolean;
  ForgotPassForm: FormGroup=new FormGroup(
      {
        email: new FormControl(null,[Validators.required]),
      })
  forgotPassword()
  {
    if(this.ForgotPassForm.invalid)
      {
        this.ForgotPassForm.markAllAsTouched();
      }
      else
      {
        this._ForgotPasswordService.forgotPass(this.ForgotPassForm.value).subscribe(
      {
        next: (res)=>{console.log(res); },
        error: (err)=>{this.ErrorStatus=true;},
        complete:()=>{this._router.navigate(['/verifycode']);}
      }
    )
  }
}
}
