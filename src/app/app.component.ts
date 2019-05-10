import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController, public screenOrientation: ScreenOrientation, public network: Network) {
  this.initializeApp();
  
	if (this.platform.is('cordova')) {
		this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
	}  
}

   initializeApp() {
       this.platform.ready().then(() => {

		this.statusBar.styleDefault();
		this.splashScreen.hide();
		this.statusBar.overlaysWebView(false);
		this.statusBar.backgroundColorByHexString('#0b2d60');
  });
  
		let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
		alert('network was disconnected :-(');
		});
		disconnectSubscription.unsubscribe(); 
		
		let connectSubscription = this.network.onConnect().subscribe(() => {
		alert('network connected!');
		if (this.network.type === 'wifi') {
		alert('we got a wifi connection, woohoo!');
		}
		});
		
		// stop connect watch
		connectSubscription.unsubscribe();		
  }
}
