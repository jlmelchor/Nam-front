import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public logged = false;
  public userId: any;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.loginService.reload.subscribe(data => {
        this.logged = true;
      }),
      this.loginService.user.subscribe(data => {
        this.userId = data;
      })
    );
  }

  goRegistrationPage() {
    this.router.navigate( ['/registration'] );
  }

  goLoginPage() {
    this.router.navigate(['/login'] );
  }
}
