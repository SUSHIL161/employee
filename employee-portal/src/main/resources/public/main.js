(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");




var routes = [
    { path: 'employee', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-employee></app-employee>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app-employee';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n  </div>\n<div class=\"header\" *ngIf=\"i18text\">\n    <button id=\"emp-reg\" class=\"tablink\" (click)=\"selectView('registration', 'viewAll',false)\" id=\"defaultOpen\">{{ i18text.employee.headers.registration | translate }}</button>\n    <button id=\"emp-list\" class=\"tablink\" (click)=\"selectView('viewAll', 'registration',true)\">{{ i18text.employee.headers.list | translate }}</button>\n</div>\n<div class=\"view-details\" *ngIf=\"i18text && showView && showView.viewAll\">\n    <div class=\"emp-details\">\n      <h3 class=\"employee-header\"> {{ i18text.employee.headers.list | translate }}</h3>\n      \n    </div>\n    <div>\n        <div class=\"emp-table\">\n          <table>\n            <tr>\n              <th class=\"emp-row-header\" *ngFor=\"let header of headers\">{{ header  | translate }}</th>\n              <th>    \n                <span>\n                  <input class= \"search-txt-stnd\" pInputText *ngIf=\"isSearch\" id=\"seyszstd_srch_inp\" placeholder=\"{{ 'search' | translate }}\"\n                type=\"text\"  (keyup)=\"searchEmployeeByText($event)\" [(ngModel)]=\"searchText\" #searchTxt (blur)=\"isSearch=!($event.target.value==='');\"/>\n              </span>\n              <span class=\"card-hdr-icons card-inj-icons\" *ngIf=\"!isSearch\">\n                  <img id=\"seyszstd_srch_img\" alt=\"Search\" src=\"assets/images/icon_Search_copy.svg\"\n                  (click)=\"searchEmplolyee($event)\" [ngStyle]=\"{'cursor': 'pointer'}\"/>\n              </span>\n              </th>\n            </tr>\n            <tr class=\"emp-row\" *ngFor=\"let employee of  employees\">\n              <td> {{ employee.firstName | translate }} </td>\n              <td> {{ employee.lastName | translate }} </td>\n              <td> {{ employee.gender | translate }} </td>\n              <td> {{ employee.dateOfBirth | translate }} </td>\n              <td> {{ employee.department | translate }} </td>\n             <td> \n\n                <img id=\"editEmployee\" alt=\"delete\" src=\"assets/images/edit.svg\" \n                (click)=\"onUpdate(employee)\" [ngStyle]=\"{'cursor': 'pointer'}\"/>\n                &nbsp;&nbsp;\n\n                <img id=\"deleteEmployee\" alt=\"delete\" src=\"assets/images/delete-button-svgrepo-com.svg\" \n                (click)=\"deleteEmplolyee(employee.empID)\" [ngStyle]=\"{'cursor': 'pointer'}\"/>\n\n              <!-- <button (click)=\"deleteItemClicked( rowData )\" pButton type=\"button\" icon=\"pi pi-trash\" class=\"ui-button-danger\"></button> -->\n\n             </td>\n\n            </tr>\n          </table>\n        </div>\n    </div>\n</div>\n<div class=\"container\" *ngIf=\"i18text && showView && showView.registration\">\n    <h3 class=\"employee-header\">{{ i18text.employee.form.registration | translate }}</h3>\n      <div class=\"form-group\">\n        <label for=\"firstName\"> {{ i18text.employee.form.firstName | translate }} </label>\n        <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)] = \"employee.firstName\"\n          name=\"firstName\" #firstName=\"ngModel\" required pattern = \"^[a-zA-Z0-9]+$\"\n          (ngModelChange)=\"parseText('firstName')\" (blur)=\"parseText('firstName')\"\n          placeholder=\"{{ i18text.employee.form.label.firstName | translate }}\" name=\"firstName\">\n          <span class=\"label-error\" *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\">\n            <i *ngIf=\"(firstName.errors && firstName.errors.required) || (errorMap && errorMap['firstName'])\">** {{ 'employee.validator.firstName.empty' | translate }} </i>\n            <i *ngIf=\"(firstName.errors && firstName.errors.pattern)\">** {{ 'employee.validator.firstName.valid' | translate }} </i>\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastName\">{{ i18text.employee.form.lastName | translate }}</label>\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)] = \"employee.lastName\"\n          name=\"lastName\" #lastName=\"ngModel\" required pattern = \"^[a-zA-Z0-9]+$\"\n          (ngModelChange)=\"parseText('lastName')\" (blur)=\"parseText('lastName')\"\n          placeholder=\"{{ i18text.employee.form.label.lastName | translate }}\">\n          <span class=\"label-error\" *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\">\n              <i *ngIf=\"(lastName.errors && lastName.errors.required)\">** {{ 'employee.validator.lastName.empty' | translate }} </i>\n              <i *ngIf=\"(lastName.errors && lastName.errors.pattern)\">** {{ 'employee.validator.lastName.valid' | translate }} </i>\n          </span>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"gender-male\"> {{ i18text.employee.form.label.gender | translate }} </label> &nbsp; &nbsp;\n        <div class=\"form-check-inline\">\n          <label class=\"form-check-label\" for=\"gender-male\">\n            <input type=\"radio\" class=\"form-check-input\" id=\"gender-male\" [(ngModel)]=\"employee.gender\"\n            name=\"gender\" value=\"{{ i18text.employee.form.male | translate }}\" checked>\n            {{ i18text.employee.form.male | translate }}\n          </label>\n        </div>\n        <div class=\"form-check-inline\">\n          <label class=\"gender-female\" for=\"gender-female\">\n            <input type=\"radio\" class=\"form-check-input\" id=\"gender-female\" [(ngModel)]=\"employee.gender\"\n             name=\"gender\" value=\"{{ i18text.employee.form.female | translate }}\">\n            {{ i18text.employee.form.female | translate }}\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"dateOfBirth\"> {{ i18text.employee.form.label.dateOfBirth | translate }} </label>\n          <input type=\"date\" class=\"form-control\" id=\"dateOfBirth\" [(ngModel)] = \"employee.dateOfBirth\"\n          name=\"dateOfBirth\" #dateOfBirth=\"ngModel\" required\n          (ngModelChange)=\"parseText('dateOfBirth')\" (blur)=\"parseText('dateOfBirth')\"\n          placeholder=\"{{ i18text.employee.form.label.dateOfBirth | translate }}\" name=\"dateOfBirth\">\n          <span class=\"label-error\" *ngIf=\"dateOfBirth.invalid && (dateOfBirth.dirty || dateOfBirth.touched)\">\n              <i *ngIf=\"(dateOfBirth.errors && dateOfBirth.errors.required)\">** {{ 'employee.validator.dateOfBirth.empty' | translate }} </i>\n          </span>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"department\"> {{ i18text.employee.form.label.department | translate }} </label>\n          <input type=\"text\" class=\"form-control\" id=\"department\" [(ngModel)] = \"employee.department\"\n          name=\"department\" #department=\"ngModel\" required pattern = \"^[a-zA-Z0-9]+$\"\n          (ngModelChange)=\"parseText('department')\" (blur)=\"parseText('department')\"\n          placeholder=\"{{ i18text.employee.form.label.department | translate }}\" name=\"department\">\n          <span class=\"label-error\" *ngIf=\"department.invalid && (department.dirty || department.touched)\">\n              <i *ngIf=\"(department.errors && department.errors.required)\">** {{ 'employee.validator.department.empty' | translate }} </i>\n              <i *ngIf=\"(department.errors && department.errors.pattern)\">** {{ 'employee.validator.department.valid' | translate }} </i>\n          </span>\n      </div>\n      <button type=\"submit\" (click) = \"submit()\" class=\"btn btn-primary\"\n       [disabled] = \"isError()\">\n        {{ i18text.employee.form.submit | translate }}\n      </button>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/employee/employee.component.scss":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 80%;\n  border: 1px solid #ddd; }\n\nth, td {\n  text-align: left;\n  padding: 8px; }\n\ntr {\n  border-style: double; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n.emp-row:hover {\n  background-color: lightgrey;\n  cursor: pointer; }\n\n.emp-table {\n  white-space: nowrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow-x: auto;\n  display: -webkit-box; }\n\n.tablink {\n  background-color: #555;\n  color: white;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  font-size: 17px;\n  width: 50%; }\n\n.tablink:hover {\n  background-color: #777; }\n\n/* Style the tab content */\n\n.tabcontent {\n  color: white;\n  display: none;\n  padding: 50px;\n  text-align: center; }\n\n.tablink:active {\n  background-color: white; }\n\n.header {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex; }\n\n.sidenav {\n  height: 100%;\n  width: 3%;\n  position: fixed;\n  z-index: 1;\n  top: 0px;\n  left: 0;\n  background-color: #555;\n  overflow-x: hidden; }\n\nbutton:active {\n  background: gray; }\n\nbutton:focus {\n  background: gray; }\n\n.emp-row-header {\n  background-color: #e2e2e2; }\n\nth, td, h3 {\n  font-weight: 500; }\n\n.employee-header {\n  text-align: center; }\n\n.label-error {\n  color: #de5246;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdXNoaWwuc2luZ2gvY29kZS9naXRodWIvbXlhcHAvZW1wbG95ZWUvYXBwLWVtcGxveWVlL3NyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxzQkFBc0IsRUFBQTs7QUFFekI7RUFDRSxTQUFTO0VBQ1QseUNBQXlDLEVBQUE7O0FBRTNDO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFFZDtFQUNFLG9CQUFvQixFQUFBOztBQUV0QjtFQUFtQix5QkFBeUIsRUFBQTs7QUFFNUM7RUFDRSwyQkFBMEI7RUFDMUIsZUFBZSxFQUFBOztBQUVqQjtFQUNJLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUdaO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCLDBCQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsdUJBQXNCLEVBQUE7O0FBRXhCO0VBQ0Usd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRO0VBQ1IsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxuXG5ib2R5IHsgXG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG4gIFxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xufVxudHIge1xuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbn1cbnRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyfVxuXG4uZW1wLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZW1wLXRhYmxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG59XG4udGFibGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogNTAlO1xufVxuXG4udGFibGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG59XG5cbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xuLnRhYmNvbnRlbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YWJsaW5rOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG59XG4uaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDMlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5idXR0b246YWN0aXZle1xuICBiYWNrZ3JvdW5kOiBncmF5O1xufVxuYnV0dG9uOmZvY3Vze1xuICBiYWNrZ3JvdW5kOiBncmF5O1xufVxuLmVtcC1yb3ctaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbn1cbnRoLCB0ZCwgaDMge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmVtcGxveWVlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sYWJlbC1lcnJvciB7XG4gIGNvbG9yOiAjZGU1MjQ2O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(dataService, translateService) {
        var _this = this;
        this.dataService = dataService;
        this.translateService = translateService;
        this.employees = [];
        this.headers = [];
        this.employee = {};
        this.showView = {};
        this.isupdate = false;
        this.employeeBeingEdited = {};
        this.formError = {};
        this.isSearch = false;
        this.errorMap = {};
        this.onUpdate = function (employee) {
            _this.employee = JSON.parse(JSON.stringify(employee));
            _this.employeeBeingEdited = JSON.parse(JSON.stringify(employee));
            _this.showView['registration'] = true;
            _this.showView['viewAll'] = false;
            _this.isupdate = true;
        };
        this.sortEmployee = function () {
            _this.employees.sort(function (first, second) { return first.firstName.toLowerCase() > second.firstName.toLowerCase() ? 1 : first.firstName.toLowerCase() < second.firstName.toLowerCase() ? -1 : 0; });
            _this.employee = {};
            _this.showView.registration = false;
            _this.showView.viewAll = true;
        };
        this.validateEmployee = function () {
            if (!_this.employee.firstName) {
                alert(_this.i18text.employee.validator.firstName.empty);
                return false;
            }
            else {
                delete _this.errorMap['firstName'];
            }
            if (!_this.employee.lastName) {
                alert(_this.i18text.employee.validator.lastName.empty);
                return false;
            }
            if (!_this.employee.gender) {
                alert(_this.i18text.employee.validator.gender.empty);
                return false;
            }
            if (!_this.employee.dateOfBirth) {
                alert(_this.i18text.employee.validator.dateOfBirth.empty);
                return false;
            }
            if (!_this.employee.department) {
                alert(_this.i18text.employee.validator.department.empty);
                return false;
            }
            return true;
        };
        this.submit = function () {
            if (_this.validateEmployee()) {
                if (_this.isupdate) {
                    _this.dataService.updateEmployee(_this.employee.empID, _this.employee).subscribe(function (response) {
                        if (response.body.success && response.body.employee) {
                            var index = _this.employees.findIndex(function (employee) { return employee.empID === _this.employeeBeingEdited.empID; });
                            _this.employee = response.body.employee;
                            if (index >= 0) {
                                _this.employees[index] = _this.employee;
                                alert(_this.i18text.employee.operation.updateSuccess);
                                _this.sortEmployee();
                            }
                            else {
                                alert(_this.i18text.updateFail);
                            }
                        }
                        else {
                            alert(_this.i18text.updateFail);
                        }
                    }, function (error) {
                        alert(_this.i18text.updateFail);
                    });
                }
                else {
                    _this.dataService.addEmployee(_this.employee).subscribe(function (response) {
                        if (response.body.success && response.body.employee) {
                            _this.employee = response.body.employee;
                            _this.employees.push(_this.employee);
                            _this.sortEmployee();
                            alert(_this.i18text.employee.operation.saveSuccess);
                        }
                        else {
                            alert(_this.i18text.employee.operation.saveFail);
                        }
                    }), function (error) {
                        alert(_this.i18text.employee.operation.saveFail);
                    };
                }
            }
        };
        this.selectView = function (option1, option2, isupdate) {
            _this.showView[option1] = true;
            _this.showView[option2] = false;
            _this.employee = {};
            _this.formError = {};
            _this.isupdate = isupdate;
            _this.errorMap = {};
            _this.searchText = '';
        };
        this.parseText = function (key) {
            if (_this.employee[key] && _this.employee[key].trim().length > 0) {
                delete _this.formError[key];
            }
            else {
                _this.formError[key] = true;
            }
        };
        this.isError = function () { return Object.keys(_this.formError).length > 0; };
        this.searchEmplolyee = function () {
            _this.isSearch = !_this.isSearch;
            setTimeout(function () {
                if (_this.searchField) {
                    _this.searchField.nativeElement.focus();
                }
            }, 0);
        };
        this.searchEmployeeByText = function (event) {
            var searchTerm = _this.searchText;
            _this.dataService.getAllEmployees().subscribe(function (response) {
                _this.employees = response;
                if (_this.searchText && _this.searchText.trim().length > 0) {
                    _this.employees = _this.employees.filter(function (employee) { return employee.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                        || employee.lastName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                        || employee.dateOfBirth.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase())
                        || employee.gender.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase())
                        || employee.department.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase()); });
                }
            }, function (error) { });
        };
        this.deleteEmplolyee = function (empID) {
            _this.dataService.deleteEmployee(empID).subscribe(function (response) {
                if (response.success) {
                    _this.employees = _this.employees.filter(function (employee) { return employee.empID != empID; });
                    alert("Employee deleted");
                }
                else {
                    alert("not deleted");
                }
            }, function (error) {
                console.log("error");
            });
        };
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');
        this.translateService.get('employee').subscribe(function (res) {
            _this.i18text = { 'employee': res };
        }, function (error) {
        });
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllEmployees().subscribe(function (response) { _this.employees = response; }, function (error) { });
        this.headers = ['First Name', 'Last Name', 'Gender', 'Date of Birth', 'Department'];
        this.showView = {
            'registration': true,
            'viewAll': false
        };
        this.textPattern = new RegExp(/^[a-zA-Z][a-zA-Z]*$/g);
        this.isupdate = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchTxt'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EmployeeComponent.prototype, "searchField", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.get = function (url) {
        return this.http.get(url);
    };
    ApiService.prototype.post = function (url, data) {
        return this.http.post(url, data);
    };
    ApiService.prototype.postJSONData = function (path, body, enableHttpHeaders) {
        if (body === void 0) { body = {}; }
        var httpOptions = {};
        if (enableHttpHeaders) {
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                }),
                withCredentials: false,
                observe: 'response'
            };
        }
        return this.http.post(path, body, httpOptions);
    };
    ApiService.prototype.putJSONData = function (path, body, enableHttpHeaders) {
        if (body === void 0) { body = {}; }
        var httpOptions = {};
        if (enableHttpHeaders) {
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                }),
                withCredentials: false,
                observe: 'response'
            };
        }
        return this.http.put(path, body, httpOptions);
    };
    ApiService.prototype.deleteData = function (path) {
        return this.http.delete(path);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");



var DataService = /** @class */ (function () {
    function DataService(apiService) {
        this.apiService = apiService;
    }
    DataService.prototype.getAllEmployees = function () {
        return this.apiService.get("http://localhost:7075/getAllEmployees");
    };
    DataService.prototype.addEmployee = function (employee) {
        return this.apiService.postJSONData("http://localhost:7075/addEmployee", employee, true);
    };
    DataService.prototype.updateEmployee = function (empID, employee) {
        return this.apiService.putJSONData("http://localhost:7075/updateEmployee/" + empID, JSON.stringify(employee), true);
    };
    DataService.prototype.deleteEmployee = function (empID) {
        return this.apiService.deleteData("http://localhost:7075/deleteEmployee/" + empID);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sushil.singh/code/github/myapp/employee/app-employee/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map