import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PenerimaanPemberiPinjamanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-penerimaan-pemberi-pinjaman',
  templateUrl: 'penerimaan-pemberi-pinjaman.html',
})
export class PenerimaanPemberiPinjamanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenerimaanPemberiPinjamanPage');
  }

}
