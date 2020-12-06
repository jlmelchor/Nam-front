import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { RecipesService } from './services/recipes.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/app/components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { GenericModalComponent } from './components/shared/modals/generic-modal/generic-modal.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';
import { MatSelectModule } from '@angular/material/select';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RecipesBookComponent } from './components/recipes-book/recipes-book.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddRecipeModalComponent } from './components/recipes-book/add-recipe-modal/add-recipe-modal.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        RecipesComponent,
        FooterComponent,
        RegistrationComponent,
        LoginComponent,
        GenericModalComponent,
        RecipeComponent,
        FoodSearchComponent,
        RecipesBookComponent,
        AddRecipeModalComponent
    ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatListModule,
    MatCheckboxModule
  ],
  providers: [
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
