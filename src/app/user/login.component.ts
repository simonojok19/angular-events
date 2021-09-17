import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
    `,
  ],
})
export class LoginComponent {
  userName: string;
  password: string;
  mouseoverLogin = false;

  constructor(private authServer: AuthService, private router: Router) {}

  login(formValues): void {
    this.authServer.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']).then();
  }

  cancel(): void {
    this.router.navigate(['events']).then();
  }
}
