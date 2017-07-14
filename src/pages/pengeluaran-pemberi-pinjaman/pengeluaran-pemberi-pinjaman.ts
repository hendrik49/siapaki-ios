import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PengeluaranPemberiPinjamanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pengeluaran-pemberi-pinjaman',
  templateUrl: 'pengeluaran-pemberi-pinjaman.html',
})
export class PengeluaranPemberiPinjamanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengeluaranPemberiPinjamanPage');
  }

}
