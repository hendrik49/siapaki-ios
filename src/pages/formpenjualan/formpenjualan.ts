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

     onSignup(form: NgForm) {
      this.submitted = true;
      let loading = this.loadingCtrl.create({
          content: 'Tunggu sebentar...'
      });

      if (form.valid) {
        loading.present();

        let input = {
          namabarang: this.penjualan.namabarang,
          hargabarang: this.penjualan.hargabarang,
          jumlahbarang: this.penjualan.jumlahbarang,
          totalharga: this.penjualan.totalharga,
          metodepembayaran: this.penjualan.metodepembayaran,
          pelanggan: this.penjualan.pelanggan,
          tanggal: this.penjualan.tanggal,
          catatan: this.penjualan.catatan
        };
        console.log(input);

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
