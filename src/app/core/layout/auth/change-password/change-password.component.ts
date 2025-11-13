import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {ForgotPasswordService} from'../services/forgot-password.service'
import { Router } from '@angular/router';
import { IChangePassword } from '../interfaces/ichange-password';
import { error } from 'console';
@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  constructor(private _ForgotPasswordService:ForgotPasswordService, private _router:Router){}
  ErrorStatus!: string|null;
  TogglePassFlag:boolean=false;
  ToggleRePassFlag:boolean=false;
  IsCallingApi: boolean =false;

  ChangePassForm: FormGroup=new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),    
    password: new FormControl(null, [Validators.required, Validators.minLength(6),Validators.pattern(/^[A-Z]\w{5,}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
    
  }, {validators: [this.Validate_RePassword]});

  
  changePass()
  {
    let box:IChangePassword={email: this.ChangePassForm.get('email')?.value, newPassword: this.ChangePassForm.get('password')?.value};

    if(this.IsCallingApi==false)
    {
      this.IsCallingApi=true;
      if(this.ChangePassForm.invalid)
      {
        this.ChangePassForm.markAllAsTouched();
        this.IsCallingApi=false;
      }
      else{
          this._ForgotPasswordService.changePassword(box).subscribe({
            next:(res)=>{
              console.log(res);
              this.IsCallingApi=false;
              this.ChangePassForm.reset();
              this.ErrorStatus='';
              this._router.navigate(['/login']);
            },
            error:(err)=>{
              console.log(err);
              this.ErrorStatus=err.error.message;
              this.IsCallingApi=false;},
            complete: ()=>{console.log("password changed successfully")}
          })
        }
      }
  }

  Validate_RePassword(form:AbstractControl)
    {
      const password= form.get('password')?.value;
      const rePassword= form.get('rePassword')?.value;
      return password===rePassword? null: {Mismatch: true}
    }

  TogglePassword()
  {
    this.TogglePassFlag=!this.TogglePassFlag;
  }
  ToggleRePassword()
  {
    this.ToggleRePassFlag=!this.ToggleRePassFlag;
  }
  
  }
