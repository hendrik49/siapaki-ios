import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PengeluaranKegiatanUsahaPage } from '../pengeluaran-kegiatan-usaha/pengeluaran-kegiatan-usaha';
import { PengeluaranPemberiPinjamanPage } from '../pengeluaran-pemberi-pinjaman/pengeluaran-pemberi-pinjaman';
import { PengeluaranPemilikPage } from '../pengeluaran-pemilik/pengeluaran-pemilik';

@Component({
  selector: 'page-pengeluaran',
  templateUrl: 'pengeluaran.html'
})
export class PengeluaranPage {

  constructor(public navCtrl: NavController) {

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
