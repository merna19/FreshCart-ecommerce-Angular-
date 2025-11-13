import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {ProductService} from '../../service/product/product.service'
import { IProduct } from '../../interfaces/IProduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import {CartService} from '../../service/cart/cart.service'
import { ICart } from '../../interfaces/icart';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink,CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductService:ProductService,private _CartService:CartService){}
  product!:IProduct;
  cartDetails!:ICart;
  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false ,
      navSpeed: 700,
      autoWidth: false,      
      stagePadding: 0, 
      navText: ['Previous', 'Next'],
      responsive: {
        0: {
          items: 1,
        }
      },
      nav: true
    }
  ngOnInit(): void {
    this.getId();
  }
  getId()
  {
    //observable=> dynamic value
    //this._ActivatedRoute.paramMap.subscribe(
    //  {
    //    next: (res:any)=> {console.log(res?.params?.id);}
    //  }
    //)
    //fires only once => static id
    let ProductId:any=this._ActivatedRoute.snapshot.params['id'];
    console.log(ProductId);
    this.getDetails(ProductId);
  }
  getDetails(Id:string)
  {
    this._ProductService.getProductById(Id).subscribe(
      {
        next: (res)=> {this.product=res.data; console.log(this.product)},
        error: (err)=>console.log(err),
      }
    );
  }

  AddToCart(productId:string)
  {
    this._CartService.addProductToCart(productId).subscribe(
      {
        next: (res)=>{console.log(res); this.cartDetails=res},
        error: (err)=>{console.log(err);},
        complete: ()=>{console.log("product added")}
      }
    )
  }
}
