import { Injectable, Inject } from '@angular/core';

import { Restangular } from 'ng2-restangular';
import { BehaviorSubject } from 'rxjs';
import { RESTANGULAR_FLICKR } from '../core/flickr.restangular.config';

@Injectable()
export class FeedService {
  
  photos$: BehaviorSubject<any> = new BehaviorSubject([]);
  
  constructor(
    @Inject(Restangular) public restangular,
    @Inject(RESTANGULAR_FLICKR) public restangularFlickr
  ) {
  }
  
  getPhotos() {
    return this.restangularFlickr.one('?method=flickr.photos.getRecent&format=json&nojsoncallback=1&per_page=10&extras=owner_name,icon_server,date_taken')
    .get()
    .map(res => {
      this.photos$.next(res.photos.photo);
      return res.photos.photo;
    })
  }
}

