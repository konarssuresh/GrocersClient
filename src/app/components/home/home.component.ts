import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserUtilService } from 'src/app/services/browser-util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public userData: any;
  constructor(
    public browserStorageUtil: BrowserUtilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userData =
      this.browserStorageUtil.localStorageUtil.getEntry('userData');
    console.log(userData);
    this.userData = userData;
    if (Object.keys(userData).length === 0) {
      this.router.navigateByUrl('/login');
    }
  }
}
