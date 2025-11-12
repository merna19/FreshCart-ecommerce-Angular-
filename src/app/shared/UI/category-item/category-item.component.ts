import { Component, inject, Input } from '@angular/core';
import { ICategory } from '../../interfaces/ICategory';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent {

  @Input() category!:ICategory;

  ShowCategory()
  {
    console.log(this.category);
    //this._router.navigate(['/CategoryDetails']);
  }
}
