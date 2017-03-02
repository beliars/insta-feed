import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { FeedSectionFooterComponent } from './feed-section-footer.component';


@NgModule({
  imports:      [ CommonModule ],
  
  declarations: [ FeedSectionFooterComponent ],
  
  exports:      [ CommonModule,
                  FormsModule,
                  FeedSectionFooterComponent
                ]
})

export class FeedSectionFooterModule { }