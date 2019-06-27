import { Comida } from './models/favorite';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { UserInfoBD } from '../models/userinfo';

@Injectable()
export class FavoritesService {

	private usuarioslist = this.db.list<UserInfoBD>('Usuarios');
	private comidaslist = this.db.list<Comida>('Usuarios/Comidas');

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

	AddFavoriteUR(user: UserInfoBD) {
		return this.usuarioslist.push(user);
	}
}