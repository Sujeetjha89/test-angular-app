import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  { path: 'index', component:HomeComponent },
  { path: 'about', component:WelcomeComponent },
  { path: 'services', component:ServicesComponent },
  { path: 'contact', component:ContactComponent }
];


