import { Component, OnInit } from '@angular/core';
import { FoodSearchService } from '../../services/food-search.service';
import { Router } from '@angular/router';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent implements OnInit {

  public selectedFamily = '--Selecciona categoría--';
  public ingredients = [];
  public ingredientsFiltered = [];
  public families = [];
  public foodList = [];
  formData: any = new FormData();
  selectable = true;
  removable = true;

  constructor(
    private foodSearchService: FoodSearchService,
    private router: Router,
    private recipesService: RecipesService
  ){ }

  ngOnInit(): void {
    this.foodSearchService.getIngredients().subscribe(
      ingredients => {
        if (ingredients !== null) {
          this.ingredients = ingredients;
        }
        for (const ing of this.ingredients) {
          // this.families.push(ing.)
        }
      }
    );
    this.foodSearchService.getFamilies().subscribe(
      families => {
        if (families !== null) {
          this.families = families;
        }
      }
    );
  }

  selectFamily(family) {
    this.ingredientsFiltered = [];
    for (const ing of this.ingredients) {
      if (ing.family.name === family) {
        this.ingredientsFiltered.push(ing);
      }
    }
  }

  selectIng(ing) {
    this.foodList.push(ing);
  }

  remove(ing): void {
    const index = this.foodList.indexOf(ing);

    if (index >= 0) {
      this.foodList.splice(index, 1);
    }
  }

  submit() {
    if (this.foodList.length !== 0) {
      this.formData.append('foodList', this.foodList);
      this.foodSearchService.findRecipes(this.formData).subscribe(
        recipes => {
          if (recipes !== null) {
            this.recipesService.filteredRecipes = recipes;
            this.router.navigate( ['/recipes'] );
          }
        }
      );
    }
  }
}
