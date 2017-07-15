import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormpenjualanPage } from '../formpenjualan/formpenjualan'
/**
 * Generated class for the PenerimaanKegiatanUsahaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-penerimaan-kegiatan-usaha',
  templateUrl: 'penerimaan-kegiatan-usaha.html',
})
export class PenerimaanKegiatanUsahaPage {
  tabBarElement;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');

  }
onPageDidEnter()
    {

        this.tabBarElement.style.display = 'none';

    }

    onPageWillLeave()
    {

        this.tabBarElement.style.display = 'block';

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenerimaanKegiatanUsahaPage');
  }

  goToForm(){
    this.navCtrl.push(FormpenjualanPage);
  }

}
