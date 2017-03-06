import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'feed-page',
  templateUrl: 'feed-page.html'
})
export class FeedPage {

  constructor(public navCtrl: NavController, private apiService: ApiService) {
  }
  
  private photos$;
  private subscribers;
  private photosInfoList;
  
  ngOnInit() {
    this.apiService.getPhotos().subscribe();
    this.photos$ = this.apiService.photos$;
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
