import { Config } from "../../../app/firebase.config";
import {storage, initializeApp} from 'firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Comida } from '../models/favorite';
import { FavoritesService } from '../favorites.service';
import {Camera, CameraOptions} from '@ionic-native/camera'
import { HttpClientModule } from '@angular/common/http';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-favorites-modal',
  templateUrl: 'favorites-modal.html',
})
export class FavoritesModalPage {
  imgsource: any;
  loading;
  private viewCtrl: ViewController;
  private favoritesService : FavoritesService;
  public comida: Comida = {
    key: '',
    nombre: '',
    calorias: 0
  };
  

  

  constructor( public camera: Camera,public navCtrl: NavController, public navParams: NavParams, _viewCtrl: ViewController, private _favoritesService: FavoritesService, public loadingCtrl: LoadingController) {
    this.viewCtrl = _viewCtrl;
    this.favoritesService = _favoritesService;
    this.comida = navParams.get('comida');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesModalPage');
  }
  

  OnSave(comida: Comida) {
    console.log(comida);
    if(typeof(comida.key)==='undefined'){
      
      this.favoritesService.AddFavoriteAF(comida).then(ref => {
        this.viewCtrl.dismiss();
      });
    }
    else{
      this.favoritesService.UpdateFavoriteAF(comida.key, comida).then(ref=>{
        this.viewCtrl.dismiss();
      });
    }
  }

  OnSave1(){
    this.viewCtrl.dismiss();
  }
  OnClose() {
    this.viewCtrl.dismiss();
  }

}