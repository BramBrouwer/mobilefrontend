import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';  //import to we can use the toPromise() operator
import { ToastController } from 'ionic-angular';
import { Beacon } from "../models/beacon";





@Injectable()
export class BeaconService {
 
  baseUrl = 'https://ble-platform-backend.herokuapp.com';


  constructor(public http: Http, toastCtrl: ToastController) { }

  handleError(error): void {
    return (error);
  } 

  getBeaconInfo(beaconId: string,name: string): Promise<any> {
    var url = `${this.baseUrl}/beacons/${beaconId},${name}`;

    return this.http.get(url)
      .toPromise()
      .then(function (response) {
        return response.json().result as Beacon;
      }).catch(error => { throw error });

  }

}