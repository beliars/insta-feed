import { NgModule }            from '@angular/core';
import { FeedSectionComponent } from './feed-section.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports:      [ SharedModule ],
  
  declarations: [ FeedSectionComponent ],
  
  exports:      [ FeedSectionComponent ]
})

export class FeedSectionModule { }