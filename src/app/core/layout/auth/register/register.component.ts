import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from "@angular/router";
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterComponent{
  
  constructor(private _RegisterService:RegisterService, private _router: Router){}

  isFormTouched: boolean=false;
  successfulSubmit:boolean=false;
  IsCallingApi: boolean =false;
  TogglePassFlag:boolean=false;
  ToggleRePassFlag:boolean=false;
  ErrorStatus!: string|null;

  registerForm: FormGroup=new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6),Validators.pattern(/^[A-Z]\w{5,}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, {validators: [this.Validate_RePassword]});

  Validate_RePassword(form:AbstractControl)
  {
    const password= form.get('password')?.value;
    const rePassword= form.get('rePassword')?.value;
    return password===rePassword? null: {Mismatch: true}
  }

  Register()
  {
    if(this.IsCallingApi==false)
    {
      this.IsCallingApi=true;
      if(this.registerForm.invalid)
      {
        this.registerForm.markAllAsTouched();
        this.IsCallingApi=false;
      }
      else{
        this.ErrorStatus='';
        this._RegisterService.RegisterApi(this.registerForm.value).subscribe(
        {
          next: (res)=>{
            console.log(res); 
            this.successfulSubmit=true;
            this.IsCallingApi=false;
            this._router.navigate(['/login'])
            //setTimeout(() => (this.successfulSubmit = false, 2000));
            this.registerForm.reset();
        },
          error: (err)=>{console.log(err); 
            this.ErrorStatus=err.error.message;
            this.IsCallingApi=false;

            //setTimeout(() => (this.ErrorStatus = null, 2000));
            },
          complete: ()=>{console.log("Registeration Fetch Done");}
        })
        //setTimeout(() => (this.successfulSubmit = false, 2000));
        //setTimeout(() => (this.ErrorStatus = null, 2000));
        
      }
      }
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
//import { ReactiveFormsModule } from '@angular/forms';
//input=> formControl
//formControls=>FormGroup
//name your controllers as in webApi
//import { FormGroup, FormControl } from '@angular/forms';
//FormGroup takes object of array of FormControllers and object of array of Custom Validators OR one Custome validator
//declare registerForm:FormGroup= new FormGroup({formController1: new FormControl(//initial value:Optional) , formController2:new FormControl()})
//bind formGroup to form element in html [formGroup]="registerForm"
//bind formControl to input element in html [formControlName]="formController1"
//handle form submission using (ngSubmit) event in form element in html

//validation (required,email pattern,password pattern,confirm password match,phone pattern) can be added later
//import { Validators } from '@angular/forms';
//formControl(null, [validators.required, validators.email])
//Custome Validation 
//function takes (form :AbstractForm) returns mismatch or null => general form
 
//show errors => formControl.get('formControl1')?.getError('required')=> div role alert
//or JSON piping (converts Object to JSON)=> {{registerForm.get('formControl1')?.errors | json}}

//default required error =>  registerForm.get('FormController1')?.touched
//@let -> used for repeatitive registerForm.get('FormController1')

//submit inValid form => flag + mark all as touched
//success submit => reset