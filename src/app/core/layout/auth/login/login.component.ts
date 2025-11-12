import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {LoginService} from '../../auth/services/login.service'
import { Router,RouterLink } from "@angular/router";
import { delay } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(private _LoginService:LoginService, private _router: Router){}
  
  message!: string;
  ErrorStatus!: boolean;
  IsCallingApi:Boolean=false;
  TogglePassFlag:boolean=false;

  LogInForm: FormGroup=new FormGroup(
    {
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required])
    }
  );

  LogIn(){
    if(this.IsCallingApi==false)
    {
      if(this.LogInForm.invalid)
      {
        this.LogInForm.markAllAsTouched();
        this.IsCallingApi=false;
      }
      else
      {
        this.IsCallingApi=true;
        this._LoginService.LoginApi(this.LogInForm.value).subscribe(
        {
          next: (res)=>{
            this.message=res?.message;
            console.log(this.message); 
            localStorage.setItem("UserToken",res.token);
            this._LoginService.SaveUser();
            this.IsCallingApi=false;
            this._router.navigate(['/home']);

                      },
          error: (err)=> {
            this.ErrorStatus=true; 
            console.log(this.ErrorStatus);
            setTimeout(() => (this.ErrorStatus = false), 2000);
            this.LogInForm.reset();
            this.IsCallingApi=false;
                        },
          complete: ()=> {console.log("Login Successfully");}
        }
    );
      }
      
  }
}
  TogglePassword()
  {
    this.TogglePassFlag=!this.TogglePassFlag;
  }
}
