import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public recipes = [];
  public formData: any = new FormData();
  public form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private recipesService: RecipesService,
    private recipeService: RecipeService,
    private router: Router
  ) { }


  ngOnInit() {
    if (this.recipesService.filteredRecipes.length === 0) {
      this.recipesService.getRecipes(+sessionStorage.getItem('userId')).subscribe(
        recipes => {
          if (recipes !== null) {
            this.recipes = recipes;
          }
        }
      );
    } else {
      this.recipes = this.recipesService.filteredRecipes;
    }
  }

  showRecipe(recipe: any) {
    this.recipeService.recipe = recipe;
    this.router.navigate( ['/recipe', recipe.recipeId] );
  }

  addFav(recipeId: number) {
    this.formData.append('userId', sessionStorage.getItem('userId'));
    this.formData.append('recipeId', recipeId);
    this.recipeService.addFav(this.formData).subscribe(
      recipe => {
        if (recipe !== null) {
          this.recipesService.getRecipes(+sessionStorage.getItem('userId')).subscribe(
            recipes => {
              this.recipes = recipes;
              this.formData = new FormData();
            }
          );
        }
      }
    );
  }

  quitFav(recipeId: number) {
    this.formData.append('userId', sessionStorage.getItem('userId'));
    this.formData.append('recipeId', recipeId);
    this.recipeService.quitFav(this.formData).subscribe(
      recipe => {
        if (recipe !== null) {
          this.recipesService.getRecipes(+sessionStorage.getItem('userId')).subscribe(
            recipes => {
              this.recipes = recipes;
              this.formData = new FormData();
            }
          );
        }
      }
    );
  }
}
