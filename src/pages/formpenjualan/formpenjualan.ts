import "reflect-metadata";
import { getConnectionManager } from "ionic-orm";
import { Penjualan } from "../../entity/Penjualan";

import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from "@angular/forms/forms";

/**
 * Generated class for the FormpenjualanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-formpenjualan',
  templateUrl: 'formpenjualan.html',
})
export class FormpenjualanPage {

  penjualan: {namabarang?: string, hargabarang?: number, jumlahbarang?: number, totalharga?: number, metodepembayaran?:string, pelanggan?:string, tanggal?:string, catatan?:string} = {};
  submitted = false;

  constructor( public toastCtrl: ToastController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormpenjualanPage');
  }

     async onSignup(form: NgForm) {
      this.submitted = true;
      let loading = this.loadingCtrl.create({
          content: 'Tunggu sebentar...'
      });

      if (form.valid) {
        loading.present();
        const connection = getConnectionManager().get();
    
        let order = new Penjualan();
          order.namabarang= this.penjualan.namabarang,
          order.hargabarang= Number(this.penjualan.hargabarang),
          order.jumlahbarang=Number(this.penjualan.jumlahbarang),
          order.totalharga= Number(this.penjualan.totalharga),
          order.metodepembayaran= this.penjualan.metodepembayaran,
          order.pelanggan= this.penjualan.pelanggan,
          order.tanggal= this.penjualan.tanggal,
          order.catatan= this.penjualan.catatan

        let photoRepository = connection.getRepository(Penjualan);
        await photoRepository.persist(order);
        this.showAlert("success");
        loading.dismiss();

    }
  }

  showAlert(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
}

  showError(err: any){
    err.status==0?
    this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda"):
    this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
  }


}
