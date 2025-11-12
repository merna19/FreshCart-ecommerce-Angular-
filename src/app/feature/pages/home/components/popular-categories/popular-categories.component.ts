import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../../shared/service/category/categories.service';
import { ICategory } from '../../../../../shared/interfaces/ICategory';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-popular-categories',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './popular-categories.component.html',
  styleUrl: './popular-categories.component.scss'
})
export class PopularCategoriesComponent implements OnInit {
  constructor(private _categoriesService: CategoriesService) { }
  categories!:ICategory[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 900,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: false
  }

  ngOnInit(): void {
    this._categoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res.data;
        console.log(this.categories);
      },
      error: (err) => {console.log(err);},
      complete: () => {console.log('Categories fetching Completed');}
    });
  }

}
