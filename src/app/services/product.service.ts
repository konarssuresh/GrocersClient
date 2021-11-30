import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public url = 'http://localhost:9090/api/items';
  constructor(public http: HttpClient) {}

  getProducts = (): Observable<any> => {
    return this.http.get(`${this.url}/getItems`);
  };
}
