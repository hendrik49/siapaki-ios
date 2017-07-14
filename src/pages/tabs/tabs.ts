import { Component } from '@angular/core';

import { PengeluaranPage } from '../contact/contact';
import { PenerimaanPage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PenerimaanPage;
  tab2Root = PengeluaranPage;

  constructor() {

  }
}
