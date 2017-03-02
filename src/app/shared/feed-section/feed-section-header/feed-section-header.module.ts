import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { FeedSectionHeaderComponent } from './feed-section-header.component';


@NgModule({
  imports:      [ CommonModule ],
  
  declarations: [ FeedSectionHeaderComponent ],
  
  exports:      [ CommonModule,
                  FormsModule,
                  FeedSectionHeaderComponent
                ]
})

export class FeedSectionHeaderModule { }