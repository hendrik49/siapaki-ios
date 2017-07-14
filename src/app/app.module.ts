import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PengeluaranPage } from '../pages/contact/contact';
import { PenerimaanPage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PenerimaanKegiatanUsahaPage } from '../pages/penerimaan-kegiatan-usaha/penerimaan-kegiatan-usaha';
import { PenerimaanPemberiPinjamanPage } from '../pages/penerimaan-pemberi-pinjaman/penerimaan-pemberi-pinjaman';
import { PenerimaanPemilikPage } from '../pages/penerimaan-pemilik/penerimaan-pemilik';
import { PengeluaranKegiatanUsahaPage } from '../pages/pengeluaran-kegiatan-usaha/pengeluaran-kegiatan-usaha';
import { PengeluaranPemberiPinjamanPage } from '../pages/pengeluaran-pemberi-pinjaman/pengeluaran-pemberi-pinjaman';
import { PengeluaranPemilikPage } from '../pages/pengeluaran-pemilik/pengeluaran-pemilik';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PenerimaanPage,
    PengeluaranPage,
    TabsPage,
    PengeluaranKegiatanUsahaPage,
    PengeluaranPemberiPinjamanPage,
    PengeluaranPemilikPage,
    PenerimaanKegiatanUsahaPage,
    PenerimaanPemilikPage,
    PenerimaanPemberiPinjamanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PenerimaanPage,
    PengeluaranPage,
    TabsPage,
    PengeluaranKegiatanUsahaPage,
    PengeluaranPemberiPinjamanPage,
    PengeluaranPemilikPage,
    PenerimaanKegiatanUsahaPage,
    PenerimaanPemilikPage,
    PenerimaanPemberiPinjamanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
