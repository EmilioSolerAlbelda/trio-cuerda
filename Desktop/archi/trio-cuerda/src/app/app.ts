import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  title = 'Trio de Cuerda';
  mostrarCookies: boolean = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
    const aceptadas = localStorage.getItem('cookies_aceptadas');
    if (aceptadas === 'true') {
      this.mostrarCookies = false;
    }
  }

  aceptarCookies() {
    localStorage.setItem('cookies_aceptadas', 'true');
    this.mostrarCookies = false;
  }
}