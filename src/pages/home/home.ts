import { FavoritesService } from './../favorites/favorites.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { Comida } from '../favorites/models/favorite';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public favoritesService: FavoritesService;
  favoritesList$: Observable<Comida[]>;
  public caloarray: Array<any> = [];
  private totalCalorias:number;
  public preferencias:Storage;
  


  constructor(public navCtrl: NavController,_preferencias:Storage, _favoritesService : FavoritesService) {
    this.favoritesService = _favoritesService;

    this.favoritesList$ = this.favoritesService.GetAllFavoritesAF().snapshotChanges().map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val(),
        }))
      }
    )
    this.totalCalorias = 0;
  }
  CalcularCalorias(){
    var arrcal = [];
    this.favoritesList$.subscribe(val =>{
      arrcal = val;
      for(var i=0;i<arrcal.length;i++){
        this.totalCalorias+= parseInt(arrcal[i]["calorias"])
        console.log(this.totalCalorias);
      }
    });
    this.totalCalorias = 0;
  }

}


