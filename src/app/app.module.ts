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
import { HeroeComponent } from './components/heroe/heroe.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { GenericModalComponent } from './components/shared/modals/generic-modal/generic-modal.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';
import {MatSelectModule} from '@angular/material/select';
import {FoodSearchComponent} from './components/food-search/food-search.component';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RecipesComponent,
    HeroeComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    GenericModalComponent,
    RecipeComponent,
    FoodSearchComponent
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
    MatTooltipModule
  ],
  providers: [
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
