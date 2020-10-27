import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipe: any;

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) { }

  addFav(formData): Observable<any> {
    console.log('ha entrado');
    return this.httpClient.post('http://localhost:8080/addFav', formData, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).pipe(map(data => data));
  }

  quitFav(formData): Observable<any> {
    return this.httpClient.post('http://localhost:8080/quitFav', formData, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).pipe(map(data => data));
  }

  /*public addFav(formData) {
    this.httpClient.post('http://localhost:8080/addFav', formData, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  public quitFav(formData) {
    this.httpClient.post('http://localhost:8080/quitFav', formData, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }*/
}
