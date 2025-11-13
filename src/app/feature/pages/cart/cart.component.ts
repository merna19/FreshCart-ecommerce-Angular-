import { Component, OnInit} from '@angular/core';
import { CartService } from '../../../shared/service/cart/cart.service';
import { ICart } from '../../../shared/interfaces/icart';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartDetails! :ICart;
  constructor(private _CartService:CartService){}
  ngOnInit(): void {
    this._CartService.GetCart().subscribe(
      {
        next: (res)=>{
          this.cartDetails=res;
          console.log(this.cartDetails);
                      },
        error: (err)=>{console.log(err);},
        complete: ()=>{console.log("Got the Cart Data Successfully");}

      }
    )
  }
}
