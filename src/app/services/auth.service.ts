import { AlertService } from './alert.service';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertType } from './../enums/alert-type.enum';
import { Alert } from './../classes/alert';
import { User } from './../classes/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  public currentUser: Observable<User | null>
  constructor(
    private router: Router,
    private alertService: AlertService
  ) {
    // TODO fetch the user from the firebase backend , then set the user
    this.currentUser = Observable.of(null);
  }

  public singup(firstName: string, lastName: string, email: string, password: string): Observable<boolean> {
    //TODO call Firebase signup function
    return Observable.of(true);
  }

  public login(email: string, password: string): Observable<boolean> {
    //TODO call Firebase login function
    return Observable.of(true);
  }

  public logout(): void {
    //TODO call Firebase function logout
    this.router.navigate(['/login']);
    this.alertService.alerts.next(new Alert('You have been logged out.'));
  }
}
