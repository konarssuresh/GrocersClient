import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public url = 'http://localhost:9090/api/carts';
  constructor(public http: HttpClient) {}

  addToCart = (data: any): Observable<any> => {
    return this.http.post(`${this.url}/addToCart`, data);
  };

  getCart = (data: any): Observable<any> => {
    return this.http.post(`${this.url}/getCartByUserId`, data);
  };

  removeFromCart = (data: any): Observable<any> => {
    return this.http.post(`${this.url}/removeFromCart`, data);
  };

  emptyCart = (data: any): Observable<any> => {
    return this.http.post(`${this.url}/emptyCart`, data);
  };
}
