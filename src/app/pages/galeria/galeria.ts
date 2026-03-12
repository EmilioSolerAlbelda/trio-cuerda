import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class GaleriaComponent {
  fotos = Array.from({ length: 18 }, (_, i) => {
    const numero = (i + 1).toString().padStart(2, '0');
    return {
      url: `galeria/galeria${numero}.webp`,
      alt: `Interpretación del trío de cuerda ${numero}`
    };
  });
}