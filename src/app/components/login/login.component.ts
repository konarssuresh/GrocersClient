import { Component, OnInit } from '@angular/core';
import { BrowserUtilService } from 'src/app/services/browser-util.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  errorMsg: string = '';
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private browserUtilService: BrowserUtilService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  handleLogin = () => {
    this.userService.loginUser(this.loginForm.value).subscribe((user) => {
      const { message, userData } = user;
      if (message) {
        this.errorMsg = message;
      } else {
        this.browserUtilService.localStorageUtil.setEntry(
          'userData',
          userData[0]
        );
        this.userService.setLoggedIn(true);
        this.router.navigateByUrl('/');
      }
    });
  };
}
