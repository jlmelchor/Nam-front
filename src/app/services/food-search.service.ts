import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodSearchService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getIngredients(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/ingredients', {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).pipe(map(data => data));
  }

  getFamilies(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/families', {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).pipe(map(data => data));
  }

  findRecipes(foodList: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/recipesFiltered', foodList, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).pipe(map(data => data));
  }
}
