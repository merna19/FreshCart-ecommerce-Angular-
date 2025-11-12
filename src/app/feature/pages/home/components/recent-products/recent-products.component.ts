import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../shared/service/product/product.service';
import { nextTick } from 'process';
import { IProduct } from '../../../../../shared/interfaces/IProduct';
import { ProductItemComponent } from '../../../../../shared/UI/product-item/product-item.component';
@Component({
  selector: 'app-recent-products',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './recent-products.component.html',
  styleUrl: './recent-products.component.scss'
})
export class RecentProductsComponent implements OnInit{
  constructor(private _productService: ProductService) {}
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
}