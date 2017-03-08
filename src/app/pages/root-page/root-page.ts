import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../feed-page/feed-page';
import { SignInPage } from '../sign-in-page/sign-in-page';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'root-page',
  templateUrl: 'root-page.html'
})
export class RootPage {

  constructor(public navCtrl: NavController, public sessionService: SessionService) {
  }
  
  ionViewCanEnter() {
    
  }
  
  ngOnInit() {
  
    let tokenId = false;
    this.sessionService.getAccessToken()
    .subscribe(token => {
      if(token) tokenId = token.id;
      if(tokenId) {
        this.navCtrl.setRoot(FeedPage);
      } else {
        this.navCtrl.setRoot(SignInPage);
      }
    });
    
    //this.navCtrl.setRoot(FeedPage);
  }
  
  ngOnDestroy() {
  }
}
