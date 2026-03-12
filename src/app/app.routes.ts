import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PresentacionComponent } from './pages/presentacion/presentacion';
import { GaleriaComponent } from './pages/galeria/galeria';
import { ProyectosComponent } from './proyectos/proyectos';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: '**', redirectTo: '' },
];
