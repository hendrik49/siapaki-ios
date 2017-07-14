import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PenerimaanKegiatanUsahaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-penerimaan-kegiatan-usaha',
  templateUrl: 'penerimaan-kegiatan-usaha.html',
})
export class PenerimaanKegiatanUsahaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenerimaanKegiatanUsahaPage');
  }

}
