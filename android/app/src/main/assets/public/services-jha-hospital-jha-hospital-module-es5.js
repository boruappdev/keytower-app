(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-jha-hospital-jha-hospital-module"], {
    /***/
    "K3om":
    /*!************************************************************!*\
      !*** ./src/app/services/jha-hospital/jha-hospital.page.ts ***!
      \************************************************************/

    /*! exports provided: JhaHospitalPage */

    /***/
    function K3om(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JhaHospitalPage", function () {
        return JhaHospitalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_jha_hospital_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./jha-hospital.page.html */
      "X2bb");
      /* harmony import */


      var _jha_hospital_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./jha-hospital.page.scss */
      "SpLD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var JhaHospitalPage = /*#__PURE__*/function () {
        function JhaHospitalPage(router, route) {
          _classCallCheck(this, JhaHospitalPage);

          this.router = router;
          this.route = route;
          this.data = {};
        }

        _createClass(JhaHospitalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              console.log(params);

              for (var key in params) {
                _this.data[key] = params[key];

                if (params[key] != undefined) {
                  _this.data[key] = params[key];
                }
              }

              console.log(_this.data);
              _this.serviceid = params.serviceid;
            });
          }
        }, {
          key: "gotoJHA",
          value: function gotoJHA() {
            this.router.navigate(['/services/jha'], {
              queryParams: {
                serviceid: this.data["serviceid"],
                lat: this.data["lat"],
                "long": this.data["long"],
                job_name: this.data["job_name"]
              }
            });
          }
        }]);

        return JhaHospitalPage;
      }();

      JhaHospitalPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      JhaHospitalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-jha-hospital',
        template: _raw_loader_jha_hospital_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_jha_hospital_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], JhaHospitalPage);
      /***/
    },

    /***/
    "SpLD":
    /*!**************************************************************!*\
      !*** ./src/app/services/jha-hospital/jha-hospital.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function SpLD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqaGEtaG9zcGl0YWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "X2bb":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/jha-hospital/jha-hospital.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X2bb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>JHA/JSA: Select Nearest Hospital</ion-title>\n    <a href=\"services/detail/{{serviceid}}\"><ion-icon name=\"close\" size=\"large\" style=\"float: right;\"></ion-icon></a>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!--<div #map id=\"map\"></div>-->\n  <ion-img src=\"https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png\"></ion-img>\n  <div class=\"button-grouping ion-padding\" >\n    <ion-button expand=\"full\" size=\"small\" expand=\"block\" color=\"primary\" >Hospital 1</ion-button>\n    <ion-button expand=\"full\" size=\"small\" expand=\"block\" color=\"primary\" >Hospital 2</ion-button>\n  </div>\n  <br>\n  <ion-button  >NEXT </ion-button>\n  <ion-button (click)=\"gotoJHA()\" >BACK </ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "YhlJ":
    /*!**************************************************************!*\
      !*** ./src/app/services/jha-hospital/jha-hospital.module.ts ***!
      \**************************************************************/

    /*! exports provided: JhaHospitalPageModule */

    /***/
    function YhlJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JhaHospitalPageModule", function () {
        return JhaHospitalPageModule;
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


      var _jha_hospital_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./jha-hospital.page */
      "K3om");

      var routes = [{
        path: '',
        component: _jha_hospital_page__WEBPACK_IMPORTED_MODULE_6__["JhaHospitalPage"]
      }];

      var JhaHospitalPageModule = function JhaHospitalPageModule() {
        _classCallCheck(this, JhaHospitalPageModule);
      };

      JhaHospitalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_jha_hospital_page__WEBPACK_IMPORTED_MODULE_6__["JhaHospitalPage"]]
      })], JhaHospitalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=services-jha-hospital-jha-hospital-module-es5.js.map