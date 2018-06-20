import { LoadingService } from './services/loading.service';
import { Alert } from './classes/alert';
import { AlertService } from './services/alert.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private subscription: Subscription[] = [];
  public alerts: Array<Alert> = [];
  public loading: Boolean = false;
  constructor(private alertService: AlertService, private loadingService : LoadingService){

  }

  ngOnInit(){
    this.subscription.push(
    this.alertService.alerts.subscribe(alert =>{
      this.alerts.push(alert);
    })
    )

    this.subscription.push(
      this.loadingService.isLoading.subscribe((isLoading) => {
        this.loading =isLoading;
      })
    )
  }

  ngOnDestroy(){
    this.subscription.forEach(sub => sub.unsubscribe());
  }
}
