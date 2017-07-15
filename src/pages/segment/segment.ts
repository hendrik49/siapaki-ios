import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { PengeluaranKegiatanUsahaPage } from '../pengeluaran-kegiatan-usaha/pengeluaran-kegiatan-usaha';
import { PengeluaranPemberiPinjamanPage } from '../pengeluaran-pemberi-pinjaman/pengeluaran-pemberi-pinjaman';
import { PengeluaranPemilikPage } from '../pengeluaran-pemilik/pengeluaran-pemilik';
import { PenerimaanKegiatanUsahaPage } from '../penerimaan-kegiatan-usaha/penerimaan-kegiatan-usaha';
import { PenerimaanPemberiPinjamanPage } from '../penerimaan-pemberi-pinjaman/penerimaan-pemberi-pinjaman';
import { PenerimaanPemilikPage } from '../penerimaan-pemilik/penerimaan-pemilik';

@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {
  pet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet = "penerimaan";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }

  nerimaKegiatanUsaha(){
    this.navCtrl.push(PenerimaanKegiatanUsahaPage);
  }
  nerimaPemberPinjaman(){
    this.navCtrl.push(PenerimaanPemberiPinjamanPage);
  }
  nerimaPemilik(){
    this.navCtrl.push(PenerimaanPemilikPage);
  }

  luaranKegiatanUsaha(){
    this.navCtrl.push(PengeluaranKegiatanUsahaPage);
  }
  luaranPemberPinjaman(){
    this.navCtrl.push(PengeluaranPemberiPinjamanPage);
  }
  luaranPemilik(){
    this.navCtrl.push(PengeluaranPemilikPage);
  }

}
