import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterInfoPage } from './register-info';

@NgModule({
  declarations: [
    RegisterInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterInfoPage),
  ],
})
export class RegisterInfoPageModule {}
