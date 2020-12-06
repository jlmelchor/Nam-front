import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecipesService } from '../../services/recipes.service';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddRecipeModalComponent } from './add-recipe-modal/add-recipe-modal.component';

@Component({
  selector: 'app-recipes-book',
  templateUrl: './recipes-book.component.html',
  styleUrls: ['./recipes-book.component.css']
})
export class RecipesBookComponent implements OnInit {

  public recipes = [];
  public recipesFav = [];
  public formData: any = new FormData();
  public form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private recipesService: RecipesService,
    private recipeService: RecipeService,
    private router: Router,
    private readonly matDialog: MatDialog
  ) { }


  ngOnInit() {
    this.recipesService.getRecipes(+sessionStorage.getItem('userId')).subscribe(
      recipes => {
        if (recipes !== null) {
          this.getRecipesFav(recipes);
        }
      }
    );
  }

  getRecipesFav(recipes) {
    for (const recipe of recipes) {
      if (recipe.isFav === 'Y') {
        this.recipesFav.push(recipe);
      }
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
              this.recipesFav = recipes;
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
              this.recipesFav = recipes;
              this.formData = new FormData();
            }
          );
        }
      }
    );
  }

  openAddRecipeModal(): void {
    const modalFeatures = {
      width: '840px',
      height: 'auto',
      disableClose: true,
      panelClass: 'my-dialog'
    };
    const dialogRef = this.matDialog.open(AddRecipeModalComponent, modalFeatures);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }
}
