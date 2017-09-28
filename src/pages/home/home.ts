import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Beacon } from "../../models/beacon";
import { BleScanResponse } from "../../models/bleScanResponse";
import { BLE } from '@ionic-native/ble';
import { BeaconService } from "../../services/beacons";
import { BeaconDetailPage } from "../beacon-detail/beacon-detail";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  foundDevices: Array<BleScanResponse>;
  zone: NgZone;
  testBeacon: Beacon;

  constructor(
    public navCtrl: NavController, 
    public ble: BLE,
    private beaconService: BeaconService) {
    this.zone = new NgZone({ enableLongStackTrace: false });
    this.foundDevices = [];
    this.scanForBeacons();
  }

   /*
    Scan for beacons. Called on page start&page refresh
  */
  scanForBeacons(){
    this.ble.scan([], 10).subscribe(device => {
      this.zone.run(() => {
        var adData = new Uint8Array(device.advertising);
        device.advertising = adData;
        if(device.name){
          this.foundDevices.push(device);          
        }
      })
    })
  }

   /*
    Refresh page
  */
  doRefresh(refresher) {
    this.foundDevices = [];
    this.scanForBeacons();
    setTimeout(() => {
      refresher.complete();
    }, 5000);
  }

    /*
    Utility
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad BeaconsPage');
  }
  
  /*
    Navigate to detail page and pass currently selected beacon
  */
  goToDetails(beacon: BleScanResponse) {
    this.navCtrl.push(BeaconDetailPage, { beacon });
  }  
  
  

}
