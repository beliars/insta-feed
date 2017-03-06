import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FeedPage } from '../feed-page/feed-page';
import { SignInPage } from '../sign-in-page/sign-in-page';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'sign-up-page',
  templateUrl: 'sign-up-page.html'
})
export class SignUpPage {
  
  private signUpData = {
    username: '',
    password: '',
    email: ''
  };
  
  constructor(public navCtrl: NavController, private authService: AuthService,
              public loadingCtrl: LoadingController) {
  }
  
  ngOnInit() {
  }
  
  onSubmit(form) {
    if (form.valid) {
      console.log(this.signUpData);
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 2500
      });
      loader.present();
      setTimeout(() => {
        this.navCtrl.setRoot(FeedPage);
      }, 2500);
    }
  }
  
  toSignIn() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
    setTimeout(() => {
      this.navCtrl.setRoot(SignInPage);
    }, 1200);
  }
  
  
  ngOnDestroy() {
  }
}
