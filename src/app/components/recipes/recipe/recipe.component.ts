import { Component, OnInit } from '@angular/core';
import { RecipeService  } from '../../../services/recipe.service';
import { Recipe, RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    this.recipe = this.recipesService.getRecipeId(this.recipeService.recipeId);
  }

}
