import { Component } from '@angular/core';

import { PengeluaranPage } from '../pengeluaran/pengeluaran';
import { PenerimaanPage } from '../penerimaan/penerimaan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PenerimaanPage;
  tab2Root = PengeluaranPage;
  tabBarElement;

constructor() {
    this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');

  }

onPageDidEnter()
    {
        this.tabBarElement.style.display = 'none';
    }

    onPageWillLeave()
    {
        this.tabBarElement.style.display = 'block';
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenerimaanKegiatanUsahaPage');
  }

}
