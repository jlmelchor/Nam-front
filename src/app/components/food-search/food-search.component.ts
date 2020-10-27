import { Component } from '@angular/core';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent {

  public selectedFamily = '--Selecciona categoría--';
  public Families: Array<any> = [
    { familyId: 1, name: 'Fruta', ingredients: [ {ingredientId: 1, name: 'Naranja'},
        {ingredientId: 2, name: 'Fresa'}, {ingredientId: 3, name: 'Manzana'}, {ingredientId: 4, name: 'Plátano'} ] },
    { familyId: 2, name: 'Verdura', ingredients: [ {ingredientId: 5, name: 'Espinacas'},
        {ingredientId: 6, name: 'Brócoli'}, {ingredientId: 7, name: 'Coliflor'}, {ingredientId: 8, name: 'Judías verdes'} ] },
    { familyId: 3, name: 'Hortalizas', ingredients: [ {ingredientId: 9, name: 'Tomate'},
        {ingredientId: 10, name: 'Pimiento'}, {ingredientId: 11, name: 'Lechuga'}, {ingredientId: 12, name: 'Pepino'} ] },
    { familyId: 4, name: 'Pasta / arroz / legumbres', ingredient: [ {ingredientId: 13, name: 'Lentejas'},
        {ingredientId: 14, name: 'Macarrones'}, {ingredientId: 15, name: 'Arroz'}, {ingredientId: 16, name: 'Garbanzos'} ] },
    { familyId: 5, name: 'Carne', ingredients: [ {ingredientId: 17, name: 'Pechuga de pollo'},
        {ingredientId: 18, name: 'Ternera'}, {ingredientId: 19, name: 'Salchichas'}, {ingredientId: 20, name: 'Pavo'} ] },
    { familyId: 6, name: 'Pescado', ingredients: [ {ingredientId: 21, name: 'Salmón'},
        {ingredientId: 22, name: 'Atún'}, {ingredientId: 23, name: 'Sardina'}, {ingredientId: 24, name: 'Cazón'} ] },
    { familyId: 7, name: 'Conservas', ingredients: [ {ingredientId: 25, name: 'Atún'},
        {ingredientId: 26, name: 'Sardinas'}, {ingredientId: 27, name: 'Pimientos asados'}, {ingredientId: 28, name: 'Tomate frito'} ] },
    { familyId: 8, name: 'Lácteos', ingredients: [ {ingredientId: 29, name: 'Yogur'},
        {ingredientId: 30, name: 'Queso curado'}, {ingredientId: 31, name: 'Leche'}, {ingredientId: 32, name: 'Queso fresco'} ] },
    { familyId: 9, name: 'Base', ingredients: [ {ingredientId: 33, name: 'Harina'},
        {ingredientId: 34, name: 'Aceite'}, {ingredientId: 35, name: 'Huevos'}, {ingredientId: 36, name: 'Mantequilla'} ] }
  ];

  public ingredients: Array<any>;
  public foodList = [];
  selectable = true;
  removable = true;

  constructor( ){}

  selectFamily(family) {
    this.ingredients = this.Families.find(fam => fam.name === family).ingredients;
  }

  selectIng(ing) {
    this.foodList.push(ing);
  }

  remove(ing): void {
    const index = this.foodList.indexOf(ing);

    if (index >= 0) {
      this.foodList.splice(index, 1);
    }
  }

  submit() {
    if (this.foodList.length !== 0) {
      console.log(this.foodList);
      // TODO: Crear servicio, enviar al back la lista de ingredientes y traer las recetas que correspondan
      // TODO: Después, redirigir a la pantalla con las recetas que coincidan con la búsqueda
    }
  }
}
