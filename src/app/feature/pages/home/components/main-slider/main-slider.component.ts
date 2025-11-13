import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.scss'
})
export class MainSliderComponent {
  customOptions: OwlOptions = {
    loop: false,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
    600: { items: 1 },
    1000: { items: 1 }
    }
  }
}

