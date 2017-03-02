import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';


import { MyApp } from './app.component';
import { FeedPage } from './pages/feed-page/feed-page';
import { SharedModule } from './shared/shared.module';
import { FeedSectionModule } from './shared/feed-section/feed-section.module';


@NgModule({
  declarations: [
    MyApp,
    FeedPage
  ],
  imports: [
    CoreModule,
    CommonModule,
    FeedSectionModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
