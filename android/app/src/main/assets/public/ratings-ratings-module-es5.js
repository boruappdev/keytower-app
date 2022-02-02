(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ratings-ratings-module"], {
    /***/
    "+4hh":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ratings/ratings.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function hh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>My Ratings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let rating of ratings\">\n        <ion-avatar><ion-icon size=\"large\" name=\"star\"></ion-icon></ion-avatar>\n        <ion-label>\n          <h2>{{rating.service}}</h2>\n          <p>{{rating.completedate}}</p>\n          <div class=\"rating-details-div\">\n            <ion-grid class=\"rating-details-grid\">\n              <ion-row>\n                <ion-col><p class=\"st\">On-Site Rating</p></ion-col>\n                <ion-col><p class=\"et\">Communication Rating</p></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col><p>{{rating.osr}}/10</p></ion-col>\n                <ion-col><p>{{rating.cr}}/10</p></ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-label>\n        <!-- <ion-note slot=\"end\" class=\"status\" color=\"medium\"></ion-note> -->\n        <ion-badge slot=\"end\" color=\"primary\">\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\n        </ion-badge>\n      </ion-item>\n    </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "0UmH":
    /*!*******************************************!*\
      !*** ./src/app/ratings/ratings.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function UmH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".rating-details-grid {\n  --ion-grid-padding: 1px;\n  display: flex;\n}\n\nion-icon[name=star] {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhdGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoicmF0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nLWRldGFpbHMtZ3JpZHtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pb24taWNvbltuYW1lPVwic3RhclwiXXtcbiAgICBjb2xvcjogZ29sZDtcbn0iXX0= */";
      /***/
    },

    /***/
    "aeGM":
    /*!*****************************************!*\
      !*** ./src/app/ratings/ratings.page.ts ***!
      \*****************************************/

    /*! exports provided: RatingsPage */

    /***/
    function aeGM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingsPage", function () {
        return RatingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ratings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ratings.page.html */
      "+4hh");
      /* harmony import */


      var _ratings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ratings.page.scss */
      "0UmH");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var RatingsPage = /*#__PURE__*/function () {
        function RatingsPage(navCtrl, router, storage, activatedRoute, locale) {
          _classCallCheck(this, RatingsPage);

          this.navCtrl = navCtrl;
          this.router = router;
          this.storage = storage;
          this.activatedRoute = activatedRoute;
          this.locale = locale;
          this.rating = {
            id: '',
            service: '',
            completedate: '',
            osr: '',
            cr: '',
            stars: ''
          };
          this.randomPeople = ['Ojomo', 'Charisse', 'Mitsue', 'Lilia', 'Lynelle', 'Lavette', 'Kerry', 'Beckie', 'Nathan', 'Kristle', 'Nickie', 'Coretta', 'Randy', 'Carmon', 'Bev', 'Maude', 'Cleora', 'Tracy', 'Casimira', 'Lowell', 'Particia', 'Bennie', 'Angelena', 'Elden', 'Marcel', 'Elene', 'Young', 'Rheba', 'Paulene', 'Latia', 'Shantay', 'Lavon', 'Dane', 'Darla', 'Joselyn', 'Zelda', 'Kasha', 'Kaitlin', 'Pasty', 'Essie', 'Delfina', 'Arla', 'Amy', 'Xavier', 'Jin', 'Ashlee', 'Millicent', 'Jeanetta', 'Willy', 'Rolf'];
          this.typesOfServices = ['Discard and Donate', 'Quick Start', 'Move IN Clean', 'Quick Start Exec', 'Move OUT Clean'];
        }

        _createClass(RatingsPage, [{
          key: "loadRandomRatings",
          value: function loadRandomRatings() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var limit, ratings, i, date, startDay, endDay, startTime, endTime, startMinute, endMinute, randomTOS, start, end, longdate, osr, cr, rate, stars;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      limit = 10;
                      ratings = [];

                      for (i = 0; i < limit; i += 1) {
                        date = new Date();
                        startDay = Math.floor(Math.random() * 90) - 45;
                        endDay = Math.floor(Math.random() * 2) + startDay;
                        startMinute = Math.floor(Math.random() * 24 * 60);
                        endMinute = Math.floor(Math.random() * 180) + startMinute;
                        startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                        endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                        randomTOS = i % this.typesOfServices.length;
                        start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(startTime, 'shortTime', this.locale);
                        end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(endTime, 'shortTime', this.locale);
                        longdate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(startTime, 'medium', this.locale);
                        osr = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
                        cr = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
                        rate = (osr + cr) / 20 * 5;
                        stars = (Math.round(rate * 2) / 2).toFixed(1);
                        ratings.push({
                          id: i,
                          service: this.randomPeople[i] + ': ' + this.typesOfServices[randomTOS],
                          completedate: longdate,
                          osr: osr,
                          cr: cr,
                          stars: stars
                        });
                      }

                      return _context.abrupt("return", ratings);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /*basic loadout*/

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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var current_theme;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      current_theme = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          //current_theme = userdata.theme.toLowerCase();
                          return userdata.theme.toLowerCase();
                        } else {
                          return false;
                        }
                      });
                      return _context2.abrupt("return", current_theme);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "updateCurrentTheme",
          value: function updateCurrentTheme(theme) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var userjson;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
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
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "switchTheme",
          value: function switchTheme() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var current_theme, theme_switcher, destination_theme;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
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
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "isLogged",
          value: function isLogged() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var log_status;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      log_status = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          return userdata;
                        } else {
                          return false;
                        }
                      });
                      return _context5.abrupt("return", log_status);

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
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
          /*basic loadout*/

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (userData) {
              if (userData.length !== 0) {
                _this.userinfo = userData;
                console.log('param user data:', userData);

                try {
                  _this.loadTheme(userData.theme.toLowerCase());
                } catch (_a) {
                  console.log('couldnt load theme');
                }

                console.log('param user data length:', userData.length);

                if (userData.length == undefined) {
                  console.log('nothing in params, so loading from storage');

                  _this.isLogged().then(function (result) {
                    if (!(result == false)) {
                      console.log('loading storage data (within param route function)', result);
                      _this.userinfo = result;

                      _this.loadTheme(result.theme.toLowerCase());
                    } else {
                      console.log('nothing in storage, going back to login');

                      _this.logout();
                    }
                  });
                }
              }
            });
            this.loadRandomRatings().then(function (result) {
              _this.ratings = result;
              console.log(result);
            });
          }
        }]);

        return RatingsPage;
      }();

      RatingsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"]]
          }]
        }];
      };

      RatingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ratings',
        template: _raw_loader_ratings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ratings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], String])], RatingsPage);
      /***/
    },

    /***/
    "u8aK":
    /*!*******************************************!*\
      !*** ./src/app/ratings/ratings.module.ts ***!
      \*******************************************/

    /*! exports provided: RatingsPageModule */

    /***/
    function u8aK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingsPageModule", function () {
        return RatingsPageModule;
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


      var _ratings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ratings.page */
      "aeGM");

      var routes = [{
        path: '',
        component: _ratings_page__WEBPACK_IMPORTED_MODULE_6__["RatingsPage"]
      }];

      var RatingsPageModule = function RatingsPageModule() {
        _classCallCheck(this, RatingsPageModule);
      };

      RatingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_ratings_page__WEBPACK_IMPORTED_MODULE_6__["RatingsPage"]]
      })], RatingsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ratings-ratings-module-es5.js.map