import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserUtilService } from 'src/app/services/browser-util.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  public userData: any;
  wishlistItems: any[] = [];
  constructor(
    public browserStorageUtil: BrowserUtilService,
    private router: Router,
    public wishlistService: WishlistService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const userData =
      this.browserStorageUtil.localStorageUtil.getEntry('userData');

    if (Object.keys(userData).length === 0) {
      this.router.navigateByUrl('/login');
    } else {
      this.userData = userData;
      this.wishlistService
        .getWishlist({ userId: userData.userId })
        .subscribe((result) => {
          if (result) {
            this.wishlistItems = result.items;
          }
        });
    }
  }

  onRemove = (product: any) => {
    const { name, price, imageUrl } = product;
    const reqObj = {
      userId: this.userData?.userId,
      items: [{ name, price, imageUrl }],
    };

    this.wishlistService.removeFromWishlist(reqObj).subscribe((result) => {
      if (result?.message === 'item removed from wishlist') {
        alert('item removed from wishlist');
        this.wishlistService
          .getWishlist({ userId: this.userData.userId })
          .subscribe((result) => {
            if (result) {
              this.wishlistItems = result.items;
            }
          });
      }
    });
  };

  onAddToCart = (product: any) => {
    const { name, price, imageUrl } = product;
    const reqObj = {
      userId: this.userData?.userId,
      items: [{ name, price, imageUrl, quantity: 1 }],
    };
    this.cartService.addToCart(reqObj).subscribe((result) => {
      if (result?.message === 'item added to cart') {
        alert('Item added to cart');
      } else {
        alert('some error occured');
      }
    });
  };
}
