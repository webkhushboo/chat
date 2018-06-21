import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from './../../services/alert.service';
import { AlertType } from './../../enums/alert-type.enum';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert } from '../../classes/alert';
import { LoadingService } from '../../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  public signupForm: FormGroup;
  private subscriptionList: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }
  private createForm(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit(): void {
    if (this.signupForm.valid) {

      const { firstName, lastName, email, password } = this.signupForm.value;

      //Todo call the auth service

      this.subscriptionList.push(
        this.authService.singup(firstName, lastName, email, password).subscribe(
          success => {
            if (success) {
              this.router.navigate(['/chat'])
            }
            this.loadingService.isLoading.next(false);
          }
        )
      );
    }
    else {
      const failedAlertText = new Alert("Please enter a  valid name, password and email, try again.", AlertType.Danger);
      this.alertService.alerts.next(failedAlertText);
    }
  }
  ngOnDestroy() {
    this.subscriptionList.forEach(sub => sub.unsubscribe())
  }
}
