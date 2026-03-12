import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  // Variable para saber si el menú está desplegado o no
  isMenuCollapsed = true;

  // Función para cerrar el menú
  closeMenu() {
    this.isMenuCollapsed = true;
  }

  // Función para alternar el menú (abrir/cerrar)
  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}