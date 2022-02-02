(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Y5":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function Y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "V6Ie");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "r67e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../providers/constant/constant */
      "UyhH");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, storage, toastController, httpClient, appConst, navCtrl, loadingController) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.storage = storage;
          this.toastController = toastController;
          this.httpClient = httpClient;
          this.appConst = appConst;
          this.navCtrl = navCtrl;
          this.loadingController = loadingController;
          this.apiurl = this.appConst.getApiUrl();
          this.vturl = this.appConst.getVtUrl();
        }

        _createClass(LoginPage, [{
          key: "malformedUriErrorHandler",
          value: function malformedUriErrorHandler(error) {
            console.log(error);
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 3500,
                        position: "top",
                        color: "danger"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      this.loading = _context2.sent;
                      _context2.next = 5;
                      return this.loading.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      setTimeout(function () {
                        if (_this.loading != undefined) {
                          _this.loading.dismiss();
                        }
                      }, 1000);

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "login",
          value: function login(form, origin) {
            var _this2 = this;

            //TODO: Wrap storage setting and data setting to API call return
            console.log('login function accessed');
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');

            if (origin == 'manual') {
              this.showLoading();
              console.log('login clicked');
              var data = form.value;
              /* Verify user login */

              /* if (userjson.users[data.email]){
                if(userjson.users[data.email].password == data.password){
                  this.userdata = userjson.users[data.email];
                  this.storage.ready().then(() => {
                    this.storage.set('userdata', this.userdata);
                    return this.router.navigate(["/tabs/services", this.userdata]);
                  })
                }else{
                  console.log('login failed');
                  this.presentToast('Login failed. Please try again');
                }
              }else{
                console.log('login failed');
                this.presentToast('Login failed. Please try again');
              } */

              var username = data.email;
              var password = data.password;
              console.log(form.value);
              this.httpClient.post(this.apiurl + "postLogin.php", form.value, {
                headers: headers,
                observe: 'response'
              }).subscribe(function (data) {
                _this2.hideLoading();

                console.log(data['body']);
                var verified = data['body']['success'];
                console.log('login response was', verified);

                if (verified == true) {
                  var userdata = data['body']['data'];
                  console.log('usersdata', userdata);

                  _this2.storage.ready().then(function () {
                    _this2.userdata = userdata;
                    _this2.userdata['theme'] = 'Light';
                    _this2.userdata['profile_picture'] = _this2.vturl + userdata.path + userdata.attachmentsid + '_' + userdata.imagename;

                    _this2.storage.set('userdata', _this2.userdata); //return this.router.navigate(["/tabs/services", this.userdata]);


                    _this2.navCtrl.navigateForward('/tabs/services');
                  });
                } else {
                  console.log('login failed');

                  _this2.presentToast('Login failed. Please try again');
                }
              }, function (error) {
                _this2.hideLoading(); //console.log(error);
                //console.log(error.message);
                //console.error(error.message);


                console.log('login failed');

                _this2.presentToast('Login failed. Please try again');
              });
              /* Verify user login */
            } else if (origin == 'auto') {
              //this.hideLoading();
              console.log('auto login from session'); //return this.router.navigate(["/tabs/services", form]);

              this.navCtrl.navigateForward('/tabs/services');
            }

            return false;
          }
        }, {
          key: "isLogged",
          value: function isLogged() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var log_status;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      log_status = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          return userdata;
                        } else {
                          return false;
                        }
                      });
                      return _context4.abrupt("return", log_status);

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "movefocus",
          value: function movefocus(e, ref) {
            if (e.key == "Enter") {
              console.log(e.key);
              ref.setFocus();
            }
          }
        }, {
          key: "submit",
          value: function submit(e, ref) {
            if (e.key == "Enter") {
              console.log('submitting');
              var el = document.getElementById('submit-button');
              el.click();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.isLogged().then(function (result) {
              if (!(result == false)) {
                console.log('loading storage data', result);

                _this3.login(result, "auto");
              } else {
                console.log('init login failed');
              }
            });
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _providers_constant_constant__WEBPACK_IMPORTED_MODULE_8__["AppConstants"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _providers_constant_constant__WEBPACK_IMPORTED_MODULE_8__["AppConstants"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])], LoginPage);
      /***/
    },

    /***/
    "V6Ie":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function V6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"loginPage\"> \n  <form #form=\"ngForm\" (ngSubmit)=\"login(form, 'manual')\" class=\"pardonTop\" validate >\n    <ion-grid style=\"height: 100%\">\n      <ion-row class=\"ion-align-items-center ion-justify-content-center justify-content-center\" color=\"primary\" style=\"height: 100%\">\n        <ion-col class=\"align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3 class=\"loginTitle\">Login - Sunergy Construction</h3>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-item>\n              <ion-input #un class=\"transparent\" name=\"username\" type=\"email\" placeholder=\"Email/Username\" ngModel required autocomplete clear-input inputmode=\"email\" (keyup)=\"movefocus($event, pw)\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input #pw class=\"transparent\" name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required clear-input (keyup)=\"submit($event, ln)\"></ion-input>\n            </ion-item>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button id=\"submit-button\" #ln size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Login</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
      }];

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "r67e":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function r67e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  /* background-color: red !important;\n   background: url('../../assets/aerial.jpg') no-repeat center center / cover ;\n   */\n  background: #fff url(\"https://sunergyinc.com/wp-content/uploads/2018/08/Home_sld5_black-min.jpg\") no-repeat center center/cover;\n  background-position: left;\n}\n\nion-content.loginPage {\n  /* --background: url('../../assets/aerial.jpg') no-repeat center center / cover !important; */\n  /* --background: url('../../assets/aerial.jpg');\n  --background-repeat: no-repeat;\n  --background-size: cover; */\n  --keyboard-offset: 0;\n  --background: transparent;\n}\n\n.pardonTop {\n  margin-top: 40%;\n}\n\n/* \nion-item{\n    --background: #3880ff !important;\n    --color: #fff;\n}\nion-button{\n    --background: #062f77;\n} */\n\n.button-disabled {\n  --opacity: .95 !important;\n  --background: var(--ion-color-medium) !important;\n}\n\nh3.loginTitle {\n  --color: white;\n  color: white;\n}\n\n.item-native {\n  background-color: rgba(101, 101, 101, 0.51) !important;\n  color: white !important;\n}\n\n/* \n.transparent{\n    background: rgba(101, 101, 101, 0.51) !important;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHOztJQUFBO0VBR0MsK0hBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksNkZBQUE7RUFDQTs7NkJBQUE7RUFHQSxvQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7Ozs7Ozs7R0FBQTs7QUFRQTtFQUNJLHlCQUFBO0VBQ0EsZ0RBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxzREFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBSEE7OztHQUFBIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2FlcmlhbC5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyIDtcbiAgICAqL1xuICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKCdodHRwczovL3N1bmVyZ3lpbmMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA4L0hvbWVfc2xkNV9ibGFjay1taW4uanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbn1cbmlvbi1jb250ZW50LmxvZ2luUGFnZSB7XG4gICAgLyogLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9hZXJpYWwuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciAhaW1wb3J0YW50OyAqL1xuICAgIC8qIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYWVyaWFsLmpwZycpO1xuICAgIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAtLWJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXG4gICAgLS1rZXlib2FyZC1vZmZzZXQ6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhcmRvblRvcHtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG59XG4vKiBcbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZiAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmY7XG59XG5pb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogIzA2MmY3Nztcbn0gKi9cbi5idXR0b24tZGlzYWJsZWR7XG4gICAgLS1vcGFjaXR5OiAuOTUgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pICFpbXBvcnRhbnQ7XG59XG5oMy5sb2dpblRpdGxle1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5pdGVtLW5hdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDEwMSwgMTAxLCAwLjUxKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLyogXG4udHJhbnNwYXJlbnR7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDEsIDEwMSwgMTAxLCAwLjUxKSAhaW1wb3J0YW50O1xufSAqL1xuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map