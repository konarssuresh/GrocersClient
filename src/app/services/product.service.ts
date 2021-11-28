import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'http://localhost:9090/api/items';
  constructor(private http: HttpClient) {}

  getProducts = (): Observable<any> => {
    return this.http.get(`${this.url}/getItems`);
  };
}
