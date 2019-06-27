import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfoBD } from '../models/userinfo';

/**
 * Generated class for the RecomendacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recomendacion',
  templateUrl: 'recomendacion.html',
})
export class RecomendacionPage {
  userInfo = {} as UserInfoBD;

  genero: any;
  edad: any;
  altura: any;
  peso: any;
  objetivo: any;
  actividad: any;
  BMR: any;
  Calorias: any;
  proteinas: any;
  grasas: any;
  carbohidratos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  


  ionViewDidLoad() {
    this.Calorias = this.navParams.get("Calorias");
    this.proteinas = this.navParams.get("proteinas");
    this.grasas = this.navParams.get("grasas");
    this.carbohidratos = this.navParams.get("carbohidratos");
    
  }

}
