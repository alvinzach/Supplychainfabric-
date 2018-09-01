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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container\">\n        <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/warehouse/warehouse.component */ "./src/app/components/warehouse/warehouse.component.ts");
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/collection/collection.component */ "./src/app/components/collection/collection.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_data_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/data/data.component */ "./src/app/components/data/data.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'collection', component: _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_7__["CollectionComponent"] },
    { path: 'customer', component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"] },
    { path: 'warehouse', component: _components_warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_6__["WarehouseComponent"] },
    { path: 'provenance', component: _components_data_data_component__WEBPACK_IMPORTED_MODULE_10__["DataComponent"] },
    { path: '', redirectTo: '/warehouse', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_6__["WarehouseComponent"],
                _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_7__["CollectionComponent"],
                _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _components_data_data_component__WEBPACK_IMPORTED_MODULE_10__["DataComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/collection/collection.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/collection/collection.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/collection/collection.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/collection/collection.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n   \n  <input type=\"text\" class=\"form-control\" [(ngModel)] =\"id\" name=\"id\"/> <br>\n  <input type=\"text\" class=\"form-control\" [(ngModel)] =\"status\" name=\"status\"/> <br>\n  <input type=\"submit\" class=\"btn btn-lg btn-primary\" (click)=\"submit()\" />\n  \n  <div *ngIf=\"loading\" class=\"alert alert-light\" role=\"alert\">\n      Updating ledger ..\n  </div>\n  <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n      Ledger updated\n  </div>\n  <div *ngIf=\"failure\" class=\"alert alert-danger\" role=\"alert\">\n      Some error occoured\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/collection/collection.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/collection/collection.component.ts ***!
  \***************************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(api) {
        this.api = api;
        this.id = '';
        this.status = '';
        this.loading = false;
        this.success = false;
        this.failure = false;
    }
    CollectionComponent.prototype.ngOnInit = function () {
    };
    CollectionComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.success = false;
        this.failure = false;
        this.api.addCollectionEntry({ id: this.id, status: this.status }).subscribe(function (data) {
            _this.result = JSON.stringify(data);
            console.log(data);
            if (data.success) {
                _this.success = true;
            }
            else {
                _this.failure = true;
            }
            _this.loading = false;
        });
    };
    CollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collection',
            template: __webpack_require__(/*! ./collection.component.html */ "./src/app/components/collection/collection.component.html"),
            styles: [__webpack_require__(/*! ./collection.component.css */ "./src/app/components/collection/collection.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customer/customer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/customer/customer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n   \n  <input type=\"text\" class=\"form-control\" [(ngModel)] =\"id\" name=\"id\"/> <br>\n  <input type=\"submit\" class=\"btn btn-lg btn-primary\" (click)=\"submit()\" />\n  \n  <div *ngIf=\"loading\" class=\"alert alert-light\" role=\"alert\">\n      checkung status\n  </div> <br>\n  <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n      The package is at <b> {{location}}</b> . Status : <b>{{status}}</b>\n  </div>\n  <div *ngIf=\"failure\" class=\"alert alert-danger\" role=\"alert\">\n      Some error occoured\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(api) {
        this.api = api;
        this.id = '';
        this.loading = false;
        this.success = false;
        this.failure = false;
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.success = false;
        this.failure = false;
        this.api.getData({ id: this.id }).subscribe(function (data) {
            _this.result = JSON.stringify(data);
            console.log(data);
            if (data.success) {
                _this.success = true;
                _this.location = JSON.parse(_this.result).message.location;
                _this.status = JSON.parse(_this.result).message.status;
            }
            else {
                _this.failure = true;
            }
            _this.loading = false;
        });
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/components/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/data/data.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/data/data.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/data/data.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/data/data.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n   \n  <input type=\"text\" class=\"form-control\" [(ngModel)] =\"id\" name=\"id\"/> <br>\n  <input type=\"submit\" class=\"btn btn-lg btn-primary\" (click)=\"submit()\" />\n  \n  <div *ngIf=\"loading\" class=\"alert alert-light\" role=\"alert\">\n      checking status\n  </div> <br>\n  <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n      successfully queried\n  </div>\n  <div *ngIf=\"success\" >\n    {{result}}\n  </div>\n  <div *ngIf=\"failure\" class=\"alert alert-danger\" role=\"alert\">\n      Some error occoured\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/data/data.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/data/data.component.ts ***!
  \***************************************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataComponent = /** @class */ (function () {
    function DataComponent(api) {
        this.api = api;
        this.id = '';
        this.status = '';
        this.loading = false;
        this.success = false;
        this.failure = false;
    }
    DataComponent.prototype.ngOnInit = function () {
    };
    DataComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.success = false;
        this.failure = false;
        this.api.dataProvenance({ id: this.id }).subscribe(function (data) {
            _this.result = JSON.stringify(data.message);
            console.log(data);
            if (data.success) {
                _this.success = true;
            }
            else {
                _this.failure = true;
            }
            _this.loading = false;
        });
    };
    DataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data',
            template: __webpack_require__(/*! ./data.component.html */ "./src/app/components/data/data.component.html"),
            styles: [__webpack_require__(/*! ./data.component.css */ "./src/app/components/data/data.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Supplychain</a>\n      </div>\n  \n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        \n        <ul class=\"nav navbar-nav navbar-right\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/warehouse\" >Warehouse</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/collection\" >Collection Centre</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/customer\" >Customer</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/provenance\" >Data Provenance</a></li>\n\n        </ul>\n        \n      </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/warehouse/warehouse.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/warehouse/warehouse.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/warehouse/warehouse.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/warehouse/warehouse.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n   \n        <input type=\"text\" class=\"form-control\" [(ngModel)] =\"id\" name=\"id\"/> <br>\n        <input type=\"text\" class=\"form-control\" [(ngModel)] =\"status\" name=\"status\"/> <br>\n        <input type=\"submit\" class=\"btn btn-lg btn-primary\" (click)=\"submit()\" />\n        \n        <div *ngIf=\"loading\" class=\"alert alert-light\" role=\"alert\">\n            Updating ledger ..\n        </div>\n        <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n            Ledger updated\n        </div>\n        <div *ngIf=\"failure\" class=\"alert alert-danger\" role=\"alert\">\n            Some error occoured\n        </div>\n      \n</form>\n"

/***/ }),

/***/ "./src/app/components/warehouse/warehouse.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/warehouse/warehouse.component.ts ***!
  \*************************************************************/
/*! exports provided: WarehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseComponent", function() { return WarehouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WarehouseComponent = /** @class */ (function () {
    function WarehouseComponent(api) {
        this.api = api;
        this.id = '';
        this.status = '';
        this.loading = false;
        this.success = false;
        this.failure = false;
    }
    WarehouseComponent.prototype.ngOnInit = function () {
    };
    WarehouseComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.success = false;
        this.failure = false;
        this.api.addWarehouseEntry({ id: this.id, status: this.status }).subscribe(function (data) {
            _this.result = JSON.stringify(data);
            console.log(data);
            if (data.success) {
                _this.success = true;
            }
            else {
                _this.failure = true;
            }
            _this.loading = false;
        });
    };
    WarehouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warehouse',
            template: __webpack_require__(/*! ./warehouse.component.html */ "./src/app/components/warehouse/warehouse.component.html"),
            styles: [__webpack_require__(/*! ./warehouse.component.css */ "./src/app/components/warehouse/warehouse.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], WarehouseComponent);
    return WarehouseComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.addWarehouseEntry = function (details) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/warehouse/add', details, { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiService.prototype.addCollectionEntry = function (details) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/collection/add', details, { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiService.prototype.getData = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/getStatus', id, { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiService.prototype.dataProvenance = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/provenance', id, { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ApiService);
    return ApiService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/alvin/Data/workspace/supply-chain/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map