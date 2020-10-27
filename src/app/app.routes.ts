import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'food-search', component: FoodSearchComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'recipe/:id', component: RecipeComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
