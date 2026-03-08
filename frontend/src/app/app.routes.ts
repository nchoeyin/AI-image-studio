import { Routes } from '@angular/router';
import { LandingPageComponent } from './apps/ai-image-studio/landing-page/landing-page.component';
import { SignupComponent } from './apps/ai-image-studio/components/signup/signup.component';
import { LoginComponent } from './apps/ai-image-studio/components/login/login.component';

export const routes: Routes = [
  {
    path: 'ai-studio',
    loadChildren: () =>
      import('./apps/ai-image-studio/ai-image-studio.routes').then(
        (m) => m.aiImageStudioRoutes,
      ),
  },
  { path: '', redirectTo: '/ai-studio', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: '**', redirectTo: '/ai-studio' },
];
