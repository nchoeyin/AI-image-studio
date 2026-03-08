import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';

export const aiImageStudioRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }, // fallback to landing
];
