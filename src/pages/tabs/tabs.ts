import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { FavoritesPage } from '../favorites/favorites';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = HomePage;
  //tab3Root = AboutPage;
  tab1Root = FavoritesPage;

  constructor() {

  }
}
