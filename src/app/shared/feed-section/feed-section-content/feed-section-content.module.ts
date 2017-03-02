import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { FeedSectionContentComponent } from './feed-section-content.component';


@NgModule({
  imports:      [ CommonModule ],
  
  declarations: [ FeedSectionContentComponent ],
  
  exports:      [ CommonModule,
                  FormsModule,
                  FeedSectionContentComponent
                ]
})

export class FeedSectionContentModule { }