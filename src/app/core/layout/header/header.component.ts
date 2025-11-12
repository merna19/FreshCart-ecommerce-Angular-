import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive,Router } from "@angular/router";
import {LoginService} from "../auth/services/login.service"

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  IsLoggedIn: any;
  constructor(private _LoginService:LoginService, private _router:Router){}
  
  ngOnInit(): void {
    this._LoginService.userData.subscribe(
      {
        next: (token)=> {this.IsLoggedIn=token}
      }
    )
    //Or this._LoginService.userData.asObservable();

  }
  signOut()
  {
     //remove the token from localstorage
     localStorage.removeItem("UserToken");
     //set the BehaviorSubject to null to stop all subscriptions
     this._LoginService.userData.next(null);
     //navigate back to login
     this._router.navigate(['/login']);
  }
}
