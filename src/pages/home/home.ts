import "reflect-metadata";
import { getConnectionManager } from "ionic-orm";
import { Penjualan } from "../../entity/Penjualan";

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
  perusahaan:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  }

  async ionViewDidEnter() {
    console.log('ionViewDidLoad HomePage');
    const connection = getConnectionManager().get();
    let photoRepository = connection.getRepository(Penjualan);

    this.perusahaan = await photoRepository.find();
    console.log("All photos from the db: ", this.perusahaan);  
  }

  transaksi() {
    this.navCtrl.push(SegmentPage);
  }


}
