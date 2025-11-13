import { Routes } from '@angular/router';
import { authGuardGuard } from './core/Guard/auth-guard.guard';
import { ForgetPasswordComponent } from './core/layout/auth/forget-password/forget-password.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { LoginComponent } from './core/layout/auth/login/login.component';
import { VerifyCodeComponent } from './core/layout/auth/verify-code/verify-code.component';
import { ChangePasswordComponent } from './core/layout/auth/change-password/change-password.component';

export const routes: Routes = [
    {
        path: 'home', canActivate:[authGuardGuard], component: HomeComponent /*loadComponent: () => import('./feature/pages/home/home.component').then(c => c.HomeComponent)*/
    }
    ,{
        path: '', redirectTo: 'login', pathMatch: 'full'
    }
    ,{
        path: 'about',loadComponent: () => import('./core/policy/about/about.component').then(c => c.AboutComponent)
    }
    ,{
        path: 'products',canActivate:[authGuardGuard],  loadComponent: ()=> import('./feature/pages/products/products.component').then(c=> c.ProductsComponent)    }
        ,
    {
        path: 'cart', canActivate:[authGuardGuard], loadComponent: () => import('./feature/pages/cart/cart.component').then(c => c.CartComponent)
    },
    {
        path:'category',canActivate:[authGuardGuard], loadComponent: () => import('./feature/pages/category/category.component').then(c=> c.CategoryComponent)
    }
    ,{
        path:'brand',canActivate:[authGuardGuard], loadComponent: ()=> import('./feature/pages/brand/brand.component').then(c=>c.BrandComponent)
    }
    ,
    {
        path:'login',component: LoginComponent /*loadComponent: () => import('./core/layout/auth/login/login.component').then(c=>c.LoginComponent)*/
    }
    ,{
        path: 'register', loadComponent: () => import('./core/layout/auth/register/register.component').then(c=>c.RegisterComponent)
    }
    ,{
        path: 'forget-password', loadComponent: ()=> import('./core/layout/auth/forget-password/forget-password.component').then(c=> c.ForgetPasswordComponent)
    }
    ,
    {
        path: 'privacy-policy', loadComponent: () => import('./core/policy/policy/policy.component').then(c => c.PolicyComponent)
    }
    ,
    {
        path: 'contact-us', loadComponent: () => import('./core/layout/auth/contact-us/contact-us.component').then(c => c.ContactUsComponent)
    }
    ,
    {
        path: 'license', loadComponent: () => import('./core/policy/license/license.component').then(c => c.LicenseComponent)
    }
    ,
    {
        path:'verifycode', component: VerifyCodeComponent
    },
    {
        path: 'details/:id',canActivate:[authGuardGuard], loadComponent: () => import('./shared/UI/product-details/product-details.component').then(c => c.ProductDetailsComponent)
    },
    {
        path:'changepassword', component: ChangePasswordComponent
    }
    ,
    {
        path:'**', loadComponent:()=>import('./core/notFound/not-found/not-found.component').then(c=>c.NotFoundComponent)
    }
    /*{
        path:'categoryDetails', loadComponent: ()=>import('./shared/UI/category-details/category-details.component').then(c=>c.CategoryDetailsComponent)
    }*/
];
