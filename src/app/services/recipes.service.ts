import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipesService {

  public filteredRecipes = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getRecipes(userId: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/recipes/' + userId, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).pipe(map(data => data));
  }

  addRecipe(formData: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/recipe', formData, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).pipe(map(data => data));
  }
}
