import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormpenjualanPage } from '../formpenjualan/formpenjualan'
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

  onPageDidEnter() {

  }

  onPageWillLeave() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenerimaanKegiatanUsahaPage');
  }

  goToForm() {
    this.navCtrl.push(FormpenjualanPage);
  }

}
