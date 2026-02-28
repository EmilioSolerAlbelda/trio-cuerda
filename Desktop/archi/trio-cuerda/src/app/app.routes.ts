import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PresentacionComponent } from './pages/presentacion/presentacion';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: '**', redirectTo: '' }
];