import { Comida } from './models/favorite';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {  FavoritesModalPage } from './favorites-modal/favorites-modal';
import { FavoritesService } from './favorites.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {storage} from 'firebase';
import firebase from 'firebase';


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

  constructor(public zone: NgZone, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, _favoritesService : FavoritesService) {
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

    //firebase.storage().ref().child('image').getDownloadURL().then((url) => {
      //this.zone.run(() => {
        //this.imgsource = url;
       //})
    //this.firestore.ref().child('restaurants/photos/Papas').getDownloadURL().then((url)=>{
      //this.zone.run(() =>{
       // this.imgsource = url;
      //});
    //});
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
