import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserUtilService } from 'src/app/services/browser-util.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userData: any = {};
  cartItems: any[] = [];
  constructor(
    public browserStorageUtil: BrowserUtilService,
    private router: Router,
    public cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const userData =
      this.browserStorageUtil.localStorageUtil.getEntry('userData');

    if (Object.keys(userData).length === 0) {
      this.router.navigateByUrl('/login');
    } else {
      this.userData = userData;
      this.cartService
        .getCart({ userId: userData.userId })
        .subscribe((result) => {
          if (result) {
            this.cartItems = result.items;
          }
        });
    }
  }

  onRemove(product: any) {
    const { name, price, imageUrl } = product;
    const reqObj = {
      userId: this.userData?.userId,
      items: [{ name, price, imageUrl }],
    };

    this.cartService.removeFromCart(reqObj).subscribe((result) => {
      if (result?.message === 'item removed from cart') {
        alert('item removed from cart');
        this.cartService
          .getCart({ userId: this.userData.userId })
          .subscribe((result) => {
            if (result) {
              this.cartItems = result.items;
            }
          });
      }
    });
  }

  onAddMore(product: any) {
    const { name, price, imageUrl } = product;
    const reqObj = {
      userId: this.userData?.userId,
      items: [{ name, price, imageUrl, quantity: 1 }],
    };
    this.cartService.addToCart(reqObj).subscribe((result) => {
      if (result?.message === 'item added to cart') {
        alert('Item added');
        this.cartService
          .getCart({ userId: this.userData.userId })
          .subscribe((result) => {
            if (result) {
              this.cartItems = result.items;
            }
          });
      } else {
        alert('some error occured');
      }
    });
  }

  onPlaceOrder = () => {
    this.orderService
      .placeOrder({
        userId: this.userData.userId,
        items: this.cartItems,
      })
      .subscribe((result) => {
        if (result?.message === 'Order placed successfully') {
          alert('Order placed successful');
          this.cartService
            .emptyCart({ userId: this.userData.userId })
            .subscribe((result) => {
              if (result?.message === 'cart emptied successfully') {
                this.router.navigateByUrl('/orders');
              }
            });
        } else {
          alert(
            'some error occured.please try again or contact support if issue still persists'
          );
        }
      });
  };
}
