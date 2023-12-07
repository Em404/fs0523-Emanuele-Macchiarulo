import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { iRegister } from '../models/register';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  // constructor(private authSvc: AuthService) {}

  // registerData: iRegister = {
  //   email: '',
  //   password: '',
  //   nome: '',
  // };

  // register() {
  //   this.authSvc.signUp(this.registerData).subscribe((data) => {
  //     this.router.navigate(['/login']);
  //   });
  // }
}
