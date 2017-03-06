import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FeedPage } from '../feed-page/feed-page';
import { RegisterPage } from '../register-page/register-page';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {
  
  private loginData = {
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
      console.log(this.loginData);
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
  
  register() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1200
    });
    loader.present();
    setTimeout(() => {
      this.navCtrl.setRoot(RegisterPage);
    }, 1200);
  }
  
  
  ngOnDestroy() {
  }
}
