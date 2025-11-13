import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../shared/service/product/product.service';

import { IProduct } from '../../../../../shared/interfaces/IProduct';
import { ProductItemComponent } from '../../../../../shared/UI/product-item/product-item.component';
import { CartService} from '../../../../../shared/service/cart/cart.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-recent-products',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './recent-products.component.html',
  styleUrl: './recent-products.component.scss'
})
export class RecentProductsComponent implements OnInit{
  constructor(private _productService: ProductService, private _CartService:CartService, private _Router:Router) {}
  products!: IProduct[];   
  ngOnInit(): void {
    this._productService.getAllProducts().subscribe(
      {
        next:(res)=>{ 
          this.products = res.data;
          console.log(res.data);
        },
        error:(err)=>{ console.log(err);},
        complete:()=>{ console.log('products fetch Completed');}
      }
    );
    }
    addToCart(id:string)
    {
      this._CartService.addProductToCart(id).subscribe({
        next: (res)=> {console.log(res);},
        error: (err)=>{
          console.log(err);
        },
        complete: ()=>{console.log("Done Adding to cart"); 
          this._Router.navigate(['/cart'])
        }
      })
    }
}