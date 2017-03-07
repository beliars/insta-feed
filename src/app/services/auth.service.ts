import { Injectable, Inject } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  
  constructor(@Inject(Restangular) public restangular) {
  }
  
  loggedUser = {
    id: '',
    token: '',
    created: ''
  };
  
  currentUser$ = new Subject();
  currentToken$;
  
  signUpUser(data) {
    this.currentToken$ = this.restangular.all('clients').post(data)
    .switchMap(user => {
      this.currentUser$.next(user);
      return user.one('accessTokens').get()
    });
    return this.currentToken$;
  }
  
  signInUser(data) {
    return this.restangular.all('clients/login').post(data)
    .switchMap(res => {
      
    })
    .subscribe();
  }
}
