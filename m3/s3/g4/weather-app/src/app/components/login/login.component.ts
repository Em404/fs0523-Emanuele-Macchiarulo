import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { iLogin } from '../models/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // constructor(private authSvc: AuthService, private router: Router) {}

  // loginData: iLogin = {
  //   email: 'mario@rossi.it',
  //   password: 'password',
  // };

  // login() {
  //   this.authSvc.login(this.loginData).subscribe((data) => {
  //     this.router.navigate(['/profile']);
  //   });
  // }
}
