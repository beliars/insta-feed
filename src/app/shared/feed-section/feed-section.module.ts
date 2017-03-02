import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { FeedSectionComponent } from './feed-section.component';

import { FeedSectionHeaderModule } from './feed-section-header/feed-section-header.module';
import { FeedSectionContentModule } from './feed-section-content/feed-section-content.module';
import { FeedSectionFooterModule } from './feed-section-footer/feed-section-footer.module';

@NgModule({
  imports:      [ CommonModule,
                  FormsModule,
                  FeedSectionHeaderModule,
                  FeedSectionContentModule,
                  FeedSectionFooterModule
                ],
  
  declarations: [ FeedSectionComponent ],
  
  exports:      [ CommonModule,
                  FormsModule,
                  FeedSectionComponent,
                ]
})

export class FeedSectionModule { }