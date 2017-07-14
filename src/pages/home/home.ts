import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class PenerimaanPage {

  constructor(public navCtrl: NavController) {

  }

  wow(){
    console.log("pindah page");
  }
}
