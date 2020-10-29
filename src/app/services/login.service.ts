import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userId = new EventEmitter<any>();
  public reloadNavBar = new EventEmitter<any>();

  constructor(
    private httpClient: HttpClient
  ) { }

  get reload(): EventEmitter<any> {
    return this.reloadNavBar;
  }

  get user(): EventEmitter<any> {
    return this.userId;
  }

  logIn(formData): Observable<any> {
    return this.httpClient.post('http://localhost:8080/login', formData, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    }).pipe(map(data => data));
  }
}
