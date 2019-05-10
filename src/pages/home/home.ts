import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Network } from '@ionic-native/network';

import { AuthenticPage } from '../authentic/authentic';
import { GenuinelogPage } from '../genuinelog/genuinelog';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Status:any='';
data:any = {};
public nation:any;
public disconnectSubscription:any;
  constructor(public navCtrl: NavController,  public navParams: NavParams, public http:HttpClient, public platform:Platform, public alertCtrl: AlertController, public network: Network) {
  this.platform = platform;
      this.platform.ready().then(() => {
        this.manageNetworkConnection();
    });
}
  
  listAuthenticPage() {
  	this.nation= AuthenticPage;
	this.PageNation();	
  }  
  listGenuineLogPage() {
  	this.nation= GenuinelogPage;
	this.PageNation();	
  }   
  manageNetworkConnection()
  {
	this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
		let altsuccess = this.alertCtrl.create({
		title: 'Alert',
		message: 'Network is disconnected..!',
		buttons: [
		{
		text: 'OK',
		handler: () => 
		{
		this.navCtrl.setRoot(HomePage);
		}
		}
		]
		});
		altsuccess.present();
		this.disconnectSubscription.unsubscribe();
		this.platform.exitApp();
		});

}
PageNation()
{
if(this.network.type=='none')
{
		let altsuccess = this.alertCtrl.create({
		title: 'Alert',
		message: 'Network is disconnected..!',
		buttons: [
		{
		text: 'OK',
		handler: () => 
		{
		this.navCtrl.setRoot(HomePage);
		}
		}
		]
		});
		altsuccess.present();
		this.platform.exitApp();

}
else
{
this.navCtrl.push(this.nation);
}
}
ionViewWillLeave(){
this.disconnectSubscription.unsubscribe();
}
}
