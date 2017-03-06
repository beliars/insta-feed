import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { RestangularModule } from 'ng2-restangular';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

export function restangular (RestangularProvider) {
  RestangularProvider.setBaseUrl('https://api.flickr.com/services/rest/');
  RestangularProvider.setDefaultRequestParams({
    api_key: 'b08dbd5ccc5641063da511106bb3d48b'
  });
  RestangularProvider.setRestangularFields({
    id: "_id"
  });
}

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RestangularModule.forRoot(restangular),
  ],
  providers: [ApiService, AuthService],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}