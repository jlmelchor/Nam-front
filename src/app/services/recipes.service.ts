import { Injectable } from '@angular/core';

@Injectable()
export class RecipesService {

  private recipes: Recipe[] = [
    {
      recipeId: 1,
      name: 'Receta 1',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      img: 'assets/img/plato.png',
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3', 'Ingrediente 4', 'Ingrediente 5', 'Ingrediente 6']
    },
    {
      recipeId: 2,
      name: 'Receta 2',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      img: 'assets/img/plato.png',
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3', 'Ingrediente 4', 'Ingrediente 5', 'Ingrediente 6']
    },
    {
      recipeId: 3,
      name: 'Receta 3',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      img: 'assets/img/plato.png',
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3', 'Ingrediente 4', 'Ingrediente 5', 'Ingrediente 6']
    },
    {
      recipeId: 4,
      name: 'Receta 4',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      img: 'assets/img/plato.png',
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3', 'Ingrediente 4', 'Ingrediente 5', 'Ingrediente 6']
    },
    {
      recipeId: 5,
      name: 'Receta 5',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      img: 'assets/img/plato.png',
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3', 'Ingrediente 4', 'Ingrediente 5', 'Ingrediente 6']
    },
    {
      recipeId: 6,
      name: 'Receta 6',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      img: 'assets/img/plato.png',
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3', 'Ingrediente 4', 'Ingrediente 5', 'Ingrediente 6']
    },
    {
      recipeId: 7,
      name: 'Receta 7',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      img: 'assets/img/plato.png',
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3', 'Ingrediente 4', 'Ingrediente 5', 'Ingrediente 6']
    },
    {
      recipeId: 8,
      name: 'Receta 8',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      img: 'assets/img/plato.png',
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3', 'Ingrediente 4', 'Ingrediente 5', 'Ingrediente 6']
    },
    {
      recipeId: 9,
      name: 'Receta 9',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      img: 'assets/img/plato.png',
      ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3', 'Ingrediente 4', 'Ingrediente 5', 'Ingrediente 6']
    }
  ];

    constructor() {
    }

    getRecipes(): Recipe[] {
        return this.recipes;
    }

    getRecipe(index: string) {
      return this.recipes[index];
    }

    getRecipeId(recipeId) {
      for (const recipe of this.recipes) {
        if (recipe.recipeId === recipeId) {
          return recipe;
        }
      }
    }
}

export interface Recipe {
    recipeId: number;
    name: string;
    description: string;
    img: string;
    ingredients: string[];
}
