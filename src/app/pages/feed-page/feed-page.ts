import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FeedService } from '../../services/feed.service';
import { SessionService } from '../../services/session.service';
import { SignInPage } from '../sign-in-page/sign-in-page';

@Component({
  selector: 'feed-page',
  templateUrl: 'feed-page.html'
})
export class FeedPage {

  constructor(public navCtrl: NavController, private feedService: FeedService, private sessionService: SessionService) {
  }
  
  private photos$;
  private subscribers;
  private photosInfoList;
  
  //ionViewCanEnter() {
  //  let tokenId = false;
  //  this.sessionService.getAccessToken()
  //  .subscribe(token => {
  //    debugger;
  //    if(token) tokenId = token.id;
  //    if(tokenId) {
  //
  //      return true;
  //    } else {
  //      this.navCtrl.setRoot(SignInPage);
  //      return false;
  //    }
  //  });
  //}
  
  ngOnInit() {
    this.feedService.getPhotos().subscribe();
    this.photos$ = this.feedService.photos$;
    this.subscribers = this.photos$.subscribe(res => {
      this.photosInfoList = res;
    });
  }
  
  ngOnDestroy() {
    this.subscribers.unsubscribe();
  }
  
  ionViewWillEnter() {
    
  }

}
