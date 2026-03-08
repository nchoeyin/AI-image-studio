import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const aiImageStudioRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '' }, // fallback to landing
];
