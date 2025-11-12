import { Component } from '@angular/core';
import { ICategory } from '../../../shared/interfaces/ICategory';
import { CategoriesService } from '../../../shared/service/category/categories.service';
import { CategoryItemComponent } from '../../../shared/UI/category-item/category-item.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CategoryItemComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  constructor(private _category: CategoriesService) {}
    categories!: ICategory[];   
    ngOnInit(): void {
      this._category.getAllCategories().subscribe(
        {
          next:(res)=>{ 
            this.categories = res.data;
            console.log(this.categories);
          },
          error:(err)=>{ console.log(err);},
          complete:()=>{ console.log('Categories fetch Completed');}
        }
      );
      }
}
