import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';
import { HeaderColor } from '@ionic-native/header-color';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Sim } from '@ionic-native/sim';
import { Device } from '@ionic-native/device';
import { App } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthenticPage } from '../pages/authentic/authentic';
import { GenuinelogPage } from '../pages/genuinelog/genuinelog';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	AuthenticPage,
	GenuinelogPage
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	HttpModule,	
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	AuthenticPage,
	GenuinelogPage
  ],
  providers: [
	AlertController,
	HeaderColor,
	Network,
    StatusBar,
	UniqueDeviceID,
    SplashScreen,
	BarcodeScanner,
	ScreenOrientation,
	Sim,
	App,	
	Device,
	Geolocation,
	InAppBrowser,
	OpenNativeSettings,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
