(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/ilogix/Workspace/vtiger/keytower-app/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "7TIH":
    /*!******************************************!*\
      !*** ./src/app/providers/image/image.ts ***!
      \******************************************/

    /*! exports provided: ImageProvider */

    /***/
    function TIH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageProvider", function () {
        return ImageProvider;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ImageProvider = /*#__PURE__*/function () {
        function ImageProvider() {
          _classCallCheck(this, ImageProvider);

          this.base64img = '';
        }

        _createClass(ImageProvider, [{
          key: "setImage",
          value: function setImage(img) {
            this.base64img = img;
          }
        }, {
          key: "getImage",
          value: function getImage() {
            return this.base64img;
          }
        }]);

        return ImageProvider;
      }();

      ImageProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ImageProvider);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "y2f/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "p74H");
      /* harmony import */


      var _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/google-maps/ngx */
      "zBdl");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_7__["Environment"].setEnv({
                // Api key for your server
                // (Make sure the api key should have Website restrictions for your website domain only)
                'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDmZNVDUxBxJvBByQcLZ4fOkOfgbCGaogA',
                // Api key for local development
                // (Make sure the api key should have Website restrictions for 'http://localhost' only)
                'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDmZNVDUxBxJvBByQcLZ4fOkOfgbCGaogA'
              });

              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]])], AppComponent);
      /***/
    },

    /***/
    "UyhH":
    /*!************************************************!*\
      !*** ./src/app/providers/constant/constant.ts ***!
      \************************************************/

    /*! exports provided: AppConstants */

    /***/
    function UyhH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConstants", function () {
        return AppConstants;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppConstants = /*#__PURE__*/function () {
        function AppConstants() {
          _classCallCheck(this, AppConstants);

          this.apiurl = 'https://devl06.borugroup.com/keytower71/phoneapi/';
          this.vturl = 'https://devl06.borugroup.com/keytower71/';
        }

        _createClass(AppConstants, [{
          key: "getApiUrl",
          value: function getApiUrl() {
            return this.apiurl;
          }
        }, {
          key: "getVtUrl",
          value: function getVtUrl() {
            return this.vturl;
          }
        }]);

        return AppConstants;
      }();

      AppConstants = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppConstants);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "y2f/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "p74H");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "Pn9U");
      /* harmony import */


      var _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/action-sheet/ngx */
      "Xk1G");
      /* harmony import */


      var _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/photo-library/ngx */
      "QIw3");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "gRf5");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "t8sF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var _providers_image_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./providers/image/image */
      "7TIH");
      /* harmony import */


      var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./providers/constant/constant */
      "UyhH");
      /* harmony import */


      var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/google-maps */
      "tBOM");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "U3FU");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot()],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_20__["GoogleMaps"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__["InAppBrowser"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_21__["PhotoViewer"], _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_11__["ActionSheet"], _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_12__["PhotoLibrary"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"], _providers_image_image__WEBPACK_IMPORTED_MODULE_18__["ImageProvider"], _providers_constant_constant__WEBPACK_IMPORTED_MODULE_19__["AppConstants"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet-controller_8.entry.js": ["0BR9", "common", 0],
        "./ion-action-sheet-ios.entry.js": ["bnjm", "common", 1],
        "./ion-action-sheet-md.entry.js": ["utt2", "common", 2],
        "./ion-alert-ios.entry.js": ["yaSn", "common", 3],
        "./ion-alert-md.entry.js": ["2/RY", "common", 4],
        "./ion-app_8-ios.entry.js": ["iInF", "common", 5],
        "./ion-app_8-md.entry.js": ["K9Nc", "common", 6],
        "./ion-avatar_3-ios.entry.js": ["hH1s", "common", 7],
        "./ion-avatar_3-md.entry.js": ["Jw9y", "common", 8],
        "./ion-back-button-ios.entry.js": ["ouVF", "common", 9],
        "./ion-back-button-md.entry.js": ["/joy", "common", 10],
        "./ion-backdrop-ios.entry.js": ["uJLv", 11],
        "./ion-backdrop-md.entry.js": ["fSmE", 12],
        "./ion-button_2-ios.entry.js": ["s1jK", "common", 13],
        "./ion-button_2-md.entry.js": ["Wou7", "common", 14],
        "./ion-card_5-ios.entry.js": ["qshq", "common", 15],
        "./ion-card_5-md.entry.js": ["Q1uX", "common", 16],
        "./ion-checkbox-ios.entry.js": ["059i", "common", 17],
        "./ion-checkbox-md.entry.js": ["eLfv", "common", 18],
        "./ion-chip-ios.entry.js": ["+FzG", "common", 19],
        "./ion-chip-md.entry.js": ["yRpg", "common", 20],
        "./ion-col_3.entry.js": ["/CAe", 21],
        "./ion-datetime_3-ios.entry.js": ["Z1Jy", "common", 22],
        "./ion-datetime_3-md.entry.js": ["X0Dk", "common", 23],
        "./ion-fab_3-ios.entry.js": ["wvyA", "common", 24],
        "./ion-fab_3-md.entry.js": ["NkKY", "common", 25],
        "./ion-img.entry.js": ["wHD8", 26],
        "./ion-infinite-scroll_2-ios.entry.js": ["nf6t", "common", 27],
        "./ion-infinite-scroll_2-md.entry.js": ["lg/V", "common", 28],
        "./ion-input-ios.entry.js": ["sdJS", "common", 29],
        "./ion-input-md.entry.js": ["uQUw", "common", 30],
        "./ion-item-option_3-ios.entry.js": ["Pa1g", "common", 31],
        "./ion-item-option_3-md.entry.js": ["KTnd", "common", 32],
        "./ion-item_8-ios.entry.js": ["Z51p", "common", 33],
        "./ion-item_8-md.entry.js": ["8bam", "common", 34],
        "./ion-loading-ios.entry.js": ["J3Yu", "common", 35],
        "./ion-loading-md.entry.js": ["N3W9", "common", 36],
        "./ion-menu_4-ios.entry.js": ["GEuc", "common", 37],
        "./ion-menu_4-md.entry.js": ["BHpw", "common", 38],
        "./ion-modal-ios.entry.js": ["mgaC", "common", 39],
        "./ion-modal-md.entry.js": ["EpFf", "common", 40],
        "./ion-nav_5.entry.js": ["qF1+", "common", 41],
        "./ion-popover-ios.entry.js": ["Gdks", "common", 42],
        "./ion-popover-md.entry.js": ["VgKV", "common", 43],
        "./ion-progress-bar-ios.entry.js": ["0PGG", "common", 44],
        "./ion-progress-bar-md.entry.js": ["h/Bu", "common", 45],
        "./ion-radio_2-ios.entry.js": ["5bK7", "common", 46],
        "./ion-radio_2-md.entry.js": ["pOmE", "common", 47],
        "./ion-range-ios.entry.js": ["5g9+", "common", 48],
        "./ion-range-md.entry.js": ["fD4w", "common", 49],
        "./ion-refresher_2-ios.entry.js": ["CXux", "common", 50],
        "./ion-refresher_2-md.entry.js": ["RODS", "common", 51],
        "./ion-reorder_2-ios.entry.js": ["IdzL", "common", 52],
        "./ion-reorder_2-md.entry.js": ["Ftzj", "common", 53],
        "./ion-ripple-effect.entry.js": ["STjf", 54],
        "./ion-route_4.entry.js": ["k5eQ", "common", 55],
        "./ion-searchbar-ios.entry.js": ["l0q3", "common", 56],
        "./ion-searchbar-md.entry.js": ["mLlG", "common", 57],
        "./ion-segment_2-ios.entry.js": ["Iymp", "common", 58],
        "./ion-segment_2-md.entry.js": ["3msy", "common", 59],
        "./ion-select_3-ios.entry.js": ["rYLK", "common", 60],
        "./ion-select_3-md.entry.js": ["WOXB", "common", 61],
        "./ion-slide_2-ios.entry.js": ["F/Xn", 62],
        "./ion-slide_2-md.entry.js": ["k8us", 63],
        "./ion-spinner.entry.js": ["nI0H", "common", 64],
        "./ion-split-pane-ios.entry.js": ["edcM", 65],
        "./ion-split-pane-md.entry.js": ["RyPD", 66],
        "./ion-tab-bar_2-ios.entry.js": ["DP4G", "common", 67],
        "./ion-tab-bar_2-md.entry.js": ["gaXT", "common", 68],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 69],
        "./ion-text.entry.js": ["ISmu", "common", 70],
        "./ion-textarea-ios.entry.js": ["xNZy", "common", 71],
        "./ion-textarea-md.entry.js": ["p1XJ", "common", 72],
        "./ion-toast-ios.entry.js": ["XGfm", "common", 73],
        "./ion-toast-md.entry.js": ["Y/uG", "common", 74],
        "./ion-toggle-ios.entry.js": ["WbT0", "common", 75],
        "./ion-toggle-md.entry.js": ["upP9", "common", 76],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 77]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
      }, {
        path: 'property-images',
        loadChildren: './property-images/property-images.module#PropertyImagesPageModule'
      }, {
        path: 'services/detail/:serviceid/gallery',
        loadChildren: './gallery/gallery.module#GalleryPageModule'
      }, {
        path: 'services',
        loadChildren: './services/services.module#ServicesPageModule'
      }, {
        path: 'ratings',
        loadChildren: './ratings/ratings.module#RatingsPageModule'
      }, {
        path: 'services/detail/:serviceid',
        loadChildren: './services/detail/detail.module#DetailPageModule'
      }, {
        path: 'underreview',
        loadChildren: './underreview/underreview.module#UnderreviewPageModule'
      }, {
        path: 'services/jha',
        loadChildren: './services/jha/jha.module#JhaPageModule'
      }, {
        path: 'services/jha-hospital',
        loadChildren: './services/jha-hospital/jha-hospital.module#JhaHospitalPageModule'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports, __webpack_require__) {
      var map = {
        "./gallery/gallery.module": ["3ros", "gallery-gallery-module"],
        "./login/login.module": ["X3zk", "login-login-module"],
        "./property-images/property-images.module": ["xkDA", "property-images-property-images-module"],
        "./ratings/ratings.module": ["u8aK", "ratings-ratings-module"],
        "./services/detail/detail.module": ["Misv", "services-detail-detail-module"],
        "./services/jha-hospital/jha-hospital.module": ["YhlJ", "services-jha-hospital-jha-hospital-module"],
        "./services/jha/jha.module": ["Ybjz", "services-jha-jha-module"],
        "./services/services.module": ["334H", "services-services-module"],
        "./underreview/underreview.module": ["9Q90", "underreview-underreview-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "zn8P";
      module.exports = webpackAsyncContext;
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map