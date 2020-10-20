import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public addUser(formData) {
    this.httpClient.post('http://localhost:8080/user', formData, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
