import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private url = 'http://localhost:9090/api/wishlists';
  constructor(private http: HttpClient) {}

  addToWishlist = (data: any): Observable<any> => {
    return this.http.post(`${this.url}/addToWishlist`, data);
  };

  getWishlist = (data: any): Observable<any> => {
    return this.http.post(`${this.url}/getWishlistByUserId`, data);
  };

  removeFromWishlist = (data: any): Observable<any> => {
    return this.http.post(`${this.url}/removeFromWishlist`, data);
  };
}
