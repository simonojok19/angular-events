import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const currentUser = this.authService.currentUser;
    const firstName = new FormControl(currentUser.firstName);
    const lastName = new FormControl(currentUser.lastName);

    this.profileForm = new FormGroup({
      firstName,
      lastName,
    });
  }

  cancel(): void {
    this.router.navigate(['/events']).then();
  }

  saveProfile(formValues: any): void {
    this.authService.updateCurrentUser(formValues);
    this.router.navigate(['/events']).then();
  }
}
