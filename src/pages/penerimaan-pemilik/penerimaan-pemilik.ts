import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PenerimaanPemilikPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-penerimaan-pemilik',
  templateUrl: 'penerimaan-pemilik.html',
})
export class PenerimaanPemilikPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenerimaanPemilikPage');
  }

}
