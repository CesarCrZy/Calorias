import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { RegisterPage } from '../register/register';
import { BienvenidaPage } from '../bienvenida/bienvenida';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor( private ofauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User) {
    try{
      const result = this.ofauth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result){
        this.navCtrl.setRoot(BienvenidaPage);
      }
    }
    catch(e){
      console.error(e);
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
