import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserUtilService } from 'src/app/services/browser-util.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private itemService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private router: Router,
    public browserStorageUtil: BrowserUtilService
  ) {}
  public Products: any[] = [];
  public filterText: string = '';
  public userData: any = {};

  ngOnInit(): void {
    const userData =
      this.browserStorageUtil.localStorageUtil.getEntry('userData');

    if (Object.keys(userData).length === 0) {
      this.router.navigateByUrl('/login');
    } else {
      this.userData = userData;
    }
    this.itemService.getProducts().subscribe((products) => {
      this.Products = products;
    });
  }

  onWishlist = (product: any) => {
    const { name, price, imageUrl } = product;
    const reqObj = {
      userId: this.userData?.userId,
      items: [{ name, price, imageUrl }],
    };
    this.wishlistService.addToWishlist(reqObj).subscribe((result) => {
      if (result?.message === 'wishlist successful') {
        alert('Item wishlisted. you can view your list in wishlist page');
      } else {
        alert('some error occured');
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
        alert('Item added to cart. view cart to place order');
      } else {
        alert('some error occured');
      }
    });
  };
}
