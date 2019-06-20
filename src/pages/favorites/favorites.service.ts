import { Comida } from './models/favorite';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { FAVORITES } from './data/data-favorites';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FavoritesService {

	private comidaslist = this.db.list<Comida>('Comidas');

	constructor(http: Http, private db: AngularFireDatabase) {
	
    }
	
	GetAllFavoritesAF() {
		return this.comidaslist;
	}

	DeleteFavoriteAF(key: string){
		return this.comidaslist.remove(key);
	}

	UpdateFavoriteAF(key: string, restaurant: Comida){
		return this.comidaslist.update(key, restaurant);
	}


	AddFavoriteAF(restaurant: Comida) {
		return this.comidaslist.push(restaurant);
	}
}