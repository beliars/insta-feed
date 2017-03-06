import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';


import { MyApp } from './app.component';
import { SignInPage } from './pages/sign-in-page/sign-in-page';
import { SignUpPage } from './pages/sign-up-page/sign-up-page';
import { FeedPage } from './pages/feed-page/feed-page';
import { SharedModule } from './shared/shared.module';
import { FeedSectionModule } from './shared/feed-section/feed-section.module';


@NgModule({
  declarations: [
    MyApp,
    SignInPage,
    SignUpPage,
    FeedPage
  ],
  imports: [
    CoreModule,
    CommonModule,
    SharedModule,
    FeedSectionModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignInPage,
    SignUpPage,
    FeedPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
