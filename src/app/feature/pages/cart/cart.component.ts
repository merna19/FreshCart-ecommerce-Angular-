import { Component, OnInit} from '@angular/core';
import { CartService } from '../../../shared/service/cart/cart.service';
import { ICart } from '../../../shared/interfaces/icart';
//import { json } from 'stream/consumers';
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
  RemoveItem(id:string)
  {
    this._CartService.RmvProductFromCart(id).subscribe(
      {
        next: (res)=>{
          this.cartDetails=res;
          console.log(this.cartDetails);
          },
        error: (err)=> {console.log(err);},
        complete: ()=>{console.log("Item Removed successfully");}
      }
    )
  }
  UpdateCount(id:string,count:number)
  {
    let CountStringfied:string=count.toString();
    //let CountStringfied:string=`${count}`

    this._CartService.UpdateProductToCart(id, CountStringfied).subscribe(
      {
        next: (res)=>{
          this.cartDetails=res;
          console.log(res);

        },
        error: (err)=>{console.log(err);},
        complete: ()=>{console.log("updated Count");}
      }
    )
  }
  ClearCart()
  {
    this._CartService.ClearCart().subscribe(
    {
      next: (res)=>
      {
        console.log(res);
        if(res.message=="success")
        {
          //cart TotalCartPrice bug
          this.cartDetails={} as ICart;
          this.cartDetails.data.totalCartPrice=0;
        }
      }
      ,
      complete: ()=>
        {
          console.log("Cart Cleared successfully");
        }
    })
  }
}
