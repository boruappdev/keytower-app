(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"], {
    /***/
    "3ros":
    /*!*******************************************!*\
      !*** ./src/app/gallery/gallery.module.ts ***!
      \*******************************************/

    /*! exports provided: GalleryPageModule */

    /***/
    function ros(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function () {
        return GalleryPageModule;
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


      var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./gallery.page */
      "vl1N");

      var routes = [{
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]
      }];

      var GalleryPageModule = function GalleryPageModule() {
        _classCallCheck(this, GalleryPageModule);
      };

      GalleryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
      })], GalleryPageModule);
      /***/
    },

    /***/
    "GVE3":
    /*!*******************************************!*\
      !*** ./src/app/gallery/gallery.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function GVE3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".gallery {\n  flex-wrap: wrap;\n}\n\n.galleryimage {\n  padding: 5px;\n  -webkit-margin-start: 0px;\n  margin-inline-start: 0x;\n  -webkit-margin-end: 0px;\n  margin-inline-end: 0px;\n}\n\n.na {\n  text-overflow: unset;\n  white-space: normal;\n  padding: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dhbGxlcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQ0E7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUVKIiwiZmlsZSI6ImdhbGxlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnl7XG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdhbGxlcnlpbWFnZXtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDBweDsgXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHg7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiAwcHg7IFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5uYXtcbiAgICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHBhZGRpbmc6IHVuc2V0O1xufSJdfQ== */";
      /***/
    },

    /***/
    "XHaQ":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function XHaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  \n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <ion-back-button type=\"button\" defaultHref=\"/services\" text=\"Back\" (click)=\"goToDetail(serviceid)\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <!-- <ion-button type=\"button\" text=\"Edit Photos\" (click)=\"editPhotos()\">\n        <ion-text id=\"editphotos-button\" *ngIf=\"current_mode=='view'\">Edit Photos</ion-text>\n        <ion-text id=\"editphotos-button\" *ngIf=\"current_mode=='edit'\">Done Editing</ion-text>\n      </ion-button> -->\n    </ion-buttons>\n    <ion-title>{{serviceName}}'s Photos</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <!-- <ion-button expand=\"block\" (click)=\"launchCamera()\" text=\"Add Photos\"><ion-icon name=\"add\"></ion-icon><ion-text>Add Photos</ion-text></ion-button> -->\n  <div class=\"gallery\" *ngIf=\"propertypics?.length > 0\">    \n    <ion-card class=\"galleryimage\" *ngFor=\"let image of propertypics\" [id]=\"image\">\n      <ion-img [src]=\"image\" width=\"150px\"></ion-img>\n      <ion-fab vertical=\"top\" horizontal=\"end\" size=\"small\" *ngIf=\"current_mode=='edit'\">\n        <ion-fab-button type=\"button\" size=\"small\" color=\"danger\" (click)=\"deletePhoto(image)\" style=\"height: 30px; width: 30px;\">\n          <ion-icon name=\"close-circle\" role=\"img\" aria-label=\"close\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-card>\n  </div>\n  <div class=\"not-available\" *ngIf=\"propertypics?.length == 0\">\n      <ion-title class=\"na\">There are currently no images for this service</ion-title>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "vl1N":
    /*!*****************************************!*\
      !*** ./src/app/gallery/gallery.page.ts ***!
      \*****************************************/

    /*! exports provided: GalleryPage */

    /***/
    function vl1N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryPage", function () {
        return GalleryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gallery_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gallery.page.html */
      "XHaQ");
      /* harmony import */


      var _gallery_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gallery.page.scss */
      "GVE3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "Pn9U");
      /* harmony import */


      var _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/photo-library/ngx */
      "QIw3");
      /* harmony import */


      var _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/action-sheet/ngx */
      "Xk1G");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../providers/constant/constant */
      "UyhH");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var GalleryPage = /*#__PURE__*/function () {
        function GalleryPage(storage, toastController, alertController, activatedRoute, router, camera, actionSheet, photoLibrary, navCtrl, loadingController, appConst, httpClient) {
          _classCallCheck(this, GalleryPage);

          this.storage = storage;
          this.toastController = toastController;
          this.alertController = alertController;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.camera = camera;
          this.actionSheet = actionSheet;
          this.photoLibrary = photoLibrary;
          this.navCtrl = navCtrl;
          this.loadingController = loadingController;
          this.appConst = appConst;
          this.httpClient = httpClient;
          this.current_mode = "view";
          this.buttonLabels = ['Take Photo', 'Upload from Library'];
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
          this.actionOptions = {
            title: 'Which would you like to do?',
            buttonLabels: this.buttonLabels,
            addCancelButtonWithLabel: 'Cancel',
            androidTheme: 1 //this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,

          };
          this.apiurl = this.appConst.getApiUrl();
        }

        _createClass(GalleryPage, [{
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
          /* Default Auth Guard and Theme Loader */

        }, {
          key: "logout",
          value: function logout() {
            console.log('logging out, no user data found');
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
          key: "loadTheme",
          value: function loadTheme(theme) {
            document.body.classList.toggle(theme, true);
          }
          /* Default Auth Guard and Theme Loader */

        }, {
          key: "loadImages",
          value: function loadImages(recordid, columnname) {
            var _this2 = this;

            /* this.propertyimages = pi.propertiesimages;
            console.log('loading images for', room, recordid);
            var images = this.propertyimages.filter(object => {
              return object.recordid == recordid;
            });
            console.log(images[0].rooms[room].images);
            var pics = images[0].rooms[room].images;
            this.propertypics = pics; */
            var params = {
              recordid: recordid,
              columnname: columnname
            };
            console.log('fetching documents for', params);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHeaders"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            this.showLoading();
            this.httpClient.post(this.apiurl + "getPhotos.php", params, {
              headers: headers,
              observe: 'response'
            }).subscribe(function (data) {
              console.log(data['body']);
              var success = data['body']['success'];
              console.log('fetching photos response was', success);

              if (success == true) {
                _this2.propertypics = data['body']['data'];
              } else {
                console.log('fetch photos failed');

                _this2.hideLoading();
              }

              _this2.hideLoading();
            }, function (error) {
              _this2.hideLoading();

              console.log('fetch errored out', error);
            });
          }
        }, {
          key: "launchCamera",
          value: function launchCamera() {
            var _this3 = this;

            console.log('launching actionsheet');
            this.actionSheet.show(this.actionOptions).then(function (buttonIndex) {
              console.log('Option pressed', buttonIndex);

              if (buttonIndex == 1) {
                console.log('launching camera');

                _this3.camera.getPicture(_this3.options).then(function (imageData) {
                  // imageData is either a base64 encoded string or a file URI
                  // If it's base64 (DATA_URL):
                  var base64Image = 'data:image/jpeg;base64,' + imageData;
                  console.log(base64Image); // TODO: need code to upload to server here.
                  // On success: show toast

                  _this3.presentToastPrimary('Photo uploaded and added! \n' + imageData);
                }, function (err) {
                  // Handle error
                  console.error(err); // On Fail: show toast

                  _this3.presentToast("Upload failed! Please try again \n" + err);
                });
              } else if (buttonIndex == 2) {
                console.log('launching gallery');

                _this3.camera.getPicture(_this3.libraryOptions).then(function (imageData) {
                  // imageData is either a base64 encoded string or a file URI
                  // If it's base64 (DATA_URL):
                  var base64Image = 'data:image/jpeg;base64,' + imageData;
                  console.log(base64Image); // TODO: need code to upload to server here.
                  // On success: show toast

                  _this3.presentToastPrimary('Photo uploaded and added! \n' + imageData);
                }, function (err) {
                  // Handle error
                  console.error(err); // On Fail: show toast

                  _this3.presentToast("Upload failed! Please try again \n" + err);
                });
              }
            })["catch"](function (err) {
              console.log(err);

              _this3.presentToast("Operation failed! \n" + err);
            });
          }
        }, {
          key: "editPhotos",
          value: function editPhotos() {
            if (this.current_mode == 'view') {
              console.log('entering photo edit mode');
              this.current_mode = 'edit'; //display X icon top right of each photo div
            } else {
              console.log('returning to view mode');
              this.current_mode = 'view'; //safety for mode
            }
          }
        }, {
          key: "deletePhoto",
          value: function deletePhoto(recordid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        header: 'Deleting Photo',
                        message: 'Are you sure you want to delete this photo?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('user cancelled request to delete', recordid);
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            console.log('deleting photo');
                            document.getElementById(recordid).style.display = "none"; //some js to deletephoto function
                            //on delete success: 

                            console.log('photo deleted', recordid);

                            _this4.presentToast("Photo deleted!"); //this.presentToast(`Photo deleted! ${recordid}`); //If we want to show asset link
                            //on fail:
                            //console.log('Photo delete failed with error', err);
                            //this.presentToast(`Photo delete failed with error ${err}`);

                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000,
                        position: "bottom",
                        color: "danger"
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "presentToastPrimary",
          value: function presentToastPrimary(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000,
                        position: "bottom",
                        color: "primary"
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
          key: "goToDetail",
          value: function goToDetail(serviceid) {
            this.navCtrl.navigateBack("services/detail/".concat(serviceid));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.activatedRoute.params.subscribe(function (userData) {
              if (userData.length !== 0) {
                _this5.serviceName = userData.servicename;
                _this5.serviceid = userData.serviceid;
                _this5.columnname = userData.columnname;
                _this5.userinfo = userData;
                console.log('param user data:', userData);

                try {
                  _this5.loadTheme(userData.theme.toLowerCase());
                } catch (_a) {
                  console.log('couldnt load theme');
                }

                console.log('param user data length:', userData.length);

                if (userData.length == undefined) {
                  console.log('nothing in params, so loading from storage');

                  _this5.isLogged().then(function (result) {
                    if (!(result == false)) {
                      console.log('loading storage data (within param route function)', result);
                      _this5.userinfo = result;

                      _this5.loadTheme(result.theme.toLowerCase());

                      _this5.loadImages(_this5.serviceid, _this5.columnname);
                    } else {
                      console.log('nothing in storage, going back to login');

                      _this5.logout();
                    }
                  });
                }
              }
            });
          }
        }]);

        return GalleryPage;
      }();

      GalleryPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }, {
          type: _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_7__["ActionSheet"]
        }, {
          type: _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoLibrary"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: _providers_constant_constant__WEBPACK_IMPORTED_MODULE_10__["AppConstants"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]
        }];
      };

      GalleryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gallery',
        template: _raw_loader_gallery_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gallery_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_native_action_sheet_ngx__WEBPACK_IMPORTED_MODULE_7__["ActionSheet"], _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoLibrary"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"], _providers_constant_constant__WEBPACK_IMPORTED_MODULE_10__["AppConstants"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]])], GalleryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=gallery-gallery-module-es5.js.map