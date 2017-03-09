import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FeedPage } from '../feed-page/feed-page';
import { SignUpPage } from '../sign-up-page/sign-up-page';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'sign-in-page',
  templateUrl: 'sign-in-page.html'
})
export class SignInPage {
  
  private signInData = {
    email: '',
    password: ''
  };
  
  constructor(public navCtrl: NavController, private authService: AuthService,
              public loadingCtrl: LoadingController) {
  }
  
  ngOnInit() {
  }
  
  onSubmit(form) {
    if (form.valid) {
      let subscriber = this.authService.signInUser(this.signInData)
      .subscribe(() => {
        let loader = this.loadingCtrl.create({
          content: "Logging in...",
          duration: 2500
        });
        loader.present();
        setTimeout(() => {
          this.navCtrl.setRoot(FeedPage);
        }, 2500);
        subscriber.unsubscribe();
      });
    }
  }
  
  toSignUp() {
    this.navCtrl.setRoot(SignUpPage);
  }
  
  
  ngOnDestroy() {
  }
}
