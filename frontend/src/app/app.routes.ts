import { Routes } from '@angular/router';
import { LandingPageComponent } from './apps/ai-image-studio/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '' }, // fallback to landing
];
