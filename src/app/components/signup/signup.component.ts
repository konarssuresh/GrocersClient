import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errMsg: string = '';
  signUpForm: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      userId: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  get getControl() {
    return this.signUpForm.controls;
  }

  handleSignUp = () => {
    const user = this.signUpForm.value;
    this.userService
      .addUser({
        ...user,
        userType: 'general',
        dateOfBirth: `${user.dateOfBirth.month}/${user.dateOfBirth.day}/${user.dateOfBirth.year}`,
      })
      .subscribe((result) => {
        if (result?.message === 'User added successfully') {
          alert(result?.message);
          this.router.navigateByUrl('/login');
        } else {
          this.errMsg = result?.message;
        }
      });
  };
}
