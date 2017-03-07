import { OpaqueToken } from '@angular/core';
import { Restangular } from 'ng2-restangular';


export const RESTANGULAR_FLICKR = new OpaqueToken('Restangular');
export function RestangularFlickrFactory(restangular: Restangular) {
  return restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl('https://api.flickr.com/services/rest/');
    RestangularConfigurer.setDefaultRequestParams({
      api_key: 'b08dbd5ccc5641063da511106bb3d48b'
    });
    RestangularConfigurer.setDefaultHeaders({});
  });
}