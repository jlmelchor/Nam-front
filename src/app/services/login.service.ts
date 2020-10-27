import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  logIn(formData): Observable<any> {
    return this.httpClient.post('http://localhost:8080/login', formData, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).pipe(map(data => data));
  }
}
