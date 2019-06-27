import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      const firebaseConfig = {
        apiKey: "AIzaSyDCGZAcaBmnr4e8j_vZ4qOduvVXkGWtvBU",
        authDomain: "calorias-a79bf.firebaseapp.com",
        databaseURL: "https://calorias-a79bf.firebaseio.com",
        projectId: "calorias-a79bf",
        storageBucket: "calorias-a79bf.appspot.com",
        messagingSenderId: "1084400340258"

      };

      firebase.initializeApp(firebaseConfig);
    });
  }
}
