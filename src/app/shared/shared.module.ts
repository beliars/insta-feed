import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { FeedSectionModule } from './feed-section/feed-section.module';


@NgModule({
  imports:      [ CommonModule, FeedSectionModule ],
  
  declarations: [ ],
  
  exports:      [ CommonModule,
                  FormsModule,
                ]
})

export class SharedModule { }