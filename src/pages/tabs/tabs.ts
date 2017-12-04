import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { KaartPage } from '../kaart/kaart';
import { FavorietenPage } from '../favorieten/favorieten';
import { ZoekPage } from '../zoek/zoek';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = KaartPage;
  tab3Root = FavorietenPage;
  tab4Root = ZoekPage;

  constructor() {

  }
}
