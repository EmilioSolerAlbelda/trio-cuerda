import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar';
import { HomeComponent } from './pages/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  title = 'Trio de Cuerda';
  mostrarCookies: boolean = true;

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