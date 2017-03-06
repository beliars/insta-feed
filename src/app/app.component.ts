import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { FeedPage } from './pages/feed-page/feed-page';
import { AuthService } from './services/auth.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, authService: AuthService,
              public loadingCtrl: LoadingController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login page', component: LoginPage },
      { title: 'Register page', component: RegisterPage },
      { title: 'Feed page', component: FeedPage }
    ];

  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1200
    });
    loader.present();
    setTimeout(() => {
      this.nav.setRoot(page.component);
    }, 2000);
    
  }
  
  
  
}
