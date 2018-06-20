import { AlertService } from './../../services/alert.service';
import { AlertType } from './../../enums/alert-type.enum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert } from '../../classes/alert';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signupForm: FormGroup;
  constructor(private fb: FormBuilder, private alertService: AlertService) {
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
    if(this.signupForm.valid){
    //Todo call the auth service
    const { email, password } = this.signupForm.value;
    console.log(`Email: ${email}, Password: ${password}`);
    }
    else{
      const failedAlertText = new Alert("Please enter a  valid name, password and email, try again.",AlertType.Danger);
      this.alertService.alerts.next(failedAlertText);
    }
  }

}
