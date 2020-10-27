import { Component, OnInit } from '@angular/core';
import { RecipeService  } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public recipe: any;
  public glutenFree = true;
  public vegetarian = true;
  public vegan = true;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.recipe = this.recipeService.recipe;
    for (const ing of this.recipe.ingredients) {
      if (ing.glutenFree === 'N') {
        this.glutenFree = false;
      }
      if (ing.vegetarian === 'N') {
        this.vegetarian = false;
      }
      if (ing.vegan === 'N') {
        this.vegan = false;
      }
    }
  }

}
