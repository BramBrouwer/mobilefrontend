import { Component, ViewChild } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav, MenuController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { BleScanResponse } from "../models/bleScanResponse";
import { ScanService } from "../services/scan";
import { BeaconDetailPage } from "../pages/beacon-detail/beacon-detail";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  foundDevices: Array<BleScanResponse>;
  @ViewChild(Nav) nav: Nav;


  constructor(
    public menu: MenuController,
    public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private scanService: ScanService,
    private toast: ToastController) {

    var self = this;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //back button handle
      //Registration of push in Android and Windows Phone
      var lastTimeBackPress = 0;
      var timePeriodToExit = 2000;
      platform.registerBackButtonAction(() => {
        // get current active page
        let view = this.nav.getActive();
        if (view.component.name == "TabsPage") {
          //Double check to exit app                  
          if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
            this.platform.exitApp(); //Exit from app
          } else {
            let toast = this.toast.create({
              message: 'Press back again to exit App?',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            lastTimeBackPress = new Date().getTime();
          }
        } else {
          // go to previous page
          this.nav.setRoot(HomePage);
        }
      });
    });

    self.scanService.subject.subscribe(value => {
      self.foundDevices = value;
      self.presentToast(this.foundDevices.length);
    })
  }

  presentToast(message) {
    const toast = this.toast.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  }

  /*
    Navigate to detail page and pass currently selected beacon
  */
  goToDetails(beacon: BleScanResponse) {
    this.menu.close();
    this.nav.setRoot(BeaconDetailPage, { beacon });
  }

}

