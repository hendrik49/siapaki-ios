import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SegmentPage } from '../segment/segment';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter() {
    console.log("Home ionViewWillEnter");
  }

  transaksi() {
    this.navCtrl.push(SegmentPage);
  }


}
