import { Camera } from '@ionic-native/camera';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, LoadingController } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites';
import { FavoritesModalPage } from '../pages/favorites/favorites-modal/favorites-modal';
import { Config } from '../app/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavoritesService } from './../pages/favorites/favorites.service';
import { HttpModule } from '@angular/http';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { RegisterInfoPage } from '../pages/register-info/register-info';
import { RecomendacionPage } from '../pages/recomendacion/recomendacion';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    FavoritesPage,
    FavoritesModalPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    BienvenidaPage,
    RegisterInfoPage,
    RecomendacionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FavoritesPage,
    FavoritesModalPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    BienvenidaPage,
    RegisterInfoPage,
    RecomendacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FavoritesService,
    Camera,
    LoadingController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
