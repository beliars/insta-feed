import { Injectable } from '@angular/core';

import { Restangular } from 'ng2-restangular';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class ApiService {
  
  photos$: BehaviorSubject<any> = new BehaviorSubject([]);
  
  constructor(private restangular: Restangular) {}
  
  getPhotos() {
    return this.restangular.one('?method=flickr.photos.getRecent&format=json&nojsoncallback=1&per_page=10&extras=owner_name,icon_server,date_taken')
    .get()
    .map(res => {
      this.photos$.next(res.photos.photo);
      return res.photos.photo;
    })
  }
}

