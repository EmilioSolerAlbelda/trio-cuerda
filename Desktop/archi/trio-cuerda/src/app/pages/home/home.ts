import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html', 
  styleUrls: ['./home.css']   
})
export class HomeComponent implements AfterViewInit, OnDestroy { 
  
  @ViewChild('miVideo') videoElement!: ElementRef<HTMLVideoElement>;
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.videoElement.nativeElement.play().catch(() => {});
        } else {
          this.videoElement.nativeElement.pause();
        }
      });
    }, { threshold: 0.5 });

    if (this.videoElement) {
      this.observer.observe(this.videoElement.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}