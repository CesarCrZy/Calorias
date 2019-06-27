import { Comida } from './models/favorite';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import {  FavoritesModalPage } from './favorites-modal/favorites-modal';
import { FavoritesService } from './favorites.service';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  imgsource: any;
  firestore = firebase.storage();
  private favoritesService: FavoritesService;
  favoritesList$: Observable<Comida[]>;

  constructor(private ofauth: AngularFireAuth, private toast: ToastController, public zone: NgZone, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, _favoritesService : FavoritesService) {
    this.favoritesService = _favoritesService;
    

    this.favoritesList$ = this.favoritesService
    .GetAllFavoritesAF()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    )
  
  }



  ionViewDidLoad() {
    this.ofauth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: 'Bienvenido ' + data.email,
          duration: 3000
        }).present();
    }else{
      this.toast.create({
        message: 'Autenticacion Fallida',
        duration: 3000
      }).present();
    }
    });
    console.log('ionViewDidLoad FavoritesPage');
    console.log(this.favoritesList$);
    
  }

  OnUpdate(restaurant: Comida){
    let modal = this.modalCtrl.create(FavoritesModalPage,{comida: restaurant});
    modal.present();
  }

  

  OnNew() {
    let newRestaurant: Comida = { nombre:'',calorias:0}
    let modal = this.modalCtrl.create(FavoritesModalPage, {comida: newRestaurant});
    console.log(modal);
    modal.present();
  }

}
