import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SegmentPage } from '../segment/segment';
import { Platform } from 'ionic-angular';
import { createConnection, ConnectionOptions } from 'ionic-orm'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter() {
    console.log("Home ionViewWillEnter");
    this.platform.ready().then(() => {
      let options: ConnectionOptions = {
        autoSchemaSync: true,
        driver: {
          type: "mysql",
          host: "localhost",
          port: 3306,
          username: "root",
          password: "password",
          database: "siapik"
        },
        logging: {
          logQueries: true,
          logSchemaCreation: true,
          logFailedQueryError: true,
          logOnlyFailedQueries: true
        }
      };
      createConnection(options)
        .then((connection) => {
          console.log(`Connected Created ${connection}`);
        })
        .catch((error) => {
          console.error(`Connection Error ${JSON.stringify(error)}`);
        });
    });
  }

  transaksi() {
    this.navCtrl.push(SegmentPage);
  }


}
