(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "4tiO":
    /*!**********************************************************!*\
      !*** ./node_modules/ionic2-calendar/calendar.service.js ***!
      \**********************************************************/

    /*! exports provided: CalendarService */

    /***/
    function tiO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarService", function () {
        return CalendarService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CalendarService =
      /** @class */
      function () {
        function CalendarService() {
          this.currentDateChangedFromParent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.currentDateChangedFromChildren = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.eventSourceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.currentDateChangedFromParent$ = this.currentDateChangedFromParent.asObservable();
          this.currentDateChangedFromChildren$ = this.currentDateChangedFromChildren.asObservable();
          this.eventSourceChanged$ = this.eventSourceChanged.asObservable();
        }

        CalendarService.prototype.setCurrentDate = function (val, fromParent) {
          if (fromParent === void 0) {
            fromParent = false;
          }

          this._currentDate = val;

          if (fromParent) {
            this.currentDateChangedFromParent.next(val);
          } else {
            this.currentDateChangedFromChildren.next(val);
          }
        };

        Object.defineProperty(CalendarService.prototype, "currentDate", {
          get: function get() {
            return this._currentDate;
          },
          enumerable: true,
          configurable: true
        });

        CalendarService.prototype.rangeChanged = function (component) {
          if (this.queryMode === 'local') {
            if (component.eventSource && component.onDataLoaded) {
              component.onDataLoaded();
            }
          } else if (this.queryMode === 'remote') {
            component.onRangeChanged.emit(component.range);
          }
        };

        CalendarService.prototype.getStep = function (mode) {
          switch (mode) {
            case 'month':
              return {
                years: 0,
                months: 1,
                days: 0
              };

            case 'week':
              return {
                years: 0,
                months: 0,
                days: 7
              };

            case 'day':
              return {
                years: 0,
                months: 0,
                days: 1
              };
          }
        };

        CalendarService.prototype.getAdjacentCalendarDate = function (mode, direction) {
          var step = this.getStep(mode);
          var calculateCalendarDate = new Date(this.currentDate.getTime()),
              year = calculateCalendarDate.getFullYear() + direction * step.years,
              month = calculateCalendarDate.getMonth() + direction * step.months,
              date = calculateCalendarDate.getDate() + direction * step.days;
          calculateCalendarDate.setFullYear(year, month, date);

          if (mode === 'month') {
            var firstDayInNextMonth = new Date(year, month + 1, 1);

            if (firstDayInNextMonth.getTime() <= calculateCalendarDate.getTime()) {
              calculateCalendarDate = new Date(firstDayInNextMonth.getTime() - 24 * 60 * 60 * 1000);
            }
          }

          return calculateCalendarDate;
        };

        CalendarService.prototype.getAdjacentViewStartTime = function (component, direction) {
          var adjacentCalendarDate = this.getAdjacentCalendarDate(component.mode, direction);
          return component.getRange(adjacentCalendarDate).startTime;
        };

        CalendarService.prototype.populateAdjacentViews = function (component) {
          var currentViewStartDate,
              currentViewData,
              toUpdateViewIndex,
              currentViewIndex = component.currentViewIndex;

          if (component.direction === 1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
            toUpdateViewIndex = (currentViewIndex + 1) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
          } else if (component.direction === -1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
            toUpdateViewIndex = (currentViewIndex + 2) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
          } else {
            if (!component.views) {
              currentViewData = [];
              currentViewStartDate = component.range.startTime;
              currentViewData.push(component.getViewData(currentViewStartDate));
              currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
              currentViewData.push(component.getViewData(currentViewStartDate));
              currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
              currentViewData.push(component.getViewData(currentViewStartDate));
              component.views = currentViewData;
            } else {
              currentViewStartDate = component.range.startTime;
              component.views[currentViewIndex] = component.getViewData(currentViewStartDate);
              currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
              toUpdateViewIndex = (currentViewIndex + 2) % 3;
              component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
              currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
              toUpdateViewIndex = (currentViewIndex + 1) % 3;
              component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
            }
          }
        };

        CalendarService.prototype.loadEvents = function () {
          this.eventSourceChanged.next();
        };

        CalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CalendarService);
        return CalendarService;
      }();
      /***/

    },

    /***/
    "DsJd":
    /*!****************************************************************!*\
      !*** ./node_modules/ionic2-calendar/__ivy_ngcc__/monthview.js ***!
      \****************************************************************/

    /*! exports provided: MonthViewComponent */

    /***/
    function DsJd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MonthViewComponent", function () {
        return MonthViewComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar.service */
      "FDPr");

      var _c0 = ["monthSlider"];

      function MonthViewComponent_table_4_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dayHeader_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dayHeader_r10);
        }
      }

      function MonthViewComponent_table_4_tr_5_td_1_ng_template_1_Template(rf, ctx) {}

      var _c1 = function _c1(a0, a1, a2) {
        return {
          view: a0,
          row: a1,
          col: a2
        };
      };

      function MonthViewComponent_table_4_tr_5_td_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthViewComponent_table_4_tr_5_td_1_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var col_r13 = ctx.$implicit;

            var row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r15.select(ctx_r15.views[0].dates[row_r11 * 7 + col_r13]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_4_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r13 = ctx.$implicit;

          var row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r12.getHighlightClass(ctx_r12.views[0].dates[row_r11 * 7 + col_r13]));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.monthviewDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c1, ctx_r12.views[0], row_r11, col_r13));
        }
      }

      var _c2 = function _c2() {
        return [0, 1, 2, 3, 4, 5, 6];
      };

      function MonthViewComponent_table_4_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_4_tr_5_td_1_Template, 2, 7, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
        }
      }

      var _c3 = function _c3() {
        return [0, 1, 2, 3, 4, 5];
      };

      function MonthViewComponent_table_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MonthViewComponent_table_4_th_3_Template, 3, 1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MonthViewComponent_table_4_tr_5_Template, 2, 2, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.views[0].dayHeaders);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
        }
      }

      function MonthViewComponent_table_5_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dayHeader_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dayHeader_r21);
        }
      }

      function MonthViewComponent_table_5_tr_5_td_1_ng_template_1_Template(rf, ctx) {}

      function MonthViewComponent_table_5_tr_5_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_5_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r24 = ctx.$implicit;

          var row_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.monthviewInactiveDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c1, ctx_r23.views[0], row_r22, col_r24));
        }
      }

      function MonthViewComponent_table_5_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_5_tr_5_td_1_Template, 2, 6, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
        }
      }

      function MonthViewComponent_table_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MonthViewComponent_table_5_th_3_Template, 3, 1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MonthViewComponent_table_5_tr_5_Template, 2, 2, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.views[0].dayHeaders);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
        }
      }

      function MonthViewComponent_table_7_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dayHeader_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dayHeader_r29);
        }
      }

      function MonthViewComponent_table_7_tr_5_td_1_ng_template_1_Template(rf, ctx) {}

      function MonthViewComponent_table_7_tr_5_td_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthViewComponent_table_7_tr_5_td_1_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var col_r32 = ctx.$implicit;

            var row_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r34.select(ctx_r34.views[1].dates[row_r30 * 7 + col_r32]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_7_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r32 = ctx.$implicit;

          var row_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r31.getHighlightClass(ctx_r31.views[1].dates[row_r30 * 7 + col_r32]));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r31.monthviewDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c1, ctx_r31.views[1], row_r30, col_r32));
        }
      }

      function MonthViewComponent_table_7_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_7_tr_5_td_1_Template, 2, 7, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
        }
      }

      function MonthViewComponent_table_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MonthViewComponent_table_7_th_3_Template, 3, 1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MonthViewComponent_table_7_tr_5_Template, 2, 2, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.views[1].dayHeaders);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
        }
      }

      function MonthViewComponent_table_8_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dayHeader_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dayHeader_r40);
        }
      }

      function MonthViewComponent_table_8_tr_5_td_1_ng_template_1_Template(rf, ctx) {}

      function MonthViewComponent_table_8_tr_5_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_8_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r43 = ctx.$implicit;

          var row_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r42.monthviewInactiveDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c1, ctx_r42.views[1], row_r41, col_r43));
        }
      }

      function MonthViewComponent_table_8_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_8_tr_5_td_1_Template, 2, 6, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
        }
      }

      function MonthViewComponent_table_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MonthViewComponent_table_8_th_3_Template, 3, 1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MonthViewComponent_table_8_tr_5_Template, 2, 2, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.views[1].dayHeaders);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
        }
      }

      function MonthViewComponent_table_10_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dayHeader_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dayHeader_r48);
        }
      }

      function MonthViewComponent_table_10_tr_5_td_1_ng_template_1_Template(rf, ctx) {}

      function MonthViewComponent_table_10_tr_5_td_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthViewComponent_table_10_tr_5_td_1_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54);

            var col_r51 = ctx.$implicit;

            var row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r53.select(ctx_r53.views[2].dates[row_r49 * 7 + col_r51]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_10_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r51 = ctx.$implicit;

          var row_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r50.getHighlightClass(ctx_r50.views[2].dates[row_r49 * 7 + col_r51]));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r50.monthviewDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c1, ctx_r50.views[2], row_r49, col_r51));
        }
      }

      function MonthViewComponent_table_10_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_10_tr_5_td_1_Template, 2, 7, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
        }
      }

      function MonthViewComponent_table_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MonthViewComponent_table_10_th_3_Template, 3, 1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MonthViewComponent_table_10_tr_5_Template, 2, 2, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.views[2].dayHeaders);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
        }
      }

      function MonthViewComponent_table_11_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dayHeader_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dayHeader_r59);
        }
      }

      function MonthViewComponent_table_11_tr_5_td_1_ng_template_1_Template(rf, ctx) {}

      function MonthViewComponent_table_11_tr_5_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_11_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r62 = ctx.$implicit;

          var row_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r61.monthviewInactiveDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c1, ctx_r61.views[2], row_r60, col_r62));
        }
      }

      function MonthViewComponent_table_11_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthViewComponent_table_11_tr_5_td_1_Template, 2, 6, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
        }
      }

      function MonthViewComponent_table_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MonthViewComponent_table_11_th_3_Template, 3, 1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MonthViewComponent_table_11_tr_5_Template, 2, 2, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.views[2].dayHeaders);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
        }
      }

      function MonthViewComponent_ng_template_12_Template(rf, ctx) {}

      var _c4 = function _c4(a0, a1, a2) {
        return {
          showEventDetail: a0,
          selectedDate: a1,
          noEventsLabel: a2
        };
      };

      var MonthViewComponent =
      /** @class */
      function () {
        function MonthViewComponent(calendarService) {
          this.calendarService = calendarService;
          this.autoSelect = true;
          this.dir = "";
          this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
          this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
          this.views = [];
          this.currentViewIndex = 0;
          this.mode = 'month';
          this.direction = 0;
          this.moveOnSelected = false;
          this.inited = false;
          this.callbackOnInit = true;
        }

        MonthViewComponent_1 = MonthViewComponent;

        MonthViewComponent.prototype.ngOnInit = function () {
          var _this = this;

          if (!this.sliderOptions) {
            this.sliderOptions = {};
          }

          this.sliderOptions.loop = true;

          if (this.dateFormatter && this.dateFormatter.formatMonthViewDay) {
            this.formatDayLabel = this.dateFormatter.formatMonthViewDay;
          } else {
            var dayLabelDatePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');

            this.formatDayLabel = function (date) {
              return dayLabelDatePipe_1.transform(date, this.formatDay);
            };
          }

          if (this.dateFormatter && this.dateFormatter.formatMonthViewDayHeader) {
            this.formatDayHeaderLabel = this.dateFormatter.formatMonthViewDayHeader;
          } else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.locale);

            this.formatDayHeaderLabel = function (date) {
              return datePipe_1.transform(date, this.formatDayHeader);
            };
          }

          if (this.dateFormatter && this.dateFormatter.formatMonthViewTitle) {
            this.formatTitle = this.dateFormatter.formatMonthViewTitle;
          } else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.locale);

            this.formatTitle = function (date) {
              return datePipe_2.transform(date, this.formatMonthTitle);
            };
          }

          if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
          }

          if (this.lockSwipes) {
            this.slider.lockSwipes(true);
          }

          this.refreshView();
          this.inited = true;
          this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
          });
          this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
          });
        };

        MonthViewComponent.prototype.ngOnDestroy = function () {
          if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
          }

          if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
          }
        };

        MonthViewComponent.prototype.ngOnChanges = function (changes) {
          if (!this.inited) return;
          var eventSourceChange = changes['eventSource'];

          if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
          }

          var lockSwipeToPrev = changes['lockSwipeToPrev'];

          if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
          }

          var lockSwipes = changes['lockSwipes'];

          if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
          }
        };

        MonthViewComponent.prototype.ngAfterViewInit = function () {
          var title = this.getTitle();
          this.onTitleChanged.emit(title);
        };

        MonthViewComponent.prototype.onSlideChanged = function () {
          var _this = this;

          if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
          }

          var currentSlideIndex = this.slider.getActiveIndex(),
              direction = 0,
              currentViewIndex = this.currentViewIndex;
          this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;

            if (currentSlideIndex - currentViewIndex === 1) {
              direction = 1;
            } else if (currentSlideIndex === 0 && currentViewIndex === 2) {
              direction = 1;

              _this.slider.slideTo(1, 0, false);
            } else if (currentViewIndex - currentSlideIndex === 1) {
              direction = -1;
            } else if (currentSlideIndex === 2 && currentViewIndex === 0) {
              direction = -1;

              _this.slider.slideTo(3, 0, false);
            }

            _this.currentViewIndex = currentSlideIndex;

            _this.move(direction);
          });
        };

        MonthViewComponent.prototype.move = function (direction) {
          if (direction === 0) return;
          this.direction = direction;

          if (!this.moveOnSelected) {
            var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
            this.calendarService.setCurrentDate(adjacentDate);
          }

          this.refreshView();
          this.direction = 0;
          this.moveOnSelected = false;
        };

        MonthViewComponent.prototype.createDateObject = function (date) {
          var disabled = false;

          if (this.markDisabled) {
            disabled = this.markDisabled(date);
          }

          return {
            date: date,
            events: [],
            label: this.formatDayLabel(date),
            secondary: false,
            disabled: disabled
          };
        };

        MonthViewComponent.getDates = function (startDate, n) {
          var dates = new Array(n),
              current = new Date(startDate.getTime()),
              i = 0;
          current.setHours(12); // Prevent repeated dates because of timezone bug

          while (i < n) {
            dates[i++] = new Date(current.getTime());
            current.setDate(current.getDate() + 1);
          }

          return dates;
        };

        MonthViewComponent.prototype.getViewData = function (startTime) {
          var startDate = startTime,
              date = startDate.getDate(),
              month = (startDate.getMonth() + (date !== 1 ? 1 : 0)) % 12;
          var dates = MonthViewComponent_1.getDates(startDate, 42);
          var days = [];

          for (var i = 0; i < 42; i++) {
            var dateObject = this.createDateObject(dates[i]);
            dateObject.secondary = dates[i].getMonth() !== month;
            days[i] = dateObject;
          }

          var dayHeaders = [];

          for (var i = 0; i < 7; i++) {
            dayHeaders.push(this.formatDayHeaderLabel(days[i].date));
          }

          return {
            dates: days,
            dayHeaders: dayHeaders
          };
        };

        MonthViewComponent.prototype.getHighlightClass = function (date) {
          var className = '';

          if (date.hasEvent) {
            if (date.secondary) {
              className = 'monthview-secondary-with-event';
            } else {
              className = 'monthview-primary-with-event';
            }
          }

          if (date.selected) {
            if (className) {
              className += ' ';
            }

            className += 'monthview-selected';
          }

          if (date.current) {
            if (className) {
              className += ' ';
            }

            className += 'monthview-current';
          }

          if (date.secondary) {
            if (className) {
              className += ' ';
            }

            className += 'text-muted';
          }

          if (date.disabled) {
            if (className) {
              className += ' ';
            }

            className += 'monthview-disabled';
          }

          return className;
        };

        MonthViewComponent.prototype.getRange = function (currentDate) {
          var year = currentDate.getFullYear(),
              month = currentDate.getMonth(),
              firstDayOfMonth = new Date(year, month, 1),
              difference = this.startingDayMonth - firstDayOfMonth.getDay(),
              numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference,
              startDate = new Date(firstDayOfMonth.getTime());

          if (numDisplayedFromPreviousMonth > 0) {
            startDate.setDate(-numDisplayedFromPreviousMonth + 1);
          }

          var endDate = new Date(startDate.getTime());
          endDate.setDate(endDate.getDate() + 42);
          return {
            startTime: startDate,
            endTime: endDate
          };
        };

        MonthViewComponent.prototype.onDataLoaded = function () {
          var range = this.range,
              eventSource = this.eventSource,
              len = eventSource ? eventSource.length : 0,
              startTime = range.startTime,
              endTime = range.endTime,
              utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())),
              utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())),
              currentViewIndex = this.currentViewIndex,
              dates = this.views[currentViewIndex].dates,
              oneDay = 86400000,
              eps = 0.0006;

          for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
              dates[r].hasEvent = false;
              dates[r].events = [];
            }
          }

          for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i],
                eventStartTime = new Date(event_1.startTime.getTime()),
                eventEndTime = new Date(event_1.endTime.getTime()),
                st = void 0,
                et = void 0;

            if (event_1.allDay) {
              if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                continue;
              } else {
                st = utcStartTime;
                et = utcEndTime;
              }
            } else {
              if (eventEndTime <= startTime || eventStartTime >= endTime) {
                continue;
              } else {
                st = startTime;
                et = endTime;
              }
            }

            var timeDiff = void 0;
            var timeDifferenceStart = void 0;

            if (eventStartTime <= st) {
              timeDifferenceStart = 0;
            } else {
              timeDiff = eventStartTime.getTime() - st.getTime();

              if (!event_1.allDay) {
                timeDiff = timeDiff - (eventStartTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
              }

              timeDifferenceStart = timeDiff / oneDay;
            }

            var timeDifferenceEnd = void 0;

            if (eventEndTime >= et) {
              timeDiff = et.getTime() - st.getTime();

              if (!event_1.allDay) {
                timeDiff = timeDiff - (et.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
              }

              timeDifferenceEnd = timeDiff / oneDay;
            } else {
              timeDiff = eventEndTime.getTime() - st.getTime();

              if (!event_1.allDay) {
                timeDiff = timeDiff - (eventEndTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
              }

              timeDifferenceEnd = timeDiff / oneDay;
            }

            var index = Math.floor(timeDifferenceStart);

            while (index < timeDifferenceEnd - eps) {
              dates[index].hasEvent = true;
              var eventSet = dates[index].events;

              if (eventSet) {
                eventSet.push(event_1);
              } else {
                eventSet = [];
                eventSet.push(event_1);
                dates[index].events = eventSet;
              }

              index += 1;
            }
          }

          for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
              dates[r].events.sort(this.compareEvent);
            }
          }

          if (this.autoSelect) {
            var findSelected = false;

            for (var r = 0; r < 42; r += 1) {
              if (dates[r].selected) {
                this.selectedDate = dates[r];
                findSelected = true;
                break;
              }
            }

            if (findSelected) {
              this.onTimeSelected.emit({
                selectedTime: this.selectedDate.date,
                events: this.selectedDate.events,
                disabled: this.selectedDate.disabled
              });
            }
          }
        };

        ;

        MonthViewComponent.prototype.refreshView = function () {
          this.range = this.getRange(this.calendarService.currentDate);

          if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
          }

          this.calendarService.populateAdjacentViews(this);
          this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
          this.calendarService.rangeChanged(this);
        };

        MonthViewComponent.prototype.getTitle = function () {
          var currentViewStartDate = this.range.startTime,
              date = currentViewStartDate.getDate(),
              month = (currentViewStartDate.getMonth() + (date !== 1 ? 1 : 0)) % 12,
              year = currentViewStartDate.getFullYear() + (date !== 1 && month === 0 ? 1 : 0),
              headerDate = new Date(year, month, 1, 12, 0, 0, 0);
          return this.formatTitle(headerDate);
        };

        MonthViewComponent.prototype.compareEvent = function (event1, event2) {
          if (event1.allDay) {
            return 1;
          } else if (event2.allDay) {
            return -1;
          } else {
            return event1.startTime.getTime() - event2.startTime.getTime();
          }
        };

        MonthViewComponent.prototype.select = function (viewDate) {
          if (!this.views) return;
          var selectedDate = viewDate.date,
              events = viewDate.events;

          if (!viewDate.disabled) {
            var dates = this.views[this.currentViewIndex].dates,
                currentCalendarDate = this.calendarService.currentDate,
                currentMonth = currentCalendarDate.getMonth(),
                currentYear = currentCalendarDate.getFullYear(),
                selectedMonth = selectedDate.getMonth(),
                selectedYear = selectedDate.getFullYear(),
                direction = 0;

            if (currentYear === selectedYear) {
              if (currentMonth !== selectedMonth) {
                direction = currentMonth < selectedMonth ? 1 : -1;
              }
            } else {
              direction = currentYear < selectedYear ? 1 : -1;
            }

            this.calendarService.setCurrentDate(selectedDate);

            if (direction === 0) {
              var currentViewStartDate = this.range.startTime,
                  oneDay = 86400000,
                  selectedDayDifference = Math.floor((selectedDate.getTime() - currentViewStartDate.getTime() - (selectedDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);

              for (var r = 0; r < 42; r += 1) {
                dates[r].selected = false;
              }

              if (selectedDayDifference >= 0 && selectedDayDifference < 42) {
                dates[selectedDayDifference].selected = true;
                this.selectedDate = dates[selectedDayDifference];
              }
            } else {
              this.moveOnSelected = true;
              this.slideView(direction);
            }
          }

          this.onTimeSelected.emit({
            selectedTime: selectedDate,
            events: events,
            disabled: viewDate.disabled
          });
        };

        MonthViewComponent.prototype.slideView = function (direction) {
          if (direction === 1) {
            this.slider.slideNext();
          } else if (direction === -1) {
            this.slider.slidePrev();
          }
        };

        MonthViewComponent.prototype.updateCurrentView = function (currentViewStartDate, view) {
          var currentCalendarDate = this.calendarService.currentDate,
              today = new Date(),
              oneDay = 86400000,
              selectedDayDifference = Math.floor((currentCalendarDate.getTime() - currentViewStartDate.getTime() - (currentCalendarDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay),
              currentDayDifference = Math.floor((today.getTime() - currentViewStartDate.getTime() - (today.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);

          for (var r = 0; r < 42; r += 1) {
            view.dates[r].selected = false;
          }

          if (selectedDayDifference >= 0 && selectedDayDifference < 42 && !view.dates[selectedDayDifference].disabled && (this.autoSelect || this.moveOnSelected)) {
            view.dates[selectedDayDifference].selected = true;
            this.selectedDate = view.dates[selectedDayDifference];
          } else {
            this.selectedDate = {
              date: null,
              events: [],
              label: null,
              secondary: null,
              disabled: false
            };
          }

          if (currentDayDifference >= 0 && currentDayDifference < 42) {
            view.dates[currentDayDifference].current = true;
          }
        };

        MonthViewComponent.prototype.eventSelected = function (event) {
          this.onEventSelected.emit(event);
        };

        var MonthViewComponent_1;
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('monthSlider'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], MonthViewComponent.prototype, "slider", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], MonthViewComponent.prototype, "monthviewDisplayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], MonthViewComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], MonthViewComponent.prototype, "monthviewEventDetailTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MonthViewComponent.prototype, "formatDay", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MonthViewComponent.prototype, "formatDayHeader", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MonthViewComponent.prototype, "formatMonthTitle", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], MonthViewComponent.prototype, "eventSource", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], MonthViewComponent.prototype, "startingDayMonth", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], MonthViewComponent.prototype, "showEventDetail", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MonthViewComponent.prototype, "noEventsLabel", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], MonthViewComponent.prototype, "autoSelect", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)], MonthViewComponent.prototype, "markDisabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MonthViewComponent.prototype, "locale", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MonthViewComponent.prototype, "dateFormatter", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MonthViewComponent.prototype, "dir", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], MonthViewComponent.prototype, "lockSwipeToPrev", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], MonthViewComponent.prototype, "lockSwipes", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MonthViewComponent.prototype, "sliderOptions", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MonthViewComponent.prototype, "onRangeChanged", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MonthViewComponent.prototype, "onEventSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MonthViewComponent.prototype, "onTimeSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MonthViewComponent.prototype, "onTitleChanged", void 0);
        MonthViewComponent = MonthViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"]])], MonthViewComponent);

        MonthViewComponent.ɵfac = function MonthViewComponent_Factory(t) {
          return new (t || MonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"]));
        };

        MonthViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: MonthViewComponent,
          selectors: [["monthview"]],
          viewQuery: function MonthViewComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
            }
          },
          inputs: {
            autoSelect: "autoSelect",
            dir: "dir",
            sliderOptions: "sliderOptions",
            monthviewDisplayEventTemplate: "monthviewDisplayEventTemplate",
            monthviewInactiveDisplayEventTemplate: "monthviewInactiveDisplayEventTemplate",
            monthviewEventDetailTemplate: "monthviewEventDetailTemplate",
            formatDay: "formatDay",
            formatDayHeader: "formatDayHeader",
            formatMonthTitle: "formatMonthTitle",
            eventSource: "eventSource",
            startingDayMonth: "startingDayMonth",
            showEventDetail: "showEventDetail",
            noEventsLabel: "noEventsLabel",
            markDisabled: "markDisabled",
            locale: "locale",
            dateFormatter: "dateFormatter",
            lockSwipeToPrev: "lockSwipeToPrev",
            lockSwipes: "lockSwipes"
          },
          outputs: {
            onRangeChanged: "onRangeChanged",
            onEventSelected: "onEventSelected",
            onTimeSelected: "onTimeSelected",
            onTitleChanged: "onTitleChanged"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
          decls: 13,
          vars: 14,
          consts: [[3, "options", "dir", "ionSlideDidChange"], ["monthSlider", ""], ["class", "table table-bordered table-fixed monthview-datetable", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "table", "table-bordered", "table-fixed", "monthview-datetable"], [4, "ngFor", "ngForOf"], ["tappable", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["tappable", "", 3, "ngClass", "click"], [1, "text-center"]],
          template: function MonthViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slides", 0, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideDidChange", function MonthViewComponent_Template_ion_slides_ionSlideDidChange_1_listener() {
                return ctx.onSlideChanged();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-slide");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MonthViewComponent_table_4_Template, 6, 3, "table", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MonthViewComponent_table_5_Template, 7, 3, "table", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-slide");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MonthViewComponent_table_7_Template, 6, 3, "table", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MonthViewComponent_table_8_Template, 7, 3, "table", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-slide");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MonthViewComponent_table_10_Template, 6, 3, "table", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MonthViewComponent_table_11_Template, 7, 3, "table", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MonthViewComponent_ng_template_12_Template, 0, 0, "ng-template", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.sliderOptions)("dir", ctx.dir);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 0 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 0 !== ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 1 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 1 !== ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 2 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 2 !== ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.monthviewEventDetailTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](10, _c4, ctx.showEventDetail, ctx.selectedDate, ctx.noEventsLabel));
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
          styles: [".text-muted[_ngcontent-%COMP%] {\n          color: #999;\n        }\n\n        .table-fixed[_ngcontent-%COMP%] {\n          table-layout: fixed;\n        }\n\n        .table[_ngcontent-%COMP%] {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%] {\n          border-top: 0\n        }\n\n        .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered[_ngcontent-%COMP%] {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\n          background-color: #f9f9f9\n        }\n\n        .monthview-primary-with-event[_ngcontent-%COMP%] {\n          background-color: #3a87ad;\n          color: white;\n        }\n\n        .monthview-current[_ngcontent-%COMP%] {\n          background-color: #f0f0f0;\n        }\n\n        .monthview-selected[_ngcontent-%COMP%] {\n          background-color: #009900;\n          color: white;\n        }\n\n        .monthview-datetable[_ngcontent-%COMP%]   td.monthview-disabled[_ngcontent-%COMP%] {\n            color: lightgrey;\n            cursor: default;\n        }\n\n        .monthview-datetable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n          text-align: center;\n        }\n\n        .monthview-datetable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n          cursor: pointer;\n          text-align: center;\n        }\n\n        .monthview-secondary-with-event[_ngcontent-%COMP%] {\n          background-color: #d9edf7;\n        }\n\n        [_ngcontent-%COMP%]::-webkit-scrollbar, *[_ngcontent-%COMP%]::-webkit-scrollbar {\n          display: none;\n        }"]
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MonthViewComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
            args: [{
              selector: 'monthview',
              template: "\n        <div>\n            <ion-slides #monthSlider [options]=\"sliderOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\">\n                <ion-slide>\n                    <table *ngIf=\"0===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[0].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[0].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[0].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[0], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"0!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[0].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[0], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n                <ion-slide>\n                    <table *ngIf=\"1===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[1].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[1].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[1].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[1], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"1!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[1].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[1], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n                <ion-slide>\n                    <table *ngIf=\"2===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[2].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[2].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[2].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[2], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"2!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[2].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[2], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n            </ion-slides>\n            <ng-template [ngTemplateOutlet]=\"monthviewEventDetailTemplate\"\n            [ngTemplateOutletContext]=\"{showEventDetail:showEventDetail, selectedDate: selectedDate, noEventsLabel: noEventsLabel}\">\n            </ng-template>\n        </div>\n    ",
              styles: ["\n        .text-muted {\n          color: #999;\n        }\n\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .monthview-primary-with-event {\n          background-color: #3a87ad;\n          color: white;\n        }\n\n        .monthview-current {\n          background-color: #f0f0f0;\n        }\n\n        .monthview-selected {\n          background-color: #009900;\n          color: white;\n        }\n\n        .monthview-datetable td.monthview-disabled {\n            color: lightgrey;\n            cursor: default;\n        }\n\n        .monthview-datetable th {\n          text-align: center;\n        }\n\n        .monthview-datetable td {\n          cursor: pointer;\n          text-align: center;\n        }\n\n        .monthview-secondary-with-event {\n          background-color: #d9edf7;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n          display: none;\n        }\n    "]
            }]
          }], function () {
            return [{
              type: _calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"]
            }];
          }, {
            autoSelect: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            dir: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            onRangeChanged: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
            }],
            onEventSelected: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
            }],
            onTimeSelected: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
            }],
            onTitleChanged: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
            }],
            sliderOptions: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            slider: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
              args: ['monthSlider']
            }],
            monthviewDisplayEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            monthviewInactiveDisplayEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            monthviewEventDetailTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            formatDay: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            formatDayHeader: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            formatMonthTitle: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            eventSource: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            startingDayMonth: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            showEventDetail: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            noEventsLabel: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            markDisabled: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            locale: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            dateFormatter: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            lockSwipeToPrev: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            lockSwipes: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }]
          });
        })();

        return MonthViewComponent;
      }(); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGh2aWV3LmpzIiwic291cmNlcyI6WyJtb250aHZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0VBb2ZvRSxBQU03RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW9uU2xpZGVzIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhci5zZXJ2aWNlJztcbnZhciBNb250aFZpZXdDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW9udGhWaWV3Q29tcG9uZW50KGNhbGVuZGFyU2VydmljZSkge1xuICAgICAgICB0aGlzLmNhbGVuZGFyU2VydmljZSA9IGNhbGVuZGFyU2VydmljZTtcbiAgICAgICAgdGhpcy5hdXRvU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXIgPSBcIlwiO1xuICAgICAgICB0aGlzLm9uUmFuZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLm9uRXZlbnRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vblRpbWVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICAgICAgIHRoaXMub25UaXRsZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgICAgICB0aGlzLnZpZXdzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXdJbmRleCA9IDA7XG4gICAgICAgIHRoaXMubW9kZSA9ICdtb250aCc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5tb3ZlT25TZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrT25Jbml0ID0gdHJ1ZTtcbiAgICB9XG4gICAgTW9udGhWaWV3Q29tcG9uZW50XzEgPSBNb250aFZpZXdDb21wb25lbnQ7XG4gICAgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLnNsaWRlck9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyT3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2xpZGVyT3B0aW9ucy5sb29wID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGF0ZUZvcm1hdHRlciAmJiB0aGlzLmRhdGVGb3JtYXR0ZXIuZm9ybWF0TW9udGhWaWV3RGF5KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdERheUxhYmVsID0gdGhpcy5kYXRlRm9ybWF0dGVyLmZvcm1hdE1vbnRoVmlld0RheTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXlMYWJlbERhdGVQaXBlXzEgPSBuZXcgRGF0ZVBpcGUoJ2VuLVVTJyk7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdERheUxhYmVsID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF5TGFiZWxEYXRlUGlwZV8xLnRyYW5zZm9ybShkYXRlLCB0aGlzLmZvcm1hdERheSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRhdGVGb3JtYXR0ZXIgJiYgdGhpcy5kYXRlRm9ybWF0dGVyLmZvcm1hdE1vbnRoVmlld0RheUhlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXREYXlIZWFkZXJMYWJlbCA9IHRoaXMuZGF0ZUZvcm1hdHRlci5mb3JtYXRNb250aFZpZXdEYXlIZWFkZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGF0ZVBpcGVfMSA9IG5ldyBEYXRlUGlwZSh0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdERheUhlYWRlckxhYmVsID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZVBpcGVfMS50cmFuc2Zvcm0oZGF0ZSwgdGhpcy5mb3JtYXREYXlIZWFkZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYXRlRm9ybWF0dGVyICYmIHRoaXMuZGF0ZUZvcm1hdHRlci5mb3JtYXRNb250aFZpZXdUaXRsZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXRUaXRsZSA9IHRoaXMuZGF0ZUZvcm1hdHRlci5mb3JtYXRNb250aFZpZXdUaXRsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRlUGlwZV8yID0gbmV3IERhdGVQaXBlKHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0VGl0bGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlUGlwZV8yLnRyYW5zZm9ybShkYXRlLCB0aGlzLmZvcm1hdE1vbnRoVGl0bGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sb2NrU3dpcGVUb1ByZXYpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLmxvY2tTd2lwZVRvUHJldih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sb2NrU3dpcGVzKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlci5sb2NrU3dpcGVzKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlQ2hhbmdlZEZyb21QYXJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmNhbGVuZGFyU2VydmljZS5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tUGFyZW50JC5zdWJzY3JpYmUoZnVuY3Rpb24gKGN1cnJlbnREYXRlKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWZyZXNoVmlldygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudFNvdXJjZUNoYW5nZWRTdWJzY3JpcHRpb24gPSB0aGlzLmNhbGVuZGFyU2VydmljZS5ldmVudFNvdXJjZUNoYW5nZWQkLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkRhdGFMb2FkZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tUGFyZW50U3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQ2hhbmdlZEZyb21QYXJlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVDaGFuZ2VkRnJvbVBhcmVudFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRTb3VyY2VDaGFuZ2VkU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50U291cmNlQ2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZUNoYW5nZWRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGV2ZW50U291cmNlQ2hhbmdlID0gY2hhbmdlc1snZXZlbnRTb3VyY2UnXTtcbiAgICAgICAgaWYgKGV2ZW50U291cmNlQ2hhbmdlICYmIGV2ZW50U291cmNlQ2hhbmdlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkRhdGFMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbG9ja1N3aXBlVG9QcmV2ID0gY2hhbmdlc1snbG9ja1N3aXBlVG9QcmV2J107XG4gICAgICAgIGlmIChsb2NrU3dpcGVUb1ByZXYpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLmxvY2tTd2lwZVRvUHJldihsb2NrU3dpcGVUb1ByZXYuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbG9ja1N3aXBlcyA9IGNoYW5nZXNbJ2xvY2tTd2lwZXMnXTtcbiAgICAgICAgaWYgKGxvY2tTd2lwZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLmxvY2tTd2lwZXMobG9ja1N3aXBlcy5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpO1xuICAgICAgICB0aGlzLm9uVGl0bGVDaGFuZ2VkLmVtaXQodGl0bGUpO1xuICAgIH07XG4gICAgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5vblNsaWRlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tPbkluaXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tPbkluaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudFNsaWRlSW5kZXggPSB0aGlzLnNsaWRlci5nZXRBY3RpdmVJbmRleCgpLCBkaXJlY3Rpb24gPSAwLCBjdXJyZW50Vmlld0luZGV4ID0gdGhpcy5jdXJyZW50Vmlld0luZGV4O1xuICAgICAgICB0aGlzLnNsaWRlci5nZXRBY3RpdmVJbmRleCgpLnRoZW4oZnVuY3Rpb24gKGN1cnJlbnRTbGlkZUluZGV4KSB7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGVJbmRleCA9IChjdXJyZW50U2xpZGVJbmRleCArIDIpICUgMztcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGVJbmRleCAtIGN1cnJlbnRWaWV3SW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFNsaWRlSW5kZXggPT09IDAgJiYgY3VycmVudFZpZXdJbmRleCA9PT0gMikge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2xpZGVyLnNsaWRlVG8oMSwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFZpZXdJbmRleCAtIGN1cnJlbnRTbGlkZUluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50U2xpZGVJbmRleCA9PT0gMiAmJiBjdXJyZW50Vmlld0luZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2xpZGVyLnNsaWRlVG8oMywgMCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuY3VycmVudFZpZXdJbmRleCA9IGN1cnJlbnRTbGlkZUluZGV4O1xuICAgICAgICAgICAgX3RoaXMubW92ZShkaXJlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1vbnRoVmlld0NvbXBvbmVudC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIGlmICghdGhpcy5tb3ZlT25TZWxlY3RlZCkge1xuICAgICAgICAgICAgdmFyIGFkamFjZW50RGF0ZSA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldEFkamFjZW50Q2FsZW5kYXJEYXRlKHRoaXMubW9kZSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnNldEN1cnJlbnREYXRlKGFkamFjZW50RGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgIHRoaXMubW92ZU9uU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIE1vbnRoVmlld0NvbXBvbmVudC5wcm90b3R5cGUuY3JlYXRlRGF0ZU9iamVjdCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5tYXJrRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5tYXJrRGlzYWJsZWQoZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMuZm9ybWF0RGF5TGFiZWwoZGF0ZSksXG4gICAgICAgICAgICBzZWNvbmRhcnk6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNb250aFZpZXdDb21wb25lbnQuZ2V0RGF0ZXMgPSBmdW5jdGlvbiAoc3RhcnREYXRlLCBuKSB7XG4gICAgICAgIHZhciBkYXRlcyA9IG5ldyBBcnJheShuKSwgY3VycmVudCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZS5nZXRUaW1lKCkpLCBpID0gMDtcbiAgICAgICAgY3VycmVudC5zZXRIb3VycygxMik7IC8vIFByZXZlbnQgcmVwZWF0ZWQgZGF0ZXMgYmVjYXVzZSBvZiB0aW1lem9uZSBidWdcbiAgICAgICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgICAgICBkYXRlc1tpKytdID0gbmV3IERhdGUoY3VycmVudC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgY3VycmVudC5zZXREYXRlKGN1cnJlbnQuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGVzO1xuICAgIH07XG4gICAgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5nZXRWaWV3RGF0YSA9IGZ1bmN0aW9uIChzdGFydFRpbWUpIHtcbiAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IHN0YXJ0VGltZSwgZGF0ZSA9IHN0YXJ0RGF0ZS5nZXREYXRlKCksIG1vbnRoID0gKHN0YXJ0RGF0ZS5nZXRNb250aCgpICsgKGRhdGUgIT09IDEgPyAxIDogMCkpICUgMTI7XG4gICAgICAgIHZhciBkYXRlcyA9IE1vbnRoVmlld0NvbXBvbmVudF8xLmdldERhdGVzKHN0YXJ0RGF0ZSwgNDIpO1xuICAgICAgICB2YXIgZGF5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQyOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkYXRlT2JqZWN0ID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KGRhdGVzW2ldKTtcbiAgICAgICAgICAgIGRhdGVPYmplY3Quc2Vjb25kYXJ5ID0gZGF0ZXNbaV0uZ2V0TW9udGgoKSAhPT0gbW9udGg7XG4gICAgICAgICAgICBkYXlzW2ldID0gZGF0ZU9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF5SGVhZGVycyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgZGF5SGVhZGVycy5wdXNoKHRoaXMuZm9ybWF0RGF5SGVhZGVyTGFiZWwoZGF5c1tpXS5kYXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGVzOiBkYXlzLFxuICAgICAgICAgICAgZGF5SGVhZGVyczogZGF5SGVhZGVyc1xuICAgICAgICB9O1xuICAgIH07XG4gICAgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5nZXRIaWdobGlnaHRDbGFzcyA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSAnJztcbiAgICAgICAgaWYgKGRhdGUuaGFzRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChkYXRlLnNlY29uZGFyeSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICdtb250aHZpZXctc2Vjb25kYXJ5LXdpdGgtZXZlbnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ21vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnbW9udGh2aWV3LXNlbGVjdGVkJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnbW9udGh2aWV3LWN1cnJlbnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlLnNlY29uZGFyeSkge1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJ3RleHQtbXV0ZWQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnbW9udGh2aWV3LWRpc2FibGVkJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH07XG4gICAgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5nZXRSYW5nZSA9IGZ1bmN0aW9uIChjdXJyZW50RGF0ZSkge1xuICAgICAgICB2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKSwgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpLCBkaWZmZXJlbmNlID0gdGhpcy5zdGFydGluZ0RheU1vbnRoIC0gZmlyc3REYXlPZk1vbnRoLmdldERheSgpLCBudW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCA9IChkaWZmZXJlbmNlID4gMCkgPyA3IC0gZGlmZmVyZW5jZSA6IC1kaWZmZXJlbmNlLCBzdGFydERhdGUgPSBuZXcgRGF0ZShmaXJzdERheU9mTW9udGguZ2V0VGltZSgpKTtcbiAgICAgICAgaWYgKG51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoID4gMCkge1xuICAgICAgICAgICAgc3RhcnREYXRlLnNldERhdGUoLW51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVuZERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgZW5kRGF0ZS5zZXREYXRlKGVuZERhdGUuZ2V0RGF0ZSgpICsgNDIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhcnRUaW1lOiBzdGFydERhdGUsXG4gICAgICAgICAgICBlbmRUaW1lOiBlbmREYXRlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLm9uRGF0YUxvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJhbmdlID0gdGhpcy5yYW5nZSwgZXZlbnRTb3VyY2UgPSB0aGlzLmV2ZW50U291cmNlLCBsZW4gPSBldmVudFNvdXJjZSA/IGV2ZW50U291cmNlLmxlbmd0aCA6IDAsIHN0YXJ0VGltZSA9IHJhbmdlLnN0YXJ0VGltZSwgZW5kVGltZSA9IHJhbmdlLmVuZFRpbWUsIHV0Y1N0YXJ0VGltZSA9IG5ldyBEYXRlKERhdGUuVVRDKHN0YXJ0VGltZS5nZXRGdWxsWWVhcigpLCBzdGFydFRpbWUuZ2V0TW9udGgoKSwgc3RhcnRUaW1lLmdldERhdGUoKSkpLCB1dGNFbmRUaW1lID0gbmV3IERhdGUoRGF0ZS5VVEMoZW5kVGltZS5nZXRGdWxsWWVhcigpLCBlbmRUaW1lLmdldE1vbnRoKCksIGVuZFRpbWUuZ2V0RGF0ZSgpKSksIGN1cnJlbnRWaWV3SW5kZXggPSB0aGlzLmN1cnJlbnRWaWV3SW5kZXgsIGRhdGVzID0gdGhpcy52aWV3c1tjdXJyZW50Vmlld0luZGV4XS5kYXRlcywgb25lRGF5ID0gODY0MDAwMDAsIGVwcyA9IDAuMDAwNjtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCA0MjsgciArPSAxKSB7XG4gICAgICAgICAgICBpZiAoZGF0ZXNbcl0uaGFzRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkYXRlc1tyXS5oYXNFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRhdGVzW3JdLmV2ZW50cyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBldmVudF8xID0gZXZlbnRTb3VyY2VbaV0sIGV2ZW50U3RhcnRUaW1lID0gbmV3IERhdGUoZXZlbnRfMS5zdGFydFRpbWUuZ2V0VGltZSgpKSwgZXZlbnRFbmRUaW1lID0gbmV3IERhdGUoZXZlbnRfMS5lbmRUaW1lLmdldFRpbWUoKSksIHN0ID0gdm9pZCAwLCBldCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChldmVudF8xLmFsbERheSkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudEVuZFRpbWUgPD0gdXRjU3RhcnRUaW1lIHx8IGV2ZW50U3RhcnRUaW1lID49IHV0Y0VuZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdCA9IHV0Y1N0YXJ0VGltZTtcbiAgICAgICAgICAgICAgICAgICAgZXQgPSB1dGNFbmRUaW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChldmVudEVuZFRpbWUgPD0gc3RhcnRUaW1lIHx8IGV2ZW50U3RhcnRUaW1lID49IGVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdCA9IHN0YXJ0VGltZTtcbiAgICAgICAgICAgICAgICAgICAgZXQgPSBlbmRUaW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0aW1lRGlmZiA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciB0aW1lRGlmZmVyZW5jZVN0YXJ0ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGV2ZW50U3RhcnRUaW1lIDw9IHN0KSB7XG4gICAgICAgICAgICAgICAgdGltZURpZmZlcmVuY2VTdGFydCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aW1lRGlmZiA9IGV2ZW50U3RhcnRUaW1lLmdldFRpbWUoKSAtIHN0LmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50XzEuYWxsRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmID0gdGltZURpZmYgLSAoZXZlbnRTdGFydFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIHN0LmdldFRpbWV6b25lT2Zmc2V0KCkpICogNjAwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpbWVEaWZmZXJlbmNlU3RhcnQgPSB0aW1lRGlmZiAvIG9uZURheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0aW1lRGlmZmVyZW5jZUVuZCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChldmVudEVuZFRpbWUgPj0gZXQpIHtcbiAgICAgICAgICAgICAgICB0aW1lRGlmZiA9IGV0LmdldFRpbWUoKSAtIHN0LmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50XzEuYWxsRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmID0gdGltZURpZmYgLSAoZXQuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIHN0LmdldFRpbWV6b25lT2Zmc2V0KCkpICogNjAwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpbWVEaWZmZXJlbmNlRW5kID0gdGltZURpZmYgLyBvbmVEYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aW1lRGlmZiA9IGV2ZW50RW5kVGltZS5nZXRUaW1lKCkgLSBzdC5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudF8xLmFsbERheSkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiA9IHRpbWVEaWZmIC0gKGV2ZW50RW5kVGltZS5nZXRUaW1lem9uZU9mZnNldCgpIC0gc3QuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiA2MDAwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGltZURpZmZlcmVuY2VFbmQgPSB0aW1lRGlmZiAvIG9uZURheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IodGltZURpZmZlcmVuY2VTdGFydCk7XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPCB0aW1lRGlmZmVyZW5jZUVuZCAtIGVwcykge1xuICAgICAgICAgICAgICAgIGRhdGVzW2luZGV4XS5oYXNFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50U2V0ID0gZGF0ZXNbaW5kZXhdLmV2ZW50cztcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRTZXQucHVzaChldmVudF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50U2V0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50U2V0LnB1c2goZXZlbnRfMSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVzW2luZGV4XS5ldmVudHMgPSBldmVudFNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IDQyOyByICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChkYXRlc1tyXS5oYXNFdmVudCkge1xuICAgICAgICAgICAgICAgIGRhdGVzW3JdLmV2ZW50cy5zb3J0KHRoaXMuY29tcGFyZUV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRvU2VsZWN0KSB7XG4gICAgICAgICAgICB2YXIgZmluZFNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IDQyOyByICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZXNbcl0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlc1tyXTtcbiAgICAgICAgICAgICAgICAgICAgZmluZFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbmRTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25UaW1lU2VsZWN0ZWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGltZTogdGhpcy5zZWxlY3RlZERhdGUuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiB0aGlzLnNlbGVjdGVkRGF0ZS5ldmVudHMsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnNlbGVjdGVkRGF0ZS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICA7XG4gICAgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5yZWZyZXNoVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yYW5nZSA9IHRoaXMuZ2V0UmFuZ2UodGhpcy5jYWxlbmRhclNlcnZpY2UuY3VycmVudERhdGUpO1xuICAgICAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIHRoaXMub25UaXRsZUNoYW5nZWQuZW1pdCh0aXRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UucG9wdWxhdGVBZGphY2VudFZpZXdzKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRWaWV3KHRoaXMucmFuZ2Uuc3RhcnRUaW1lLCB0aGlzLnZpZXdzW3RoaXMuY3VycmVudFZpZXdJbmRleF0pO1xuICAgICAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5yYW5nZUNoYW5nZWQodGhpcyk7XG4gICAgfTtcbiAgICBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLmdldFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFZpZXdTdGFydERhdGUgPSB0aGlzLnJhbmdlLnN0YXJ0VGltZSwgZGF0ZSA9IGN1cnJlbnRWaWV3U3RhcnREYXRlLmdldERhdGUoKSwgbW9udGggPSAoY3VycmVudFZpZXdTdGFydERhdGUuZ2V0TW9udGgoKSArIChkYXRlICE9PSAxID8gMSA6IDApKSAlIDEyLCB5ZWFyID0gY3VycmVudFZpZXdTdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIChkYXRlICE9PSAxICYmIG1vbnRoID09PSAwID8gMSA6IDApLCBoZWFkZXJEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEsIDEyLCAwLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0VGl0bGUoaGVhZGVyRGF0ZSk7XG4gICAgfTtcbiAgICBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLmNvbXBhcmVFdmVudCA9IGZ1bmN0aW9uIChldmVudDEsIGV2ZW50Mikge1xuICAgICAgICBpZiAoZXZlbnQxLmFsbERheSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQyLmFsbERheSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChldmVudDEuc3RhcnRUaW1lLmdldFRpbWUoKSAtIGV2ZW50Mi5zdGFydFRpbWUuZ2V0VGltZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAodmlld0RhdGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXdzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgc2VsZWN0ZWREYXRlID0gdmlld0RhdGUuZGF0ZSwgZXZlbnRzID0gdmlld0RhdGUuZXZlbnRzO1xuICAgICAgICBpZiAoIXZpZXdEYXRlLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZXMgPSB0aGlzLnZpZXdzW3RoaXMuY3VycmVudFZpZXdJbmRleF0uZGF0ZXMsIGN1cnJlbnRDYWxlbmRhckRhdGUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5jdXJyZW50RGF0ZSwgY3VycmVudE1vbnRoID0gY3VycmVudENhbGVuZGFyRGF0ZS5nZXRNb250aCgpLCBjdXJyZW50WWVhciA9IGN1cnJlbnRDYWxlbmRhckRhdGUuZ2V0RnVsbFllYXIoKSwgc2VsZWN0ZWRNb250aCA9IHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpLCBzZWxlY3RlZFllYXIgPSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSwgZGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50WWVhciA9PT0gc2VsZWN0ZWRZZWFyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRNb250aCAhPT0gc2VsZWN0ZWRNb250aCkge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBjdXJyZW50TW9udGggPCBzZWxlY3RlZE1vbnRoID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnRZZWFyIDwgc2VsZWN0ZWRZZWFyID8gMSA6IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2Uuc2V0Q3VycmVudERhdGUoc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFZpZXdTdGFydERhdGUgPSB0aGlzLnJhbmdlLnN0YXJ0VGltZSwgb25lRGF5ID0gODY0MDAwMDAsIHNlbGVjdGVkRGF5RGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoKHNlbGVjdGVkRGF0ZS5nZXRUaW1lKCkgLSBjdXJyZW50Vmlld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSAoc2VsZWN0ZWREYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgLSBjdXJyZW50Vmlld1N0YXJ0RGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKSAqIDYwMDAwKSAvIG9uZURheSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCA0MjsgciArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVzW3JdLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZERheURpZmZlcmVuY2UgPj0gMCAmJiBzZWxlY3RlZERheURpZmZlcmVuY2UgPCA0Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRlc1tzZWxlY3RlZERheURpZmZlcmVuY2VdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlc1tzZWxlY3RlZERheURpZmZlcmVuY2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZU9uU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVWaWV3KGRpcmVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblRpbWVTZWxlY3RlZC5lbWl0KHsgc2VsZWN0ZWRUaW1lOiBzZWxlY3RlZERhdGUsIGV2ZW50czogZXZlbnRzLCBkaXNhYmxlZDogdmlld0RhdGUuZGlzYWJsZWQgfSk7XG4gICAgfTtcbiAgICBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLnNsaWRlVmlldyA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zbGlkZXIuc2xpZGVOZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zbGlkZXIuc2xpZGVQcmV2KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1vbnRoVmlld0NvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlQ3VycmVudFZpZXcgPSBmdW5jdGlvbiAoY3VycmVudFZpZXdTdGFydERhdGUsIHZpZXcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRDYWxlbmRhckRhdGUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5jdXJyZW50RGF0ZSwgdG9kYXkgPSBuZXcgRGF0ZSgpLCBvbmVEYXkgPSA4NjQwMDAwMCwgc2VsZWN0ZWREYXlEaWZmZXJlbmNlID0gTWF0aC5mbG9vcigoY3VycmVudENhbGVuZGFyRGF0ZS5nZXRUaW1lKCkgLSBjdXJyZW50Vmlld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSAoY3VycmVudENhbGVuZGFyRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpIC0gY3VycmVudFZpZXdTdGFydERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiA2MDAwMCkgLyBvbmVEYXkpLCBjdXJyZW50RGF5RGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoKHRvZGF5LmdldFRpbWUoKSAtIGN1cnJlbnRWaWV3U3RhcnREYXRlLmdldFRpbWUoKSAtICh0b2RheS5nZXRUaW1lem9uZU9mZnNldCgpIC0gY3VycmVudFZpZXdTdGFydERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiA2MDAwMCkgLyBvbmVEYXkpO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IDQyOyByICs9IDEpIHtcbiAgICAgICAgICAgIHZpZXcuZGF0ZXNbcl0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0ZWREYXlEaWZmZXJlbmNlID49IDAgJiYgc2VsZWN0ZWREYXlEaWZmZXJlbmNlIDwgNDIgJiYgIXZpZXcuZGF0ZXNbc2VsZWN0ZWREYXlEaWZmZXJlbmNlXS5kaXNhYmxlZCAmJiAodGhpcy5hdXRvU2VsZWN0IHx8IHRoaXMubW92ZU9uU2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICB2aWV3LmRhdGVzW3NlbGVjdGVkRGF5RGlmZmVyZW5jZV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB2aWV3LmRhdGVzW3NlbGVjdGVkRGF5RGlmZmVyZW5jZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBkYXRlOiBudWxsLFxuICAgICAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICAgICAgbGFiZWw6IG51bGwsXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiBudWxsLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudERheURpZmZlcmVuY2UgPj0gMCAmJiBjdXJyZW50RGF5RGlmZmVyZW5jZSA8IDQyKSB7XG4gICAgICAgICAgICB2aWV3LmRhdGVzW2N1cnJlbnREYXlEaWZmZXJlbmNlXS5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5ldmVudFNlbGVjdGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMub25FdmVudFNlbGVjdGVkLmVtaXQoZXZlbnQpO1xuICAgIH07XG4gICAgdmFyIE1vbnRoVmlld0NvbXBvbmVudF8xO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIFZpZXdDaGlsZCgnbW9udGhTbGlkZXInKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgSW9uU2xpZGVzKVxuICAgIF0sIE1vbnRoVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2xpZGVyXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgVGVtcGxhdGVSZWYpXG4gICAgXSwgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJtb250aHZpZXdEaXNwbGF5RXZlbnRUZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIE1vbnRoVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwibW9udGh2aWV3SW5hY3RpdmVEaXNwbGF5RXZlbnRUZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIE1vbnRoVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwibW9udGh2aWV3RXZlbnREZXRhaWxUZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImZvcm1hdERheVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImZvcm1hdERheUhlYWRlclwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImZvcm1hdE1vbnRoVGl0bGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbiAgICBdLCBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImV2ZW50U291cmNlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuICAgIF0sIE1vbnRoVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwic3RhcnRpbmdEYXlNb250aFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJzaG93RXZlbnREZXRhaWxcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJub0V2ZW50c0xhYmVsXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImF1dG9TZWxlY3RcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbilcbiAgICBdLCBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcIm1hcmtEaXNhYmxlZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImxvY2FsZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImRhdGVGb3JtYXR0ZXJcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJkaXJcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIE1vbnRoVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwibG9ja1N3aXBlVG9QcmV2XCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImxvY2tTd2lwZXNcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJzbGlkZXJPcHRpb25zXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgT3V0cHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcIm9uUmFuZ2VDaGFuZ2VkXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgT3V0cHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBNb250aFZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcIm9uRXZlbnRTZWxlY3RlZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIE91dHB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJvblRpbWVTZWxlY3RlZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIE91dHB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgTW9udGhWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJvblRpdGxlQ2hhbmdlZFwiLCB2b2lkIDApO1xuICAgIE1vbnRoVmlld0NvbXBvbmVudCA9IE1vbnRoVmlld0NvbXBvbmVudF8xID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbW9udGh2aWV3JyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8aW9uLXNsaWRlcyAjbW9udGhTbGlkZXIgW29wdGlvbnNdPVxcXCJzbGlkZXJPcHRpb25zXFxcIiBbZGlyXT1cXFwiZGlyXFxcIiAoaW9uU2xpZGVEaWRDaGFuZ2UpPVxcXCJvblNsaWRlQ2hhbmdlZCgpXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlvbi1zbGlkZT5cXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSAqbmdJZj1cXFwiMD09PWN1cnJlbnRWaWV3SW5kZXhcXFwiIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1maXhlZCBtb250aHZpZXctZGF0ZXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVxcXCJsZXQgZGF5SGVhZGVyIG9mIHZpZXdzWzBdLmRheUhlYWRlcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPnt7ZGF5SGVhZGVyfX08L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHJvdyBvZiBbMCwxLDIsMyw0LDVdXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cXFwibGV0IGNvbCBvZiBbMCwxLDIsMyw0LDUsNl1cXFwiIHRhcHBhYmxlIChjbGljayk9XFxcInNlbGVjdCh2aWV3c1swXS5kYXRlc1tyb3cqNytjb2xdKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cXFwiZ2V0SGlnaGxpZ2h0Q2xhc3Modmlld3NbMF0uZGF0ZXNbcm93KjcrY29sXSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwibW9udGh2aWV3RGlzcGxheUV2ZW50VGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVxcXCJ7dmlldzogdmlld3NbMF0sIHJvdzogcm93LCBjb2w6IGNvbH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlICpuZ0lmPVxcXCIwIT09Y3VycmVudFZpZXdJbmRleFxcXCIgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWZpeGVkIG1vbnRodmlldy1kYXRldGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cXFwibGV0IGRheUhlYWRlciBvZiB2aWV3c1swXS5kYXlIZWFkZXJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57e2RheUhlYWRlcn19PC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCByb3cgb2YgWzAsMSwyLDMsNCw1XVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XFxcImxldCBjb2wgb2YgWzAsMSwyLDMsNCw1LDZdXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XFxcIm1vbnRodmlld0luYWN0aXZlRGlzcGxheUV2ZW50VGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVxcXCJ7dmlldzogdmlld3NbMF0sIHJvdzogcm93LCBjb2w6IGNvbH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvaW9uLXNsaWRlPlxcbiAgICAgICAgICAgICAgICA8aW9uLXNsaWRlPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlICpuZ0lmPVxcXCIxPT09Y3VycmVudFZpZXdJbmRleFxcXCIgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWZpeGVkIG1vbnRodmlldy1kYXRldGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XFxcImxldCBkYXlIZWFkZXIgb2Ygdmlld3NbMV0uZGF5SGVhZGVyc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e3tkYXlIZWFkZXJ9fTwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgcm93IG9mIFswLDEsMiwzLDQsNV1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVxcXCJsZXQgY29sIG9mIFswLDEsMiwzLDQsNSw2XVxcXCIgdGFwcGFibGUgKGNsaWNrKT1cXFwic2VsZWN0KHZpZXdzWzFdLmRhdGVzW3Jvdyo3K2NvbF0pXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVxcXCJnZXRIaWdobGlnaHRDbGFzcyh2aWV3c1sxXS5kYXRlc1tyb3cqNytjb2xdKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJtb250aHZpZXdEaXNwbGF5RXZlbnRUZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcInt2aWV3OiB2aWV3c1sxXSwgcm93OiByb3csIGNvbDogY29sfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgKm5nSWY9XFxcIjEhPT1jdXJyZW50Vmlld0luZGV4XFxcIiBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtZml4ZWQgbW9udGh2aWV3LWRhdGV0YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVxcXCJsZXQgZGF5SGVhZGVyIG9mIHZpZXdzWzFdLmRheUhlYWRlcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPnt7ZGF5SGVhZGVyfX08L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHJvdyBvZiBbMCwxLDIsMyw0LDVdXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cXFwibGV0IGNvbCBvZiBbMCwxLDIsMyw0LDUsNl1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwibW9udGh2aWV3SW5hY3RpdmVEaXNwbGF5RXZlbnRUZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcInt2aWV3OiB2aWV3c1sxXSwgcm93OiByb3csIGNvbDogY29sfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgPC9pb24tc2xpZGU+XFxuICAgICAgICAgICAgICAgIDxpb24tc2xpZGU+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgKm5nSWY9XFxcIjI9PT1jdXJyZW50Vmlld0luZGV4XFxcIiBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtZml4ZWQgbW9udGh2aWV3LWRhdGV0YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cXFwibGV0IGRheUhlYWRlciBvZiB2aWV3c1syXS5kYXlIZWFkZXJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57e2RheUhlYWRlcn19PC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCByb3cgb2YgWzAsMSwyLDMsNCw1XVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XFxcImxldCBjb2wgb2YgWzAsMSwyLDMsNCw1LDZdXFxcIiB0YXBwYWJsZSAoY2xpY2spPVxcXCJzZWxlY3Qodmlld3NbMl0uZGF0ZXNbcm93KjcrY29sXSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XFxcImdldEhpZ2hsaWdodENsYXNzKHZpZXdzWzJdLmRhdGVzW3Jvdyo3K2NvbF0pXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XFxcIm1vbnRodmlld0Rpc3BsYXlFdmVudFRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie3ZpZXc6IHZpZXdzWzJdLCByb3c6IHJvdywgY29sOiBjb2x9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSAqbmdJZj1cXFwiMiE9PWN1cnJlbnRWaWV3SW5kZXhcXFwiIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1maXhlZCBtb250aHZpZXctZGF0ZXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XFxcImxldCBkYXlIZWFkZXIgb2Ygdmlld3NbMl0uZGF5SGVhZGVyc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e3tkYXlIZWFkZXJ9fTwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgcm93IG9mIFswLDEsMiwzLDQsNV1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVxcXCJsZXQgY29sIG9mIFswLDEsMiwzLDQsNSw2XVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJtb250aHZpZXdJbmFjdGl2ZURpc3BsYXlFdmVudFRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie3ZpZXc6IHZpZXdzWzJdLCByb3c6IHJvdywgY29sOiBjb2x9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8L2lvbi1zbGlkZT5cXG4gICAgICAgICAgICA8L2lvbi1zbGlkZXM+XFxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwibW9udGh2aWV3RXZlbnREZXRhaWxUZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVxcXCJ7c2hvd0V2ZW50RGV0YWlsOnNob3dFdmVudERldGFpbCwgc2VsZWN0ZWREYXRlOiBzZWxlY3RlZERhdGUsIG5vRXZlbnRzTGFiZWw6IG5vRXZlbnRzTGFiZWx9XFxcIj5cXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICAgICAgICAgICAgc3R5bGVzOiBbXCJcXG4gICAgICAgIC50ZXh0LW11dGVkIHtcXG4gICAgICAgICAgY29sb3I6ICM5OTk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFibGUtZml4ZWQge1xcbiAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYmxlIHtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFibGUgPiB0aGVhZCA+IHRyID4gdGgsIC50YWJsZSA+IHRib2R5ID4gdHIgPiB0aCwgLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLCAudGFibGUgPiB0aGVhZCA+IHRyID4gdGQsXFxuICAgICAgICAudGFibGUgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZSA+IHRmb290ID4gdHIgPiB0ZCB7XFxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJsZSA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCwgLnRhYmxlID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCA+IHRkIHtcXG4gICAgICAgICAgYm9yZGVyLXRvcDogMFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYmxlID4gdGJvZHkgKyB0Ym9keSB7XFxuICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYmxlLWJvcmRlcmVkIHtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCwgLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRoLCAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGgsXFxuICAgICAgICAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkIHtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCwgLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkIHtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGQsIC50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRoIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E4N2FkO1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9udGh2aWV3LWN1cnJlbnQge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vbnRodmlldy1zZWxlY3RlZCB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk5MDA7XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb250aHZpZXctZGF0ZXRhYmxlIHRkLm1vbnRodmlldy1kaXNhYmxlZCB7XFxuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9udGh2aWV3LWRhdGV0YWJsZSB0aCB7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb250aHZpZXctZGF0ZXRhYmxlIHRkIHtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9udGh2aWV3LXNlY29uZGFyeS13aXRoLWV2ZW50IHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIsXFxuICAgICAgICAqOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIFwiXVxuICAgICAgICB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0NhbGVuZGFyU2VydmljZV0pXG4gICAgXSwgTW9udGhWaWV3Q29tcG9uZW50KTtcbiAgICByZXR1cm4gTW9udGhWaWV3Q29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IE1vbnRoVmlld0NvbXBvbmVudCB9O1xuIl19

      /***/

    },

    /***/
    "EGAO":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function EGAO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-textarea {\n  font-size: 0.9rem !important;\n  --font-size: .9rem !important;\n  --ion-font-size: .9rem !important;\n}\n\n.profile-top {\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n}\n\n.profile-bottom {\n  border-bottom-right-radius: 25px;\n  border-bottom-left-radius: 25px;\n}\n\n.ion-no-padding {\n  margin: 0;\n}\n\n.padding-left-none {\n  padding-left: 0;\n}\n\n.date-title {\n  padding-top: 23px;\n}\n\n.monthview-current {\n  color: var(--ion-color-light-contrast);\n}\n\n.monthview-selected {\n  background-color: var(--ion-color-primary) !important;\n  --background-color: var(--ion-color-primary) !important;\n}\n\n.event-detail {\n  font-size: small !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBQ0E7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQ0FBQTtFQUNBLCtCQUFBO0FBR0o7O0FBREE7RUFDSSxTQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBRkE7RUFDSSxpQkFBQTtBQUtKOztBQUZBO0VBQ0ksc0NBQUE7QUFLSjs7QUFGQTtFQUNJLHFEQUFBO0VBQ0EsdURBQUE7QUFLSjs7QUFIQTtFQUNJLDJCQUFBO0FBTUoiLCJmaWxlIjoidGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dGFyZWF7XG4gICAgZm9udC1zaXplOiAuOXJlbSAhaW1wb3J0YW50O1xuICAgIC0tZm9udC1zaXplOiAuOXJlbSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWZvbnQtc2l6ZTogLjlyZW0gIWltcG9ydGFudDtcbn1cbi5wcm9maWxlLXRvcHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xufVxuLnByb2ZpbGUtYm90dG9te1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XG59XG4uaW9uLW5vLXBhZGRpbmd7XG4gICAgbWFyZ2luOiAwO1xufVxuLnBhZGRpbmctbGVmdC1ub25le1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmRhdGUtdGl0bGV7XG4gICAgcGFkZGluZy10b3A6IDIzcHg7XG59XG5cbi5tb250aHZpZXctY3VycmVudHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbn1cblxuLm1vbnRodmlldy1zZWxlY3RlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuLmV2ZW50LWRldGFpbHtcbiAgICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "FDPr":
    /*!***********************************************************************!*\
      !*** ./node_modules/ionic2-calendar/__ivy_ngcc__/calendar.service.js ***!
      \***********************************************************************/

    /*! exports provided: CalendarService */

    /***/
    function FDPr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarService", function () {
        return CalendarService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CalendarService =
      /** @class */
      function () {
        function CalendarService() {
          this.currentDateChangedFromParent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.currentDateChangedFromChildren = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.eventSourceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.currentDateChangedFromParent$ = this.currentDateChangedFromParent.asObservable();
          this.currentDateChangedFromChildren$ = this.currentDateChangedFromChildren.asObservable();
          this.eventSourceChanged$ = this.eventSourceChanged.asObservable();
        }

        CalendarService.prototype.setCurrentDate = function (val, fromParent) {
          if (fromParent === void 0) {
            fromParent = false;
          }

          this._currentDate = val;

          if (fromParent) {
            this.currentDateChangedFromParent.next(val);
          } else {
            this.currentDateChangedFromChildren.next(val);
          }
        };

        Object.defineProperty(CalendarService.prototype, "currentDate", {
          get: function get() {
            return this._currentDate;
          },
          enumerable: true,
          configurable: true
        });

        CalendarService.prototype.rangeChanged = function (component) {
          if (this.queryMode === 'local') {
            if (component.eventSource && component.onDataLoaded) {
              component.onDataLoaded();
            }
          } else if (this.queryMode === 'remote') {
            component.onRangeChanged.emit(component.range);
          }
        };

        CalendarService.prototype.getStep = function (mode) {
          switch (mode) {
            case 'month':
              return {
                years: 0,
                months: 1,
                days: 0
              };

            case 'week':
              return {
                years: 0,
                months: 0,
                days: 7
              };

            case 'day':
              return {
                years: 0,
                months: 0,
                days: 1
              };
          }
        };

        CalendarService.prototype.getAdjacentCalendarDate = function (mode, direction) {
          var step = this.getStep(mode);
          var calculateCalendarDate = new Date(this.currentDate.getTime()),
              year = calculateCalendarDate.getFullYear() + direction * step.years,
              month = calculateCalendarDate.getMonth() + direction * step.months,
              date = calculateCalendarDate.getDate() + direction * step.days;
          calculateCalendarDate.setFullYear(year, month, date);

          if (mode === 'month') {
            var firstDayInNextMonth = new Date(year, month + 1, 1);

            if (firstDayInNextMonth.getTime() <= calculateCalendarDate.getTime()) {
              calculateCalendarDate = new Date(firstDayInNextMonth.getTime() - 24 * 60 * 60 * 1000);
            }
          }

          return calculateCalendarDate;
        };

        CalendarService.prototype.getAdjacentViewStartTime = function (component, direction) {
          var adjacentCalendarDate = this.getAdjacentCalendarDate(component.mode, direction);
          return component.getRange(adjacentCalendarDate).startTime;
        };

        CalendarService.prototype.populateAdjacentViews = function (component) {
          var currentViewStartDate,
              currentViewData,
              toUpdateViewIndex,
              currentViewIndex = component.currentViewIndex;

          if (component.direction === 1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
            toUpdateViewIndex = (currentViewIndex + 1) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
          } else if (component.direction === -1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
            toUpdateViewIndex = (currentViewIndex + 2) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
          } else {
            if (!component.views) {
              currentViewData = [];
              currentViewStartDate = component.range.startTime;
              currentViewData.push(component.getViewData(currentViewStartDate));
              currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
              currentViewData.push(component.getViewData(currentViewStartDate));
              currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
              currentViewData.push(component.getViewData(currentViewStartDate));
              component.views = currentViewData;
            } else {
              currentViewStartDate = component.range.startTime;
              component.views[currentViewIndex] = component.getViewData(currentViewStartDate);
              currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
              toUpdateViewIndex = (currentViewIndex + 2) % 3;
              component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
              currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
              toUpdateViewIndex = (currentViewIndex + 1) % 3;
              component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
            }
          }
        };

        CalendarService.prototype.loadEvents = function () {
          this.eventSourceChanged.next();
        };

        CalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CalendarService);

        CalendarService.ɵfac = function CalendarService_Factory(t) {
          return new (t || CalendarService)();
        };

        CalendarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: CalendarService,
          factory: function factory(t) {
            return CalendarService.ɵfac(t);
          }
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarService, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], function () {
            return [];
          }, null);
        })();

        return CalendarService;
      }(); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZXMiOlsiY2FsZW5kYXIuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQWdIMEMsQUFFbkM7Ozs7OztnREFDaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG52YXIgQ2FsZW5kYXJTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhbGVuZGFyU2VydmljZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tUGFyZW50ID0gbmV3IFN1YmplY3QoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tQ2hpbGRyZW4gPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICB0aGlzLmV2ZW50U291cmNlQ2hhbmdlZCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGVDaGFuZ2VkRnJvbVBhcmVudCQgPSB0aGlzLmN1cnJlbnREYXRlQ2hhbmdlZEZyb21QYXJlbnQuYXNPYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGVDaGFuZ2VkRnJvbUNoaWxkcmVuJCA9IHRoaXMuY3VycmVudERhdGVDaGFuZ2VkRnJvbUNoaWxkcmVuLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmV2ZW50U291cmNlQ2hhbmdlZCQgPSB0aGlzLmV2ZW50U291cmNlQ2hhbmdlZC5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gICAgQ2FsZW5kYXJTZXJ2aWNlLnByb3RvdHlwZS5zZXRDdXJyZW50RGF0ZSA9IGZ1bmN0aW9uICh2YWwsIGZyb21QYXJlbnQpIHtcbiAgICAgICAgaWYgKGZyb21QYXJlbnQgPT09IHZvaWQgMCkgeyBmcm9tUGFyZW50ID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5fY3VycmVudERhdGUgPSB2YWw7XG4gICAgICAgIGlmIChmcm9tUGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQ2hhbmdlZEZyb21QYXJlbnQubmV4dCh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tQ2hpbGRyZW4ubmV4dCh2YWwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FsZW5kYXJTZXJ2aWNlLnByb3RvdHlwZSwgXCJjdXJyZW50RGF0ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnREYXRlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBDYWxlbmRhclNlcnZpY2UucHJvdG90eXBlLnJhbmdlQ2hhbmdlZCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucXVlcnlNb2RlID09PSAnbG9jYWwnKSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmV2ZW50U291cmNlICYmIGNvbXBvbmVudC5vbkRhdGFMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQub25EYXRhTG9hZGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5xdWVyeU1vZGUgPT09ICdyZW1vdGUnKSB7XG4gICAgICAgICAgICBjb21wb25lbnQub25SYW5nZUNoYW5nZWQuZW1pdChjb21wb25lbnQucmFuZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDYWxlbmRhclNlcnZpY2UucHJvdG90eXBlLmdldFN0ZXAgPSBmdW5jdGlvbiAobW9kZSkge1xuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB5ZWFyczogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9udGhzOiAxLFxuICAgICAgICAgICAgICAgICAgICBkYXlzOiAwXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHllYXJzOiAwLFxuICAgICAgICAgICAgICAgICAgICBtb250aHM6IDAsXG4gICAgICAgICAgICAgICAgICAgIGRheXM6IDdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB5ZWFyczogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9udGhzOiAwLFxuICAgICAgICAgICAgICAgICAgICBkYXlzOiAxXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2FsZW5kYXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRBZGphY2VudENhbGVuZGFyRGF0ZSA9IGZ1bmN0aW9uIChtb2RlLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHN0ZXAgPSB0aGlzLmdldFN0ZXAobW9kZSk7XG4gICAgICAgIHZhciBjYWxjdWxhdGVDYWxlbmRhckRhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldFRpbWUoKSksIHllYXIgPSBjYWxjdWxhdGVDYWxlbmRhckRhdGUuZ2V0RnVsbFllYXIoKSArIGRpcmVjdGlvbiAqIHN0ZXAueWVhcnMsIG1vbnRoID0gY2FsY3VsYXRlQ2FsZW5kYXJEYXRlLmdldE1vbnRoKCkgKyBkaXJlY3Rpb24gKiBzdGVwLm1vbnRocywgZGF0ZSA9IGNhbGN1bGF0ZUNhbGVuZGFyRGF0ZS5nZXREYXRlKCkgKyBkaXJlY3Rpb24gKiBzdGVwLmRheXM7XG4gICAgICAgIGNhbGN1bGF0ZUNhbGVuZGFyRGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgZGF0ZSk7XG4gICAgICAgIGlmIChtb2RlID09PSAnbW9udGgnKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3REYXlJbk5leHRNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMSk7XG4gICAgICAgICAgICBpZiAoZmlyc3REYXlJbk5leHRNb250aC5nZXRUaW1lKCkgPD0gY2FsY3VsYXRlQ2FsZW5kYXJEYXRlLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZUNhbGVuZGFyRGF0ZSA9IG5ldyBEYXRlKGZpcnN0RGF5SW5OZXh0TW9udGguZ2V0VGltZSgpIC0gMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUNhbGVuZGFyRGF0ZTtcbiAgICB9O1xuICAgIENhbGVuZGFyU2VydmljZS5wcm90b3R5cGUuZ2V0QWRqYWNlbnRWaWV3U3RhcnRUaW1lID0gZnVuY3Rpb24gKGNvbXBvbmVudCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBhZGphY2VudENhbGVuZGFyRGF0ZSA9IHRoaXMuZ2V0QWRqYWNlbnRDYWxlbmRhckRhdGUoY29tcG9uZW50Lm1vZGUsIGRpcmVjdGlvbik7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuZ2V0UmFuZ2UoYWRqYWNlbnRDYWxlbmRhckRhdGUpLnN0YXJ0VGltZTtcbiAgICB9O1xuICAgIENhbGVuZGFyU2VydmljZS5wcm90b3R5cGUucG9wdWxhdGVBZGphY2VudFZpZXdzID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICB2YXIgY3VycmVudFZpZXdTdGFydERhdGUsIGN1cnJlbnRWaWV3RGF0YSwgdG9VcGRhdGVWaWV3SW5kZXgsIGN1cnJlbnRWaWV3SW5kZXggPSBjb21wb25lbnQuY3VycmVudFZpZXdJbmRleDtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5kaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRWaWV3U3RhcnREYXRlID0gdGhpcy5nZXRBZGphY2VudFZpZXdTdGFydFRpbWUoY29tcG9uZW50LCAxKTtcbiAgICAgICAgICAgIHRvVXBkYXRlVmlld0luZGV4ID0gKGN1cnJlbnRWaWV3SW5kZXggKyAxKSAlIDM7XG4gICAgICAgICAgICBjb21wb25lbnQudmlld3NbdG9VcGRhdGVWaWV3SW5kZXhdID0gY29tcG9uZW50LmdldFZpZXdEYXRhKGN1cnJlbnRWaWV3U3RhcnREYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wb25lbnQuZGlyZWN0aW9uID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudFZpZXdTdGFydERhdGUgPSB0aGlzLmdldEFkamFjZW50Vmlld1N0YXJ0VGltZShjb21wb25lbnQsIC0xKTtcbiAgICAgICAgICAgIHRvVXBkYXRlVmlld0luZGV4ID0gKGN1cnJlbnRWaWV3SW5kZXggKyAyKSAlIDM7XG4gICAgICAgICAgICBjb21wb25lbnQudmlld3NbdG9VcGRhdGVWaWV3SW5kZXhdID0gY29tcG9uZW50LmdldFZpZXdEYXRhKGN1cnJlbnRWaWV3U3RhcnREYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghY29tcG9uZW50LnZpZXdzKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFZpZXdEYXRhID0gW107XG4gICAgICAgICAgICAgICAgY3VycmVudFZpZXdTdGFydERhdGUgPSBjb21wb25lbnQucmFuZ2Uuc3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3RGF0YS5wdXNoKGNvbXBvbmVudC5nZXRWaWV3RGF0YShjdXJyZW50Vmlld1N0YXJ0RGF0ZSkpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3U3RhcnREYXRlID0gdGhpcy5nZXRBZGphY2VudFZpZXdTdGFydFRpbWUoY29tcG9uZW50LCAxKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Vmlld0RhdGEucHVzaChjb21wb25lbnQuZ2V0Vmlld0RhdGEoY3VycmVudFZpZXdTdGFydERhdGUpKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Vmlld1N0YXJ0RGF0ZSA9IHRoaXMuZ2V0QWRqYWNlbnRWaWV3U3RhcnRUaW1lKGNvbXBvbmVudCwgLTEpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3RGF0YS5wdXNoKGNvbXBvbmVudC5nZXRWaWV3RGF0YShjdXJyZW50Vmlld1N0YXJ0RGF0ZSkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC52aWV3cyA9IGN1cnJlbnRWaWV3RGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3U3RhcnREYXRlID0gY29tcG9uZW50LnJhbmdlLnN0YXJ0VGltZTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQudmlld3NbY3VycmVudFZpZXdJbmRleF0gPSBjb21wb25lbnQuZ2V0Vmlld0RhdGEoY3VycmVudFZpZXdTdGFydERhdGUpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3U3RhcnREYXRlID0gdGhpcy5nZXRBZGphY2VudFZpZXdTdGFydFRpbWUoY29tcG9uZW50LCAtMSk7XG4gICAgICAgICAgICAgICAgdG9VcGRhdGVWaWV3SW5kZXggPSAoY3VycmVudFZpZXdJbmRleCArIDIpICUgMztcbiAgICAgICAgICAgICAgICBjb21wb25lbnQudmlld3NbdG9VcGRhdGVWaWV3SW5kZXhdID0gY29tcG9uZW50LmdldFZpZXdEYXRhKGN1cnJlbnRWaWV3U3RhcnREYXRlKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Vmlld1N0YXJ0RGF0ZSA9IHRoaXMuZ2V0QWRqYWNlbnRWaWV3U3RhcnRUaW1lKGNvbXBvbmVudCwgMSk7XG4gICAgICAgICAgICAgICAgdG9VcGRhdGVWaWV3SW5kZXggPSAoY3VycmVudFZpZXdJbmRleCArIDEpICUgMztcbiAgICAgICAgICAgICAgICBjb21wb25lbnQudmlld3NbdG9VcGRhdGVWaWV3SW5kZXhdID0gY29tcG9uZW50LmdldFZpZXdEYXRhKGN1cnJlbnRWaWV3U3RhcnREYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2FsZW5kYXJTZXJ2aWNlLnByb3RvdHlwZS5sb2FkRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmV2ZW50U291cmNlQ2hhbmdlZC5uZXh0KCk7XG4gICAgfTtcbiAgICBDYWxlbmRhclNlcnZpY2UgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbmplY3RhYmxlKCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuICAgIF0sIENhbGVuZGFyU2VydmljZSk7XG4gICAgcmV0dXJuIENhbGVuZGFyU2VydmljZTtcbn0oKSk7XG5leHBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfTtcbiJdfQ==

      /***/

    },

    /***/
    "HqZB":
    /*!***************************************************************!*\
      !*** ./node_modules/ionic2-calendar/__ivy_ngcc__/weekview.js ***!
      \***************************************************************/

    /*! exports provided: WeekViewComponent */

    /***/
    function HqZB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeekViewComponent", function () {
        return WeekViewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar.service */
      "FDPr");
      /* harmony import */


      var _init_position_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./init-position-scroll */
      "VTDg");

      var _c0 = ["weekSlider"];

      function WeekViewComponent_th_7_ng_template_1_Template(rf, ctx) {}

      var _c1 = function _c1(a0) {
        return {
          viewDate: a0
        };
      };

      function WeekViewComponent_th_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeekViewComponent_th_7_Template_th_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var date_r10 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.daySelected(date_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_th_7_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r10 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.getHighlightClass(date_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.weekviewHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, date_r10));
        }
      }

      function WeekViewComponent_div_8_td_8_ng_template_1_Template(rf, ctx) {}

      var _c2 = function _c2(a0, a1) {
        return {
          day: a0,
          eventTemplate: a1
        };
      };

      function WeekViewComponent_div_8_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_8_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r16 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.weekviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c2, day_r16, ctx_r14.weekviewAllDayEventTemplate));
        }
      }

      function WeekViewComponent_div_8_tr_12_td_3_ng_template_1_Template(rf, ctx) {}

      var _c3 = function _c3(a0, a1, a2) {
        return {
          tm: a0,
          hourParts: a1,
          eventTemplate: a2
        };
      };

      function WeekViewComponent_div_8_tr_12_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeekViewComponent_div_8_tr_12_td_3_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);

            var tm_r21 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r23.select(tm_r21.time, tm_r21.events);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_8_tr_12_td_3_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r21 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.weekviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c3, tm_r21, ctx_r20.hourParts, ctx_r20.weekviewNormalEventTemplate));
        }
      }

      function WeekViewComponent_div_8_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WeekViewComponent_div_8_tr_12_td_3_Template, 2, 6, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r18 = ctx.$implicit;
          var i_r19 = ctx.index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r15.hourColumnLabels[i_r19], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r18);
        }
      }

      function WeekViewComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WeekViewComponent_div_8_td_8_Template, 2, 5, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "init-position-scroll", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onScroll", function WeekViewComponent_div_8_Template_init_position_scroll_onScroll_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r25.setScrollPosition($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WeekViewComponent_div_8_tr_12_Template, 4, 2, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.allDayLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.views[0].dates);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r2.initScrollPosition)("emitEvent", ctx_r2.preserveScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.views[0].rows);
        }
      }

      function WeekViewComponent_div_9_td_8_ng_template_1_Template(rf, ctx) {}

      var _c4 = function _c4(a0) {
        return {
          day: a0
        };
      };

      function WeekViewComponent_div_9_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_9_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r29 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r27.weekviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c4, day_r29));
        }
      }

      function WeekViewComponent_div_9_tr_12_td_3_ng_template_1_Template(rf, ctx) {}

      var _c5 = function _c5(a0, a1) {
        return {
          tm: a0,
          hourParts: a1
        };
      };

      function WeekViewComponent_div_9_tr_12_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_9_tr_12_td_3_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r34 = ctx.$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r33.weekviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c5, tm_r34, ctx_r33.hourParts));
        }
      }

      function WeekViewComponent_div_9_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WeekViewComponent_div_9_tr_12_td_3_Template, 2, 5, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;
          var i_r32 = ctx.index;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r28.hourColumnLabels[i_r32], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r31);
        }
      }

      function WeekViewComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WeekViewComponent_div_9_td_8_Template, 2, 4, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "init-position-scroll", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WeekViewComponent_div_9_tr_12_Template, 4, 2, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.allDayLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.views[0].dates);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r3.initScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.views[0].rows);
        }
      }

      function WeekViewComponent_th_15_ng_template_1_Template(rf, ctx) {}

      function WeekViewComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeekViewComponent_th_15_Template_th_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);

            var date_r36 = ctx.$implicit;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r38.daySelected(date_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_th_15_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r36 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r4.getHighlightClass(date_r36));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.weekviewHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, date_r36));
        }
      }

      function WeekViewComponent_div_16_td_8_ng_template_1_Template(rf, ctx) {}

      function WeekViewComponent_div_16_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_16_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r42 = ctx.$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r40.weekviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c2, day_r42, ctx_r40.weekviewAllDayEventTemplate));
        }
      }

      function WeekViewComponent_div_16_tr_12_td_3_div_1_ng_template_1_Template(rf, ctx) {}

      var _c6 = function _c6(a0) {
        return {
          "calendar-event-wrap": a0
        };
      };

      function WeekViewComponent_div_16_tr_12_td_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_16_tr_12_td_3_div_1_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c6, tm_r47.events));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r48.weekviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](5, _c3, tm_r47, ctx_r48.hourParts, ctx_r48.weekviewNormalEventTemplate));
        }
      }

      function WeekViewComponent_div_16_tr_12_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeekViewComponent_div_16_tr_12_td_3_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);

            var tm_r47 = ctx.$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r51.select(tm_r47.time, tm_r47.events);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_16_tr_12_td_3_div_1_Template, 2, 9, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tm_r47.events);
        }
      }

      function WeekViewComponent_div_16_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WeekViewComponent_div_16_tr_12_td_3_Template, 2, 1, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r44 = ctx.$implicit;
          var i_r45 = ctx.index;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r41.hourColumnLabels[i_r45], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r44);
        }
      }

      function WeekViewComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WeekViewComponent_div_16_td_8_Template, 2, 5, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "init-position-scroll", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onScroll", function WeekViewComponent_div_16_Template_init_position_scroll_onScroll_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r53.setScrollPosition($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WeekViewComponent_div_16_tr_12_Template, 4, 2, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.allDayLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.views[1].dates);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r5.initScrollPosition)("emitEvent", ctx_r5.preserveScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.views[1].rows);
        }
      }

      function WeekViewComponent_div_17_td_8_ng_template_1_Template(rf, ctx) {}

      function WeekViewComponent_div_17_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_17_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r57 = ctx.$implicit;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r55.weekviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c4, day_r57));
        }
      }

      function WeekViewComponent_div_17_tr_12_td_3_div_1_ng_template_1_Template(rf, ctx) {}

      function WeekViewComponent_div_17_tr_12_td_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_17_tr_12_td_3_div_1_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c6, tm_r62.events));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r63.weekviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c5, tm_r62, ctx_r63.hourParts));
        }
      }

      function WeekViewComponent_div_17_tr_12_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_17_tr_12_td_3_div_1_Template, 2, 8, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tm_r62.events);
        }
      }

      function WeekViewComponent_div_17_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WeekViewComponent_div_17_tr_12_td_3_Template, 2, 1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r59 = ctx.$implicit;
          var i_r60 = ctx.index;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r56.hourColumnLabels[i_r60], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r59);
        }
      }

      function WeekViewComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WeekViewComponent_div_17_td_8_Template, 2, 4, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "init-position-scroll", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WeekViewComponent_div_17_tr_12_Template, 4, 2, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.allDayLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.views[1].dates);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r6.initScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.views[1].rows);
        }
      }

      function WeekViewComponent_th_23_ng_template_1_Template(rf, ctx) {}

      function WeekViewComponent_th_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeekViewComponent_th_23_Template_th_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);

            var date_r66 = ctx.$implicit;

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r68.daySelected(date_r66);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_th_23_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r66 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r7.getHighlightClass(date_r66));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.weekviewHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, date_r66));
        }
      }

      function WeekViewComponent_div_24_td_8_ng_template_1_Template(rf, ctx) {}

      function WeekViewComponent_div_24_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_24_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r72 = ctx.$implicit;

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r70.weekviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c2, day_r72, ctx_r70.weekviewAllDayEventTemplate));
        }
      }

      function WeekViewComponent_div_24_tr_12_td_3_div_1_ng_template_1_Template(rf, ctx) {}

      function WeekViewComponent_div_24_tr_12_td_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_24_tr_12_td_3_div_1_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c6, tm_r77.events));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r78.weekviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](5, _c3, tm_r77, ctx_r78.hourParts, ctx_r78.weekviewNormalEventTemplate));
        }
      }

      function WeekViewComponent_div_24_tr_12_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeekViewComponent_div_24_tr_12_td_3_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82);

            var tm_r77 = ctx.$implicit;

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r81.select(tm_r77.time, tm_r77.events);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_24_tr_12_td_3_div_1_Template, 2, 9, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r77 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tm_r77.events);
        }
      }

      function WeekViewComponent_div_24_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WeekViewComponent_div_24_tr_12_td_3_Template, 2, 1, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r74 = ctx.$implicit;
          var i_r75 = ctx.index;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r71.hourColumnLabels[i_r75], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r74);
        }
      }

      function WeekViewComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WeekViewComponent_div_24_td_8_Template, 2, 5, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "init-position-scroll", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onScroll", function WeekViewComponent_div_24_Template_init_position_scroll_onScroll_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r83.setScrollPosition($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WeekViewComponent_div_24_tr_12_Template, 4, 2, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.allDayLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.views[2].dates);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r8.initScrollPosition)("emitEvent", ctx_r8.preserveScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.views[2].rows);
        }
      }

      function WeekViewComponent_div_25_td_8_ng_template_1_Template(rf, ctx) {}

      function WeekViewComponent_div_25_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_25_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r87 = ctx.$implicit;

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r85.weekviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c4, day_r87));
        }
      }

      function WeekViewComponent_div_25_tr_12_td_3_div_1_ng_template_1_Template(rf, ctx) {}

      function WeekViewComponent_div_25_tr_12_td_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_25_tr_12_td_3_div_1_ng_template_1_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c6, tm_r92.events));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r93.weekviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c5, tm_r92, ctx_r93.hourParts));
        }
      }

      function WeekViewComponent_div_25_tr_12_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewComponent_div_25_tr_12_td_3_div_1_Template, 2, 8, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r92 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tm_r92.events);
        }
      }

      function WeekViewComponent_div_25_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WeekViewComponent_div_25_tr_12_td_3_Template, 2, 1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r89 = ctx.$implicit;
          var i_r90 = ctx.index;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r86.hourColumnLabels[i_r90], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r89);
        }
      }

      function WeekViewComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WeekViewComponent_div_25_td_8_Template, 2, 4, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "init-position-scroll", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WeekViewComponent_div_25_tr_12_Template, 4, 2, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.allDayLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.views[2].dates);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r9.initScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.views[2].rows);
        }
      }

      var WeekViewComponent =
      /** @class */
      function () {
        function WeekViewComponent(calendarService, elm) {
          this.calendarService = calendarService;
          this.elm = elm;
          this["class"] = true;
          this.autoSelect = true;
          this.dir = "";
          this.scrollToHour = 0;
          this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](true);
          this.views = [];
          this.currentViewIndex = 0;
          this.direction = 0;
          this.mode = 'week';
          this.inited = false;
          this.callbackOnInit = true;
        }

        WeekViewComponent_1 = WeekViewComponent;

        WeekViewComponent.prototype.ngOnInit = function () {
          var _this = this;

          if (!this.sliderOptions) {
            this.sliderOptions = {};
          }

          this.sliderOptions.loop = true;
          this.hourRange = (this.endHour - this.startHour) * this.hourSegments;

          if (this.dateFormatter && this.dateFormatter.formatWeekViewDayHeader) {
            this.formatDayHeader = this.dateFormatter.formatWeekViewDayHeader;
          } else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);

            this.formatDayHeader = function (date) {
              return datePipe_1.transform(date, this.formatWeekViewDayHeader);
            };
          }

          if (this.dateFormatter && this.dateFormatter.formatWeekViewTitle) {
            this.formatTitle = this.dateFormatter.formatWeekViewTitle;
          } else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);

            this.formatTitle = function (date) {
              return datePipe_2.transform(date, this.formatWeekTitle);
            };
          }

          if (this.dateFormatter && this.dateFormatter.formatWeekViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatWeekViewHourColumn;
          } else {
            var datePipe_3 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);

            this.formatHourColumnLabel = function (date) {
              return datePipe_3.transform(date, this.formatHourColumn);
            };
          }

          if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
          }

          if (this.lockSwipes) {
            this.slider.lockSwipes(true);
          }

          this.refreshView();
          this.hourColumnLabels = this.getHourColumnLabels();
          this.inited = true;
          this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
          });
          this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
          });
        };

        WeekViewComponent.prototype.ngAfterViewInit = function () {
          var title = this.getTitle();
          this.onTitleChanged.emit(title);

          if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.weekview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me_1 = this;
            setTimeout(function () {
              me_1.initScrollPosition = hourColumns_1[me_1.scrollToHour - me_1.startHour].offsetTop;
            }, 50);
          }
        };

        WeekViewComponent.prototype.ngOnChanges = function (changes) {
          if (!this.inited) return;
          var eventSourceChange = changes['eventSource'];

          if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
          }

          var lockSwipeToPrev = changes['lockSwipeToPrev'];

          if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
          }

          var lockSwipes = changes['lockSwipes'];

          if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
          }
        };

        WeekViewComponent.prototype.ngOnDestroy = function () {
          if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
          }

          if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
          }
        };

        WeekViewComponent.prototype.onSlideChanged = function () {
          var _this = this;

          if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
          }

          var currentSlideIndex = this.slider.getActiveIndex(),
              direction = 0,
              currentViewIndex = this.currentViewIndex;
          this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;

            if (currentSlideIndex - currentViewIndex === 1) {
              direction = 1;
            } else if (currentSlideIndex === 0 && currentViewIndex === 2) {
              direction = 1;

              _this.slider.slideTo(1, 0, false);
            } else if (currentViewIndex - currentSlideIndex === 1) {
              direction = -1;
            } else if (currentSlideIndex === 2 && currentViewIndex === 0) {
              direction = -1;

              _this.slider.slideTo(3, 0, false);
            }

            _this.currentViewIndex = currentSlideIndex;

            _this.move(direction);
          });
        };

        WeekViewComponent.prototype.move = function (direction) {
          if (direction === 0) {
            return;
          }

          this.direction = direction;
          var adjacent = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
          this.calendarService.setCurrentDate(adjacent);
          this.refreshView();
          this.direction = 0;
        };

        WeekViewComponent.createDateObjects = function (startTime, startHour, endHour, timeInterval) {
          var times = [],
              currentHour = startTime.getHours(),
              currentDate = startTime.getDate(),
              hourStep,
              minStep;

          if (timeInterval < 1) {
            hourStep = Math.floor(1 / timeInterval);
            minStep = 60;
          } else {
            hourStep = 1;
            minStep = Math.floor(60 / timeInterval);
          }

          for (var hour = startHour; hour < endHour; hour += hourStep) {
            for (var interval = 0; interval < 60; interval += minStep) {
              var row = [];

              for (var day = 0; day < 7; day += 1) {
                var time = new Date(startTime.getTime());
                time.setHours(currentHour + hour, interval);
                time.setDate(currentDate + day);
                row.push({
                  events: [],
                  time: time
                });
              }

              times.push(row);
            }
          }

          return times;
        };

        WeekViewComponent.getDates = function (startTime, n) {
          var dates = new Array(n),
              current = new Date(startTime.getTime()),
              i = 0;
          current.setHours(12); // Prevent repeated dates because of timezone bug

          while (i < n) {
            dates[i++] = {
              date: new Date(current.getTime()),
              events: [],
              dayHeader: ''
            };
            current.setDate(current.getDate() + 1);
          }

          return dates;
        };

        WeekViewComponent.prototype.getHourColumnLabels = function () {
          var hourColumnLabels = [];

          for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour][0].time));
          }

          return hourColumnLabels;
        };

        WeekViewComponent.prototype.getViewData = function (startTime) {
          var dates = WeekViewComponent_1.getDates(startTime, 7);

          for (var i = 0; i < 7; i++) {
            dates[i].dayHeader = this.formatDayHeader(dates[i].date);
          }

          return {
            rows: WeekViewComponent_1.createDateObjects(startTime, this.startHour, this.endHour, this.hourSegments),
            dates: dates
          };
        };

        WeekViewComponent.prototype.getRange = function (currentDate) {
          var year = currentDate.getFullYear(),
              month = currentDate.getMonth(),
              date = currentDate.getDate(),
              day = currentDate.getDay(),
              difference = day - this.startingDayWeek;

          if (difference < 0) {
            difference += 7;
          }

          var firstDayOfWeek = new Date(year, month, date - difference);
          var endTime = new Date(year, month, date - difference + 7);
          return {
            startTime: firstDayOfWeek,
            endTime: endTime
          };
        };

        WeekViewComponent.prototype.onDataLoaded = function () {
          var eventSource = this.eventSource,
              len = eventSource ? eventSource.length : 0,
              startTime = this.range.startTime,
              endTime = this.range.endTime,
              utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())),
              utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())),
              currentViewIndex = this.currentViewIndex,
              rows = this.views[currentViewIndex].rows,
              dates = this.views[currentViewIndex].dates,
              oneHour = 3600000,
              oneDay = 86400000,
              // add allday eps
          eps = 0.016,
              allDayEventInRange = false,
              normalEventInRange = false,
              rangeStartRowIndex = this.startHour * this.hourSegments,
              rangeEndRowIndex = this.endHour * this.hourSegments,
              allRows = 24 * this.hourSegments;

          for (var i = 0; i < 7; i += 1) {
            dates[i].events = [];
            dates[i].hasEvent = false;
          }

          for (var day = 0; day < 7; day += 1) {
            for (var hour = 0; hour < this.hourRange; hour += 1) {
              rows[hour][day].events = [];
            }
          }

          for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i];
            var eventStartTime = new Date(event_1.startTime.getTime());
            var eventEndTime = new Date(event_1.endTime.getTime());

            if (event_1.allDay) {
              if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                continue;
              } else {
                allDayEventInRange = true;
                var allDayStartIndex = void 0;

                if (eventStartTime <= utcStartTime) {
                  allDayStartIndex = 0;
                } else {
                  allDayStartIndex = Math.floor((eventStartTime.getTime() - utcStartTime.getTime()) / oneDay);
                }

                var allDayEndIndex = void 0;

                if (eventEndTime >= utcEndTime) {
                  allDayEndIndex = Math.ceil((utcEndTime.getTime() - utcStartTime.getTime()) / oneDay);
                } else {
                  allDayEndIndex = Math.ceil((eventEndTime.getTime() - utcStartTime.getTime()) / oneDay);
                }

                var displayAllDayEvent = {
                  event: event_1,
                  startIndex: allDayStartIndex,
                  endIndex: allDayEndIndex
                };
                var eventSet = dates[allDayStartIndex].events;

                if (eventSet) {
                  eventSet.push(displayAllDayEvent);
                } else {
                  eventSet = [];
                  eventSet.push(displayAllDayEvent);
                  dates[allDayStartIndex].events = eventSet;
                }

                dates[allDayStartIndex].hasEvent = true;
              }
            } else {
              if (eventEndTime <= startTime || eventStartTime >= endTime) {
                continue;
              } else {
                normalEventInRange = true;
                var timeDiff = void 0;
                var timeDifferenceStart = void 0;

                if (eventStartTime <= startTime) {
                  timeDifferenceStart = 0;
                } else {
                  timeDiff = eventStartTime.getTime() - startTime.getTime() - (eventStartTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                  timeDifferenceStart = timeDiff / oneHour * this.hourSegments;
                }

                var timeDifferenceEnd = void 0;

                if (eventEndTime >= endTime) {
                  timeDiff = endTime.getTime() - startTime.getTime() - (endTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                  timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
                } else {
                  timeDiff = eventEndTime.getTime() - startTime.getTime() - (eventEndTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                  timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
                }

                var startIndex = Math.floor(timeDifferenceStart),
                    endIndex = Math.ceil(timeDifferenceEnd - eps),
                    startRowIndex = startIndex % allRows,
                    dayIndex = Math.floor(startIndex / allRows),
                    endOfDay = dayIndex * allRows,
                    startOffset = 0,
                    endOffset = 0;

                if (this.hourParts !== 1) {
                  if (startRowIndex < rangeStartRowIndex) {
                    startOffset = 0;
                  } else {
                    startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                  }
                }

                do {
                  endOfDay += allRows;
                  var endRowIndex = void 0;

                  if (endOfDay < endIndex) {
                    endRowIndex = allRows;
                  } else {
                    if (endOfDay === endIndex) {
                      endRowIndex = allRows;
                    } else {
                      endRowIndex = endIndex % allRows;
                    }

                    if (this.hourParts !== 1) {
                      if (endRowIndex > rangeEndRowIndex) {
                        endOffset = 0;
                      } else {
                        endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                      }
                    }
                  }

                  if (startRowIndex < rangeStartRowIndex) {
                    startRowIndex = 0;
                  } else {
                    startRowIndex -= rangeStartRowIndex;
                  }

                  if (endRowIndex > rangeEndRowIndex) {
                    endRowIndex = rangeEndRowIndex;
                  }

                  endRowIndex -= rangeStartRowIndex;

                  if (startRowIndex < endRowIndex) {
                    var displayEvent = {
                      event: event_1,
                      startIndex: startRowIndex,
                      endIndex: endRowIndex,
                      startOffset: startOffset,
                      endOffset: endOffset
                    };
                    var eventSet = rows[startRowIndex][dayIndex].events;

                    if (eventSet) {
                      eventSet.push(displayEvent);
                    } else {
                      eventSet = [];
                      eventSet.push(displayEvent);
                      rows[startRowIndex][dayIndex].events = eventSet;
                    }

                    dates[dayIndex].hasEvent = true;
                  }

                  startRowIndex = 0;
                  startOffset = 0;
                  dayIndex += 1;
                } while (endOfDay < endIndex);
              }
            }
          }

          if (normalEventInRange) {
            for (var day = 0; day < 7; day += 1) {
              var orderedEvents = [];

              for (var hour = 0; hour < this.hourRange; hour += 1) {
                if (rows[hour][day].events) {
                  rows[hour][day].events.sort(WeekViewComponent_1.compareEventByStartOffset);
                  orderedEvents = orderedEvents.concat(rows[hour][day].events);
                }
              }

              if (orderedEvents.length > 0) {
                this.placeEvents(orderedEvents);
              }
            }
          }

          if (allDayEventInRange) {
            var orderedAllDayEvents = [];

            for (var day = 0; day < 7; day += 1) {
              if (dates[day].events) {
                orderedAllDayEvents = orderedAllDayEvents.concat(dates[day].events);
              }
            }

            if (orderedAllDayEvents.length > 0) {
              this.placeAllDayEvents(orderedAllDayEvents);
            }
          }

          if (this.autoSelect) {
            var findSelected = false;
            var selectedDate = void 0;

            for (var r = 0; r < 7; r += 1) {
              if (dates[r].selected) {
                selectedDate = dates[r];
                findSelected = true;
                break;
              }
            }

            if (findSelected) {
              var disabled = false;

              if (this.markDisabled) {
                disabled = this.markDisabled(selectedDate.date);
              }

              this.onTimeSelected.emit({
                selectedTime: selectedDate.date,
                events: selectedDate.events.map(function (e) {
                  return e.event;
                }),
                disabled: disabled
              });
            }
          }
        };

        WeekViewComponent.prototype.refreshView = function () {
          this.range = this.getRange(this.calendarService.currentDate);

          if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
          }

          this.calendarService.populateAdjacentViews(this);
          this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
          this.calendarService.rangeChanged(this);
        };

        WeekViewComponent.prototype.getTitle = function () {
          var firstDayOfWeek = new Date(this.range.startTime.getTime());
          firstDayOfWeek.setHours(12, 0, 0, 0);
          return this.formatTitle(firstDayOfWeek);
        };

        WeekViewComponent.prototype.getHighlightClass = function (date) {
          var className = '';

          if (date.hasEvent) {
            if (className) {
              className += ' ';
            }

            className = 'weekview-with-event';
          }

          if (date.selected) {
            if (className) {
              className += ' ';
            }

            className += 'weekview-selected';
          }

          if (date.current) {
            if (className) {
              className += ' ';
            }

            className += 'weekview-current';
          }

          return className;
        };

        WeekViewComponent.compareEventByStartOffset = function (eventA, eventB) {
          return eventA.startOffset - eventB.startOffset;
        };

        WeekViewComponent.prototype.select = function (selectedTime, events) {
          var disabled = false;

          if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
          }

          this.onTimeSelected.emit({
            selectedTime: selectedTime,
            events: events.map(function (e) {
              return e.event;
            }),
            disabled: disabled
          });
        };

        WeekViewComponent.prototype.placeEvents = function (orderedEvents) {
          this.calculatePosition(orderedEvents);
          WeekViewComponent_1.calculateWidth(orderedEvents, this.hourRange, this.hourParts);
        };

        WeekViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
          this.calculatePosition(orderedEvents);
        };

        WeekViewComponent.prototype.overlap = function (event1, event2) {
          var earlyEvent = event1,
              lateEvent = event2;

          if (event1.startIndex > event2.startIndex || event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset) {
            earlyEvent = event2;
            lateEvent = event1;
          }

          if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
          } else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset >= this.hourParts);
          }
        };

        WeekViewComponent.prototype.calculatePosition = function (events) {
          var len = events.length,
              maxColumn = 0,
              isForbidden = new Array(len);

          for (var i = 0; i < len; i += 1) {
            var col = void 0;

            for (col = 0; col < maxColumn; col += 1) {
              isForbidden[col] = false;
            }

            for (var j = 0; j < i; j += 1) {
              if (this.overlap(events[i], events[j])) {
                isForbidden[events[j].position] = true;
              }
            }

            for (col = 0; col < maxColumn; col += 1) {
              if (!isForbidden[col]) {
                break;
              }
            }

            if (col < maxColumn) {
              events[i].position = col;
            } else {
              events[i].position = maxColumn++;
            }
          }

          if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
              events[i].position = maxColumn - 1 - events[i].position;
            }
          }
        };

        WeekViewComponent.calculateWidth = function (orderedEvents, size, hourParts) {
          var totalSize = size * hourParts,
              cells = new Array(totalSize); // sort by position in descending order, the right most columns should be calculated first

          orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
          });

          for (var i_1 = 0; i_1 < totalSize; i_1 += 1) {
            cells[i_1] = {
              calculated: false,
              events: []
            };
          }

          var len = orderedEvents.length;

          for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_2 = orderedEvents[i_2];
            var index = event_2.startIndex * hourParts + event_2.startOffset;

            while (index < event_2.endIndex * hourParts - event_2.endOffset) {
              cells[index].events.push(event_2);
              index += 1;
            }
          }

          var i = 0;

          while (i < len) {
            var event_3 = orderedEvents[i];

            if (!event_3.overlapNumber) {
              var overlapNumber = event_3.position + 1;
              event_3.overlapNumber = overlapNumber;
              var eventQueue = [event_3];

              while (event_3 = eventQueue.shift()) {
                var index = event_3.startIndex * hourParts + event_3.startOffset;

                while (index < event_3.endIndex * hourParts - event_3.endOffset) {
                  if (!cells[index].calculated) {
                    cells[index].calculated = true;

                    if (cells[index].events) {
                      var eventCountInCell = cells[index].events.length;

                      for (var j = 0; j < eventCountInCell; j += 1) {
                        var currentEventInCell = cells[index].events[j];

                        if (!currentEventInCell.overlapNumber) {
                          currentEventInCell.overlapNumber = overlapNumber;
                          eventQueue.push(currentEventInCell);
                        }
                      }
                    }
                  }

                  index += 1;
                }
              }
            }

            i += 1;
          }
        };

        WeekViewComponent.prototype.updateCurrentView = function (currentViewStartDate, view) {
          var currentCalendarDate = this.calendarService.currentDate,
              today = new Date(),
              oneDay = 86400000,
              selectedDayDifference = Math.floor((currentCalendarDate.getTime() - currentViewStartDate.getTime() - (currentCalendarDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay),
              currentDayDifference = Math.floor((today.getTime() - currentViewStartDate.getTime() - (today.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);

          for (var r = 0; r < 7; r += 1) {
            view.dates[r].selected = false;
          }

          if (selectedDayDifference >= 0 && selectedDayDifference < 7 && this.autoSelect) {
            view.dates[selectedDayDifference].selected = true;
          }

          if (currentDayDifference >= 0 && currentDayDifference < 7) {
            view.dates[currentDayDifference].current = true;
          }
        };

        WeekViewComponent.prototype.daySelected = function (viewDate) {
          var selectedDate = viewDate.date,
              dates = this.views[this.currentViewIndex].dates,
              currentViewStartDate = this.range.startTime,
              oneDay = 86400000,
              selectedDayDifference = Math.floor((selectedDate.getTime() - currentViewStartDate.getTime() - (selectedDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
          this.calendarService.setCurrentDate(selectedDate);

          for (var r = 0; r < 7; r += 1) {
            dates[r].selected = false;
          }

          if (selectedDayDifference >= 0 && selectedDayDifference < 7) {
            dates[selectedDayDifference].selected = true;
          }

          var disabled = false;

          if (this.markDisabled) {
            disabled = this.markDisabled(selectedDate);
          }

          this.onTimeSelected.emit({
            selectedTime: selectedDate,
            events: viewDate.events.map(function (e) {
              return e.event;
            }),
            disabled: disabled
          });
        };

        WeekViewComponent.prototype.setScrollPosition = function (scrollPosition) {
          this.initScrollPosition = scrollPosition;
        };

        var WeekViewComponent_1;
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('weekSlider'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], WeekViewComponent.prototype, "slider", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.weekview'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WeekViewComponent.prototype, "class", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], WeekViewComponent.prototype, "weekviewHeaderTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], WeekViewComponent.prototype, "weekviewAllDayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], WeekViewComponent.prototype, "weekviewNormalEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], WeekViewComponent.prototype, "weekviewAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], WeekViewComponent.prototype, "weekviewNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], WeekViewComponent.prototype, "weekviewInactiveAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], WeekViewComponent.prototype, "weekviewInactiveNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], WeekViewComponent.prototype, "formatWeekTitle", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], WeekViewComponent.prototype, "formatWeekViewDayHeader", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], WeekViewComponent.prototype, "formatHourColumn", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], WeekViewComponent.prototype, "startingDayWeek", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], WeekViewComponent.prototype, "allDayLabel", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], WeekViewComponent.prototype, "hourParts", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], WeekViewComponent.prototype, "eventSource", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], WeekViewComponent.prototype, "autoSelect", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)], WeekViewComponent.prototype, "markDisabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], WeekViewComponent.prototype, "locale", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WeekViewComponent.prototype, "dateFormatter", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], WeekViewComponent.prototype, "dir", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], WeekViewComponent.prototype, "scrollToHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], WeekViewComponent.prototype, "preserveScrollPosition", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], WeekViewComponent.prototype, "lockSwipeToPrev", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], WeekViewComponent.prototype, "lockSwipes", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], WeekViewComponent.prototype, "startHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], WeekViewComponent.prototype, "endHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WeekViewComponent.prototype, "sliderOptions", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], WeekViewComponent.prototype, "hourSegments", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WeekViewComponent.prototype, "onRangeChanged", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WeekViewComponent.prototype, "onEventSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WeekViewComponent.prototype, "onTimeSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WeekViewComponent.prototype, "onTitleChanged", void 0);
        WeekViewComponent = WeekViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])], WeekViewComponent);

        WeekViewComponent.ɵfac = function WeekViewComponent_Factory(t) {
          return new (t || WeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
        };

        WeekViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: WeekViewComponent,
          selectors: [["weekview"]],
          viewQuery: function WeekViewComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
            }
          },
          hostVars: 2,
          hostBindings: function WeekViewComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("weekview", ctx["class"]);
            }
          },
          inputs: {
            autoSelect: "autoSelect",
            dir: "dir",
            scrollToHour: "scrollToHour",
            sliderOptions: "sliderOptions",
            weekviewHeaderTemplate: "weekviewHeaderTemplate",
            weekviewAllDayEventTemplate: "weekviewAllDayEventTemplate",
            weekviewNormalEventTemplate: "weekviewNormalEventTemplate",
            weekviewAllDayEventSectionTemplate: "weekviewAllDayEventSectionTemplate",
            weekviewNormalEventSectionTemplate: "weekviewNormalEventSectionTemplate",
            weekviewInactiveAllDayEventSectionTemplate: "weekviewInactiveAllDayEventSectionTemplate",
            weekviewInactiveNormalEventSectionTemplate: "weekviewInactiveNormalEventSectionTemplate",
            formatWeekTitle: "formatWeekTitle",
            formatWeekViewDayHeader: "formatWeekViewDayHeader",
            formatHourColumn: "formatHourColumn",
            startingDayWeek: "startingDayWeek",
            allDayLabel: "allDayLabel",
            hourParts: "hourParts",
            eventSource: "eventSource",
            markDisabled: "markDisabled",
            locale: "locale",
            dateFormatter: "dateFormatter",
            preserveScrollPosition: "preserveScrollPosition",
            lockSwipeToPrev: "lockSwipeToPrev",
            lockSwipes: "lockSwipes",
            startHour: "startHour",
            endHour: "endHour",
            hourSegments: "hourSegments"
          },
          outputs: {
            onRangeChanged: "onRangeChanged",
            onEventSelected: "onEventSelected",
            onTimeSelected: "onTimeSelected",
            onTitleChanged: "onTitleChanged"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
          decls: 26,
          vars: 11,
          consts: [[1, "slides-container", 3, "options", "dir", "ionSlideDidChange"], ["weekSlider", ""], [1, "slide-container"], [1, "table", "table-bordered", "table-fixed", "weekview-header"], [1, "calendar-hour-column"], ["class", "weekview-header text-center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "weekview-header", "text-center", 3, "ngClass", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "weekview-allday-table"], [1, "weekview-allday-label"], [1, "weekview-allday-content-wrapper", "scroll-content"], [1, "table", "table-fixed", "weekview-allday-content-table"], ["class", "calendar-cell", 4, "ngFor", "ngForOf"], [1, "weekview-normal-event-container", 3, "initPosition", "emitEvent", "onScroll"], [1, "table", "table-bordered", "table-fixed", "weekview-normal-event-table"], [4, "ngFor", "ngForOf"], [1, "calendar-cell"], [1, "calendar-hour-column", "text-center"], ["class", "calendar-cell", "tappable", "", 3, "click", 4, "ngFor", "ngForOf"], ["tappable", "", 1, "calendar-cell", 3, "click"], [1, "weekview-normal-event-container", 3, "initPosition"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
          template: function WeekViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-slides", 0, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionSlideDidChange", function WeekViewComponent_Template_ion_slides_ionSlideDidChange_0_listener() {
                return ctx.onSlideChanged();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-slide", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "th", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, WeekViewComponent_th_7_Template, 2, 5, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WeekViewComponent_div_8_Template, 13, 5, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, WeekViewComponent_div_9_Template, 13, 4, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-slide", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "th", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WeekViewComponent_th_15_Template, 2, 5, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, WeekViewComponent_div_16_Template, 13, 5, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, WeekViewComponent_div_17_Template, 13, 4, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-slide", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "table", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "th", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, WeekViewComponent_th_23_Template, 2, 5, "th", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, WeekViewComponent_div_24_Template, 13, 5, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, WeekViewComponent_div_25_Template, 13, 4, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.sliderOptions)("dir", ctx.dir);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.views[0].dates);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 0 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 0 !== ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.views[1].dates);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 1 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 1 !== ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.views[2].dates);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 2 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 2 !== ctx.currentViewIndex);
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_5__["initPositionScrollComponent"]],
          styles: ["\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n          width: 50px;\n          white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .calendar-event {\n          position: absolute;\n          padding: 2px;\n          cursor: pointer;\n          z-index: 10000;\n        }\n\n        .calendar-cell {\n          padding: 0 !important;\n          height: 37px;\n        }\n        \n        .slides-container {\n            height: 100%;\n        }\n        \n        .slide-container {\n            display: block;\n        }\n\n        .weekview-allday-label {\n          float: left;\n          height: 100%;\n          line-height: 50px;\n          text-align: center;\n          width: 50px;\n          border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-label {\n            float: right;\n            border-right: 1px solid #ddd;\n        }\n\n        .weekview-allday-content-wrapper {\n          margin-left: 50px;\n          overflow: hidden;\n          height: 51px;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 50px;\n        }\n\n        .weekview-allday-content-table {\n          min-height: 50px;\n        }\n\n        .weekview-allday-content-table td {\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n        }\n\n        .weekview-header th {\n          overflow: hidden;\n          white-space: nowrap;\n          font-size: 14px;\n        }\n\n        .weekview-allday-table {\n          height: 50px;\n          position: relative;\n          border-bottom: 1px solid #ddd;\n          font-size: 14px;\n        }\n\n        .weekview-normal-event-container {\n          margin-top: 87px;\n          overflow: hidden;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          position: absolute;\n          font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n        \n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n            display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n          .weekview-allday-label, .calendar-hour-column {\n            width: 31px;\n            font-size: 12px;\n          }\n\n          .weekview-allday-label {\n            padding-top: 4px;\n          }\n\n          .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n            line-height: 12px;\n          }\n\n          .table > thead > tr > th.weekview-header {\n            padding-left: 0;\n            padding-right: 0;\n            font-size: 12px;\n          }\n\n          .weekview-allday-label {\n            line-height: 20px;\n          }\n\n          .weekview-allday-content-wrapper {\n            margin-left: 31px;\n          }\n\n          [dir=\"rtl\"] .weekview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 31px;\n          }\n        }\n    "],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](WeekViewComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
            args: [{
              selector: 'weekview',
              template: "\n        <ion-slides #weekSlider [options]=\"sliderOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\" class=\"slides-container\">\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[0].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"0===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[0].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[0].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"0!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[0].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewInactiveAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[0].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                    <ng-template [ngTemplateOutlet]=\"weekviewInactiveNormalEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[1].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"1===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[1].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[1].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"1!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[1].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewInactiveAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[1].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewInactiveNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[2].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"2===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[2].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[2].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"2!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[2].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewInactiveAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[2].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewInactiveNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    ",
              styles: ["\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n          width: 50px;\n          white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .calendar-event {\n          position: absolute;\n          padding: 2px;\n          cursor: pointer;\n          z-index: 10000;\n        }\n\n        .calendar-cell {\n          padding: 0 !important;\n          height: 37px;\n        }\n        \n        .slides-container {\n            height: 100%;\n        }\n        \n        .slide-container {\n            display: block;\n        }\n\n        .weekview-allday-label {\n          float: left;\n          height: 100%;\n          line-height: 50px;\n          text-align: center;\n          width: 50px;\n          border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-label {\n            float: right;\n            border-right: 1px solid #ddd;\n        }\n\n        .weekview-allday-content-wrapper {\n          margin-left: 50px;\n          overflow: hidden;\n          height: 51px;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 50px;\n        }\n\n        .weekview-allday-content-table {\n          min-height: 50px;\n        }\n\n        .weekview-allday-content-table td {\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n        }\n\n        .weekview-header th {\n          overflow: hidden;\n          white-space: nowrap;\n          font-size: 14px;\n        }\n\n        .weekview-allday-table {\n          height: 50px;\n          position: relative;\n          border-bottom: 1px solid #ddd;\n          font-size: 14px;\n        }\n\n        .weekview-normal-event-container {\n          margin-top: 87px;\n          overflow: hidden;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          position: absolute;\n          font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n        \n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n            display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n          .weekview-allday-label, .calendar-hour-column {\n            width: 31px;\n            font-size: 12px;\n          }\n\n          .weekview-allday-label {\n            padding-top: 4px;\n          }\n\n          .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n            line-height: 12px;\n          }\n\n          .table > thead > tr > th.weekview-header {\n            padding-left: 0;\n            padding-right: 0;\n            font-size: 12px;\n          }\n\n          .weekview-allday-label {\n            line-height: 20px;\n          }\n\n          .weekview-allday-content-wrapper {\n            margin-left: 31px;\n          }\n\n          [dir=\"rtl\"] .weekview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 31px;\n          }\n        }\n    "],
              encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
          }], function () {
            return [{
              type: _calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
            }];
          }, {
            "class": [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
              args: ['class.weekview']
            }],
            autoSelect: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            dir: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            scrollToHour: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            onRangeChanged: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
            }],
            onEventSelected: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
            }],
            onTimeSelected: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
            }],
            onTitleChanged: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
            }],
            sliderOptions: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            slider: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
              args: ['weekSlider']
            }],
            weekviewHeaderTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            weekviewAllDayEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            weekviewNormalEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            weekviewAllDayEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            weekviewNormalEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            weekviewInactiveAllDayEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            weekviewInactiveNormalEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            formatWeekTitle: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            formatWeekViewDayHeader: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            formatHourColumn: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            startingDayWeek: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            allDayLabel: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            hourParts: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            eventSource: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            markDisabled: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            locale: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            dateFormatter: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            preserveScrollPosition: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            lockSwipeToPrev: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            lockSwipes: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            startHour: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            endHour: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            hourSegments: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }]
          });
        })();

        return WeekViewComponent;
      }(); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vla3ZpZXcuanMiLCJzb3VyY2VzIjpbIndlZWt2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0VBaXRCa0UsQUFPM0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW9uU2xpZGVzIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhci5zZXJ2aWNlJztcbnZhciBXZWVrVmlld0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWVrVmlld0NvbXBvbmVudChjYWxlbmRhclNlcnZpY2UsIGVsbSkge1xuICAgICAgICB0aGlzLmNhbGVuZGFyU2VydmljZSA9IGNhbGVuZGFyU2VydmljZTtcbiAgICAgICAgdGhpcy5lbG0gPSBlbG07XG4gICAgICAgIHRoaXMuY2xhc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dG9TZWxlY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpciA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ib3VyID0gMDtcbiAgICAgICAgdGhpcy5vblJhbmdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vbkV2ZW50U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25UaW1lU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25UaXRsZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgICAgICB0aGlzLnZpZXdzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXdJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5tb2RlID0gJ3dlZWsnO1xuICAgICAgICB0aGlzLmluaXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrT25Jbml0ID0gdHJ1ZTtcbiAgICB9XG4gICAgV2Vla1ZpZXdDb21wb25lbnRfMSA9IFdlZWtWaWV3Q29tcG9uZW50O1xuICAgIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLnNsaWRlck9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyT3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2xpZGVyT3B0aW9ucy5sb29wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ob3VyUmFuZ2UgPSAodGhpcy5lbmRIb3VyIC0gdGhpcy5zdGFydEhvdXIpICogdGhpcy5ob3VyU2VnbWVudHM7XG4gICAgICAgIGlmICh0aGlzLmRhdGVGb3JtYXR0ZXIgJiYgdGhpcy5kYXRlRm9ybWF0dGVyLmZvcm1hdFdlZWtWaWV3RGF5SGVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdERheUhlYWRlciA9IHRoaXMuZGF0ZUZvcm1hdHRlci5mb3JtYXRXZWVrVmlld0RheUhlYWRlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRlUGlwZV8xID0gbmV3IERhdGVQaXBlKHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0RGF5SGVhZGVyID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZVBpcGVfMS50cmFuc2Zvcm0oZGF0ZSwgdGhpcy5mb3JtYXRXZWVrVmlld0RheUhlYWRlcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRhdGVGb3JtYXR0ZXIgJiYgdGhpcy5kYXRlRm9ybWF0dGVyLmZvcm1hdFdlZWtWaWV3VGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0VGl0bGUgPSB0aGlzLmRhdGVGb3JtYXR0ZXIuZm9ybWF0V2Vla1ZpZXdUaXRsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRlUGlwZV8yID0gbmV3IERhdGVQaXBlKHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0VGl0bGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlUGlwZV8yLnRyYW5zZm9ybShkYXRlLCB0aGlzLmZvcm1hdFdlZWtUaXRsZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRhdGVGb3JtYXR0ZXIgJiYgdGhpcy5kYXRlRm9ybWF0dGVyLmZvcm1hdFdlZWtWaWV3SG91ckNvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXRIb3VyQ29sdW1uTGFiZWwgPSB0aGlzLmRhdGVGb3JtYXR0ZXIuZm9ybWF0V2Vla1ZpZXdIb3VyQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRhdGVQaXBlXzMgPSBuZXcgRGF0ZVBpcGUodGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5mb3JtYXRIb3VyQ29sdW1uTGFiZWwgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlUGlwZV8zLnRyYW5zZm9ybShkYXRlLCB0aGlzLmZvcm1hdEhvdXJDb2x1bW4pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sb2NrU3dpcGVUb1ByZXYpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLmxvY2tTd2lwZVRvUHJldih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sb2NrU3dpcGVzKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlci5sb2NrU3dpcGVzKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICAgICAgdGhpcy5ob3VyQ29sdW1uTGFiZWxzID0gdGhpcy5nZXRIb3VyQ29sdW1uTGFiZWxzKCk7XG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tUGFyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuY3VycmVudERhdGVDaGFuZ2VkRnJvbVBhcmVudCQuc3Vic2NyaWJlKGZ1bmN0aW9uIChjdXJyZW50RGF0ZSkge1xuICAgICAgICAgICAgX3RoaXMucmVmcmVzaFZpZXcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZXZlbnRTb3VyY2VDaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZXZlbnRTb3VyY2VDaGFuZ2VkJC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMub25EYXRhTG9hZGVkKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpO1xuICAgICAgICB0aGlzLm9uVGl0bGVDaGFuZ2VkLmVtaXQodGl0bGUpO1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxUb0hvdXIgPiAwKSB7XG4gICAgICAgICAgICB2YXIgaG91ckNvbHVtbnNfMSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLndlZWt2aWV3LW5vcm1hbC1ldmVudC1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsZW5kYXItaG91ci1jb2x1bW4nKTtcbiAgICAgICAgICAgIHZhciBtZV8xID0gdGhpcztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1lXzEuaW5pdFNjcm9sbFBvc2l0aW9uID0gaG91ckNvbHVtbnNfMVttZV8xLnNjcm9sbFRvSG91ciAtIG1lXzEuc3RhcnRIb3VyXS5vZmZzZXRUb3A7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBldmVudFNvdXJjZUNoYW5nZSA9IGNoYW5nZXNbJ2V2ZW50U291cmNlJ107XG4gICAgICAgIGlmIChldmVudFNvdXJjZUNoYW5nZSAmJiBldmVudFNvdXJjZUNoYW5nZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMub25EYXRhTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxvY2tTd2lwZVRvUHJldiA9IGNoYW5nZXNbJ2xvY2tTd2lwZVRvUHJldiddO1xuICAgICAgICBpZiAobG9ja1N3aXBlVG9QcmV2KSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlci5sb2NrU3dpcGVUb1ByZXYobG9ja1N3aXBlVG9QcmV2LmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxvY2tTd2lwZXMgPSBjaGFuZ2VzWydsb2NrU3dpcGVzJ107XG4gICAgICAgIGlmIChsb2NrU3dpcGVzKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlci5sb2NrU3dpcGVzKGxvY2tTd2lwZXMuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tUGFyZW50U3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQ2hhbmdlZEZyb21QYXJlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVDaGFuZ2VkRnJvbVBhcmVudFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRTb3VyY2VDaGFuZ2VkU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50U291cmNlQ2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZUNoYW5nZWRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUub25TbGlkZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrT25Jbml0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrT25Jbml0ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1cnJlbnRTbGlkZUluZGV4ID0gdGhpcy5zbGlkZXIuZ2V0QWN0aXZlSW5kZXgoKSwgZGlyZWN0aW9uID0gMCwgY3VycmVudFZpZXdJbmRleCA9IHRoaXMuY3VycmVudFZpZXdJbmRleDtcbiAgICAgICAgdGhpcy5zbGlkZXIuZ2V0QWN0aXZlSW5kZXgoKS50aGVuKGZ1bmN0aW9uIChjdXJyZW50U2xpZGVJbmRleCkge1xuICAgICAgICAgICAgY3VycmVudFNsaWRlSW5kZXggPSAoY3VycmVudFNsaWRlSW5kZXggKyAyKSAlIDM7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlSW5kZXggLSBjdXJyZW50Vmlld0luZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRTbGlkZUluZGV4ID09PSAwICYmIGN1cnJlbnRWaWV3SW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIF90aGlzLnNsaWRlci5zbGlkZVRvKDEsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRWaWV3SW5kZXggLSBjdXJyZW50U2xpZGVJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFNsaWRlSW5kZXggPT09IDIgJiYgY3VycmVudFZpZXdJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgICAgIF90aGlzLnNsaWRlci5zbGlkZVRvKDMsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnRWaWV3SW5kZXggPSBjdXJyZW50U2xpZGVJbmRleDtcbiAgICAgICAgICAgIF90aGlzLm1vdmUoZGlyZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB2YXIgYWRqYWNlbnQgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRBZGphY2VudENhbGVuZGFyRGF0ZSh0aGlzLm1vZGUsIGRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnNldEN1cnJlbnREYXRlKGFkamFjZW50KTtcbiAgICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgfTtcbiAgICBXZWVrVmlld0NvbXBvbmVudC5jcmVhdGVEYXRlT2JqZWN0cyA9IGZ1bmN0aW9uIChzdGFydFRpbWUsIHN0YXJ0SG91ciwgZW5kSG91ciwgdGltZUludGVydmFsKSB7XG4gICAgICAgIHZhciB0aW1lcyA9IFtdLCBjdXJyZW50SG91ciA9IHN0YXJ0VGltZS5nZXRIb3VycygpLCBjdXJyZW50RGF0ZSA9IHN0YXJ0VGltZS5nZXREYXRlKCksIGhvdXJTdGVwLCBtaW5TdGVwO1xuICAgICAgICBpZiAodGltZUludGVydmFsIDwgMSkge1xuICAgICAgICAgICAgaG91clN0ZXAgPSBNYXRoLmZsb29yKDEgLyB0aW1lSW50ZXJ2YWwpO1xuICAgICAgICAgICAgbWluU3RlcCA9IDYwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaG91clN0ZXAgPSAxO1xuICAgICAgICAgICAgbWluU3RlcCA9IE1hdGguZmxvb3IoNjAgLyB0aW1lSW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGhvdXIgPSBzdGFydEhvdXI7IGhvdXIgPCBlbmRIb3VyOyBob3VyICs9IGhvdXJTdGVwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpbnRlcnZhbCA9IDA7IGludGVydmFsIDwgNjA7IGludGVydmFsICs9IG1pblN0ZXApIHtcbiAgICAgICAgICAgICAgICB2YXIgcm93ID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZGF5ID0gMDsgZGF5IDwgNzsgZGF5ICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZShzdGFydFRpbWUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZS5zZXRIb3VycyhjdXJyZW50SG91ciArIGhvdXIsIGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZS5zZXREYXRlKGN1cnJlbnREYXRlICsgZGF5KTtcbiAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpbWVzLnB1c2gocm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGltZXM7XG4gICAgfTtcbiAgICBXZWVrVmlld0NvbXBvbmVudC5nZXREYXRlcyA9IGZ1bmN0aW9uIChzdGFydFRpbWUsIG4pIHtcbiAgICAgICAgdmFyIGRhdGVzID0gbmV3IEFycmF5KG4pLCBjdXJyZW50ID0gbmV3IERhdGUoc3RhcnRUaW1lLmdldFRpbWUoKSksIGkgPSAwO1xuICAgICAgICBjdXJyZW50LnNldEhvdXJzKDEyKTsgLy8gUHJldmVudCByZXBlYXRlZCBkYXRlcyBiZWNhdXNlIG9mIHRpbWV6b25lIGJ1Z1xuICAgICAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgICAgIGRhdGVzW2krK10gPSB7XG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoY3VycmVudC5nZXRUaW1lKCkpLFxuICAgICAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICAgICAgZGF5SGVhZGVyOiAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGN1cnJlbnQuc2V0RGF0ZShjdXJyZW50LmdldERhdGUoKSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlcztcbiAgICB9O1xuICAgIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5nZXRIb3VyQ29sdW1uTGFiZWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaG91ckNvbHVtbkxhYmVscyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBob3VyID0gMCwgbGVuZ3RoXzEgPSB0aGlzLnZpZXdzWzBdLnJvd3MubGVuZ3RoOyBob3VyIDwgbGVuZ3RoXzE7IGhvdXIgKz0gMSkge1xuICAgICAgICAgICAgaG91ckNvbHVtbkxhYmVscy5wdXNoKHRoaXMuZm9ybWF0SG91ckNvbHVtbkxhYmVsKHRoaXMudmlld3NbMF0ucm93c1tob3VyXVswXS50aW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvdXJDb2x1bW5MYWJlbHM7XG4gICAgfTtcbiAgICBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0Vmlld0RhdGEgPSBmdW5jdGlvbiAoc3RhcnRUaW1lKSB7XG4gICAgICAgIHZhciBkYXRlcyA9IFdlZWtWaWV3Q29tcG9uZW50XzEuZ2V0RGF0ZXMoc3RhcnRUaW1lLCA3KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGRhdGVzW2ldLmRheUhlYWRlciA9IHRoaXMuZm9ybWF0RGF5SGVhZGVyKGRhdGVzW2ldLmRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3dzOiBXZWVrVmlld0NvbXBvbmVudF8xLmNyZWF0ZURhdGVPYmplY3RzKHN0YXJ0VGltZSwgdGhpcy5zdGFydEhvdXIsIHRoaXMuZW5kSG91ciwgdGhpcy5ob3VyU2VnbWVudHMpLFxuICAgICAgICAgICAgZGF0ZXM6IGRhdGVzXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0UmFuZ2UgPSBmdW5jdGlvbiAoY3VycmVudERhdGUpIHtcbiAgICAgICAgdmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCksIGRhdGUgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCksIGRheSA9IGN1cnJlbnREYXRlLmdldERheSgpLCBkaWZmZXJlbmNlID0gZGF5IC0gdGhpcy5zdGFydGluZ0RheVdlZWs7XG4gICAgICAgIGlmIChkaWZmZXJlbmNlIDwgMCkge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSArPSA3O1xuICAgICAgICB9XG4gICAgICAgIHZhciBmaXJzdERheU9mV2VlayA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXRlIC0gZGlmZmVyZW5jZSk7XG4gICAgICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRhdGUgLSBkaWZmZXJlbmNlICsgNyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydFRpbWU6IGZpcnN0RGF5T2ZXZWVrLFxuICAgICAgICAgICAgZW5kVGltZTogZW5kVGltZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLm9uRGF0YUxvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGV2ZW50U291cmNlID0gdGhpcy5ldmVudFNvdXJjZSwgbGVuID0gZXZlbnRTb3VyY2UgPyBldmVudFNvdXJjZS5sZW5ndGggOiAwLCBzdGFydFRpbWUgPSB0aGlzLnJhbmdlLnN0YXJ0VGltZSwgZW5kVGltZSA9IHRoaXMucmFuZ2UuZW5kVGltZSwgdXRjU3RhcnRUaW1lID0gbmV3IERhdGUoRGF0ZS5VVEMoc3RhcnRUaW1lLmdldEZ1bGxZZWFyKCksIHN0YXJ0VGltZS5nZXRNb250aCgpLCBzdGFydFRpbWUuZ2V0RGF0ZSgpKSksIHV0Y0VuZFRpbWUgPSBuZXcgRGF0ZShEYXRlLlVUQyhlbmRUaW1lLmdldEZ1bGxZZWFyKCksIGVuZFRpbWUuZ2V0TW9udGgoKSwgZW5kVGltZS5nZXREYXRlKCkpKSwgY3VycmVudFZpZXdJbmRleCA9IHRoaXMuY3VycmVudFZpZXdJbmRleCwgcm93cyA9IHRoaXMudmlld3NbY3VycmVudFZpZXdJbmRleF0ucm93cywgZGF0ZXMgPSB0aGlzLnZpZXdzW2N1cnJlbnRWaWV3SW5kZXhdLmRhdGVzLCBvbmVIb3VyID0gMzYwMDAwMCwgb25lRGF5ID0gODY0MDAwMDAsIFxuICAgICAgICAvLyBhZGQgYWxsZGF5IGVwc1xuICAgICAgICBlcHMgPSAwLjAxNiwgYWxsRGF5RXZlbnRJblJhbmdlID0gZmFsc2UsIG5vcm1hbEV2ZW50SW5SYW5nZSA9IGZhbHNlLCByYW5nZVN0YXJ0Um93SW5kZXggPSB0aGlzLnN0YXJ0SG91ciAqIHRoaXMuaG91clNlZ21lbnRzLCByYW5nZUVuZFJvd0luZGV4ID0gdGhpcy5lbmRIb3VyICogdGhpcy5ob3VyU2VnbWVudHMsIGFsbFJvd3MgPSAyNCAqIHRoaXMuaG91clNlZ21lbnRzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xuICAgICAgICAgICAgZGF0ZXNbaV0uZXZlbnRzID0gW107XG4gICAgICAgICAgICBkYXRlc1tpXS5oYXNFdmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGRheSA9IDA7IGRheSA8IDc7IGRheSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBob3VyID0gMDsgaG91ciA8IHRoaXMuaG91clJhbmdlOyBob3VyICs9IDEpIHtcbiAgICAgICAgICAgICAgICByb3dzW2hvdXJdW2RheV0uZXZlbnRzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGV2ZW50XzEgPSBldmVudFNvdXJjZVtpXTtcbiAgICAgICAgICAgIHZhciBldmVudFN0YXJ0VGltZSA9IG5ldyBEYXRlKGV2ZW50XzEuc3RhcnRUaW1lLmdldFRpbWUoKSk7XG4gICAgICAgICAgICB2YXIgZXZlbnRFbmRUaW1lID0gbmV3IERhdGUoZXZlbnRfMS5lbmRUaW1lLmdldFRpbWUoKSk7XG4gICAgICAgICAgICBpZiAoZXZlbnRfMS5hbGxEYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRFbmRUaW1lIDw9IHV0Y1N0YXJ0VGltZSB8fCBldmVudFN0YXJ0VGltZSA+PSB1dGNFbmRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsRGF5RXZlbnRJblJhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFsbERheVN0YXJ0SW5kZXggPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudFN0YXJ0VGltZSA8PSB1dGNTdGFydFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbERheVN0YXJ0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsRGF5U3RhcnRJbmRleCA9IE1hdGguZmxvb3IoKGV2ZW50U3RhcnRUaW1lLmdldFRpbWUoKSAtIHV0Y1N0YXJ0VGltZS5nZXRUaW1lKCkpIC8gb25lRGF5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgYWxsRGF5RW5kSW5kZXggPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudEVuZFRpbWUgPj0gdXRjRW5kVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsRGF5RW5kSW5kZXggPSBNYXRoLmNlaWwoKHV0Y0VuZFRpbWUuZ2V0VGltZSgpIC0gdXRjU3RhcnRUaW1lLmdldFRpbWUoKSkgLyBvbmVEYXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsRGF5RW5kSW5kZXggPSBNYXRoLmNlaWwoKGV2ZW50RW5kVGltZS5nZXRUaW1lKCkgLSB1dGNTdGFydFRpbWUuZ2V0VGltZSgpKSAvIG9uZURheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3BsYXlBbGxEYXlFdmVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudF8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleDogYWxsRGF5U3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEluZGV4OiBhbGxEYXlFbmRJbmRleFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRTZXQgPSBkYXRlc1thbGxEYXlTdGFydEluZGV4XS5ldmVudHM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudFNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRTZXQucHVzaChkaXNwbGF5QWxsRGF5RXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRTZXQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50U2V0LnB1c2goZGlzcGxheUFsbERheUV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVzW2FsbERheVN0YXJ0SW5kZXhdLmV2ZW50cyA9IGV2ZW50U2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRhdGVzW2FsbERheVN0YXJ0SW5kZXhdLmhhc0V2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRFbmRUaW1lIDw9IHN0YXJ0VGltZSB8fCBldmVudFN0YXJ0VGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsRXZlbnRJblJhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVEaWZmID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGltZURpZmZlcmVuY2VTdGFydCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50U3RhcnRUaW1lIDw9IHN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmZlcmVuY2VTdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiA9IGV2ZW50U3RhcnRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkgLSAoZXZlbnRTdGFydFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIHN0YXJ0VGltZS5nZXRUaW1lem9uZU9mZnNldCgpKSAqIDYwMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmZlcmVuY2VTdGFydCA9IHRpbWVEaWZmIC8gb25lSG91ciAqIHRoaXMuaG91clNlZ21lbnRzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aW1lRGlmZmVyZW5jZUVuZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50RW5kVGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiA9IGVuZFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSAtIChlbmRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCkgLSBzdGFydFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiA2MDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmZXJlbmNlRW5kID0gdGltZURpZmYgLyBvbmVIb3VyICogdGhpcy5ob3VyU2VnbWVudHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiA9IGV2ZW50RW5kVGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpIC0gKGV2ZW50RW5kVGltZS5nZXRUaW1lem9uZU9mZnNldCgpIC0gc3RhcnRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCkpICogNjAwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZmVyZW5jZUVuZCA9IHRpbWVEaWZmIC8gb25lSG91ciAqIHRoaXMuaG91clNlZ21lbnRzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydEluZGV4ID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZVN0YXJ0KSwgZW5kSW5kZXggPSBNYXRoLmNlaWwodGltZURpZmZlcmVuY2VFbmQgLSBlcHMpLCBzdGFydFJvd0luZGV4ID0gc3RhcnRJbmRleCAlIGFsbFJvd3MsIGRheUluZGV4ID0gTWF0aC5mbG9vcihzdGFydEluZGV4IC8gYWxsUm93cyksIGVuZE9mRGF5ID0gZGF5SW5kZXggKiBhbGxSb3dzLCBzdGFydE9mZnNldCA9IDAsIGVuZE9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhvdXJQYXJ0cyAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0Um93SW5kZXggPCByYW5nZVN0YXJ0Um93SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldCA9IE1hdGguZmxvb3IoKHRpbWVEaWZmZXJlbmNlU3RhcnQgLSBzdGFydEluZGV4KSAqIHRoaXMuaG91clBhcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRPZkRheSArPSBhbGxSb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZFJvd0luZGV4ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZE9mRGF5IDwgZW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRSb3dJbmRleCA9IGFsbFJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5kT2ZEYXkgPT09IGVuZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZFJvd0luZGV4ID0gYWxsUm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZFJvd0luZGV4ID0gZW5kSW5kZXggJSBhbGxSb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ob3VyUGFydHMgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZFJvd0luZGV4ID4gcmFuZ2VFbmRSb3dJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZE9mZnNldCA9IE1hdGguZmxvb3IoKGVuZEluZGV4IC0gdGltZURpZmZlcmVuY2VFbmQpICogdGhpcy5ob3VyUGFydHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0Um93SW5kZXggPCByYW5nZVN0YXJ0Um93SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFJvd0luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0Um93SW5kZXggLT0gcmFuZ2VTdGFydFJvd0luZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZFJvd0luZGV4ID4gcmFuZ2VFbmRSb3dJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZFJvd0luZGV4ID0gcmFuZ2VFbmRSb3dJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFJvd0luZGV4IC09IHJhbmdlU3RhcnRSb3dJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydFJvd0luZGV4IDwgZW5kUm93SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzcGxheUV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnRfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleDogc3RhcnRSb3dJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSW5kZXg6IGVuZFJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldDogc3RhcnRPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZE9mZnNldDogZW5kT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRTZXQgPSByb3dzW3N0YXJ0Um93SW5kZXhdW2RheUluZGV4XS5ldmVudHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50U2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50U2V0LnB1c2goZGlzcGxheUV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50U2V0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50U2V0LnB1c2goZGlzcGxheUV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1tzdGFydFJvd0luZGV4XVtkYXlJbmRleF0uZXZlbnRzID0gZXZlbnRTZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVzW2RheUluZGV4XS5oYXNFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFJvd0luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0T2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheUluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKGVuZE9mRGF5IDwgZW5kSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobm9ybWFsRXZlbnRJblJhbmdlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBkYXkgPSAwOyBkYXkgPCA3OyBkYXkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBvcmRlcmVkRXZlbnRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaG91ciA9IDA7IGhvdXIgPCB0aGlzLmhvdXJSYW5nZTsgaG91ciArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dzW2hvdXJdW2RheV0uZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzW2hvdXJdW2RheV0uZXZlbnRzLnNvcnQoV2Vla1ZpZXdDb21wb25lbnRfMS5jb21wYXJlRXZlbnRCeVN0YXJ0T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyZWRFdmVudHMgPSBvcmRlcmVkRXZlbnRzLmNvbmNhdChyb3dzW2hvdXJdW2RheV0uZXZlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3JkZXJlZEV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VFdmVudHMob3JkZXJlZEV2ZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhbGxEYXlFdmVudEluUmFuZ2UpIHtcbiAgICAgICAgICAgIHZhciBvcmRlcmVkQWxsRGF5RXZlbnRzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBkYXkgPSAwOyBkYXkgPCA3OyBkYXkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRlc1tkYXldLmV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkQWxsRGF5RXZlbnRzID0gb3JkZXJlZEFsbERheUV2ZW50cy5jb25jYXQoZGF0ZXNbZGF5XS5ldmVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcmRlcmVkQWxsRGF5RXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlQWxsRGF5RXZlbnRzKG9yZGVyZWRBbGxEYXlFdmVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF1dG9TZWxlY3QpIHtcbiAgICAgICAgICAgIHZhciBmaW5kU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZERhdGUgPSB2b2lkIDA7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IDc7IHIgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRlc1tyXS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGUgPSBkYXRlc1tyXTtcbiAgICAgICAgICAgICAgICAgICAgZmluZFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbmRTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcmtEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMubWFya0Rpc2FibGVkKHNlbGVjdGVkRGF0ZS5kYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vblRpbWVTZWxlY3RlZC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUaW1lOiBzZWxlY3RlZERhdGUuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiBzZWxlY3RlZERhdGUuZXZlbnRzLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5ldmVudDsgfSksXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUucmVmcmVzaFZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmFuZ2UgPSB0aGlzLmdldFJhbmdlKHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmN1cnJlbnREYXRlKTtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLmdldFRpdGxlKCk7XG4gICAgICAgICAgICB0aGlzLm9uVGl0bGVDaGFuZ2VkLmVtaXQodGl0bGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnBvcHVsYXRlQWRqYWNlbnRWaWV3cyh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50Vmlldyh0aGlzLnJhbmdlLnN0YXJ0VGltZSwgdGhpcy52aWV3c1t0aGlzLmN1cnJlbnRWaWV3SW5kZXhdKTtcbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UucmFuZ2VDaGFuZ2VkKHRoaXMpO1xuICAgIH07XG4gICAgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLmdldFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZmlyc3REYXlPZldlZWsgPSBuZXcgRGF0ZSh0aGlzLnJhbmdlLnN0YXJ0VGltZS5nZXRUaW1lKCkpO1xuICAgICAgICBmaXJzdERheU9mV2Vlay5zZXRIb3VycygxMiwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFRpdGxlKGZpcnN0RGF5T2ZXZWVrKTtcbiAgICB9O1xuICAgIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5nZXRIaWdobGlnaHRDbGFzcyA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSAnJztcbiAgICAgICAgaWYgKGRhdGUuaGFzRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lID0gJ3dlZWt2aWV3LXdpdGgtZXZlbnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnd2Vla3ZpZXctc2VsZWN0ZWQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICd3ZWVrdmlldy1jdXJyZW50JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH07XG4gICAgV2Vla1ZpZXdDb21wb25lbnQuY29tcGFyZUV2ZW50QnlTdGFydE9mZnNldCA9IGZ1bmN0aW9uIChldmVudEEsIGV2ZW50Qikge1xuICAgICAgICByZXR1cm4gZXZlbnRBLnN0YXJ0T2Zmc2V0IC0gZXZlbnRCLnN0YXJ0T2Zmc2V0O1xuICAgIH07XG4gICAgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChzZWxlY3RlZFRpbWUsIGV2ZW50cykge1xuICAgICAgICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMubWFya0Rpc2FibGVkKSB7XG4gICAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMubWFya0Rpc2FibGVkKHNlbGVjdGVkVGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblRpbWVTZWxlY3RlZC5lbWl0KHtcbiAgICAgICAgICAgIHNlbGVjdGVkVGltZTogc2VsZWN0ZWRUaW1lLFxuICAgICAgICAgICAgZXZlbnRzOiBldmVudHMubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLmV2ZW50OyB9KSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5wbGFjZUV2ZW50cyA9IGZ1bmN0aW9uIChvcmRlcmVkRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUG9zaXRpb24ob3JkZXJlZEV2ZW50cyk7XG4gICAgICAgIFdlZWtWaWV3Q29tcG9uZW50XzEuY2FsY3VsYXRlV2lkdGgob3JkZXJlZEV2ZW50cywgdGhpcy5ob3VyUmFuZ2UsIHRoaXMuaG91clBhcnRzKTtcbiAgICB9O1xuICAgIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5wbGFjZUFsbERheUV2ZW50cyA9IGZ1bmN0aW9uIChvcmRlcmVkRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUG9zaXRpb24ob3JkZXJlZEV2ZW50cyk7XG4gICAgfTtcbiAgICBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUub3ZlcmxhcCA9IGZ1bmN0aW9uIChldmVudDEsIGV2ZW50Mikge1xuICAgICAgICB2YXIgZWFybHlFdmVudCA9IGV2ZW50MSwgbGF0ZUV2ZW50ID0gZXZlbnQyO1xuICAgICAgICBpZiAoZXZlbnQxLnN0YXJ0SW5kZXggPiBldmVudDIuc3RhcnRJbmRleCB8fCAoZXZlbnQxLnN0YXJ0SW5kZXggPT09IGV2ZW50Mi5zdGFydEluZGV4ICYmIGV2ZW50MS5zdGFydE9mZnNldCA+IGV2ZW50Mi5zdGFydE9mZnNldCkpIHtcbiAgICAgICAgICAgIGVhcmx5RXZlbnQgPSBldmVudDI7XG4gICAgICAgICAgICBsYXRlRXZlbnQgPSBldmVudDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVhcmx5RXZlbnQuZW5kSW5kZXggPD0gbGF0ZUV2ZW50LnN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAhKGVhcmx5RXZlbnQuZW5kSW5kZXggLSBsYXRlRXZlbnQuc3RhcnRJbmRleCA9PT0gMSAmJiBlYXJseUV2ZW50LmVuZE9mZnNldCArIGxhdGVFdmVudC5zdGFydE9mZnNldCA+PSB0aGlzLmhvdXJQYXJ0cyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5jYWxjdWxhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uIChldmVudHMpIHtcbiAgICAgICAgdmFyIGxlbiA9IGV2ZW50cy5sZW5ndGgsIG1heENvbHVtbiA9IDAsIGlzRm9yYmlkZGVuID0gbmV3IEFycmF5KGxlbik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBjb2wgPSB2b2lkIDA7XG4gICAgICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IG1heENvbHVtbjsgY29sICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpc0ZvcmJpZGRlbltjb2xdID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGk7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXAoZXZlbnRzW2ldLCBldmVudHNbal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRm9yYmlkZGVuW2V2ZW50c1tqXS5wb3NpdGlvbl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgbWF4Q29sdW1uOyBjb2wgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNGb3JiaWRkZW5bY29sXSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sIDwgbWF4Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzW2ldLnBvc2l0aW9uID0gY29sO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzW2ldLnBvc2l0aW9uID0gbWF4Q29sdW1uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGV2ZW50c1tpXS5wb3NpdGlvbiA9IG1heENvbHVtbiAtIDEgLSBldmVudHNbaV0ucG9zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlZWtWaWV3Q29tcG9uZW50LmNhbGN1bGF0ZVdpZHRoID0gZnVuY3Rpb24gKG9yZGVyZWRFdmVudHMsIHNpemUsIGhvdXJQYXJ0cykge1xuICAgICAgICB2YXIgdG90YWxTaXplID0gc2l6ZSAqIGhvdXJQYXJ0cywgY2VsbHMgPSBuZXcgQXJyYXkodG90YWxTaXplKTtcbiAgICAgICAgLy8gc29ydCBieSBwb3NpdGlvbiBpbiBkZXNjZW5kaW5nIG9yZGVyLCB0aGUgcmlnaHQgbW9zdCBjb2x1bW5zIHNob3VsZCBiZSBjYWxjdWxhdGVkIGZpcnN0XG4gICAgICAgIG9yZGVyZWRFdmVudHMuc29ydChmdW5jdGlvbiAoZXZlbnRBLCBldmVudEIpIHtcbiAgICAgICAgICAgIHJldHVybiBldmVudEIucG9zaXRpb24gLSBldmVudEEucG9zaXRpb247XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKHZhciBpXzEgPSAwOyBpXzEgPCB0b3RhbFNpemU7IGlfMSArPSAxKSB7XG4gICAgICAgICAgICBjZWxsc1tpXzFdID0ge1xuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGV2ZW50czogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlbiA9IG9yZGVyZWRFdmVudHMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpXzIgPSAwOyBpXzIgPCBsZW47IGlfMiArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRfMiA9IG9yZGVyZWRFdmVudHNbaV8yXTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50XzIuc3RhcnRJbmRleCAqIGhvdXJQYXJ0cyArIGV2ZW50XzIuc3RhcnRPZmZzZXQ7XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPCBldmVudF8yLmVuZEluZGV4ICogaG91clBhcnRzIC0gZXZlbnRfMi5lbmRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1tpbmRleF0uZXZlbnRzLnB1c2goZXZlbnRfMik7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRfMyA9IG9yZGVyZWRFdmVudHNbaV07XG4gICAgICAgICAgICBpZiAoIWV2ZW50XzMub3ZlcmxhcE51bWJlcikge1xuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwTnVtYmVyID0gZXZlbnRfMy5wb3NpdGlvbiArIDE7XG4gICAgICAgICAgICAgICAgZXZlbnRfMy5vdmVybGFwTnVtYmVyID0gb3ZlcmxhcE51bWJlcjtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRRdWV1ZSA9IFtldmVudF8zXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGV2ZW50XzMgPSBldmVudFF1ZXVlLnNoaWZ0KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50XzMuc3RhcnRJbmRleCAqIGhvdXJQYXJ0cyArIGV2ZW50XzMuc3RhcnRPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IGV2ZW50XzMuZW5kSW5kZXggKiBob3VyUGFydHMgLSBldmVudF8zLmVuZE9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjZWxsc1tpbmRleF0uY2FsY3VsYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2luZGV4XS5jYWxjdWxhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHNbaW5kZXhdLmV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRDb3VudEluQ2VsbCA9IGNlbGxzW2luZGV4XS5ldmVudHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGV2ZW50Q291bnRJbkNlbGw7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRFdmVudEluQ2VsbCA9IGNlbGxzW2luZGV4XS5ldmVudHNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRFdmVudEluQ2VsbC5vdmVybGFwTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEV2ZW50SW5DZWxsLm92ZXJsYXBOdW1iZXIgPSBvdmVybGFwTnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50UXVldWUucHVzaChjdXJyZW50RXZlbnRJbkNlbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZUN1cnJlbnRWaWV3ID0gZnVuY3Rpb24gKGN1cnJlbnRWaWV3U3RhcnREYXRlLCB2aWV3KSB7XG4gICAgICAgIHZhciBjdXJyZW50Q2FsZW5kYXJEYXRlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuY3VycmVudERhdGUsIHRvZGF5ID0gbmV3IERhdGUoKSwgb25lRGF5ID0gODY0MDAwMDAsIHNlbGVjdGVkRGF5RGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoKGN1cnJlbnRDYWxlbmRhckRhdGUuZ2V0VGltZSgpIC0gY3VycmVudFZpZXdTdGFydERhdGUuZ2V0VGltZSgpIC0gKGN1cnJlbnRDYWxlbmRhckRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIGN1cnJlbnRWaWV3U3RhcnREYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkpICogNjAwMDApIC8gb25lRGF5KSwgY3VycmVudERheURpZmZlcmVuY2UgPSBNYXRoLmZsb29yKCh0b2RheS5nZXRUaW1lKCkgLSBjdXJyZW50Vmlld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSAodG9kYXkuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIGN1cnJlbnRWaWV3U3RhcnREYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkpICogNjAwMDApIC8gb25lRGF5KTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCA3OyByICs9IDEpIHtcbiAgICAgICAgICAgIHZpZXcuZGF0ZXNbcl0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0ZWREYXlEaWZmZXJlbmNlID49IDAgJiYgc2VsZWN0ZWREYXlEaWZmZXJlbmNlIDwgNyAmJiB0aGlzLmF1dG9TZWxlY3QpIHtcbiAgICAgICAgICAgIHZpZXcuZGF0ZXNbc2VsZWN0ZWREYXlEaWZmZXJlbmNlXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnREYXlEaWZmZXJlbmNlID49IDAgJiYgY3VycmVudERheURpZmZlcmVuY2UgPCA3KSB7XG4gICAgICAgICAgICB2aWV3LmRhdGVzW2N1cnJlbnREYXlEaWZmZXJlbmNlXS5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLmRheVNlbGVjdGVkID0gZnVuY3Rpb24gKHZpZXdEYXRlKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZERhdGUgPSB2aWV3RGF0ZS5kYXRlLCBkYXRlcyA9IHRoaXMudmlld3NbdGhpcy5jdXJyZW50Vmlld0luZGV4XS5kYXRlcywgY3VycmVudFZpZXdTdGFydERhdGUgPSB0aGlzLnJhbmdlLnN0YXJ0VGltZSwgb25lRGF5ID0gODY0MDAwMDAsIHNlbGVjdGVkRGF5RGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoKHNlbGVjdGVkRGF0ZS5nZXRUaW1lKCkgLSBjdXJyZW50Vmlld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSAoc2VsZWN0ZWREYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgLSBjdXJyZW50Vmlld1N0YXJ0RGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKSAqIDYwMDAwKSAvIG9uZURheSk7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnNldEN1cnJlbnREYXRlKHNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgNzsgciArPSAxKSB7XG4gICAgICAgICAgICBkYXRlc1tyXS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3RlZERheURpZmZlcmVuY2UgPj0gMCAmJiBzZWxlY3RlZERheURpZmZlcmVuY2UgPCA3KSB7XG4gICAgICAgICAgICBkYXRlc1tzZWxlY3RlZERheURpZmZlcmVuY2VdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMubWFya0Rpc2FibGVkKSB7XG4gICAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMubWFya0Rpc2FibGVkKHNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblRpbWVTZWxlY3RlZC5lbWl0KHsgc2VsZWN0ZWRUaW1lOiBzZWxlY3RlZERhdGUsIGV2ZW50czogdmlld0RhdGUuZXZlbnRzLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5ldmVudDsgfSksIGRpc2FibGVkOiBkaXNhYmxlZCB9KTtcbiAgICB9O1xuICAgIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5zZXRTY3JvbGxQb3NpdGlvbiA9IGZ1bmN0aW9uIChzY3JvbGxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmluaXRTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuICAgIH07XG4gICAgdmFyIFdlZWtWaWV3Q29tcG9uZW50XzE7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgVmlld0NoaWxkKCd3ZWVrU2xpZGVyJyksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIElvblNsaWRlcylcbiAgICBdLCBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2xpZGVyXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSG9zdEJpbmRpbmcoJ2NsYXNzLndlZWt2aWV3JyksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwiY2xhc3NcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBUZW1wbGF0ZVJlZilcbiAgICBdLCBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwid2Vla3ZpZXdIZWFkZXJUZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJ3ZWVrdmlld0FsbERheUV2ZW50VGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBUZW1wbGF0ZVJlZilcbiAgICBdLCBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwid2Vla3ZpZXdOb3JtYWxFdmVudFRlbXBsYXRlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgVGVtcGxhdGVSZWYpXG4gICAgXSwgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcIndlZWt2aWV3QWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBUZW1wbGF0ZVJlZilcbiAgICBdLCBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwid2Vla3ZpZXdOb3JtYWxFdmVudFNlY3Rpb25UZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJ3ZWVrdmlld0luYWN0aXZlQWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBUZW1wbGF0ZVJlZilcbiAgICBdLCBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwid2Vla3ZpZXdJbmFjdGl2ZU5vcm1hbEV2ZW50U2VjdGlvblRlbXBsYXRlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJmb3JtYXRXZWVrVGl0bGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImZvcm1hdFdlZWtWaWV3RGF5SGVhZGVyXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJmb3JtYXRIb3VyQ29sdW1uXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJzdGFydGluZ0RheVdlZWtcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImFsbERheUxhYmVsXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJob3VyUGFydHNcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbiAgICBdLCBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwiZXZlbnRTb3VyY2VcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdXRvU2VsZWN0XCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgRnVuY3Rpb24pXG4gICAgXSwgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcIm1hcmtEaXNhYmxlZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwibG9jYWxlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJkYXRlRm9ybWF0dGVyXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJkaXJcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG4gICAgXSwgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcInNjcm9sbFRvSG91clwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcInByZXNlcnZlU2Nyb2xsUG9zaXRpb25cIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJsb2NrU3dpcGVUb1ByZXZcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJsb2NrU3dpcGVzXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJzdGFydEhvdXJcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG4gICAgXSwgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImVuZEhvdXJcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcInNsaWRlck9wdGlvbnNcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG4gICAgXSwgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImhvdXJTZWdtZW50c1wiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIE91dHB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgV2Vla1ZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcIm9uUmFuZ2VDaGFuZ2VkXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgT3V0cHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwib25FdmVudFNlbGVjdGVkXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgT3V0cHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBXZWVrVmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwib25UaW1lU2VsZWN0ZWRcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBPdXRwdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJvblRpdGxlQ2hhbmdlZFwiLCB2b2lkIDApO1xuICAgIFdlZWtWaWV3Q29tcG9uZW50ID0gV2Vla1ZpZXdDb21wb25lbnRfMSA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIENvbXBvbmVudCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3dlZWt2aWV3JyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGlvbi1zbGlkZXMgI3dlZWtTbGlkZXIgW29wdGlvbnNdPVxcXCJzbGlkZXJPcHRpb25zXFxcIiBbZGlyXT1cXFwiZGlyXFxcIiAoaW9uU2xpZGVEaWRDaGFuZ2UpPVxcXCJvblNsaWRlQ2hhbmdlZCgpXFxcIiBjbGFzcz1cXFwic2xpZGVzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGlvbi1zbGlkZSBjbGFzcz1cXFwic2xpZGUtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1maXhlZCB3ZWVrdmlldy1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY2FsZW5kYXItaG91ci1jb2x1bW5cXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ3ZWVrdmlldy1oZWFkZXIgdGV4dC1jZW50ZXJcXFwiICpuZ0Zvcj1cXFwibGV0IGRhdGUgb2Ygdmlld3NbMF0uZGF0ZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cXFwiZ2V0SGlnaGxpZ2h0Q2xhc3MoZGF0ZSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XFxcImRheVNlbGVjdGVkKGRhdGUpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwid2Vla3ZpZXdIZWFkZXJUZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcInt2aWV3RGF0ZTpkYXRlfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIwPT09Y3VycmVudFZpZXdJbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrdmlldy1hbGxkYXktdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWt2aWV3LWFsbGRheS1sYWJlbFxcXCI+e3thbGxEYXlMYWJlbH19PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2Vla3ZpZXctYWxsZGF5LWNvbnRlbnQtd3JhcHBlciBzY3JvbGwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtZml4ZWQgd2Vla3ZpZXctYWxsZGF5LWNvbnRlbnQtdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XFxcImxldCBkYXkgb2Ygdmlld3NbMF0uZGF0ZXNcXFwiIGNsYXNzPVxcXCJjYWxlbmRhci1jZWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwid2Vla3ZpZXdBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcIntkYXk6ZGF5LCBldmVudFRlbXBsYXRlOndlZWt2aWV3QWxsRGF5RXZlbnRUZW1wbGF0ZX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGluaXQtcG9zaXRpb24tc2Nyb2xsIGNsYXNzPVxcXCJ3ZWVrdmlldy1ub3JtYWwtZXZlbnQtY29udGFpbmVyXFxcIiBbaW5pdFBvc2l0aW9uXT1cXFwiaW5pdFNjcm9sbFBvc2l0aW9uXFxcIiBbZW1pdEV2ZW50XT1cXFwicHJlc2VydmVTY3JvbGxQb3NpdGlvblxcXCIgKG9uU2Nyb2xsKT1cXFwic2V0U2Nyb2xsUG9zaXRpb24oJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1maXhlZCB3ZWVrdmlldy1ub3JtYWwtZXZlbnQtdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCByb3cgb2Ygdmlld3NbMF0ucm93czsgbGV0IGkgPSBpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNhbGVuZGFyLWhvdXItY29sdW1uIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2hvdXJDb2x1bW5MYWJlbHNbaV19fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XFxcImxldCB0bSBvZiByb3dcXFwiIGNsYXNzPVxcXCJjYWxlbmRhci1jZWxsXFxcIiB0YXBwYWJsZSAoY2xpY2spPVxcXCJzZWxlY3QodG0udGltZSwgdG0uZXZlbnRzKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwid2Vla3ZpZXdOb3JtYWxFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie3RtOnRtLCBob3VyUGFydHM6IGhvdXJQYXJ0cywgZXZlbnRUZW1wbGF0ZTp3ZWVrdmlld05vcm1hbEV2ZW50VGVtcGxhdGV9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICAgICAgPC9pbml0LXBvc2l0aW9uLXNjcm9sbD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIjAhPT1jdXJyZW50Vmlld0luZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWt2aWV3LWFsbGRheS10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2Vla3ZpZXctYWxsZGF5LWxhYmVsXFxcIj57e2FsbERheUxhYmVsfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrdmlldy1hbGxkYXktY29udGVudC13cmFwcGVyIHNjcm9sbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1maXhlZCB3ZWVrdmlldy1hbGxkYXktY29udGVudC10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cXFwibGV0IGRheSBvZiB2aWV3c1swXS5kYXRlc1xcXCIgY2xhc3M9XFxcImNhbGVuZGFyLWNlbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJ3ZWVrdmlld0luYWN0aXZlQWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVxcXCJ7ZGF5OmRheX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGluaXQtcG9zaXRpb24tc2Nyb2xsIGNsYXNzPVxcXCJ3ZWVrdmlldy1ub3JtYWwtZXZlbnQtY29udGFpbmVyXFxcIiBbaW5pdFBvc2l0aW9uXT1cXFwiaW5pdFNjcm9sbFBvc2l0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWZpeGVkIHdlZWt2aWV3LW5vcm1hbC1ldmVudC10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHJvdyBvZiB2aWV3c1swXS5yb3dzOyBsZXQgaSA9IGluZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY2FsZW5kYXItaG91ci1jb2x1bW4gdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aG91ckNvbHVtbkxhYmVsc1tpXX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cXFwibGV0IHRtIG9mIHJvd1xcXCIgY2xhc3M9XFxcImNhbGVuZGFyLWNlbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XFxcIndlZWt2aWV3SW5hY3RpdmVOb3JtYWxFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie3RtOnRtLCBob3VyUGFydHM6IGhvdXJQYXJ0c31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgICAgICA8L2luaXQtcG9zaXRpb24tc2Nyb2xsPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2lvbi1zbGlkZT5cXG4gICAgICAgICAgICA8aW9uLXNsaWRlIGNsYXNzPVxcXCJzbGlkZS1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWZpeGVkIHdlZWt2aWV3LWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjYWxlbmRhci1ob3VyLWNvbHVtblxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcIndlZWt2aWV3LWhlYWRlciB0ZXh0LWNlbnRlclxcXCIgKm5nRm9yPVxcXCJsZXQgZGF0ZSBvZiB2aWV3c1sxXS5kYXRlc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVxcXCJnZXRIaWdobGlnaHRDbGFzcyhkYXRlKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwiZGF5U2VsZWN0ZWQoZGF0ZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJ3ZWVrdmlld0hlYWRlclRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie3ZpZXdEYXRlOmRhdGV9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIjE9PT1jdXJyZW50Vmlld0luZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWt2aWV3LWFsbGRheS10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2Vla3ZpZXctYWxsZGF5LWxhYmVsXFxcIj57e2FsbERheUxhYmVsfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrdmlldy1hbGxkYXktY29udGVudC13cmFwcGVyIHNjcm9sbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1maXhlZCB3ZWVrdmlldy1hbGxkYXktY29udGVudC10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cXFwibGV0IGRheSBvZiB2aWV3c1sxXS5kYXRlc1xcXCIgY2xhc3M9XFxcImNhbGVuZGFyLWNlbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJ3ZWVrdmlld0FsbERheUV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie2RheTpkYXksIGV2ZW50VGVtcGxhdGU6d2Vla3ZpZXdBbGxEYXlFdmVudFRlbXBsYXRlfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8aW5pdC1wb3NpdGlvbi1zY3JvbGwgY2xhc3M9XFxcIndlZWt2aWV3LW5vcm1hbC1ldmVudC1jb250YWluZXJcXFwiIFtpbml0UG9zaXRpb25dPVxcXCJpbml0U2Nyb2xsUG9zaXRpb25cXFwiIFtlbWl0RXZlbnRdPVxcXCJwcmVzZXJ2ZVNjcm9sbFBvc2l0aW9uXFxcIiAob25TY3JvbGwpPVxcXCJzZXRTY3JvbGxQb3NpdGlvbigkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWZpeGVkIHdlZWt2aWV3LW5vcm1hbC1ldmVudC10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHJvdyBvZiB2aWV3c1sxXS5yb3dzOyBsZXQgaSA9IGluZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY2FsZW5kYXItaG91ci1jb2x1bW4gdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aG91ckNvbHVtbkxhYmVsc1tpXX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cXFwibGV0IHRtIG9mIHJvd1xcXCIgY2xhc3M9XFxcImNhbGVuZGFyLWNlbGxcXFwiIHRhcHBhYmxlIChjbGljayk9XFxcInNlbGVjdCh0bS50aW1lLCB0bS5ldmVudHMpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cXFwieydjYWxlbmRhci1ldmVudC13cmFwJzogdG0uZXZlbnRzfVxcXCIgKm5nSWY9XFxcInRtLmV2ZW50c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XFxcIndlZWt2aWV3Tm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVxcXCJ7dG06dG0sIGhvdXJQYXJ0czogaG91clBhcnRzLCBldmVudFRlbXBsYXRlOndlZWt2aWV3Tm9ybWFsRXZlbnRUZW1wbGF0ZX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICAgICAgPC9pbml0LXBvc2l0aW9uLXNjcm9sbD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIjEhPT1jdXJyZW50Vmlld0luZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWt2aWV3LWFsbGRheS10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2Vla3ZpZXctYWxsZGF5LWxhYmVsXFxcIj57e2FsbERheUxhYmVsfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrdmlldy1hbGxkYXktY29udGVudC13cmFwcGVyIHNjcm9sbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1maXhlZCB3ZWVrdmlldy1hbGxkYXktY29udGVudC10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cXFwibGV0IGRheSBvZiB2aWV3c1sxXS5kYXRlc1xcXCIgY2xhc3M9XFxcImNhbGVuZGFyLWNlbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJ3ZWVrdmlld0luYWN0aXZlQWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVxcXCJ7ZGF5OmRheX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGluaXQtcG9zaXRpb24tc2Nyb2xsIGNsYXNzPVxcXCJ3ZWVrdmlldy1ub3JtYWwtZXZlbnQtY29udGFpbmVyXFxcIiBbaW5pdFBvc2l0aW9uXT1cXFwiaW5pdFNjcm9sbFBvc2l0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWZpeGVkIHdlZWt2aWV3LW5vcm1hbC1ldmVudC10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHJvdyBvZiB2aWV3c1sxXS5yb3dzOyBsZXQgaSA9IGluZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY2FsZW5kYXItaG91ci1jb2x1bW4gdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aG91ckNvbHVtbkxhYmVsc1tpXX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cXFwibGV0IHRtIG9mIHJvd1xcXCIgY2xhc3M9XFxcImNhbGVuZGFyLWNlbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVxcXCJ7J2NhbGVuZGFyLWV2ZW50LXdyYXAnOiB0bS5ldmVudHN9XFxcIiAqbmdJZj1cXFwidG0uZXZlbnRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwid2Vla3ZpZXdJbmFjdGl2ZU5vcm1hbEV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie3RtOnRtLCBob3VyUGFydHM6IGhvdXJQYXJ0c31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICAgICAgPC9pbml0LXBvc2l0aW9uLXNjcm9sbD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9pb24tc2xpZGU+XFxuICAgICAgICAgICAgPGlvbi1zbGlkZSBjbGFzcz1cXFwic2xpZGUtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1maXhlZCB3ZWVrdmlldy1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY2FsZW5kYXItaG91ci1jb2x1bW5cXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ3ZWVrdmlldy1oZWFkZXIgdGV4dC1jZW50ZXJcXFwiICpuZ0Zvcj1cXFwibGV0IGRhdGUgb2Ygdmlld3NbMl0uZGF0ZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cXFwiZ2V0SGlnaGxpZ2h0Q2xhc3MoZGF0ZSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XFxcImRheVNlbGVjdGVkKGRhdGUpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwid2Vla3ZpZXdIZWFkZXJUZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcInt2aWV3RGF0ZTpkYXRlfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIyPT09Y3VycmVudFZpZXdJbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrdmlldy1hbGxkYXktdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWt2aWV3LWFsbGRheS1sYWJlbFxcXCI+e3thbGxEYXlMYWJlbH19PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2Vla3ZpZXctYWxsZGF5LWNvbnRlbnQtd3JhcHBlciBzY3JvbGwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtZml4ZWQgd2Vla3ZpZXctYWxsZGF5LWNvbnRlbnQtdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XFxcImxldCBkYXkgb2Ygdmlld3NbMl0uZGF0ZXNcXFwiIGNsYXNzPVxcXCJjYWxlbmRhci1jZWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwid2Vla3ZpZXdBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcIntkYXk6ZGF5LCBldmVudFRlbXBsYXRlOndlZWt2aWV3QWxsRGF5RXZlbnRUZW1wbGF0ZX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGluaXQtcG9zaXRpb24tc2Nyb2xsIGNsYXNzPVxcXCJ3ZWVrdmlldy1ub3JtYWwtZXZlbnQtY29udGFpbmVyXFxcIiBbaW5pdFBvc2l0aW9uXT1cXFwiaW5pdFNjcm9sbFBvc2l0aW9uXFxcIiBbZW1pdEV2ZW50XT1cXFwicHJlc2VydmVTY3JvbGxQb3NpdGlvblxcXCIgKG9uU2Nyb2xsKT1cXFwic2V0U2Nyb2xsUG9zaXRpb24oJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1maXhlZCB3ZWVrdmlldy1ub3JtYWwtZXZlbnQtdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCByb3cgb2Ygdmlld3NbMl0ucm93czsgbGV0IGkgPSBpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNhbGVuZGFyLWhvdXItY29sdW1uIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2hvdXJDb2x1bW5MYWJlbHNbaV19fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XFxcImxldCB0bSBvZiByb3dcXFwiIGNsYXNzPVxcXCJjYWxlbmRhci1jZWxsXFxcIiB0YXBwYWJsZSAoY2xpY2spPVxcXCJzZWxlY3QodG0udGltZSwgdG0uZXZlbnRzKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XFxcInsnY2FsZW5kYXItZXZlbnQtd3JhcCc6IHRtLmV2ZW50c31cXFwiICpuZ0lmPVxcXCJ0bS5ldmVudHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJ3ZWVrdmlld05vcm1hbEV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie3RtOnRtLCBob3VyUGFydHM6IGhvdXJQYXJ0cywgZXZlbnRUZW1wbGF0ZTp3ZWVrdmlld05vcm1hbEV2ZW50VGVtcGxhdGV9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvaW5pdC1wb3NpdGlvbi1zY3JvbGw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIyIT09Y3VycmVudFZpZXdJbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWVrdmlldy1hbGxkYXktdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlZWt2aWV3LWFsbGRheS1sYWJlbFxcXCI+e3thbGxEYXlMYWJlbH19PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2Vla3ZpZXctYWxsZGF5LWNvbnRlbnQtd3JhcHBlciBzY3JvbGwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtZml4ZWQgd2Vla3ZpZXctYWxsZGF5LWNvbnRlbnQtdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XFxcImxldCBkYXkgb2Ygdmlld3NbMl0uZGF0ZXNcXFwiIGNsYXNzPVxcXCJjYWxlbmRhci1jZWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwid2Vla3ZpZXdJbmFjdGl2ZUFsbERheUV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie2RheTpkYXl9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbml0LXBvc2l0aW9uLXNjcm9sbCBjbGFzcz1cXFwid2Vla3ZpZXctbm9ybWFsLWV2ZW50LWNvbnRhaW5lclxcXCIgW2luaXRQb3NpdGlvbl09XFxcImluaXRTY3JvbGxQb3NpdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1maXhlZCB3ZWVrdmlldy1ub3JtYWwtZXZlbnQtdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCByb3cgb2Ygdmlld3NbMl0ucm93czsgbGV0IGkgPSBpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNhbGVuZGFyLWhvdXItY29sdW1uIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2hvdXJDb2x1bW5MYWJlbHNbaV19fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XFxcImxldCB0bSBvZiByb3dcXFwiIGNsYXNzPVxcXCJjYWxlbmRhci1jZWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cXFwieydjYWxlbmRhci1ldmVudC13cmFwJzogdG0uZXZlbnRzfVxcXCIgKm5nSWY9XFxcInRtLmV2ZW50c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XFxcIndlZWt2aWV3SW5hY3RpdmVOb3JtYWxFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcInt0bTp0bSwgaG91clBhcnRzOiBob3VyUGFydHN9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvaW5pdC1wb3NpdGlvbi1zY3JvbGw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvaW9uLXNsaWRlPlxcbiAgICAgICAgPC9pb24tc2xpZGVzPlxcbiAgICBcIixcbiAgICAgICAgICAgIHN0eWxlczogW1wiXFxuICAgICAgICAudGFibGUtZml4ZWQge1xcbiAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYmxlIHtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFibGUgPiB0aGVhZCA+IHRyID4gdGgsIC50YWJsZSA+IHRib2R5ID4gdHIgPiB0aCwgLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLCAudGFibGUgPiB0aGVhZCA+IHRyID4gdGQsXFxuICAgICAgICAudGFibGUgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZSA+IHRmb290ID4gdHIgPiB0ZCB7XFxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJsZSA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCwgLnRhYmxlID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCA+IHRkIHtcXG4gICAgICAgICAgYm9yZGVyLXRvcDogMFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYmxlID4gdGJvZHkgKyB0Ym9keSB7XFxuICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYmxlLWJvcmRlcmVkIHtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCwgLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRoLCAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGgsXFxuICAgICAgICAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkIHtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCwgLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkIHtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGQsIC50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRoIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNhbGVuZGFyLWhvdXItY29sdW1uIHtcXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY2FsZW5kYXItZXZlbnQtd3JhcCB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jYWxlbmRhci1ldmVudCB7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNhbGVuZGFyLWNlbGwge1xcbiAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICAgIGhlaWdodDogMzdweDtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLnNsaWRlcy1jb250YWluZXIge1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLnNsaWRlLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAud2Vla3ZpZXctYWxsZGF5LWxhYmVsIHtcXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIFtkaXI9XFxcInJ0bFxcXCJdIC53ZWVrdmlldy1hbGxkYXktbGFiZWwge1xcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLndlZWt2aWV3LWFsbGRheS1jb250ZW50LXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgaGVpZ2h0OiA1MXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgW2Rpcj1cXFwicnRsXFxcIl0gLndlZWt2aWV3LWFsbGRheS1jb250ZW50LXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLndlZWt2aWV3LWFsbGRheS1jb250ZW50LXRhYmxlIHtcXG4gICAgICAgICAgbWluLWhlaWdodDogNTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC53ZWVrdmlldy1hbGxkYXktY29udGVudC10YWJsZSB0ZCB7XFxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC53ZWVrdmlldy1oZWFkZXIgdGgge1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAud2Vla3ZpZXctYWxsZGF5LXRhYmxlIHtcXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAud2Vla3ZpZXctbm9ybWFsLWV2ZW50LWNvbnRhaW5lciB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDg3cHg7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2Nyb2xsLWNvbnRlbnQge1xcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbiAgICAgICAgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFibGUgPiB0Ym9keSA+IHRyID4gdGQuY2FsZW5kYXItaG91ci1jb2x1bW4ge1xcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgICAgICAgLndlZWt2aWV3LWFsbGRheS1sYWJlbCwgLmNhbGVuZGFyLWhvdXItY29sdW1uIHtcXG4gICAgICAgICAgICB3aWR0aDogMzFweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLndlZWt2aWV3LWFsbGRheS1sYWJlbCB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAudGFibGUgPiB0Ym9keSA+IHRyID4gdGQuY2FsZW5kYXItaG91ci1jb2x1bW4ge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLndlZWt2aWV3LWhlYWRlciB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC53ZWVrdmlldy1hbGxkYXktbGFiZWwge1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC53ZWVrdmlldy1hbGxkYXktY29udGVudC13cmFwcGVyIHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzFweDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBbZGlyPVxcXCJydGxcXFwiXSAud2Vla3ZpZXctYWxsZGF5LWNvbnRlbnQtd3JhcHBlciB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMXB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIFwiXSxcbiAgICAgICAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbiAgICAgICAgfSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtDYWxlbmRhclNlcnZpY2UsIEVsZW1lbnRSZWZdKVxuICAgIF0sIFdlZWtWaWV3Q29tcG9uZW50KTtcbiAgICByZXR1cm4gV2Vla1ZpZXdDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgV2Vla1ZpZXdDb21wb25lbnQgfTtcbiJdfQ==

      /***/

    },

    /***/
    "JZ9U":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function JZ9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "e9nj");
      /* harmony import */


      var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab2.page.scss */
      "EGAO");
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic2-calendar/calendar */
      "WwpI");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _providers_constant_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../providers/constant/constant */
      "UyhH");

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(httpClient, navCtrl, router, storage, activatedRoute, appConst, alertCtrl, locale, loadingController) {
          _classCallCheck(this, Tab2Page);

          this.httpClient = httpClient;
          this.navCtrl = navCtrl;
          this.router = router;
          this.storage = storage;
          this.activatedRoute = activatedRoute;
          this.appConst = appConst;
          this.alertCtrl = alertCtrl;
          this.locale = locale;
          this.loadingController = loadingController;
          this.nextId = 51;
          this.event = {
            //id: this.nextId,
            id: '',
            title: '',
            desc: '',
            startTime: '',
            endTime: '',
            allDay: false
          };
          this.minDate = new Date().toISOString();
          this.eventSource = [];
          this.calendar = {
            mode: 'month',
            currentDate: new Date()
          };
          this.randomCompany = ['Simmons - MOSPG2014', 'Marysville - ARLIT2062', 'Coldspring - TXHOU2041', 'Yellow Rock - KYLEX2020', 'Medora - ILSPG2027', 'Lawtell - LALWL2000', 'HWY 584 (FTCA) LAMON2002', 'HWY 120 (FTCA) - LASRV2006', 'York - ALBRH2003', 'Jorge Auto Sales - TXLAR2007', 'Sawmill - ARLIT2065', 'Saxton - PAPIT2008', 'Rockwood - PAPIT2006', 'Mellen - WIWAU2029', 'Calvin - LAMON2113', 'Funston - LARSV2021'];
          this.apiurl = this.appConst.getApiUrl();
        }

        _createClass(Tab2Page, [{
          key: "loadEvents",
          value: function loadEvents() {
            this.eventSource = this.createRandomEvents();
          }
        }, {
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
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      setTimeout(function () {
                        if (_this2.loading != undefined) {
                          _this2.loading.dismiss();
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
          key: "getWorkOrders",
          value: function getWorkOrders(user_id) {
            var _this3 = this;

            var events = [];
            var logged_user = {
              user_id: user_id
            };
            console.log('fetching records for', logged_user);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            this.showLoading();
            this.httpClient.post(this.apiurl + "getCalendar.php", logged_user, {
              headers: headers,
              observe: 'response'
            }).subscribe(function (data) {
              _this3.hideLoading();

              console.log(data['body']);
              var success = data['body']['success'];
              console.log('tab2 page: login response was', success);

              if (success == true) {
                var workorders = data['body']['data'];
                console.log('tab2 page: workorders', workorders);
                workorders.forEach(function (workorder) {
                  workorder.startTimeRaw = workorder.startTime;
                  workorder.endTimeRaw = workorder.endTime;
                  workorder.startTime = new Date(workorder.startTime);
                  workorder.endTime = new Date(workorder.endTime);
                  workorder.allDay = false;
                  workorder.id = workorder.workorderid;
                  workorder.title = workorder[0].substring(0, 25);
                  workorder.desc = workorder.towersites;
                }); //TODO: Fix the date being start of epoch time.

                _this3.eventSource = workorders;
                console.log('eventsource: ', _this3.eventSource);
              } else {
                //this.hideLoading();
                console.log('failed to fetch records');
              }
            }, function (error) {
              _this3.hideLoading(); //console.log(error);
              //console.log(error.message);
              //console.error(error.message);


              console.log('failed to fetch records');
            });
          }
        }, {
          key: "createRandomEvents",
          value: function createRandomEvents() {
            var events = [];

            for (var i = 0; i < 50; i += 1) {
              var randomC = i + 1;

              if (randomC > 16) {
                randomC = i % 16;
              }

              var date = new Date();
              var eventType = Math.floor(Math.random() * 2);
              var startDay = Math.floor(Math.random() * 90) - 45;
              var endDay = Math.floor(Math.random() * 2) + startDay;
              var startTime;
              var endTime;
              var desc = 'Just a random Description for this work order ' + ' - ' + i;

              if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));

                if (endDay === startDay) {
                  endDay += 1;
                }

                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                  id: i,
                  title: '' + this.randomCompany[randomC],
                  desc: desc,
                  startTime: startTime,
                  endTime: endTime,
                  allDay: true
                });
              } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                  id: i,
                  title: '' + this.randomCompany[randomC],
                  desc: desc,
                  startTime: startTime,
                  endTime: endTime,
                  allDay: false
                });
              }
            }

            return events;
          }
        }, {
          key: "resetEvent",
          value: function resetEvent() {
            var nextId = this.nextId;
            this.event = {
              id: nextId,
              title: '',
              desc: '',
              startTime: new Date().toISOString(),
              endTime: new Date().toISOString(),
              allDay: false
            };
          } // Create the right event format and reload source

        }, {
          key: "addEvent",
          value: function addEvent(events) {
            var eventCopy = {
              id: this.event.id,
              title: this.event.title,
              startTime: new Date(this.event.startTime),
              endTime: new Date(this.event.endTime),
              allDay: this.event.allDay,
              desc: this.event.desc
            };

            if (eventCopy.allDay) {
              var start = eventCopy.startTime;
              var end = eventCopy.endTime;
              eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
              eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
            }

            this.eventSource.push(eventCopy);
            this.myCal.loadEvents();
            this.nextId = this.nextId + 1; //console.log('incrementing id to', this.nextId);

            this.resetEvent();
          } // Change current month/week/day

        }, {
          key: "next",
          value: function next() {
            var swiper = document.querySelector('.swiper-container')['swiper'];
            swiper.slideNext();
          }
        }, {
          key: "back",
          value: function back() {
            var swiper = document.querySelector('.swiper-container')['swiper'];
            swiper.slidePrev();
          } // Change between month/week/day

        }, {
          key: "changeMode",
          value: function changeMode(mode) {
            this.calendar.mode = mode;
          } // Focus today

        }, {
          key: "today",
          value: function today() {
            this.changeMode('month');
            this.calendar.currentDate = new Date();
          } // Selected date reange and hence title changed

        }, {
          key: "onViewTitleChanged",
          value: function onViewTitleChanged(title) {
            this.viewTitle = title;
          } // Calendar event was clicked

        }, {
          key: "onEventSelected",
          value: function onEventSelected(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var start, end, alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // Use Angular date pipe for conversion
                      start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(event.startTime, 'medium', this.locale);
                      end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(event.endTime, 'medium', this.locale);
                      _context3.next = 4;
                      return this.alertCtrl.create({
                        header: event.title,
                        subHeader: event.desc,
                        message: 'From: ' + start + '<br><br>To: ' + end,
                        buttons: [{
                          text: 'Close',
                          role: 'cancel'
                        }, {
                          text: 'Open Work Order',
                          handler: function handler() {
                            console.log('Going to service record ID: ', event.id);

                            _this4.router.navigateByUrl("/services/detail/".concat(event.id), {
                              state: {}
                            });
                          }
                        }]
                      });

                    case 4:
                      alert = _context3.sent;
                      alert.present();

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // Time slot was clicked

        }, {
          key: "onTimeSelected",
          value: function onTimeSelected(ev) {
            var selected = new Date(ev.selectedTime);
            this.event.startTime = selected.toISOString();
            selected.setHours(selected.getHours() + 1);
            this.event.endTime = selected.toISOString();
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var current_theme;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      current_theme = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          //current_theme = userdata.theme.toLowerCase();
                          return userdata.theme.toLowerCase();
                        } else {
                          return false;
                        }
                      });
                      return _context4.abrupt("return", current_theme);

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "updateCurrentTheme",
          value: function updateCurrentTheme(theme) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var userjson;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
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
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "switchTheme",
          value: function switchTheme() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var current_theme, theme_switcher, destination_theme;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
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
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "isLogged",
          value: function isLogged() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var log_status;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      log_status = this.storage.get('userdata').then(function (userdata) {
                        if (userdata && userdata.length !== 0) {
                          return userdata;
                        } else {
                          return false;
                        }
                      });
                      return _context7.abrupt("return", log_status);

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
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
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.activatedRoute.params.subscribe(function (userData) {
              if (userData.length !== 0) {
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

                      _this5.getWorkOrders(_this5.userinfo.id);
                    } else {
                      console.log('nothing in storage, going back to login');

                      _this5.logout();
                    }
                  });
                }
              }
            }); //this.loadEvents();
          }
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _providers_constant_constant__WEBPACK_IMPORTED_MODULE_10__["AppConstants"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
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

      Tab2Page.propDecorators = {
        myCal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarComponent"], []]
        }]
      };
      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _providers_constant_constant__WEBPACK_IMPORTED_MODULE_10__["AppConstants"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], String, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])], Tab2Page);
      /***/
    },

    /***/
    "MGMF":
    /*!**************************************************************!*\
      !*** ./node_modules/ionic2-calendar/__ivy_ngcc__/dayview.js ***!
      \**************************************************************/

    /*! exports provided: DayViewComponent */

    /***/
    function MGMF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DayViewComponent", function () {
        return DayViewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar.service */
      "FDPr");
      /* harmony import */


      var _init_position_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./init-position-scroll */
      "VTDg");

      var _c0 = ["daySlider"];

      function DayViewComponent_td_10_ng_template_1_Template(rf, ctx) {}

      var _c1 = function _c1(a0) {
        return {
          "calendar-event-wrap": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          height: a0
        };
      };

      var _c3 = function _c3(a0, a1) {
        return {
          allDayEvents: a0,
          eventTemplate: a1
        };
      };

      function DayViewComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DayViewComponent_td_10_ng_template_1_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r1.views[0].allDayEvents.length > 0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c2, 25 * ctx_r1.views[0].allDayEvents.length + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dayviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c3, ctx_r1.views[0].allDayEvents, ctx_r1.dayviewAllDayEventTemplate));
        }
      }

      function DayViewComponent_td_11_ng_template_1_Template(rf, ctx) {}

      var _c4 = function _c4(a0) {
        return {
          allDayEvents: a0
        };
      };

      function DayViewComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DayViewComponent_td_11_ng_template_1_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.dayviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c4, ctx_r2.views[0].allDayEvents));
        }
      }

      function DayViewComponent_init_position_scroll_12_tr_3_ng_template_4_Template(rf, ctx) {}

      var _c5 = function _c5(a0, a1, a2) {
        return {
          tm: a0,
          hourParts: a1,
          eventTemplate: a2
        };
      };

      function DayViewComponent_init_position_scroll_12_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DayViewComponent_init_position_scroll_12_tr_3_Template_td_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var tm_r16 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r19.select(tm_r16.time, tm_r16.events);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_12_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r16 = ctx.$implicit;
          var i_r17 = ctx.index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r15.hourColumnLabels[i_r17], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.dayviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c5, tm_r16, ctx_r15.hourParts, ctx_r15.dayviewNormalEventTemplate));
        }
      }

      function DayViewComponent_init_position_scroll_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "init-position-scroll", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onScroll", function DayViewComponent_init_position_scroll_12_Template_init_position_scroll_onScroll_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r21.setScrollPosition($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_12_tr_3_Template, 5, 7, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r3.initScrollPosition)("emitEvent", ctx_r3.preserveScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.views[0].rows);
        }
      }

      function DayViewComponent_init_position_scroll_13_tr_3_ng_template_4_Template(rf, ctx) {}

      var _c6 = function _c6(a0, a1) {
        return {
          tm: a0,
          hourParts: a1
        };
      };

      function DayViewComponent_init_position_scroll_13_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_13_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r24 = ctx.$implicit;
          var i_r25 = ctx.index;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r23.hourColumnLabels[i_r25], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.dayviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c6, tm_r24, ctx_r23.hourParts));
        }
      }

      function DayViewComponent_init_position_scroll_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "init-position-scroll", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_13_tr_3_Template, 5, 6, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r4.initScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.views[0].rows);
        }
      }

      function DayViewComponent_td_22_ng_template_1_Template(rf, ctx) {}

      function DayViewComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DayViewComponent_td_22_ng_template_1_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r5.views[1].allDayEvents.length > 0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c2, 25 * ctx_r5.views[1].allDayEvents.length + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.dayviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c3, ctx_r5.views[1].allDayEvents, ctx_r5.dayviewAllDayEventTemplate));
        }
      }

      function DayViewComponent_td_23_ng_template_1_Template(rf, ctx) {}

      function DayViewComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DayViewComponent_td_23_ng_template_1_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.dayviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c4, ctx_r6.views[1].allDayEvents));
        }
      }

      function DayViewComponent_init_position_scroll_24_tr_3_ng_template_4_Template(rf, ctx) {}

      function DayViewComponent_init_position_scroll_24_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DayViewComponent_init_position_scroll_24_tr_3_Template_td_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var tm_r30 = ctx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r33.select(tm_r30.time, tm_r30.events);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_24_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r30 = ctx.$implicit;
          var i_r31 = ctx.index;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r29.hourColumnLabels[i_r31], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r29.dayviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c5, tm_r30, ctx_r29.hourParts, ctx_r29.dayviewNormalEventTemplate));
        }
      }

      function DayViewComponent_init_position_scroll_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "init-position-scroll", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onScroll", function DayViewComponent_init_position_scroll_24_Template_init_position_scroll_onScroll_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r35.setScrollPosition($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_24_tr_3_Template, 5, 7, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r7.initScrollPosition)("emitEvent", ctx_r7.preserveScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.views[1].rows);
        }
      }

      function DayViewComponent_init_position_scroll_25_tr_3_ng_template_4_Template(rf, ctx) {}

      function DayViewComponent_init_position_scroll_25_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_25_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r38 = ctx.$implicit;
          var i_r39 = ctx.index;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r37.hourColumnLabels[i_r39], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r37.dayviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c6, tm_r38, ctx_r37.hourParts));
        }
      }

      function DayViewComponent_init_position_scroll_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "init-position-scroll", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_25_tr_3_Template, 5, 6, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r8.initScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.views[1].rows);
        }
      }

      function DayViewComponent_td_34_ng_template_1_Template(rf, ctx) {}

      function DayViewComponent_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DayViewComponent_td_34_ng_template_1_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r9.views[2].allDayEvents.length > 0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c2, 25 * ctx_r9.views[2].allDayEvents.length + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.dayviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c3, ctx_r9.views[2].allDayEvents, ctx_r9.dayviewAllDayEventTemplate));
        }
      }

      function DayViewComponent_td_35_ng_template_1_Template(rf, ctx) {}

      function DayViewComponent_td_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DayViewComponent_td_35_ng_template_1_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.dayviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c4, ctx_r10.views[2].allDayEvents));
        }
      }

      function DayViewComponent_init_position_scroll_36_tr_3_ng_template_4_Template(rf, ctx) {}

      function DayViewComponent_init_position_scroll_36_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DayViewComponent_init_position_scroll_36_tr_3_Template_td_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);

            var tm_r44 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r47.select(tm_r44.time, tm_r44.events);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_36_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r44 = ctx.$implicit;
          var i_r45 = ctx.index;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r43.hourColumnLabels[i_r45], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r43.dayviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c5, tm_r44, ctx_r43.hourParts, ctx_r43.dayviewNormalEventTemplate));
        }
      }

      function DayViewComponent_init_position_scroll_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "init-position-scroll", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onScroll", function DayViewComponent_init_position_scroll_36_Template_init_position_scroll_onScroll_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r49.setScrollPosition($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_36_tr_3_Template, 5, 7, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r11.initScrollPosition)("emitEvent", ctx_r11.preserveScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.views[2].rows);
        }
      }

      function DayViewComponent_init_position_scroll_37_tr_3_ng_template_4_Template(rf, ctx) {}

      function DayViewComponent_init_position_scroll_37_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_37_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r52 = ctx.$implicit;
          var i_r53 = ctx.index;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r51.hourColumnLabels[i_r53], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r51.dayviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c6, tm_r52, ctx_r51.hourParts));
        }
      }

      function DayViewComponent_init_position_scroll_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "init-position-scroll", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_37_tr_3_Template, 5, 6, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("initPosition", ctx_r12.initScrollPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.views[2].rows);
        }
      }

      var DayViewComponent =
      /** @class */
      function () {
        function DayViewComponent(calendarService, elm) {
          this.calendarService = calendarService;
          this.elm = elm;
          this["class"] = true;
          this.dir = "";
          this.scrollToHour = 0;
          this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](true);
          this.views = [];
          this.currentViewIndex = 0;
          this.direction = 0;
          this.mode = 'day';
          this.inited = false;
          this.callbackOnInit = true;
        }

        DayViewComponent_1 = DayViewComponent;

        DayViewComponent.prototype.ngOnInit = function () {
          var _this = this;

          if (!this.sliderOptions) {
            this.sliderOptions = {};
          }

          this.sliderOptions.loop = true;
          this.hourRange = (this.endHour - this.startHour) * this.hourSegments;

          if (this.dateFormatter && this.dateFormatter.formatDayViewTitle) {
            this.formatTitle = this.dateFormatter.formatDayViewTitle;
          } else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);

            this.formatTitle = function (date) {
              return datePipe_1.transform(date, this.formatDayTitle);
            };
          }

          if (this.dateFormatter && this.dateFormatter.formatDayViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatDayViewHourColumn;
          } else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);

            this.formatHourColumnLabel = function (date) {
              return datePipe_2.transform(date, this.formatHourColumn);
            };
          }

          if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
          }

          if (this.lockSwipes) {
            this.slider.lockSwipes(true);
          }

          this.refreshView();
          this.hourColumnLabels = this.getHourColumnLabels();
          this.inited = true;
          this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
          });
          this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
          });
        };

        DayViewComponent.prototype.ngAfterViewInit = function () {
          var title = this.getTitle();
          this.onTitleChanged.emit(title);

          if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.dayview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me_1 = this;
            setTimeout(function () {
              me_1.initScrollPosition = hourColumns_1[me_1.scrollToHour - me_1.startHour].offsetTop;
            }, 50);
          }
        };

        DayViewComponent.prototype.ngOnChanges = function (changes) {
          if (!this.inited) return;
          var eventSourceChange = changes['eventSource'];

          if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
          }

          var lockSwipeToPrev = changes['lockSwipeToPrev'];

          if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
          }

          var lockSwipes = changes['lockSwipes'];

          if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
          }
        };

        DayViewComponent.prototype.ngOnDestroy = function () {
          if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
          }

          if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
          }
        };

        DayViewComponent.prototype.onSlideChanged = function () {
          var _this = this;

          if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
          }

          var direction = 0,
              currentViewIndex = this.currentViewIndex;
          this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;

            if (currentSlideIndex - currentViewIndex === 1) {
              direction = 1;
            } else if (currentSlideIndex === 0 && currentViewIndex === 2) {
              direction = 1;

              _this.slider.slideTo(1, 0, false);
            } else if (currentViewIndex - currentSlideIndex === 1) {
              direction = -1;
            } else if (currentSlideIndex === 2 && currentViewIndex === 0) {
              direction = -1;

              _this.slider.slideTo(3, 0, false);
            }

            _this.currentViewIndex = currentSlideIndex;

            _this.move(direction);
          });
        };

        DayViewComponent.prototype.move = function (direction) {
          if (direction === 0) return;
          this.direction = direction;
          var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
          this.calendarService.setCurrentDate(adjacentDate);
          this.refreshView();
          this.direction = 0;
        };

        DayViewComponent.createDateObjects = function (startTime, startHour, endHour, timeInterval) {
          var rows = [],
              time,
              currentHour = startTime.getHours(),
              currentDate = startTime.getDate(),
              hourStep,
              minStep;

          if (timeInterval < 1) {
            hourStep = Math.floor(1 / timeInterval);
            minStep = 60;
          } else {
            hourStep = 1;
            minStep = Math.floor(60 / timeInterval);
          }

          for (var hour = startHour; hour < endHour; hour += hourStep) {
            for (var interval = 0; interval < 60; interval += minStep) {
              time = new Date(startTime.getTime());
              time.setHours(currentHour + hour, interval);
              time.setDate(currentDate);
              rows.push({
                time: time,
                events: []
              });
            }
          }

          return rows;
        };

        DayViewComponent.prototype.getHourColumnLabels = function () {
          var hourColumnLabels = [];

          for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour].time));
          }

          return hourColumnLabels;
        };

        DayViewComponent.prototype.getViewData = function (startTime) {
          return {
            rows: DayViewComponent_1.createDateObjects(startTime, this.startHour, this.endHour, this.hourSegments),
            allDayEvents: []
          };
        };

        DayViewComponent.prototype.getRange = function (currentDate) {
          var year = currentDate.getFullYear(),
              month = currentDate.getMonth(),
              date = currentDate.getDate(),
              startTime = new Date(year, month, date),
              endTime = new Date(year, month, date + 1);
          return {
            startTime: startTime,
            endTime: endTime
          };
        };

        DayViewComponent.prototype.onDataLoaded = function () {
          var eventSource = this.eventSource,
              len = eventSource ? eventSource.length : 0,
              startTime = this.range.startTime,
              endTime = this.range.endTime,
              utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())),
              utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())),
              currentViewIndex = this.currentViewIndex,
              rows = this.views[currentViewIndex].rows,
              allDayEvents = this.views[currentViewIndex].allDayEvents = [],
              oneHour = 3600000,
              eps = 0.016,
              normalEventInRange = false,
              rangeStartRowIndex = this.startHour * this.hourSegments,
              rangeEndRowIndex = this.endHour * this.hourSegments;

          for (var hour = 0; hour < this.hourRange; hour += 1) {
            rows[hour].events = [];
          }

          for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i];
            var eventStartTime = new Date(event_1.startTime.getTime());
            var eventEndTime = new Date(event_1.endTime.getTime());

            if (event_1.allDay) {
              if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                continue;
              } else {
                allDayEvents.push({
                  event: event_1
                });
              }
            } else {
              if (eventEndTime <= startTime || eventStartTime >= endTime) {
                continue;
              } else {
                normalEventInRange = true;
              }

              var timeDiff = void 0;
              var timeDifferenceStart = void 0;

              if (eventStartTime <= startTime) {
                timeDifferenceStart = 0;
              } else {
                timeDiff = eventStartTime.getTime() - startTime.getTime() - (eventStartTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                timeDifferenceStart = timeDiff / oneHour * this.hourSegments;
              }

              var timeDifferenceEnd = void 0;

              if (eventEndTime >= endTime) {
                timeDiff = endTime.getTime() - startTime.getTime() - (endTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
              } else {
                timeDiff = eventEndTime.getTime() - startTime.getTime() - (eventEndTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
              }

              var startIndex = Math.floor(timeDifferenceStart);
              var endIndex = Math.ceil(timeDifferenceEnd - eps);
              var startOffset = 0;
              var endOffset = 0;

              if (this.hourParts !== 1) {
                if (startIndex < rangeStartRowIndex) {
                  startOffset = 0;
                } else {
                  startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                }

                if (endIndex > rangeEndRowIndex) {
                  endOffset = 0;
                } else {
                  endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                }
              }

              if (startIndex < rangeStartRowIndex) {
                startIndex = 0;
              } else {
                startIndex -= rangeStartRowIndex;
              }

              if (endIndex > rangeEndRowIndex) {
                endIndex = rangeEndRowIndex;
              }

              endIndex -= rangeStartRowIndex;

              if (startIndex < endIndex) {
                var displayEvent = {
                  event: event_1,
                  startIndex: startIndex,
                  endIndex: endIndex,
                  startOffset: startOffset,
                  endOffset: endOffset
                };
                var eventSet = rows[startIndex].events;

                if (eventSet) {
                  eventSet.push(displayEvent);
                } else {
                  eventSet = [];
                  eventSet.push(displayEvent);
                  rows[startIndex].events = eventSet;
                }
              }
            }
          }

          if (normalEventInRange) {
            var orderedEvents = [];

            for (var hour = 0; hour < this.hourRange; hour += 1) {
              if (rows[hour].events) {
                rows[hour].events.sort(DayViewComponent_1.compareEventByStartOffset);
                orderedEvents = orderedEvents.concat(rows[hour].events);
              }
            }

            if (orderedEvents.length > 0) {
              this.placeEvents(orderedEvents);
            }
          }
        };

        DayViewComponent.prototype.refreshView = function () {
          this.range = this.getRange(this.calendarService.currentDate);

          if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
          }

          this.calendarService.populateAdjacentViews(this);
          this.calendarService.rangeChanged(this);
        };

        DayViewComponent.prototype.getTitle = function () {
          var startingDate = new Date(this.range.startTime.getTime());
          startingDate.setHours(12, 0, 0, 0);
          return this.formatTitle(startingDate);
        };

        DayViewComponent.compareEventByStartOffset = function (eventA, eventB) {
          return eventA.startOffset - eventB.startOffset;
        };

        DayViewComponent.prototype.select = function (selectedTime, events) {
          var disabled = false;

          if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
          }

          this.onTimeSelected.emit({
            selectedTime: selectedTime,
            events: events.map(function (e) {
              return e.event;
            }),
            disabled: disabled
          });
        };

        DayViewComponent.prototype.placeEvents = function (orderedEvents) {
          this.calculatePosition(orderedEvents);
          DayViewComponent_1.calculateWidth(orderedEvents, this.hourRange, this.hourParts);
        };

        DayViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
          this.calculatePosition(orderedEvents);
        };

        DayViewComponent.prototype.overlap = function (event1, event2) {
          var earlyEvent = event1,
              lateEvent = event2;

          if (event1.startIndex > event2.startIndex || event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset) {
            earlyEvent = event2;
            lateEvent = event1;
          }

          if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
          } else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset >= this.hourParts);
          }
        };

        DayViewComponent.prototype.calculatePosition = function (events) {
          var len = events.length,
              maxColumn = 0,
              col,
              isForbidden = new Array(len);

          for (var i = 0; i < len; i += 1) {
            for (col = 0; col < maxColumn; col += 1) {
              isForbidden[col] = false;
            }

            for (var j = 0; j < i; j += 1) {
              if (this.overlap(events[i], events[j])) {
                isForbidden[events[j].position] = true;
              }
            }

            for (col = 0; col < maxColumn; col += 1) {
              if (!isForbidden[col]) {
                break;
              }
            }

            if (col < maxColumn) {
              events[i].position = col;
            } else {
              events[i].position = maxColumn++;
            }
          }

          if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
              events[i].position = maxColumn - 1 - events[i].position;
            }
          }
        };

        DayViewComponent.calculateWidth = function (orderedEvents, size, hourParts) {
          var totalSize = size * hourParts,
              cells = new Array(totalSize); // sort by position in descending order, the right most columns should be calculated first

          orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
          });

          for (var i_1 = 0; i_1 < totalSize; i_1 += 1) {
            cells[i_1] = {
              calculated: false,
              events: []
            };
          }

          var len = orderedEvents.length;

          for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_2 = orderedEvents[i_2];
            var index = event_2.startIndex * hourParts + event_2.startOffset;

            while (index < event_2.endIndex * hourParts - event_2.endOffset) {
              cells[index].events.push(event_2);
              index += 1;
            }
          }

          var i = 0;

          while (i < len) {
            var event_3 = orderedEvents[i];

            if (!event_3.overlapNumber) {
              var overlapNumber = event_3.position + 1;
              event_3.overlapNumber = overlapNumber;
              var eventQueue = [event_3];

              while (event_3 = eventQueue.shift()) {
                var index = event_3.startIndex * hourParts + event_3.startOffset;

                while (index < event_3.endIndex * hourParts - event_3.endOffset) {
                  if (!cells[index].calculated) {
                    cells[index].calculated = true;

                    if (cells[index].events) {
                      var eventCountInCell = cells[index].events.length;

                      for (var j = 0; j < eventCountInCell; j += 1) {
                        var currentEventInCell = cells[index].events[j];

                        if (!currentEventInCell.overlapNumber) {
                          currentEventInCell.overlapNumber = overlapNumber;
                          eventQueue.push(currentEventInCell);
                        }
                      }
                    }
                  }

                  index += 1;
                }
              }
            }

            i += 1;
          }
        };

        DayViewComponent.prototype.eventSelected = function (event) {
          this.onEventSelected.emit(event);
        };

        DayViewComponent.prototype.setScrollPosition = function (scrollPosition) {
          this.initScrollPosition = scrollPosition;
        };

        var DayViewComponent_1;
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('daySlider'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], DayViewComponent.prototype, "slider", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.dayview'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DayViewComponent.prototype, "class", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], DayViewComponent.prototype, "dayviewAllDayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], DayViewComponent.prototype, "dayviewNormalEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], DayViewComponent.prototype, "dayviewAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], DayViewComponent.prototype, "dayviewNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], DayViewComponent.prototype, "dayviewInactiveAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], DayViewComponent.prototype, "dayviewInactiveNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DayViewComponent.prototype, "formatHourColumn", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DayViewComponent.prototype, "formatDayTitle", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DayViewComponent.prototype, "allDayLabel", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DayViewComponent.prototype, "hourParts", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], DayViewComponent.prototype, "eventSource", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)], DayViewComponent.prototype, "markDisabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DayViewComponent.prototype, "locale", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DayViewComponent.prototype, "dateFormatter", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], DayViewComponent.prototype, "dir", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DayViewComponent.prototype, "scrollToHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], DayViewComponent.prototype, "preserveScrollPosition", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], DayViewComponent.prototype, "lockSwipeToPrev", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], DayViewComponent.prototype, "lockSwipes", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DayViewComponent.prototype, "startHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DayViewComponent.prototype, "endHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DayViewComponent.prototype, "sliderOptions", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], DayViewComponent.prototype, "hourSegments", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DayViewComponent.prototype, "onRangeChanged", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DayViewComponent.prototype, "onEventSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DayViewComponent.prototype, "onTimeSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DayViewComponent.prototype, "onTitleChanged", void 0);
        DayViewComponent = DayViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])], DayViewComponent);

        DayViewComponent.ɵfac = function DayViewComponent_Factory(t) {
          return new (t || DayViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
        };

        DayViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: DayViewComponent,
          selectors: [["dayview"]],
          viewQuery: function DayViewComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
            }
          },
          hostVars: 2,
          hostBindings: function DayViewComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("dayview", ctx["class"]);
            }
          },
          inputs: {
            dir: "dir",
            scrollToHour: "scrollToHour",
            sliderOptions: "sliderOptions",
            dayviewAllDayEventTemplate: "dayviewAllDayEventTemplate",
            dayviewNormalEventTemplate: "dayviewNormalEventTemplate",
            dayviewAllDayEventSectionTemplate: "dayviewAllDayEventSectionTemplate",
            dayviewNormalEventSectionTemplate: "dayviewNormalEventSectionTemplate",
            dayviewInactiveAllDayEventSectionTemplate: "dayviewInactiveAllDayEventSectionTemplate",
            dayviewInactiveNormalEventSectionTemplate: "dayviewInactiveNormalEventSectionTemplate",
            formatHourColumn: "formatHourColumn",
            formatDayTitle: "formatDayTitle",
            allDayLabel: "allDayLabel",
            hourParts: "hourParts",
            eventSource: "eventSource",
            markDisabled: "markDisabled",
            locale: "locale",
            dateFormatter: "dateFormatter",
            preserveScrollPosition: "preserveScrollPosition",
            lockSwipeToPrev: "lockSwipeToPrev",
            lockSwipes: "lockSwipes",
            startHour: "startHour",
            endHour: "endHour",
            hourSegments: "hourSegments"
          },
          outputs: {
            onRangeChanged: "onRangeChanged",
            onEventSelected: "onEventSelected",
            onTimeSelected: "onTimeSelected",
            onTitleChanged: "onTitleChanged"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
          decls: 38,
          vars: 17,
          consts: [[1, "slides-container", 3, "options", "dir", "ionSlideDidChange"], ["daySlider", ""], [1, "slide-container"], [1, "dayview-allday-table"], [1, "dayview-allday-label"], [1, "dayview-allday-content-wrapper", "scroll-content"], [1, "table", "table-bordered", "dayview-allday-content-table"], ["class", "calendar-cell", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "calendar-cell", 4, "ngIf"], ["class", "dayview-normal-event-container", 3, "initPosition", "emitEvent", "onScroll", 4, "ngIf"], ["class", "dayview-normal-event-container", 3, "initPosition", 4, "ngIf"], [1, "calendar-cell", 3, "ngClass", "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "calendar-cell"], [1, "dayview-normal-event-container", 3, "initPosition", "emitEvent", "onScroll"], [1, "table", "table-bordered", "table-fixed", "dayview-normal-event-table"], [4, "ngFor", "ngForOf"], [1, "calendar-hour-column", "text-center"], ["tappable", "", 1, "calendar-cell", 3, "click"], [1, "dayview-normal-event-container", 3, "initPosition"]],
          template: function DayViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-slides", 0, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionSlideDidChange", function DayViewComponent_Template_ion_slides_ionSlideDidChange_0_listener() {
                return ctx.onSlideChanged();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-slide", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "table", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DayViewComponent_td_10_Template, 2, 11, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DayViewComponent_td_11_Template, 2, 4, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DayViewComponent_init_position_scroll_12_Template, 4, 3, "init-position-scroll", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DayViewComponent_init_position_scroll_13_Template, 4, 2, "init-position-scroll", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-slide", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "table", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, DayViewComponent_td_22_Template, 2, 11, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, DayViewComponent_td_23_Template, 2, 4, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, DayViewComponent_init_position_scroll_24_Template, 4, 3, "init-position-scroll", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, DayViewComponent_init_position_scroll_25_Template, 4, 2, "init-position-scroll", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-slide", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "table", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, DayViewComponent_td_34_Template, 2, 11, "td", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, DayViewComponent_td_35_Template, 2, 4, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, DayViewComponent_init_position_scroll_36_Template, 4, 3, "init-position-scroll", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, DayViewComponent_init_position_scroll_37_Template, 4, 2, "init-position-scroll", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.sliderOptions)("dir", ctx.dir);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.allDayLabel);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 0 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 0 !== ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 0 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 0 !== ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.allDayLabel);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 1 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 1 !== ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 1 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 1 !== ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.allDayLabel);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 2 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 2 !== ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 2 === ctx.currentViewIndex);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", 2 !== ctx.currentViewIndex);
            }
          },
          directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_5__["initPositionScrollComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
          styles: ["\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n          width: 50px;\n          white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .calendar-event {\n          position: absolute;\n          padding: 2px;\n          cursor: pointer;\n          z-index: 10000;\n        }\n\n        .slides-container {\n            height: 100%;\n        }\n\n        .slide-container {\n            display: block;\n        }\n\n        .calendar-cell {\n          padding: 0 !important;\n          height: 37px;\n        }\n\n        .dayview-allday-label {\n          float: left;\n          height: 100%;\n          line-height: 50px;\n          text-align: center;\n          width: 50px;\n          border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-label {\n            border-right: 1px solid #ddd;\n            float: right;\n        }\n\n        .dayview-allday-content-wrapper {\n          margin-left: 50px;\n          overflow: hidden;\n          height: 51px;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 50px;\n        }\n\n        .dayview-allday-content-table {\n          min-height: 50px;\n        }\n\n        .dayview-allday-content-table td {\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n        }\n\n        .dayview-allday-table {\n          height: 50px;\n          position: relative;\n          border-bottom: 1px solid #ddd;\n          font-size: 14px;\n        }\n\n        .dayview-normal-event-container {\n          margin-top: 50px;\n          overflow: hidden;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          position: absolute;\n          font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n          display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n          .dayview-allday-label, .calendar-hour-column {\n            width: 31px;\n            font-size: 12px;\n          }\n\n          .dayview-allday-label {\n            padding-top: 4px;\n          }\n\n          .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n            line-height: 12px;\n          }\n\n          .dayview-allday-label {\n            line-height: 20px;\n          }\n\n          .dayview-allday-content-wrapper {\n            margin-left: 31px;\n          }\n\n          [dir=\"rtl\"] .dayview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 31px;\n          }\n        }\n    "],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DayViewComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
            args: [{
              selector: 'dayview',
              template: "\n        <ion-slides #daySlider [options]=\"sliderOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\" class=\"slides-container\">\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[0].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[0].allDayEvents.length+'px'}\"\n                                    *ngIf=\"0===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[0].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"0!==currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewInactiveAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[0].allDayEvents}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"0===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[0].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"0!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[0].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewInactiveNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[1].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[1].allDayEvents.length+'px'}\"\n                                    *ngIf=\"1===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[1].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"1!==currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewInactiveAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[1].allDayEvents}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"1===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[1].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"1!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[1].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewInactiveNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[2].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[2].allDayEvents.length+'px'}\"\n                                    *ngIf=\"2===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[2].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"2!==currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewInactiveAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[2].allDayEvents}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"2===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[2].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"2!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[2].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewInactiveNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n        </ion-slides>\n    ",
              styles: ["\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n          width: 50px;\n          white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .calendar-event {\n          position: absolute;\n          padding: 2px;\n          cursor: pointer;\n          z-index: 10000;\n        }\n\n        .slides-container {\n            height: 100%;\n        }\n\n        .slide-container {\n            display: block;\n        }\n\n        .calendar-cell {\n          padding: 0 !important;\n          height: 37px;\n        }\n\n        .dayview-allday-label {\n          float: left;\n          height: 100%;\n          line-height: 50px;\n          text-align: center;\n          width: 50px;\n          border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-label {\n            border-right: 1px solid #ddd;\n            float: right;\n        }\n\n        .dayview-allday-content-wrapper {\n          margin-left: 50px;\n          overflow: hidden;\n          height: 51px;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 50px;\n        }\n\n        .dayview-allday-content-table {\n          min-height: 50px;\n        }\n\n        .dayview-allday-content-table td {\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n        }\n\n        .dayview-allday-table {\n          height: 50px;\n          position: relative;\n          border-bottom: 1px solid #ddd;\n          font-size: 14px;\n        }\n\n        .dayview-normal-event-container {\n          margin-top: 50px;\n          overflow: hidden;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          position: absolute;\n          font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n          display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n          .dayview-allday-label, .calendar-hour-column {\n            width: 31px;\n            font-size: 12px;\n          }\n\n          .dayview-allday-label {\n            padding-top: 4px;\n          }\n\n          .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n            line-height: 12px;\n          }\n\n          .dayview-allday-label {\n            line-height: 20px;\n          }\n\n          .dayview-allday-content-wrapper {\n            margin-left: 31px;\n          }\n\n          [dir=\"rtl\"] .dayview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 31px;\n          }\n        }\n    "],
              encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
          }], function () {
            return [{
              type: _calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
            }];
          }, {
            "class": [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
              args: ['class.dayview']
            }],
            dir: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            scrollToHour: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            onRangeChanged: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
            }],
            onEventSelected: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
            }],
            onTimeSelected: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
            }],
            onTitleChanged: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
            }],
            sliderOptions: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            slider: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
              args: ['daySlider']
            }],
            dayviewAllDayEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            dayviewNormalEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            dayviewAllDayEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            dayviewNormalEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            dayviewInactiveAllDayEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            dayviewInactiveNormalEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            formatHourColumn: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            formatDayTitle: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            allDayLabel: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            hourParts: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            eventSource: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            markDisabled: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            locale: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            dateFormatter: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            preserveScrollPosition: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            lockSwipeToPrev: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            lockSwipes: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            startHour: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            endHour: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }],
            hourSegments: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
            }]
          });
        })();

        return DayViewComponent;
      }(); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5dmlldy5qcyIsInNvdXJjZXMiOlsiZGF5dmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBb2hCZ0UsQUFPekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ2tCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElvblNsaWRlcyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4vY2FsZW5kYXIuc2VydmljZSc7XG52YXIgRGF5Vmlld0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEYXlWaWV3Q29tcG9uZW50KGNhbGVuZGFyU2VydmljZSwgZWxtKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlID0gY2FsZW5kYXJTZXJ2aWNlO1xuICAgICAgICB0aGlzLmVsbSA9IGVsbTtcbiAgICAgICAgdGhpcy5jbGFzcyA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlyID0gXCJcIjtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hvdXIgPSAwO1xuICAgICAgICB0aGlzLm9uUmFuZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLm9uRXZlbnRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vblRpbWVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vblRpdGxlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICAgICAgIHRoaXMudmlld3MgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50Vmlld0luZGV4ID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLm1vZGUgPSAnZGF5JztcbiAgICAgICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYWxsYmFja09uSW5pdCA9IHRydWU7XG4gICAgfVxuICAgIERheVZpZXdDb21wb25lbnRfMSA9IERheVZpZXdDb21wb25lbnQ7XG4gICAgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5zbGlkZXJPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlck9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNsaWRlck9wdGlvbnMubG9vcCA9IHRydWU7XG4gICAgICAgIHRoaXMuaG91clJhbmdlID0gKHRoaXMuZW5kSG91ciAtIHRoaXMuc3RhcnRIb3VyKSAqIHRoaXMuaG91clNlZ21lbnRzO1xuICAgICAgICBpZiAodGhpcy5kYXRlRm9ybWF0dGVyICYmIHRoaXMuZGF0ZUZvcm1hdHRlci5mb3JtYXREYXlWaWV3VGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0VGl0bGUgPSB0aGlzLmRhdGVGb3JtYXR0ZXIuZm9ybWF0RGF5Vmlld1RpdGxlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRhdGVQaXBlXzEgPSBuZXcgRGF0ZVBpcGUodGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5mb3JtYXRUaXRsZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVQaXBlXzEudHJhbnNmb3JtKGRhdGUsIHRoaXMuZm9ybWF0RGF5VGl0bGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYXRlRm9ybWF0dGVyICYmIHRoaXMuZGF0ZUZvcm1hdHRlci5mb3JtYXREYXlWaWV3SG91ckNvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXRIb3VyQ29sdW1uTGFiZWwgPSB0aGlzLmRhdGVGb3JtYXR0ZXIuZm9ybWF0RGF5Vmlld0hvdXJDb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGF0ZVBpcGVfMiA9IG5ldyBEYXRlUGlwZSh0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdEhvdXJDb2x1bW5MYWJlbCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVQaXBlXzIudHJhbnNmb3JtKGRhdGUsIHRoaXMuZm9ybWF0SG91ckNvbHVtbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxvY2tTd2lwZVRvUHJldikge1xuICAgICAgICAgICAgdGhpcy5zbGlkZXIubG9ja1N3aXBlVG9QcmV2KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxvY2tTd2lwZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLmxvY2tTd2lwZXModHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgICAgICB0aGlzLmhvdXJDb2x1bW5MYWJlbHMgPSB0aGlzLmdldEhvdXJDb2x1bW5MYWJlbHMoKTtcbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlQ2hhbmdlZEZyb21QYXJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmNhbGVuZGFyU2VydmljZS5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tUGFyZW50JC5zdWJzY3JpYmUoZnVuY3Rpb24gKGN1cnJlbnREYXRlKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWZyZXNoVmlldygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudFNvdXJjZUNoYW5nZWRTdWJzY3JpcHRpb24gPSB0aGlzLmNhbGVuZGFyU2VydmljZS5ldmVudFNvdXJjZUNoYW5nZWQkLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkRhdGFMb2FkZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5uZ0FmdGVyVmlld0luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKTtcbiAgICAgICAgdGhpcy5vblRpdGxlQ2hhbmdlZC5lbWl0KHRpdGxlKTtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsVG9Ib3VyID4gMCkge1xuICAgICAgICAgICAgdmFyIGhvdXJDb2x1bW5zXzEgPSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXl2aWV3LW5vcm1hbC1ldmVudC1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsZW5kYXItaG91ci1jb2x1bW4nKTtcbiAgICAgICAgICAgIHZhciBtZV8xID0gdGhpcztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1lXzEuaW5pdFNjcm9sbFBvc2l0aW9uID0gaG91ckNvbHVtbnNfMVttZV8xLnNjcm9sbFRvSG91ciAtIG1lXzEuc3RhcnRIb3VyXS5vZmZzZXRUb3A7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGV2ZW50U291cmNlQ2hhbmdlID0gY2hhbmdlc1snZXZlbnRTb3VyY2UnXTtcbiAgICAgICAgaWYgKGV2ZW50U291cmNlQ2hhbmdlICYmIGV2ZW50U291cmNlQ2hhbmdlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkRhdGFMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbG9ja1N3aXBlVG9QcmV2ID0gY2hhbmdlc1snbG9ja1N3aXBlVG9QcmV2J107XG4gICAgICAgIGlmIChsb2NrU3dpcGVUb1ByZXYpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLmxvY2tTd2lwZVRvUHJldihsb2NrU3dpcGVUb1ByZXYuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbG9ja1N3aXBlcyA9IGNoYW5nZXNbJ2xvY2tTd2lwZXMnXTtcbiAgICAgICAgaWYgKGxvY2tTd2lwZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLmxvY2tTd2lwZXMobG9ja1N3aXBlcy5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERhdGVDaGFuZ2VkRnJvbVBhcmVudFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tUGFyZW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQ2hhbmdlZEZyb21QYXJlbnRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV2ZW50U291cmNlQ2hhbmdlZFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZUNoYW5nZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRTb3VyY2VDaGFuZ2VkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUub25TbGlkZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrT25Jbml0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrT25Jbml0ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IDAsIGN1cnJlbnRWaWV3SW5kZXggPSB0aGlzLmN1cnJlbnRWaWV3SW5kZXg7XG4gICAgICAgIHRoaXMuc2xpZGVyLmdldEFjdGl2ZUluZGV4KCkudGhlbihmdW5jdGlvbiAoY3VycmVudFNsaWRlSW5kZXgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZUluZGV4ID0gKGN1cnJlbnRTbGlkZUluZGV4ICsgMikgJSAzO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZUluZGV4IC0gY3VycmVudFZpZXdJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50U2xpZGVJbmRleCA9PT0gMCAmJiBjdXJyZW50Vmlld0luZGV4ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zbGlkZXIuc2xpZGVUbygxLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50Vmlld0luZGV4IC0gY3VycmVudFNsaWRlSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRTbGlkZUluZGV4ID09PSAyICYmIGN1cnJlbnRWaWV3SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zbGlkZXIuc2xpZGVUbygzLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50Vmlld0luZGV4ID0gY3VycmVudFNsaWRlSW5kZXg7XG4gICAgICAgICAgICBfdGhpcy5tb3ZlKGRpcmVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHZhciBhZGphY2VudERhdGUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRBZGphY2VudENhbGVuZGFyRGF0ZSh0aGlzLm1vZGUsIGRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnNldEN1cnJlbnREYXRlKGFkamFjZW50RGF0ZSk7XG4gICAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgIH07XG4gICAgRGF5Vmlld0NvbXBvbmVudC5jcmVhdGVEYXRlT2JqZWN0cyA9IGZ1bmN0aW9uIChzdGFydFRpbWUsIHN0YXJ0SG91ciwgZW5kSG91ciwgdGltZUludGVydmFsKSB7XG4gICAgICAgIHZhciByb3dzID0gW10sIHRpbWUsIGN1cnJlbnRIb3VyID0gc3RhcnRUaW1lLmdldEhvdXJzKCksIGN1cnJlbnREYXRlID0gc3RhcnRUaW1lLmdldERhdGUoKSwgaG91clN0ZXAsIG1pblN0ZXA7XG4gICAgICAgIGlmICh0aW1lSW50ZXJ2YWwgPCAxKSB7XG4gICAgICAgICAgICBob3VyU3RlcCA9IE1hdGguZmxvb3IoMSAvIHRpbWVJbnRlcnZhbCk7XG4gICAgICAgICAgICBtaW5TdGVwID0gNjA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBob3VyU3RlcCA9IDE7XG4gICAgICAgICAgICBtaW5TdGVwID0gTWF0aC5mbG9vcig2MCAvIHRpbWVJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaG91ciA9IHN0YXJ0SG91cjsgaG91ciA8IGVuZEhvdXI7IGhvdXIgKz0gaG91clN0ZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGludGVydmFsID0gMDsgaW50ZXJ2YWwgPCA2MDsgaW50ZXJ2YWwgKz0gbWluU3RlcCkge1xuICAgICAgICAgICAgICAgIHRpbWUgPSBuZXcgRGF0ZShzdGFydFRpbWUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICB0aW1lLnNldEhvdXJzKGN1cnJlbnRIb3VyICsgaG91ciwgaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHRpbWUuc2V0RGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiBbXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH07XG4gICAgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0SG91ckNvbHVtbkxhYmVscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhvdXJDb2x1bW5MYWJlbHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaG91ciA9IDAsIGxlbmd0aF8xID0gdGhpcy52aWV3c1swXS5yb3dzLmxlbmd0aDsgaG91ciA8IGxlbmd0aF8xOyBob3VyICs9IDEpIHtcbiAgICAgICAgICAgIGhvdXJDb2x1bW5MYWJlbHMucHVzaCh0aGlzLmZvcm1hdEhvdXJDb2x1bW5MYWJlbCh0aGlzLnZpZXdzWzBdLnJvd3NbaG91cl0udGltZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob3VyQ29sdW1uTGFiZWxzO1xuICAgIH07XG4gICAgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0Vmlld0RhdGEgPSBmdW5jdGlvbiAoc3RhcnRUaW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3dzOiBEYXlWaWV3Q29tcG9uZW50XzEuY3JlYXRlRGF0ZU9iamVjdHMoc3RhcnRUaW1lLCB0aGlzLnN0YXJ0SG91ciwgdGhpcy5lbmRIb3VyLCB0aGlzLmhvdXJTZWdtZW50cyksXG4gICAgICAgICAgICBhbGxEYXlFdmVudHM6IFtdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5nZXRSYW5nZSA9IGZ1bmN0aW9uIChjdXJyZW50RGF0ZSkge1xuICAgICAgICB2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKSwgZGF0ZSA9IGN1cnJlbnREYXRlLmdldERhdGUoKSwgc3RhcnRUaW1lID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRhdGUpLCBlbmRUaW1lID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRhdGUgKyAxKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lLFxuICAgICAgICAgICAgZW5kVGltZTogZW5kVGltZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUub25EYXRhTG9hZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXZlbnRTb3VyY2UgPSB0aGlzLmV2ZW50U291cmNlLCBsZW4gPSBldmVudFNvdXJjZSA/IGV2ZW50U291cmNlLmxlbmd0aCA6IDAsIHN0YXJ0VGltZSA9IHRoaXMucmFuZ2Uuc3RhcnRUaW1lLCBlbmRUaW1lID0gdGhpcy5yYW5nZS5lbmRUaW1lLCB1dGNTdGFydFRpbWUgPSBuZXcgRGF0ZShEYXRlLlVUQyhzdGFydFRpbWUuZ2V0RnVsbFllYXIoKSwgc3RhcnRUaW1lLmdldE1vbnRoKCksIHN0YXJ0VGltZS5nZXREYXRlKCkpKSwgdXRjRW5kVGltZSA9IG5ldyBEYXRlKERhdGUuVVRDKGVuZFRpbWUuZ2V0RnVsbFllYXIoKSwgZW5kVGltZS5nZXRNb250aCgpLCBlbmRUaW1lLmdldERhdGUoKSkpLCBjdXJyZW50Vmlld0luZGV4ID0gdGhpcy5jdXJyZW50Vmlld0luZGV4LCByb3dzID0gdGhpcy52aWV3c1tjdXJyZW50Vmlld0luZGV4XS5yb3dzLCBhbGxEYXlFdmVudHMgPSB0aGlzLnZpZXdzW2N1cnJlbnRWaWV3SW5kZXhdLmFsbERheUV2ZW50cyA9IFtdLCBvbmVIb3VyID0gMzYwMDAwMCwgZXBzID0gMC4wMTYsIG5vcm1hbEV2ZW50SW5SYW5nZSA9IGZhbHNlLCByYW5nZVN0YXJ0Um93SW5kZXggPSB0aGlzLnN0YXJ0SG91ciAqIHRoaXMuaG91clNlZ21lbnRzLCByYW5nZUVuZFJvd0luZGV4ID0gdGhpcy5lbmRIb3VyICogdGhpcy5ob3VyU2VnbWVudHM7XG4gICAgICAgIGZvciAodmFyIGhvdXIgPSAwOyBob3VyIDwgdGhpcy5ob3VyUmFuZ2U7IGhvdXIgKz0gMSkge1xuICAgICAgICAgICAgcm93c1tob3VyXS5ldmVudHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRfMSA9IGV2ZW50U291cmNlW2ldO1xuICAgICAgICAgICAgdmFyIGV2ZW50U3RhcnRUaW1lID0gbmV3IERhdGUoZXZlbnRfMS5zdGFydFRpbWUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIHZhciBldmVudEVuZFRpbWUgPSBuZXcgRGF0ZShldmVudF8xLmVuZFRpbWUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIGlmIChldmVudF8xLmFsbERheSkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudEVuZFRpbWUgPD0gdXRjU3RhcnRUaW1lIHx8IGV2ZW50U3RhcnRUaW1lID49IHV0Y0VuZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbGxEYXlFdmVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnRfMVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRFbmRUaW1lIDw9IHN0YXJ0VGltZSB8fCBldmVudFN0YXJ0VGltZSA+PSBlbmRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsRXZlbnRJblJhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVEaWZmID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lRGlmZmVyZW5jZVN0YXJ0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmIChldmVudFN0YXJ0VGltZSA8PSBzdGFydFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZURpZmZlcmVuY2VTdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiA9IGV2ZW50U3RhcnRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkgLSAoZXZlbnRTdGFydFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIHN0YXJ0VGltZS5nZXRUaW1lem9uZU9mZnNldCgpKSAqIDYwMDAwO1xuICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZmVyZW5jZVN0YXJ0ID0gdGltZURpZmYgLyBvbmVIb3VyICogdGhpcy5ob3VyU2VnbWVudHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0aW1lRGlmZmVyZW5jZUVuZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRFbmRUaW1lID49IGVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgPSBlbmRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkgLSAoZW5kVGltZS5nZXRUaW1lem9uZU9mZnNldCgpIC0gc3RhcnRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCkpICogNjAwMDA7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmZXJlbmNlRW5kID0gdGltZURpZmYgLyBvbmVIb3VyICogdGhpcy5ob3VyU2VnbWVudHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZiA9IGV2ZW50RW5kVGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpIC0gKGV2ZW50RW5kVGltZS5nZXRUaW1lem9uZU9mZnNldCgpIC0gc3RhcnRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCkpICogNjAwMDA7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVEaWZmZXJlbmNlRW5kID0gdGltZURpZmYgLyBvbmVIb3VyICogdGhpcy5ob3VyU2VnbWVudHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzdGFydEluZGV4ID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZVN0YXJ0KTtcbiAgICAgICAgICAgICAgICB2YXIgZW5kSW5kZXggPSBNYXRoLmNlaWwodGltZURpZmZlcmVuY2VFbmQgLSBlcHMpO1xuICAgICAgICAgICAgICAgIHZhciBzdGFydE9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGVuZE9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaG91clBhcnRzICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEluZGV4IDwgcmFuZ2VTdGFydFJvd0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldCA9IE1hdGguZmxvb3IoKHRpbWVEaWZmZXJlbmNlU3RhcnQgLSBzdGFydEluZGV4KSAqIHRoaXMuaG91clBhcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZW5kSW5kZXggPiByYW5nZUVuZFJvd0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRPZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kT2Zmc2V0ID0gTWF0aC5mbG9vcigoZW5kSW5kZXggLSB0aW1lRGlmZmVyZW5jZUVuZCkgKiB0aGlzLmhvdXJQYXJ0cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPCByYW5nZVN0YXJ0Um93SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4IC09IHJhbmdlU3RhcnRSb3dJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVuZEluZGV4ID4gcmFuZ2VFbmRSb3dJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBlbmRJbmRleCA9IHJhbmdlRW5kUm93SW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVuZEluZGV4IC09IHJhbmdlU3RhcnRSb3dJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA8IGVuZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXNwbGF5RXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnRfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleDogZW5kSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldDogc3RhcnRPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRPZmZzZXQ6IGVuZE9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRTZXQgPSByb3dzW3N0YXJ0SW5kZXhdLmV2ZW50cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50U2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFNldC5wdXNoKGRpc3BsYXlFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFNldCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRTZXQucHVzaChkaXNwbGF5RXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93c1tzdGFydEluZGV4XS5ldmVudHMgPSBldmVudFNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobm9ybWFsRXZlbnRJblJhbmdlKSB7XG4gICAgICAgICAgICB2YXIgb3JkZXJlZEV2ZW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaG91ciA9IDA7IGhvdXIgPCB0aGlzLmhvdXJSYW5nZTsgaG91ciArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvd3NbaG91cl0uZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3NbaG91cl0uZXZlbnRzLnNvcnQoRGF5Vmlld0NvbXBvbmVudF8xLmNvbXBhcmVFdmVudEJ5U3RhcnRPZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICBvcmRlcmVkRXZlbnRzID0gb3JkZXJlZEV2ZW50cy5jb25jYXQocm93c1tob3VyXS5ldmVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcmRlcmVkRXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlRXZlbnRzKG9yZGVyZWRFdmVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5yZWZyZXNoVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yYW5nZSA9IHRoaXMuZ2V0UmFuZ2UodGhpcy5jYWxlbmRhclNlcnZpY2UuY3VycmVudERhdGUpO1xuICAgICAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIHRoaXMub25UaXRsZUNoYW5nZWQuZW1pdCh0aXRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UucG9wdWxhdGVBZGphY2VudFZpZXdzKHRoaXMpO1xuICAgICAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5yYW5nZUNoYW5nZWQodGhpcyk7XG4gICAgfTtcbiAgICBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0aW5nRGF0ZSA9IG5ldyBEYXRlKHRoaXMucmFuZ2Uuc3RhcnRUaW1lLmdldFRpbWUoKSk7XG4gICAgICAgIHN0YXJ0aW5nRGF0ZS5zZXRIb3VycygxMiwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFRpdGxlKHN0YXJ0aW5nRGF0ZSk7XG4gICAgfTtcbiAgICBEYXlWaWV3Q29tcG9uZW50LmNvbXBhcmVFdmVudEJ5U3RhcnRPZmZzZXQgPSBmdW5jdGlvbiAoZXZlbnRBLCBldmVudEIpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50QS5zdGFydE9mZnNldCAtIGV2ZW50Qi5zdGFydE9mZnNldDtcbiAgICB9O1xuICAgIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChzZWxlY3RlZFRpbWUsIGV2ZW50cykge1xuICAgICAgICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMubWFya0Rpc2FibGVkKSB7XG4gICAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMubWFya0Rpc2FibGVkKHNlbGVjdGVkVGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblRpbWVTZWxlY3RlZC5lbWl0KHtcbiAgICAgICAgICAgIHNlbGVjdGVkVGltZTogc2VsZWN0ZWRUaW1lLFxuICAgICAgICAgICAgZXZlbnRzOiBldmVudHMubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLmV2ZW50OyB9KSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLnBsYWNlRXZlbnRzID0gZnVuY3Rpb24gKG9yZGVyZWRFdmVudHMpIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQb3NpdGlvbihvcmRlcmVkRXZlbnRzKTtcbiAgICAgICAgRGF5Vmlld0NvbXBvbmVudF8xLmNhbGN1bGF0ZVdpZHRoKG9yZGVyZWRFdmVudHMsIHRoaXMuaG91clJhbmdlLCB0aGlzLmhvdXJQYXJ0cyk7XG4gICAgfTtcbiAgICBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5wbGFjZUFsbERheUV2ZW50cyA9IGZ1bmN0aW9uIChvcmRlcmVkRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUG9zaXRpb24ob3JkZXJlZEV2ZW50cyk7XG4gICAgfTtcbiAgICBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5vdmVybGFwID0gZnVuY3Rpb24gKGV2ZW50MSwgZXZlbnQyKSB7XG4gICAgICAgIHZhciBlYXJseUV2ZW50ID0gZXZlbnQxLCBsYXRlRXZlbnQgPSBldmVudDI7XG4gICAgICAgIGlmIChldmVudDEuc3RhcnRJbmRleCA+IGV2ZW50Mi5zdGFydEluZGV4IHx8IChldmVudDEuc3RhcnRJbmRleCA9PT0gZXZlbnQyLnN0YXJ0SW5kZXggJiYgZXZlbnQxLnN0YXJ0T2Zmc2V0ID4gZXZlbnQyLnN0YXJ0T2Zmc2V0KSkge1xuICAgICAgICAgICAgZWFybHlFdmVudCA9IGV2ZW50MjtcbiAgICAgICAgICAgIGxhdGVFdmVudCA9IGV2ZW50MTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWFybHlFdmVudC5lbmRJbmRleCA8PSBsYXRlRXZlbnQuc3RhcnRJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICEoZWFybHlFdmVudC5lbmRJbmRleCAtIGxhdGVFdmVudC5zdGFydEluZGV4ID09PSAxICYmIGVhcmx5RXZlbnQuZW5kT2Zmc2V0ICsgbGF0ZUV2ZW50LnN0YXJ0T2Zmc2V0ID49IHRoaXMuaG91clBhcnRzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUuY2FsY3VsYXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoZXZlbnRzKSB7XG4gICAgICAgIHZhciBsZW4gPSBldmVudHMubGVuZ3RoLCBtYXhDb2x1bW4gPSAwLCBjb2wsIGlzRm9yYmlkZGVuID0gbmV3IEFycmF5KGxlbik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgbWF4Q29sdW1uOyBjb2wgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlzRm9yYmlkZGVuW2NvbF0gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaTsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxhcChldmVudHNbaV0sIGV2ZW50c1tqXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGb3JiaWRkZW5bZXZlbnRzW2pdLnBvc2l0aW9uXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCBtYXhDb2x1bW47IGNvbCArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0ZvcmJpZGRlbltjb2xdKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2wgPCBtYXhDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBldmVudHNbaV0ucG9zaXRpb24gPSBjb2w7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudHNbaV0ucG9zaXRpb24gPSBtYXhDb2x1bW4rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzW2ldLnBvc2l0aW9uID0gbWF4Q29sdW1uIC0gMSAtIGV2ZW50c1tpXS5wb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRGF5Vmlld0NvbXBvbmVudC5jYWxjdWxhdGVXaWR0aCA9IGZ1bmN0aW9uIChvcmRlcmVkRXZlbnRzLCBzaXplLCBob3VyUGFydHMpIHtcbiAgICAgICAgdmFyIHRvdGFsU2l6ZSA9IHNpemUgKiBob3VyUGFydHMsIGNlbGxzID0gbmV3IEFycmF5KHRvdGFsU2l6ZSk7XG4gICAgICAgIC8vIHNvcnQgYnkgcG9zaXRpb24gaW4gZGVzY2VuZGluZyBvcmRlciwgdGhlIHJpZ2h0IG1vc3QgY29sdW1ucyBzaG91bGQgYmUgY2FsY3VsYXRlZCBmaXJzdFxuICAgICAgICBvcmRlcmVkRXZlbnRzLnNvcnQoZnVuY3Rpb24gKGV2ZW50QSwgZXZlbnRCKSB7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnRCLnBvc2l0aW9uIC0gZXZlbnRBLnBvc2l0aW9uO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yICh2YXIgaV8xID0gMDsgaV8xIDwgdG90YWxTaXplOyBpXzEgKz0gMSkge1xuICAgICAgICAgICAgY2VsbHNbaV8xXSA9IHtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBldmVudHM6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZW4gPSBvcmRlcmVkRXZlbnRzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaV8yID0gMDsgaV8yIDwgbGVuOyBpXzIgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGV2ZW50XzIgPSBvcmRlcmVkRXZlbnRzW2lfMl07XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudF8yLnN0YXJ0SW5kZXggKiBob3VyUGFydHMgKyBldmVudF8yLnN0YXJ0T2Zmc2V0O1xuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgZXZlbnRfMi5lbmRJbmRleCAqIGhvdXJQYXJ0cyAtIGV2ZW50XzIuZW5kT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbaW5kZXhdLmV2ZW50cy5wdXNoKGV2ZW50XzIpO1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICAgICAgdmFyIGV2ZW50XzMgPSBvcmRlcmVkRXZlbnRzW2ldO1xuICAgICAgICAgICAgaWYgKCFldmVudF8zLm92ZXJsYXBOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcE51bWJlciA9IGV2ZW50XzMucG9zaXRpb24gKyAxO1xuICAgICAgICAgICAgICAgIGV2ZW50XzMub3ZlcmxhcE51bWJlciA9IG92ZXJsYXBOdW1iZXI7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50UXVldWUgPSBbZXZlbnRfM107XG4gICAgICAgICAgICAgICAgd2hpbGUgKChldmVudF8zID0gZXZlbnRRdWV1ZS5zaGlmdCgpKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudF8zLnN0YXJ0SW5kZXggKiBob3VyUGFydHMgKyBldmVudF8zLnN0YXJ0T2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaW5kZXggPCBldmVudF8zLmVuZEluZGV4ICogaG91clBhcnRzIC0gZXZlbnRfMy5lbmRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2VsbHNbaW5kZXhdLmNhbGN1bGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpbmRleF0uY2FsY3VsYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxzW2luZGV4XS5ldmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50Q291bnRJbkNlbGwgPSBjZWxsc1tpbmRleF0uZXZlbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBldmVudENvdW50SW5DZWxsOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RXZlbnRJbkNlbGwgPSBjZWxsc1tpbmRleF0uZXZlbnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50RXZlbnRJbkNlbGwub3ZlcmxhcE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFdmVudEluQ2VsbC5vdmVybGFwTnVtYmVyID0gb3ZlcmxhcE51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFF1ZXVlLnB1c2goY3VycmVudEV2ZW50SW5DZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpICs9IDE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLmV2ZW50U2VsZWN0ZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkV2ZW50U2VsZWN0ZWQuZW1pdChldmVudCk7XG4gICAgfTtcbiAgICBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZS5zZXRTY3JvbGxQb3NpdGlvbiA9IGZ1bmN0aW9uIChzY3JvbGxQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmluaXRTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuICAgIH07XG4gICAgdmFyIERheVZpZXdDb21wb25lbnRfMTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBWaWV3Q2hpbGQoJ2RheVNsaWRlcicpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBJb25TbGlkZXMpXG4gICAgXSwgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2xpZGVyXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSG9zdEJpbmRpbmcoJ2NsYXNzLmRheXZpZXcnKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImNsYXNzXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgVGVtcGxhdGVSZWYpXG4gICAgXSwgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwiZGF5dmlld0FsbERheUV2ZW50VGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBUZW1wbGF0ZVJlZilcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJkYXl2aWV3Tm9ybWFsRXZlbnRUZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImRheXZpZXdBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImRheXZpZXdOb3JtYWxFdmVudFNlY3Rpb25UZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImRheXZpZXdJbmFjdGl2ZUFsbERheUV2ZW50U2VjdGlvblRlbXBsYXRlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgVGVtcGxhdGVSZWYpXG4gICAgXSwgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwiZGF5dmlld0luYWN0aXZlTm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwiZm9ybWF0SG91ckNvbHVtblwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJmb3JtYXREYXlUaXRsZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhbGxEYXlMYWJlbFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJob3VyUGFydHNcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJldmVudFNvdXJjZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEZ1bmN0aW9uKVxuICAgIF0sIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcIm1hcmtEaXNhYmxlZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJsb2NhbGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwiZGF0ZUZvcm1hdHRlclwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJkaXJcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG4gICAgXSwgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2Nyb2xsVG9Ib3VyXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJwcmVzZXJ2ZVNjcm9sbFBvc2l0aW9uXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJsb2NrU3dpcGVUb1ByZXZcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImxvY2tTd2lwZXNcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG4gICAgXSwgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwic3RhcnRIb3VyXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuICAgIF0sIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcImVuZEhvdXJcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgRGF5Vmlld0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2xpZGVyT3B0aW9uc1wiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJob3VyU2VnbWVudHNcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBPdXRwdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcIm9uUmFuZ2VDaGFuZ2VkXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgT3V0cHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJvbkV2ZW50U2VsZWN0ZWRcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBPdXRwdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIERheVZpZXdDb21wb25lbnQucHJvdG90eXBlLCBcIm9uVGltZVNlbGVjdGVkXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgT3V0cHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBEYXlWaWV3Q29tcG9uZW50LnByb3RvdHlwZSwgXCJvblRpdGxlQ2hhbmdlZFwiLCB2b2lkIDApO1xuICAgIERheVZpZXdDb21wb25lbnQgPSBEYXlWaWV3Q29tcG9uZW50XzEgPSB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBDb21wb25lbnQoe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkYXl2aWV3JyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPGlvbi1zbGlkZXMgI2RheVNsaWRlciBbb3B0aW9uc109XFxcInNsaWRlck9wdGlvbnNcXFwiIFtkaXJdPVxcXCJkaXJcXFwiIChpb25TbGlkZURpZENoYW5nZSk9XFxcIm9uU2xpZGVDaGFuZ2VkKClcXFwiIGNsYXNzPVxcXCJzbGlkZXMtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8aW9uLXNsaWRlIGNsYXNzPVxcXCJzbGlkZS1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXl2aWV3LWFsbGRheS10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXl2aWV3LWFsbGRheS1sYWJlbFxcXCI+e3thbGxEYXlMYWJlbH19PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXl2aWV3LWFsbGRheS1jb250ZW50LXdyYXBwZXIgc2Nyb2xsLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgZGF5dmlldy1hbGxkYXktY29udGVudC10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjYWxlbmRhci1jZWxsXFxcIiBbbmdDbGFzc109XFxcInsnY2FsZW5kYXItZXZlbnQtd3JhcCc6dmlld3NbMF0uYWxsRGF5RXZlbnRzLmxlbmd0aD4wfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XFxcIntoZWlnaHQ6IDI1KnZpZXdzWzBdLmFsbERheUV2ZW50cy5sZW5ndGgrJ3B4J31cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcIjA9PT1jdXJyZW50Vmlld0luZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJkYXl2aWV3QWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcInthbGxEYXlFdmVudHM6dmlld3NbMF0uYWxsRGF5RXZlbnRzLGV2ZW50VGVtcGxhdGU6ZGF5dmlld0FsbERheUV2ZW50VGVtcGxhdGV9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY2FsZW5kYXItY2VsbFxcXCIgKm5nSWY9XFxcIjAhPT1jdXJyZW50Vmlld0luZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJkYXl2aWV3SW5hY3RpdmVBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie2FsbERheUV2ZW50czp2aWV3c1swXS5hbGxEYXlFdmVudHN9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8aW5pdC1wb3NpdGlvbi1zY3JvbGwgKm5nSWY9XFxcIjA9PT1jdXJyZW50Vmlld0luZGV4XFxcIiBjbGFzcz1cXFwiZGF5dmlldy1ub3JtYWwtZXZlbnQtY29udGFpbmVyXFxcIiBbaW5pdFBvc2l0aW9uXT1cXFwiaW5pdFNjcm9sbFBvc2l0aW9uXFxcIiBbZW1pdEV2ZW50XT1cXFwicHJlc2VydmVTY3JvbGxQb3NpdGlvblxcXCIgKG9uU2Nyb2xsKT1cXFwic2V0U2Nyb2xsUG9zaXRpb24oJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWZpeGVkIGRheXZpZXctbm9ybWFsLWV2ZW50LXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHRtIG9mIHZpZXdzWzBdLnJvd3M7IGxldCBpID0gaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNhbGVuZGFyLWhvdXItY29sdW1uIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aG91ckNvbHVtbkxhYmVsc1tpXX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY2FsZW5kYXItY2VsbFxcXCIgdGFwcGFibGUgKGNsaWNrKT1cXFwic2VsZWN0KHRtLnRpbWUsIHRtLmV2ZW50cylcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwiZGF5dmlld05vcm1hbEV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcInt0bTp0bSwgaG91clBhcnRzOiBob3VyUGFydHMsIGV2ZW50VGVtcGxhdGU6ZGF5dmlld05vcm1hbEV2ZW50VGVtcGxhdGV9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgPC9pbml0LXBvc2l0aW9uLXNjcm9sbD5cXG4gICAgICAgICAgICAgICAgPGluaXQtcG9zaXRpb24tc2Nyb2xsICpuZ0lmPVxcXCIwIT09Y3VycmVudFZpZXdJbmRleFxcXCIgY2xhc3M9XFxcImRheXZpZXctbm9ybWFsLWV2ZW50LWNvbnRhaW5lclxcXCIgW2luaXRQb3NpdGlvbl09XFxcImluaXRTY3JvbGxQb3NpdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWZpeGVkIGRheXZpZXctbm9ybWFsLWV2ZW50LXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHRtIG9mIHZpZXdzWzBdLnJvd3M7IGxldCBpID0gaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNhbGVuZGFyLWhvdXItY29sdW1uIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aG91ckNvbHVtbkxhYmVsc1tpXX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY2FsZW5kYXItY2VsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJkYXl2aWV3SW5hY3RpdmVOb3JtYWxFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVxcXCJ7dG06dG0sIGhvdXJQYXJ0czogaG91clBhcnRzfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvaW5pdC1wb3NpdGlvbi1zY3JvbGw+XFxuICAgICAgICAgICAgPC9pb24tc2xpZGU+XFxuICAgICAgICAgICAgPGlvbi1zbGlkZSBjbGFzcz1cXFwic2xpZGUtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF5dmlldy1hbGxkYXktdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF5dmlldy1hbGxkYXktbGFiZWxcXFwiPnt7YWxsRGF5TGFiZWx9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF5dmlldy1hbGxkYXktY29udGVudC13cmFwcGVyIHNjcm9sbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIGRheXZpZXctYWxsZGF5LWNvbnRlbnQtdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY2FsZW5kYXItY2VsbFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2NhbGVuZGFyLWV2ZW50LXdyYXAnOnZpZXdzWzFdLmFsbERheUV2ZW50cy5sZW5ndGg+MH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVxcXCJ7aGVpZ2h0OiAyNSp2aWV3c1sxXS5hbGxEYXlFdmVudHMubGVuZ3RoKydweCd9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCIxPT09Y3VycmVudFZpZXdJbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwiZGF5dmlld0FsbERheUV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVxcXCJ7YWxsRGF5RXZlbnRzOnZpZXdzWzFdLmFsbERheUV2ZW50cyxldmVudFRlbXBsYXRlOmRheXZpZXdBbGxEYXlFdmVudFRlbXBsYXRlfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNhbGVuZGFyLWNlbGxcXFwiICpuZ0lmPVxcXCIxIT09Y3VycmVudFZpZXdJbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwiZGF5dmlld0luYWN0aXZlQWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcInthbGxEYXlFdmVudHM6dmlld3NbMV0uYWxsRGF5RXZlbnRzfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGluaXQtcG9zaXRpb24tc2Nyb2xsICpuZ0lmPVxcXCIxPT09Y3VycmVudFZpZXdJbmRleFxcXCIgY2xhc3M9XFxcImRheXZpZXctbm9ybWFsLWV2ZW50LWNvbnRhaW5lclxcXCIgW2luaXRQb3NpdGlvbl09XFxcImluaXRTY3JvbGxQb3NpdGlvblxcXCIgW2VtaXRFdmVudF09XFxcInByZXNlcnZlU2Nyb2xsUG9zaXRpb25cXFwiIChvblNjcm9sbCk9XFxcInNldFNjcm9sbFBvc2l0aW9uKCRldmVudClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1maXhlZCBkYXl2aWV3LW5vcm1hbC1ldmVudC10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCB0bSBvZiB2aWV3c1sxXS5yb3dzOyBsZXQgaSA9IGluZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjYWxlbmRhci1ob3VyLWNvbHVtbiB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2hvdXJDb2x1bW5MYWJlbHNbaV19fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNhbGVuZGFyLWNlbGxcXFwiIHRhcHBhYmxlIChjbGljayk9XFxcInNlbGVjdCh0bS50aW1lLCB0bS5ldmVudHMpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XFxcImRheXZpZXdOb3JtYWxFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVxcXCJ7dG06dG0sIGhvdXJQYXJ0czogaG91clBhcnRzLCBldmVudFRlbXBsYXRlOmRheXZpZXdOb3JtYWxFdmVudFRlbXBsYXRlfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvaW5pdC1wb3NpdGlvbi1zY3JvbGw+XFxuICAgICAgICAgICAgICAgIDxpbml0LXBvc2l0aW9uLXNjcm9sbCAqbmdJZj1cXFwiMSE9PWN1cnJlbnRWaWV3SW5kZXhcXFwiIGNsYXNzPVxcXCJkYXl2aWV3LW5vcm1hbC1ldmVudC1jb250YWluZXJcXFwiIFtpbml0UG9zaXRpb25dPVxcXCJpbml0U2Nyb2xsUG9zaXRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1maXhlZCBkYXl2aWV3LW5vcm1hbC1ldmVudC10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCB0bSBvZiB2aWV3c1sxXS5yb3dzOyBsZXQgaSA9IGluZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjYWxlbmRhci1ob3VyLWNvbHVtbiB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2hvdXJDb2x1bW5MYWJlbHNbaV19fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNhbGVuZGFyLWNlbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwiZGF5dmlld0luYWN0aXZlTm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie3RtOnRtLCBob3VyUGFydHM6IGhvdXJQYXJ0c31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8L2luaXQtcG9zaXRpb24tc2Nyb2xsPlxcbiAgICAgICAgICAgIDwvaW9uLXNsaWRlPlxcbiAgICAgICAgICAgIDxpb24tc2xpZGUgY2xhc3M9XFxcInNsaWRlLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRheXZpZXctYWxsZGF5LXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRheXZpZXctYWxsZGF5LWxhYmVsXFxcIj57e2FsbERheUxhYmVsfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRheXZpZXctYWxsZGF5LWNvbnRlbnQtd3JhcHBlciBzY3JvbGwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCBkYXl2aWV3LWFsbGRheS1jb250ZW50LXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNhbGVuZGFyLWNlbGxcXFwiIFtuZ0NsYXNzXT1cXFwieydjYWxlbmRhci1ldmVudC13cmFwJzp2aWV3c1syXS5hbGxEYXlFdmVudHMubGVuZ3RoPjB9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cXFwie2hlaWdodDogMjUqdmlld3NbMl0uYWxsRGF5RXZlbnRzLmxlbmd0aCsncHgnfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwiMj09PWN1cnJlbnRWaWV3SW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XFxcImRheXZpZXdBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie2FsbERheUV2ZW50czp2aWV3c1syXS5hbGxEYXlFdmVudHMsZXZlbnRUZW1wbGF0ZTpkYXl2aWV3QWxsRGF5RXZlbnRUZW1wbGF0ZX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjYWxlbmRhci1jZWxsXFxcIiAqbmdJZj1cXFwiMiE9PWN1cnJlbnRWaWV3SW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XFxcImRheXZpZXdJbmFjdGl2ZUFsbERheUV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVxcXCJ7YWxsRGF5RXZlbnRzOnZpZXdzWzJdLmFsbERheUV2ZW50c31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxpbml0LXBvc2l0aW9uLXNjcm9sbCAqbmdJZj1cXFwiMj09PWN1cnJlbnRWaWV3SW5kZXhcXFwiIGNsYXNzPVxcXCJkYXl2aWV3LW5vcm1hbC1ldmVudC1jb250YWluZXJcXFwiIFtpbml0UG9zaXRpb25dPVxcXCJpbml0U2Nyb2xsUG9zaXRpb25cXFwiIFtlbWl0RXZlbnRdPVxcXCJwcmVzZXJ2ZVNjcm9sbFBvc2l0aW9uXFxcIiAob25TY3JvbGwpPVxcXCJzZXRTY3JvbGxQb3NpdGlvbigkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtZml4ZWQgZGF5dmlldy1ub3JtYWwtZXZlbnQtdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgdG0gb2Ygdmlld3NbMl0ucm93czsgbGV0IGkgPSBpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY2FsZW5kYXItaG91ci1jb2x1bW4gdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tob3VyQ29sdW1uTGFiZWxzW2ldfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjYWxlbmRhci1jZWxsXFxcIiB0YXBwYWJsZSAoY2xpY2spPVxcXCJzZWxlY3QodG0udGltZSwgdG0uZXZlbnRzKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJkYXl2aWV3Tm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cXFwie3RtOnRtLCBob3VyUGFydHM6IGhvdXJQYXJ0cywgZXZlbnRUZW1wbGF0ZTpkYXl2aWV3Tm9ybWFsRXZlbnRUZW1wbGF0ZX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8L2luaXQtcG9zaXRpb24tc2Nyb2xsPlxcbiAgICAgICAgICAgICAgICA8aW5pdC1wb3NpdGlvbi1zY3JvbGwgKm5nSWY9XFxcIjIhPT1jdXJyZW50Vmlld0luZGV4XFxcIiBjbGFzcz1cXFwiZGF5dmlldy1ub3JtYWwtZXZlbnQtY29udGFpbmVyXFxcIiBbaW5pdFBvc2l0aW9uXT1cXFwiaW5pdFNjcm9sbFBvc2l0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtZml4ZWQgZGF5dmlldy1ub3JtYWwtZXZlbnQtdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgdG0gb2Ygdmlld3NbMl0ucm93czsgbGV0IGkgPSBpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY2FsZW5kYXItaG91ci1jb2x1bW4gdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tob3VyQ29sdW1uTGFiZWxzW2ldfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjYWxlbmRhci1jZWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XFxcImRheXZpZXdJbmFjdGl2ZU5vcm1hbEV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcInt0bTp0bSwgaG91clBhcnRzOiBob3VyUGFydHN9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgPC9pbml0LXBvc2l0aW9uLXNjcm9sbD5cXG4gICAgICAgICAgICA8L2lvbi1zbGlkZT5cXG4gICAgICAgIDwvaW9uLXNsaWRlcz5cXG4gICAgXCIsXG4gICAgICAgICAgICBzdHlsZXM6IFtcIlxcbiAgICAgICAgLnRhYmxlLWZpeGVkIHtcXG4gICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJsZSB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLCAudGFibGUgPiB0Ym9keSA+IHRyID4gdGgsIC50YWJsZSA+IHRmb290ID4gdHIgPiB0aCwgLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRkLFxcbiAgICAgICAgLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLCAudGFibGUgPiB0Zm9vdCA+IHRyID4gdGQge1xcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFibGUgPiB0aGVhZDpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkID4gdGgsIC50YWJsZSA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZCB7XFxuICAgICAgICAgIGJvcmRlci10b3A6IDBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJsZSA+IHRib2R5ICsgdGJvZHkge1xcbiAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJsZS1ib3JkZXJlZCB7XFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgsIC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0aCwgLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRoLFxcbiAgICAgICAgLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkLCAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgsIC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0ZCB7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRkLCAudGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkgPiB0aCB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZjlcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jYWxlbmRhci1ob3VyLWNvbHVtbiB7XFxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNhbGVuZGFyLWV2ZW50LXdyYXAge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY2FsZW5kYXItZXZlbnQge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHBhZGRpbmc6IDJweDtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zbGlkZXMtY29udGFpbmVyIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2xpZGUtY29udGFpbmVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jYWxlbmRhci1jZWxsIHtcXG4gICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgICBoZWlnaHQ6IDM3cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGF5dmlldy1hbGxkYXktbGFiZWwge1xcbiAgICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgW2Rpcj1cXFwicnRsXFxcIl0gLmRheXZpZXctYWxsZGF5LWxhYmVsIHtcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kYXl2aWV3LWFsbGRheS1jb250ZW50LXdyYXBwZXIge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgaGVpZ2h0OiA1MXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgW2Rpcj1cXFwicnRsXFxcIl0gLmRheXZpZXctYWxsZGF5LWNvbnRlbnQtd3JhcHBlciB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGF5dmlldy1hbGxkYXktY29udGVudC10YWJsZSB7XFxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGF5dmlldy1hbGxkYXktY29udGVudC10YWJsZSB0ZCB7XFxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kYXl2aWV3LWFsbGRheS10YWJsZSB7XFxuICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRheXZpZXctbm9ybWFsLWV2ZW50LWNvbnRhaW5lciB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2Nyb2xsLWNvbnRlbnQge1xcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhcixcXG4gICAgICAgICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC5jYWxlbmRhci1ob3VyLWNvbHVtbiB7XFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAgICAgICAuZGF5dmlldy1hbGxkYXktbGFiZWwsIC5jYWxlbmRhci1ob3VyLWNvbHVtbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDMxcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5kYXl2aWV3LWFsbGRheS1sYWJlbCB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAudGFibGUgPiB0Ym9keSA+IHRyID4gdGQuY2FsZW5kYXItaG91ci1jb2x1bW4ge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLmRheXZpZXctYWxsZGF5LWxhYmVsIHtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAuZGF5dmlldy1hbGxkYXktY29udGVudC13cmFwcGVyIHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzFweDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBbZGlyPVxcXCJydGxcXFwiXSAuZGF5dmlldy1hbGxkYXktY29udGVudC13cmFwcGVyIHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMxcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgXCJdLFxuICAgICAgICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuICAgICAgICB9KSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0NhbGVuZGFyU2VydmljZSwgRWxlbWVudFJlZl0pXG4gICAgXSwgRGF5Vmlld0NvbXBvbmVudCk7XG4gICAgcmV0dXJuIERheVZpZXdDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgRGF5Vmlld0NvbXBvbmVudCB9O1xuIl19

      /***/

    },

    /***/
    "TUkU":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function TUkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab2.page */
      "JZ9U");
      /* harmony import */


      var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic2-calendar */
      "oksz");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
        }])],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "VTDg":
    /*!***************************************************************************!*\
      !*** ./node_modules/ionic2-calendar/__ivy_ngcc__/init-position-scroll.js ***!
      \***************************************************************************/

    /*! exports provided: initPositionScrollComponent */

    /***/
    function VTDg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initPositionScrollComponent", function () {
        return initPositionScrollComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var initPositionScrollComponent =
      /** @class */
      function () {
        function initPositionScrollComponent(el) {
          this.onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.listenerAttached = false;
          this.element = el;
        }

        initPositionScrollComponent.prototype.ngOnChanges = function (changes) {
          var initPosition = changes['initPosition'];

          if (initPosition && initPosition.currentValue !== undefined && this.scrollContent) {
            var me_1 = this;
            setTimeout(function () {
              me_1.scrollContent.scrollTop = initPosition.currentValue;
            }, 0);
          }
        };

        initPositionScrollComponent.prototype.ngAfterViewInit = function () {
          var scrollContent = this.scrollContent = this.element.nativeElement.querySelector('.scroll-content');

          if (this.initPosition !== undefined) {
            scrollContent.scrollTop = this.initPosition;
          }

          if (this.emitEvent && !this.listenerAttached) {
            var onScroll_1 = this.onScroll;

            this.handler = function () {
              onScroll_1.emit(scrollContent.scrollTop);
            };

            this.listenerAttached = true;
            scrollContent.addEventListener('scroll', this.handler);
          }
        };

        initPositionScrollComponent.prototype.ngOnDestroy = function () {
          if (this.listenerAttached) {
            this.scrollContent.removeEventListener('scroll', this.handler);
          }
        };

        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], initPositionScrollComponent.prototype, "initPosition", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], initPositionScrollComponent.prototype, "emitEvent", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], initPositionScrollComponent.prototype, "onScroll", void 0);
        initPositionScrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], initPositionScrollComponent);

        initPositionScrollComponent.ɵfac = function initPositionScrollComponent_Factory(t) {
          return new (t || initPositionScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
        };

        initPositionScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: initPositionScrollComponent,
          selectors: [["init-position-scroll"]],
          inputs: {
            initPosition: "initPosition",
            emitEvent: "emitEvent"
          },
          outputs: {
            onScroll: "onScroll"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
          ngContentSelectors: _c0,
          decls: 2,
          vars: 0,
          consts: [[1, "scroll-content", 2, "height", "100%"]],
          template: function initPositionScrollComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
          },
          styles: ["\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }        \n    "],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](initPositionScrollComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
            args: [{
              selector: 'init-position-scroll',
              template: "\n        <div class=\"scroll-content\" style=\"height:100%\">\n            <ng-content></ng-content>\n        </div>\n    ",
              styles: ["\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }        \n    "],
              encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
          }], function () {
            return [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
            }];
          }, {
            onScroll: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
            }],
            initPosition: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            emitEvent: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }]
          });
        })();

        return initPositionScrollComponent;
      }(); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1wb3NpdGlvbi1zY3JvbGwuanMiLCJzb3VyY2VzIjpbImluaXQtcG9zaXRpb24tc2Nyb2xsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQThDc0QsQUFPL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbnZhciBpbml0UG9zaXRpb25TY3JvbGxDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gaW5pdFBvc2l0aW9uU2Nyb2xsQ29tcG9uZW50KGVsKSB7XG4gICAgICAgIHRoaXMub25TY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJBdHRhY2hlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbDtcbiAgICB9XG4gICAgaW5pdFBvc2l0aW9uU2Nyb2xsQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIHZhciBpbml0UG9zaXRpb24gPSBjaGFuZ2VzWydpbml0UG9zaXRpb24nXTtcbiAgICAgICAgaWYgKGluaXRQb3NpdGlvbiAmJiBpbml0UG9zaXRpb24uY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zY3JvbGxDb250ZW50KSB7XG4gICAgICAgICAgICB2YXIgbWVfMSA9IHRoaXM7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtZV8xLnNjcm9sbENvbnRlbnQuc2Nyb2xsVG9wID0gaW5pdFBvc2l0aW9uLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpbml0UG9zaXRpb25TY3JvbGxDb21wb25lbnQucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNjcm9sbENvbnRlbnQgPSB0aGlzLnNjcm9sbENvbnRlbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWNvbnRlbnQnKTtcbiAgICAgICAgaWYgKHRoaXMuaW5pdFBvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNjcm9sbENvbnRlbnQuc2Nyb2xsVG9wID0gdGhpcy5pbml0UG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW1pdEV2ZW50ICYmICF0aGlzLmxpc3RlbmVyQXR0YWNoZWQpIHtcbiAgICAgICAgICAgIHZhciBvblNjcm9sbF8xID0gdGhpcy5vblNjcm9sbDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvblNjcm9sbF8xLmVtaXQoc2Nyb2xsQ29udGVudC5zY3JvbGxUb3ApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJBdHRhY2hlZCA9IHRydWU7XG4gICAgICAgICAgICBzY3JvbGxDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGluaXRQb3NpdGlvblNjcm9sbENvbXBvbmVudC5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyQXR0YWNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXG4gICAgXSwgaW5pdFBvc2l0aW9uU2Nyb2xsQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpbml0UG9zaXRpb25cIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIGluaXRQb3NpdGlvblNjcm9sbENvbXBvbmVudC5wcm90b3R5cGUsIFwiZW1pdEV2ZW50XCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgT3V0cHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBpbml0UG9zaXRpb25TY3JvbGxDb21wb25lbnQucHJvdG90eXBlLCBcIm9uU2Nyb2xsXCIsIHZvaWQgMCk7XG4gICAgaW5pdFBvc2l0aW9uU2Nyb2xsQ29tcG9uZW50ID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5pdC1wb3NpdGlvbi1zY3JvbGwnLFxuICAgICAgICAgICAgdGVtcGxhdGU6IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzY3JvbGwtY29udGVudFxcXCIgc3R5bGU9XFxcImhlaWdodDoxMDAlXFxcIj5cXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgXCIsXG4gICAgICAgICAgICBzdHlsZXM6IFtcIlxcbiAgICAgICAgLnNjcm9sbC1jb250ZW50IHtcXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgICAgIH0gICAgICAgIFxcbiAgICBcIl0sXG4gICAgICAgICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG4gICAgICAgIH0pLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbRWxlbWVudFJlZl0pXG4gICAgXSwgaW5pdFBvc2l0aW9uU2Nyb2xsQ29tcG9uZW50KTtcbiAgICByZXR1cm4gaW5pdFBvc2l0aW9uU2Nyb2xsQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IGluaXRQb3NpdGlvblNjcm9sbENvbXBvbmVudCB9O1xuIl19

      /***/

    },

    /***/
    "WwpI":
    /*!**************************************************!*\
      !*** ./node_modules/ionic2-calendar/calendar.js ***!
      \**************************************************/

    /*! exports provided: Step, CalendarComponent */

    /***/
    function WwpI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Step", function () {
        return Step;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
        return CalendarComponent;
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


      var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calendar.service */
      "4tiO");

      var Step;

      (function (Step) {
        Step[Step["QuarterHour"] = 15] = "QuarterHour";
        Step[Step["HalfHour"] = 30] = "HalfHour";
        Step[Step["Hour"] = 60] = "Hour";
      })(Step || (Step = {}));

      var CalendarComponent =
      /** @class */
      function () {
        function CalendarComponent(calendarService, appLocale) {
          this.calendarService = calendarService;
          this.appLocale = appLocale;
          this.eventSource = [];
          this.calendarMode = 'month';
          this.formatDay = 'd';
          this.formatDayHeader = 'EEE';
          this.formatDayTitle = 'MMMM dd, yyyy';
          this.formatWeekTitle = 'MMMM yyyy, \'Week\' w';
          this.formatMonthTitle = 'MMMM yyyy';
          this.formatWeekViewDayHeader = 'EEE d';
          this.formatHourColumn = 'ha';
          this.showEventDetail = true;
          this.startingDayMonth = 0;
          this.startingDayWeek = 0;
          this.allDayLabel = 'all day';
          this.noEventsLabel = 'No Events';
          this.queryMode = 'local';
          this.step = Step.Hour;
          this.timeInterval = 60;
          this.autoSelect = true;
          this.dir = "";
          this.scrollToHour = 0;
          this.preserveScrollPosition = false;
          this.lockSwipeToPrev = false;
          this.lockSwipes = false;
          this.locale = "";
          this.startHour = 0;
          this.endHour = 24;
          this.onCurrentDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.hourParts = 1;
          this.hourSegments = 1;
          this.locale = appLocale;
        }

        Object.defineProperty(CalendarComponent.prototype, "currentDate", {
          get: function get() {
            return this._currentDate;
          },
          set: function set(val) {
            if (!val) {
              val = new Date();
            }

            this._currentDate = val;
            this.calendarService.setCurrentDate(val, true);
            this.onCurrentDateChanged.emit(this._currentDate);
          },
          enumerable: true,
          configurable: true
        });

        CalendarComponent.prototype.ngOnInit = function () {
          var _this = this;

          if (this.autoSelect) {
            if (this.autoSelect.toString() === 'false') {
              this.autoSelect = false;
            } else {
              this.autoSelect = true;
            }
          }

          this.hourSegments = 60 / this.timeInterval;
          this.hourParts = 60 / this.step;

          if (this.hourParts <= this.hourSegments) {
            this.hourParts = 1;
          } else {
            this.hourParts = this.hourParts / this.hourSegments;
          }

          this.startHour = parseInt(this.startHour.toString());
          this.endHour = parseInt(this.endHour.toString());
          this.calendarService.queryMode = this.queryMode;
          this.currentDateChangedFromChildrenSubscription = this.calendarService.currentDateChangedFromChildren$.subscribe(function (currentDate) {
            _this._currentDate = currentDate;

            _this.onCurrentDateChanged.emit(currentDate);
          });
        };

        CalendarComponent.prototype.ngOnDestroy = function () {
          if (this.currentDateChangedFromChildrenSubscription) {
            this.currentDateChangedFromChildrenSubscription.unsubscribe();
            this.currentDateChangedFromChildrenSubscription = null;
          }
        };

        CalendarComponent.prototype.rangeChanged = function (range) {
          this.onRangeChanged.emit(range);
        };

        CalendarComponent.prototype.eventSelected = function (event) {
          this.onEventSelected.emit(event);
        };

        CalendarComponent.prototype.timeSelected = function (timeSelected) {
          this.onTimeSelected.emit(timeSelected);
        };

        CalendarComponent.prototype.titleChanged = function (title) {
          this.onTitleChanged.emit(title);
        };

        CalendarComponent.prototype.loadEvents = function () {
          this.calendarService.loadEvents();
        };

        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Date])], CalendarComponent.prototype, "currentDate", null);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], CalendarComponent.prototype, "eventSource", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "calendarMode", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatDay", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatDayHeader", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatDayTitle", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatWeekTitle", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatMonthTitle", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatWeekViewDayHeader", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatHourColumn", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CalendarComponent.prototype, "showEventDetail", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "startingDayMonth", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "startingDayWeek", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "allDayLabel", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "noEventsLabel", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "queryMode", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "step", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "timeInterval", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CalendarComponent.prototype, "autoSelect", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)], CalendarComponent.prototype, "markDisabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "monthviewDisplayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "monthviewEventDetailTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewHeaderTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewAllDayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewNormalEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewAllDayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewNormalEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewInactiveAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewInactiveNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewInactiveAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewInactiveNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "dateFormatter", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "dir", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "scrollToHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CalendarComponent.prototype, "preserveScrollPosition", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CalendarComponent.prototype, "lockSwipeToPrev", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CalendarComponent.prototype, "lockSwipes", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "locale", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "startHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "endHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "sliderOptions", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "onCurrentDateChanged", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "onRangeChanged", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "onEventSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "onTimeSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "onTitleChanged", void 0);
        CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'calendar',
          template: "\n        <ng-template #monthviewDefaultDisplayEventTemplate let-view=\"view\" let-row=\"row\" let-col=\"col\">\n            {{view.dates[row*7+col].label}}\n        </ng-template>\n        <ng-template #monthviewDefaultEventDetailTemplate let-showEventDetail=\"showEventDetail\" let-selectedDate=\"selectedDate\" let-noEventsLabel=\"noEventsLabel\">\n            <ion-list class=\"event-detail-container\" has-bouncing=\"false\" *ngIf=\"showEventDetail\" overflow-scroll=\"false\">\n                <ion-item *ngFor=\"let event of selectedDate?.events\" (click)=\"eventSelected(event)\">\n                        <span *ngIf=\"!event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{event.startTime|date: 'HH:mm'}}\n                            -\n                            {{event.endTime|date: 'HH:mm'}}\n                        </span>\n                    <span *ngIf=\"event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{allDayLabel}}</span>\n                    <span class=\"event-detail\">  |  {{event.title}}</span>\n                </ion-item>\n                <ion-item *ngIf=\"selectedDate?.events.length==0\">\n                    <div class=\"no-events-label\">{{noEventsLabel}}</div>\n                </ion-item>\n            </ion-list>\n        </ng-template>\n        <ng-template #defaultWeekviewHeaderTemplate let-viewDate=\"viewDate\">\n            {{ viewDate.dayHeader }}\n        </ng-template>\n        <ng-template #defaultAllDayEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultNormalEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultWeekViewAllDayEventSectionTemplate let-day=\"day\" let-eventTemplate=\"eventTemplate\">\n            <div [ngClass]=\"{'calendar-event-wrap': day.events}\" *ngIf=\"day.events\"\n                 [ngStyle]=\"{height: 25*day.events.length+'px'}\">\n                <div *ngFor=\"let displayEvent of day.events\" class=\"calendar-event\" tappable\n                     (click)=\"eventSelected(displayEvent.event)\"\n                     [ngStyle]=\"{top: 25*displayEvent.position+'px', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+'%', height: '25px'}\">\n                    <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                                 [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #defaultDayViewAllDayEventSectionTemplate let-allDayEvents=\"allDayEvents\" let-eventTemplate=\"eventTemplate\">\n            <div *ngFor=\"let displayEvent of allDayEvents; let eventIndex=index\"\n                 class=\"calendar-event\" tappable\n                 (click)=\"eventSelected(displayEvent.event)\"\n                 [ngStyle]=\"{top: 25*eventIndex+'px',width: '100%',height:'25px'}\">\n                <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                             [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                </ng-template>\n            </div>\n        </ng-template>\n        <ng-template #defaultNormalEventSectionTemplate let-tm=\"tm\" let-hourParts=\"hourParts\" let-eventTemplate=\"eventTemplate\">\n            <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                <div *ngFor=\"let displayEvent of tm.events\" class=\"calendar-event\" tappable\n                     (click)=\"eventSelected(displayEvent.event)\"\n                     [ngStyle]=\"{top: (37*displayEvent.startOffset/hourParts)+'px',left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}\">\n                    <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                                 [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #defaultInactiveAllDayEventSectionTemplate>\n        </ng-template>\n        <ng-template #defaultInactiveNormalEventSectionTemplate>\n        </ng-template>\n\n        <div [ngSwitch]=\"calendarMode\" class=\"{{calendarMode}}view-container\">\n            <monthview *ngSwitchCase=\"'month'\"\n                [formatDay]=\"formatDay\"\n                [formatDayHeader]=\"formatDayHeader\"\n                [formatMonthTitle]=\"formatMonthTitle\"\n                [startingDayMonth]=\"startingDayMonth\"\n                [showEventDetail]=\"showEventDetail\"\n                [noEventsLabel]=\"noEventsLabel\"\n                [autoSelect]=\"autoSelect\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [monthviewDisplayEventTemplate]=\"monthviewDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewInactiveDisplayEventTemplate]=\"monthviewInactiveDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewEventDetailTemplate]=\"monthviewEventDetailTemplate||monthviewDefaultEventDetailTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [sliderOptions]=\"sliderOptions\"       \n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </monthview>\n            <weekview *ngSwitchCase=\"'week'\"\n                [formatWeekTitle]=\"formatWeekTitle\"\n                [formatWeekViewDayHeader]=\"formatWeekViewDayHeader\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [startingDayWeek]=\"startingDayWeek\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [autoSelect]=\"autoSelect\"\n                [hourSegments]=\"hourSegments\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [weekviewHeaderTemplate]=\"weekviewHeaderTemplate||defaultWeekviewHeaderTemplate\"\n                [weekviewAllDayEventTemplate]=\"weekviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [weekviewNormalEventTemplate]=\"weekviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [weekviewAllDayEventSectionTemplate]=\"weekviewAllDayEventSectionTemplate||defaultWeekViewAllDayEventSectionTemplate\"\n                [weekviewNormalEventSectionTemplate]=\"weekviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate\"\n                [weekviewInactiveAllDayEventSectionTemplate]=\"weekviewInactiveAllDayEventSectionTemplate||defaultInactiveAllDayEventSectionTemplate\"\n                [weekviewInactiveNormalEventSectionTemplate]=\"weekviewInactiveNormalEventSectionTemplate||defaultInactiveNormalEventSectionTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [startHour]=\"startHour\"\n                [endHour]=\"endHour\"\n                [sliderOptions]=\"sliderOptions\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </weekview>\n            <dayview *ngSwitchCase=\"'day'\"\n                [formatDayTitle]=\"formatDayTitle\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [hourSegments]=\"hourSegments\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [dayviewAllDayEventTemplate]=\"dayviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [dayviewNormalEventTemplate]=\"dayviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [dayviewAllDayEventSectionTemplate]=\"dayviewAllDayEventSectionTemplate||defaultDayViewAllDayEventSectionTemplate\" \n                [dayviewNormalEventSectionTemplate]=\"dayviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate\"\n                [dayviewInactiveAllDayEventSectionTemplate]=\"dayviewInactiveAllDayEventSectionTemplate||defaultInactiveAllDayEventSectionTemplate\" \n                [dayviewInactiveNormalEventSectionTemplate]=\"dayviewInactiveNormalEventSectionTemplate||defaultInactiveNormalEventSectionTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [startHour]=\"startHour\"\n                [endHour]=\"endHour\"\n                [sliderOptions]=\"sliderOptions\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </dayview>\n        </div>\n    ",
          styles: ["\n        :host > div { height: 100%; }\n\n        .event-detail-container {\n          border-top: 2px darkgrey solid;\n        }\n\n        .no-events-label {\n          font-weight: bold;\n          color: darkgrey;\n          text-align: center;\n        }\n\n        .event-detail {\n          cursor: pointer;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .monthview-eventdetail-timecolumn {\n          width: 110px;\n          overflow: hidden;\n        }\n\n        .calendar-event-inner {\n          overflow: hidden;\n          background-color: #3a87ad;\n          color: white;\n          height: 100%;\n          width: 100%;\n          padding: 2px;\n          line-height: 15px;\n          text-align: initial;\n        }\n\n        @media (max-width: 750px) {\n          .calendar-event-inner {\n            font-size: 12px;\n          }\n        }\n    "],
          providers: [_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]]
        }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"], String])], CalendarComponent);
        return CalendarComponent;
      }();
      /***/

    },

    /***/
    "e9nj":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function e9nj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Dashboard\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n <!--  <ion-item lines=\"none\" class=\"profile-top\">\n    <ion-avatar item-start>\n      <img *ngIf=\"userinfo?.pic !== ''\" src=\"{{userinfo.pic}}\">\n      <ion-icon *ngIf=\"userinfo?.pic == ''\" name=\"contact\" size=\"large\" ></ion-icon>\n    </ion-avatar>\n    <p>&nbsp; Hello there, {{userinfo.firstname}}!</p>\n  </ion-item>\n\n  <ion-list class=\"profile-bottom\"> -->\n\n    <!-- <ion-item>\n      <ion-label position=\"stacked\">Name</ion-label>\n      <ion-text>{{userinfo.firstname}} {{userinfo.lastname}}</ion-text>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label position=\"stacked\">Organization</ion-label>\n      <ion-text>{{userinfo.organization}}</ion-text>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label position=\"stacked\">Mobile</ion-label>\n      <ion-text>{{userinfo.phone}}</ion-text>\n    </ion-item> -->\n\n<!--     <br>\n    <ion-item lines=\"none\">\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\" >\n          <ion-col class=\"padding-left-none\">\n            <ion-label position=\"stacked\">Current Theme <br/> (Tap to change)</ion-label> \n          </ion-col>\n          <ion-col>\n            <ion-button id=\"themecolor\" *ngIf=\"userinfo?.theme=='Dark'\" type=\"button\" size=\"default\" color=\"dark\" (click)=\"switchTheme()\"><ion-icon name=\"color-palette\"></ion-icon>&nbsp; {{userinfo.theme}}</ion-button>\n            <ion-button id=\"themecolor\" *ngIf=\"userinfo?.theme=='Light'\" type=\"button\" size=\"default\" color=\"dark\" (click)=\"switchTheme()\"><ion-icon name=\"color-palette\"></ion-icon>&nbsp; {{userinfo.theme}}</ion-button>\n          </ion-col>          \n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item class=\"profile-bottom\">\n      <ion-label position=\"stacked\">Notes</ion-label>\n      <ion-textarea auto-grow=\"true\" *ngIf=\"userinfo?.notes !== ''\" value=\"{{userinfo.notes}}\" name=\"usernotes\"></ion-textarea>\n      <ion-textarea auto-grow=\"true\" *ngIf=\"userinfo?.notes == ''\" placeholder=\"Jot something down\" name=\"usernotes\"></ion-textarea>\n    </ion-item>\n\n  </ion-list> -->\n\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"today()\">Today</ion-button>\n  </ion-buttons>\n\n  <ion-row>\n    <!-- Change the displayed calendar mode -->\n    <ion-col size=\"3\">\n      <ion-button expand=\"block\" [color]=\"calendar.mode == 'month' ? 'primary' : 'secondary'\" (click)=\"changeMode('month')\">Month</ion-button>\n    </ion-col>\n    <ion-col size=\"3\">\n      <ion-button expand=\"block\" [color]=\"calendar.mode == 'week' ? 'primary' : 'secondary'\" (click)=\"changeMode('week')\">Week</ion-button>\n    </ion-col>\n    <ion-col size=\"3\">\n      <ion-button expand=\"block\" [color]=\"calendar.mode == 'day' ? 'primary' : 'secondary'\" (click)=\"changeMode('day')\">Day</ion-button>\n    </ion-col>\n    <ion-col size=\"3\">\n      <ion-button [color]=\"calendar.mode == 'today' ? 'primary': 'secondary'\" (click)=\"today()\">Today</ion-button>\n    </ion-col>\n \n    <!-- Move back one screen of the slides -->\n    <ion-col size=\"2\" class=\"ion-text-left\">\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n\n    <ion-col size=\"8\" class=\"ion-text-center\" text-center class=\"date-title\">\n      {{viewTitle}}\n    </ion-col>\n \n    <!-- Move forward one screen of the slides -->\n    <ion-col size=\"2\" class=\"ion-text-right\">\n      <ion-button fill=\"clear\" (click)=\"next()\">\n        <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n \n  <calendar \n  [eventSource]=\"eventSource\" \n  [calendarMode]=\"calendar.mode\" \n  [currentDate]=\"calendar.currentDate\"\n  (onEventSelected)=\"onEventSelected($event)\"\n  (onTitleChanged)=\"onViewTitleChanged($event)\"\n  (onTimeSelected)=\"onTimeSelected($event)\" \n  startHour=\"6\"\n  endHour=\"20\"\n  step=\"30\"\n  startingDayWeek=\"1\">\n  </calendar>\n\n<!--   <ion-item lines=\"none\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\" >\n        <ion-col class=\"padding-left-none\" >\n          <ion-label position=\"stacked\">Current Theme <br/> (Tap to change)</ion-label> \n        </ion-col>\n        <ion-col>\n          <ion-button id=\"themecolor\" *ngIf=\"userinfo?.theme=='Dark'\" type=\"button\" size=\"default\" color=\"dark\" (click)=\"switchTheme()\"><ion-icon name=\"color-palette\"></ion-icon>&nbsp; {{userinfo.theme}}</ion-button>\n          <ion-button id=\"themecolor\" *ngIf=\"userinfo?.theme=='Light'\" type=\"button\" size=\"default\" color=\"dark\" (click)=\"switchTheme()\"><ion-icon name=\"color-palette\"></ion-icon>&nbsp; {{userinfo.theme}}</ion-button>\n        </ion-col>          \n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col class=\"padding-left-none\">\n        </ion-col>\n        <ion-col>\n          <ion-button (click)=\"logout()\" color=\"danger\" routerDirection=\"root\" size=\"default\"><ion-icon name=\"log-out\"></ion-icon> &nbsp; Logout</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item> -->\n\n  \n\n  \n  \n<!--   <br><br><br><br>\n  <ion-text>OPTIONS BELOW ARE FOR HSH DEMO PURPOSES AND WILL NOT APPEAR ON THE FINAL VERSION</ion-text>\n  <br><br>\n  <ion-button color=\"secondary\" (click)=\"loadEvents()\">Load Random Events</ion-button> -->\n  \n\n  <!-- FOR DEV PURPOSES -->\n  <!-- Card for adding a new event -->\n <!--  <ion-card>\n    <ion-card-header tappable (click)=\"collapseCard = !collapseCard\">\n      <ion-card-title>New Event</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"!collapseCard\">\n\n      <ion-item>\n        <ion-label>ID: </ion-label>\n        <ion-input type=\"number\" value=\"51\" readonly [(ngModel)]=\"event.id\" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Title\" [(ngModel)]=\"event.title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"event.desc\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Start</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.startTime\" [min]=\"minDate\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>End</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.endTime\" [min]=\"minDate\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>All Day?</ion-label>\n        <ion-checkbox [(ngModel)]=\"event.allDay\"></ion-checkbox>\n      </ion-item>\n      <ion-button  expand=\"block\" (click)=\"addEvent()\" [disabled]=\"event.title == ''\">Add Event</ion-button>\n \n    </ion-card-content>\n  </ion-card> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "gCGO":
    /*!**********************************************************************!*\
      !*** ./node_modules/ionic2-calendar/__ivy_ngcc__/calendar.module.js ***!
      \**********************************************************************/

    /*! exports provided: NgCalendarModule */

    /***/
    function gCGO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgCalendarModule", function () {
        return NgCalendarModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _monthview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./monthview */
      "DsJd");
      /* harmony import */


      var _weekview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./weekview */
      "HqZB");
      /* harmony import */


      var _dayview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dayview */
      "MGMF");
      /* harmony import */


      var _calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./calendar */
      "l0mM");
      /* harmony import */


      var _init_position_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./init-position-scroll */
      "VTDg");

      var NgCalendarModule =
      /** @class */
      function () {
        function NgCalendarModule() {}

        NgCalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: NgCalendarModule
        });
        NgCalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function NgCalendarModule_Factory(t) {
            return new (t || NgCalendarModule)();
          },
          imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgCalendarModule, {
            declarations: function declarations() {
              return [_monthview__WEBPACK_IMPORTED_MODULE_4__["MonthViewComponent"], _weekview__WEBPACK_IMPORTED_MODULE_5__["WeekViewComponent"], _dayview__WEBPACK_IMPORTED_MODULE_6__["DayViewComponent"], _calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_8__["initPositionScrollComponent"]];
            },
            imports: function imports() {
              return [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
            },
            exports: function exports() {
              return [_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"]];
            }
          });
        })();
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgCalendarModule, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
            args: [{
              declarations: [_monthview__WEBPACK_IMPORTED_MODULE_4__["MonthViewComponent"], _weekview__WEBPACK_IMPORTED_MODULE_5__["WeekViewComponent"], _dayview__WEBPACK_IMPORTED_MODULE_6__["DayViewComponent"], _calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_8__["initPositionScrollComponent"]],
              imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
              exports: [_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"]],
              entryComponents: [_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"]]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return NgCalendarModule;
      }(); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlcyI6WyJjYWxlbmRhci5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7S0FFSzs7Ozs7Ozs7Ozs7Ozs7Z0RBVW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBNb250aFZpZXdDb21wb25lbnQgfSBmcm9tICcuL21vbnRodmlldyc7XG5pbXBvcnQgeyBXZWVrVmlld0NvbXBvbmVudCB9IGZyb20gJy4vd2Vla3ZpZXcnO1xuaW1wb3J0IHsgRGF5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vZGF5dmlldyc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHsgaW5pdFBvc2l0aW9uU2Nyb2xsQ29tcG9uZW50IH0gZnJvbSAnLi9pbml0LXBvc2l0aW9uLXNjcm9sbCc7XG52YXIgTmdDYWxlbmRhck1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOZ0NhbGVuZGFyTW9kdWxlKCkge1xuICAgIH1cbiAgICBOZ0NhbGVuZGFyTW9kdWxlID0gdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgTmdNb2R1bGUoe1xuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgICAgICAgICAgTW9udGhWaWV3Q29tcG9uZW50LCBXZWVrVmlld0NvbXBvbmVudCwgRGF5Vmlld0NvbXBvbmVudCwgQ2FsZW5kYXJDb21wb25lbnQsIGluaXRQb3NpdGlvblNjcm9sbENvbXBvbmVudFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGltcG9ydHM6IFtJb25pY01vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgICAgICAgICAgIGV4cG9ydHM6IFtDYWxlbmRhckNvbXBvbmVudF0sXG4gICAgICAgICAgICBlbnRyeUNvbXBvbmVudHM6IFtDYWxlbmRhckNvbXBvbmVudF1cbiAgICAgICAgfSlcbiAgICBdLCBOZ0NhbGVuZGFyTW9kdWxlKTtcbiAgICByZXR1cm4gTmdDYWxlbmRhck1vZHVsZTtcbn0oKSk7XG5leHBvcnQgeyBOZ0NhbGVuZGFyTW9kdWxlIH07XG4iXX0=

      /***/

    },

    /***/
    "l0mM":
    /*!***************************************************************!*\
      !*** ./node_modules/ionic2-calendar/__ivy_ngcc__/calendar.js ***!
      \***************************************************************/

    /*! exports provided: Step, CalendarComponent */

    /***/
    function l0mM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Step", function () {
        return Step;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
        return CalendarComponent;
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


      var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calendar.service */
      "FDPr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _monthview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./monthview */
      "DsJd");
      /* harmony import */


      var _weekview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./weekview */
      "HqZB");
      /* harmony import */


      var _dayview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dayview */
      "MGMF");

      function CalendarComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var view_r23 = ctx.view;
          var row_r24 = ctx.row;
          var col_r25 = ctx.col;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", view_r23.dates[row_r24 * 7 + col_r25].label, " ");
        }
      }

      function CalendarComponent_ng_template_2_ion_list_0_ion_item_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, event_r32.startTime, "HH:mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, event_r32.endTime, "HH:mm"), " ");
        }
      }

      function CalendarComponent_ng_template_2_ion_list_0_ion_item_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r34.allDayLabel);
        }
      }

      function CalendarComponent_ng_template_2_ion_list_0_ion_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_ng_template_2_ion_list_0_ion_item_1_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

            var event_r32 = ctx.$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r36.eventSelected(event_r32);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarComponent_ng_template_2_ion_list_0_ion_item_1_span_1_Template, 4, 8, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarComponent_ng_template_2_ion_list_0_ion_item_1_span_2_Template, 2, 1, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !event_r32.allDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r32.allDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" | ", event_r32.title, "");
        }
      }

      function CalendarComponent_ng_template_2_ion_list_0_ion_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var noEventsLabel_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).noEventsLabel;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noEventsLabel_r28);
        }
      }

      function CalendarComponent_ng_template_2_ion_list_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarComponent_ng_template_2_ion_list_0_ion_item_1_Template, 5, 3, "ion-item", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarComponent_ng_template_2_ion_list_0_ion_item_2_Template, 3, 1, "ion-item", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var selectedDate_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().selectedDate;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", selectedDate_r27 == null ? null : selectedDate_r27.events);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (selectedDate_r27 == null ? null : selectedDate_r27.events.length) == 0);
        }
      }

      function CalendarComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarComponent_ng_template_2_ion_list_0_Template, 3, 2, "ion-list", 14);
        }

        if (rf & 2) {
          var showEventDetail_r26 = ctx.showEventDetail;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", showEventDetail_r26);
        }
      }

      function CalendarComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var viewDate_r40 = ctx.viewDate;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", viewDate_r40.dayHeader, " ");
        }
      }

      function CalendarComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var displayEvent_r41 = ctx.displayEvent;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](displayEvent_r41.event.title);
        }
      }

      function CalendarComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var displayEvent_r42 = ctx.displayEvent;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](displayEvent_r42.event.title);
        }
      }

      function CalendarComponent_ng_template_10_div_0_div_1_ng_template_1_Template(rf, ctx) {}

      var _c0 = function _c0(a0, a1) {
        return {
          top: a0,
          width: a1,
          height: "25px"
        };
      };

      var _c1 = function _c1(a0) {
        return {
          displayEvent: a0
        };
      };

      function CalendarComponent_ng_template_10_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_ng_template_10_div_0_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var displayEvent_r47 = ctx.$implicit;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r49.eventSelected(displayEvent_r47.event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarComponent_ng_template_10_div_0_div_1_ng_template_1_Template, 0, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var displayEvent_r47 = ctx.$implicit;

          var eventTemplate_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).eventTemplate;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, 25 * displayEvent_r47.position + "px", 100 * (displayEvent_r47.endIndex - displayEvent_r47.startIndex) + "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", eventTemplate_r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, displayEvent_r47));
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "calendar-event-wrap": a0
        };
      };

      var _c3 = function _c3(a0) {
        return {
          height: a0
        };
      };

      function CalendarComponent_ng_template_10_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarComponent_ng_template_10_div_0_div_1_Template, 2, 8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().day;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, day_r43.events))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c3, 25 * day_r43.events.length + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", day_r43.events);
        }
      }

      function CalendarComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarComponent_ng_template_10_div_0_Template, 2, 7, "div", 24);
        }

        if (rf & 2) {
          var day_r43 = ctx.day;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", day_r43.events);
        }
      }

      function CalendarComponent_ng_template_12_div_0_ng_template_1_Template(rf, ctx) {}

      var _c4 = function _c4(a0) {
        return {
          top: a0,
          width: "100%",
          height: "25px"
        };
      };

      function CalendarComponent_ng_template_12_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_ng_template_12_div_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60);

            var displayEvent_r56 = ctx.$implicit;

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r59.eventSelected(displayEvent_r56.event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarComponent_ng_template_12_div_0_ng_template_1_Template, 0, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var displayEvent_r56 = ctx.$implicit;
          var eventIndex_r57 = ctx.index;

          var eventTemplate_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().eventTemplate;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c4, 25 * eventIndex_r57 + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", eventTemplate_r54)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, displayEvent_r56));
        }
      }

      function CalendarComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarComponent_ng_template_12_div_0_Template, 2, 7, "div", 26);
        }

        if (rf & 2) {
          var allDayEvents_r53 = ctx.allDayEvents;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", allDayEvents_r53);
        }
      }

      function CalendarComponent_ng_template_14_div_0_div_1_ng_template_1_Template(rf, ctx) {}

      var _c5 = function _c5(a0, a1, a2, a3) {
        return {
          top: a0,
          left: a1,
          width: a2,
          height: a3
        };
      };

      function CalendarComponent_ng_template_14_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarComponent_ng_template_14_div_0_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70);

            var displayEvent_r67 = ctx.$implicit;

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r69.eventSelected(displayEvent_r67.event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarComponent_ng_template_14_div_0_div_1_ng_template_1_Template, 0, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var displayEvent_r67 = ctx.$implicit;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var hourParts_r63 = ctx_r71.hourParts;
          var eventTemplate_r64 = ctx_r71.eventTemplate;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](3, _c5, 37 * displayEvent_r67.startOffset / hourParts_r63 + "px", 100 / displayEvent_r67.overlapNumber * displayEvent_r67.position + "%", 100 / displayEvent_r67.overlapNumber + "%", 37 * (displayEvent_r67.endIndex - displayEvent_r67.startIndex - (displayEvent_r67.endOffset + displayEvent_r67.startOffset) / hourParts_r63) + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", eventTemplate_r64)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, displayEvent_r67));
        }
      }

      function CalendarComponent_ng_template_14_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarComponent_ng_template_14_div_0_div_1_Template, 2, 10, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().tm;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c2, tm_r62.events));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", tm_r62.events);
        }
      }

      function CalendarComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarComponent_ng_template_14_div_0_Template, 2, 4, "div", 29);
        }

        if (rf & 2) {
          var tm_r62 = ctx.tm;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tm_r62.events);
        }
      }

      function CalendarComponent_ng_template_16_Template(rf, ctx) {}

      function CalendarComponent_ng_template_18_Template(rf, ctx) {}

      function CalendarComponent_monthview_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "monthview", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRangeChanged", function CalendarComponent_monthview_21_Template_monthview_onRangeChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r73.rangeChanged($event);
          })("onEventSelected", function CalendarComponent_monthview_21_Template_monthview_onEventSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r75.eventSelected($event);
          })("onTimeSelected", function CalendarComponent_monthview_21_Template_monthview_onTimeSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r76.timeSelected($event);
          })("onTitleChanged", function CalendarComponent_monthview_21_Template_monthview_onTitleChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r77.titleChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formatDay", ctx_r20.formatDay)("formatDayHeader", ctx_r20.formatDayHeader)("formatMonthTitle", ctx_r20.formatMonthTitle)("startingDayMonth", ctx_r20.startingDayMonth)("showEventDetail", ctx_r20.showEventDetail)("noEventsLabel", ctx_r20.noEventsLabel)("autoSelect", ctx_r20.autoSelect)("eventSource", ctx_r20.eventSource)("markDisabled", ctx_r20.markDisabled)("monthviewDisplayEventTemplate", ctx_r20.monthviewDisplayEventTemplate || _r0)("monthviewInactiveDisplayEventTemplate", ctx_r20.monthviewInactiveDisplayEventTemplate || _r0)("monthviewEventDetailTemplate", ctx_r20.monthviewEventDetailTemplate || _r2)("locale", ctx_r20.locale)("dateFormatter", ctx_r20.dateFormatter)("dir", ctx_r20.dir)("lockSwipeToPrev", ctx_r20.lockSwipeToPrev)("lockSwipes", ctx_r20.lockSwipes)("sliderOptions", ctx_r20.sliderOptions);
        }
      }

      function CalendarComponent_weekview_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "weekview", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRangeChanged", function CalendarComponent_weekview_22_Template_weekview_onRangeChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r78.rangeChanged($event);
          })("onEventSelected", function CalendarComponent_weekview_22_Template_weekview_onEventSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r80.eventSelected($event);
          })("onTimeSelected", function CalendarComponent_weekview_22_Template_weekview_onTimeSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r81.timeSelected($event);
          })("onTitleChanged", function CalendarComponent_weekview_22_Template_weekview_onTitleChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r82.titleChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formatWeekTitle", ctx_r21.formatWeekTitle)("formatWeekViewDayHeader", ctx_r21.formatWeekViewDayHeader)("formatHourColumn", ctx_r21.formatHourColumn)("startingDayWeek", ctx_r21.startingDayWeek)("allDayLabel", ctx_r21.allDayLabel)("hourParts", ctx_r21.hourParts)("autoSelect", ctx_r21.autoSelect)("hourSegments", ctx_r21.hourSegments)("eventSource", ctx_r21.eventSource)("markDisabled", ctx_r21.markDisabled)("weekviewHeaderTemplate", ctx_r21.weekviewHeaderTemplate || _r4)("weekviewAllDayEventTemplate", ctx_r21.weekviewAllDayEventTemplate || _r6)("weekviewNormalEventTemplate", ctx_r21.weekviewNormalEventTemplate || _r8)("weekviewAllDayEventSectionTemplate", ctx_r21.weekviewAllDayEventSectionTemplate || _r10)("weekviewNormalEventSectionTemplate", ctx_r21.weekviewNormalEventSectionTemplate || _r14)("weekviewInactiveAllDayEventSectionTemplate", ctx_r21.weekviewInactiveAllDayEventSectionTemplate || _r16)("weekviewInactiveNormalEventSectionTemplate", ctx_r21.weekviewInactiveNormalEventSectionTemplate || _r18)("locale", ctx_r21.locale)("dateFormatter", ctx_r21.dateFormatter)("dir", ctx_r21.dir)("scrollToHour", ctx_r21.scrollToHour)("preserveScrollPosition", ctx_r21.preserveScrollPosition)("lockSwipeToPrev", ctx_r21.lockSwipeToPrev)("lockSwipes", ctx_r21.lockSwipes)("startHour", ctx_r21.startHour)("endHour", ctx_r21.endHour)("sliderOptions", ctx_r21.sliderOptions);
        }
      }

      function CalendarComponent_dayview_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dayview", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRangeChanged", function CalendarComponent_dayview_23_Template_dayview_onRangeChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r83.rangeChanged($event);
          })("onEventSelected", function CalendarComponent_dayview_23_Template_dayview_onEventSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r85.eventSelected($event);
          })("onTimeSelected", function CalendarComponent_dayview_23_Template_dayview_onTimeSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r86.timeSelected($event);
          })("onTitleChanged", function CalendarComponent_dayview_23_Template_dayview_onTitleChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r87.titleChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formatDayTitle", ctx_r22.formatDayTitle)("formatHourColumn", ctx_r22.formatHourColumn)("allDayLabel", ctx_r22.allDayLabel)("hourParts", ctx_r22.hourParts)("hourSegments", ctx_r22.hourSegments)("eventSource", ctx_r22.eventSource)("markDisabled", ctx_r22.markDisabled)("dayviewAllDayEventTemplate", ctx_r22.dayviewAllDayEventTemplate || _r6)("dayviewNormalEventTemplate", ctx_r22.dayviewNormalEventTemplate || _r8)("dayviewAllDayEventSectionTemplate", ctx_r22.dayviewAllDayEventSectionTemplate || _r12)("dayviewNormalEventSectionTemplate", ctx_r22.dayviewNormalEventSectionTemplate || _r14)("dayviewInactiveAllDayEventSectionTemplate", ctx_r22.dayviewInactiveAllDayEventSectionTemplate || _r16)("dayviewInactiveNormalEventSectionTemplate", ctx_r22.dayviewInactiveNormalEventSectionTemplate || _r18)("locale", ctx_r22.locale)("dateFormatter", ctx_r22.dateFormatter)("dir", ctx_r22.dir)("scrollToHour", ctx_r22.scrollToHour)("preserveScrollPosition", ctx_r22.preserveScrollPosition)("lockSwipeToPrev", ctx_r22.lockSwipeToPrev)("lockSwipes", ctx_r22.lockSwipes)("startHour", ctx_r22.startHour)("endHour", ctx_r22.endHour)("sliderOptions", ctx_r22.sliderOptions);
        }
      }

      var Step;

      (function (Step) {
        Step[Step["QuarterHour"] = 15] = "QuarterHour";
        Step[Step["HalfHour"] = 30] = "HalfHour";
        Step[Step["Hour"] = 60] = "Hour";
      })(Step || (Step = {}));

      var CalendarComponent =
      /** @class */
      function () {
        function CalendarComponent(calendarService, appLocale) {
          this.calendarService = calendarService;
          this.appLocale = appLocale;
          this.eventSource = [];
          this.calendarMode = 'month';
          this.formatDay = 'd';
          this.formatDayHeader = 'EEE';
          this.formatDayTitle = 'MMMM dd, yyyy';
          this.formatWeekTitle = 'MMMM yyyy, \'Week\' w';
          this.formatMonthTitle = 'MMMM yyyy';
          this.formatWeekViewDayHeader = 'EEE d';
          this.formatHourColumn = 'ha';
          this.showEventDetail = true;
          this.startingDayMonth = 0;
          this.startingDayWeek = 0;
          this.allDayLabel = 'all day';
          this.noEventsLabel = 'No Events';
          this.queryMode = 'local';
          this.step = Step.Hour;
          this.timeInterval = 60;
          this.autoSelect = true;
          this.dir = "";
          this.scrollToHour = 0;
          this.preserveScrollPosition = false;
          this.lockSwipeToPrev = false;
          this.lockSwipes = false;
          this.locale = "";
          this.startHour = 0;
          this.endHour = 24;
          this.onCurrentDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.hourParts = 1;
          this.hourSegments = 1;
          this.locale = appLocale;
        }

        Object.defineProperty(CalendarComponent.prototype, "currentDate", {
          get: function get() {
            return this._currentDate;
          },
          set: function set(val) {
            if (!val) {
              val = new Date();
            }

            this._currentDate = val;
            this.calendarService.setCurrentDate(val, true);
            this.onCurrentDateChanged.emit(this._currentDate);
          },
          enumerable: true,
          configurable: true
        });

        CalendarComponent.prototype.ngOnInit = function () {
          var _this = this;

          if (this.autoSelect) {
            if (this.autoSelect.toString() === 'false') {
              this.autoSelect = false;
            } else {
              this.autoSelect = true;
            }
          }

          this.hourSegments = 60 / this.timeInterval;
          this.hourParts = 60 / this.step;

          if (this.hourParts <= this.hourSegments) {
            this.hourParts = 1;
          } else {
            this.hourParts = this.hourParts / this.hourSegments;
          }

          this.startHour = parseInt(this.startHour.toString());
          this.endHour = parseInt(this.endHour.toString());
          this.calendarService.queryMode = this.queryMode;
          this.currentDateChangedFromChildrenSubscription = this.calendarService.currentDateChangedFromChildren$.subscribe(function (currentDate) {
            _this._currentDate = currentDate;

            _this.onCurrentDateChanged.emit(currentDate);
          });
        };

        CalendarComponent.prototype.ngOnDestroy = function () {
          if (this.currentDateChangedFromChildrenSubscription) {
            this.currentDateChangedFromChildrenSubscription.unsubscribe();
            this.currentDateChangedFromChildrenSubscription = null;
          }
        };

        CalendarComponent.prototype.rangeChanged = function (range) {
          this.onRangeChanged.emit(range);
        };

        CalendarComponent.prototype.eventSelected = function (event) {
          this.onEventSelected.emit(event);
        };

        CalendarComponent.prototype.timeSelected = function (timeSelected) {
          this.onTimeSelected.emit(timeSelected);
        };

        CalendarComponent.prototype.titleChanged = function (title) {
          this.onTitleChanged.emit(title);
        };

        CalendarComponent.prototype.loadEvents = function () {
          this.calendarService.loadEvents();
        };

        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Date])], CalendarComponent.prototype, "currentDate", null);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], CalendarComponent.prototype, "eventSource", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "calendarMode", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatDay", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatDayHeader", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatDayTitle", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatWeekTitle", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatMonthTitle", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatWeekViewDayHeader", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "formatHourColumn", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CalendarComponent.prototype, "showEventDetail", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "startingDayMonth", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "startingDayWeek", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "allDayLabel", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "noEventsLabel", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "queryMode", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "step", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "timeInterval", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CalendarComponent.prototype, "autoSelect", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)], CalendarComponent.prototype, "markDisabled", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "monthviewDisplayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "monthviewEventDetailTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewHeaderTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewAllDayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewNormalEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewAllDayEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewNormalEventTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewInactiveAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "weekviewInactiveNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewInactiveAllDayEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarComponent.prototype, "dayviewInactiveNormalEventSectionTemplate", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "dateFormatter", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "dir", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "scrollToHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CalendarComponent.prototype, "preserveScrollPosition", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CalendarComponent.prototype, "lockSwipeToPrev", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CalendarComponent.prototype, "lockSwipes", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], CalendarComponent.prototype, "locale", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "startHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], CalendarComponent.prototype, "endHour", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "sliderOptions", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "onCurrentDateChanged", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "onRangeChanged", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "onEventSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "onTimeSelected", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CalendarComponent.prototype, "onTitleChanged", void 0);
        CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"], String])], CalendarComponent);

        CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
          return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]));
        };

        CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: CalendarComponent,
          selectors: [["calendar"]],
          inputs: {
            eventSource: "eventSource",
            calendarMode: "calendarMode",
            formatDay: "formatDay",
            formatDayHeader: "formatDayHeader",
            formatDayTitle: "formatDayTitle",
            formatWeekTitle: "formatWeekTitle",
            formatMonthTitle: "formatMonthTitle",
            formatWeekViewDayHeader: "formatWeekViewDayHeader",
            formatHourColumn: "formatHourColumn",
            showEventDetail: "showEventDetail",
            startingDayMonth: "startingDayMonth",
            startingDayWeek: "startingDayWeek",
            allDayLabel: "allDayLabel",
            noEventsLabel: "noEventsLabel",
            queryMode: "queryMode",
            step: "step",
            timeInterval: "timeInterval",
            autoSelect: "autoSelect",
            dir: "dir",
            scrollToHour: "scrollToHour",
            preserveScrollPosition: "preserveScrollPosition",
            lockSwipeToPrev: "lockSwipeToPrev",
            lockSwipes: "lockSwipes",
            locale: "locale",
            startHour: "startHour",
            endHour: "endHour",
            currentDate: "currentDate",
            markDisabled: "markDisabled",
            monthviewDisplayEventTemplate: "monthviewDisplayEventTemplate",
            monthviewInactiveDisplayEventTemplate: "monthviewInactiveDisplayEventTemplate",
            monthviewEventDetailTemplate: "monthviewEventDetailTemplate",
            weekviewHeaderTemplate: "weekviewHeaderTemplate",
            weekviewAllDayEventTemplate: "weekviewAllDayEventTemplate",
            weekviewNormalEventTemplate: "weekviewNormalEventTemplate",
            dayviewAllDayEventTemplate: "dayviewAllDayEventTemplate",
            dayviewNormalEventTemplate: "dayviewNormalEventTemplate",
            weekviewAllDayEventSectionTemplate: "weekviewAllDayEventSectionTemplate",
            weekviewNormalEventSectionTemplate: "weekviewNormalEventSectionTemplate",
            dayviewAllDayEventSectionTemplate: "dayviewAllDayEventSectionTemplate",
            dayviewNormalEventSectionTemplate: "dayviewNormalEventSectionTemplate",
            weekviewInactiveAllDayEventSectionTemplate: "weekviewInactiveAllDayEventSectionTemplate",
            weekviewInactiveNormalEventSectionTemplate: "weekviewInactiveNormalEventSectionTemplate",
            dayviewInactiveAllDayEventSectionTemplate: "dayviewInactiveAllDayEventSectionTemplate",
            dayviewInactiveNormalEventSectionTemplate: "dayviewInactiveNormalEventSectionTemplate",
            dateFormatter: "dateFormatter",
            sliderOptions: "sliderOptions"
          },
          outputs: {
            onCurrentDateChanged: "onCurrentDateChanged",
            onRangeChanged: "onRangeChanged",
            onEventSelected: "onEventSelected",
            onTimeSelected: "onTimeSelected",
            onTitleChanged: "onTitleChanged"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]])],
          decls: 24,
          vars: 7,
          consts: [["monthviewDefaultDisplayEventTemplate", ""], ["monthviewDefaultEventDetailTemplate", ""], ["defaultWeekviewHeaderTemplate", ""], ["defaultAllDayEventTemplate", ""], ["defaultNormalEventTemplate", ""], ["defaultWeekViewAllDayEventSectionTemplate", ""], ["defaultDayViewAllDayEventSectionTemplate", ""], ["defaultNormalEventSectionTemplate", ""], ["defaultInactiveAllDayEventSectionTemplate", ""], ["defaultInactiveNormalEventSectionTemplate", ""], [3, "ngSwitch"], [3, "formatDay", "formatDayHeader", "formatMonthTitle", "startingDayMonth", "showEventDetail", "noEventsLabel", "autoSelect", "eventSource", "markDisabled", "monthviewDisplayEventTemplate", "monthviewInactiveDisplayEventTemplate", "monthviewEventDetailTemplate", "locale", "dateFormatter", "dir", "lockSwipeToPrev", "lockSwipes", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged", 4, "ngSwitchCase"], [3, "formatWeekTitle", "formatWeekViewDayHeader", "formatHourColumn", "startingDayWeek", "allDayLabel", "hourParts", "autoSelect", "hourSegments", "eventSource", "markDisabled", "weekviewHeaderTemplate", "weekviewAllDayEventTemplate", "weekviewNormalEventTemplate", "weekviewAllDayEventSectionTemplate", "weekviewNormalEventSectionTemplate", "weekviewInactiveAllDayEventSectionTemplate", "weekviewInactiveNormalEventSectionTemplate", "locale", "dateFormatter", "dir", "scrollToHour", "preserveScrollPosition", "lockSwipeToPrev", "lockSwipes", "startHour", "endHour", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged", 4, "ngSwitchCase"], [3, "formatDayTitle", "formatHourColumn", "allDayLabel", "hourParts", "hourSegments", "eventSource", "markDisabled", "dayviewAllDayEventTemplate", "dayviewNormalEventTemplate", "dayviewAllDayEventSectionTemplate", "dayviewNormalEventSectionTemplate", "dayviewInactiveAllDayEventSectionTemplate", "dayviewInactiveNormalEventSectionTemplate", "locale", "dateFormatter", "dir", "scrollToHour", "preserveScrollPosition", "lockSwipeToPrev", "lockSwipes", "startHour", "endHour", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged", 4, "ngSwitchCase"], ["class", "event-detail-container", "has-bouncing", "false", "overflow-scroll", "false", 4, "ngIf"], ["has-bouncing", "false", "overflow-scroll", "false", 1, "event-detail-container"], [3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], ["class", "monthview-eventdetail-timecolumn", 4, "ngIf"], [1, "event-detail"], [1, "monthview-eventdetail-timecolumn"], [1, "no-events-label"], [1, "calendar-event-inner"], [3, "ngClass", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["class", "calendar-event", "tappable", "", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["tappable", "", 1, "calendar-event", 3, "ngStyle", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "formatDay", "formatDayHeader", "formatMonthTitle", "startingDayMonth", "showEventDetail", "noEventsLabel", "autoSelect", "eventSource", "markDisabled", "monthviewDisplayEventTemplate", "monthviewInactiveDisplayEventTemplate", "monthviewEventDetailTemplate", "locale", "dateFormatter", "dir", "lockSwipeToPrev", "lockSwipes", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged"], [3, "formatWeekTitle", "formatWeekViewDayHeader", "formatHourColumn", "startingDayWeek", "allDayLabel", "hourParts", "autoSelect", "hourSegments", "eventSource", "markDisabled", "weekviewHeaderTemplate", "weekviewAllDayEventTemplate", "weekviewNormalEventTemplate", "weekviewAllDayEventSectionTemplate", "weekviewNormalEventSectionTemplate", "weekviewInactiveAllDayEventSectionTemplate", "weekviewInactiveNormalEventSectionTemplate", "locale", "dateFormatter", "dir", "scrollToHour", "preserveScrollPosition", "lockSwipeToPrev", "lockSwipes", "startHour", "endHour", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged"], [3, "formatDayTitle", "formatHourColumn", "allDayLabel", "hourParts", "hourSegments", "eventSource", "markDisabled", "dayviewAllDayEventTemplate", "dayviewNormalEventTemplate", "dayviewAllDayEventSectionTemplate", "dayviewNormalEventSectionTemplate", "dayviewInactiveAllDayEventSectionTemplate", "dayviewInactiveNormalEventSectionTemplate", "locale", "dateFormatter", "dir", "scrollToHour", "preserveScrollPosition", "lockSwipeToPrev", "lockSwipes", "startHour", "endHour", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged"]],
          template: function CalendarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CalendarComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CalendarComponent_ng_template_6_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CalendarComponent_ng_template_8_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CalendarComponent_ng_template_10_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CalendarComponent_ng_template_12_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CalendarComponent_ng_template_14_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CalendarComponent_ng_template_16_Template, 0, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CalendarComponent_ng_template_18_Template, 0, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CalendarComponent_monthview_21_Template, 1, 18, "monthview", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CalendarComponent_weekview_22_Template, 1, 27, "weekview", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CalendarComponent_dayview_23_Template, 1, 23, "dayview", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx.calendarMode, "view-container");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.calendarMode);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "month");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "week");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "day");
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _monthview__WEBPACK_IMPORTED_MODULE_5__["MonthViewComponent"], _weekview__WEBPACK_IMPORTED_MODULE_6__["WeekViewComponent"], _dayview__WEBPACK_IMPORTED_MODULE_7__["DayViewComponent"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
          styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] { height: 100%; }\n\n        .event-detail-container[_ngcontent-%COMP%] {\n          border-top: 2px darkgrey solid;\n        }\n\n        .no-events-label[_ngcontent-%COMP%] {\n          font-weight: bold;\n          color: darkgrey;\n          text-align: center;\n        }\n\n        .event-detail[_ngcontent-%COMP%] {\n          cursor: pointer;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .monthview-eventdetail-timecolumn[_ngcontent-%COMP%] {\n          width: 110px;\n          overflow: hidden;\n        }\n\n        .calendar-event-inner[_ngcontent-%COMP%] {\n          overflow: hidden;\n          background-color: #3a87ad;\n          color: white;\n          height: 100%;\n          width: 100%;\n          padding: 2px;\n          line-height: 15px;\n          text-align: initial;\n        }\n\n        @media (max-width: 750px) {\n          .calendar-event-inner[_ngcontent-%COMP%] {\n            font-size: 12px;\n          }\n        }"]
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
            args: [{
              selector: 'calendar',
              template: "\n        <ng-template #monthviewDefaultDisplayEventTemplate let-view=\"view\" let-row=\"row\" let-col=\"col\">\n            {{view.dates[row*7+col].label}}\n        </ng-template>\n        <ng-template #monthviewDefaultEventDetailTemplate let-showEventDetail=\"showEventDetail\" let-selectedDate=\"selectedDate\" let-noEventsLabel=\"noEventsLabel\">\n            <ion-list class=\"event-detail-container\" has-bouncing=\"false\" *ngIf=\"showEventDetail\" overflow-scroll=\"false\">\n                <ion-item *ngFor=\"let event of selectedDate?.events\" (click)=\"eventSelected(event)\">\n                        <span *ngIf=\"!event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{event.startTime|date: 'HH:mm'}}\n                            -\n                            {{event.endTime|date: 'HH:mm'}}\n                        </span>\n                    <span *ngIf=\"event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{allDayLabel}}</span>\n                    <span class=\"event-detail\">  |  {{event.title}}</span>\n                </ion-item>\n                <ion-item *ngIf=\"selectedDate?.events.length==0\">\n                    <div class=\"no-events-label\">{{noEventsLabel}}</div>\n                </ion-item>\n            </ion-list>\n        </ng-template>\n        <ng-template #defaultWeekviewHeaderTemplate let-viewDate=\"viewDate\">\n            {{ viewDate.dayHeader }}\n        </ng-template>\n        <ng-template #defaultAllDayEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultNormalEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultWeekViewAllDayEventSectionTemplate let-day=\"day\" let-eventTemplate=\"eventTemplate\">\n            <div [ngClass]=\"{'calendar-event-wrap': day.events}\" *ngIf=\"day.events\"\n                 [ngStyle]=\"{height: 25*day.events.length+'px'}\">\n                <div *ngFor=\"let displayEvent of day.events\" class=\"calendar-event\" tappable\n                     (click)=\"eventSelected(displayEvent.event)\"\n                     [ngStyle]=\"{top: 25*displayEvent.position+'px', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+'%', height: '25px'}\">\n                    <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                                 [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #defaultDayViewAllDayEventSectionTemplate let-allDayEvents=\"allDayEvents\" let-eventTemplate=\"eventTemplate\">\n            <div *ngFor=\"let displayEvent of allDayEvents; let eventIndex=index\"\n                 class=\"calendar-event\" tappable\n                 (click)=\"eventSelected(displayEvent.event)\"\n                 [ngStyle]=\"{top: 25*eventIndex+'px',width: '100%',height:'25px'}\">\n                <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                             [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                </ng-template>\n            </div>\n        </ng-template>\n        <ng-template #defaultNormalEventSectionTemplate let-tm=\"tm\" let-hourParts=\"hourParts\" let-eventTemplate=\"eventTemplate\">\n            <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                <div *ngFor=\"let displayEvent of tm.events\" class=\"calendar-event\" tappable\n                     (click)=\"eventSelected(displayEvent.event)\"\n                     [ngStyle]=\"{top: (37*displayEvent.startOffset/hourParts)+'px',left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}\">\n                    <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                                 [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #defaultInactiveAllDayEventSectionTemplate>\n        </ng-template>\n        <ng-template #defaultInactiveNormalEventSectionTemplate>\n        </ng-template>\n\n        <div [ngSwitch]=\"calendarMode\" class=\"{{calendarMode}}view-container\">\n            <monthview *ngSwitchCase=\"'month'\"\n                [formatDay]=\"formatDay\"\n                [formatDayHeader]=\"formatDayHeader\"\n                [formatMonthTitle]=\"formatMonthTitle\"\n                [startingDayMonth]=\"startingDayMonth\"\n                [showEventDetail]=\"showEventDetail\"\n                [noEventsLabel]=\"noEventsLabel\"\n                [autoSelect]=\"autoSelect\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [monthviewDisplayEventTemplate]=\"monthviewDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewInactiveDisplayEventTemplate]=\"monthviewInactiveDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewEventDetailTemplate]=\"monthviewEventDetailTemplate||monthviewDefaultEventDetailTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [sliderOptions]=\"sliderOptions\"       \n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </monthview>\n            <weekview *ngSwitchCase=\"'week'\"\n                [formatWeekTitle]=\"formatWeekTitle\"\n                [formatWeekViewDayHeader]=\"formatWeekViewDayHeader\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [startingDayWeek]=\"startingDayWeek\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [autoSelect]=\"autoSelect\"\n                [hourSegments]=\"hourSegments\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [weekviewHeaderTemplate]=\"weekviewHeaderTemplate||defaultWeekviewHeaderTemplate\"\n                [weekviewAllDayEventTemplate]=\"weekviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [weekviewNormalEventTemplate]=\"weekviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [weekviewAllDayEventSectionTemplate]=\"weekviewAllDayEventSectionTemplate||defaultWeekViewAllDayEventSectionTemplate\"\n                [weekviewNormalEventSectionTemplate]=\"weekviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate\"\n                [weekviewInactiveAllDayEventSectionTemplate]=\"weekviewInactiveAllDayEventSectionTemplate||defaultInactiveAllDayEventSectionTemplate\"\n                [weekviewInactiveNormalEventSectionTemplate]=\"weekviewInactiveNormalEventSectionTemplate||defaultInactiveNormalEventSectionTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [startHour]=\"startHour\"\n                [endHour]=\"endHour\"\n                [sliderOptions]=\"sliderOptions\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </weekview>\n            <dayview *ngSwitchCase=\"'day'\"\n                [formatDayTitle]=\"formatDayTitle\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [hourSegments]=\"hourSegments\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [dayviewAllDayEventTemplate]=\"dayviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [dayviewNormalEventTemplate]=\"dayviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [dayviewAllDayEventSectionTemplate]=\"dayviewAllDayEventSectionTemplate||defaultDayViewAllDayEventSectionTemplate\" \n                [dayviewNormalEventSectionTemplate]=\"dayviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate\"\n                [dayviewInactiveAllDayEventSectionTemplate]=\"dayviewInactiveAllDayEventSectionTemplate||defaultInactiveAllDayEventSectionTemplate\" \n                [dayviewInactiveNormalEventSectionTemplate]=\"dayviewInactiveNormalEventSectionTemplate||defaultInactiveNormalEventSectionTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [startHour]=\"startHour\"\n                [endHour]=\"endHour\"\n                [sliderOptions]=\"sliderOptions\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </dayview>\n        </div>\n    ",
              styles: ["\n        :host > div { height: 100%; }\n\n        .event-detail-container {\n          border-top: 2px darkgrey solid;\n        }\n\n        .no-events-label {\n          font-weight: bold;\n          color: darkgrey;\n          text-align: center;\n        }\n\n        .event-detail {\n          cursor: pointer;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .monthview-eventdetail-timecolumn {\n          width: 110px;\n          overflow: hidden;\n        }\n\n        .calendar-event-inner {\n          overflow: hidden;\n          background-color: #3a87ad;\n          color: white;\n          height: 100%;\n          width: 100%;\n          padding: 2px;\n          line-height: 15px;\n          text-align: initial;\n        }\n\n        @media (max-width: 750px) {\n          .calendar-event-inner {\n            font-size: 12px;\n          }\n        }\n    "],
              providers: [_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]]
            }]
          }], function () {
            return [{
              type: _calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]
            }, {
              type: String,
              decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
              }]
            }];
          }, {
            eventSource: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            calendarMode: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            formatDay: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            formatDayHeader: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            formatDayTitle: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            formatWeekTitle: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            formatMonthTitle: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            formatWeekViewDayHeader: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            formatHourColumn: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            showEventDetail: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            startingDayMonth: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            startingDayWeek: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            allDayLabel: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            noEventsLabel: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            queryMode: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            step: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            timeInterval: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            autoSelect: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            dir: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            scrollToHour: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            preserveScrollPosition: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            lockSwipeToPrev: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            lockSwipes: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            locale: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            startHour: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            endHour: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            onCurrentDateChanged: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
            }],
            onRangeChanged: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
            }],
            onEventSelected: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
            }],
            onTimeSelected: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
            }],
            onTitleChanged: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
            }],
            currentDate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            markDisabled: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            monthviewDisplayEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            monthviewInactiveDisplayEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            monthviewEventDetailTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            weekviewHeaderTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            weekviewAllDayEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            weekviewNormalEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            dayviewAllDayEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            dayviewNormalEventTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            weekviewAllDayEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            weekviewNormalEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            dayviewAllDayEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            dayviewNormalEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            weekviewInactiveAllDayEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            weekviewInactiveNormalEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            dayviewInactiveAllDayEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            dayviewInactiveNormalEventSectionTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            dateFormatter: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }],
            sliderOptions: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
            }]
          });
        })();

        return CalendarComponent;
      }(); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0F3VDRDLEFBT3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBRW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgSW5qZWN0LCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4vY2FsZW5kYXIuc2VydmljZSc7XG5leHBvcnQgdmFyIFN0ZXA7XG4oZnVuY3Rpb24gKFN0ZXApIHtcbiAgICBTdGVwW1N0ZXBbXCJRdWFydGVySG91clwiXSA9IDE1XSA9IFwiUXVhcnRlckhvdXJcIjtcbiAgICBTdGVwW1N0ZXBbXCJIYWxmSG91clwiXSA9IDMwXSA9IFwiSGFsZkhvdXJcIjtcbiAgICBTdGVwW1N0ZXBbXCJIb3VyXCJdID0gNjBdID0gXCJIb3VyXCI7XG59KShTdGVwIHx8IChTdGVwID0ge30pKTtcbnZhciBDYWxlbmRhckNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYWxlbmRhckNvbXBvbmVudChjYWxlbmRhclNlcnZpY2UsIGFwcExvY2FsZSkge1xuICAgICAgICB0aGlzLmNhbGVuZGFyU2VydmljZSA9IGNhbGVuZGFyU2VydmljZTtcbiAgICAgICAgdGhpcy5hcHBMb2NhbGUgPSBhcHBMb2NhbGU7XG4gICAgICAgIHRoaXMuZXZlbnRTb3VyY2UgPSBbXTtcbiAgICAgICAgdGhpcy5jYWxlbmRhck1vZGUgPSAnbW9udGgnO1xuICAgICAgICB0aGlzLmZvcm1hdERheSA9ICdkJztcbiAgICAgICAgdGhpcy5mb3JtYXREYXlIZWFkZXIgPSAnRUVFJztcbiAgICAgICAgdGhpcy5mb3JtYXREYXlUaXRsZSA9ICdNTU1NIGRkLCB5eXl5JztcbiAgICAgICAgdGhpcy5mb3JtYXRXZWVrVGl0bGUgPSAnTU1NTSB5eXl5LCBcXCdXZWVrXFwnIHcnO1xuICAgICAgICB0aGlzLmZvcm1hdE1vbnRoVGl0bGUgPSAnTU1NTSB5eXl5JztcbiAgICAgICAgdGhpcy5mb3JtYXRXZWVrVmlld0RheUhlYWRlciA9ICdFRUUgZCc7XG4gICAgICAgIHRoaXMuZm9ybWF0SG91ckNvbHVtbiA9ICdoYSc7XG4gICAgICAgIHRoaXMuc2hvd0V2ZW50RGV0YWlsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydGluZ0RheU1vbnRoID0gMDtcbiAgICAgICAgdGhpcy5zdGFydGluZ0RheVdlZWsgPSAwO1xuICAgICAgICB0aGlzLmFsbERheUxhYmVsID0gJ2FsbCBkYXknO1xuICAgICAgICB0aGlzLm5vRXZlbnRzTGFiZWwgPSAnTm8gRXZlbnRzJztcbiAgICAgICAgdGhpcy5xdWVyeU1vZGUgPSAnbG9jYWwnO1xuICAgICAgICB0aGlzLnN0ZXAgPSBTdGVwLkhvdXI7XG4gICAgICAgIHRoaXMudGltZUludGVydmFsID0gNjA7XG4gICAgICAgIHRoaXMuYXV0b1NlbGVjdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlyID0gXCJcIjtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hvdXIgPSAwO1xuICAgICAgICB0aGlzLnByZXNlcnZlU2Nyb2xsUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2NrU3dpcGVUb1ByZXYgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2NrU3dpcGVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9jYWxlID0gXCJcIjtcbiAgICAgICAgdGhpcy5zdGFydEhvdXIgPSAwO1xuICAgICAgICB0aGlzLmVuZEhvdXIgPSAyNDtcbiAgICAgICAgdGhpcy5vbkN1cnJlbnREYXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vblJhbmdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vbkV2ZW50U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25UaW1lU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25UaXRsZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuaG91clBhcnRzID0gMTtcbiAgICAgICAgdGhpcy5ob3VyU2VnbWVudHMgPSAxO1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGFwcExvY2FsZTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJjdXJyZW50RGF0ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnREYXRlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIGlmICghdmFsKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnREYXRlID0gdmFsO1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2Uuc2V0Q3VycmVudERhdGUodmFsLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub25DdXJyZW50RGF0ZUNoYW5nZWQuZW1pdCh0aGlzLl9jdXJyZW50RGF0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYXV0b1NlbGVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1NlbGVjdC50b1N0cmluZygpID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9TZWxlY3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG91clNlZ21lbnRzID0gNjAgLyB0aGlzLnRpbWVJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5ob3VyUGFydHMgPSA2MCAvIHRoaXMuc3RlcDtcbiAgICAgICAgaWYgKHRoaXMuaG91clBhcnRzIDw9IHRoaXMuaG91clNlZ21lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmhvdXJQYXJ0cyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdXJQYXJ0cyA9IHRoaXMuaG91clBhcnRzIC8gdGhpcy5ob3VyU2VnbWVudHM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGFydEhvdXIgPSBwYXJzZUludCh0aGlzLnN0YXJ0SG91ci50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5lbmRIb3VyID0gcGFyc2VJbnQodGhpcy5lbmRIb3VyLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5xdWVyeU1vZGUgPSB0aGlzLnF1ZXJ5TW9kZTtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tQ2hpbGRyZW5TdWJzY3JpcHRpb24gPSB0aGlzLmNhbGVuZGFyU2VydmljZS5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tQ2hpbGRyZW4kLnN1YnNjcmliZShmdW5jdGlvbiAoY3VycmVudERhdGUpIHtcbiAgICAgICAgICAgIF90aGlzLl9jdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlO1xuICAgICAgICAgICAgX3RoaXMub25DdXJyZW50RGF0ZUNoYW5nZWQuZW1pdChjdXJyZW50RGF0ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGF0ZUNoYW5nZWRGcm9tQ2hpbGRyZW5TdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVDaGFuZ2VkRnJvbUNoaWxkcmVuU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlQ2hhbmdlZEZyb21DaGlsZHJlblN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZS5yYW5nZUNoYW5nZWQgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgdGhpcy5vblJhbmdlQ2hhbmdlZC5lbWl0KHJhbmdlKTtcbiAgICB9O1xuICAgIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZS5ldmVudFNlbGVjdGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMub25FdmVudFNlbGVjdGVkLmVtaXQoZXZlbnQpO1xuICAgIH07XG4gICAgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLnRpbWVTZWxlY3RlZCA9IGZ1bmN0aW9uICh0aW1lU2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5vblRpbWVTZWxlY3RlZC5lbWl0KHRpbWVTZWxlY3RlZCk7XG4gICAgfTtcbiAgICBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUudGl0bGVDaGFuZ2VkID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgICAgIHRoaXMub25UaXRsZUNoYW5nZWQuZW1pdCh0aXRsZSk7XG4gICAgfTtcbiAgICBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUubG9hZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UubG9hZEV2ZW50cygpO1xuICAgIH07XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgRGF0ZSksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtEYXRlXSlcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwiY3VycmVudERhdGVcIiwgbnVsbCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcImV2ZW50U291cmNlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJjYWxlbmRhck1vZGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcImZvcm1hdERheVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwiZm9ybWF0RGF5SGVhZGVyXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJmb3JtYXREYXlUaXRsZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwiZm9ybWF0V2Vla1RpdGxlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJmb3JtYXRNb250aFRpdGxlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJmb3JtYXRXZWVrVmlld0RheUhlYWRlclwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwiZm9ybWF0SG91ckNvbHVtblwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcInNob3dFdmVudERldGFpbFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwic3RhcnRpbmdEYXlNb250aFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwic3RhcnRpbmdEYXlXZWVrXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhbGxEYXlMYWJlbFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwibm9FdmVudHNMYWJlbFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwicXVlcnlNb2RlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJzdGVwXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ0aW1lSW50ZXJ2YWxcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhdXRvU2VsZWN0XCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgRnVuY3Rpb24pXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcIm1hcmtEaXNhYmxlZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJtb250aHZpZXdEaXNwbGF5RXZlbnRUZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJtb250aHZpZXdJbmFjdGl2ZURpc3BsYXlFdmVudFRlbXBsYXRlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgVGVtcGxhdGVSZWYpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcIm1vbnRodmlld0V2ZW50RGV0YWlsVGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBUZW1wbGF0ZVJlZilcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwid2Vla3ZpZXdIZWFkZXJUZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ3ZWVrdmlld0FsbERheUV2ZW50VGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBUZW1wbGF0ZVJlZilcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwid2Vla3ZpZXdOb3JtYWxFdmVudFRlbXBsYXRlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgVGVtcGxhdGVSZWYpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcImRheXZpZXdBbGxEYXlFdmVudFRlbXBsYXRlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgVGVtcGxhdGVSZWYpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcImRheXZpZXdOb3JtYWxFdmVudFRlbXBsYXRlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgVGVtcGxhdGVSZWYpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcIndlZWt2aWV3QWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBUZW1wbGF0ZVJlZilcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwid2Vla3ZpZXdOb3JtYWxFdmVudFNlY3Rpb25UZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJkYXl2aWV3QWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBUZW1wbGF0ZVJlZilcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwiZGF5dmlld05vcm1hbEV2ZW50U2VjdGlvblRlbXBsYXRlXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgVGVtcGxhdGVSZWYpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcIndlZWt2aWV3SW5hY3RpdmVBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFRlbXBsYXRlUmVmKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ3ZWVrdmlld0luYWN0aXZlTm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBUZW1wbGF0ZVJlZilcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwiZGF5dmlld0luYWN0aXZlQWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBUZW1wbGF0ZVJlZilcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwiZGF5dmlld0luYWN0aXZlTm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGVcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcImRhdGVGb3JtYXR0ZXJcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcImRpclwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwic2Nyb2xsVG9Ib3VyXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwicHJlc2VydmVTY3JvbGxQb3NpdGlvblwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcImxvY2tTd2lwZVRvUHJldlwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcImxvY2tTd2lwZXNcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcImxvY2FsZVwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwic3RhcnRIb3VyXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJlbmRIb3VyXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJzbGlkZXJPcHRpb25zXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgT3V0cHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwib25DdXJyZW50RGF0ZUNoYW5nZWRcIiwgdm9pZCAwKTtcbiAgICB0c2xpYl8xLl9fZGVjb3JhdGUoW1xuICAgICAgICBPdXRwdXQoKSxcbiAgICAgICAgdHNsaWJfMS5fX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50LnByb3RvdHlwZSwgXCJvblJhbmdlQ2hhbmdlZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIE91dHB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcIm9uRXZlbnRTZWxlY3RlZFwiLCB2b2lkIDApO1xuICAgIHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIE91dHB1dCgpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgQ2FsZW5kYXJDb21wb25lbnQucHJvdG90eXBlLCBcIm9uVGltZVNlbGVjdGVkXCIsIHZvaWQgMCk7XG4gICAgdHNsaWJfMS5fX2RlY29yYXRlKFtcbiAgICAgICAgT3V0cHV0KCksXG4gICAgICAgIHRzbGliXzEuX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBDYWxlbmRhckNvbXBvbmVudC5wcm90b3R5cGUsIFwib25UaXRsZUNoYW5nZWRcIiwgdm9pZCAwKTtcbiAgICBDYWxlbmRhckNvbXBvbmVudCA9IHRzbGliXzEuX19kZWNvcmF0ZShbXG4gICAgICAgIENvbXBvbmVudCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2NhbGVuZGFyJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBcIlxcbiAgICAgICAgPG5nLXRlbXBsYXRlICNtb250aHZpZXdEZWZhdWx0RGlzcGxheUV2ZW50VGVtcGxhdGUgbGV0LXZpZXc9XFxcInZpZXdcXFwiIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LWNvbD1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICB7e3ZpZXcuZGF0ZXNbcm93KjcrY29sXS5sYWJlbH19XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlICNtb250aHZpZXdEZWZhdWx0RXZlbnREZXRhaWxUZW1wbGF0ZSBsZXQtc2hvd0V2ZW50RGV0YWlsPVxcXCJzaG93RXZlbnREZXRhaWxcXFwiIGxldC1zZWxlY3RlZERhdGU9XFxcInNlbGVjdGVkRGF0ZVxcXCIgbGV0LW5vRXZlbnRzTGFiZWw9XFxcIm5vRXZlbnRzTGFiZWxcXFwiPlxcbiAgICAgICAgICAgIDxpb24tbGlzdCBjbGFzcz1cXFwiZXZlbnQtZGV0YWlsLWNvbnRhaW5lclxcXCIgaGFzLWJvdW5jaW5nPVxcXCJmYWxzZVxcXCIgKm5nSWY9XFxcInNob3dFdmVudERldGFpbFxcXCIgb3ZlcmZsb3ctc2Nyb2xsPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpb24taXRlbSAqbmdGb3I9XFxcImxldCBldmVudCBvZiBzZWxlY3RlZERhdGU/LmV2ZW50c1xcXCIgKGNsaWNrKT1cXFwiZXZlbnRTZWxlY3RlZChldmVudClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCIhZXZlbnQuYWxsRGF5XFxcIiBjbGFzcz1cXFwibW9udGh2aWV3LWV2ZW50ZGV0YWlsLXRpbWVjb2x1bW5cXFwiPnt7ZXZlbnQuc3RhcnRUaW1lfGRhdGU6ICdISDptbSd9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZXZlbnQuZW5kVGltZXxkYXRlOiAnSEg6bW0nfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwiZXZlbnQuYWxsRGF5XFxcIiBjbGFzcz1cXFwibW9udGh2aWV3LWV2ZW50ZGV0YWlsLXRpbWVjb2x1bW5cXFwiPnt7YWxsRGF5TGFiZWx9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJldmVudC1kZXRhaWxcXFwiPiAgfCAge3tldmVudC50aXRsZX19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxcbiAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gKm5nSWY9XFxcInNlbGVjdGVkRGF0ZT8uZXZlbnRzLmxlbmd0aD09MFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1ldmVudHMtbGFiZWxcXFwiPnt7bm9FdmVudHNMYWJlbH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XFxuICAgICAgICAgICAgPC9pb24tbGlzdD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRXZWVrdmlld0hlYWRlclRlbXBsYXRlIGxldC12aWV3RGF0ZT1cXFwidmlld0RhdGVcXFwiPlxcbiAgICAgICAgICAgIHt7IHZpZXdEYXRlLmRheUhlYWRlciB9fVxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEFsbERheUV2ZW50VGVtcGxhdGUgbGV0LWRpc3BsYXlFdmVudD1cXFwiZGlzcGxheUV2ZW50XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYWxlbmRhci1ldmVudC1pbm5lclxcXCI+e3tkaXNwbGF5RXZlbnQuZXZlbnQudGl0bGV9fTwvZGl2PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdE5vcm1hbEV2ZW50VGVtcGxhdGUgbGV0LWRpc3BsYXlFdmVudD1cXFwiZGlzcGxheUV2ZW50XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYWxlbmRhci1ldmVudC1pbm5lclxcXCI+e3tkaXNwbGF5RXZlbnQuZXZlbnQudGl0bGV9fTwvZGl2PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFdlZWtWaWV3QWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGUgbGV0LWRheT1cXFwiZGF5XFxcIiBsZXQtZXZlbnRUZW1wbGF0ZT1cXFwiZXZlbnRUZW1wbGF0ZVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XFxcInsnY2FsZW5kYXItZXZlbnQtd3JhcCc6IGRheS5ldmVudHN9XFxcIiAqbmdJZj1cXFwiZGF5LmV2ZW50c1xcXCJcXG4gICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cXFwie2hlaWdodDogMjUqZGF5LmV2ZW50cy5sZW5ndGgrJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGRpc3BsYXlFdmVudCBvZiBkYXkuZXZlbnRzXFxcIiBjbGFzcz1cXFwiY2FsZW5kYXItZXZlbnRcXFwiIHRhcHBhYmxlXFxuICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwiZXZlbnRTZWxlY3RlZChkaXNwbGF5RXZlbnQuZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cXFwie3RvcDogMjUqZGlzcGxheUV2ZW50LnBvc2l0aW9uKydweCcsIHdpZHRoOiAxMDAqKGRpc3BsYXlFdmVudC5lbmRJbmRleC1kaXNwbGF5RXZlbnQuc3RhcnRJbmRleCkrJyUnLCBoZWlnaHQ6ICcyNXB4J31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwiZXZlbnRUZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVxcXCJ7ZGlzcGxheUV2ZW50OmRpc3BsYXlFdmVudH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0RGF5Vmlld0FsbERheUV2ZW50U2VjdGlvblRlbXBsYXRlIGxldC1hbGxEYXlFdmVudHM9XFxcImFsbERheUV2ZW50c1xcXCIgbGV0LWV2ZW50VGVtcGxhdGU9XFxcImV2ZW50VGVtcGxhdGVcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgZGlzcGxheUV2ZW50IG9mIGFsbERheUV2ZW50czsgbGV0IGV2ZW50SW5kZXg9aW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FsZW5kYXItZXZlbnRcXFwiIHRhcHBhYmxlXFxuICAgICAgICAgICAgICAgICAoY2xpY2spPVxcXCJldmVudFNlbGVjdGVkKGRpc3BsYXlFdmVudC5ldmVudClcXFwiXFxuICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XFxcInt0b3A6IDI1KmV2ZW50SW5kZXgrJ3B4Jyx3aWR0aDogJzEwMCUnLGhlaWdodDonMjVweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cXFwiZXZlbnRUZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcIntkaXNwbGF5RXZlbnQ6ZGlzcGxheUV2ZW50fVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0Tm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGUgbGV0LXRtPVxcXCJ0bVxcXCIgbGV0LWhvdXJQYXJ0cz1cXFwiaG91clBhcnRzXFxcIiBsZXQtZXZlbnRUZW1wbGF0ZT1cXFwiZXZlbnRUZW1wbGF0ZVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XFxcInsnY2FsZW5kYXItZXZlbnQtd3JhcCc6IHRtLmV2ZW50c31cXFwiICpuZ0lmPVxcXCJ0bS5ldmVudHNcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGRpc3BsYXlFdmVudCBvZiB0bS5ldmVudHNcXFwiIGNsYXNzPVxcXCJjYWxlbmRhci1ldmVudFxcXCIgdGFwcGFibGVcXG4gICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVxcXCJldmVudFNlbGVjdGVkKGRpc3BsYXlFdmVudC5ldmVudClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVxcXCJ7dG9wOiAoMzcqZGlzcGxheUV2ZW50LnN0YXJ0T2Zmc2V0L2hvdXJQYXJ0cykrJ3B4JyxsZWZ0OiAxMDAvZGlzcGxheUV2ZW50Lm92ZXJsYXBOdW1iZXIqZGlzcGxheUV2ZW50LnBvc2l0aW9uKyclJywgd2lkdGg6IDEwMC9kaXNwbGF5RXZlbnQub3ZlcmxhcE51bWJlcisnJScsIGhlaWdodDogMzcqKGRpc3BsYXlFdmVudC5lbmRJbmRleCAtZGlzcGxheUV2ZW50LnN0YXJ0SW5kZXggLSAoZGlzcGxheUV2ZW50LmVuZE9mZnNldCArIGRpc3BsYXlFdmVudC5zdGFydE9mZnNldCkvaG91clBhcnRzKSsncHgnfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVxcXCJldmVudFRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XFxcIntkaXNwbGF5RXZlbnQ6ZGlzcGxheUV2ZW50fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRJbmFjdGl2ZUFsbERheUV2ZW50U2VjdGlvblRlbXBsYXRlPlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEluYWN0aXZlTm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGU+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcblxcbiAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVxcXCJjYWxlbmRhck1vZGVcXFwiIGNsYXNzPVxcXCJ7e2NhbGVuZGFyTW9kZX19dmlldy1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxtb250aHZpZXcgKm5nU3dpdGNoQ2FzZT1cXFwiJ21vbnRoJ1xcXCJcXG4gICAgICAgICAgICAgICAgW2Zvcm1hdERheV09XFxcImZvcm1hdERheVxcXCJcXG4gICAgICAgICAgICAgICAgW2Zvcm1hdERheUhlYWRlcl09XFxcImZvcm1hdERheUhlYWRlclxcXCJcXG4gICAgICAgICAgICAgICAgW2Zvcm1hdE1vbnRoVGl0bGVdPVxcXCJmb3JtYXRNb250aFRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICBbc3RhcnRpbmdEYXlNb250aF09XFxcInN0YXJ0aW5nRGF5TW9udGhcXFwiXFxuICAgICAgICAgICAgICAgIFtzaG93RXZlbnREZXRhaWxdPVxcXCJzaG93RXZlbnREZXRhaWxcXFwiXFxuICAgICAgICAgICAgICAgIFtub0V2ZW50c0xhYmVsXT1cXFwibm9FdmVudHNMYWJlbFxcXCJcXG4gICAgICAgICAgICAgICAgW2F1dG9TZWxlY3RdPVxcXCJhdXRvU2VsZWN0XFxcIlxcbiAgICAgICAgICAgICAgICBbZXZlbnRTb3VyY2VdPVxcXCJldmVudFNvdXJjZVxcXCJcXG4gICAgICAgICAgICAgICAgW21hcmtEaXNhYmxlZF09XFxcIm1hcmtEaXNhYmxlZFxcXCJcXG4gICAgICAgICAgICAgICAgW21vbnRodmlld0Rpc3BsYXlFdmVudFRlbXBsYXRlXT1cXFwibW9udGh2aWV3RGlzcGxheUV2ZW50VGVtcGxhdGV8fG1vbnRodmlld0RlZmF1bHREaXNwbGF5RXZlbnRUZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgW21vbnRodmlld0luYWN0aXZlRGlzcGxheUV2ZW50VGVtcGxhdGVdPVxcXCJtb250aHZpZXdJbmFjdGl2ZURpc3BsYXlFdmVudFRlbXBsYXRlfHxtb250aHZpZXdEZWZhdWx0RGlzcGxheUV2ZW50VGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgIFttb250aHZpZXdFdmVudERldGFpbFRlbXBsYXRlXT1cXFwibW9udGh2aWV3RXZlbnREZXRhaWxUZW1wbGF0ZXx8bW9udGh2aWV3RGVmYXVsdEV2ZW50RGV0YWlsVGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgIFtsb2NhbGVdPVxcXCJsb2NhbGVcXFwiXFxuICAgICAgICAgICAgICAgIFtkYXRlRm9ybWF0dGVyXT1cXFwiZGF0ZUZvcm1hdHRlclxcXCJcXG4gICAgICAgICAgICAgICAgW2Rpcl09XFxcImRpclxcXCJcXG4gICAgICAgICAgICAgICAgW2xvY2tTd2lwZVRvUHJldl09XFxcImxvY2tTd2lwZVRvUHJldlxcXCJcXG4gICAgICAgICAgICAgICAgW2xvY2tTd2lwZXNdPVxcXCJsb2NrU3dpcGVzXFxcIlxcbiAgICAgICAgICAgICAgICBbc2xpZGVyT3B0aW9uc109XFxcInNsaWRlck9wdGlvbnNcXFwiICAgICAgIFxcbiAgICAgICAgICAgICAgICAob25SYW5nZUNoYW5nZWQpPVxcXCJyYW5nZUNoYW5nZWQoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgKG9uRXZlbnRTZWxlY3RlZCk9XFxcImV2ZW50U2VsZWN0ZWQoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgKG9uVGltZVNlbGVjdGVkKT1cXFwidGltZVNlbGVjdGVkKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIChvblRpdGxlQ2hhbmdlZCk9XFxcInRpdGxlQ2hhbmdlZCgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICA8L21vbnRodmlldz5cXG4gICAgICAgICAgICA8d2Vla3ZpZXcgKm5nU3dpdGNoQ2FzZT1cXFwiJ3dlZWsnXFxcIlxcbiAgICAgICAgICAgICAgICBbZm9ybWF0V2Vla1RpdGxlXT1cXFwiZm9ybWF0V2Vla1RpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICBbZm9ybWF0V2Vla1ZpZXdEYXlIZWFkZXJdPVxcXCJmb3JtYXRXZWVrVmlld0RheUhlYWRlclxcXCJcXG4gICAgICAgICAgICAgICAgW2Zvcm1hdEhvdXJDb2x1bW5dPVxcXCJmb3JtYXRIb3VyQ29sdW1uXFxcIlxcbiAgICAgICAgICAgICAgICBbc3RhcnRpbmdEYXlXZWVrXT1cXFwic3RhcnRpbmdEYXlXZWVrXFxcIlxcbiAgICAgICAgICAgICAgICBbYWxsRGF5TGFiZWxdPVxcXCJhbGxEYXlMYWJlbFxcXCJcXG4gICAgICAgICAgICAgICAgW2hvdXJQYXJ0c109XFxcImhvdXJQYXJ0c1xcXCJcXG4gICAgICAgICAgICAgICAgW2F1dG9TZWxlY3RdPVxcXCJhdXRvU2VsZWN0XFxcIlxcbiAgICAgICAgICAgICAgICBbaG91clNlZ21lbnRzXT1cXFwiaG91clNlZ21lbnRzXFxcIlxcbiAgICAgICAgICAgICAgICBbZXZlbnRTb3VyY2VdPVxcXCJldmVudFNvdXJjZVxcXCJcXG4gICAgICAgICAgICAgICAgW21hcmtEaXNhYmxlZF09XFxcIm1hcmtEaXNhYmxlZFxcXCJcXG4gICAgICAgICAgICAgICAgW3dlZWt2aWV3SGVhZGVyVGVtcGxhdGVdPVxcXCJ3ZWVrdmlld0hlYWRlclRlbXBsYXRlfHxkZWZhdWx0V2Vla3ZpZXdIZWFkZXJUZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgW3dlZWt2aWV3QWxsRGF5RXZlbnRUZW1wbGF0ZV09XFxcIndlZWt2aWV3QWxsRGF5RXZlbnRUZW1wbGF0ZXx8ZGVmYXVsdEFsbERheUV2ZW50VGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgIFt3ZWVrdmlld05vcm1hbEV2ZW50VGVtcGxhdGVdPVxcXCJ3ZWVrdmlld05vcm1hbEV2ZW50VGVtcGxhdGV8fGRlZmF1bHROb3JtYWxFdmVudFRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICBbd2Vla3ZpZXdBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZV09XFxcIndlZWt2aWV3QWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGV8fGRlZmF1bHRXZWVrVmlld0FsbERheUV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICBbd2Vla3ZpZXdOb3JtYWxFdmVudFNlY3Rpb25UZW1wbGF0ZV09XFxcIndlZWt2aWV3Tm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGV8fGRlZmF1bHROb3JtYWxFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgW3dlZWt2aWV3SW5hY3RpdmVBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZV09XFxcIndlZWt2aWV3SW5hY3RpdmVBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZXx8ZGVmYXVsdEluYWN0aXZlQWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgIFt3ZWVrdmlld0luYWN0aXZlTm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGVdPVxcXCJ3ZWVrdmlld0luYWN0aXZlTm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGV8fGRlZmF1bHRJbmFjdGl2ZU5vcm1hbEV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICBbbG9jYWxlXT1cXFwibG9jYWxlXFxcIlxcbiAgICAgICAgICAgICAgICBbZGF0ZUZvcm1hdHRlcl09XFxcImRhdGVGb3JtYXR0ZXJcXFwiXFxuICAgICAgICAgICAgICAgIFtkaXJdPVxcXCJkaXJcXFwiXFxuICAgICAgICAgICAgICAgIFtzY3JvbGxUb0hvdXJdPVxcXCJzY3JvbGxUb0hvdXJcXFwiXFxuICAgICAgICAgICAgICAgIFtwcmVzZXJ2ZVNjcm9sbFBvc2l0aW9uXT1cXFwicHJlc2VydmVTY3JvbGxQb3NpdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgW2xvY2tTd2lwZVRvUHJldl09XFxcImxvY2tTd2lwZVRvUHJldlxcXCJcXG4gICAgICAgICAgICAgICAgW2xvY2tTd2lwZXNdPVxcXCJsb2NrU3dpcGVzXFxcIlxcbiAgICAgICAgICAgICAgICBbc3RhcnRIb3VyXT1cXFwic3RhcnRIb3VyXFxcIlxcbiAgICAgICAgICAgICAgICBbZW5kSG91cl09XFxcImVuZEhvdXJcXFwiXFxuICAgICAgICAgICAgICAgIFtzbGlkZXJPcHRpb25zXT1cXFwic2xpZGVyT3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgKG9uUmFuZ2VDaGFuZ2VkKT1cXFwicmFuZ2VDaGFuZ2VkKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIChvbkV2ZW50U2VsZWN0ZWQpPVxcXCJldmVudFNlbGVjdGVkKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIChvblRpbWVTZWxlY3RlZCk9XFxcInRpbWVTZWxlY3RlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAob25UaXRsZUNoYW5nZWQpPVxcXCJ0aXRsZUNoYW5nZWQoJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgPC93ZWVrdmlldz5cXG4gICAgICAgICAgICA8ZGF5dmlldyAqbmdTd2l0Y2hDYXNlPVxcXCInZGF5J1xcXCJcXG4gICAgICAgICAgICAgICAgW2Zvcm1hdERheVRpdGxlXT1cXFwiZm9ybWF0RGF5VGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgIFtmb3JtYXRIb3VyQ29sdW1uXT1cXFwiZm9ybWF0SG91ckNvbHVtblxcXCJcXG4gICAgICAgICAgICAgICAgW2FsbERheUxhYmVsXT1cXFwiYWxsRGF5TGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgIFtob3VyUGFydHNdPVxcXCJob3VyUGFydHNcXFwiXFxuICAgICAgICAgICAgICAgIFtob3VyU2VnbWVudHNdPVxcXCJob3VyU2VnbWVudHNcXFwiXFxuICAgICAgICAgICAgICAgIFtldmVudFNvdXJjZV09XFxcImV2ZW50U291cmNlXFxcIlxcbiAgICAgICAgICAgICAgICBbbWFya0Rpc2FibGVkXT1cXFwibWFya0Rpc2FibGVkXFxcIlxcbiAgICAgICAgICAgICAgICBbZGF5dmlld0FsbERheUV2ZW50VGVtcGxhdGVdPVxcXCJkYXl2aWV3QWxsRGF5RXZlbnRUZW1wbGF0ZXx8ZGVmYXVsdEFsbERheUV2ZW50VGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgIFtkYXl2aWV3Tm9ybWFsRXZlbnRUZW1wbGF0ZV09XFxcImRheXZpZXdOb3JtYWxFdmVudFRlbXBsYXRlfHxkZWZhdWx0Tm9ybWFsRXZlbnRUZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgW2RheXZpZXdBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZV09XFxcImRheXZpZXdBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZXx8ZGVmYXVsdERheVZpZXdBbGxEYXlFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCIgXFxuICAgICAgICAgICAgICAgIFtkYXl2aWV3Tm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGVdPVxcXCJkYXl2aWV3Tm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGV8fGRlZmF1bHROb3JtYWxFdmVudFNlY3Rpb25UZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgW2RheXZpZXdJbmFjdGl2ZUFsbERheUV2ZW50U2VjdGlvblRlbXBsYXRlXT1cXFwiZGF5dmlld0luYWN0aXZlQWxsRGF5RXZlbnRTZWN0aW9uVGVtcGxhdGV8fGRlZmF1bHRJbmFjdGl2ZUFsbERheUV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIiBcXG4gICAgICAgICAgICAgICAgW2RheXZpZXdJbmFjdGl2ZU5vcm1hbEV2ZW50U2VjdGlvblRlbXBsYXRlXT1cXFwiZGF5dmlld0luYWN0aXZlTm9ybWFsRXZlbnRTZWN0aW9uVGVtcGxhdGV8fGRlZmF1bHRJbmFjdGl2ZU5vcm1hbEV2ZW50U2VjdGlvblRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICBbbG9jYWxlXT1cXFwibG9jYWxlXFxcIlxcbiAgICAgICAgICAgICAgICBbZGF0ZUZvcm1hdHRlcl09XFxcImRhdGVGb3JtYXR0ZXJcXFwiXFxuICAgICAgICAgICAgICAgIFtkaXJdPVxcXCJkaXJcXFwiXFxuICAgICAgICAgICAgICAgIFtzY3JvbGxUb0hvdXJdPVxcXCJzY3JvbGxUb0hvdXJcXFwiXFxuICAgICAgICAgICAgICAgIFtwcmVzZXJ2ZVNjcm9sbFBvc2l0aW9uXT1cXFwicHJlc2VydmVTY3JvbGxQb3NpdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgW2xvY2tTd2lwZVRvUHJldl09XFxcImxvY2tTd2lwZVRvUHJldlxcXCJcXG4gICAgICAgICAgICAgICAgW2xvY2tTd2lwZXNdPVxcXCJsb2NrU3dpcGVzXFxcIlxcbiAgICAgICAgICAgICAgICBbc3RhcnRIb3VyXT1cXFwic3RhcnRIb3VyXFxcIlxcbiAgICAgICAgICAgICAgICBbZW5kSG91cl09XFxcImVuZEhvdXJcXFwiXFxuICAgICAgICAgICAgICAgIFtzbGlkZXJPcHRpb25zXT1cXFwic2xpZGVyT3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgKG9uUmFuZ2VDaGFuZ2VkKT1cXFwicmFuZ2VDaGFuZ2VkKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIChvbkV2ZW50U2VsZWN0ZWQpPVxcXCJldmVudFNlbGVjdGVkKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIChvblRpbWVTZWxlY3RlZCk9XFxcInRpbWVTZWxlY3RlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAob25UaXRsZUNoYW5nZWQpPVxcXCJ0aXRsZUNoYW5nZWQoJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgPC9kYXl2aWV3PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLFxuICAgICAgICAgICAgc3R5bGVzOiBbXCJcXG4gICAgICAgIDpob3N0ID4gZGl2IHsgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuICAgICAgICAuZXZlbnQtZGV0YWlsLWNvbnRhaW5lciB7XFxuICAgICAgICAgIGJvcmRlci10b3A6IDJweCBkYXJrZ3JleSBzb2xpZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5uby1ldmVudHMtbGFiZWwge1xcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgY29sb3I6IGRhcmtncmV5O1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZXZlbnQtZGV0YWlsIHtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb250aHZpZXctZXZlbnRkZXRhaWwtdGltZWNvbHVtbiB7XFxuICAgICAgICAgIHdpZHRoOiAxMTBweDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jYWxlbmRhci1ldmVudC1pbm5lciB7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTg3YWQ7XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAgICAgICAuY2FsZW5kYXItZXZlbnQtaW5uZXIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICBcIl0sXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtDYWxlbmRhclNlcnZpY2VdXG4gICAgICAgIH0pLFxuICAgICAgICB0c2xpYl8xLl9fcGFyYW0oMSwgSW5qZWN0KExPQ0FMRV9JRCkpLFxuICAgICAgICB0c2xpYl8xLl9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQ2FsZW5kYXJTZXJ2aWNlLCBTdHJpbmddKVxuICAgIF0sIENhbGVuZGFyQ29tcG9uZW50KTtcbiAgICByZXR1cm4gQ2FsZW5kYXJDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfTtcbiJdfQ==

      /***/

    },

    /***/
    "oksz":
    /*!************************************************************!*\
      !*** ./node_modules/ionic2-calendar/__ivy_ngcc__/index.js ***!
      \************************************************************/

    /*! exports provided: NgCalendarModule, CalendarComponent */

    /***/
    function oksz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _calendar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar.module */
      "gCGO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NgCalendarModule", function () {
        return _calendar_module__WEBPACK_IMPORTED_MODULE_0__["NgCalendarModule"];
      });
      /* harmony import */


      var _calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calendar */
      "l0mM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
        return _calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"];
      }); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTmdDYWxlbmRhck1vZHVsZSB9IGZyb20gJy4vY2FsZW5kYXIubW9kdWxlJztcbiJdfQ==

      /***/

    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map