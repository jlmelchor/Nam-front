import { Component, OnInit } from '@angular/core';
import { RecipesService, Recipe } from '../../services/recipes.service';
import { Router } from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(
    private recipesService: RecipesService,
    private recipeService: RecipeService,
    private router: Router
  ) { }


  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  showRecipe(recipeId: number) {
    this.recipeService.recipeId = recipeId;
    this.router.navigate( ['/recipe', recipeId] );

  }

}
