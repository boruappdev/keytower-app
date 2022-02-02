(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-jha-jha-module"],{

/***/ "+3mN":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/jha/jha.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>JHA/JSA</ion-title>\n    <a href=\"services/detail/{{serviceid}}\"> <ion-icon name=\"close\" size=\"large\" style=\"float: right;\" ></ion-icon></a>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"map_canvas\"></div>\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\"><ion-label>Lat</ion-label></ion-col>\n        <ion-col>\n          <ion-input type=\"text\" name=\"lat\" value=\"{{lat}}\" (ionInput)=\"addUpdate($event)\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\"><ion-label>Long</ion-label></ion-col>\n        <ion-col>\n          <ion-input type=\"text\" name=\"long\" value=\"{{long}}\" (ionInput)=\"addUpdate($event)\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\"><ion-label>Job Name</ion-label></ion-col>\n        <ion-col>\n          <ion-input type=\"text\" name=\"job_name\" value=\"{{job_name}}\" (ionInput)=\"addUpdate($event)\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br>\n    <ion-button (click)=\"gotoJHAHospital()\" >NEXT </ion-button>\n  </div>\n <!-- <div style=\"width : 100% ;height: 60%\">\n    <ion-list>\n      <ion-item *ngFor=\"let place of places\">\n        <p></p>\n      </ion-item>\n    </ion-list>\n  </div>-->\n</ion-content>\n");

/***/ }),

/***/ "TijV":
/*!******************************************!*\
  !*** ./src/app/services/jha/jha.page.ts ***!
  \******************************************/
/*! exports provided: JhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JhaPage", function() { return JhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_jha_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./jha.page.html */ "+3mN");
/* harmony import */ var _jha_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jha.page.scss */ "atl5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/constant/constant */ "UyhH");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-maps */ "tBOM");









let JhaPage = class JhaPage {
    constructor(modalController, httpClient, platform, toastController, router, appConst, route) {
        this.modalController = modalController;
        this.httpClient = httpClient;
        this.platform = platform;
        this.toastController = toastController;
        this.router = router;
        this.appConst = appConst;
        this.route = route;
        this.data = {};
        this.apiurl = this.appConst.getApiUrl();
    }
    /*async ngOnInit() {
      this.route.queryParams
          .subscribe(params => {
              console.log(params);
              for(let key in params){
                console.log(key);
                if(params[key] != undefined){
                    this.data[key] = params[key];
                }
              }
              this.lat = params.lat;
              this.long = params.long;
              this.serviceid = params.serviceid;
              this.job_name = params.job_name;
              this.serviceid = params.serviceid;
              this.loadMap(this.lat, this.long);
          });
  }*/
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.queryParams
                .subscribe(params => {
                console.log(params);
                for (let key in params) {
                    console.log(key);
                    if (params[key] != undefined) {
                        this.data[key] = params[key];
                    }
                }
                this.lat = params.lat;
                this.long = params.long;
                this.serviceid = params.serviceid;
                this.job_name = params.job_name;
                this.serviceid = params.serviceid;
            });
            // Since ngOnInit() is executed before `deviceready` event,
            // you have to wait the event.
            yield this.platform.ready();
            yield this.loadMap();
        });
    }
    loadMap() {
        console.log('load Map');
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMaps"].create('map_canvas', {
            camera: {
                target: {
                    lat: this.lat,
                    lng: this.long
                },
                zoom: 18,
                tilt: 30
            }
        });
    }
    /*addMap(lat, long) {
        console.log(lat);
        console.log(long);
        let latLng = new google.maps.LatLng(lat,long);
        console.log(latLng);
        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        /!*this.getHospital(latLng).then((results : Array<any>)=>{
            this.places = results;
            for(let i = 0 ;i < results.length ; i++) {
                this.createMarker(results[i]);
            }
        },(status)=>console.log(status));*!/

        this.addMarker();

    }
    addMarker() {

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });

        let content = "<p>This is your current position !</p>";
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });

        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });

    }
    getHospital(latLng) {
        var service = new google.maps.places.PlacesService(this.map);
        let request = {
            location : latLng,
            radius : 8047 ,
            types: ["hospital"]
        };
        return new Promise((resolve,reject)=>{
            service.nearbySearch(request,function(results,status){
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    resolve(results);
                } else {
                    reject(status);
                }

            });
        });

    }
    createMarker(place) {
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: place.geometry.location
        });
    }*/
    gotoJHAHospital() {
        this.router.navigate(['services/jha-hospital'], { queryParams: { serviceid: this.serviceid, lat: this.data["lat"], long: this.data["long"], job_name: this.data["job_name"] } });
    }
    addUpdate(event) {
        var fieldname = event.target.name;
        var fieldvalue = event.target.value;
        if (event.target.tagName == 'ION-INPUT') {
            fieldvalue = event.target.textContent + event.target.value;
        }
        this.data[fieldname] = fieldvalue;
        console.log(this.data);
    }
};
JhaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _providers_constant_constant__WEBPACK_IMPORTED_MODULE_6__["AppConstants"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
JhaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-jha',
        template: _raw_loader_jha_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_jha_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _providers_constant_constant__WEBPACK_IMPORTED_MODULE_6__["AppConstants"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], JhaPage);



/***/ }),

/***/ "Ybjz":
/*!********************************************!*\
  !*** ./src/app/services/jha/jha.module.ts ***!
  \********************************************/
/*! exports provided: JhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JhaPageModule", function() { return JhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _jha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jha.page */ "TijV");







const routes = [
    {
        path: '',
        component: _jha_page__WEBPACK_IMPORTED_MODULE_6__["JhaPage"]
    }
];
let JhaPageModule = class JhaPageModule {
};
JhaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_jha_page__WEBPACK_IMPORTED_MODULE_6__["JhaPage"]]
    })
], JhaPageModule);



/***/ }),

/***/ "atl5":
/*!********************************************!*\
  !*** ./src/app/services/jha/jha.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  border-bottom: 1px solid #ccc;\n}\n\n#map_canvas {\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2poYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGIiwiZmlsZSI6ImpoYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuI21hcF9jYW52YXN7XG4gIGhlaWdodDogOTAlO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=services-jha-jha-module-es2015.js.map