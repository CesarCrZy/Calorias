import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfoBD } from '../models/userinfo';
import { AngularFireAuth } from 'angularfire2/auth';
import { FavoritesService } from '../favorites/favorites.service';
import { RecomendacionPage } from '../recomendacion/recomendacion';

/**
 * Generated class for the RegisterInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-info',
  templateUrl: 'register-info.html',
})
export class RegisterInfoPage {

  private favoritesService : FavoritesService;

  userInfo = {} as UserInfoBD;

  email: any;
  itemSelected: any;
  objSelected: any;
  actividadSelected: any;
  generoText: any;
  objetivoText: any;
  actividadText: any;
  BMR: any;

  genero = [
    {text: 'Hombre', value: 0},
    {text: 'Mujer', value: 1}
  ];

  objetivo = [
    {text: 'Ganar masa muscular', value: 0},
    {text: 'Definicion muscular', value: 1},
    {text: 'Perdida de peso', value: 2},
    {text: 'Mantener el peso', value: 3}
  ];

  actividad = [
    {text: 'Poco o ningun ejercicio', value: 0},
    {text: 'Ejercicio Ligero', value: 1},
    {text: 'Ejercicio Moderado', value: 2},
    {text: 'Ejercicio Fuerte', value: 3},
    {text: 'Ejercicio Muy Fuerte', value: 4}
  ];


  constructor( private _favoritesService: FavoritesService,private ofauth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.favoritesService = _favoritesService;
  }

  getGenero(genero: string) {
    console.log(genero);
    this.generoText = genero;
    this.userInfo.genero = genero;
  }

  getObjetivo(objetivo: string) {
    console.log(objetivo);
    this.objetivoText = objetivo;
    this.userInfo.objetivo = objetivo;
  }

  getActividad(actividad: string) {
    console.log(actividad);
    this.actividadText = actividad;
    this.userInfo.actividad = actividad;
  }

  Insertar(userInfo: UserInfoBD) {
    console.log(userInfo.key);
    if(userInfo.genero==='Hombre'){
      this.BMR =  5 + (10 * userInfo.peso) + (6.25 * userInfo.altura) - (5 * userInfo.edad);
      console.log(this.BMR);
      if(userInfo.actividad=='Poco o ningun ejercicio'){
        userInfo.Calorias = (this.BMR*1.2);
      }else if(userInfo.actividad=='Ejercicio Ligero'){
        userInfo.Calorias = (this.BMR*1.375);
      }else if(userInfo.actividad=='Ejercicio Moderado'){
        userInfo.Calorias = (this.BMR*1.55);
      }else if(userInfo.actividad=='Ejercicio Fuerte'){
        userInfo.Calorias = (this.BMR*1.725);
      }else if(userInfo.actividad=='Ejercicio Muy Fuerte'){
        userInfo.Calorias = (this.BMR*1.9);
      }
      if(userInfo.objetivo=='Ganar masa muscular'){
        userInfo.proteinas = (userInfo.peso*2.4);
        userInfo.grasas = (userInfo.peso*1.2);
        userInfo.carbohidratos = (userInfo.Calorias - (userInfo.proteinas*4+userInfo.grasas*9))/4;
        console.log(userInfo.proteinas);
        console.log(userInfo.grasas);
        console.log(userInfo.carbohidratos);
      }else if(userInfo.objetivo=='Perdida de peso'){
        userInfo.proteinas = (userInfo.peso*1.7);
        userInfo.grasas = (userInfo.peso*.7);
        userInfo.carbohidratos = (userInfo.Calorias - (userInfo.proteinas*4+userInfo.grasas*9))/4;
      }else if(userInfo.objetivo=='Definicion muscular'){
        userInfo.proteinas = (userInfo.peso*1.8);
        userInfo.grasas = (userInfo.peso*.7);
        userInfo.carbohidratos = (userInfo.Calorias - (userInfo.proteinas*4+userInfo.grasas*9))/4;
      }else if(userInfo.objetivo=='Mantener el peso'){
        userInfo.proteinas = (userInfo.peso*1.8);
        userInfo.grasas = (userInfo.peso*.9);
        userInfo.carbohidratos = (userInfo.Calorias - (userInfo.proteinas*4+userInfo.grasas*9))/4;
      }
      console.log(userInfo.Calorias);
    }else if(userInfo.genero==='Mujer'){
      this.BMR =  (10 * userInfo.peso) + (6.25 * userInfo.altura) - (5 * userInfo.edad) - 161;
      console.log(this.BMR);
      if(userInfo.actividad=='Poco o ningun ejercicio'){
        userInfo.Calorias = (this.BMR*1.2);
      }else if(userInfo.actividad=='Ejercicio Ligero'){
        userInfo.Calorias = (this.BMR*1.375);
      }else if(userInfo.actividad=='Ejercicio Moderado'){
        userInfo.Calorias = (this.BMR*1.55);
      }else if(userInfo.actividad=='Ejercicio Fuerte'){
        userInfo.Calorias = (this.BMR*1.725);
      }else if(userInfo.actividad=='Ejercicio Muy Fuerte'){
        userInfo.Calorias = (this.BMR*1.9);
      }
      if(userInfo.objetivo=='Ganar masa muscular'){
        userInfo.proteinas = (userInfo.peso*2.4);
        userInfo.grasas = (userInfo.peso*1.2);
        userInfo.carbohidratos = (userInfo.Calorias - (userInfo.proteinas*4+userInfo.grasas*9))/4;
        console.log(userInfo.proteinas);
        console.log(userInfo.grasas);
        console.log(userInfo.carbohidratos);
      }else if(userInfo.objetivo=='Perdida de peso'){
        userInfo.proteinas = (userInfo.peso*1.7);
        userInfo.grasas = (userInfo.peso*.7);
        userInfo.carbohidratos = (userInfo.Calorias - (userInfo.proteinas*4+userInfo.grasas*9))/4;
      }else if(userInfo.objetivo=='Definicion muscular'){
        userInfo.proteinas = (userInfo.peso*1.8);
        userInfo.grasas = (userInfo.peso*.7);
        userInfo.carbohidratos = (userInfo.Calorias - (userInfo.proteinas*4+userInfo.grasas*9))/4;
      }else if(userInfo.objetivo=='Mantener el peso'){
        userInfo.proteinas = (userInfo.peso*1.8);
        userInfo.grasas = (userInfo.peso*.9);
        userInfo.carbohidratos = (userInfo.Calorias - (userInfo.proteinas*4+userInfo.grasas*9))/4;
      }
    }
    if(typeof(userInfo.key)==='undefined'){
      this.favoritesService.AddFavoriteUR(userInfo);
    }

    this.navCtrl.setRoot(RecomendacionPage, {
      Calorias: userInfo.Calorias,
      proteinas: userInfo.proteinas,
      grasas: userInfo.grasas,
      carbohidratos: userInfo.carbohidratos
    });
}
  ionViewDidLoad() {
    this.ofauth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.userInfo.email = data.email;
        this.userInfo.uid = data.uid;
      }
    });
    console.log('ionViewDidLoad RegisterInfoPage');
  }

}
