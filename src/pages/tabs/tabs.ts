import { Component } from '@angular/core';

import { PengeluaranPage } from '../pengeluaran/pengeluaran';
import { PenerimaanPage } from '../penerimaan/penerimaan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PenerimaanPage;
  tab2Root = PengeluaranPage;

constructor() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenerimaanKegiatanUsahaPage');
  }

}
