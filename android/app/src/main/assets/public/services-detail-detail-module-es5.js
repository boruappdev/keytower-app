(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-detail-detail-module"], {
    /***/
    "6QZd":
    /*!****************************************************************************!*\
      !*** ./src/app/services/image-confirm-modal/image-confirm-modal.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function QZd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card-header {\n  padding-bottom: 0px !important;\n}\n\nion-card-content {\n  padding-top: 10px !important;\n}\n\nion-input input.native-input {\n  border: 1px solid #ccc !important;\n  padding-left: 20px !important;\n  padding-right: 20px !important;\n}\n\nion-toolbar ion-icon[name=close] {\n  float: right;\n  cursor: pointer;\n}\n\n.title-input {\n  background-color: var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlLWNvbmZpcm0tbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUFDRjs7QUFDQTtFQUNFLDRCQUFBO0FBRUY7O0FBQUE7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSw4Q0FBQTtBQUlGIiwiZmlsZSI6ImltYWdlLWNvbmZpcm0tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVye1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC1jb250ZW50e1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWlucHV0IGlucHV0Lm5hdGl2ZS1pbnB1dHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6MjBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciBpb24taWNvbltuYW1lPVwiY2xvc2VcIl17XG4gIGZsb2F0OiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGUtaW5wdXR7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59Il19 */";
      /***/
    },

    /***/
    "7mcv":
    /*!************************************************************!*\
      !*** ./src/app/services/image-modal/image-modal.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function mcv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card-header {\n  padding-bottom: 0px !important;\n}\n\nion-card-content {\n  padding-top: 10px !important;\n}\n\nion-input input.native-input {\n  border: 1px solid #ccc !important;\n  padding-left: 20px !important;\n  padding-right: 20px !important;\n}\n\nion-toolbar ion-icon[name=close] {\n  float: right;\n  cursor: pointer;\n}\n\n.title-input {\n  background-color: var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw0QkFBQTtBQUVGOztBQUFBO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBR0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0UsOENBQUE7QUFJRiIsImZpbGUiOiJpbWFnZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXJ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbmlvbi1jYXJkLWNvbnRlbnR7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taW5wdXQgaW5wdXQubmF0aXZlLWlucHV0e1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDoyMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cbmlvbi10b29sYmFyIGlvbi1pY29uW25hbWU9XCJjbG9zZVwiXXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aXRsZS1pbnB1dHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn0iXX0= */";
      /***/
    },

    /***/
    "Jvbl":
    /*!**************************************************!*\
      !*** ./src/app/services/detail/detail.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Jvbl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  color: grey !important;\n}\n\nion-badge.ios.status {\n  padding: 10px;\n  border-radius: 50px;\n  margin-bottom: 5px;\n}\n\nion-text.status-text {\n  color: white !important;\n}\n\nion-input > input {\n  width: 100% !important;\n}\n\n.anchor-bottom {\n  position: fixed;\n  bottom: 0;\n  /* display: block; */\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.137);\n  z-index: 9999;\n}\n\n.text-align-center {\n  text-align: center !important;\n}\n\nion-select {\n  width: 100%;\n  max-width: none;\n}\n\nion-item > div {\n  width: 100% !important;\n}\n\n.section {\n  visibility: hidden !important;\n  opacity: 0;\n  height: 0px;\n  transition: all 2s ease, height 1s ease;\n}\n\n.section-active {\n  visibility: visible;\n  opacity: 1;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  max-height: auto;\n  transition: all 2s ease, height 1s ease;\n}\n\n.blockheader {\n  color: white !important;\n}\n\n.blockheader_2 {\n  background-color: #F4782B;\n  --background: #F4782B;\n  --color: white;\n  color: white !important;\n}\n\ntable.tableizer-table {\n  font-size: 12px;\n  border: 1px solid #CCC;\n  font-family: Arial, Helvetica, sans-serif;\n  border-radius: 5px;\n}\n\n.tableizer-table td {\n  padding: 4px;\n  margin: 3px;\n  border: 1px solid #CCC;\n}\n\n.tableizer-table th {\n  background-color: #00954C;\n  color: #FFF;\n  font-weight: bold;\n}\n\n.orange {\n  background-color: #DF782B;\n  color: white;\n}\n\n.table-input {\n  width: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBS0E7RUFDSSxzQkFBQTtBQUZKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7QUFESjs7QUFHQTtFQUNJLDZCQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUtBO0VBQ0ksc0JBQUE7QUFGSjs7QUFLQTtFQUVJLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtBQUhKOztBQUtBO0VBRUksbUJBQUE7RUFDQSxVQUFBO0VBRUEsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtBQUpKOztBQU9BO0VBRUcsdUJBQUE7QUFMSDs7QUFRQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFMSjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0VBQ0osa0JBQUE7QUFMQTs7QUFPQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFKSjs7QUFNQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7QUFISiIsImZpbGUiOiJkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xuICAgIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1iYWRnZS5pb3Muc3RhdHVze1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmlvbi10ZXh0LnN0YXR1cy10ZXh0e1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWdyb3VwaW5ne1xuIFxufVxuaW9uLWlucHV0ID4gaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uYW5jaG9yLWJvdHRvbXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMzcpO1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG4udGV4dC1hbGlnbi1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuaW9uLXNlbGVjdHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbn1cblxuLnJlYWRvbmx5LWZpZWxkc3tcbiAgICBcbn1cbmlvbi1pdGVtID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uc2VjdGlvbntcbiAgICAvL2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGhlaWdodDogMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLCBoZWlnaHQgMXMgZWFzZTtcbn1cbi5zZWN0aW9uLWFjdGl2ZXtcbiAgIC8vIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC8vaGVpZ2h0OiAxNTBweDtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIG1heC1oZWlnaHQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UsIGhlaWdodCAxcyBlYXNlO1xufVxuXG4uYmxvY2toZWFkZXJ7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjRjQ3ODJCO1xuICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5ibG9ja2hlYWRlcl8ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDc4MkI7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjQ3ODJCO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG50YWJsZS50YWJsZWl6ZXItdGFibGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDOyBcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbmJvcmRlci1yYWRpdXM6IDVweDtcbn0gXG4udGFibGVpemVyLXRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbn1cbi50YWJsZWl6ZXItdGFibGUgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk1NEM7IFxuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3Jhbmdle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERjc4MkI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFibGUtaW5wdXR7XG4gICAgd2lkdGg6IDcwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "Misv":
    /*!**************************************************!*\
      !*** ./src/app/services/detail/detail.module.ts ***!
      \**************************************************/

    /*! exports provided: DetailPageModule */

    /***/
    function Misv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
        return DetailPageModule;
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


      var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detail.page */
      "hwqA");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "y2f/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "p74H");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "t8sF");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "Pn9U");
      /* harmony import */


      var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../image-modal/image-modal.page */
      "XSBL");
      /* harmony import */


      var _checklist_modal_checklist_modal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../checklist-modal/checklist-modal.page */
      "ivwk"); // import { AppComponent } from './app.component';
      // import { AppRoutingModule } from './app-routing.module';


      var routes = [{
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
      }];

      var DetailPageModule = function DetailPageModule() {
        _classCallCheck(this, DetailPageModule);
      };

      DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"], _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_11__["ImageModalPage"], _checklist_modal_checklist_modal_page__WEBPACK_IMPORTED_MODULE_12__["ChecklistModalPage"]],
        entryComponents: [_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_11__["ImageModalPage"], _checklist_modal_checklist_modal_page__WEBPACK_IMPORTED_MODULE_12__["ChecklistModalPage"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }]
      })], DetailPageModule);
      /***/
    },

    /***/
    "RC+5":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/detail/detail.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function RC5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!---->\n<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button type=\"submit\" defaultHref=\"/tabs/services\" text=\"Back\"\n                             (click)=\"saveWO(workorderdetail.workorderid)\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{serviceName}}</ion-title>\n        <ion-buttons slot=\"primary\">\n            <ion-button type=\"button\" text=\"View Photos\" (click)=\"goToGallery(workorderdetail.workorderid)\">View\n                Photos\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form #form=\"ngForm\" (ngSubmit)=\"saveWO(workorderdetail.workorderid)\">\n        <ion-list>\n            <div class=\"readonly-fields\">\n                <ion-item-group>\n                    <!--read only fields -->\n                    <ion-item lines=\"none\">\n                        <ion-label position=\"stacked\">Contact Name</ion-label>\n                        <ion-text>{{workorderdetail.firstname}} {{workorderdetail.lastname}}</ion-text>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-label position=\"stacked\">Secondary Contact Name</ion-label>\n                        <ion-text>{{workorderdetail.secondary_contact_name}}</ion-text>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-label position=\"stacked\">Address Details</ion-label>\n                        <ion-text *ngIf=\"workorderdetail.mailingpobox\">{{workorderdetail.mailingstreet}}\n                            , {{workorderdetail.mailingpobox}}, {{workorderdetail.mailingcity}}\n                            , {{workorderdetail.mailingstate}} {{workorderdetail.mailingzip}}</ion-text>\n                        <ion-text *ngIf=\"!workorderdetail.mailingpobox\">{{workorderdetail.mailingstreet}}\n                            , {{workorderdetail.mailingcity}}\n                            , {{workorderdetail.mailingstate}} {{workorderdetail.mailingzip}}</ion-text>\n                        <ion-button target=\"_blank\" color=\"secondary\"\n                                    href=\"https://maps.apple.com/?daddr={{workorderdetail.mailingstreet}}, {{workorderdetail.mailingcity}}, {{workorderdetail.mailingstate}} {{workorderdetail.mailingzip}}\"\n                                    size=\"default\" slot=\"end\" type=\"button\">\n                            <ion-icon name=\"navigate\" size=\"large\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-label position=\"stacked\">Contact Mobile Phone</ion-label>\n                        <ion-text>{{workorderdetail.mobile}}</ion-text>\n                        <ion-button target=\"_self\" color=\"secondary\" (click)=\"transferee(workorderdetail.mobile)\"\n                                    size=\"default\" slot=\"end\" type=\"button\">\n                            <ion-icon name=\"call\" size=\"large\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-label position=\"stacked\">Secondary Contact Mobile Phone</ion-label>\n                        <ion-text>{{workorderdetail.secondary_contact_mobile}}</ion-text>\n                        <ion-button target=\"_self\" color=\"secondary\"\n                                    (click)=\"transferee(workorderdetail.secondary_contact_mobile)\" size=\"default\"\n                                    slot=\"end\" type=\"button\">\n                            <ion-icon name=\"call\" size=\"large\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                </ion-item-group>\n\n                <br><br>\n                <!--\n                <ion-item lines=\"none\">\n                    <ion-label>Equipment List</ion-label>\n                </ion-item>\n                <div *ngIf=\"countItemList > 0\">\n                    <ion-grid class=\"ion-padding\">\n                        <ion-row class=\"ion-align-items-center ion-justify-content-center\"\n                                 *ngFor=\"let item of itemgrid\">\n                            <ion-col class=\"padding-left-none\" size=\"9\">\n                                {{item.itemname}}\n                            </ion-col>\n                            <ion-col size=\"3\" align-self-center class=\"text-align-center\">\n                                <ion-text> {{item.quantity}}</ion-text>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n                <p class=\"ion-padding\" *ngIf=\"countItemList == 0\">No Equipment Available</p>\n                -->\n            </div>\n            <!-- read only fields -->\n\n\n            <!-- editable fields -->\n            <div *ngIf=\"isCompleteWO == 0\">\n                <ion-item-group *ngFor=\"let blockservice of servicedetail\">\n                    <div *ngIf=\"blockservice.blockname != 'Array Information'\">\n                    <ion-item class=\"blockheader_2\" lines=\"full\">\n                    <ion-label class=\"ion-padding blockheader\" (click)=\"toggleSection(blockservice.blockname)\">{{blockservice.blockname}}</ion-label>\n                    <ion-icon *ngIf=\"!blockGroups[blockservice.blockname].open\" name=\"arrow-forward\" slot=\"end\"></ion-icon>\n                    <ion-icon *ngIf=\"blockGroups[blockservice.blockname].open\" name=\"arrow-down\" slot=\"end\"></ion-icon>\n                    </ion-item>\n                    <div [ngClass]=\"{'section-active': blockGroups[blockservice.blockname].open, 'section': !blockGroups[blockservice.blockname].open}\">\n                        <ion-item detail=\"false\" *ngFor=\"let service of blockservice.fields;\">\n                            <ion-label position=\"stacked\">{{service.fieldlabel}}</ion-label>\n\n                            <div [ngSwitch]=\"service.uitype\">\n                                <!--uitype = 10-->\n                                <ion-text *ngSwitchCase=\"10\">{{service.value}} </ion-text>\n\n                                <!--uitype = 56-->\n                                <div *ngSwitchCase=\"56\">\n                                    <ion-checkbox (ionChange)=\"addUpdate($event)\" *ngIf=\"service.value == 1\" checked=\"true\"\n                                                name=\"{{service.columnname}}\">{{service.value}} </ion-checkbox>\n                                    <ion-checkbox (ionChange)=\"addUpdate($event)\" *ngIf=\"service.value != 1\"\n                                                name=\"{{service.columnname}}\">{{service.value}} </ion-checkbox>\n                                </div>\n\n                                <!--uitype = 15.16-->\n                                <ion-select (ionChange)=\"addUpdate($event)\" *ngSwitchCase=\"16\" name=\"{{service.columnname}}\"\n                                            value=\"{{service.value}}\">\n                                    <ion-select-option\n                                            *ngFor=\"let picklist of service.picklist\">{{picklist}}</ion-select-option>\n                                </ion-select>\n                                <ion-select (ionChange)=\"addUpdate($event)\" *ngSwitchCase=\"15\" name=\"{{service.columnname}}\"\n                                            value=\"{{service.value}}\">\n                                    <ion-select-option\n                                            *ngFor=\"let picklist of service.picklist\">{{picklist}}</ion-select-option>\n                                </ion-select>\n                                <!--uitype = 33-->\n                                <ion-select (ionChange)=\"addUpdate($event)\" *ngSwitchCase=\"33\" name=\"{{service.columnname}}\"\n                                            multiple=\"true\">\n                                    <ion-select-option\n                                            *ngFor=\"let picklist of service.picklist\">{{picklist}}</ion-select-option>\n                                </ion-select>\n                                <!-- uitype = 7 -->\n                                <ion-input (ionInput)=\"addUpdate($event)\" *ngSwitchCase=\"7\" type=\"number\"\n                                        name=\"{{service.columnname}}\" value=\"{{service.value | number}}\"></ion-input>\n                                <!-- uitype = 9 -->\n                                <ion-input (ionInput)=\"addUpdate($event)\" *ngSwitchCase=\"9\" type=\"text\"\n                                        name=\"{{service.columnname}}\" value=\"{{service.value | number}}\"\n                                        width=\"100%\"></ion-input>\n                                <!--else-->\n                                <ion-input (ionInput)=\"addUpdate($event)\" type=\"text\" name=\"{{service.columnname}}\"\n                                        *ngSwitchDefault value=\"{{service.value}}\"></ion-input>\n\n                                <!--uitype = 19.20-->\n                                <ion-textarea (ionInput)=\"addUpdate($event)\" auto-grow=\"true\" name=\"{{service.columnname}}\"\n                                            rows=\"3\" *ngSwitchCase=\"19\" value=\"{{service.value}}\"\n                                            width=\"100%\"></ion-textarea>\n                                <ion-textarea (ionInput)=\"addUpdate($event)\" auto-grow=\"true\" name=\"{{service.columnname}}\"\n                                            rows=\"3\" *ngSwitchCase=\"20\" value=\"{{service.value}}\"\n                                            width=\"100%\"></ion-textarea>\n\n                            </div>\n                        </ion-item>\n                    </div>\n                    </div>\n                </ion-item-group>\n                \n                <div class=\"readonly-fields\">\n                    <ion-item-group>\n                        <br>\n                        <ion-item lines=\"none\">\n                            <ion-text>Array Information</ion-text>\n                        </ion-item>\n                        <br>\n                    </ion-item-group>\n                </div>\n                    \n                <div class=\"array_info\">\n                    <table class=\"tableizer-table\">\n                        <thead>\n                        <tr class=\"tableizer-firstrow\">\n                            <th></th>\n                            <th>Azimuth</th>\n                            <th>Roof Pitch</th>\n                            <th># of Panels</th>\n                            <th>Efficiency</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <td class=\"orange\">Array #1</td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_1_azimuth\" value=\"{{arrayfields['cf_array_1_azimuth']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_1_roof_pitch\" value=\"{{arrayfields['cf_array_1_roof_pitch']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_1_number_of_panels\" value=\"{{arrayfields['cf_array_1_number_of_panels']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_1_efficiency\" value=\"{{arrayfields['cf_array_1_efficiency']}}\"></ion-input>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"orange\">Array #2</td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_2_azimuth\" value=\"{{arrayfields['cf_array_2_azimuth']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_2_roof_pitch\" value=\"{{arrayfields['cf_array_2_roof_pitch']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_2_number_of_panels\" value=\"{{arrayfields['cf_array_2_number_of_panels']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_2_efficiency\" value=\"{{arrayfields['cf_array_2_efficiency']}}\"></ion-input>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"orange\">Array #3</td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_3_azimuth\" value=\"{{arrayfields['cf_array_3_azimuth']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_3_roof_pitch\" value=\"{{arrayfields['cf_array_3_roof_pitch']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_3_number_of_panels\" value=\"{{arrayfields['cf_array_3_number_of_panels']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_3_efficiency\" value=\"{{arrayfields['cf_array_3_efficiency']}}\"></ion-input>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"orange\">Array #4</td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_4_azimuth\" value=\"{{arrayfields['cf_array_4_azimuth']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_4_roof_pitch\" value=\"{{arrayfields['cf_array_4_roof_pitch']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_4_number_of_panels\" value=\"{{arrayfields['cf_array_4_number_of_panels']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_4_efficiency\" value=\"{{arrayfields['cf_array_4_efficiency']}}\"></ion-input>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"orange\">Array #5</td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_5_azimuth\" value=\"{{arrayfields['cf_array_5_azimuth']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_5_roof_pitch\" value=\"{{arrayfields['cf_array_5_roof_pitch']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_5_number_of_panels\" value=\"{{arrayfields['cf_array_5_number_of_panels']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_5_efficiency\" value=\"{{arrayfields['cf_array_5_efficiency']}}\"></ion-input>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"orange\">Array #6</td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_6_azimuth\" value=\"{{arrayfields['cf_array_6_azimuth']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_6_roof_pitch\" value=\"{{arrayfields['cf_array_6_roof_pitch']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_6_number_of_panels\" value=\"{{arrayfields['cf_array_6_number_of_panels']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_6_efficiency\" value=\"{{arrayfields['cf_array_6_efficiency']}}\"></ion-input>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"orange\">Array #7</td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_7_azimuth\" value=\"{{arrayfields['cf_array_7_azimuth']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_7_roof_pitch\" value=\"{{arrayfields['cf_array_7_roof_pitch']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_7_number_of_panels\" value=\"{{arrayfields['cf_array_7_number_of_panels']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_7_efficiency\" value=\"{{arrayfields['cf_array_7_efficiency']}}\"></ion-input>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"orange\">Array #8</td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_8_azimuth\" value=\"{{arrayfields['cf_array_8_azimuth']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_8_roof_pitch\" value=\"{{arrayfields['cf_array_8_roof_pitch']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_8_number_of_panels\" value=\"{{arrayfields['cf_array_8_number_of_panels']}}\"></ion-input>\n                            </td>\n                            <td>\n                                <ion-input (ionInput)=\"addUpdate($event)\" class=\"table-input\"\n                                           id=\"cf_array_8_efficiency\" value=\"{{arrayfields['cf_array_8_efficiency']}}\"></ion-input>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n                <br>\n\n                <div class=\"button-grouping ion-padding\">\n                    <ion-button (click)=\"saveWO(workorderdetail.workorderid)\" expand=\"full\" size=\"large\" expand=\"block\" color=\"secondary\" >Complete Work Order\n                    </ion-button>\n                </div>\n            </div>\n\n            <!-- if WO is Completed, Cancelled, Closed, make fields readonly-->\n            <div *ngIf=\"isCompleteWO == 1\">\n                <ion-item detail=\"false\" *ngFor=\"let service of servicedetail\" lines=\"none\">\n                    <ion-label position=\"stacked\">{{service.fieldlabel}}</ion-label>\n                    <div [ngSwitch]=\"service.uitype\">\n                        <div *ngSwitchCase=\"56\">\n                            <ion-text *ngIf=\"service.value == 1\">Yes</ion-text>\n                            <ion-text *ngIf=\"service.value != 1\">No</ion-text>\n                        </div>\n                        <ion-text *ngSwitchDefault>{{service.value}} </ion-text>\n                    </div>\n                </ion-item>\n            </div>\n\n            <!-- editable fields -->\n            <div><br><br><br><br><br></div>\n        </ion-list>\n    </form>\n\n    <!--photos buttons -->\n        <div *ngIf=\"isCompleteWO == 0\" class=\"button-grouping ion-padding anchor-bottom\">\n            <ion-grid class=\"ion-no-padding\">\n                <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n                    <ion-col class=\"padding-left-none\" size=\"12\">\n                        <ion-button expand=\"full\" size=\"large\" expand=\"block\" color=\"secondary\"\n                                    (click)=\"openChecklist(workorderdetail.workorderid)\">\n                            <ion-icon name=\"camera\"></ion-icon>\n                            <ion-text class=\"add-photo-button\">\n                                Add Photos\n                            </ion-text>\n                        </ion-button>\n                    </ion-col>\n                    \n                    <!--\n                    <ion-col size=\"3\">\n                        <ion-button size=\"large\" expand=\"block\" color=\"secondary\"\n                                    (click)=\"openLibrary(workorderdetail.workorderid)\">\n                            <ion-icon name=\"folder-open\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                    -->\n                </ion-row>\n            </ion-grid>\n        </div>\n        <!--photos buttons -->\n</ion-content>\n";
      /***/
    },

    /***/
    "T/xh":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/checklist-modal/checklist-modal.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TXh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar text-center>\n        <ion-title style=\"display: inline-block;\">{{modalTitle}}</ion-title>\n        <ion-icon name=\"close\" (click)=\"closeModal()\" size=\"large\" style=\"float: right;\"></ion-icon>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <form #form=\"ngForm\"  (ngSubmit)=\"completeOrder(serviceid)\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"7\"><b>Photos Required</b></ion-col>\n                <ion-col size=\"5\">\n                    <div style=\"text-align: center;\"><b>Status</b></div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\"></ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let service of servicedetail\" style=\"align-items: center;\">\n                <ion-col size=\"7\">{{service.fieldlabel}} <span  *ngIf=\"service.imagecount != null\"><b>({{service.imagecount}})</b></span></ion-col>\n                <ion-col size=\"5\" style=\"text-align: center;\">\n                    <ion-item-group>\n                        <ion-button *ngIf=\"service.value == 1\" color=\"success\" (click)=\"openActionSheet(serviceid,service.columnname)\">\n                            <ion-icon name=\"camera\"></ion-icon>\n                        </ion-button>\n                        <ion-button *ngIf=\"service.value == 0\" color=\"danger\" (click)=\"openActionSheet(serviceid,service.columnname)\">\n                            <ion-icon name=\"camera\"></ion-icon>\n                        </ion-button>\n                        <ion-button *ngIf=\"service.value == 1\" color=\"tertiary\" title=\"Preview\" (click)=\"goToGallery(serviceid,service.columnname,service.fieldlabel)\">\n                            <ion-icon name=\"images\"></ion-icon>\n                        </ion-button>\n                    </ion-item-group>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>";
      /***/
    },

    /***/
    "WzFK":
    /*!**************************************************************************!*\
      !*** ./src/app/services/image-confirm-modal/image-confirm-modal.page.ts ***!
      \**************************************************************************/

    /*! exports provided: ImageConfirmModalPage */

    /***/
    function WzFK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageConfirmModalPage", function () {
        return ImageConfirmModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_image_confirm_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./image-confirm-modal.page.html */
      "iolX");
      /* harmony import */


      var _image_confirm_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-confirm-modal.page.scss */
      "6QZd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../providers/constant/constant */
      "UyhH");
      /* harmony import */


      var _providers_image_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../providers/image/image */
      "7TIH");
      /* harmony import */


      var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../image-modal/image-modal.page */
      "XSBL");
      /* harmony import */


      var _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/action-sheet/ngx */
      "Xk1G");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "Pn9U");

      var ImageConfirmModalPage = /*#__PURE__*/function () {
        function ImageConfirmModalPage(camera, actionSheet, imgpov, modalController, navParams, httpClient, toastController, appConst, loadingController) {
          _classCallCheck(this, ImageConfirmModalPage);

          this.camera = camera;
          this.actionSheet = actionSheet;
          this.imgpov = imgpov;
          this.modalController = modalController;
          this.navParams = navParams;
          this.httpClient = httpClient;
          this.toastController = toastController;
          this.appConst = appConst;
          this.loadingController = loadingController;
          this.photo = {
            title: '',
            primary_title: '',
            secondary_title: '',
            tower_section: '',
            serviceid: '',
            base64Image: ''
          };
          this.buttonLabels = ['Take Photo', 'Upload from Library'];
          this.actionOptions = {
            title: 'Which would you like to do?',
            buttonLabels: this.buttonLabels,
            addCancelButtonWithLabel: 'Cancel',
            androidTheme: 1 //this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,

          };
          this.options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false //true causes crash probably due to permissions to access library.

          };
          this.libraryOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
          };
          this.apiurl = this.appConst.getApiUrl();
        }

        _createClass(ImageConfirmModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //console.table(this.navParams);
            this.modelId = this.navParams.data.paramID;
            this.serviceid = this.navParams.data.serviceid;
            this.columnname = this.navParams.data.columnname;
            this.modalTitle = this.navParams.data.paramTitle;
            this.user_id = this.navParams.data.user_id;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
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
          key: "ConfirmModalYes",
          value: function ConfirmModalYes(serviceid, columnname) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var headers, params;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log('ConfirmModalYes SOId and collumn');
                      console.log('serviceid', serviceid);
                      console.log('columnname', columnname);
                      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
                      headers.append("Accept", 'application/json');
                      headers.append('Content-Type', 'application/json');
                      headers.append('Access-Control-Allow-Origin', '*');
                      params = {
                        serviceid: serviceid,
                        columnname: columnname,
                        logged_in_user: this.user_id,
                        mode: 'complete_category',
                        completed: 'yes'
                      };
                      this.showLoading();
                      this.httpClient.post(this.apiurl + "postPhotos.php", params, {
                        headers: headers,
                        observe: 'response'
                      }).subscribe(function (data) {
                        _this2.hideLoading();

                        if (data['body']['success'] == true) {
                          _this2.presentToastPrimary('Category updated sccessfully. \n');

                          _this2.closeModal();
                        } else {
                          console.log('upload failed');

                          _this2.presentToast('Upload failed! Please try again \n');
                        }
                      }, function (error) {
                        _this2.hideLoading();

                        _this2.presentToast("Upload failed! Please try again \n" + error.message);
                      });

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "ConfirmModalNo",
          value: function ConfirmModalNo(serviceid, columnname) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.presentToastPrimary('Continue image uploading. \n');
                      this.closeModal();
                      this.openActionSheet(serviceid, columnname);

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "openActionSheet",
          value: function openActionSheet(serviceid, columnname) {
            var _this3 = this;

            console.log('launching actionsheet');
            console.log('serviceid', serviceid);
            console.log('columnname', columnname);
            this.actionSheet.show(this.actionOptions).then(function (buttonIndex) {
              console.log('launching camera');

              _this3.camera.getPicture(_this3.options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64 (DATA_URL):
                var base64Image = 'data:image/png;base64,' + imageData;

                _this3.imgpov.setImage(imageData);

                _this3.openModal(serviceid, base64Image, columnname); // TODO: need code to upload to server here.
                // On success: show toast
                //this.presentToastPrimary('Photo uploaded and added! \n' + imageData);

              }, function (err) {
                // Handle error
                console.error(err); // On Fail: show toast

                _this3.presentToast("Upload failed! Please try again \n" + err);
              });
            })["catch"](function (err) {
              console.log(err);

              _this3.presentToast("Operation failed! \n" + err);
            });
          }
        }, {
          key: "openModal",
          value: function openModal(serviceid, base64Image, columnname) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.modalController.create({
                        component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_8__["ImageModalPage"],
                        componentProps: {
                          "base64Image": base64Image,
                          "paramTitle": "Edit Photo",
                          "serviceid": serviceid,
                          "columnname": columnname,
                          "user_id": this.user_id
                        }
                      });

                    case 2:
                      modal = _context6.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this4.dataReturned = dataReturned.data; //alert('Modal Sent Data :'+ dataReturned);
                        }
                      });
                      _context6.next = 6;
                      return modal.present();

                    case 6:
                      return _context6.abrupt("return", _context6.sent);

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 3500,
                        position: "bottom",
                        color: "danger"
                      });

                    case 2:
                      toast = _context7.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "presentToastPrimary",
          value: function presentToastPrimary(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000,
                        position: "bottom",
                        color: "primary"
                      });

                    case 2:
                      toast = _context8.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return ImageConfirmModalPage;
      }();

      ImageConfirmModalPage.ctorParameters = function () {
        return [{
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]
        }, {
          type: _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_9__["ActionSheet"]
        }, {
          type: _providers_image_image__WEBPACK_IMPORTED_MODULE_7__["ImageProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _providers_constant_constant__WEBPACK_IMPORTED_MODULE_6__["AppConstants"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      ImageConfirmModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-image-confirm-modal',
        template: _raw_loader_image_confirm_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_image_confirm_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"], _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_9__["ActionSheet"], _providers_image_image__WEBPACK_IMPORTED_MODULE_7__["ImageProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _providers_constant_constant__WEBPACK_IMPORTED_MODULE_6__["AppConstants"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], ImageConfirmModalPage);
      /***/
    },

    /***/
    "XSBL":
    /*!**********************************************************!*\
      !*** ./src/app/services/image-modal/image-modal.page.ts ***!
      \**********************************************************/

    /*! exports provided: ImageModalPage */

    /***/
    function XSBL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageModalPage", function () {
        return ImageModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_image_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./image-modal.page.html */
      "Yebe");
      /* harmony import */


      var _image_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-modal.page.scss */
      "7mcv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "gRf5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _providers_image_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../providers/image/image */
      "7TIH");
      /* harmony import */


      var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../providers/constant/constant */
      "UyhH");
      /* harmony import */


      var _image_confirm_modal_image_confirm_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../image-confirm-modal/image-confirm-modal.page */
      "WzFK");

      var ImageModalPage = /*#__PURE__*/function () {
        function ImageModalPage(modalController, modalCtrl, navParams, httpClient, pickerCtrl, transfer, formBuilder, toastController, imgpov, appConst, loadingController) {
          _classCallCheck(this, ImageModalPage);

          this.modalController = modalController;
          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.httpClient = httpClient;
          this.pickerCtrl = pickerCtrl;
          this.transfer = transfer;
          this.formBuilder = formBuilder;
          this.toastController = toastController;
          this.imgpov = imgpov;
          this.appConst = appConst;
          this.loadingController = loadingController;
          this.photo = {
            title: '',
            primary_title: '',
            secondary_title: '',
            tower_section: '',
            serviceid: '',
            base64Image: ''
          };
          this.imageData = this.imgpov.getImage();
          this.apiurl = this.appConst.getApiUrl();
        }

        _createClass(ImageModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //console.table(this.navParams);
            this.modelId = this.navParams.data.paramID;
            this.serviceid = this.navParams.data.serviceid;
            this.columnname = this.navParams.data.columnname;
            this.modalTitle = this.navParams.data.paramTitle;
            this.user_id = this.navParams.data.user_id;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      onClosedData = "Wrapped Up!";
                      _context9.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "showPicker",
          value: function showPicker() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this5 = this;

              var x, optionValues, opts, picker;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      optionValues = [];

                      for (x = 0; x < 101; x++) {
                        optionValues.push({
                          text: x,
                          value: x
                        });
                      }

                      opts = {
                        cssClass: 'section-picker',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'section-picker-cancel'
                        }, {
                          text: 'Confirm',
                          cssClass: 'section-picker-confirm'
                        }],
                        columns: [{
                          name: 'section',
                          options: optionValues
                        }]
                      };
                      _context11.next = 5;
                      return this.pickerCtrl.create(opts);

                    case 5:
                      picker = _context11.sent;
                      picker.present();
                      picker.onDidDismiss().then(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                          var col;
                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  _context10.next = 2;
                                  return picker.getColumn('section');

                                case 2:
                                  col = _context10.sent;

                                  if (col.options[col.selectedIndex].text) {
                                    this.photo.tower_section = col.options[col.selectedIndex].text;

                                    if (this.photo.primary_title !== '' || this.photo.secondary_title !== '') {
                                      this.photo.title = this.photo.primary_title + "-" + this.photo.secondary_title + "-" + this.photo.tower_section;
                                    } else {
                                      this.photo.title = this.photo.tower_section;
                                    } //this.photo.title = this.photo.primary_title + "-" + this.photo.secondary_title + "-" + col.options[col.selectedIndex].text;

                                  }

                                case 4:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10, this);
                        }));
                      });

                    case 8:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      this.loading = _context12.sent;
                      _context12.next = 5;
                      return this.loading.present();

                    case 5:
                      return _context12.abrupt("return", _context12.sent);

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      setTimeout(function () {
                        if (_this6.loading != undefined) {
                          _this6.loading.dismiss();
                        }
                      }, 1000);

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          }
        }, {
          key: "modifyTowerSection",
          value: function modifyTowerSection(direction) {
            if (direction == 'up') {
              var val = parseInt(this.photo.tower_section) + 1;
              this.photo.tower_section = val.toString();
              this.photo.title = this.photo.primary_title + "-" + this.photo.secondary_title + "-" + this.photo.tower_section;
            } else if (direction == 'down') {
              var val = parseInt(this.photo.tower_section) - 1;
              this.photo.tower_section = val.toString();
              this.photo.title = this.photo.primary_title + "-" + this.photo.secondary_title + "-" + this.photo.tower_section;
            }
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this7 = this;

              var headers;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
                      headers.append("Accept", 'application/json');
                      headers.append('Content-Type', 'application/json');
                      headers.append('Access-Control-Allow-Origin', '*');
                      form.value.base64Image = this.imageData;
                      form.value.serviceid = this.serviceid;
                      form.value.columnname = this.columnname;
                      form.value.logged_in_user = this.user_id;
                      form.value.mode = 'image_upload';
                      console.log('adding photo for', form.value.serviceid);
                      console.log('adding photo columnname', form.value.columnname);
                      this.showLoading();
                      this.httpClient.post(this.apiurl + "postPhotos.php", form.value, {
                        headers: headers,
                        observe: 'response'
                      }).subscribe(function (data) {
                        _this7.hideLoading(); //console.log(data['_body']);


                        if (data['body']['success'] == true) {
                          _this7.presentToastPrimary('Photo uploaded and added to Work Order \n');

                          _this7.closeModal();

                          _this7.openConfirmModal(_this7.serviceid, _this7.columnname);
                        } else {
                          console.log('upload failed');

                          _this7.presentToast('Upload failed! Please try again \n');
                        }
                      }, function (error) {
                        _this7.hideLoading(); //console.log(error);
                        //console.log(error.message);
                        //console.error(error.message);


                        _this7.presentToast("Upload failed! Please try again \n" + error.message);
                      });

                    case 13:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "openConfirmModal",
          value: function openConfirmModal(serviceid, columnname) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this8 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.modalCtrl.create({
                        component: _image_confirm_modal_image_confirm_modal_page__WEBPACK_IMPORTED_MODULE_10__["ImageConfirmModalPage"],
                        componentProps: {
                          "paramTitle": "Confirm",
                          "serviceid": serviceid,
                          "columnname": columnname,
                          "user_id": this.user_id
                        }
                      });

                    case 2:
                      modal = _context15.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this8.dataReturned = dataReturned.data; //alert('Modal Sent Data :'+ dataReturned);
                        }
                      });
                      _context15.next = 6;
                      return modal.present();

                    case 6:
                      return _context15.abrupt("return", _context15.sent);

                    case 7:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "fillTitlePrimary",
          value: function fillTitlePrimary(title) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      this.photo.primary_title = title;

                      if (this.photo.secondary_title !== '' || this.photo.tower_section !== '') {
                        this.photo.title = this.photo.primary_title + "-" + this.photo.secondary_title + "-" + this.photo.tower_section;
                      } else {
                        this.photo.title = title;
                      }

                    case 2:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "fillTitleSecondary",
          value: function fillTitleSecondary(title) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      this.photo.secondary_title = title;

                      if (this.photo.primary_title !== '' || this.photo.tower_section !== '') {
                        this.photo.title = this.photo.primary_title + "-" + this.photo.secondary_title + "-" + this.photo.tower_section;
                      } else {
                        this.photo.title = this.photo.secondary_title;
                      }

                    case 2:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "fillTowerSection",
          value: function fillTowerSection(section) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      this.photo.tower_section = section;

                      if (this.photo.primary_title !== '' || this.photo.secondary_title !== '') {
                        this.photo.title = this.photo.primary_title + "-" + this.photo.secondary_title + "-" + this.photo.tower_section;
                      } else {
                        this.photo.title = this.photo.tower_section;
                      }

                    case 2:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var toast;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 3500,
                        position: "bottom",
                        color: "danger"
                      });

                    case 2:
                      toast = _context19.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "presentToastPrimary",
          value: function presentToastPrimary(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var toast;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000,
                        position: "bottom",
                        color: "primary"
                      });

                    case 2:
                      toast = _context20.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }]);

        return ImageModalPage;
      }();

      ImageModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _providers_image_image__WEBPACK_IMPORTED_MODULE_8__["ImageProvider"]
        }, {
          type: _providers_constant_constant__WEBPACK_IMPORTED_MODULE_9__["AppConstants"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      ImageModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-image-modal',
        template: _raw_loader_image_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_image_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _providers_image_image__WEBPACK_IMPORTED_MODULE_8__["ImageProvider"], _providers_constant_constant__WEBPACK_IMPORTED_MODULE_9__["AppConstants"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], ImageModalPage);
      /***/
    },

    /***/
    "Yebe":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/image-modal/image-modal.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Yebe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar text-center>\n        <ion-title>{{modalTitle}}</ion-title>\n        <ion-icon name=\"close\" (click)=\"closeModal()\" size=\"large\"></ion-icon>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form #form=\"ngForm\"  (ngSubmit)=\"uploadImage(form)\">\n        <ion-input type=\"text\" hidden ng-show=\"false\" [(ngModel)]=\"photo.serviceid\" name=\"serviceid\" value=\"{{serviceid}}\"></ion-input>\n        <ion-input type=\"text\" hidden ng-show=\"false\" [(ngModel)]=\"photo.columnname\" name=\"columnname\" value=\"{{columnname}}\"></ion-input>\n    <ion-card>\n        <ion-card-header>\n            <ion-card-subtitle>Image Preview</ion-card-subtitle>\n        </ion-card-header>\n         <img src=\"{{base64Image}}\" />\n        <ion-input type=\"text\"  ng-show=\"false\" [(ngModel)]=\"photo.base64Image\" name=\"base64Image\" value=\"{{base64Image}}\"></ion-input>\n        <ion-card-header>\n            <ion-card-subtitle>\n                <ion-label position=\"stacked\">Image Description</ion-label>\n            </ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n            <ion-input type=\"text\" oninput=\"\" size=\"100\" required=\"\" [(ngModel)]=\"photo.title\" name=\"notecontent\" class=\"title-input\" placeholder=\"Enter a description...\"></ion-input>\n        </ion-card-content>\n\n    </ion-card>\n    <div class=\"button-grouping ion-padding\">\n        <ion-button size=\"large\" expand=\"block\" color=\"primary\" type=\"submit\">\n            <ion-text>Save</ion-text>\n        </ion-button>\n    </div>\n    </form>\n</ion-content>";
      /***/
    },

    /***/
    "hwqA":
    /*!************************************************!*\
      !*** ./src/app/services/detail/detail.page.ts ***!
      \************************************************/

    /*! exports provided: DetailPage */

    /***/
    function hwqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
        return DetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detail.page.html */
      "RC+5");
      /* harmony import */


      var _detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detail.page.scss */
      "Jvbl");
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


      var _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/action-sheet/ngx */
      "Xk1G");
      /* harmony import */


      var _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/photo-library/ngx */
      "QIw3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "Pn9U");
      /* harmony import */


      var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../image-modal/image-modal.page */
      "XSBL");
      /* harmony import */


      var _checklist_modal_checklist_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../checklist-modal/checklist-modal.page */
      "ivwk");
      /* harmony import */


      var _providers_image_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../providers/image/image */
      "7TIH");
      /* harmony import */


      var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../providers/constant/constant */
      "UyhH");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+"); //import { formatDate } from '@angular/common';
      //import { File } from '@ionic-native/file/ngx';
      // @ts-ignore


      var DetailPage = /*#__PURE__*/function () {
        //actionSheet:any;
        function DetailPage(navCtrl, router, storage, activatedRoute, //public actionSheetController: ActionSheetController,
        camera, //private file: File,
        toastController, alertController, actionSheet, photoLibrary, modalCtrl, imgpov, appConst, httpClient, iab, locale, loadingController) {
          _classCallCheck(this, DetailPage);

          this.navCtrl = navCtrl;
          this.router = router;
          this.storage = storage;
          this.activatedRoute = activatedRoute;
          this.camera = camera;
          this.toastController = toastController;
          this.alertController = alertController;
          this.actionSheet = actionSheet;
          this.photoLibrary = photoLibrary;
          this.modalCtrl = modalCtrl;
          this.imgpov = imgpov;
          this.appConst = appConst;
          this.httpClient = httpClient;
          this.iab = iab;
          this.locale = locale;
          this.loadingController = loadingController;
          this.buttonLabels = ['Take Photo', 'Upload from Library'];
          this.actionOptions = {
            title: 'Which would you like to do?',
            buttonLabels: this.buttonLabels,
            addCancelButtonWithLabel: 'Cancel',
            androidTheme: 1 //this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,

          };
          this.options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false //true causes crash probably due to permissions to access library.

          };
          this.libraryOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
          };
          this.isCompleteWO = 0;
          this.workorderdetail = [];
          this.servicedetail = [];
          this.itemgrid = [];
          this.countItemList = 0;
          this.updatefields = {};
          this.arrayfields = {};
          this.blockGroups = {
            'Visit Details': {
              open: false
            },
            'Customer Questions': {
              open: false
            },
            'Structural and Roof Details': {
              open: false
            },
            'Main Service Panel': {
              open: false
            },
            'System': {
              open: false
            }
          };
          this.blockGroups['Visit Details'].open = false;
          this.blockGroups['Customer Questions'].open = false;
          this.blockGroups['Structural and Roof Details'].open = false;
          this.blockGroups['Main Service Panel'].open = false;
          this.blockGroups['System'].open = false;
          this.apiurl = this.appConst.getApiUrl();
        }

        _createClass(DetailPage, [{
          key: "showLoading",
          value: function showLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      console.log('loading detail');
                      _context21.next = 3;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 3:
                      this.loading = _context21.sent;
                      _context21.next = 6;
                      return this.loading.present();

                    case 6:
                      return _context21.abrupt("return", _context21.sent);

                    case 7:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      setTimeout(function () {
                        if (_this9.loading != undefined) {
                          _this9.loading.dismiss();
                        }
                      }, 1000);

                    case 1:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22);
            }));
          }
        }, {
          key: "addUpdate",
          value: function addUpdate(event) {
            var fieldname = event.target.name;

            if (fieldname) {
              fieldname = event.target.id;
            }

            var fieldvalue = event.target.textContent + event.target.value;

            if (fieldname == 'cf_climb' || fieldname == 'cf_overnight' || event.target.tagName == 'ION-CHECKBOX') {
              fieldvalue = event.detail.checked ? 1 : 0;
            }

            if (event.target.tagName == 'ION-TEXTAREA' || event.target.tagName == 'ION-SELECT') {
              fieldvalue = event.target.value;
            }

            this.updatefields['wostatus'] = 'In-Process';
            this.updatefields[fieldname] = fieldvalue;
            console.log('adding update to queue: ', fieldname, fieldvalue);
            console.log(this.updatefields);
          }
        }, {
          key: "decodeHTML",
          value: function decodeHTML(html) {
            var txt = document.createElement('textarea');
            txt.innerHTML = html;
            return txt.value;
          }
        }, {
          key: "toggleSection",
          value: function toggleSection(section) {
            this.blockGroups[section].open = !this.blockGroups[section].open;
            console.log('section is toggled', section, this.blockGroups[section].open);
          }
        }, {
          key: "loadDetails",
          value: function loadDetails(serviceid) {
            var _this10 = this;

            console.log('loading details for service id:', serviceid);
            var params = {
              record_id: serviceid
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            this.showLoading();
            this.httpClient.post(this.apiurl + "getWorkOrderDetail.php", params, {
              headers: headers,
              observe: 'response'
            }).subscribe(function (data) {
              _this10.hideLoading(); //console.log(data['body']);


              var success = data['body']['success'];
              console.log('getWorkOrderDetail response was', success);

              if (success == true) {
                var workorder = data['body']['data'];
                var allfields = data['body']['allfields'];
                allfields.description.replace(/\n/g, "<br>");

                var longitude = _this10.decodeHTML(allfields.cf_longtitude);

                allfields.cf_longtitude = longitude;
                console.log('allfields are', allfields);
                _this10.workorderdetail = allfields;

                if (allfields.wostatus == 'Cancelled' || allfields.wostatus == 'Closed' || allfields.wostatus == 'Approved') {
                  _this10.isCompleteWO = 1;
                }

                _this10.serviceName = workorder['subject'];

                for (var key in workorder) {
                  if (key != 'subject') {
                    var fieldArray = [];

                    for (var fieldkey in workorder[key]) {
                      if (key == 'Array Information') {
                        _this10.arrayfields[fieldkey] = workorder[key][fieldkey].value;
                      } else {
                        fieldArray.push({
                          columnname: fieldkey,
                          uitype: workorder[key][fieldkey].uitype,
                          value: workorder[key][fieldkey].value,
                          picklist: workorder[key][fieldkey].picklist,
                          fieldlabel: workorder[key][fieldkey].fieldlabel
                        });
                      }
                    }

                    _this10.servicedetail.push({
                      blockname: key,
                      fields: fieldArray
                    });
                  }
                }

                console.log('servicedetail', _this10.servicedetail);
                console.log('arrayfields', _this10.arrayfields); //load item grid 43636

                _this10.httpClient.post(_this10.apiurl + "getItemList.php", params, {
                  headers: headers,
                  observe: 'response'
                }).subscribe(function (data) {
                  _this10.hideLoading();

                  var success = data['body']['success'];

                  if (success == true) {
                    _this10.itemgrid = data['body']['data'];
                    _this10.countItemList = data['body']['count'];
                  }
                });
              } else {
                _this10.hideLoading();

                console.log('failed to fetch record');
              }
            }, function (error) {
              _this10.hideLoading();

              console.log('failed to fetch record');
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var current_theme;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      current_theme = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          //current_theme = userdata.theme.toLowerCase();
                          return userdata.theme.toLowerCase();
                        } else {
                          return false;
                        }
                      });
                      return _context23.abrupt("return", current_theme);

                    case 2:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "updateCurrentTheme",
          value: function updateCurrentTheme(theme) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var userjson;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
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
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "switchTheme",
          value: function switchTheme() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var current_theme, theme_switcher, destination_theme;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
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
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "isLogged",
          value: function isLogged() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var log_status;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      log_status = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          return userdata;
                        } else {
                          return false;
                        }
                      });
                      return _context26.abrupt("return", log_status);

                    case 2:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
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
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var toast;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000,
                        position: "top",
                        color: "danger"
                      });

                    case 2:
                      toast = _context27.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
        }, {
          key: "presentToastPrimary",
          value: function presentToastPrimary(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var toast;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000,
                        position: "bottom",
                        color: "primary"
                      });

                    case 2:
                      toast = _context28.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "openLibrary",
          value: function openLibrary(serviceid) {
            var _this11 = this;

            console.log('launching gallery');
            this.camera.getPicture(this.libraryOptions).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              var base64Image = 'data:image/png;base64,' + imageData;

              _this11.imgpov.setImage(imageData);

              _this11.openModal(serviceid, base64Image); // TODO: need code to upload to server here.
              // On success: show toast
              //this.presentToastPrimary('Photo uploaded and added! \n' + imageData);

            }, function (err) {
              // Handle error
              console.error(err); // On Fail: show toast

              if (err != "has no access to assets") {
                _this11.presentToast("Upload failed! Please try again \n" + err);
              }
            });
          }
        }, {
          key: "openActionSheet",
          value: function openActionSheet(serviceid) {
            var _this12 = this;

            console.log('launching actionsheet');
            this.actionSheet.show(this.actionOptions).then(function (buttonIndex) {
              console.log('Option pressed', buttonIndex);

              if (buttonIndex == 1) {
                console.log('launching camera');

                _this12.camera.getPicture(_this12.options).then(function (imageData) {
                  // imageData is either a base64 encoded string or a file URI
                  // If it's base64 (DATA_URL):
                  var base64Image = 'data:image/png;base64,' + imageData;

                  _this12.imgpov.setImage(imageData);

                  _this12.openModal(serviceid, base64Image); // TODO: need code to upload to server here.
                  // On success: show toast
                  //this.presentToastPrimary('Photo uploaded and added! \n' + imageData);

                }, function (err) {
                  // Handle error
                  console.error(err); // On Fail: show toast

                  _this12.presentToast("Upload failed! Please try again \n" + err);
                });
              } else if (buttonIndex == 2) {
                console.log('launching gallery');

                _this12.camera.getPicture(_this12.libraryOptions).then(function (imageData) {
                  // imageData is either a base64 encoded string or a file URI
                  // If it's base64 (DATA_URL):
                  var base64Image = 'data:image/png;base64,' + imageData;

                  _this12.imgpov.setImage(imageData);

                  _this12.openModal(serviceid, base64Image); // TODO: need code to upload to server here.
                  // On success: show toast
                  //this.presentToastPrimary('Photo uploaded and added! \n' + imageData);

                }, function (err) {
                  // Handle error
                  console.error(err); // On Fail: show toast

                  _this12.presentToast("Upload failed! Please try again \n" + err);
                });
              }
            })["catch"](function (err) {
              console.log(err);

              _this12.presentToast("Operation failed! \n" + err);
            });
          }
        }, {
          key: "openChecklist",
          value: function openChecklist(record_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var _this13 = this;

              var modal_checklist;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      console.log('opening checklist for record', record_id);
                      _context29.next = 3;
                      return this.modalCtrl.create({
                        component: _checklist_modal_checklist_modal_page__WEBPACK_IMPORTED_MODULE_11__["ChecklistModalPage"],
                        componentProps: {
                          "paramTitle": "Photos Checklist",
                          "serviceid": record_id,
                          "current_updates": this.updatefields,
                          "user_id": this.userinfo.id
                        }
                      });

                    case 3:
                      modal_checklist = _context29.sent;
                      modal_checklist.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this13.dataReturned = dataReturned.data; //alert('Modal Sent Data :'+ dataReturned);
                        }
                      });
                      _context29.next = 7;
                      return modal_checklist.present();

                    case 7:
                      return _context29.abrupt("return", _context29.sent);

                    case 8:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "call",
          value: function call(phonenumber) {
            console.log('calling ', phonenumber);
            /* this.callNumber.callNumber(phonenumber, true)
            .then(res => console.log("Launched dialer!", res))
            .catch(err => console.log("Error launching", err)) */

            this.iab.create('tel:' + phonenumber, '_system');
          }
        }, {
          key: "sms",
          value: function sms(phonenumber) {
            console.log('smsing ', phonenumber);
            /* this.callNumber.callNumber(phonenumber, true)
            .then(res => console.log("Launched dialer!", res))
            .catch(err => console.log("Error launching", err)) */

            this.iab.create('sms:' + phonenumber, '_system');
          }
        }, {
          key: "email",
          value: function email(_email) {
            console.log('emailing ', _email);
            this.iab.create('mailto:' + _email, '_system');
            /* let emailtemplate = {
              to: email,
              cc: 'chukwumaokere@yahoo.com',
              isHtml: true,
            }
            this.emailComposer.isAvailable().then((available: boolean) => {
              if(available){
                //send
              }
            }) */
          }
        }, {
          key: "transferee",
          value: function transferee(phonenumber) {
            var _this14 = this;

            //console.log('opening action sheet for contact ', phonenumber, this.servicedetail.cf_765 );
            var contactLabels = ['Call: ' + phonenumber, 'SMS: ' + phonenumber];
            var contactOptions = {
              title: 'Which would you like to do?',
              buttonLabels: contactLabels,
              addCancelButtonWithLabel: 'Cancel',
              androidTheme: 1 //this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,

            };
            this.actionSheet.show(contactOptions).then(function (buttonIndex) {
              console.log('Option pressed', buttonIndex);

              if (buttonIndex == 1) {
                _this14.call(phonenumber);
              } else if (buttonIndex == 2) {
                _this14.sms(phonenumber);
              }
            })["catch"](function (err) {
              console.log(err);

              _this14.presentToast("Operation failed! \n" + err);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.activatedRoute.params.subscribe(function (userData) {
              if (userData.length !== 0) {
                _this15.userinfo = userData; //console.log('param user data:', userData);

                try {
                  _this15.loadTheme(userData.theme.toLowerCase());
                } catch (_a) {
                  console.log('couldnt load theme');
                }

                console.log('param user data length:', userData.length);

                if (userData.length == undefined) {
                  console.log('nothing in params, so loading from storage');

                  _this15.isLogged().then(function (result) {
                    if (!(result == false)) {
                      //console.log('loading storage data (within param route function)', result);
                      _this15.userinfo = result;

                      _this15.loadTheme(result.theme.toLowerCase());

                      if (userData.serviceid) {
                        _this15.loadDetails(userData.serviceid);
                      }
                    } else {
                      console.log('nothing in storage, going back to login');

                      _this15.logout();
                    }
                  });
                }
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal(serviceid, base64Image) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var _this16 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return this.modalCtrl.create({
                        component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_10__["ImageModalPage"],
                        componentProps: {
                          "base64Image": base64Image,
                          "paramTitle": "Edit Photo",
                          "serviceid": serviceid,
                          "user_id": this.userinfo.id
                        }
                      });

                    case 2:
                      modal = _context30.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this16.dataReturned = dataReturned.data; //alert('Modal Sent Data :'+ dataReturned);
                        }
                      });
                      _context30.next = 6;
                      return modal.present();

                    case 6:
                      return _context30.abrupt("return", _context30.sent);

                    case 7:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "saveWO",
          value: function saveWO(worecord) {
            var _this17 = this;

            var data = this.updatefields;
            var data_stringified = JSON.stringify(data);
            var logged_in_uid = this.userinfo.id;
            console.log('attempting to submitting data to vtiger', worecord, data);
            var params = {
              recordid: worecord,
              updates: data_stringified,
              logged_in_user: logged_in_uid
            };
            console.log("params being sent", params);

            if (Object.keys(data).length > 0) {
              console.log('Some data was changed, pushing ' + Object.keys(data).length + ' changes');
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"]();
              headers.append("Accept", 'application/json');
              headers.append('Content-Type', 'application/x-www-form-urlencoded');
              headers.append('Access-Control-Allow-Origin', '*');
              this.showLoading();
              this.httpClient.post(this.apiurl + "postWorkOrderInfo.php", params, {
                headers: headers,
                observe: 'response'
              }).subscribe(function (data) {
                _this17.hideLoading();

                var success = data['body']['success'];
                console.log(data['body']);

                if (success == true) {
                  console.log("Saved and updated data for workorder");
                } else {
                  _this17.presentToast('Failed to save due to an error');

                  console.log('failed to save record, response was false');
                }
              }, function (error) {
                _this17.presentToast('Failed to save due to an error \n' + error.message);

                console.log('failed to save record', error.message);
              });
            } else {
              this.hideLoading();
              console.log('no data modified for record', worecord);
            }
          }
        }, {
          key: "checkJHA",
          value: function checkJHA(serviceid, siteCoordinate) {
            var _this18 = this;

            console.log('loading details for service id:', serviceid);
            console.log('loading cf_site_coordinate:', siteCoordinate);
            var params = {
              record_id: serviceid
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            this.showLoading();
            this.httpClient.post(this.apiurl + "checkDocumentJHA.php", params, {
              headers: headers,
              observe: 'response'
            }).subscribe(function (data) {
              _this18.hideLoading();

              console.log(data['body']);
              var success = data['body']['success'];
              console.log('getChecklist response was', success);

              if (success == true) {
                var number_of_document_jha = data['body']['data'];
                console.log('number jha documnet', number_of_document_jha);

                if (number_of_document_jha == 0) {
                  var lat_long = siteCoordinate.split(',');
                  var lat = lat_long[0].trim();

                  var _long = lat_long[1].trim();

                  console.log('lat' + lat);
                  console.log('long' + _long); // this.router.navigateByUrl(`/services/jha/${serviceid}`, {state: {}});

                  _this18.router.navigate(['/services/jha'], {
                    queryParams: {
                      serviceid: serviceid,
                      lat: lat,
                      "long": _long
                    }
                  });
                }
              } else {
                console.log('failed to fetch record');
              }
            }, function (error) {
              _this18.hideLoading();

              console.log('failed to fetch record');
            });
          }
        }, {
          key: "goToGallery",
          value: function goToGallery(serviceid) {
            this.router.navigate(["/services/detail/".concat(serviceid, "/gallery"), {
              servicename: this.serviceName
            }]);
          }
        }]);

        return DetailPage;
      }();

      DetailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_6__["ActionSheet"]
        }, {
          type: _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_7__["PhotoLibrary"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _providers_image_image__WEBPACK_IMPORTED_MODULE_12__["ImageProvider"]
        }, {
          type: _providers_constant_constant__WEBPACK_IMPORTED_MODULE_13__["AppConstants"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"]
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

      DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail',
        template: _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_6__["ActionSheet"], _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_7__["PhotoLibrary"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _providers_image_image__WEBPACK_IMPORTED_MODULE_12__["ImageProvider"], _providers_constant_constant__WEBPACK_IMPORTED_MODULE_13__["AppConstants"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"], String, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], DetailPage);
      /***/
    },

    /***/
    "iolX":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/image-confirm-modal/image-confirm-modal.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iolX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar text-center>\n        <ion-title>{{modalTitle}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header class=\"ion-padding\">\n            <ion-card-title style=\"text-align: center;\">Are you finished taking pictures for this category?</ion-card-title>\n        </ion-card-header>\n        <div class=\"button-grouping ion-padding\">\n            <ion-grid class=\"ion-no-padding\">\n                <ion-row class=\"ion-align-items-center ion-justify-content-center\" >\n                    <ion-col class=\"padding-left-none\" size=\"6\">\n                        <ion-button size=\"default\" expand=\"block\" color=\"primary\" (click)=\"ConfirmModalYes(serviceid,columnname)\">\n                            <ion-text>Yes</ion-text>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-button size=\"default\" expand=\"block\" color=\"danger\" (click)=\"ConfirmModalNo(serviceid,columnname)\">\n                            <ion-text>No</ion-text>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </ion-card>\n</ion-content>";
      /***/
    },

    /***/
    "ivwk":
    /*!******************************************************************!*\
      !*** ./src/app/services/checklist-modal/checklist-modal.page.ts ***!
      \******************************************************************/

    /*! exports provided: ChecklistModalPage */

    /***/
    function ivwk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChecklistModalPage", function () {
        return ChecklistModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checklist_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checklist-modal.page.html */
      "T/xh");
      /* harmony import */


      var _checklist_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checklist-modal.page.scss */
      "rLjz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../providers/constant/constant */
      "UyhH");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "Pn9U");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "U3FU");
      /* harmony import */


      var _providers_image_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../providers/image/image */
      "7TIH");
      /* harmony import */


      var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../image-modal/image-modal.page */
      "XSBL");
      /* harmony import */


      var _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/action-sheet/ngx */
      "Xk1G");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ChecklistModalPage = /*#__PURE__*/function () {
        function ChecklistModalPage(camera, photoviewer, imgpov, modalCtrl, modalController, navParams, httpClient, toastController, navCtrl, appConst, router, loadingController, actionSheet) {
          _classCallCheck(this, ChecklistModalPage);

          this.camera = camera;
          this.photoviewer = photoviewer;
          this.imgpov = imgpov;
          this.modalCtrl = modalCtrl;
          this.modalController = modalController;
          this.navParams = navParams;
          this.httpClient = httpClient;
          this.toastController = toastController;
          this.navCtrl = navCtrl;
          this.appConst = appConst;
          this.router = router;
          this.loadingController = loadingController;
          this.actionSheet = actionSheet;
          this.updatefields = {};
          this.checklistDetail = {};
          this.workorderdetail = [];
          this.servicedetail = [];
          this.buttonLabels = ['Take Photo', 'Upload from Library'];
          this.actionOptions = {
            title: 'Which would you like to do?',
            buttonLabels: this.buttonLabels,
            addCancelButtonWithLabel: 'Cancel',
            androidTheme: 1 //this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,

          };
          this.options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false //true causes crash probably due to permissions to access library.

          };
          this.libraryOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
          };
          this.apiurl = this.appConst.getApiUrl();
        }

        _createClass(ChecklistModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //console.table(this.navParams);
            this.modelId = this.navParams.data.paramID;
            this.serviceid = this.navParams.data.serviceid;
            this.modalTitle = this.navParams.data.paramTitle;
            this.user_id = this.navParams.data.user_id;
            this.updatefields = this.navParams.data.current_updates;
            this.loadChecklist(this.serviceid);
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return this.loadingController.create({
                        message: 'Loading ...'
                      });

                    case 2:
                      this.loading = _context31.sent;
                      _context31.next = 5;
                      return this.loading.present();

                    case 5:
                      return _context31.abrupt("return", _context31.sent);

                    case 6:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var _this19 = this;

              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      setTimeout(function () {
                        if (_this19.loading != undefined) {
                          _this19.loading.dismiss();
                        }
                      }, 1000);

                    case 1:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32);
            }));
          }
        }, {
          key: "loadChecklist",
          value: function loadChecklist(serviceid) {
            var _this20 = this;

            console.log('loading details for service id:', serviceid);
            var params = {
              record_id: serviceid
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            this.showLoading();
            this.httpClient.post(this.apiurl + "getChecklist.php", params, {
              headers: headers,
              observe: 'response'
            }).subscribe(function (data) {
              _this20.hideLoading();

              console.log(data['body']);
              var success = data['body']['success'];
              console.log('getChecklist response was', success);

              if (success == true) {
                var workorder = data['body']['data'];
                var allfields = data['body']['allfields'];
                _this20.workorderdetail = allfields;

                for (var key in workorder) {
                  _this20.servicedetail.push({
                    columnname: key,
                    uitype: workorder[key].uitype,
                    value: workorder[key].value,
                    fieldlabel: workorder[key].fieldlabel,
                    imagecount: workorder[key].imagecount ? workorder[key].imagecount : null
                  });

                  _this20.checklistDetail[key] = workorder[key].value;
                }

                console.log('workorder', _this20.servicedetail);
              } else {
                console.log('failed to fetch record');
              }
            }, function (error) {
              _this20.hideLoading();

              console.log('failed to fetch record');
            });
          }
        }, {
          key: "openCamera",
          value: function openCamera(serviceid, columnname) {
            var _this21 = this;

            console.log('launching camera');
            this.camera.getPicture(this.options).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              var base64Image = 'data:image/png;base64,' + imageData;

              _this21.imgpov.setImage(imageData);

              _this21.openModal(serviceid, base64Image, columnname); // TODO: need code to upload to server here.
              // On success: show toast
              //this.presentToastPrimary('Photo uploaded and added! \n' + imageData);

            }, function (err) {
              // Handle error
              console.error(err); // On Fail: show toast

              if (err != "no image selected") {
                _this21.presentToast("Upload failed! Please try again \n" + err);
              }
            });
          }
        }, {
          key: "previewImage",
          value: function previewImage(imagepath) {
            console.log('launching image viewer image =>', imagepath);

            if (imagepath != '' && typeof imagepath !== 'undefined') {
              this.photoviewer.show(imagepath);
            } else {
              // Handle error
              console.error('Image preview failed, no image');
              this.presentToast('Image preview failed.');
            }
          }
        }, {
          key: "openLibrary",
          value: function openLibrary(serviceid, columnname) {
            var _this22 = this;

            console.log('launching gallery');
            this.camera.getPicture(this.libraryOptions).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              var base64Image = 'data:image/png;base64,' + imageData;

              _this22.imgpov.setImage(imageData);

              _this22.openModal(serviceid, base64Image, columnname); // TODO: need code to upload to server here.
              // On success: show toast
              //this.presentToastPrimary('Photo uploaded and added! \n' + imageData);

            }, function (err) {
              // Handle error
              console.error(err); // On Fail: show toast

              if (err != "has no access to assets") {
                _this22.presentToast("Upload failed! Please try again \n" + err);
              }
            });
          }
        }, {
          key: "openActionSheet",
          value: function openActionSheet(serviceid, columnname) {
            var _this23 = this;

            console.log('launching actionsheet');
            this.actionSheet.show(this.actionOptions).then(function (buttonIndex) {
              console.log('Option pressed', buttonIndex);

              if (buttonIndex == 1) {
                console.log('launching camera');

                _this23.camera.getPicture(_this23.options).then(function (imageData) {
                  // imageData is either a base64 encoded string or a file URI
                  // If it's base64 (DATA_URL):
                  var base64Image = 'data:image/png;base64,' + imageData;

                  _this23.imgpov.setImage(imageData);

                  _this23.openModal(serviceid, base64Image, columnname); // TODO: need code to upload to server here.
                  // On success: show toast
                  //this.presentToastPrimary('Photo uploaded and added! \n' + imageData);

                }, function (err) {
                  // Handle error
                  console.error(err); // On Fail: show toast

                  _this23.presentToast("Upload failed! Please try again \n" + err);
                });
              } else if (buttonIndex == 2) {
                console.log('launching gallery');

                _this23.camera.getPicture(_this23.libraryOptions).then(function (imageData) {
                  // imageData is either a base64 encoded string or a file URI
                  // If it's base64 (DATA_URL):
                  var base64Image = 'data:image/png;base64,' + imageData;

                  _this23.imgpov.setImage(imageData);

                  _this23.openModal(serviceid, base64Image, columnname); // TODO: need code to upload to server here.
                  // On success: show toast
                  //this.presentToastPrimary('Photo uploaded and added! \n' + imageData);

                }, function (err) {
                  // Handle error
                  console.error(err); // On Fail: show toast

                  _this23.presentToast("Upload failed! Please try again \n" + err);
                });
              }
            })["catch"](function (err) {
              console.log(err);

              _this23.presentToast("Operation failed! \n" + err);
            });
          }
        }, {
          key: "openModal",
          value: function openModal(serviceid, base64Image, columnname) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var _this24 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this.modalCtrl.create({
                        component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_10__["ImageModalPage"],
                        componentProps: {
                          "base64Image": base64Image,
                          "paramTitle": "Edit Photo",
                          "serviceid": serviceid,
                          "columnname": columnname,
                          "user_id": this.user_id
                        }
                      });

                    case 2:
                      modal = _context33.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned !== null) {
                          _this24.dataReturned = dataReturned.data; //alert('Modal Sent Data :'+ dataReturned);
                        }
                      });
                      _context33.next = 6;
                      return modal.present();

                    case 6:
                      return _context33.abrupt("return", _context33.sent);

                    case 7:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return this.modalController.dismiss();

                    case 2:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              var toast;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      _context35.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 3500,
                        position: "bottom",
                        color: "danger"
                      });

                    case 2:
                      toast = _context35.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          }
        }, {
          key: "presentToastPrimary",
          value: function presentToastPrimary(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              var toast;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      _context36.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000,
                        position: "bottom",
                        color: "primary"
                      });

                    case 2:
                      toast = _context36.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));
          }
        }, {
          key: "completeOrder",
          value: function completeOrder(serviceid) {
            var _this25 = this;

            console.log('Save Checklist for WO id =', serviceid);
            this.updatefields['wostatus'] = 'Completed';
            var data = this.updatefields;
            var data_stringified = JSON.stringify(data);
            var logged_in_uid = this.user_id;
            console.log('attempting to submitting data to vtiger', serviceid, data);
            var params = {
              recordid: serviceid,
              updates: data_stringified,
              logged_in_user: logged_in_uid
            };

            if (Object.keys(data).length > 0) {
              console.log('Some data was changed, pushing ' + Object.keys(data).length + ' changes');
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
              headers.append("Accept", 'application/json');
              headers.append('Content-Type', 'application/x-www-form-urlencoded');
              headers.append('Access-Control-Allow-Origin', '*');
              this.showLoading();
              this.httpClient.post(this.apiurl + "postWorkOrderInfo.php", params, {
                headers: headers,
                observe: 'response'
              }).subscribe(function (data) {
                _this25.hideLoading();

                var success = data['body']['success'];

                if (success == true) {
                  _this25.navCtrl.navigateForward('/tabs/services');

                  _this25.closeModal();

                  console.log("Saved and updated data for workorder");
                } else {
                  _this25.presentToast('Failed to save due to an error');

                  console.log('failed to save record, response was false');
                }
              }, function (error) {
                _this25.hideLoading();

                _this25.presentToast('Failed to save due to an error \n' + error.message);

                console.log('failed to save record', error.message);
              });
            } else {
              this.closeModal();
              console.log('no data modified for record', serviceid);
            }
          }
        }, {
          key: "addUpdate",
          value: function addUpdate(event, value) {
            console.log(event);
            var fieldname = event.target.name;
            console.log(fieldname);
            var is_checked = event.detail.checked;
            /*  if(is_checked && value =='N/A'){
                  console.log('aaa');
                  this.checklistDetail.site_photo = false;
                  console.log(this.checklistDetail.site_photo);
              }*/

            this.updatefields[fieldname] = value;
            console.log('adding update to queue: ', fieldname, value);
            console.log(this.updatefields);
          }
        }, {
          key: "checkItem",
          value: function checkItem(columnname, value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37);
            }));
          }
        }, {
          key: "goToGallery",
          value: function goToGallery(serviceid, columnname, fieldlabel) {
            this.router.navigate(["/services/detail/".concat(serviceid, "/gallery"), {
              servicename: fieldlabel,
              columnname: columnname
            }]);
            this.closeModal();
          }
        }]);

        return ChecklistModalPage;
      }();

      ChecklistModalPage.ctorParameters = function () {
        return [{
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"]
        }, {
          type: _providers_image_image__WEBPACK_IMPORTED_MODULE_9__["ImageProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _providers_constant_constant__WEBPACK_IMPORTED_MODULE_6__["AppConstants"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_11__["ActionSheet"]
        }];
      };

      ChecklistModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checklist-modal',
        template: _raw_loader_checklist_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checklist_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"], _providers_image_image__WEBPACK_IMPORTED_MODULE_9__["ImageProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _providers_constant_constant__WEBPACK_IMPORTED_MODULE_6__["AppConstants"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_11__["ActionSheet"]])], ChecklistModalPage);
      /***/
    },

    /***/
    "rLjz":
    /*!********************************************************************!*\
      !*** ./src/app/services/checklist-modal/checklist-modal.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function rLjz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2xpc3QtbW9kYWwucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=services-detail-detail-module-es5.js.map