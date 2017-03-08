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
      let subscriber = this.authService.signUpUser(this.signUpData)
      .subscribe(() => {
        let loader = this.loadingCtrl.create({
          content: "Logging in...",
          duration: 2000
        });
        loader.present();
        setTimeout(() => {
          this.navCtrl.setRoot(FeedPage);
        }, 2500);
        subscriber.unsubscribe();
      });
    }
  }
  
  toSignIn() {
    this.navCtrl.setRoot(SignInPage);
  }
  
  
  ngOnDestroy() {
  }
}
