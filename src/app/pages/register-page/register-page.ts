import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FeedPage } from '../feed-page/feed-page';
import { LoginPage } from '../login-page/login-page';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'register-page',
  templateUrl: 'register-page.html'
})
export class RegisterPage {
  
  private registerData = {
    username: '',
    password: ''
  };
  
  constructor(public navCtrl: NavController, private authService: AuthService,
              public loadingCtrl: LoadingController) {
  }
  
  ngOnInit() {
  }
  
  onSubmit(form) {
    if (form.valid) {
      console.log(this.registerData);
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
  
  toLogin() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1200
    });
    loader.present();
    setTimeout(() => {
      this.navCtrl.setRoot(LoginPage);
    }, 1200);
  }
  
  
  ngOnDestroy() {
  }
}
