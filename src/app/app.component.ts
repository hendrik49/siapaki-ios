import "reflect-metadata";
import { createConnection } from "ionic-orm";
import { Perusahaan } from "../entity/Perusahaan";


import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.ionViewDidEnter();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
    ionViewDidEnter() {

      createConnection({
      driver: {
        type: "websql",
        host: "localhost",
        database: "siapikdb"
      },
      entities: [
        Perusahaan
      ],
      autoSchemaSync: true,
    }).then(async connection => {
      console.log("All entities are loaded ");
    });
    }
}
