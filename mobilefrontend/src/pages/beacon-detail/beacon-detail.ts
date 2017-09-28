import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BleScanResponse } from "../../models/bleScanResponse";
import { Beacon } from "../../models/beacon";
import { BeaconService } from "../../services/beacons";
import { BLE } from "@ionic-native/ble";
import { HomePage } from "../home/home";

/**
 * Generated class for the BeaconDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beacon-detail',
  templateUrl: 'beacon-detail.html',
})
export class BeaconDetailPage {

  inputBeacon: BleScanResponse;            //Beacon passed from beacons screen 
  retrievedBeacon: Beacon;

  constructor(private beaconService: BeaconService, public navCtrl: NavController, public navParams: NavParams, ble: BLE, private toastCtrl: ToastController) {
    this.inputBeacon = navParams.get('beacon');
    if (this.inputBeacon != null) {
      this.getBeaconInfo(this.inputBeacon.id,this.inputBeacon.name);
    }else{
      this.navCtrl.push(HomePage);
    }
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  getBeaconInfo(id,name) {
    var self = this;
    this.beaconService.getBeaconInfo(id,name).then(
      function (response) {
       self.retrievedBeacon = response;
      }).catch(function (error) {
        if(error.status == 204){
          self.presentToast("Server error");
        }else{
          self.presentToast(error.json().error);
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeaconDetailPage');
  }

}
