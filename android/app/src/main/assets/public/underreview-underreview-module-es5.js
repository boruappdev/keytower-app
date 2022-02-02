(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["underreview-underreview-module"], {
    /***/
    "9Q90":
    /*!***************************************************!*\
      !*** ./src/app/underreview/underreview.module.ts ***!
      \***************************************************/

    /*! exports provided: UnderreviewPageModule */

    /***/
    function Q90(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnderreviewPageModule", function () {
        return UnderreviewPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _underreview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./underreview.page */
      "wXuN");

      var routes = [{
        path: '',
        component: _underreview_page__WEBPACK_IMPORTED_MODULE_6__["UnderreviewPage"]
      }];

      var UnderreviewPageModule = function UnderreviewPageModule() {
        _classCallCheck(this, UnderreviewPageModule);
      };

      UnderreviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_underreview_page__WEBPACK_IMPORTED_MODULE_6__["UnderreviewPage"]]
      })], UnderreviewPageModule);
      /***/
    },

    /***/
    "VwxJ":
    /*!***************************************************!*\
      !*** ./src/app/underreview/underreview.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function VwxJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".service-details-grid {\n  --ion-grid-padding: 1px;\n}\n\nion-col > p.st, ion-col > p.et {\n  color: grey;\n}\n\nion-note.status {\n  border: 1px solid;\n  border-radius: 50px;\n  padding: 10px;\n  color: white;\n  --padding: 10px;\n  --padding-bottom: 10px;\n  padding-bottom: 10px;\n}\n\nion-badge.status {\n  padding: 10px;\n  border-radius: 50px;\n}\n\nion-text.status-text {\n  color: white !important;\n}\n\np.comment {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VuZGVycmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHVCQUFBO0FBRko7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtBQUFKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJ1bmRlcnJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZS1kZXRhaWxzLWRpdntcblxufVxuLnNlcnZpY2UtZGV0YWlscy1ncmlke1xuICAgIC0taW9uLWdyaWQtcGFkZGluZzogMXB4O1xufVxuaW9uLWNvbCA+IHAuc3QsIGlvbi1jb2wgPiBwLmV0IHtcbiAgICBjb2xvcjogZ3JleTtcbn1cbmlvbi1ub3RlLnN0YXR1c3tcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC0tcGFkZGluZzogMTBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pb24tYmFkZ2Uuc3RhdHVze1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuaW9uLXRleHQuc3RhdHVzLXRleHR7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5wLmNvbW1lbnR7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn0iXX0= */";
      /***/
    },

    /***/
    "XbVx":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/underreview/underreview.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function XbVx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Under Review</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list lines=\"full\">\n        <div *ngIf=\"count_underreview > 0\">\n        <ion-item (click)=\"goToDetail(service.workorderid)\" detail *ngFor=\"let service of underreview\">\n            <ion-avatar><ion-icon color=\"warning\" size=\"large\" name=\"alert\"></ion-icon></ion-avatar>\n            <ion-label>\n              <h2>{{service[0]}}</h2>\n              <h2>{{service.towersites}}</h2>\n              <p>{{service.longdate}}</p>\n              <div class=\"service-details-div\">\n                <ion-grid class=\"service-details-grid\">\n                  <ion-row>\n                    <ion-col><p class=\"comment\">{{service.comment}}</p></ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </ion-label>\n            <!-- <ion-badge slot=\"end\" class=\"status\" color=\"white\"\n            data-color=\"{{(service?.wostatus == 'Cancelled' || service?.wostatus == 'Declined') ? 'danger' : 'warning'}}\"\n            [ngStyle]=\"{'background-color': service?.wostatus == 'Cancelled' || service?.wostatus == 'Declined' ? 'var(--ion-color-danger)' : \n            service?.wostatus == 'Under Review' ? 'var(--ion-color-warning)' : \n            service?.wostatus == 'Completed' ? 'var(--ion-color-medium)' : 'var(--ion-color-success)', 'border-color':service?.wostatus == 'Cancelled' || service?.wostatus == 'Declined' ? 'var(--ion-color-danger)' : service?.wostatus == 'Under Review' ? 'var(--ion-color-warning)' : 'var(--ion-color-success)' }\"\n            >\n              <ion-text class=\"status-text\">{{service.wostatus}}</ion-text>\n            </ion-badge> -->\n          </ion-item>\n        </div>\n          <p class=\"ion-padding\" *ngIf=\"count_underreview == 0\">No work orders available for this section</p>\n    </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "wXuN":
    /*!*************************************************!*\
      !*** ./src/app/underreview/underreview.page.ts ***!
      \*************************************************/

    /*! exports provided: UnderreviewPage */

    /***/
    function wXuN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnderreviewPage", function () {
        return UnderreviewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_underreview_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./underreview.page.html */
      "XbVx");
      /* harmony import */


      var _underreview_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./underreview.page.scss */
      "VwxJ");
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

      var UnderreviewPage = /*#__PURE__*/function () {
        function UnderreviewPage(httpClient, navCtrl, router, storage, activatedRoute, appConst, modalCtrl, locale, loadingController) {
          _classCallCheck(this, UnderreviewPage);

          this.httpClient = httpClient;
          this.navCtrl = navCtrl;
          this.router = router;
          this.storage = storage;
          this.activatedRoute = activatedRoute;
          this.appConst = appConst;
          this.modalCtrl = modalCtrl;
          this.locale = locale;
          this.loadingController = loadingController;
          this.service = {
            id: '',
            tower: '',
            tos: '',
            desc: '',
            longdate: '',
            startTime: '',
            endTime: '',
            status: ''
          };
          this.apiurl = this.appConst.getApiUrl();
        }

        _createClass(UnderreviewPage, [{
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
          key: "goToDetail",
          value: function goToDetail(serviceid) {
            this.router.navigateByUrl("/services/detail/".concat(serviceid), {
              state: {}
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            console.log('logout clicked');
            this.storage.set("userdata", null);
            this.router.navigateByUrl('/login');
          }
        }, {
          key: "getCurrentTheme",
          value: function getCurrentTheme() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var current_theme;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      current_theme = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          //current_theme = userdata.theme.toLowerCase();
                          return userdata.theme.toLowerCase();
                        } else {
                          return false;
                        }
                      });
                      return _context3.abrupt("return", current_theme);

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "updateCurrentTheme",
          value: function updateCurrentTheme(theme) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var userjson;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.isLogged().then(function (result) {
                        if (!(result == false)) {
                          userjson = result;
                        }
                      });

                    case 2:
                      //console.log('from set current theme', userjson.theme);
                      userjson['theme'] = theme.charAt(0).toUpperCase() + theme.slice(1); //console.log('from set current theme', userjson);

                      this.storage.set('userdata', userjson);
                      this.userinfo.theme = theme.charAt(0).toUpperCase() + theme.slice(1);
                      console.log('updated theme on storage memory');

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "switchTheme",
          value: function switchTheme() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var current_theme, theme_switcher, destination_theme;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.getCurrentTheme().then(function (theme) {
                        console.log("the current theme is", theme);
                        current_theme = theme;
                      });

                    case 2:
                      theme_switcher = {
                        "dark": "light",
                        "light": "dark"
                      };
                      destination_theme = theme_switcher[current_theme];
                      console.log('switching theme from:', current_theme);
                      console.log('switching theme to:', destination_theme);
                      document.body.classList.toggle(destination_theme, true);
                      document.body.classList.toggle(current_theme, false);
                      this.updateCurrentTheme(destination_theme);
                      console.log('theme switched');

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "isLogged",
          value: function isLogged() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var log_status;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      log_status = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          return userdata;
                        } else {
                          return false;
                        }
                      });
                      return _context6.abrupt("return", log_status);

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "loadTheme",
          value: function loadTheme(theme) {
            console.log('loading theme', theme);
            document.body.classList.toggle(theme, true);
            var theme_switcher = {
              "dark": "light",
              "light": "dark"
            };
            document.body.classList.toggle(theme_switcher[theme], false); //switch off previous theme if there was one and prefer the loaded theme.

            console.log('turning off previous theme', theme_switcher[theme]);
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
              console.log('login response was', success);

              if (success == true) {
                var workorders = data['body']['data'];
                console.log('workorders', workorders);

                if (type == 'underreview') {
                  if (data['body']['count'] > 0) {
                    workorders.forEach(function (workorder) {
                      workorder['longdate'] = workorder['date_start'] + ' ' + workorder['time_start'];
                    });
                  }

                  _this2.underreview = workorders;
                  _this2.count_underreview = data['body']['count']; //console.log('weekly services,', this.weeklyServices);
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
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.activatedRoute.params.subscribe(function (userData) {
              if (userData.length !== 0) {
                _this3.userinfo = userData; //console.log('param user data:', userData);

                try {
                  _this3.loadTheme(userData.theme.toLowerCase());
                } catch (_a) {
                  console.log('couldnt load theme');
                }

                console.log('param user data length:', userData.length);

                if (userData.length == undefined) {
                  console.log('nothing in params, so loading from storage');

                  _this3.isLogged().then(function (result) {
                    if (!(result == false)) {
                      //console.log('loading storage data (within param route function)', result);
                      _this3.userinfo = result;

                      _this3.loadTheme(result.theme.toLowerCase());

                      _this3.getWorkOrders(_this3.userinfo.id, 'underreview');

                      _this3.user_id = _this3.userinfo.id;
                    } else {
                      console.log('nothing in storage, going back to login');

                      _this3.logout();
                    }
                  });
                }
              }
            });
          }
        }]);

        return UnderreviewPage;
      }();

      UnderreviewPage.ctorParameters = function () {
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
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"]]
          }]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      UnderreviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-underreview',
        template: _raw_loader_underreview_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_underreview_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _providers_constant_constant__WEBPACK_IMPORTED_MODULE_8__["AppConstants"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], String, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], UnderreviewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=underreview-underreview-module-es5.js.map