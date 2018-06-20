import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()  
export class LoadingService {
   
  public isLoading: Subject<boolean> = new Subject();
  constructor() { }

}
