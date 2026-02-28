import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PresentacionComponent } from './pages/presentacion/presentacion';
import { ContactoComponent } from './pages/contacto/contacto';
import { GaleriaComponent } from './pages/galeria/galeria';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];