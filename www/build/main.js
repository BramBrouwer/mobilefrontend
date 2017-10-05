webpackJsonp([1],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/beacon-detail/beacon-detail.module": [
		269,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //import to we can use the toPromise() operator

var BeaconService = (function () {
    function BeaconService(http, toastCtrl) {
        this.http = http;
        this.baseUrl = 'https://ble-platform-backend.herokuapp.com';
    }
    BeaconService.prototype.handleError = function (error) {
        return (error);
    };
    BeaconService.prototype.getBeaconInfo = function (beaconId, name) {
        var url = this.baseUrl + "/beacons/" + beaconId + "," + name;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json().result;
        }).catch(function (error) { throw error; });
    };
    return BeaconService;
}());
BeaconService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */]])
], BeaconService);

//# sourceMappingURL=beacons.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_beacon_detail_beacon_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_beacons__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_ble__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_scan__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_beacon_detail_beacon_detail__["a" /* BeaconDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/beacon-detail/beacon-detail.module#BeaconDetailPageModule', name: 'BeaconDetailPage', segment: 'beacon-detail', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_beacon_detail_beacon_detail__["a" /* BeaconDetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__services_beacons__["a" /* BeaconService */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_11__services_scan__["a" /* ScanService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_scan__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_beacon_detail_beacon_detail__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(menu, platform, statusBar, splashScreen, scanService, toast) {
        var _this = this;
        this.menu = menu;
        this.platform = platform;
        this.scanService = scanService;
        this.toast = toast;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        var self = this;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //back button handle
            //Registration of push in Android and Windows Phone
            var lastTimeBackPress = 0;
            var timePeriodToExit = 2000;
            platform.registerBackButtonAction(function () {
                // get current active page
                var view = _this.nav.getActive();
                if (view.component.name == "TabsPage") {
                    //Double check to exit app                  
                    if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                        _this.platform.exitApp(); //Exit from app
                    }
                    else {
                        var toast_1 = _this.toast.create({
                            message: 'Press back again to exit App?',
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast_1.present();
                        lastTimeBackPress = new Date().getTime();
                    }
                }
                else {
                    // go to previous page
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
                }
            });
        });
        self.scanService.subject.subscribe(function (value) {
            self.foundDevices = value;
            self.presentToast(_this.foundDevices.length);
        });
    }
    MyApp.prototype.presentToast = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
    };
    /*
      Navigate to detail page and pass currently selected beacon
    */
    MyApp.prototype.goToDetails = function (beacon) {
        this.menu.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_beacon_detail_beacon_detail__["a" /* BeaconDetailPage */], { beacon: beacon });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Flex\Documents\GitHub\mobilefrontend\src\app\app.html"*/'<ion-menu [content]="mycontent">\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Nearby beacons</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let beacon of foundDevices" (click)="goToDetails(beacon)">\n\n            <h2>{{ beacon?.name }}</h2>\n\n          </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Flex\Documents\GitHub\mobilefrontend\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_scan__["a" /* ScanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_scan__["a" /* ScanService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _g || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_beacons__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BeaconDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeaconDetailPage = (function () {
    function BeaconDetailPage(beaconService, navCtrl, navParams, ble, toastCtrl) {
        this.beaconService = beaconService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.inputBeacon = navParams.get('beacon');
        if (this.inputBeacon != null) {
            this.getBeaconInfo(this.inputBeacon.id, this.inputBeacon.name);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
    }
    BeaconDetailPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    BeaconDetailPage.prototype.getBeaconInfo = function (id, name) {
        var self = this;
        this.beaconService.getBeaconInfo(id, name).then(function (response) {
            self.retrievedBeacon = response;
        }).catch(function (error) {
            if (error.status == 204) {
                self.presentToast("Server error");
            }
            else {
                self.presentToast(error.json().error);
            }
        });
    };
    BeaconDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BeaconDetailPage');
    };
    return BeaconDetailPage;
}());
BeaconDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-beacon-detail',template:/*ion-inline-start:"C:\Users\Flex\Documents\GitHub\mobilefrontend\src\pages\beacon-detail\beacon-detail.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Beacon details</ion-title>\n    </ion-navbar>  \n  </ion-header>\n  \n  <ion-content padding>  \n    <ion-list *ngIf="retrievedBeacon">\n      <ion-item>\n        <ion-title *ngIf="!retrievedBeacon.title">No title found</ion-title>\n        <ion-title *ngIf="retrievedBeacon.title">{{retrievedBeacon.title}}</ion-title>\n      </ion-item>\n      <ion-item text-wrap>\n        {{retrievedBeacon.description}}\n      </ion-item>\n      <ion-item-divider></ion-item-divider>\n    </ion-list>  \n  </ion-content>'/*ion-inline-end:"C:\Users\Flex\Documents\GitHub\mobilefrontend\src\pages\beacon-detail\beacon-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_beacons__["a" /* BeaconService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], BeaconDetailPage);

//# sourceMappingURL=beacon-detail.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beacon_detail_beacon_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_scan__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, ble, scanService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.ble = ble;
        this.scanService = scanService;
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]({ enableLongStackTrace: false });
        this.scanService.subject.subscribe(function (value) {
            _this.zone.run(function () {
                _this.foundDevices = value;
            });
        });
        this.scanService.scanForBeacons();
    }
    /*
     Refresh page
   */
    HomePage.prototype.doRefresh = function (refresher) {
        this.scanService.scanForBeacons();
        setTimeout(function () {
            refresher.complete();
        }, 8000);
    };
    /*
    Utility
  */
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BeaconsPage');
    };
    /*
      Navigate to detail page and pass currently selected beacon
    */
    HomePage.prototype.goToDetails = function (beacon) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__beacon_detail_beacon_detail__["a" /* BeaconDetailPage */], { beacon: beacon });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Flex\Documents\GitHub\mobilefrontend\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title text-uppercase>Find beacons</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content class="dark" padding>\n\n  \n\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n\n          <ion-refresher-content\n\n            pullingIcon="arrow-dropdown"\n\n            pullingText="Pull to scan"\n\n            refreshingSpinner="dots"\n\n            refreshingText="Scanning...">\n\n          </ion-refresher-content>\n\n        </ion-refresher>\n\n  \n\n    <ion-list>\n\n      <button ion-item *ngFor="let beacon of foundDevices" (click)="goToDetails(beacon)">\n\n        <h2>{{ beacon?.name }}</h2>\n\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n  \n\n  \n\n  '/*ion-inline-end:"C:\Users\Flex\Documents\GitHub\mobilefrontend\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */],
        __WEBPACK_IMPORTED_MODULE_4__services_scan__["a" /* ScanService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_ble__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScanService = (function () {
    function ScanService(ble) {
        this.ble = ble;
        // TODO
        //Daarna
        //Laat nearby beacons zien in menu en sla ze op in home
        //Bepaal welke het dichtse bij zijn
        //Zorg dat scannen goed wordt aangetoond
        this.foundDevices = new Array();
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    /*
        Scan for beacons. Called on page start&page refresh
      */
    ScanService.prototype.scanForBeacons = function () {
        var _this = this;
        this.foundDevices = [];
        this.ble.scan([], 8).subscribe(function (device) {
            var adData = new Uint8Array(device.advertising);
            device.advertising = adData;
            if (device.name) {
                _this.foundDevices.push(device);
                _this.subject.next(_this.foundDevices);
            }
        });
    };
    return ScanService;
}());
ScanService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_ble__["a" /* BLE */]])
], ScanService);

//# sourceMappingURL=scan.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map