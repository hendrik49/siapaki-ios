import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PengeluaranKegiatanUsahaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pengeluaran-kegiatan-usaha',
  templateUrl: 'pengeluaran-kegiatan-usaha.html',
})
export class PengeluaranKegiatanUsahaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengeluaranKegiatanUsahaPage');
  }

}
