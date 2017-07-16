import "reflect-metadata";
import { getConnectionManager } from "ionic-orm";
import { Perusahaan } from "../../entity/Perusahaan";

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  async ionViewDidEnter() {
    const connection = getConnectionManager().get();
    let photo = new Perusahaan();
    photo.name = "PT Didoks";
    photo.description = "Perusahaan Pertanian";
    photo.fileName = "img_sektor_pertanian.png";
    photo.type = "pertanian";
    photo.isPublished = true;

    let photoRepository = connection.getRepository(Perusahaan);
    photoRepository.persist(photo);

    this.perusahaan = await photoRepository.find();
    console.log("All photos from the db: ", this.perusahaan);  
  }

  transaksi() {
    this.navCtrl.push(SegmentPage);
  }


}
