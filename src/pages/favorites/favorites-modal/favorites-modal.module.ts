import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesModalPage } from './favorites-modal';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FavoritesModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesModalPage),
  ],
})
export class FavoritesModalPageModule {}