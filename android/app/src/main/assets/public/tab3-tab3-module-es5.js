(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "IqiF":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function IqiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "h1hx");
      /* harmony import */


      var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab3.page.scss */
      "nRCe");
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

      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(activatedRoute, router, storage) {
          _classCallCheck(this, Tab3Page);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.storage = storage;
        }
        /* Default Auth Guard and Theme Loader */


        _createClass(Tab3Page, [{
          key: "logout",
          value: function logout() {
            console.log('logging out, no user data found');
            this.storage.set("userdata", null);
            this.router.navigateByUrl('/login');
          }
        }, {
          key: "getCurrentTheme",
          value: function getCurrentTheme() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var current_theme;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      current_theme = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          //current_theme = userdata.theme.toLowerCase();
                          return userdata.theme.toLowerCase();
                        } else {
                          return false;
                        }
                      });
                      return _context.abrupt("return", current_theme);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "isLogged",
          value: function isLogged() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var log_status;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      log_status = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          return userdata;
                        } else {
                          return false;
                        }
                      });
                      return _context2.abrupt("return", log_status);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadTheme",
          value: function loadTheme(theme) {
            document.body.classList.toggle(theme, true);
          }
          /* Default Auth Guard and Theme Loader */

        }, {
          key: "filter",
          value: function filter(e) {
            console.log(e.target.value);
            var searchterm = e.target.value.toLowerCase();
            var nodelist = document.querySelectorAll('app-map-card > ion-card');
            Array.from(nodelist).filter(function (cards) {
              console.log(cards.textContent.toLowerCase(), cards.textContent.toLowerCase().indexOf(searchterm));

              if (cards.textContent.toLowerCase().indexOf(searchterm) > -1) {
                cards.toggleAttribute('hidden', false);
              } else {
                cards.toggleAttribute('hidden', true);
              }
            });
          }
        }, {
          key: "resetFilter",
          value: function resetFilter(e) {
            console.log(e);
            console.log('resetting filter to show all cards');
            var nodelist = document.querySelectorAll('app-map-card > ion-card');
            console.log(nodelist);
            Array.from(nodelist).filter(function (cards) {
              cards.toggleAttribute('hidden', false);
            });
          }
        }, {
          key: "getMore",
          value: function getMore(e) {
            console.log('Retrieving more properties');
            setTimeout(function () {
              e.target.complete();
              console.log('New properties retrieved');
            }, 2000);
          }
        }, {
          key: "loadMore",
          value: function loadMore(e) {
            setTimeout(function () {
              e.target.complete();
              console.log('New properties retrieved'); // App logic to determine if all data is loaded
              // and disable the infinite scroll

              /*
              if (data.length == 1000) {
                e.target.disabled = true;
              }
              */
            }, 1500);
          }
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
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])], Tab3Page);
      /***/
    },

    /***/
    "P2nn":
    /*!**************************************************!*\
      !*** ./src/assets/js/sampledata/properties.json ***!
      \**************************************************/

    /*! exports provided: properties, default */

    /***/
    function P2nn(module) {
      module.exports = JSON.parse("{\"properties\":[{\"recordid\":244787,\"site_name\":\"Simmons\",\"coords\":\"35.045556, -89.906111\",\"city\":\"Chicago\",\"state\":\"IL\",\"zip\":60659,\"travel_time_m\":18,\"miles\":2.6},{\"recordid\":345879,\"site_name\":\"Coldspring\",\"coords\":\"33.224495, -91.04211\",\"city\":\"New York\",\"state\":\"NY\",\"zip\":10014,\"travel_time_m\":734,\"miles\":789},{\"recordid\":144848,\"site_name\":\"Sawmill\",\"coords\":\"35.121858, -89.54004\",\"city\":\"Chicago\",\"state\":\"IL\",\"zip\":60603,\"travel_time_m\":42,\"miles\":6},{\"recordid\":255654,\"site_name\":\"Mellen\",\"coords\":\"34.102253, -90.07503\",\"city\":\"Downers Grove\",\"state\":\"IL\",\"zip\":60516,\"travel_time_m\":50,\"miles\":7.1},{\"recordid\":149598,\"site_name\":\"Funston\",\"coords\":\"32.172031, -90.02392\",\"city\":\"Chicago\",\"state\":\"IL\",\"zip\":60645,\"travel_time_m\":20,\"miles\":1.8},{\"recordid\":254879,\"site_name\":\"York\",\"coords\":\"35.121858, -89.54004\",\"city\":\"Chicago\",\"state\":\"IL\",\"zip\":60453,\"travel_time_m\":44,\"miles\":3.6},{\"recordid\":154888,\"site_name\":\"Saxton\",\"coords\":\"35.045556, -89.906111\",\"city\":\"Palo Alto\",\"state\":\"CA\",\"zip\":94020,\"travel_time_m\":85,\"miles\":18},{\"recordid\":111254,\"site_name\":\"Latwell\",\"coords\":\"34.102253, -90.07503\",\"city\":\"Cupertino\",\"state\":\"CA\",\"zip\":95014,\"travel_time_m\":10,\"miles\":1},{\"recordid\":345487,\"site_name\":\"Medora\",\"coords\":\"32.172031, -90.02392\",\"city\":\"Redmond\",\"state\":\"WA\",\"zip\":98052,\"travel_time_m\":5,\"miles\":0.5},{\"recordid\":554678,\"site_name\":\"Rockwood\",\"coords\":\"33.224495, -91.04211\",\"city\":\"Palo Alto\",\"state\":\"CA\",\"zip\":94303,\"travel_time_m\":25,\"miles\":2}]}");
      /***/
    },

    /***/
    "PRRt":
    /*!************************************************!*\
      !*** ./src/app/map-card/map-card.component.ts ***!
      \************************************************/

    /*! exports provided: MapCardComponent */

    /***/
    function PRRt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapCardComponent", function () {
        return MapCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_map_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./map-card.component.html */
      "ujwm");
      /* harmony import */


      var _map_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./map-card.component.scss */
      "z5zN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _assets_js_sampledata_properties_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../assets/js/sampledata/properties.json */
      "P2nn");

      var _assets_js_sampledata_properties_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../assets/js/sampledata/properties.json */
      "P2nn", 1);

      var MapCardComponent = /*#__PURE__*/function () {
        function MapCardComponent(router) {
          _classCallCheck(this, MapCardComponent);

          this.router = router;
        }

        _createClass(MapCardComponent, [{
          key: "getProperties",
          value: function getProperties() {
            console.log('loading up properties');
            this.properties = _assets_js_sampledata_properties_json__WEBPACK_IMPORTED_MODULE_5__["properties"];
          }
        }, {
          key: "detailView",
          value: function detailView(property) {
            console.log('going to detail view', property);
            this.router.navigate(['property-images', property]);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProperties();
          }
        }]);

        return MapCardComponent;
      }();

      MapCardComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      MapCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map-card',
        template: _raw_loader_map_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], MapCardComponent);
      /***/
    },

    /***/
    "h1hx":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function h1hx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Sites\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-searchbar show-cancel-button=\"focus\" placeholder=\"Filter Towers\" (input)=\"filter($event)\" (ionClear)=\"resetFilter($event)\"></ion-searchbar>\n\n<ion-content>\n  <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"getMore($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Loading more properties...\">\n    </ion-refresher-content>\n  </ion-refresher> Using infinite scroll instead -->\n  \n\n  <app-map-card></app-map-card> \n\n  <ion-infinite-scroll threshold=\"25px\" (ionInfinite)=\"loadMore($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"crescent\"\n        loadingText=\"Loading more Sites...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>";
      /***/
    },

    /***/
    "k+ul":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function kUl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "IqiF");
      /* harmony import */


      var _map_card_map_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../map-card/map-card.component */
      "PRRt");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }])],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"], _map_card_map_card_component__WEBPACK_IMPORTED_MODULE_7__["MapCardComponent"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "nRCe":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function nRCe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[fab].fab-map {\n  --top: calc(100% - 35px);\n  --z-index: 50;\n}\n\n.item-bold {\n  --font-weight: bold;\n}\n\nion-content.cards-bg {\n  --background-color: #f4f4f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUU7RUFDQyxtQkFBQTtBQURIOztBQUlFO0VBQ0UsMkJBQUE7QUFESiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBcbiAgYnV0dG9uW2ZhYl0uZmFiLW1hcCB7XG4gICAgLS10b3A6IGNhbGMoMTAwJSAtIDM1cHgpO1xuICAgIC0tei1pbmRleDogNTA7XG4gIH1cbiAgXG4gIC5pdGVtLWJvbGQge1xuICAgLS1mb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQuY2FyZHMtYmcge1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNztcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "ujwm":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map-card/map-card.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ujwm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngFor=\"let property of properties\" >\n  <img (click)=\"detailView(property)\" src=\"../../assets/img/advance-card-map-madison.png\">\n  <ion-fab vertical=\"top\" horizontal=\"end\">\n    <ion-fab-button target=\"_blank\" href=\"https://maps.apple.com/?address={{property.coords}}\">\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-item (click)=\"detailView(property)\">\n    <ion-icon name=\"flash\" item-start large></ion-icon>\n    <ion-card-header >\n      <ion-card-title >{{property.site_name}}</ion-card-title>\n      <ion-card-subtitle>{{property.coords}}</ion-card-subtitle>\n    </ion-card-header>\n  </ion-item>\n\n  <ion-item>\n    <span item-start>{{property.travel_time_m}} min&nbsp;</span>\n    <span item-start>({{property.miles}} mi)</span>\n    <ion-fab horizontal=\"end\">\n      <ion-button target=\"_blank\"  href=\"https://maps.apple.com/?daddr={{property.coords}}\" ion-button icon-start clear item-end>\n        <ion-icon name=\"navigate\"></ion-icon>\n        Start\n      </ion-button>\n    </ion-fab>\n\n  </ion-item>\n</ion-card>";
      /***/
    },

    /***/
    "z5zN":
    /*!**************************************************!*\
      !*** ./src/app/map-card/map-card.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function z5zN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXAtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map