import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private authSvc:AuthService){}

  userName:string|undefined = '';
  email:string|undefined = '';

  ngOnInit(){
    this.authSvc.user$.subscribe(accessData => {
        this.userName = accessData?.user.nome
        this.email = accessData?.user.email
    })
  }

  logout() {
    this.authSvc.logout()
  }

}
