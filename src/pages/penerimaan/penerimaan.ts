import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PenerimaanKegiatanUsahaPage } from '../penerimaan-kegiatan-usaha/penerimaan-kegiatan-usaha';
import { PenerimaanPemberiPinjamanPage } from '../penerimaan-pemberi-pinjaman/penerimaan-pemberi-pinjaman';
import { PenerimaanPemilikPage } from '../penerimaan-pemilik/penerimaan-pemilik';

@Component({
  selector: 'page-penerimaan',
  templateUrl: 'penerimaan.html'
})
export class PenerimaanPage {

  constructor(public navCtrl: NavController) {

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
}
