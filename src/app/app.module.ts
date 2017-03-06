import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';


import { MyApp } from './app.component';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { FeedPage } from './pages/feed-page/feed-page';
import { SharedModule } from './shared/shared.module';
import { FeedSectionModule } from './shared/feed-section/feed-section.module';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
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
    LoginPage,
    RegisterPage,
    FeedPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
