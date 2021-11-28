import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserUtilService } from './services/browser-util.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'GrocersClient';
  public isMenuCollapsed = true;
  isLoggedIn: boolean = false;

  constructor(
    private userService: UserService,
    private browserUtilService: BrowserUtilService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userService.isLoggedIn.subscribe((res) => {
      console.log('login value observable');
      this.isLoggedIn = res;
    });
    const userData =
      this.browserUtilService.localStorageUtil.getEntry('userData');
    if (Object.keys(userData).length === 0) {
      this.userService.setLoggedIn(false);
    } else {
      this.userService.setLoggedIn(true);
    }
  }

  onLogout = () => {
    this.browserUtilService.localStorageUtil.setEntry('userData', {});
    this.userService.setLoggedIn(false);
    this.router.navigateByUrl('/');
  };
}
