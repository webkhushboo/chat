import { AuthService } from './../services/auth.service';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService } from './../services/alert.service';
import { Alert } from './../classes/alert';
import { AlertType } from './../enums/alert-type.enum';
import {map, take, tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertService: AlertService
  ){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   

      return this.auth.currentUser.pipe(
        take(1),
        map((currentUser) => !!currentUser),
        tap((loggedIn) => {
          if(!loggedIn){
            this.alertService.alerts.next(new Alert('You must logged in to access that page.', AlertType.Danger));
            this.router.navigate(['/login'], {queryParams: {
              returnUrl: state.url
            }})
          }
        })
      )
  }
}
