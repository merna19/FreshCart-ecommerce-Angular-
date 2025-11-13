import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/service/flowbite.service';
import { HeaderComponent } from "./core/layout/header/header.component";
import { FooterComponent } from "./core/layout/footer/footer.component";

import { LoginService } from './core/layout/auth/services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  title = 'FreshCart';

  constructor(private _FlowbiteService:FlowbiteService, private _loginService:LoginService){}
  ngOnInit() {
    
    // Initialization logic here
    this._FlowbiteService.loadFlowbite((flowbite) => {
      // Flowbite is loaded and can be used here
      console.log('Flowbite loaded:');
    });
    
  }
}
