import { Injectable, OnInit } from '@angular/core';
import { BLE } from "@ionic-native/ble";
import { BleScanResponse } from "../models/bleScanResponse";
import { Subject } from "rxjs/Subject";


@Injectable()
export class ScanService {

    constructor(private ble: BLE) { }    
// TODO
//Check of dit werkt (wordt de array in home.ts geupdate? wordt de view geupdate?)
//Zo niet, ga langs de tutorial
//Daarna
//Laat nearby beacons zien in menu en sla ze op in home
//Bepaal welke het dichtse bij zijn
//Zorg dat scannen goed wordt aangetoond

foundDevices : Array<BleScanResponse>;
subject: Subject<Array<BleScanResponse>> = new Subject<Array<BleScanResponse>>();


/*
    Scan for beacons. Called on page start&page refresh
  */
  scanForBeacons(){
    this.ble.scan([], 10).subscribe(device => {
    
        var adData = new Uint8Array(device.advertising);
        device.advertising = adData;
        if(device.name){
          this.foundDevices.push(device);

          this.subject.next(this.foundDevices);        
        }
      })

  }

}