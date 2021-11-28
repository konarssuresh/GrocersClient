import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserUtilService } from 'src/app/services/browser-util.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  userData: any = {};
  orders: any[] = [];
  constructor(
    private browserStorageUtil: BrowserUtilService,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const userData =
      this.browserStorageUtil.localStorageUtil.getEntry('userData');

    if (Object.keys(userData).length === 0) {
      this.router.navigateByUrl('/login');
    } else {
      this.userData = userData;
      this.orderService
        .getOrdersByUserId({ userId: this.userData.userId })
        .subscribe((results) => {
          this.orders = results;
        });
    }
  }
}
