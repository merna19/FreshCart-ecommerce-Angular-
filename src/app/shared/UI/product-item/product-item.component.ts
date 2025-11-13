import { Component, EventEmitter, Input,Output } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { Router, RouterLink } from "@angular/router";


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  constructor(private _router:Router){}
  @Input() product!: IProduct;
  @Output() ProductIdToAddToCartEmitter: EventEmitter<string>=new EventEmitter();

  SendproductIdToParent(productId:string)
  {
    this.ProductIdToAddToCartEmitter.emit(productId);
  }
}
