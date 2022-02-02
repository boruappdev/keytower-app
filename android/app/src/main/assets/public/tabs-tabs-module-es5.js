(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "AHrv":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function AHrv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n<!--     <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button> -->\n\n    <ion-tab-button tab=\"services\">\n      <ion-icon name=\"hammer\"></ion-icon>\n      <ion-label>Work Orders</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"underreview\">\n      <ion-icon name=\"alert\"></ion-icon>\n      <ion-label>Under Review</ion-label>\n      <ion-badge *ngIf=\"underreview > 0\" color=\"danger\">{{underreview}}</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Calendar</ion-label>\n    </ion-tab-button>\n    <!-- <ion-tab-button tab=\"ratings\">\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-label>Ratings</ion-label>\n    </ion-tab-button> -->\n  </ion-tab-bar>\n\n</ion-tabs>\n";
      /***/
    },

    /***/
    "Hl76":
    /*!********************************************!*\
      !*** ./src/app/tabs/tabs.router.module.ts ***!
      \********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function Hl76(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'tab1',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | tab1-tab1-module */
              "tab1-tab1-module").then(__webpack_require__.bind(null,
              /*! ../tab1/tab1.module */
              "tmrb")).then(function (m) {
                return m.Tab1PageModule;
              });
            }
          }]
        }, {
          path: 'tab2',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | tab2-tab2-module */
              "tab2-tab2-module").then(__webpack_require__.bind(null,
              /*! ../tab2/tab2.module */
              "TUkU")).then(function (m) {
                return m.Tab2PageModule;
              });
            }
          }]
        }, {
          path: 'tab3',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | tab3-tab3-module */
              "tab3-tab3-module").then(__webpack_require__.bind(null,
              /*! ../tab3/tab3.module */
              "k+ul")).then(function (m) {
                return m.Tab3PageModule;
              });
            }
          }]
        }, {
          path: 'services',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | services-services-module */
              "services-services-module").then(__webpack_require__.bind(null,
              /*! ../services/services.module */
              "334H")).then(function (m) {
                return m.ServicesPageModule;
              });
            }
          }]
        }, {
          path: 'ratings',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | ratings-ratings-module */
              "ratings-ratings-module").then(__webpack_require__.bind(null,
              /*! ../ratings/ratings.module */
              "u8aK")).then(function (m) {
                return m.RatingsPageModule;
              });
            }
          }]
        }, {
          path: 'underreview',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | underreview-underreview-module */
              "underreview-underreview-module").then(__webpack_require__.bind(null,
              /*! ../underreview/underreview.module */
              "9Q90")).then(function (m) {
                return m.UnderreviewPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/login',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "MJr+":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function MJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "AHrv");
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.page.scss */
      "PkIa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../providers/constant/constant */
      "UyhH");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(httpClient, navCtrl, router, storage, activatedRoute, appConst, modalCtrl, loadingController) {
          _classCallCheck(this, TabsPage);

          this.httpClient = httpClient;
          this.navCtrl = navCtrl;
          this.router = router;
          this.storage = storage;
          this.activatedRoute = activatedRoute;
          this.appConst = appConst;
          this.modalCtrl = modalCtrl;
          this.loadingController = loadingController;
          this.apiurl = this.appConst.getApiUrl();
        }

        _createClass(TabsPage, [{
          key: "showLoading",
          value: function showLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      this.loading = _context.sent;
                      _context.next = 5;
                      return this.loading.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      setTimeout(function () {
                        if (_this.loading != undefined) {
                          _this.loading.dismiss();
                        }
                      }, 1000);

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "isLogged",
          value: function isLogged() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var log_status;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      log_status = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          return userdata;
                        } else {
                          return false;
                        }
                      });
                      return _context3.abrupt("return", log_status);

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            console.log('logout clicked');
            this.storage.set("userdata", null);
            this.router.navigateByUrl('/login');
          }
        }, {
          key: "getWorkOrders",
          value: function getWorkOrders(user_id, type) {
            var _this2 = this;

            var logged_user = {
              user_id: user_id,
              type: type
            };
            console.log('fetching records for', logged_user);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            this.showLoading();
            this.httpClient.post(this.apiurl + "getWorkOrders.php", logged_user, {
              headers: headers,
              observe: 'response'
            }).subscribe(function (data) {
              _this2.hideLoading();

              console.log(data['body']);
              var success = data['body']['success'];
              console.log('tab page: login response was', success);

              if (success == true) {
                var workorders = data['body']['data'];
                console.log('tab page: workorders', workorders);

                if (type == 'underreview') {
                  if (workorders) {
                    workorders.forEach(function (workorder) {
                      workorder['longdate'] = workorder['date_start'] + ' ' + workorder['time_start'];
                    });
                  } //this.underreview= workorders;


                  _this2.underreview = data['body']['count']; //console.log('weekly services,', this.weeklyServices);
                }
              } else {
                console.log('failed to fetch records');
              }
            }, function (error) {
              _this2.hideLoading(); //console.log(error);
              //console.log(error.message);
              //console.error(error.message);


              console.log('failed to fetch records');
            });
          }
        }, {
          key: "refreshURCount",
          value: function refreshURCount(user_id, type) {
            var _this3 = this;

            var logged_user = {
              user_id: user_id,
              type: type
            };
            console.log('fetching under review records for', logged_user);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            this.httpClient.post(this.apiurl + "getWorkOrders.php", logged_user, {
              headers: headers,
              observe: 'response'
            }).subscribe(function (data) {
              //console.log(data['body']);
              var success = data['body']['success'];
              console.log('tab page: refresh UR count response', success);

              if (success == true) {
                var workorders = data['body']['data']; //console.log('tab page: workorders', workorders);

                if (type == 'underreview') {
                  if (workorders) {
                    workorders.forEach(function (workorder) {
                      workorder['longdate'] = workorder['date_start'] + ' ' + workorder['time_start'];
                    });
                  } //this.underreview= workorders;


                  _this3.underreview = data['body']['count']; //console.log('weekly services,', this.weeklyServices);
                }
              } else {
                console.log('failed to fetch records');
              }
            }, function (error) {
              //console.log(error);
              //console.log(error.message);
              //console.error(error.message);
              console.log('failed to fetch records');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.activatedRoute.params.subscribe(function (userData) {
              if (userData.length !== 0) {
                _this4.userinfo = userData;

                if (userData.length == undefined) {
                  _this4.isLogged().then(function (result) {
                    if (!(result == false)) {
                      _this4.userinfo = result;

                      _this4.refreshURCount(_this4.userinfo.id, 'underreview');

                      setInterval(function () {
                        console.log('refreshing under review count');

                        _this4.refreshURCount(_this4.userinfo.id, 'underreview');
                      }, 5000);
                      _this4.user_id = _this4.userinfo.id;
                    } else {
                      _this4.logout();
                    }
                  });
                }
              }
            });
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _providers_constant_constant__WEBPACK_IMPORTED_MODULE_8__["AppConstants"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _providers_constant_constant__WEBPACK_IMPORTED_MODULE_8__["AppConstants"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], TabsPage);
      /***/
    },

    /***/
    "PkIa":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function PkIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "hO9l":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function hO9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs.router.module */
      "Hl76");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map