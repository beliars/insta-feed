import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/Rx';

import { RestangularModule, Restangular } from 'ng2-restangular';
import { FeedService } from '../services/feed.service';
import { AuthService } from '../services/auth.service';
import { RestangularFlickrFactory, RESTANGULAR_FLICKR } from './flickr.restangular.config';
import { SessionService } from '../services/session.service';

export function restangular (RestangularProvider, ToastController) {
  RestangularProvider.setBaseUrl('http://2muchcoffee.com:53000/api/');
  RestangularProvider.setDefaultRequestParams({
  });
  RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json',
                                         'Accept': 'application/json'});
  RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
    if (response.status) {
      var errorMsg = response.statusText;
      if(response.data.error.message) {
        errorMsg = response.data.error.message;
      }
      let toast = ToastController.create({
        message: errorMsg,
        duration: 5000,
        position: 'middle',
        cssClass: 'toast-error'
      });
      toast.present();
      return false; // error handled
    }
    return true; // error not handled
  });
}

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RestangularModule.forRoot([ToastController], restangular),
  ],
  providers: [FeedService, AuthService, SessionService, { provide: RESTANGULAR_FLICKR, useFactory:  RestangularFlickrFactory, deps: [Restangular] }],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}