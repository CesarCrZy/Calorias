import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterInfoPage } from '../register-info/register-info';

/**
 * Generated class for the BienvenidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html',
})
export class BienvenidaPage {

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  empezar(){
    let alert = this.alertCtrl.create({
      title: 'Bienvenido',
      message: 'Eres miembro nuevo?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.navCtrl.setRoot(TabsPage);
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.navCtrl.setRoot(RegisterInfoPage);
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidaPage');
  }

}
