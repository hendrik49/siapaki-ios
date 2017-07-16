import "reflect-metadata";
import { createConnection } from "ionic-orm";
import { Perusahaan } from "../entity/Perusahaan";
import { Penjualan } from "../entity/Penjualan";


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
        Perusahaan,
        Penjualan
      ],
      autoSchemaSync: true,
    }).then(async connection => {
          let photo = new Perusahaan();
          photo.name = "PT Didoks";
          photo.description = "Perusahaan Pertanian";
          photo.fileName = "img_sektor_pertanian.png";
          photo.type = "pertanian";
          photo.isPublished = true;

          let photoRepository = connection.getRepository(Perusahaan);
          await photoRepository.persist(photo);

          photo = new Perusahaan();
          photo.name = "PT Didok B";
          photo.description = "Perusahaan Pertanian";
          photo.fileName = "img_sektor_pertanian.png";
          photo.type = "pertanian";
          photo.isPublished = true;

          await photoRepository.persist(photo);
          let data =await photoRepository.find();
          console.log("All entities loaded",data);
    });
    }
}
