import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodSearchService } from '../../../services/food-search.service';
import { RecipesService } from '../../../services/recipes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-recipe-modal',
  templateUrl: './add-recipe-modal.component.html',
  styleUrls: ['./add-recipe-modal.component.css']
})
export class AddRecipeModalComponent implements OnInit {

  firstFormGroup = new FormGroup({
    name: new FormControl('')
  });
  secondFormGroup = new FormGroup({
    ingredients: new FormControl('')
  });
  thirdFormGroup = new FormGroup({
    description: new FormControl('')
  });
  fourthFormGroup = new FormGroup({
    category: new FormControl('')
  });
  fiveFormGroup = new FormGroup({
    file: new FormControl('')
  });
  formData: any = new FormData();

  public ingredients = [];
  public ingredientsFiltered = [];
  public families = [];
  public foodList = [];
  public categories = [];
  public files = [];

  constructor(
    private foodSearchService: FoodSearchService,
    private formBuilder: FormBuilder,
    private recipesService: RecipesService
  ) {
  }

  ngOnInit(): void {
    this.foodSearchService.getIngredients().subscribe(
      ingredients => {
        if (ingredients !== null) {
          this.ingredients = ingredients;
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
    this.foodSearchService.getCategories().subscribe(
      categories => {
        if (categories !== null) {
          this.categories = categories;
        }
      }
    );
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      ingredients: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      description: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      category: ['', Validators.required]
    });
    this.fiveFormGroup = this.formBuilder.group({
      file: ['', Validators.required]
    });
  }

  pushIngredients(ingredientName) {
    if (!this.secondFormGroup.value.ingredients.includes(ingredientName.toString())) {
      this.secondFormGroup.value.ingredients.push(ingredientName);
    }
  }

  addFile(file) {
    this.files.push(file);
  }

  submit() {
    this.formData.append('name', this.firstFormGroup.value.name);
    this.formData.append('ingredients', this.secondFormGroup.value.ingredients);
    this.formData.append('description', this.thirdFormGroup.value.description);
    this.formData.append('category', +this.fourthFormGroup.value.category);
    this.formData.append('userId', +sessionStorage.getItem('userId'));
    this.formData.append('file', this.files);

    this.recipesService.addRecipe(this.formData).subscribe(
      recipe => {
        if (recipe != null) {
          const Toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', swal.stopTimer);
              toast.addEventListener('mouseleave', swal.resumeTimer);
            }
          });

          Toast.fire({
            icon: 'success',
            title: 'Receta añadida'
          });
        } else {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido añadir la receta'
          });
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

  remove(ing): void {
    const index = this.foodList.indexOf(ing);

    if (index >= 0) {
      this.foodList.splice(index, 1);
    }
  }
}
