import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Beacon } from "../../models/beacon";
import { BleScanResponse } from "../../models/bleScanResponse";
import { BLE } from '@ionic-native/ble';
import { BeaconDetailPage } from "../beacon-detail/beacon-detail";
import { ScanService } from "../../services/scan";

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
    private scanService: ScanService) {
    this.zone = new NgZone({ enableLongStackTrace: false });
    this.scanService.subject.subscribe(value => {
      this.zone.run(() => {
        this.foundDevices = value;
      })
    })
    this.scanService.scanForBeacons();
  }

  /*
   Refresh page
 */
  doRefresh(refresher) {
    this.scanService.scanForBeacons();
    setTimeout(() => {
      refresher.complete();
    }, 8000);
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
