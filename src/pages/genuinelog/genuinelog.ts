import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

/**
 * Generated class for the GenuinelogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genuinelog',
  templateUrl: 'genuinelog.html',
})
export class GenuinelogPage {
public typee:any;
public UniqueId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,public device: Device,public alertCtrl: AlertController, public uniqueDeviceID: UniqueDeviceID) {
   this.uniqueDeviceID.get()
  .then((uuid: any) => this.UniqueId = uuid)
  .catch((error: any) => console.log(error)); 
  }

 ionViewWillEnter() {
 this.CreditDetList();
 } 

CreditDetList()
{
	let data :Observable<any>;
	data = this.http.get('http://simpsonwms.arkaautomaations.com/WarrantyAppAPI/Get_Genuine_Log_API.php?UUid='+this.UniqueId); 
	data.subscribe(result=>{
	this.typee = result;
	if(this.typee=='')
	{
	this.typee=false;
	}
	}, error => {
	//alert(JSON.stringify(error));
});
}


}
