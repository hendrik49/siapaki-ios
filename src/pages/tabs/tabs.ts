import { Component } from '@angular/core';

import { PengeluaranPage } from '../pengeluaran/pengeluaran';
import { PenerimaanPage } from '../penerimaan/penerimaan';
import { NavController } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PenerimaanPage;
  tab2Root = PengeluaranPage;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenerimaanKegiatanUsahaPage');
  }

}
