import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable()
export class SessionService {
  
  constructor(private storage: Storage) {
  }
  
  setAccessToken(token) {
    //this.storage.ready().then(() => {
    //});
    Observable.fromPromise(this.storage.ready())
    .subscribe(() => this.storage.set('userAccessToken', token));
    
  }
  
  getAccessToken() {
    return Observable.fromPromise(this.storage.ready())
    .switchMap(() => {
      return Observable.fromPromise(this.storage.get('userAccessToken'))
    });
  }
  
  removeAccessToken() {
    this.storage.remove('userAccessToken');
  }
  
}