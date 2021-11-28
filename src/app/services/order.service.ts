import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url = 'http://localhost:9090/api/orders';
  constructor(private http: HttpClient) {}

  placeOrder = (data: any): Observable<any> => {
    return this.http.post(`${this.url}/placeOrder`, data);
  };

  getOrdersByUserId = (data: any): Observable<any> => {
    return this.http.post(`${this.url}/getOrders`, data);
  };
}