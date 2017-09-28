import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';  //import to we can use the toPromise() operator
import { ToastController } from 'ionic-angular';
import { Beacon } from "../models/beacon";

@Injectable()
export class BeaconService {
 
  baseUrl = 'https://ble-platform-backend.herokuapp.com';

  constructor(public http: Http, private toastCtrl: ToastController) { }
  handleError(error: any): void {
    this.presentToast("An error occurred");
  }

  getBeaconInfo(beaconId: string): Promise<any> {
    var self = this;
    var url = `${this.baseUrl}/beacon/${beaconId}`;
    
    return this.http.get(url)
      .toPromise()
      .then(function (response) {
        if (!response) { self.handleError(0); }
        return response.json() as Beacon;
      }).catch(error => self.handleError(error));
  }

  getBeacons(): Promise<any> {
    var self = this;
    var url = `${this.baseUrl}/beacon`;
    
    return this.http.get(url)
      .toPromise()
      .then(function (response) {
        if (!response) { self.handleError(0); }
        return response.json() as Beacon[];
      }).catch(error => self.handleError(error));
  } 
  // Utility
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }


  // loadDetails(login: string): Observable<User> {
  //   return this.http.get(`${this.githubApiUrl}/users/${login}`)
  //     .map(res => <User>(res.json()))
  // }


  // // Load all github users
  // load(): Observable<User[]> {
  //   return this.http.get(`${this.githubApiUrl}/users`)
  //     .map(res => <User[]>res.json());
  // }

}