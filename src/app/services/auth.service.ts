import { Injectable, Inject } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import { ReplaySubject } from 'rxjs/Rx';

import * as _ from 'lodash';
import { TokenModel } from '../shared/models/token.model';
import { UserModel } from '../shared/models/user.model';
import { SessionService } from './session.service';

@Injectable()
export class AuthService {
  
  constructor(@Inject(Restangular) public restangular, private sessionService: SessionService) {
    this.currentToken$.subscribe((token) => {
      this.sessionService.setAccessToken(token);
    });
  }

  currentUser$ = new ReplaySubject();
  currentToken$ = new ReplaySubject();
  
  ngOnInit() {
    
  }
  
  signUpUser(data) {
    return this.restangular.all('clients').post(data)
    .switchMap(user => {
      this.currentUser$.next(new UserModel(user));
      return user.all('accessTokens').getList()
    })
    .map(tokens => {
      return _.maxBy(tokens, 'created');
    })
    .filter(token => token)
    .map(token => {
      this.currentToken$.next(new TokenModel(token));
      return token;
    });
  }
  
  signInUser(data) {
    return this.restangular.all('clients').customPOST(data, 'login')
    .filter(token => token)
    .map(token => {
      this.currentToken$.next(new TokenModel(token));
      return token;
    });
  }
  
  //checkToken(tokenId) {
  //  return this.restangular.all('tokens', tokenId).one('exists').get();
  //}
}
