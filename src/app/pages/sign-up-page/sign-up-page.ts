import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FeedPage } from '../feed-page/feed-page';
import { SignInPage } from '../sign-in-page/sign-in-page';
import { LoadingController } from 'ionic-angular';

import * as _ from 'lodash';

@Component({
  selector: 'sign-up-page',
  templateUrl: 'sign-up-page.html'
})
export class SignUpPage {
  
  private signUpData = {
    email: '',
    username: '',
    password: ''
  };
  
  constructor(
    public navCtrl: NavController, private authService: AuthService,
    public loadingCtrl: LoadingController
  ) {
  }
  
  ngOnInit() {
  }
  
  onSubmit(form) {
    if (form.valid) {
      this.authService.signUpUser(this.signUpData)
      .withLatestFrom(this.authService.currentUser$)
      .subscribe(([res, currUser]: any) => {
        let currentUser = _.find(res, {'userId': currUser.id});
        if (currentUser.id) {          // <--- this is user Token
          let loader = this.loadingCtrl.create({
            content: "Logging in...",
            duration: 2000
          });
          loader.present();
          setTimeout(() => {
            this.navCtrl.setRoot(FeedPage);
          }, 2500);
        }
      });
    }
  }
  
  toSignIn() {
    this.navCtrl.setRoot(SignInPage);
  }
  
  
  ngOnDestroy() {
  }
}
