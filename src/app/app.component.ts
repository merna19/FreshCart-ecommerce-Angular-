import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/service/flowbite.service';
import { HeaderComponent } from "./core/layout/header/header.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { HomeComponent } from './feature/pages/home/home.component';
import { AboutComponent } from './core/policy/about/about.component';
import { ProductsComponent } from './feature/pages/products/products.component';
import { CategoryComponent } from './feature/pages/category/category.component';
import { CartComponent } from './feature/pages/cart/cart.component';
import { BrandComponent } from './feature/pages/brand/brand.component';
import { LoginComponent } from './core/layout/auth/login/login.component';
import { RegisterComponent } from './core/layout/auth/register/register.component';
import { ForgetPasswordComponent } from './core/layout/auth/forget-password/forget-password.component';
import { ContactUsComponent } from './core/layout/auth/contact-us/contact-us.component';
import { PolicyComponent } from './core/policy/policy/policy.component';
import { LicenseComponent } from './core/policy/license/license.component';
import { ProductDetailsComponent } from './shared/UI/product-details/product-details.component';
import { LoginService } from './core/layout/auth/services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ProductDetailsComponent,HomeComponent, AboutComponent, ProductsComponent,CategoryComponent,CartComponent,BrandComponent,LoginComponent,RegisterComponent, ForgetPasswordComponent, ContactUsComponent, PolicyComponent,LicenseComponent],
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
