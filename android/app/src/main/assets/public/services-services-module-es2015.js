(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "334H":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function() { return ServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services.page */ "O7F2");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.page */ "3JN5");








const routes = [
    {
        path: '',
        component: _services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]
    }
];
let ServicesPageModule = class ServicesPageModule {
};
ServicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"], _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfileModalPage"]],
        entryComponents: [_profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfileModalPage"]],
    })
], ServicesPageModule);



/***/ }),

/***/ "3JN5":
/*!**************************************************!*\
  !*** ./src/app/services/profile/profile.page.ts ***!
  \**************************************************/
/*! exports provided: ProfileModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModalPage", function() { return ProfileModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "PCc1");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "h6vc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "gRf5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _providers_image_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/image/image */ "7TIH");
/* harmony import */ var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/constant/constant */ "UyhH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "e8h1");













let ProfileModalPage = class ProfileModalPage {
    constructor(modalController, storage, router, navParams, httpClient, pickerCtrl, transfer, formBuilder, toastController, imgpov, appConst, loadingController) {
        this.modalController = modalController;
        this.storage = storage;
        this.router = router;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.pickerCtrl = pickerCtrl;
        this.transfer = transfer;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.imgpov = imgpov;
        this.appConst = appConst;
        this.loadingController = loadingController;
        this.has_profile_picture = false;
        //this.imageData = this.imgpov.getImage();
        this.apiurl = this.appConst.getApiUrl();
    }
    ngOnInit() {
        this.user_id = this.navParams.data.user_id;
        this.userinfo = this.navParams.data.userinfo;
        this.profile_picture = this.navParams.data.userinfo.profile_picture;
        if (this.navParams.data.userinfo.imagename !== "") {
            this.has_profile_picture = true;
        }
        else {
            this.has_profile_picture = false;
        }
        console.log('nav params', this.navParams.data.userinfo);
    }
    showLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Loading ...'
            });
            return yield this.loading.present();
        });
    }
    hideLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            setTimeout(() => {
                if (this.loading != undefined) {
                    this.loading.dismiss();
                }
            }, 1000);
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
    sendUpdates() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updatefields;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            this.showLoading();
            this.httpClient.post(this.apiurl + "updateProfile.php", this.updatefields, {
                headers: headers,
                observe: 'response'
            })
                .subscribe(data => {
                this.hideLoading();
                //console.log(data['_body']);
                if (data['body']['success'] == true) {
                    this.presentToastPrimary('Profile updated \n');
                    this.closeModal();
                }
                else {
                    console.log('update failed');
                    this.presentToast('Profile update failed! Please try again \n');
                }
            }, error => {
                this.hideLoading();
                //console.log(error);
                //console.log(error.message);
                //console.error(error.message);
                this.presentToast("Profile update failed! Please try again \n" + error.message);
            });
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var toast = yield this.toastController.create({
                message: message,
                duration: 3500,
                position: "bottom",
                color: "danger"
            });
            toast.present();
        });
    }
    presentToastPrimary(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                position: "bottom",
                color: "primary"
            });
            toast.present();
        });
    }
    logout() {
        console.log('logout clicked');
        this.storage.set("userdata", null);
        this.closeModal();
        this.router.navigateByUrl('/login');
    }
    getCurrentTheme() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var current_theme = this.storage.get('userdata').then((userdata) => {
                if (userdata && userdata.length !== 0) {
                    //current_theme = userdata.theme.toLowerCase();
                    return userdata.theme.toLowerCase();
                }
                else {
                    return false;
                }
            });
            return current_theme;
        });
    }
    updateCurrentTheme(theme) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var userjson;
            yield this.isLogged().then(result => {
                if (!(result == false)) {
                    userjson = result;
                }
            });
            //console.log('from set current theme', userjson.theme);
            userjson['theme'] = theme.charAt(0).toUpperCase() + theme.slice(1);
            //console.log('from set current theme', userjson);
            this.storage.set('userdata', userjson);
            this.userinfo.theme = theme.charAt(0).toUpperCase() + theme.slice(1);
            console.log('updated theme on storage memory');
        });
    }
    switchTheme() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var current_theme;
            yield this.getCurrentTheme().then((theme) => {
                console.log("the current theme is", theme);
                current_theme = theme;
            });
            var theme_switcher = {
                "dark": "light",
                "light": "dark"
            };
            var destination_theme = theme_switcher[current_theme];
            console.log('switching theme from:', current_theme);
            console.log('switching theme to:', destination_theme);
            document.body.classList.toggle(destination_theme, true);
            document.body.classList.toggle(current_theme, false);
            this.updateCurrentTheme(destination_theme);
            console.log('theme switched');
        });
    }
    isLogged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var log_status = this.storage.get('userdata').then((userdata) => {
                if (userdata && userdata.length !== 0) {
                    return userdata;
                }
                else {
                    return false;
                }
            });
            return log_status;
        });
    }
    loadTheme(theme) {
        console.log('loading theme', theme);
        document.body.classList.toggle(theme, true);
        var theme_switcher = {
            "dark": "light",
            "light": "dark"
        };
        document.body.classList.toggle(theme_switcher[theme], false); //switch off previous theme if there was one and prefer the loaded theme.
        console.log('turning off previous theme', theme_switcher[theme]);
    }
};
ProfileModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _providers_image_image__WEBPACK_IMPORTED_MODULE_8__["ImageProvider"] },
    { type: _providers_constant_constant__WEBPACK_IMPORTED_MODULE_9__["AppConstants"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ProfileModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _providers_image_image__WEBPACK_IMPORTED_MODULE_8__["ImageProvider"],
        _providers_constant_constant__WEBPACK_IMPORTED_MODULE_9__["AppConstants"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], ProfileModalPage);



/***/ }),

/***/ "EV+0":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button type=\"button\" text=\"Profile\" (click)=\"openSettings()\">\n        <ion-text>Profile</ion-text>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Work Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\">\n\n      <ion-item-divider sticky=\"true\">\n        <ion-label>\n          Today ({{count_weeklyServices}})\n        </ion-label>\n      </ion-item-divider>\n\n    <!-- <ion-list-header>\n      <ion-label>Today's Open Services</ion-label>\n    </ion-list-header> -->\n    <p class=\"ion-padding\" *ngIf=\"count_weeklyServices == 0\">No work orders available for this section</p>\n    <div  *ngIf=\"count_weeklyServices > 0\">\n    <ion-item (click)=\"goToDetail(service.workorderid)\" detail *ngFor=\"let service of weeklyServices\">\n      <ion-avatar><ion-icon size=\"large\" name=\"flash\"></ion-icon></ion-avatar>\n      <ion-label>\n        <h2>{{service[0]}}</h2>\n        <h2>{{service.towersites}}</h2>\n        <p>{{service.longdate}}</p>\n        <div class=\"service-details-div\">\n          <ion-grid class=\"service-details-grid\">\n            <ion-row>\n              <ion-col><p class=\"st\">Start Time</p></ion-col>\n              <ion-col><p class=\"et\">End Time</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><p>{{service.time_start}}</p></ion-col>\n              <ion-col><p>{{service.time_end}}</p></ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-label>\n      <ion-badge slot=\"end\" class=\"status\" color=\"white\"\n      data-color=\"{{(service?.wostatus == 'Cancelled' || service?.wostatus == 'Declined') ? 'danger' : 'warning'}}\"\n      [ngStyle]=\"{'background-color': service?.wostatus == 'Cancelled' || service?.wostatus == 'Declined' ? 'var(--ion-color-danger)' :\n      service?.wostatus == 'Under Review' ? 'var(--ion-color-warning)' :\n      service?.wostatus == 'Completed' ? 'var(--ion-color-medium)' : 'var(--ion-color-success)', 'border-color':service?.wostatus == 'Cancelled' || service?.wostatus == 'Declined' ? 'var(--ion-color-danger)' : service?.wostatus == 'Under Review' ? 'var(--ion-color-warning)' : 'var(--ion-color-success)' }\"\n      >\n        <ion-text class=\"status-text\">{{service.wostatus}}</ion-text>\n      </ion-badge>\n    </ion-item>\n    </div>\n\n    <ion-item-divider sticky=\"true\">\n        <ion-label>\n          Upcoming ({{count_futureServices}})\n        </ion-label>\n      </ion-item-divider>\n\n    <!-- <ion-list-header sticky=\"true\" lines=\"none\">\n      <ion-label>Future Services</ion-label>\n    </ion-list-header> -->\n\n      <ion-item (click)=\"goToDetail(service.workorderid)\" detail *ngFor=\"let service of futureServices\">\n        <ion-avatar><ion-icon size=\"large\" name=\"flash\"></ion-icon></ion-avatar>\n        <ion-label>\n          <h2>{{service[0]}}</h2>\n          <h2>{{service.towersites}}</h2>\n          <p>{{service.longdate}}</p>\n          <div class=\"service-details-div\">\n            <ion-grid class=\"service-details-grid\">\n              <ion-row>\n                <ion-col><p class=\"st\">Start Time</p></ion-col>\n                <ion-col><p class=\"et\">End Time</p></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col><p>{{service.time_start}}</p></ion-col>\n                <ion-col><p>{{service.time_end}}</p></ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-label>\n        <ion-badge slot=\"end\" class=\"status\" color=\"medium\"\n        data-color=\"{{(service?.wostatus == 'Cancelled' || service?.wostatus == 'Declined') ? 'danger' : 'success'}}\"\n        [ngStyle]=\"{'background-color': service?.wostatus == 'Cancelled' || service?.wostatus == 'Declined' ? 'var(--ion-color-danger)' :\n      service?.wostatus == 'Under Review' ? 'var(--ion-color-warning)' :\n      service?.wostatus == 'Completed' ? 'var(--ion-color-medium)' : 'var(--ion-color-success)', 'border-color':service?.wostatus == 'Cancelled' || service?.wostatus == 'Declined' ? 'var(--ion-color-danger)' : service?.wostatus == 'Under Review' ? 'var(--ion-color-warning)' : 'var(--ion-color-success)' }\"\n        >\n          <ion-text class=\"status-text\">{{service.wostatus}}</ion-text>\n        </ion-badge>\n      </ion-item>\n    <p class=\"ion-padding\" *ngIf=\"count_futureServices == 0\">No work orders available for this section</p>\n\n\n    <ion-item-divider sticky=\"true\">\n      <ion-label>\n        Completed ({{count_completedServices}})\n      </ion-label>\n    </ion-item-divider>\n\n    <!-- <ion-list-header>\n      <ion-label>All Completed Services</ion-label>\n    </ion-list-header> -->\n\n    <ion-item (click)=\"goToDetail(service.workorderid)\" detail *ngFor=\"let service of completedServices\">\n      <ion-avatar><ion-icon size=\"large\" name=\"document\"></ion-icon></ion-avatar>\n      <ion-label>\n        <h2>{{service[0]}}</h2>\n        <h2>{{service.towersites}}</h2>\n        <p>{{service.longdate}}</p>\n        <div class=\"service-details-div\">\n          <ion-grid class=\"service-details-grid\">\n            <ion-row>\n              <ion-col><p class=\"st\">Start Time</p></ion-col>\n              <ion-col><p class=\"et\">End Time</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><p>{{service.time_start}}</p></ion-col>\n              <ion-col><p>{{service.time_end}}</p></ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-label>\n      <ion-badge size=\"large\" slot=\"end\" color=\"white\" data-color=\"medium\" class=\"status\"\n      [ngStyle]=\"{'background-color': 'var(--ion-color-medium)' , 'border-color': 'var(--ion-color-medium)' }\">\n        <ion-text class=\"status-text\">{{service.wostatus}}</ion-text>\n      </ion-badge>\n    </ion-item>\n    <p class=\"ion-padding\" *ngIf=\"count_completedServices == 0\">No work orders available for this section</p>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "O7F2":
/*!*******************************************!*\
  !*** ./src/app/services/services.page.ts ***!
  \*******************************************/
/*! exports provided: ServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return ServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_services_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./services.page.html */ "EV+0");
/* harmony import */ var _services_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.page.scss */ "odIF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/constant/constant */ "UyhH");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.page */ "3JN5");












let ServicesPage = class ServicesPage {
    constructor(httpClient, navCtrl, router, storage, activatedRoute, appConst, modalCtrl, locale, loadingController) {
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
        this.router = router;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.appConst = appConst;
        this.modalCtrl = modalCtrl;
        this.locale = locale;
        this.loadingController = loadingController;
        this.count_weeklyServices = 0;
        this.count_futureServices = 0;
        this.count_completedServices = 0;
        this.service = {
            id: '',
            tower: '',
            tos: '',
            desc: '',
            longdate: '',
            startTime: '',
            endTime: '',
            status: '',
        };
        this.randomPeople = ['Simmons - MOSPG2014', 'Marysville - ARLIT2062', 'Coldspring - TXHOU2041', 'Yellow Rock - KYLEX2020', 'Medora - ILSPG2027', 'Lawtell - LALWL2000', 'HWY 584 (FTCA) - LAMON2002', 'HWY 120 (FTCA) - LASRV2006', 'York - ALBRH2003', 'Jorge Auto Sales - TXLAR2007', 'Sawmill - ARLIT2065', 'Saxton - PAPIT2008', 'Rockwood - PAPIT2006', 'Mellen - WIWAU2029', 'Calvin - LAMON2113', 'Funston - LARSV2021'];
        this.typesOfServices = ['Radio Implementation Services', 'Labor', 'Mount Installation', 'Power Installation', 'Structural Analysis'];
        this.statuses = ['Attention Required', 'Declined', 'Complete', 'Cancelled', 'Closed', 'Open'];
        this.apiurl = this.appConst.getApiUrl();
    }
    showLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Loading ...'
            });
            return yield this.loading.present();
        });
    }
    hideLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            setTimeout(() => {
                if (this.loading != undefined) {
                    this.loading.dismiss();
                }
            }, 1000);
        });
    }
    loadRandomServices(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var limit = 16;
            var init = 0;
            if (type == 'today') {
                var limit = 5;
            }
            else if (type == 'future') {
                var limit = 10;
                init = 5;
            }
            else if (type == 'completed') {
                init = 0;
            }
            var services = [];
            for (var i = init; i < limit; i += 1) {
                var date = new Date();
                var startDay = Math.floor(Math.random() * 90) - 45;
                var endDay = Math.floor(Math.random() * 2) + startDay;
                var startTime;
                var endTime;
                var desc;
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                var randomTOS = i % this.typesOfServices.length;
                var randomStatus = i % this.statuses.length;
                let start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(startTime, 'shortTime', this.locale);
                let end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(endTime, 'shortTime', this.locale);
                let longdate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(startTime, 'medium', this.locale);
                var availableStatuses = this.statuses;
                var status = this.statuses[randomStatus];
                if (type == 'today') {
                    var availableStatuses = ['Open', 'Cancelled', 'Attention Required'];
                }
                if (type == 'future') {
                    var availableStatuses = ['Cancelled', 'Open', 'Declined',];
                }
                var status = availableStatuses[i % availableStatuses.length];
                if (type == 'completed') {
                    var status = 'Completed';
                }
                services.push({
                    id: i,
                    tower: this.randomPeople[i],
                    tos: this.typesOfServices[randomTOS],
                    desc: '',
                    longdate: longdate,
                    startTime: start,
                    endTime: end,
                    status: status,
                });
            }
            return services;
        });
    }
    goToDetail(serviceid) {
        this.router.navigateByUrl(`/services/detail/${serviceid}`, { state: {} });
    }
    logout() {
        console.log('logout clicked');
        this.storage.set("userdata", null);
        this.router.navigateByUrl('/login');
    }
    getCurrentTheme() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var current_theme = this.storage.get('userdata').then((userdata) => {
                if (userdata && userdata.length !== 0) {
                    //current_theme = userdata.theme.toLowerCase();
                    return userdata.theme.toLowerCase();
                }
                else {
                    return false;
                }
            });
            return current_theme;
        });
    }
    updateCurrentTheme(theme) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var userjson;
            yield this.isLogged().then(result => {
                if (!(result == false)) {
                    userjson = result;
                }
            });
            //console.log('from set current theme', userjson.theme);
            userjson['theme'] = theme.charAt(0).toUpperCase() + theme.slice(1);
            //console.log('from set current theme', userjson);
            this.storage.set('userdata', userjson);
            this.userinfo.theme = theme.charAt(0).toUpperCase() + theme.slice(1);
            console.log('updated theme on storage memory');
        });
    }
    switchTheme() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var current_theme;
            yield this.getCurrentTheme().then((theme) => {
                console.log("the current theme is", theme);
                current_theme = theme;
            });
            var theme_switcher = {
                "dark": "light",
                "light": "dark"
            };
            var destination_theme = theme_switcher[current_theme];
            console.log('switching theme from:', current_theme);
            console.log('switching theme to:', destination_theme);
            document.body.classList.toggle(destination_theme, true);
            document.body.classList.toggle(current_theme, false);
            this.updateCurrentTheme(destination_theme);
            console.log('theme switched');
        });
    }
    isLogged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var log_status = this.storage.get('userdata').then((userdata) => {
                if (userdata && userdata.length !== 0) {
                    return userdata;
                }
                else {
                    return false;
                }
            });
            return log_status;
        });
    }
    loadTheme(theme) {
        console.log('loading theme', theme);
        document.body.classList.toggle(theme, true);
        var theme_switcher = {
            "dark": "light",
            "light": "dark"
        };
        document.body.classList.toggle(theme_switcher[theme], false); //switch off previous theme if there was one and prefer the loaded theme.
        console.log('turning off previous theme', theme_switcher[theme]);
    }
    getWorkOrders(user_id, type) {
        var logged_user = {
            user_id: user_id,
            type: type
        };
        console.log('fetching records for', logged_user);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        //this.showLoading();
        this.httpClient.post(this.apiurl + "getWorkOrders.php", logged_user, { headers: headers, observe: 'response' })
            .subscribe(data => {
            //this.hideLoading();
            console.log(data['body']);
            var success = data['body']['success'];
            console.log('services page: login response was', success);
            if (success == true) {
                var workorders = data['body']['data'];
                console.log('services page: workorders', workorders);
                if (data['body']['count'] > 0) {
                    workorders.forEach(workorder => {
                        workorder['longdate'] = workorder['date_start'] + ' ' + workorder['time_start'];
                    });
                }
                if (type == 'weekly') {
                    this.weeklyServices = workorders;
                    this.count_weeklyServices = data['body']['count'];
                }
                else if (type == 'future') {
                    this.futureServices = workorders;
                    this.count_futureServices = data['body']['count'];
                }
                else if (type == 'completed') {
                    this.completedServices = workorders;
                    this.count_completedServices = data['body']['count'];
                }
            }
            else {
                console.log('failed to fetch records');
            }
        }, error => {
            //this.hideLoading();
            //console.log(error);
            //console.log(error.message);
            //console.error(error.message);
            console.log('failed to fetch records');
        });
    }
    openSettings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('opening settings page for user id', this.user_id);
            const modal = yield this.modalCtrl.create({
                component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_10__["ProfileModalPage"],
                componentProps: {
                    "user_id": this.user_id,
                    "userinfo": this.userinfo,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((userData) => {
            if (userData.length !== 0) {
                this.userinfo = userData;
                //console.log('param user data:', userData);
                try {
                    this.loadTheme(userData.theme.toLowerCase());
                }
                catch (_a) {
                    console.log('couldnt load theme');
                }
                console.log('param user data length:', userData.length);
                if (userData.length == undefined) {
                    console.log('nothing in params, so loading from storage');
                    this.isLogged().then(result => {
                        if (!(result == false)) {
                            //console.log('loading storage data (within param route function)', result);
                            this.userinfo = result;
                            this.loadTheme(result.theme.toLowerCase());
                            this.getWorkOrders(this.userinfo.id, 'weekly');
                            this.getWorkOrders(this.userinfo.id, 'future');
                            this.getWorkOrders(this.userinfo.id, 'completed');
                            this.user_id = this.userinfo.id;
                        }
                        else {
                            console.log('nothing in storage, going back to login');
                            this.logout();
                        }
                    });
                }
            }
        });
        //this.loadRandomServices('today').then((result) => { this.todayServices= result; });
        // this.loadRandomServices('future').then((result) => { this.futureServices= result; });
        // this.loadRandomServices('completed').then((result) => { this.completedServices= result; });
    }
};
ServicesPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _providers_constant_constant__WEBPACK_IMPORTED_MODULE_9__["AppConstants"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
ServicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-services',
        template: _raw_loader_services_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_services_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _providers_constant_constant__WEBPACK_IMPORTED_MODULE_9__["AppConstants"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], String, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], ServicesPage);



/***/ }),

/***/ "PCc1":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/profile/profile.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar text-center>\n        <ion-title>Profile</ion-title>\n        <ion-icon name=\"close\" (click)=\"closeModal()\" size=\"large\"></ion-icon>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-item lines=\"none\" >\n            <ion-avatar *ngIf=\"has_profile_picture == true\">\n                <img src=\"{{profile_picture}}\">  \n            </ion-avatar>\n        <div *ngIf=\"has_profile_picture == true\">\n            &nbsp;&nbsp;   \n        </div> \n        <ion-text>Hello, <b>{{userinfo?.first_name}}</b>!</ion-text>\n    </ion-item>\n    <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">USER NAME</ion-label>\n        <ion-text>{{userinfo?.user_name}}</ion-text>\n    </ion-item>\n    <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">FULL NAME</ion-label>\n        <ion-text value=\"\">{{userinfo?.first_name}} {{userinfo?.last_name}}</ion-text>\n    </ion-item>\n    <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">EMAIL</ion-label>\n        <ion-text value=\"\">{{userinfo?.email1}}</ion-text>\n    </ion-item>\n    <ion-item lines=\"none\">\n        <br>\n        <ion-label position=\"stacked\">\n            CURRENT THEME (TAP TO CHANGE)\n        </ion-label>\n        <ion-button id=\"themecolor\" *ngIf=\"userinfo?.theme=='Dark'\" type=\"button\" size=\"default\" color=\"dark\" (click)=\"switchTheme()\"><ion-icon name=\"color-palette\"></ion-icon>&nbsp; {{userinfo.theme}}</ion-button>\n        <ion-button id=\"themecolor\" *ngIf=\"userinfo?.theme=='Light'\" type=\"button\" size=\"default\" color=\"dark\" (click)=\"switchTheme()\"><ion-icon name=\"color-palette\"></ion-icon>&nbsp; {{userinfo.theme}}</ion-button>\n        <!-- <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-align-items-center ion-justify-content-center\" >\n            <ion-col class=\"padding-left-none\" >\n                <ion-label position=\"stacked\">Current Theme <br/> (Tap to change)</ion-label> \n            </ion-col>\n            <ion-col>\n                <ion-button id=\"themecolor\" *ngIf=\"userinfo?.theme=='Dark'\" type=\"button\" size=\"default\" color=\"dark\" (click)=\"switchTheme()\"><ion-icon name=\"color-palette\"></ion-icon>&nbsp; {{userinfo.theme}}</ion-button>\n                <ion-button id=\"themecolor\" *ngIf=\"userinfo?.theme=='Light'\" type=\"button\" size=\"default\" color=\"dark\" (click)=\"switchTheme()\"><ion-icon name=\"color-palette\"></ion-icon>&nbsp; {{userinfo.theme}}</ion-button>\n            </ion-col>          \n            </ion-row>\n            <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n            <ion-col class=\"padding-left-none\">\n            </ion-col>\n            <ion-col>\n                \n            </ion-col>\n            </ion-row>\n        </ion-grid> -->\n        <br>\n    </ion-item>\n    <br><br><br><br>\n    \n    <ion-button (click)=\"logout()\" color=\"danger\" routerDirection=\"root\" size=\"default\"><ion-icon name=\"log-out\"></ion-icon> &nbsp; Logout</ion-button>\n    \n</ion-content>");

/***/ }),

/***/ "h6vc":
/*!****************************************************!*\
  !*** ./src/app/services/profile/profile.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-header {\n  padding-bottom: 0px !important;\n}\n\nion-card-content {\n  padding-top: 10px !important;\n}\n\nion-input input.native-input {\n  border: 1px solid #ccc !important;\n  padding-left: 20px !important;\n  padding-right: 20px !important;\n}\n\nion-toolbar ion-icon[name=close] {\n  float: right;\n  cursor: pointer;\n}\n\n.title-input {\n  background-color: var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUFDRjs7QUFDQTtFQUNFLDRCQUFBO0FBRUY7O0FBQUE7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSw4Q0FBQTtBQUlGIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVye1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC1jb250ZW50e1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWlucHV0IGlucHV0Lm5hdGl2ZS1pbnB1dHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6MjBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciBpb24taWNvbltuYW1lPVwiY2xvc2VcIl17XG4gIGZsb2F0OiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGUtaW5wdXR7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59Il19 */");

/***/ }),

/***/ "odIF":
/*!*********************************************!*\
  !*** ./src/app/services/services.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".service-details-grid {\n  --ion-grid-padding: 1px;\n}\n\nion-col > p.st, ion-col > p.et {\n  color: grey;\n}\n\nion-note.status {\n  border: 1px solid;\n  border-radius: 50px;\n  padding: 10px;\n  color: white;\n  --padding: 10px;\n  --padding-bottom: 10px;\n  padding-bottom: 10px;\n}\n\nion-badge.status {\n  padding: 10px;\n  border-radius: 50px;\n}\n\nion-text.status-text {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHVCQUFBO0FBRko7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtBQUFKIiwiZmlsZSI6InNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlLWRldGFpbHMtZGl2e1xuXG59XG4uc2VydmljZS1kZXRhaWxzLWdyaWR7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAxcHg7XG59XG5pb24tY29sID4gcC5zdCwgaW9uLWNvbCA+IHAuZXQge1xuICAgIGNvbG9yOiBncmV5O1xufVxuaW9uLW5vdGUuc3RhdHVze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLS1wYWRkaW5nOiAxMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1iYWRnZS5zdGF0dXN7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5pb24tdGV4dC5zdGF0dXMtdGV4dHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=services-services-module-es2015.js.map