import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public url = 'http://localhost:9090/api/users';
  constructor(public http: HttpClient) {}

  private data = new BehaviorSubject(false);
  isLoggedIn = this.data.asObservable();

  addUser = (user: Object): Observable<any> => {
    return this.http.post(`${this.url}/signUp`, user);
  };

  loginUser = ({ userId, password }: any): Observable<any> => {
    return this.http.post(`${this.url}/login`, { userId, password });
  };

  setLoggedIn = (value: boolean) => {
    console.log('setting logged in value ' + value);
    this.data.next(value);
  };
}
