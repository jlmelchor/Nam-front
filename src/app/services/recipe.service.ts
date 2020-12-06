import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipe: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  addFav(formData): Observable<any> {
    return this.httpClient.post('http://localhost:8080/addFav', formData, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).pipe(map(data => data));
  }

  quitFav(formData): Observable<any> {
    return this.httpClient.post('http://localhost:8080/quitFav', formData, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).pipe(map(data => data));
  }
}
