import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  private router = inject(Router);
  closeSignupForm() {
    this.router.navigate(['/ai-studio']);
  }
}
