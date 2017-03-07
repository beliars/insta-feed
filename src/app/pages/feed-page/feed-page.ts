import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'feed-page',
  templateUrl: 'feed-page.html'
})
export class FeedPage {

  constructor(public navCtrl: NavController, private feedService: FeedService) {
  }
  
  private photos$;
  private subscribers;
  private photosInfoList;
  
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
