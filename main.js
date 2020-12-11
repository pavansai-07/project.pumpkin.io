(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adetails/adetails.component.ts":
/*!************************************************!*\
  !*** ./src/app/adetails/adetails.component.ts ***!
  \************************************************/
/*! exports provided: AdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdetailsComponent", function() { return AdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../details/details.component */ "./src/app/details/details.component.ts");




class AdetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdetailsComponent.ɵfac = function AdetailsComponent_Factory(t) { return new (t || AdetailsComponent)(); };
AdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdetailsComponent, selectors: [["app-adetails"]], decls: 2, vars: 0, template: function AdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-details");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZXRhaWxzL2FkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adetails',
                templateUrl: './adetails.component.html',
                styleUrls: ['./adetails.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/agrifarmer/agrifarmer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/agrifarmer/agrifarmer.component.ts ***!
  \****************************************************/
/*! exports provided: AgrifarmerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgrifarmerComponent", function() { return AgrifarmerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _fcontent_fcontent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fcontent/fcontent.component */ "./src/app/fcontent/fcontent.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");





class AgrifarmerComponent {
    constructor() {
        this.crops = [
            { cropn: "Paddy", "path1": "/assets/images/download.jfif" },
            { cropn: "Sugarcane", "path1": "/assets/images/cane.jfif" },
            { cropn: "Watermelon", "path1": "/assets/images/melon.jfif" },
            { cropn: "Tomato", "path1": "/assets/images/tomato.jfif" },
        ];
        this.crops1 = [
            { cropn: "Maize(Corn)", "path1": "/assets/images/corn.jfif" },
            { cropn: "Cotton", "path1": "/assets/images/cotton.jfif" },
            { cropn: "Millets", "path1": "/assets/images/millet.jfif" },
            { cropn: "Mastard", "path1": "/assets/images/mustard.jfif" },
        ];
        this.names = ["paddy", "tomato", "maize", "millets", "sugarcane", "melon", "cotton"];
    }
    ngOnInit() {
    }
}
AgrifarmerComponent.ɵfac = function AgrifarmerComponent_Factory(t) { return new (t || AgrifarmerComponent)(); };
AgrifarmerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgrifarmerComponent, selectors: [["app-agrifarmer"]], decls: 4, vars: 0, consts: [[2, "background-image", "url(assets/images/f1.jpg)", "height", "100vh", "background-size", "cover"]], template: function AgrifarmerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-fcontent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _fcontent_fcontent_component__WEBPACK_IMPORTED_MODULE_2__["FcontentComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".ca[_ngcontent-%COMP%]\r\n{\r\n\tmin-width: 300px;\r\n\tbox-shadow: 5px 10px 18px #888888;}\r\n\r\n.ca1[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: flex-end;\r\n\t\r\n\r\n}\r\n\r\n.responsive[_ngcontent-%COMP%] {\r\n\twidth: 60%;\r\n\theight: auto;\r\n  }\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\ttext-align: left;\r\n\tcolor: black;\r\n  }\r\n\r\n\r\n\r\n.centered[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdyaWZhcm1lci9hZ3JpZmFybWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsZ0JBQWdCO0NBQ2hCLGlDQUFpQyxDQUFDOztBQUVuQztDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLG9DQUFvQzs7QUFFckM7O0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtFQUNYOztBQUVBO0NBQ0Qsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixZQUFZO0VBQ1g7O0FBR0Esa0JBQWtCOztBQUNsQjtDQUNELGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULGdDQUFnQztFQUMvQiIsImZpbGUiOiJzcmMvYXBwL2FncmlmYXJtZXIvYWdyaWZhcm1lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhXHJcbntcclxuXHRtaW4td2lkdGg6IDMwMHB4O1xyXG5cdGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzg4ODg4ODt9XHJcblxyXG4uY2ExIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHQvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXHJcblxyXG59XHJcbi5yZXNwb25zaXZlIHtcclxuXHR3aWR0aDogNjAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcblxyXG4gIC8qIENlbnRlcmVkIHRleHQgKi9cclxuICAuY2VudGVyZWQge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgrifarmerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agrifarmer',
                templateUrl: './agrifarmer.component.html',
                styleUrls: ['./agrifarmer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/agrimerchant/agrimerchant.component.ts":
/*!********************************************************!*\
  !*** ./src/app/agrimerchant/agrimerchant.component.ts ***!
  \********************************************************/
/*! exports provided: AgrimerchantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgrimerchantComponent", function() { return AgrimerchantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _fcontent_fcontent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fcontent/fcontent.component */ "./src/app/fcontent/fcontent.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");





class AgrimerchantComponent {
    constructor() {
        this.value = '';
    }
    ngOnInit() {
    }
    onEnter(value) {
        this.value = value;
    }
}
AgrimerchantComponent.ɵfac = function AgrimerchantComponent_Factory(t) { return new (t || AgrimerchantComponent)(); };
AgrimerchantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgrimerchantComponent, selectors: [["app-agrimerchant"]], decls: 4, vars: 0, consts: [[2, "background-image", "url(assets/images/f2.jpg)", "height", "100vh", "background-size", "cover"]], template: function AgrimerchantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-fcontent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _fcontent_fcontent_component__WEBPACK_IMPORTED_MODULE_2__["FcontentComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  display: block;\r\n  top: 0px;\r\n  position: relative;\r\n  max-width: 262px;\r\n  \r\n  border-radius: 4px;\r\n  padding: 32px 24px;\r\n  margin: 12px;\r\n  text-decoration: none;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  border: 1px solid #f2f8f9;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    transition: all 0.2s ease-out;\r\n    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);\r\n    top: -4px;\r\n    border: 1px solid #5c5a5a;\r\n    background-color: darkslategray;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdyaW1lcmNoYW50L2FncmltZXJjaGFudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLDZDQUE2QztJQUM3QyxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLCtCQUErQjtFQUNqQyIsImZpbGUiOiJzcmMvYXBwL2FncmltZXJjaGFudC9hZ3JpbWVyY2hhbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0b3A6IDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAyNjJweDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmOGY5OyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAzMnB4IDI0cHg7XHJcbiAgbWFyZ2luOiAxMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB6LWluZGV4OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyZjhmOTtcclxufVxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgzOCwgMzgsIDM4LCAwLjIpO1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzVjNWE1YTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgfVxyXG5cclxuICBcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgrimerchantComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agrimerchant',
                templateUrl: './agrimerchant.component.html',
                styleUrls: ['./agrimerchant.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _agrifarmer_agrifarmer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agrifarmer/agrifarmer.component */ "./src/app/agrifarmer/agrifarmer.component.ts");
/* harmony import */ var _aquafarmer_aquafarmer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aquafarmer/aquafarmer.component */ "./src/app/aquafarmer/aquafarmer.component.ts");
/* harmony import */ var _agrimerchant_agrimerchant_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agrimerchant/agrimerchant.component */ "./src/app/agrimerchant/agrimerchant.component.ts");
/* harmony import */ var _aquamerchant_aquamerchant_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aquamerchant/aquamerchant.component */ "./src/app/aquamerchant/aquamerchant.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slideshow/slideshow.component */ "./src/app/slideshow/slideshow.component.ts");
/* harmony import */ var _mdetails_mdetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mdetails/mdetails.component */ "./src/app/mdetails/mdetails.component.ts");
/* harmony import */ var _markets_markets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./markets/markets.component */ "./src/app/markets/markets.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _adetails_adetails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./adetails/adetails.component */ "./src/app/adetails/adetails.component.ts");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/articles/articles.component.ts");
/* harmony import */ var _crops_crops_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./crops/crops.component */ "./src/app/crops/crops.component.ts");
/* harmony import */ var _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile-edit/profile-edit.component */ "./src/app/profile-edit/profile-edit.component.ts");
/* harmony import */ var _registere_registere_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./registere/registere.component */ "./src/app/registere/registere.component.ts");

























const routes = [
    { path: 'header', component: _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"] },
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'title', component: _title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'agrifarmer', component: _agrifarmer_agrifarmer_component__WEBPACK_IMPORTED_MODULE_6__["AgrifarmerComponent"] },
    { path: 'agrimerchant', component: _agrimerchant_agrimerchant_component__WEBPACK_IMPORTED_MODULE_8__["AgrimerchantComponent"] },
    { path: 'aquafarmer', component: _aquafarmer_aquafarmer_component__WEBPACK_IMPORTED_MODULE_7__["AquafarmerComponent"] },
    { path: 'aquamerchant', component: _aquamerchant_aquamerchant_component__WEBPACK_IMPORTED_MODULE_9__["AquamerchantComponent"] },
    { path: "sell", component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_10__["SellComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'slides', component: _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_13__["SlideshowComponent"] },
    { path: 'mdetails', component: _mdetails_mdetails_component__WEBPACK_IMPORTED_MODULE_14__["MdetailsComponent"] },
    { path: 'markets', component: _markets_markets_component__WEBPACK_IMPORTED_MODULE_15__["MarketsComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_17__["DetailsComponent"] },
    { path: 'adetails', component: _adetails_adetails_component__WEBPACK_IMPORTED_MODULE_18__["AdetailsComponent"] },
    { path: 'articles', component: _articles_articles_component__WEBPACK_IMPORTED_MODULE_19__["ArticlesComponent"] },
    { path: 'crops', component: _crops_crops_component__WEBPACK_IMPORTED_MODULE_20__["CropsComponent"] },
    { path: "profile-edit", component: _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_21__["ProfileEditComponent"] },
    { path: "edit-profile", component: _registere_registere_component__WEBPACK_IMPORTED_MODULE_22__["RegistereComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'projpumpkin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _agrifarmer_agrifarmer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./agrifarmer/agrifarmer.component */ "./src/app/agrifarmer/agrifarmer.component.ts");
/* harmony import */ var _agrimerchant_agrimerchant_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./agrimerchant/agrimerchant.component */ "./src/app/agrimerchant/agrimerchant.component.ts");
/* harmony import */ var _aquafarmer_aquafarmer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aquafarmer/aquafarmer.component */ "./src/app/aquafarmer/aquafarmer.component.ts");
/* harmony import */ var _aquamerchant_aquamerchant_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aquamerchant/aquamerchant.component */ "./src/app/aquamerchant/aquamerchant.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _markets_markets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./markets/markets.component */ "./src/app/markets/markets.component.ts");
/* harmony import */ var _mdetails_mdetails_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mdetails/mdetails.component */ "./src/app/mdetails/mdetails.component.ts");
/* harmony import */ var _adetails_adetails_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./adetails/adetails.component */ "./src/app/adetails/adetails.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _crops_crops_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./crops/crops.component */ "./src/app/crops/crops.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./slideshow/slideshow.component */ "./src/app/slideshow/slideshow.component.ts");
/* harmony import */ var _fcontent_fcontent_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./fcontent/fcontent.component */ "./src/app/fcontent/fcontent.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/articles/articles.component.ts");
/* harmony import */ var _aquaarticle_aquaarticle_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./aquaarticle/aquaarticle.component */ "./src/app/aquaarticle/aquaarticle.component.ts");
/* harmony import */ var _article1_article1_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./article1/article1.component */ "./src/app/article1/article1.component.ts");
/* harmony import */ var _article2_article2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./article2/article2.component */ "./src/app/article2/article2.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _article3_article3_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./article3/article3.component */ "./src/app/article3/article3.component.ts");
/* harmony import */ var _article4_article4_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./article4/article4.component */ "./src/app/article4/article4.component.ts");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./description/description.component */ "./src/app/description/description.component.ts");
/* harmony import */ var _article5_article5_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./article5/article5.component */ "./src/app/article5/article5.component.ts");
/* harmony import */ var _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./profile-edit/profile-edit.component */ "./src/app/profile-edit/profile-edit.component.ts");
/* harmony import */ var _registere_registere_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./registere/registere.component */ "./src/app/registere/registere.component.ts");








































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
        _agrifarmer_agrifarmer_component__WEBPACK_IMPORTED_MODULE_9__["AgrifarmerComponent"],
        _agrimerchant_agrimerchant_component__WEBPACK_IMPORTED_MODULE_10__["AgrimerchantComponent"],
        _aquafarmer_aquafarmer_component__WEBPACK_IMPORTED_MODULE_11__["AquafarmerComponent"],
        _aquamerchant_aquamerchant_component__WEBPACK_IMPORTED_MODULE_12__["AquamerchantComponent"],
        _sell_sell_component__WEBPACK_IMPORTED_MODULE_13__["SellComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
        _markets_markets_component__WEBPACK_IMPORTED_MODULE_15__["MarketsComponent"],
        _mdetails_mdetails_component__WEBPACK_IMPORTED_MODULE_16__["MdetailsComponent"],
        _adetails_adetails_component__WEBPACK_IMPORTED_MODULE_17__["AdetailsComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
        _title_title_component__WEBPACK_IMPORTED_MODULE_20__["TitleComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
        _crops_crops_component__WEBPACK_IMPORTED_MODULE_23__["CropsComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
        _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_25__["SlideshowComponent"],
        _fcontent_fcontent_component__WEBPACK_IMPORTED_MODULE_26__["FcontentComponent"],
        _details_details_component__WEBPACK_IMPORTED_MODULE_27__["DetailsComponent"],
        _articles_articles_component__WEBPACK_IMPORTED_MODULE_28__["ArticlesComponent"],
        _aquaarticle_aquaarticle_component__WEBPACK_IMPORTED_MODULE_29__["AquaarticleComponent"],
        _article1_article1_component__WEBPACK_IMPORTED_MODULE_30__["Article1Component"],
        _article2_article2_component__WEBPACK_IMPORTED_MODULE_31__["Article2Component"],
        _panel_panel_component__WEBPACK_IMPORTED_MODULE_32__["PanelComponent"],
        _article3_article3_component__WEBPACK_IMPORTED_MODULE_33__["Article3Component"],
        _article4_article4_component__WEBPACK_IMPORTED_MODULE_34__["Article4Component"],
        _description_description_component__WEBPACK_IMPORTED_MODULE_35__["DescriptionComponent"],
        _article5_article5_component__WEBPACK_IMPORTED_MODULE_36__["Article5Component"],
        _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_37__["ProfileEditComponent"],
        _registere_registere_component__WEBPACK_IMPORTED_MODULE_38__["RegistereComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                    _agrifarmer_agrifarmer_component__WEBPACK_IMPORTED_MODULE_9__["AgrifarmerComponent"],
                    _agrimerchant_agrimerchant_component__WEBPACK_IMPORTED_MODULE_10__["AgrimerchantComponent"],
                    _aquafarmer_aquafarmer_component__WEBPACK_IMPORTED_MODULE_11__["AquafarmerComponent"],
                    _aquamerchant_aquamerchant_component__WEBPACK_IMPORTED_MODULE_12__["AquamerchantComponent"],
                    _sell_sell_component__WEBPACK_IMPORTED_MODULE_13__["SellComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                    _markets_markets_component__WEBPACK_IMPORTED_MODULE_15__["MarketsComponent"],
                    _mdetails_mdetails_component__WEBPACK_IMPORTED_MODULE_16__["MdetailsComponent"],
                    _adetails_adetails_component__WEBPACK_IMPORTED_MODULE_17__["AdetailsComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                    _title_title_component__WEBPACK_IMPORTED_MODULE_20__["TitleComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                    _crops_crops_component__WEBPACK_IMPORTED_MODULE_23__["CropsComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
                    _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_25__["SlideshowComponent"],
                    _fcontent_fcontent_component__WEBPACK_IMPORTED_MODULE_26__["FcontentComponent"],
                    _details_details_component__WEBPACK_IMPORTED_MODULE_27__["DetailsComponent"],
                    _articles_articles_component__WEBPACK_IMPORTED_MODULE_28__["ArticlesComponent"],
                    _aquaarticle_aquaarticle_component__WEBPACK_IMPORTED_MODULE_29__["AquaarticleComponent"],
                    _article1_article1_component__WEBPACK_IMPORTED_MODULE_30__["Article1Component"],
                    _article2_article2_component__WEBPACK_IMPORTED_MODULE_31__["Article2Component"],
                    _panel_panel_component__WEBPACK_IMPORTED_MODULE_32__["PanelComponent"],
                    _article3_article3_component__WEBPACK_IMPORTED_MODULE_33__["Article3Component"],
                    _article4_article4_component__WEBPACK_IMPORTED_MODULE_34__["Article4Component"],
                    _description_description_component__WEBPACK_IMPORTED_MODULE_35__["DescriptionComponent"],
                    _article5_article5_component__WEBPACK_IMPORTED_MODULE_36__["Article5Component"],
                    _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_37__["ProfileEditComponent"],
                    _registere_registere_component__WEBPACK_IMPORTED_MODULE_38__["RegistereComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/aquaarticle/aquaarticle.component.ts":
/*!******************************************************!*\
  !*** ./src/app/aquaarticle/aquaarticle.component.ts ***!
  \******************************************************/
/*! exports provided: AquaarticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AquaarticleComponent", function() { return AquaarticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AquaarticleComponent {
    constructor() { }
    ngOnInit() {
    }
}
AquaarticleComponent.ɵfac = function AquaarticleComponent_Factory(t) { return new (t || AquaarticleComponent)(); };
AquaarticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AquaarticleComponent, selectors: [["app-aquaarticle"]], decls: 38, vars: 0, consts: [[1, "separator", 2, "clear", "both", "text-align", "center"], ["href", "https://www.aquaculturealliance.org/wp-content/uploads/2019/10/ANAND-India-carp-Pic-2-1280x471.jpg", 2, "clear", "left", "float", "left", "margin-bottom", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "294", "data-original-width", "800", "height", "471", "src", "https://www.aquaculturealliance.org/wp-content/uploads/2019/10/ANAND-India-carp-Pic-2-1280x471.jpg", "width", "456"]], template: function AquaarticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total fish production in India in 2018 is estimated at 6.24 million metric tons (MMT), which is close to two-thirds of the total fish production in the country from both capture and culture sources. The growth in the fish farming sector mainly comes from the freshwater aquaculture sector, as marine finfish culture is hardly practiced on a large scale. About 12.8 percent of total animal protein consumed in India comes from freshwater fish.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Historically, the Indian freshwater fish farming was based on a multi-species system. Natural fish food organisms were generated by adding organic and inorganic manure to water and the multi-species utilize this food based on the trophic system in the pond.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "A combination of Indian major carps \u2013 including catla (Labeo catla), rohu (Labeo rohita) and mrigala (Cirrhinus mrigala) \u2013 were used as the main target species for culture, as well as a few Chinese carp species like silver carp (Hypophthalmichthys molitrix), grass carp (Ctenopharyngodon idella) and occasionally common carp (Cyprinus carpio). The very high level of technology developed for induced breeding of carps and the abundance of agri-byproducts used as supplemental feed led to the rapid development of freshwater aquaculture in the country.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "For a long time, India did not change from this type of fish farming. Nutritionally poor feed ingredients in loose form were fed to fish using feed bags or by directly broadcasting it into the ponds. The feed conversion ratios (FCR) in this type of feeding systems range from 3 to 4 kg of feed to 1 kg of fish production. Fish are normally harvested at 1 to 1.2 kg body weight after 8 to 10 months. They are marketed in iced condition to important consumption markets, which are about 24 to 48 hours away by road.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The introduction and popularization of feed-based fish farming in India has resulted in many other advantages. The amount of organic loading that supplemental feed contributed to water bodies in the country has significantly been reduced due to introduction of formulated feeds. If 1 MMT of formulated feed has been used in 2019 for fish farming at an approximate FCR yield of 1.5, it has clearly displaced the traditional fish feeds which operated at 3 to 4 FCR to a kilogram of fish production. In other words, about 2 to 3 MMT of nutritionally poor, agri-based feed supplements have not been applied into ponds since the use of formulated feeds began. India has only 4 percent of worlds water resources and 17 percent of world\u2019s population and thus water conservation is of prime importance. Thus, it is imperative to conclude that the feed-based system has contributed significantly to water conservation which is a subject of national importance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "It is estimated that only 10 to 15 percent of Indian freshwater fish have been brought under feed-based farming, and a great majority of freshwater aquaculture still has scope for converting to this system, which if properly addressed will contribute more to resource savings and at the same time increase fish production in the country.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "The feed-based system has clearly led to some recent, small developments in the species diversification efforts. Modern feed mills with good imported equipment can now produce high-protein, high-energy feeds for species like the Asian sea bass or barramundi (Lates calcarifer), snakeheads (largely Channa striatus), pompano (Trachinotus blochii ) and cobia (Rachycentron canadum) and this is seen asencouragement for farming new species.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "With about 30 high-tech feed mills currently operating for fish feed production, the sector has generated significant employment opportunities for skilled as well as non-skilled workers. Allied businesses like feed equipment manufacturers (domestic and international firms), feed additive and raw material suppliers and other infrastructure support for this new sector are helping, which is a major change and development for the industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FxdWFhcnRpY2xlL2FxdWFhcnRpY2xlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AquaarticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aquaarticle',
                templateUrl: './aquaarticle.component.html',
                styleUrls: ['./aquaarticle.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/aquafarmer/aquafarmer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/aquafarmer/aquafarmer.component.ts ***!
  \****************************************************/
/*! exports provided: AquafarmerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AquafarmerComponent", function() { return AquafarmerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _fcontent_fcontent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fcontent/fcontent.component */ "./src/app/fcontent/fcontent.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");






class AquafarmerComponent {
    constructor(router) {
        this.cardname = [
            { name: "Profile", path: "assets/images/profile.png", link: "/profile" },
            { name: "Markets", path: "assets/images/marketimg.png", link: "/markets" }
        ];
        this.cardname1 = [
            { name: 'Prices', path: "assets/images/pricesimg.png", link: "/sell" },
            { name: 'Merchants', path: "assets/images/merchantimg.png", link: "/mdetails" }
        ];
        router.events.subscribe((url) => console.log(url));
        console.log(router.url);
        this.name = router.url;
    }
    ngOnInit() {
    }
    click(router) {
        router.navigate(['/sell']);
    }
}
AquafarmerComponent.ɵfac = function AquafarmerComponent_Factory(t) { return new (t || AquafarmerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AquafarmerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AquafarmerComponent, selectors: [["app-aquafarmer"]], decls: 4, vars: 0, consts: [[2, "background-image", "url(assets/images/f3.jpg)", "height", "100vh", "background-size", "cover"]], template: function AquafarmerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-fcontent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _fcontent_fcontent_component__WEBPACK_IMPORTED_MODULE_3__["FcontentComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.flex-child[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    \r\n}\r\n\r\n.flex-child[_ngcontent-%COMP%]:first-child {\r\n    margin-right: 30px;\r\n}\r\n\r\n.flex-text[_ngcontent-%COMP%]{\r\n    margin-right: 2%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\ttext-align: left;\r\n\tcolor: black;\r\n  }\r\n\r\n.responsive[_ngcontent-%COMP%] {\r\n\twidth: 60%;\r\n\theight: auto;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    min-width: 310px;\r\n    min-height: 170px;\r\n    border-radius: 5%;\r\n    cursor: pointer;\r\n    transition: 0.5s ease;\r\n    box-shadow: 3px 3px rgb(24, 156, 165);\r\n}\r\n\r\n.card1[_ngcontent-%COMP%]:hover {\r\n      transition: all 0.5s ease;\r\n      box-shadow:  4px 5px rgba(38, 38, 38, 0.2);\r\n      top: -5px;\r\n      border: 1px solid #5c5a5a;\r\n      background-color: darkslategray;\r\n    }\r\n\r\n.b1[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        top:75%;\r\n        right: 5%;\r\n        cursor: pointer;\r\n        transition: 0.5s ease;\r\n        background-color: #eb6927;\r\n        border-radius: 100%;\r\n    }\r\n\r\n.b1[_ngcontent-%COMP%]:hover {\r\n        transform: scale(1.05);\r\n        box-shadow: 1px 1px 10px #1ae1f0;\r\n    }\r\n\r\n.background[_ngcontent-%COMP%]{\r\n        background-color: #e7e7e7;\r\n        \r\n    }\r\n\r\n.card1[_ngcontent-%COMP%]{\r\n        width: 350px;\r\n        height: 475px;\r\n        cursor: pointer;\r\n        transition: 0.5s ease;\r\n    }\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n        transform: scale(1.05);\r\n        box-shadow: 5px 5px 10px #2e2f29;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXF1YWZhcm1lci9hcXVhZmFybWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztJQUNQLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsWUFBWTtFQUNYOztBQUNBO0NBQ0QsVUFBVTtDQUNWLFlBQVk7RUFDWDs7QUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHFDQUFxQztBQUN6Qzs7QUFDSTtNQUNFLHlCQUF5QjtNQUN6QiwwQ0FBMEM7TUFDMUMsU0FBUztNQUNULHlCQUF5QjtNQUN6QiwrQkFBK0I7SUFDakM7O0FBRUE7UUFDSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFNBQVM7UUFDVCxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixtQkFBbUI7SUFDdkI7O0FBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsZ0NBQWdDO0lBQ3BDOztBQUNBO1FBQ0kseUJBQXlCOztJQUU3Qjs7QUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmLHFCQUFxQjtJQUN6Qjs7QUFFQTtRQUNJLHNCQUFzQjtRQUN0QixnQ0FBZ0M7SUFDcEMiLCJmaWxlIjoic3JjL2FwcC9hcXVhZmFybWVyL2FxdWFmYXJtZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZmxleC1jaGlsZCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgeWVsbG93OyAqL1xyXG59ICBcclxuXHJcbi5mbGV4LWNoaWxkOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufSBcclxuLmZsZXgtdGV4dHtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAucmVzcG9uc2l2ZSB7XHJcblx0d2lkdGg6IDYwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5jYXJke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi13aWR0aDogMzEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCByZ2IoMjQsIDE1NiwgMTY1KTtcclxufVxyXG4gICAgLmNhcmQxOmhvdmVyIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgYm94LXNoYWRvdzogIDRweCA1cHggcmdiYSgzOCwgMzgsIDM4LCAwLjIpO1xyXG4gICAgICB0b3A6IC01cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1YzVhNWE7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYjF7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDo3NSU7XHJcbiAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViNjkyNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmIxOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjMWFlMWYwO1xyXG4gICAgfVxyXG4gICAgLmJhY2tncm91bmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDF7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDc1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggIzJlMmYyOTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AquafarmerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aquafarmer',
                templateUrl: './aquafarmer.component.html',
                styleUrls: ['./aquafarmer.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/aquamerchant/aquamerchant.component.ts":
/*!********************************************************!*\
  !*** ./src/app/aquamerchant/aquamerchant.component.ts ***!
  \********************************************************/
/*! exports provided: AquamerchantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AquamerchantComponent", function() { return AquamerchantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _fcontent_fcontent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fcontent/fcontent.component */ "./src/app/fcontent/fcontent.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");





class AquamerchantComponent {
    constructor() { }
    ngOnInit() {
    }
}
AquamerchantComponent.ɵfac = function AquamerchantComponent_Factory(t) { return new (t || AquamerchantComponent)(); };
AquamerchantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AquamerchantComponent, selectors: [["app-aquamerchant"]], decls: 4, vars: 0, consts: [[2, "background-image", "url(assets/images/f4.jpg)", "height", "100vh", "background-size", "cover"]], template: function AquamerchantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-fcontent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _fcontent_fcontent_component__WEBPACK_IMPORTED_MODULE_2__["FcontentComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FxdWFtZXJjaGFudC9hcXVhbWVyY2hhbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AquamerchantComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aquamerchant',
                templateUrl: './aquamerchant.component.html',
                styleUrls: ['./aquamerchant.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/article1/article1.component.ts":
/*!************************************************!*\
  !*** ./src/app/article1/article1.component.ts ***!
  \************************************************/
/*! exports provided: Article1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article1Component", function() { return Article1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Article1Component {
    constructor() { }
    ngOnInit() {
    }
}
Article1Component.ɵfac = function Article1Component_Factory(t) { return new (t || Article1Component)(); };
Article1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Article1Component, selectors: [["app-article1"]], decls: 81, vars: 0, consts: [[2, "color", "white"], [1, "separator", 2, "clear", "both", "text-align", "center"], ["href", "https://cosmosmagazine.com/wp-content/uploads/2020/02/180606-agriculture-full.jpg", "imageanchor", "1", 2, "margin-left", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "533", "data-original-width", "800", "height", "355", "src", "https://cosmosmagazine.com/wp-content/uploads/2020/02/180606-agriculture-full.jpg", "width", "533"], ["href", "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat(jpg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ea0bf898c2caa0006e718e2%2F0x0.jpg", 2, "margin-left", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "533", "data-original-width", "800", "height", "309", "src", "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat(jpg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ea0bf898c2caa0006e718e2%2F0x0.jpg", "width", "463"], ["href", "https://i2.wp.com/agfax.com/wp-content/uploads/center_pivot_irrigation_alabama_cooperative_extension.jpg?fit=600%2C300&ssl=1", 2, "margin-left", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "300", "data-original-width", "600", "src", "https://i2.wp.com/agfax.com/wp-content/uploads/center_pivot_irrigation_alabama_cooperative_extension.jpg?fit=600%2C300&ssl=1"]], template: function Article1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Agriculture is the science and art of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture into the twenty-first.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Modern agronomy, plant breeding, agrochemicals such as pesticides and fertilizers, and technological developments have sharply increased yields, while causing widespread ecological and environmental damage. Selective breeding and modern practices in animal husbandry have similarly increased the output of meat, but have raised concerns about animal welfare and environmental damage. Environmental issues include contributions to global warming, depletion of aquifers, deforestation, antibiotic resistance, and growth hormones in industrial meat production. Genetically modified organisms are widely used, although some are banned in certain countries.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The major agricultural products can be broadly grouped into foods, fibers, fuels and raw materials . Food classes include cereals, vegetables, fruits, oils, meat, milk, fungi and eggs. Over one-third of the world's workers are employed in agriculture, second only to the service sector, although the number of agricultural workers in developed countries has decreased significantly over the centuries.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Etymology and scope\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The word agriculture is a late Middle English adaptation of Latin agricult\u016Bra, from ager, \"field\", and cult\u016Bra, \"cultivation\" or \"growing\". While agriculture usually refers to human activities, certain species of ant, termite and beetle have been cultivating crops for up to 60 million years. Agriculture is defined with varying scopes, in its broadest sense using natural resources to \"produce commodities which maintain life, including food, fiber, forest products, horticultural crops, and their related services\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "History\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Origins\u00A0 \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "The development of agriculture enabled the human population to grow many times larger than could be sustained by hunting and gathering. Agriculture began independently in different parts of the globe, and included a diverse range of taxa, in at least 11 separate centres of origin. Wild grains were collected and eaten from at least 105,000 years ago. From around 11,500 years ago, the eight Neolithic founder crops, emmer and einkorn wheat, hulled barley, peas, lentils, bitter vetch, chick peas and flax were cultivated in the Levant. Rice was domesticated in China between 11,500 and 6,200 BC with the earliest known cultivation from 5,700 BC, followed by mung, soy and azuki beans. Sheep were domesticated in Mesopotamia between 13,000 and 11,000 years ago. Cattle were domesticated from the wild aurochs in the areas of modern Turkey and Pakistan some 10,500 years ago. Pig production emerged in Eurasia, including Europe, East Asia and Southwest Asia, where wild boar were first domesticated about 10,500 years ago. In the Andes of South America, the potato was domesticated between 10,000 and 7,000 years ago, along with beans, coca, llamas, alpacas, and guinea pigs. Sugarcane and some root vegetables were domesticated in New Guinea around 9,000 years ago. Sorghum was domesticated in the Sahel region of Africa by 7,000 years ago. Cotton was domesticated in Peru by 5,600 years ago, and was independently domesticated in Eurasia. In Mesoamerica, wild teosinte was bred into maize by 6,000 years ago.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Scholars have offered multiple hypotheses to explain the historical origins of agriculture. Studies of the transition from hunter-gatherer to agricultural societies indicate an initial period of intensification and increasing sedentism; examples are the Natufian culture in the Levant, and the Early Chinese Neolithic in China. Then, wild stands that had previously been harvested started to be planted, and gradually came to be domesticated.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Civilizations\u00A0 \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "In Eurasia, the Sumerians started to live in villages from about 8,000 BC, relying on the Tigris and Euphrates rivers and a canal system for irrigation. Ploughs appear in pictographs around 3,000 BC; seed-ploughs around 2,300 BC. Farmers grew wheat, barley, vegetables such as lentils and onions, and fruits including dates, grapes, and figs. Ancient Egyptian agriculture relied on the Nile River and its seasonal flooding. Farming started in the predynastic period at the end of the Paleolithic, after 10,000 BC. Staple food crops were grains such as wheat and barley, alongside industrial crops such as flax and papyrus. In India, wheat, barley and jujube were domesticated by 9,000 BC, soon followed by sheep and goats. Cattle, sheep and goats were domesticated in Mehrgarh culture by 8,000\u20136,000 BC. Cotton was cultivated by the 5th\u20134th millennium BC. Archeological evidence indicates an animal-drawn plough from 2,500 BC in the Indus Valley Civilisation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "In China, from the 5th century BC there was a nationwide granary system and widespread silk farming. Water-powered grain mills were in use by the 1st century BC, followed by irrigation. By the late 2nd century, heavy ploughs had been developed with iron ploughshares and mouldboards. These spread westwards across Eurasia. Asian rice was domesticated 8,200\u201313,500 years ago&nbsp;\u2013 depending on the molecular clock estimate that is used&nbsp;\u2013 on the Pearl River in southern China with a single genetic origin from the wild rice Oryza rufipogon. In Greece and Rome, the major cereals were wheat, emmer, and barley, alongside vegetables including peas, beans, and olives. Sheep and goats were kept mainly for dairy products.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "In the Americas, crops domesticated in Mesoamerica\u00A0 include squash, beans, and cocoa. Cocoa was being domesticated by the Mayo Chinchipe of the upper Amazon around 3,000 BC.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "The turkey was probably domesticated in Mexico or the American Southwest. The Aztecs developed irrigation systems, formed terraced hillsides, fertilized their soil, and developed chinampas or artificial islands. The Mayas used extensive canal and raised field systems to farm swampland from 400 BC. Coca was domesticated in the Andes, as were the peanut, tomato, tobacco, and pineapple. Animals including llamas, alpacas, and guinea pigs were domesticated there. In North America, the indigenous people of the East domesticated crops such as sunflower, tobacco, squash and Chenopodium. Wild foods including wild rice and maple sugar were harvested. The domesticated strawberry is a hybrid of a Chilean and a North American species, developed by breeding in Europe and North America. The indigenous people of the Southwest and the Pacific Northwest practiced forest gardening and fire-stick farming. The natives controlled fire on a regional scale to create a low-intensity fire ecology that sustained a low-density agriculture in loose rotation; a sort of \"wild\" permaculture. A system of companion planting called the Three Sisters was developed on the Great Plains. The three crops were winter squash, maize, and climbing beans.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Indigenous Australians, long supposed to have been nomadic hunter-gatherers, practised systematic burning to enhance natural productivity in fire-stick farming. The Gunditjmara and other groups developed eel farming and fish trapping systems from some 5,000 years ago. There is evidence of 'intensification' across the whole continent over that period. In two regions of Australia, the central west coast and eastern central, early farmers cultivated yams, native millet, and bush onions, possibly in permanent settlements. After 1492 the Columbian exchange brought New World crops such as maize, potatoes, tomatoes, sweet potatoes and manioc to Europe, and Old World crops such as wheat, barley, rice and turnips, and livestock\u00A0 to the Americas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Irrigation, crop rotation, and fertilizers advanced from the 17th century with the British Agricultural Revolution, allowing global population to rise significantly. Since 1900 agriculture in developed nations, and to a lesser extent in the developing world, has seen large rises in productivity as mechanization replaces human labor, and assisted by synthetic fertilizers, pesticides, and selective breeding. The Haber-Bosch method allowed the synthesis of ammonium nitrate fertilizer on an industrial scale, greatly increasing crop yields and sustaining a further increase in global population. Modern agriculture has raised or encountered ecological, political, and economic issues including water pollution, biofuels, genetically modified organisms, tariffs and farm subsidies, leading to alternative approaches such as the organic movement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Types\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Pastoralism involves managing domesticated animals. In nomadic pastoralism, herds of livestock are moved from place to place in search of pasture, fodder, and water. This type of farming is practised in arid and semi-arid regions of Sahara, Central Asia and some parts of India.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "In shifting cultivation, a small area of forest is cleared by cutting and burning the trees. The cleared land is used for growing crops for a few years until the soil becomes too infertile, and the area is abandoned. Another patch of land is selected and the process is repeated. This type of farming is practiced mainly in areas with abundant rainfall where the forest regenerates quickly. This practice is used in Northeast India, Southeast Asia, and the Amazon Basin.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Subsistence farming is practiced to satisfy family or local needs alone, with little left over for transport elsewhere. It is intensively practiced in Monsoon Asia and South-East Asia.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".c[_ngcontent-%COMP%]{\r\n    max-width: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZTEvYXJ0aWNsZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlMS9hcnRpY2xlMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN7XHJcbiAgICBtYXgtd2lkdGg6IDJweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Article1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article1',
                templateUrl: './article1.component.html',
                styleUrls: ['./article1.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/article2/article2.component.ts":
/*!************************************************!*\
  !*** ./src/app/article2/article2.component.ts ***!
  \************************************************/
/*! exports provided: Article2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article2Component", function() { return Article2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Article2Component {
    constructor() { }
    ngOnInit() {
    }
}
Article2Component.ɵfac = function Article2Component_Factory(t) { return new (t || Article2Component)(); };
Article2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Article2Component, selectors: [["app-article2"]], decls: 87, vars: 0, consts: [[1, "separator", 2, "clear", "both", "text-align", "center"], ["href", "https://www.aquaculturealliance.org/wp-content/uploads/2018/12/Thai-prawn-farm_SS_1500-1024x767.jpg", 2, "clear", "left", "float", "left", "margin-bottom", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "599", "data-original-width", "800", "height", "240", "src", "https://www.aquaculturealliance.org/wp-content/uploads/2018/12/Thai-prawn-farm_SS_1500-1024x767.jpg", "width", "320"], ["href", "https://www.bentoli.com/wp-content/uploads/2017/12/aquaculture.jpg", 2, "clear", "right", "float", "right", "margin-bottom", "1em", "margin-left", "1em"], ["border", "0", "data-original-height", "512", "data-original-width", "683", "height", "240", "src", "https://www.bentoli.com/wp-content/uploads/2017/12/aquaculture.jpg", "width", "320"], ["href", "https://www.perishablenews.com/wp-content/uploads/2019/04/se1234.jpg", 2, "margin-left", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "526", "data-original-width", "700", "height", "240", "src", "https://www.perishablenews.com/wp-content/uploads/2019/04/se1234.jpg", "width", "320"], ["href", "https://oceanservice.noaa.gov/facts/aquaculture-of-poster.jpg", 2, "clear", "left", "float", "left", "margin-bottom", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "449", "data-original-width", "800", "height", "225", "src", "https://oceanservice.noaa.gov/facts/aquaculture-of-poster.jpg", "width", "400"], ["href", "https://civileats.com/wp-content/uploads/2018/08/180802-forage-fish-aquaculture-pen-1.jpg", 2, "clear", "left", "float", "left", "margin-bottom", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "533", "data-original-width", "800", "height", "427", "src", "https://civileats.com/wp-content/uploads/2018/08/180802-forage-fish-aquaculture-pen-1.jpg", "width", "640"], ["href", "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/side_image/public/thumbnails/image/wss-wuse-aquaculture-site.jpg", "imageanchor", "1", 2, "margin-left", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "227", "data-original-width", "340", "height", "427", "src", "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/side_image/public/thumbnails/image/wss-wuse-aquaculture-site.jpg", "width", "640"]], template: function Article2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Aquaculture, also known as aquafarming, is the farming of fish, crustaceans, molluscs, aquatic plants, algae, and other organisms. Aquaculture involves cultivating freshwater and saltwater populations under controlled conditions, and can be contrasted with commercial fishing, which is the harvesting of wild fish. Mariculture commonly known as marine farming refers to aquaculture practiced in marine environments and in underwater habitats.\nAccording to the Food and Agriculture Organization, aquaculture \"is understood to mean the farming of aquatic organisms including fish, molluscs, crustaceans and aquatic plants. Farming implies some form of intervention in the rearing process to enhance production, such as regular stocking, feeding, protection from predators, etc. Farming also implies individual or corporate ownership of the stock being cultivated.\" The reported output from global aquaculture operations in 2014 supplied over one half of the fish and shellfish that is directly consumed by humans; however, there are issues about the reliability of the reported figures. Some forms of aquaculture, such as seaweed farming, have the opportunity to be part of climate change mitigation, while other forms of aquaculture have negative impacts on the environment, such as through nutrient pollution or disease transfer to wild populations.\nHistory The Gunditjmara, the local Aboriginal Australian people in south-western Victoria, Australia, may have raised short-finned eels as early as about 4,580 BCE . Evidence indicates they developed about of volcanic floodplains in the vicinity of Lake Condah into a complex of channels and dams, and used woven traps to capture eels, and preserve them to eat all year round. The Budj Bim Cultural Landscape, a World Heritage Site, is thought to be one of the oldest aquaculture sites in the world.\nOral tradition in China tells of the culture of the common carp, Cyprinus carpio, as long ago as 2000\u20132100 BCE, but the earliest significant evidence lies in the literature, in the earliest monograph on fish culture called The Classic of Fish Culture, by Fan Lai, written around 475 BCE . Another ancient Chinese guide to aquaculture was by Yang Yu Jing, written around 460 BCE, showing that carp farming was becoming more sophisticated. The Jiahu site in China has circumstantial archeological evidence as possibly the oldest aquaculture locations, dating from 6200BCE, but this is speculative. When the waters subsided after river floods, some fish, mainly carp, were trapped in lakes. Early aquaculturists fed their brood using nymphs and silkworm faeces, and ate them.\nAncient Egyptians might have farmed fish from Lake Bardawil about 1,500 BCE, and they traded them with Canaan. Early cultivation methods used bamboo or oak sticks, Floating rafts have been used for mass production since the 1920s.\nIn central Europe, early Christian monasteries adopted Roman aquacultural practices. Aquaculture spread in Europe during the Middle Ages since away from the seacoasts and the big rivers, fish had to be salted so they did not rot. Improvements in transportation during the 19th century made fresh fish easily available and inexpensive, even in inland areas, making aquaculture less popular. The 15th-century fishponds of the Trebon Basin in the Czech Republic are maintained as a UNESCO World Heritage Site.\nHawaiians constructed oceanic fish ponds.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0A remarkable example is the \"Menehune\" fishpond dating from at least 1,000 years ago, at Alekoko. Legend says that it was constructed by the mythical Menehune dwarf people.\nIn the first half of the 18th century, German Stephan Ludwig Jacobi experimented with external fertilization of brown trouts and salmon. He wrote an article \"Von der k\u00FCnstlichen Erzeugung der Forellen und Lachse\" summarizing his findings, and is regarded as the founder of artificial fish rearing in Europe. By the latter decades of the 18th century, oyster farming had begun in estuaries along the Atlantic Coast of North America.\nThe word aquaculture appeared in an 1855 newspaper article in reference to the harvesting of ice. It also appeared in descriptions of the terrestrial agricultural practise of sub-irrigation in the late 19th century before becoming associated primarily with the cultivation of aquatic plant and animal species.\nIn 1859, Stephen Ainsworth of West Bloomfield, New York, began experiments with brook trout. By 1864, Seth Green had established a commercial fish-hatching operation at Caledonia Springs, near Rochester, New York. By 1866, with the involvement of Dr. W. W. Fletcher of Concord, Massachusetts, artificial fish hatcheries were under way in both Canada and the United States. When the Dildo Island fish hatchery opened in Newfoundland in 1889, it was the largest and most advanced in the world. The word aquaculture was used in descriptions of the hatcheries experiments with cod and lobster in 1890.\nBy the 1920s, the American Fish Culture Company of Carolina, Rhode Island, founded in the 1870s was one of the leading producers of trout. During the 1940s, they had perfected the method of manipulating the day and night cycle of fish so that they could be artificially spawned year around.\nCalifornians harvested wild kelp and attempted to manage supply around 1900, later labeling it a wartime resource.\n21st-century practice Harvest stagnation in wild fisheries and overexploitation of popular marine species, combined with a growing demand for high-quality protein, encouraged aquaculturists to domesticate other marine species. At the outset of modern aquaculture, many were optimistic that a \"Blue Revolution\" could take place in aquaculture, just as the Green Revolution of the 20th century had revolutionized agriculture. Although land animals had long been domesticated, most seafood species were still caught from the wild. Concerned about the impact of growing demand for seafood on the world's oceans, prominent ocean explorer Jacques Cousteau wrote in 1973: \"With earth's burgeoning human populations to feed, we must turn to the sea with new understanding and new technology.\"\nAbout 430 of the species cultured were domesticated during the 20th and 21st centuries, of which an estimated 106 came in the decade to 2007.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Given the long-term importance of agriculture, to date, only 0.08% of known land plant species and 0.0002% of known land animal species have been domesticated, compared with 0.17% of known marine plant species and 0.13% of known marine animal species. Domestication typically involves about a decade of scientific research. Domesticating aquatic species involves fewer risks to humans than do land animals, which took a large toll in human lives. Most major human diseases originated in domesticated animals, including diseases such as smallpox and diphtheria, that like most infectious diseases, move to humans from animals. No human pathogens of comparable virulence have yet emerged from marine species.\nBiological control methods to manage parasites are already being used, such as cleaner fish to control sea lice populations in salmon farming. Models are being used to help with spatial planning and siting of fish farms in order to minimize impact.\nThe decline in wild fish stocks has increased the demand for farmed fish. However, finding alternative sources of protein and oil for fish feed is necessary so the aquaculture industry can grow sustainably; otherwise, it represents a great risk for the over-exploitation of forage fish.\nAnother recent issue following the banning in 2008 of organotins by the International Maritime Organization is the need to find environmentally friendly, but still effective, compounds with antifouling effects.\nMany new natural compounds are discovered every year, but producing them on a large enough scale for commercial purposes is almost impossible.\nIt is highly probable that future developments in this field will rely on microorganisms, but greater funding and further research is needed to overcome the lack of knowledge in this field.\nSpecies groups Aquatic plants Microalgae, also referred to as phytoplankton, microphytes, or planktonic algae, constitute the majority of cultivated algae. Macroalgae commonly known as seaweed also have many commercial and industrial uses, but due to their size and specific requirements, they are not easily cultivated on a large scale and are most often taken in the wild.\nIn 2016, aquaculture was the source of 96.5 percent by volume of the total 31.2 million tonnes of wild-collected and cultivated aquatic plants combined. Global production of farmed aquatic plants, overwhelmingly dominated by seaweeds, grew in output volume from 13.5 million tonnes in 1995 to just over 30 million tonnes in 2016.\nSeaweed farming Fish The farming of fish is the most common form of aquaculture. It involves raising fish commercially in tanks, fish ponds, or ocean enclosures, usually for food. A facility that releases juvenile fish into the wild for recreational fishing or to supplement a species' natural numbers is generally referred to as a fish hatchery. Worldwide, the most important fish species used in fish farming are, in order, carp, salmon, tilapia, and catfish. where they are further grown for the market. In 2009, researchers in Australia managed for the first time to coax southern bluefin tuna to breed in landlocked tanks. Southern bluefin tuna are also caught in the wild and fattened in grow-out sea cages in southern Spencer Gulf, South Australia.\nA similar process is used in the salmon-farming section of this industry; juveniles are taken from hatcheries and a variety of methods are used to aid them in their maturation. For example, as stated above, some of the most important fish species in the industry, salmon, can be grown using a cage system. This is done by having netted cages, preferably in open water that has a strong flow, and feeding the salmon a special food mixture that aids their growth.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "This process allows for year-round growth of the fish, thus a higher harvest during the correct seasons. An additional method, known sometimes as sea ranching, has also been used within the industry. Sea ranching involves raising fish in a hatchery for a brief time and then releasing them into marine waters for further development, whereupon the fish are recaptured when they have matured.\nCrustaceans Commercial shrimp farming began in the 1970s, and production grew steeply thereafter. Global production reached more than 1.6 million tonnes in 2003, worth about US$9 billion. About 75% of farmed shrimp is produced in Asia, in particular in China and Thailand. The other 25% is produced mainly in Latin America, where Brazil is the largest producer. Thailand is the largest exporter.\nShrimp farming has changed from its traditional, small-scale form in Southeast Asia into a global industry. Technological advances have led to ever higher densities per unit area, and broodstock is shipped worldwide. Virtually all farmed shrimp are penaeids, and just two species of shrimp, the Pacific white shrimp and the giant tiger prawn, account for about 80% of all farmed shrimp. These industrial monocultures are very susceptible to disease, which has decimated shrimp populations across entire regions. Increasing ecological problems, repeated disease outbreaks, and pressure and criticism from both nongovernmental organizations and consumer countries led to changes in the industry in the late 1990s and generally stronger regulations. In 1999, governments, industry representatives, and environmental organizations initiated a program aimed at developing and promoting more sustainable farming practices through the Seafood Watch program.\nFreshwater prawn farming shares many characteristics with, including many problems with, marine shrimp farming. Unique problems are introduced by the developmental lifecycle of the main species, the giant river prawn.\nThe global annual production of freshwater prawns in 2007 was about 460,000 tonnes, exceeding 1.86 billion dollars. Additionally, China produced about 370,000 tonnes of Chinese river crab.\nIn addition astaciculture is the freshwater farming of crayfish .\nMolluscs Aquacultured shellfish include various oyster, mussel, and clam species. These bivalves are filter and/or deposit feeders, which rely on ambient primary production rather than inputs of fish or other feed. As such, shellfish aquaculture is generally perceived as benign or even beneficial.\nDepending on the species and local conditions, bivalve molluscs are either grown on the beach, on longlines, or suspended from rafts and harvested by hand or by dredging. In May 2017 a Belgian consortium installed the first of two trial mussel farms on a wind farm in the North Sea.\nAbalone farming began in the late 1950s and early 1960s in Japan and China. Since the mid-1990s, this industry has become increasingly successful. Overfishing and poaching have reduced wild populations to the extent that farmed abalone now supplies most abalone meat. Sustainably farmed molluscs can be certified by Seafood Watch and other organizations, including the World Wildlife Fund . WWF initiated the \"Aquaculture Dialogues\" in 2004 to develop measurable and performance-based standards for responsibly farmed seafood. In 2009, WWF co-founded the Aquaculture Stewardship Council with the Dutch Sustainable Trade Initiative to manage the global standards and certification programs.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "After trials in 2012, a commercial \"sea ranch\" was set up in Flinders Bay, Western Australia, to raise abalone. The ranch is based on an artificial reef made up of 5000 separate concrete units called abitats . The 900 kg abitats can host 400 abalone each. The reef is seeded with young abalone from an onshore hatchery. The abalone feed on seaweed that has grown naturally on the habitats, with the ecosystem enrichment of the bay also resulting in growing numbers of dhufish, pink snapper, wrasse, and Samson fish, among other species.\nBrad Adams, from the company, has emphasised the similarity to wild abalone and the difference from shore-based aquaculture. \"We're not aquaculture, we're ranching, because once they're in the water they look after themselves.\"\nOther groups Other groups include aquatic reptiles, amphibians, and miscellaneous invertebrates, such as echinoderms and jellyfish. They are separately graphed at the top right of this section, since they do not contribute enough volume to show clearly on the main graph.\nCommercially harvested echinoderms include sea cucumbers and sea urchins. In China, sea cucumbers are farmed in artificial ponds as large as .\nAround the world Global fish production peaked at about 171 million tonnes in 2016, with aquaculture representing 47 percent of the total and 53 percent if non-food uses are excluded. With capture fishery production relatively static since the late 1980s, aquaculture has been responsible for the continuing growth in the supply of fish for human consumption. The growth rate of worldwide aquaculture has been sustained and rapid, averaging about 8% per year for over 30 years, while the take from wild fisheries has been essentially flat for the last decade. The aquaculture market reached $86 billion in 2009.\nAquaculture is an especially important economic activity in China. Between 1980 and 1997, the Chinese Bureau of Fisheries reports, aquaculture harvests grew at an annual rate of 16.7%, jumping from 1.9 million tonnes to nearly 23 million tonnes. In 2005, China accounted for 70% of world production. Aquaculture is also currently one of the fastest-growing areas of food production in the U.S.\nAbout 90% of all U.S. shrimp consumption is farmed and imported. In recent years, salmon aquaculture has become a major export in southern Chile, especially in Puerto Montt, Chile's fastest-growing city.\nA United Nations report titled The State of the World Fisheries and Aquaculture released in May 2014 maintained fisheries and aquaculture support the livelihoods of some 60 million people in Asia and Africa.\nFAO estimates that in 2016, overall, women accounted for nearly 14 percent of all people directly engaged in the fisheries and aquaculture primary sector. and are often not closely regulated or easily traceable. In the United States, land-based and nearshore aquaculture is regulated at the federal and state levels; however, no national laws govern offshore aquaculture in U.S. exclusive economic zone waters. In June 2011, the Department of Commerce and National Oceanic and Atmospheric Administration released national aquaculture policies to address this issue and \"to meet the growing demand for healthy seafood, to create jobs in coastal communities, and restore vital ecosystems.\" In 2011, Congresswoman Lois Capps introduced the National Sustainable Offshore Aquaculture Act of 2011 \"to establish a regulatory system and research program for sustainable offshore aquaculture in the United States exclusive economic zone\"; however, the bill was not enacted into law.\nOver-reporting China overwhelmingly dominates the world in reported aquaculture output, reporting a total output which is double that of the rest of the world put together. However, there are some historical issues with the accuracy of China's returns.\nIn 2001, the fisheries scientists Reg Watson and Daniel Pauly expressed concerns in a letter to Nature, that China was over reporting its catch from wild fisheries in the 1990s. They said that made it appear that the global catch since 1988 was increasing annually by 300,000 tonnes, whereas it was really shrinking annually by 350,000 tonnes. Watson and Pauly suggested this may be have been related to Chinese policies where state entities that monitored the economy were also tasked with increasing output. Also, until more recently, the promotion of Chinese officials was based on production increases from their own areas.\nChina disputed this claim. The official Xinhua News Agency quoted Yang Jian, director general of the Agriculture Ministry's Bureau of Fisheries, as saying that China's figures were \"basically correct\". However, the FAO accepted there were issues with the reliability of China's statistical returns, and for a period treated data from China, including the aquaculture data, apart from the rest of the world.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Aquacultural methods Mariculture Mariculture refers to the cultivation of marine organisms in seawater, usually in sheltered coastal or offshore waters. The farming of marine fish is an example of mariculture, and so also is the farming of marine crustaceans, mollusks, and seaweed. Channel catfish, hard clams and Atlantic salmon are prominent in the U.S. mariculture.\nMariculture may consist of raising the organisms on or in artificial enclosures such as in floating netted enclosures for salmon and on racks for oysters. In the case of enclosed salmon, they are fed by the operators; oysters on racks filter feed on naturally available food. Abalone have been farmed on an artificial reef consuming seaweed which grows naturally on the reef units.\n\"Multi-trophic\" refers to the incorporation of species from different trophic or nutritional levels in the same system. This is one potential distinction from the age-old practice of aquatic polyculture, which could simply be the co-culture of different fish species from the same trophic level. In this case, these organisms may all share the same biological and chemical processes, with few synergistic benefits, which could potentially lead to significant shifts in the ecosystem. Some traditional polyculture systems may, in fact, incorporate a greater diversity of species, occupying several niches, as extensive cultures within the same 2006\"/> A working IMTA system can result in greater total production based on mutual benefits to the co-cultured species and improved ecosystem health, even if the production of individual species is lower than in a monoculture over a short-term period.\nSometimes the term \"integrated aquaculture\" is used to describe the integration of monocultures through water transfer. All of these materials are selected for a variety of reasons, including design feasibility, material strength, cost, and corrosion resistance.\nRecently, copper alloys have become important netting materials in aquaculture because they are antimicrobial and they therefore prevent biofouling . By inhibiting microbial growth, copper alloy aquaculture cages avoid costly net changes that are necessary with other materials. The resistance of organism growth on copper alloy nets also provides a cleaner and healthier environment for farmed fish to grow and thrive.\nIssues If performed without consideration for potential local environmental impacts, aquaculture in inland waters can result in more environmental damage than wild fisheries, though with less waste produced per kg on a global scale. Local concerns with aquaculture in inland waters may include waste handling, side-effects of antibiotics, competition between farmed and wild animals, and the potential introduction of invasive plant and animal species, or foreign pathogens, particularly if unprocessed fish are used to feed more marketable carnivorous fish. If non-local live feeds are used, aquaculture may introduce exotic plants or animals with disastrous effects. Improvements in methods resulting from advances in research and the availability of commercial feeds has reduced some of these concerns since their greater prevalence in the 1990s and 2000s .\nFish waste is organic and composed of nutrients necessary in all components of aquatic food webs. In-ocean aquaculture often produces much higher than normal fish waste concentrations. The waste collects on the ocean bottom, damaging or eliminating bottom-dwelling life. Waste can also decrease dissolved oxygen levels in the water column, putting further pressure on wild animals. An alternative model to food being added to the ecosystem, is the installation of artificial reef structures to increase the habitat niches available, without the need to add any more than ambient feed and nutrient. This has been used in the \"ranching\" of abalone in Western Australia.\nFarming of carnivorous species like salmon and shrimp leads to a high demand for forage fish to match the nutrition they get in the wild. Fish do not actually produce omega-3 fatty acids, but instead accumulate them from either consuming microalgae that produce these fatty acids, as is the case with forage fish like herring and sardines, or, as is the case with fatty predatory fish, like salmon, by eating prey fish that have accumulated omega-3 fatty acids from microalgae. To satisfy this requirement, more than 50 percent of the world fish oil production is fed to farmed salmon.\nFarmed salmon consume more wild fish than they generate as a final product, although the efficiency of production is improving. To produce one pound of farmed salmon, products from several pounds of wild fish are fed to them - this can be described as the \"fish-in-fish-out\" ratio. In 1995, salmon had a FIFO ratio of 7.5 ; by 2006 the ratio had fallen to 4.9. Additionally, a growing share of fish oil and fishmeal come from residues, rather than dedicated whole fish. In 2012, 34 percent of fish oil and 28 percent of fishmeal came from residues. However, fishmeal and oil from residues instead of whole fish have a different composition with more ash and less protein, which may limit its potential use for aquaculture.\nAs the salmon farming industry expands, it requires more wild forage fish for feed, at a time when seventy five percent of the worlds monitored fisheries are already near to or have exceeded their maximum sustainable yield. The industrial scale extraction of wild forage fish for salmon farming then impacts the survivability of the wild predator fish who rely on them for food. An important step in reducing the impact of aquaculture on wild fish is shifting carnivorous species to plant-based feeds. Salmon feeds, for example, have gone from containing only fishmeal and oil to containing 40 percent plant protein. The USDA has also experimented with using grain-based feeds for farmed trout. When properly formulated, plant-based feeds can provide proper nutrition and similar growth rates in carnivorous farmed fish.\nAnother impact aquaculture production can have on wild fish is the risk of fish escaping from coastal pens, where they can interbreed with their wild counterparts, diluting wild genetic stocks. Escaped fish can become invasive, out-competing native species.\nCoastal ecosystems Aquaculture is becoming a significant threat to coastal ecosystems. About 20 percent of mangrove forests have been destroyed since 1980, partly due to shrimp farming. An extended cost\u2013benefit analysis of the total economic value of shrimp aquaculture built on mangrove ecosystems found that the external costs were much higher than the external benefits. Over four decades, of Indonesian mangroves have been converted to shrimp farms. Most of these farms are abandoned within a decade because of the toxin build-up and nutrient loss.\nPollution from sea cage aquaculture Salmon farms are typically sited in pristine coastal ecosystems which they then pollute. A farm with 200,000 salmon discharges more fecal waste than a city of 60,000 people. This waste is discharged directly into the surrounding aquatic environment, untreated, often containing antibiotics and pesticides.\"\nIn 2016, mass fish kill events impacted salmon farmers along Chile's coast and the wider ecology. Increases in aquaculture production and its associated effluent were considered to be possible contributing factors to fish and molluscan mortality.\nSea cage aquaculture is responsible for nutrient enrichment of the waters in which they are established. This results from fish wastes and uneaten feed inputs. Elements of most concern are nitrogen and phosphorus which can promote algal growth, including harmful algal blooms which can be toxic to fish. Flushing times, current speeds, distance from the shore and water depth are important considerations when locating sea cages in order to minimize the impacts of nutrient enrichment on coastal ecosystems.\nThe extent of the effects of pollution from sea-cage aquaculture varies depending on where the cages are located, which species are kept, how densely cages are stocked and what the fish are fed. Important species-specific variables include the species' food conversion ratio and nitrogen retention. Studies prior to 2001 determined that the amount of nitrogen introduced as feed which is lost to the water column and seafloor as waste varies from 52 to 95%.\nFreshwater ecosystems Whole-lake experiments carried out at the Experimental Lakes Area in Ontario, Canada have displayed the potential for cage aquaculture to source numerous changes in freshwater ecosystems. Following the initiation of an experimental rainbow trout cage farm in a small boreal lake, dramatic reductions in mysis concentrations associated with a decrease in dissolved oxygen were observed. Significant increases in ammonium and total phosphorus, a driver for eutrophication in freshwater systems, were measured in the hypolimnion of the lake. Annual phosphorus inputs from aquaculture waste exceeded that of natural inputs from atmospheric deposition and inflows, and phytoplankton biomass has had a four fold annual increase following the initiation of the experimental farm.\nGenetic modification A type of salmon called the AquAdvantage salmon has been genetically modified for faster growth, although it has not been approved for commercial use, due to controversy. The altered salmon incorporates a growth hormone from a Chinook salmon that allows it to reach full size in 16\u201328 months, instead of the normal 36 months for Atlantic salmon, and while consuming 25 percent less feed. The U.S. Food and Drug Administration reviewed the AquAdvantage salmon in a draft environmental assessment and determined that it \"would not have a significant impact on the U.S. environment.\"\nEcological benefits While some forms of aquaculture can be devastating to ecosystems, such as shrimp farming in mangroves, other forms can be very beneficial. Shellfish aquaculture adds substantial filter feeding capacity to an environment which can significantly improve water quality. A single oyster can filter 15 gallons of water a day, removing microscopic algal cells. By removing these cells, shellfish are removing nitrogen and other nutrients from the system and either retaining it or releasing it as waste which sinks to the bottom. By harvesting these shellfish the nitrogen they retained is completely removed from the system. Raising and harvesting kelp and other macroalgae directly remove nutrients such as nitrogen and phosphorus. Repackaging these nutrients can relieve eutrophic, or nutrient-rich, conditions known for their low dissolved oxygen which can decimate species diversity and abundance of marine life. Removing algal cells from the water also increase light penetration, allowing plants such as eelgrass to reestablish themselves and further increase oxygen levels. to sense noxious stimuli and so are likely to experience states of pain, fear and stress. Consequently, welfare in aquaculture is directed at vertebrates; finfish in particular.\nCommon welfare concerns Welfare in aquaculture can be impacted by a number of issues such as stocking densities, behavioural interactions, disease and parasitism. A major problem in determining the cause of impaired welfare is that these issues are often all interrelated and influence each other at different times.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Optimal stocking density is often defined by the carrying capacity of the stocked environment and the amount of individual space needed by the fish, which is very species specific. Although behavioural interactions such as shoaling may mean that high stocking densities are beneficial to some species, in many cultured species high stocking densities may be of concern. Crowding can constrain normal swimming behaviour, as well as increase aggressive and competitive behaviours such as cannibalism, feed competition, territoriality and dominance/subordination hierarchies. In addition, high stocking densities can result in water flow being insufficient, creating inadequate oxygen supply and waste product removal.\nMany of these interactions and effects cause stress in the fish, which can be a major factor in facilitating fish disease. Sea lice are the primary parasitic problem for finfish in aquaculture, high numbers causing widespread skin erosion and haemorrhaging, gill congestion, and increased mucus production. There are also a number of prominent viral and bacterial pathogens that can have severe effects on internal organs and nervous systems.\nImproving welfare The key to improving welfare of marine cultured organisms is to reduce stress to a minimum, as prolonged or repeated stress can cause a range of adverse effects. Attempts to minimise stress can occur throughout the culture process. During grow out it is important to keep stocking densities at appropriate levels specific to each species, as well as separating size classes and grading to reduce aggressive behavioural interactions. Keeping nets and cages clean can assist positive water flow to reduce the risk of water degradation.\nNot surprisingly disease and parasitism can have a major effect on fish welfare and it is important for farmers not only to manage infected stock but also to apply disease prevention measures. However, prevention methods, such as vaccination, can also induce stress because of the extra handling and injection.\nProspects Global wild fisheries are in decline, with valuable habitat such as estuaries in critical condition. The aquaculture or farming of piscivorous fish, like salmon, does not help the problem because they need to eat products from other fish, such as fish meal and fish oil. Studies have shown that salmon farming has major negative impacts on wild salmon, as well as the forage fish that need to be caught to feed them. Fish that are higher on the food chain are less efficient sources of food energy.\nApart from fish and shrimp, some aquaculture undertakings, such as seaweed and filter-feeding bivalve mollusks like oysters, clams, mussels and scallops, are relatively benign and even environmentally restorative. Seaweeds extract nutrients such as inorganic nitrogen and phosphorus directly from the water,\nSome profitable aquaculture cooperatives promote sustainable practices. New methods lessen the risk of biological and chemical pollution through minimizing fish stress, fallowing netpens, and applying Integrated Pest Management. Vaccines are being used more and more to reduce antibiotic use for disease control.\nOnshore recirculating aquaculture systems, facilities using polyculture techniques, and properly sited facilities are examples of ways to manage negative environmental effects.\nRecirculating aquaculture systems recycle water by circulating it through filters to remove fish waste and food and then recirculating it back into the tanks. This saves water and the waste gathered can be used in compost or, in some cases, could even be treated and used on land. While RAS was developed with freshwater fish in mind, scientist associated with the Agricultural Research Service have found a way to rear saltwater fish using RAS in low-salinity waters. Although saltwater fish are raised in off-shore cages or caught with nets in water that typically has a salinity of 35 parts per thousand, scientists were able to produce healthy pompano, a saltwater fish, in tanks with a salinity of only 5 ppt. Commercializing low-salinity RAS are predicted to have positive environmental and economical effects. Unwanted nutrients from the fish food would not be added to the ocean and the risk of transmitting diseases between wild and farm-raised fish would greatly be reduced. The price of expensive saltwater fish, such as the pompano and combia used in the experiments, would be reduced. However, before any of this can be done researchers must study every aspect of the fish's lifecycle, including the amount of ammonia and nitrate the fish will tolerate in the water, what to feed the fish during each stage of its lifecycle, the stocking rate that will produce the healthiest fish, etc. In California, for example, 15 fish farms produce tilapia, bass, and catfish with warm water from underground. This warmer water enables fish to grow all year round and mature more quickly. Collectively these California farms produce 4.5 million kilograms of fish each year.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUyL2FydGljbGUyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Article2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article2',
                templateUrl: './article2.component.html',
                styleUrls: ['./article2.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/article3/article3.component.ts":
/*!************************************************!*\
  !*** ./src/app/article3/article3.component.ts ***!
  \************************************************/
/*! exports provided: Article3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article3Component", function() { return Article3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Article3Component {
    constructor() { }
    ngOnInit() {
    }
}
Article3Component.ɵfac = function Article3Component_Factory(t) { return new (t || Article3Component)(); };
Article3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Article3Component, selectors: [["app-article3"]], decls: 17, vars: 0, consts: [[1, "separator", 2, "clear", "both", "text-align", "center"], ["href", "https://www.thestatesman.com/wp-content/uploads/2018/03/IRRIGATION.jpg", 2, "clear", "left", "float", "left", "margin-bottom", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "447", "data-original-width", "800", "height", "179", "src", "https://www.thestatesman.com/wp-content/uploads/2018/03/IRRIGATION.jpg", "width", "320"], ["href", "https://media.nationalgeographic.org/assets/photos/000/219/21921.jpg", "imageanchor", "1", 2, "margin-left", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "499", "data-original-width", "800", "height", "399", "src", "https://media.nationalgeographic.org/assets/photos/000/219/21921.jpg", "width", "640"]], template: function Article3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u00A0Irrigation is the process of applying controlled amounts of water to plants at needed intervals. Irrigation helps to grow agricultural crops, maintain landscapes, and revegetate disturbed soils in dry areas and during periods of less than average rainfall. Irrigation also has other uses in crop production, including frost protection, suppressing weed growth in grain fields and preventing soil consolidation. In contrast, agriculture that relies only on direct rainfall is referred to as rain-fed.\nIrrigation systems are also used for cooling livestock, dust suppression, disposal of sewage, and in mining. Irrigation is often studied together with drainage, which is the removal of surface and sub-surface water from a given area.\nIrrigation has been a central feature of agriculture for over 5,000 years and is the product of many cultures. Historically, it was the basis for economies and societies across the globe, from Asia to the Southwestern United States.\nHistory Archaeological investigation has found evidence of irrigation in areas lacking sufficient natural rainfall to support crops for rainfed agriculture. The earliest known use of the technology dates to the 6th millennium BCE in Khuzistan in the south-west of present-day Iran.\nIrrigation was used as a means of manipulation of water in the alluvial plains of the Indus valley civilization, the application of it is estimated to have begun around 4500 BC and drastically increased the size and prosperity of their agricultural settlements. The Indus Valley Civilization developed sophisticated irrigation and water-storage systems, including artificial reservoirs at Girnar dated to 3000 BCE, and an early canal irrigation system from 2600 BCE. Large-scale agriculture was practiced, with an extensive network of canals used for the purpose of irrigation.\nFarmers in the Mesopotamian plain used irrigation from at least the third millennium BCE.\nThey developed perennial irrigation, regularly watering crops throughout the growing season by coaxing water through a matrix of small channels formed in the field.\nAncient Egyptians practiced basin irrigation using the flooding of the Nile to inundate land plots which had been surrounded by dykes. The flood water remained until the fertile sediment had settled before the engineers returned the surplus to the watercourse. There is evidence of the ancient Egyptian pharaoh Amenemhet III in the twelfth dynasty using the natural lake of the Faiyum Oasis as a reservoir to store surpluses of water for use during dry seasons. The lake swelled annually from the flooding of the Nile.\nThe Ancient Nubians developed a form of irrigation by using a waterwheel-like device called a sakia. Irrigation began in Nubia some time between the third and second millennia BCE. It largely depended upon the flood waters that would flow through the Nile River and other rivers in what is now the Sudan.\nIn sub-Saharan Africa irrigation reached the Niger River region cultures and civilizations by the first or second millennium BCE and was based on wet-season flooding and water harvesting.\nEvidence of terrace irrigation occurs in pre-Columbian America, early Syria, India, and China.\nAncient Persia used irrigation as far back as the 6th millennium BCE to grow barley in areas with insufficient natural rainfall. The Qanats, developed in ancient Persia about 800 BCE, are among the oldest known irrigation methods still in use today. They are now found in Asia, the Middle East and North Africa. The system comprises a network of vertical wells and gently sloping tunnels driven into the sides of cliffs and of steep hills to tap groundwater. The noria, a water wheel with clay pots around the rim powered by the flow of the stream, first came into use at about this time among Roman settlers in North Africa. By 150 BCE the pots were fitted with valves to allow smoother filling as they were forced into the water.\nSri Lanka The irrigation works of ancient Sri Lanka, the earliest dating from about 300 BCE in the reign of King Pandukabhaya, and under continuous development for the next thousand years, were one of the most complex irrigation systems of the ancient world. In addition to underground canals, the Sinhalese were the first to build completely artificial reservoirs to store water. These reservoirs and canal systems were used primarily to irrigate paddy fields, which require a lot of water to cultivate. Most of these irrigation systems still exist undamaged up to now, in Anuradhapura and Polonnaruwa, because of the advanced and precise engineering. The system was extensively restored and further extended during the reign of King Parakrama Bahu .\nChina The oldest known hydraulic engineers of China were Sunshu Ao of the Spring and Autumn period and Ximen Bao of the Warring States period, both of whom worked on large irrigation projects. In the Sichuan region belonging to the state of Qin of ancient China, the Dujiangyan Irrigation System devised by the Qin Chinese hydrologist and irrigation engineer Li Bing was built in 256 BCE to irrigate a vast area of farmland that today still supplies water. By the 2nd century AD, during the Han Dynasty, the Chinese also used chain pumps which lifted water from a lower elevation to a higher one. These were powered by manual foot-pedal, hydraulic waterwheels, or rotating mechanical wheels pulled by oxen. The water was used for public works, providing water for urban residential quarters and palace gardens, but mostly for irrigation of farmland canals and channels in the fields.\nKorea Korea, Jang Yeong-sil, a Korean engineer of the Joseon Dynasty, under the active direction of the king, Sejong the Great, invented the world's first rain-gauge, uryanggye in 1441. It was installed in irrigation tanks as part of a nationwide system to measure and collect rainfall for agricultural applications. With this instrument, planners and farmers could make better use of the information gathered in the survey.\nNorth America The earliest agricultural irrigation canal system known in the area of the present-day United States dates to between 1200 B.C. and 800 B.C. and was discovered by Desert Archaeology, Inc. in Marana, Arizona in 2009. The irrigation-canal system predates the Hohokam culture by two thousand years and belongs to an unidentified culture. In North America, the Hohokam were the only culture known to rely on irrigation canals to water their crops, and their irrigation systems supported the largest population in the Southwest by AD 1300.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0The Hohokam constructed an assortment of simple canals combined with weirs in their various agricultural pursuits. Between the 7th and 14th centuries they built and maintained extensive irrigation networks along the lower Salt and middle Gila Rivers that rivaled the complexity of those used in the ancient Near East, Egypt, and China. These were constructed using relatively simple excavation tools, without the benefit of advanced engineering technologies, and achieved drops of a few feet per mile, balancing erosion and siltation. The Hohokam cultivated varieties of cotton, tobacco, maize, beans and squash, as well as harvesting an assortment of wild plants. Late in the Hohokam Chronological Sequence, they also used extensive dry-farming systems, primarily to grow agave for food and fiber. Their reliance on agricultural strategies based on canal irrigation, vital in their less-than-hospitable desert environment and arid climate, provided the basis for the aggregation of rural populations into stable urban centers.\nSouth America The oldest known irrigation canals in the Americas are in the desert of northern Peru in the Za\u00F1a valley near the hamlet of Nanchoc. The canals have been radiocarbon dated to at least 3400 B.C. and possibly as old as 4700 B.C. The canals at that time irrigated crops such as peanuts, squash, manioc, chenopods, a relative of Quinoa, and later maize.\nPresent extent In year 2000, the total fertile land was 2,788,000 km2 and it was equipped with irrigation infrastructure worldwide. About 68% of this area is in Asia, 17% in the Americas, 9% in Europe, 5% in Africa and 1% in Oceania. The largest contiguous areas of high irrigation density are found: Smaller irrigation areas are spread across almost all populated parts of the world.\nBy 2012, the area of irrigated land had increased to an estimated total of 3,242,917 km2, which is nearly the size of India.\nTypes of irrigation There are several methods of irrigation. They vary in how the water is supplied to the plants. The goal is to apply the water to the plants as uniformly as possible, so that each plant has the amount of water it needs, neither too much nor too little. Irrigation can also be understood whether it is supplementary to rainfall as happens in many parts of the world, or whether it is 'full irrigation' whereby crops rarely depend on any contribution from rainfall.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Full irrigation is less common and only happens in arid landscapes experiencing very low rainfall or when crops are grown in semi-arid areas outside of any rainy seasons.\nSurface irrigation Surface irrigation, also known as gravity irrigation, is the oldest form of irrigation and has been in use for thousands of years. In surface irrigation systems, water moves across the surface of an agricultural lands, in order to wet it and infiltrate into the soil. Water moves by following gravity or the slope of the land. Surface irrigation can be subdivided into furrow, border strip or basin irrigation. It is often called flood irrigation when the irrigation results in flooding or near flooding of the cultivated land. Historically, surface irrigation has been the most common method of irrigating agricultural land and is still used in most parts of the world.\nWhere water levels from the irrigation source permit, the levels are controlled by dikes, usually plugged by soil. This is often seen in terraced rice fields.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUzL2FydGljbGUzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Article3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article3',
                templateUrl: './article3.component.html',
                styleUrls: ['./article3.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/article4/article4.component.ts":
/*!************************************************!*\
  !*** ./src/app/article4/article4.component.ts ***!
  \************************************************/
/*! exports provided: Article4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article4Component", function() { return Article4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Article4Component {
    constructor() { }
    ngOnInit() {
    }
}
Article4Component.ɵfac = function Article4Component_Factory(t) { return new (t || Article4Component)(); };
Article4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Article4Component, selectors: [["app-article4"]], decls: 25, vars: 0, consts: [[1, "separator", 2, "clear", "both", "text-align", "center"], ["href", "https://www.fertilizer-machine.net/wp-content/uploads/2018/06/types-of-fertilizer.jpg", 2, "clear", "left", "float", "left", "margin-bottom", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "369", "data-original-width", "641", "height", "230", "src", "https://www.fertilizer-machine.net/wp-content/uploads/2018/06/types-of-fertilizer.jpg", "width", "400"], ["href", "https://agroflowsystem.com/wp-content/uploads/2019/08/post_7.jpg", 2, "margin-left", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "453", "data-original-width", "800", "height", "227", "src", "https://agroflowsystem.com/wp-content/uploads/2019/08/post_7.jpg", "width", "400"], ["href", "https://benefert.com/wp-content/uploads/2020/04/benefert-solid.jpg", "imageanchor", "1", 2, "margin-left", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "500", "data-original-width", "600", "src", "https://benefert.com/wp-content/uploads/2020/04/benefert-solid.jpg"]], template: function Article4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u00A0A fertilizer or fertiliser is any material of natural or synthetic origin that is applied to soil or to plant tissues to supply one or more plant nutrients essential to the growth of plants. Many sources of fertilizer exist, both natural and industrially produced. According to the IPCC Special Report on Climate Change and Land, these practices are key drivers of global warming.\nThe Birkeland\u2013Eyde process was one of the competing industrial processes in the beginning of nitrogen based fertilizer production. This process was used to fix atmospheric nitrogen into nitric acid, one of several chemical processes generally referred to as nitrogen fixation. The resultant nitric acid was then used as a source of nitrate . A factory based on the process was built in Rjukan and Notodden in Norway, combined with the building of large hydroelectric power facilities.\nThe 1910s and 1920s witnessed the rise of the Haber process and the Ostwald process. The Haber process produces ammonia from methane gas and molecular nitrogen . The ammonia from the Haber process is then converted into nitric acid in the Ostwald process. The use of synthetic nitrogen fertilizers has increased steadily in the last 50 years, rising almost 20-fold to the current rate of 100 million tonnes of nitrogen per year. The development of synthetic nitrogen fertilizer has significantly supported global population growth \u2014 it has been estimated that almost half the people on the Earth are currently fed as a result of synthetic nitrogen fertilizer use. The use of phosphate fertilizers has also increased from 9 million tonnes per year in 1960 to 40 million tonnes per year in 2000. A maize crop yielding 6\u20139 tonnes of grain per hectare requires of phosphate fertilizer to be applied; soybean crops require about half, as 20\u201325 kg per hectare. Yara International is the world's largest producer of nitrogen-based fertilizers.\nControlled-nitrogen-release technologies based on polymers derived from combining urea and formaldehyde were first produced in 1936 and commercialized in 1955. The early product had 60 percent of the total nitrogen cold-water-insoluble, and the unreacted less than 15%. Methylene ureas were commercialized in the 1960s and 1970s, having 25% and 60% of the nitrogen as cold-water-insoluble, and unreacted urea nitrogen in the range of 15% to 30%.\nIn the 1960s, the Tennessee Valley Authority National Fertilizer Development Center began developing sulfur-coated urea; sulfur was used as the principal coating material because of its low cost and its value as a secondary nutrient. These elements are often present at the active sites of enzymes that carry out the plant's metabolism. Because these elements enable catalysts their impact far exceeds their weight percentage.\nClassification Fertilizers are classified in several ways. They are classified according to whether they provide a single nutrient, in which case they are classified as \"straight fertilizers.\" \"Multinutrient fertilizers\" provide two or more nutrients, for example N and P. Fertilizers are also sometimes classified as inorganic versus organic. Inorganic fertilizers exclude carbon-containing materials except ureas. Organic fertilizers are usually plant- or animal-derived matter. Inorganic are sometimes called synthetic fertilizers since various chemical treatments are required for their manufacture.\nSingle nutrient fertilizers The main nitrogen-based straight fertilizer is ammonia or its solutions. Ammonium nitrate is also widely used. Urea is another popular source of nitrogen, having the advantage that it is solid and non-explosive, unlike ammonia and ammonium nitrate, respectively. A few percent of the nitrogen fertilizer market has been met by calcium ammonium nitrate 2 \u2022 NH4).\nThe main straight phosphate fertilizers are the superphosphates. \"Single superphosphate\" consists of 14\u201318% P2O5, again in the form of Ca2, but also phosphogypsum . Triple superphosphate typically consists of 44-48% of P2O5 and no gypsum. A mixture of single superphosphate and triple superphosphate is called double superphosphate. More than 90% of a typical superphosphate fertilizer is water-soluble.\nThe main potassium-based straight fertilizer is muriate of potash . Muriate of potash consists of 95-99% KCl, and is typically available as 0-0-60 or 0-0-62 fertilizer.\nMultinutrient fertilizers These fertilizers are common. They consist of two or more nutrient components.\nBinary fertilizers Major two-component fertilizers provide both nitrogen and phosphorus to the plants. These are called NP fertilizers. The main NP fertilizers are monoammonium phosphate and diammonium phosphate . The active ingredient in MAP is NH4H2PO4. The active ingredient in DAP is 2HPO4. About 85% of MAP and DAP fertilizers are soluble in water.\nNPK fertilizers NPK fertilizers are three-component fertilizers providing nitrogen, phosphorus, and potassium.\nNPK rating is a rating system describing the amount of nitrogen, phosphorus, and potassium in a fertilizer. NPK ratings consist of three numbers separated by dashes describing the chemical content of fertilizers. The first number represents the percentage of nitrogen in the product; the second number, P2O5; the third, K2O. Fertilizers do not actually contain P2O5 or K2O, but the system is a conventional shorthand for the amount of the phosphorus or potassium in a fertilizer. A bag of fertilizer labeled 16-4-8 contains of nitrogen, an amount of phosphorus equivalent to that in 2 pounds of P2O5, and 4 pounds of K2O . Most fertilizers are labeled according to this N-P-K convention, although Australian convention, following an N-P-K-S system, adds a fourth number for sulfur, and uses elemental values for all values including P and K.\nMicronutrients The main micronutrients are molybdenum, zinc, boron, and copper. These elements are provided as water-soluble salts. Iron presents special problems because it converts to insoluble compounds at moderate soil pH and phosphate concentrations. For this reason, iron is often administered as a chelate complex, e.g., the EDTA derivative. The micronutrient needs depend on the plant and the environment. For example, sugar beets appear to require boron, and legumes require cobalt, while environmental conditions such as heat or drought make boron less available for plants.\nProduction Nitrogen fertilizers Nitrogen fertilizers are made from ammonia produced by the Haber-Bosch process. It is still mined for fertilizer. Nitrates are also produced from ammonia by the Ostwald process.\nPhosphate fertilizers Phosphate fertilizers are obtained by extraction from phosphate rock, which contains two principal phosphorus-containing minerals, fluorapatite Ca53F and hydroxyapatite Ca53OH. These minerals are converted into water-soluble phosphate salts by treatment with sulfuric or phosphoric acids . The large production of sulfuric acid is primarily motivated by this application. In the nitrophosphate process or Odda process, phosphate rock with up to a 20% phosphorus content is dissolved with nitric acid to produce a mixture of phosphoric acid and calcium nitrate 2). This mixture can be combined with a potassium fertilizer to produce a compound fertilizer with the three macronutrients N, P and K in easily dissolved form.\nPotassium fertilizers Potash is a mixture of potassium minerals used to make potassium fertilizers. Potash is soluble in water, so the main effort in producing this nutrient from the ore involves some purification steps; e.g., to remove sodium chloride . Sometimes potash is referred to as K2O, as a matter of convenience to those describing the potassium content.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "In fact, potash fertilizers are usually potassium chloride, potassium sulfate, potassium carbonate, or potassium nitrate. Organically derived materials available to industry such as sewage sludge may not be acceptable components of organic farming and gardening, because of factors ranging from residual contaminants to public perception. On the other hand, marketed \u201Corganic fertilizers\u201D may include, and promote, processed organics because the materials have consumer appeal. No matter the definition nor composition, most of these products contain less-concentrated nutrients, and the nutrients are not as easily quantified. They can offer soil-building advantages as well as be appealing to those who are trying to farm / garden more \u201Cnaturally\u201D.\nIn terms of volume, peat is the most widely used packaged organic soil amendment. It is an immature form of coal and improves the soil by aeration and absorbing water but confers no nutritional value to the plants. It is therefore not a fertilizer as defined in the beginning of the article, but rather an amendment. Coir,, bark, and sawdust when added to soil all act similarly to peat and are also considered organic soil amendments - or texturizers - because of their limited nutritive inputs. Some organic additives can have a reverse effect on nutrients \u2014 fresh sawdust can consume soil nutrients as it breaks down, and may lower soil pH \u2014 but these same organic texturizers may increase the availability of nutrients through improved cation exchange, or through increased growth of microorganisms that in turn increase availability of certain plant nutrients. Organic fertilizers such as composts and manures may be distributed locally without going into industry production, making actual consumption more difficult to quantify.\nApplication Fertilizers are commonly used for growing all crops, with application rates depending on the soil fertility, usually as measured by a soil test and according to the particular crop. Legumes, for example, fix nitrogen from the atmosphere and generally do not require nitrogen fertilizer.\nLiquid vs solid Fertilizers are applied to crops both as solids and as liquid. About 90% of fertilizers are applied as solids. The most widely used solid inorganic fertilizers are urea, diammonium phosphate and potassium chloride. Solid fertilizer is typically granulated or powdered. Often solids are available as prills, a solid globule. Liquid fertilizers comprise anhydrous ammonia, aqueous solutions of ammonia, aqueous solutions of ammonium nitrate or urea. These concentrated products may be diluted with water to form a concentrated liquid fertilizer . Advantages of liquid fertilizer are its more rapid effect and easier coverage. Urease inhibitors are used to slow the hydrolytic conversion of urea into ammonia, which is prone to evaporation as well as nitrification.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The conversion of urea to ammonia catalyzed by enzymes called ureases. A popular inhibitor of ureases is N-thiophosphoric triamide .\nOverfertilization Careful use of fertilization technologies is important because excess nutrients can be detrimental. Fertilizer burn can occur when too much fertilizer is applied, resulting in damage or even death of the plant. Fertilizers vary in their tendency to burn roughly in accordance with their salt index.\nStatistics Recently nitrogen fertilizers have plateaued in most developed countries. China although has become the largest producer and consumer of nitrogen fertilizers. Africa has little reliance on nitrogen fertilizers. Agricultural and chemical minerals are very important in industrial use of fertilizers, which is valued at approximately $200 billion. Nitrogen has a significant impact in the global mineral use, followed by potash and phosphate. The production of nitrogen has drastically increased since the 1960s. Phosphate and potash have increased in price since the 1960s, which is larger than the consumer price index. Conservative estimates report 30 to 50% of crop yields are attributed to natural or synthetic commercial fertilizer. Fertilizer consumption has surpassed the amount of farmland in the United States The European fertilizer market will grow to earn revenues of approx. \u20AC15.3 billion in 2018.\nData on the fertilizer consumption per hectare arable land in 2012 are published by The World Bank. For the diagram below values of the European Union countries have been extracted and are presented as kilograms per hectare . The total consumption of fertilizer in the EU is 15.9 million tons for 105 million hectare arable land area . This figure equates to 151 kg of fertilizers consumed per ha arable land on average for the EU countries.\nin western and central European counties from data published by The World Bank for 2012.]]\nEnvironmental effects Use of fertilizers are beneficial in providing nutrients to plants although they have some negative environmental effects. The large growing consumption of fertilizers can affect soil, surface water, and groundwater due to dispersion of mineral use.\nWater Phosphorus and nitrogen fertilizers when commonly used have major environmental effects. This is due to high rainfalls causing the fertilizers to be washed into waterways. Agricultural run-off is a major contributor to the eutrophication of fresh water bodies. For example, in the US, about half of all the lakes are eutrophic. The main contributor to eutrophication is phosphate, which is normally a limiting nutrient; high concentrations promote the growth of cyanobacteria and algae, the demise of which consumes oxygen.\nThe nitrogen-rich compounds found in fertilizer runoff are the primary cause of serious oxygen depletion in many parts of oceans, especially in coastal zones, lakes and rivers. The resulting lack of dissolved oxygen greatly reduces the ability of these areas to sustain oceanic fauna. The number of oceanic dead zones near inhabited coastlines are increasing. As of 2006, the application of nitrogen fertilizer is being increasingly controlled in northwestern Europe and the United States. If eutrophication can be reversed, it may take decades before the accumulated nitrates in groundwater can be broken down by natural processes.\nNitrate pollution Only a fraction of the nitrogen-based fertilizers is converted to plant matter. The remainder accumulates in the soil or is lost as run-off. High application rates of nitrogen-containing fertilizers combined with the high water solubility of nitrate leads to increased runoff into surface water as well as leaching into groundwater, thereby causing groundwater pollution. The excessive use of nitrogen-containing fertilizers is particularly damaging, as much of the nitrogen that is not taken up by plants is transformed into nitrate which is easily leached.\nNitrate levels above 10 mg/L in groundwater can cause 'blue baby syndrome' . The nutrients, especially nitrates, in fertilizers can cause problems for natural habitats and for human health if they are washed off soil into watercourses or leached through soil into groundwater.\nSoil Acidification Nitrogen-containing fertilizers can cause soil acidification when added. This may lead to decrease in nutrient availability which may be offset by liming.\nAccumulation of toxic elements Cadmium The concentration of cadmium in phosphorus-containing fertilizers varies considerably and can be problematic. For example, mono-ammonium phosphate fertilizer may have a cadmium content of as low as 0.14 mg/kg or as high as 50.9 mg/kg. The phosphate rock used in their manufacture can contain as much as 188 mg/kg cadmium . Continuous use of high-cadmium fertilizer can contaminate soil and plants. Limits to the cadmium content of phosphate fertilizers has been considered by the European Commission. Producers of phosphorus-containing fertilizers now select phosphate rock based on the cadmium content.\nFluoride Phosphate rocks contain high levels of fluoride. Consequently, the widespread use of phosphate fertilizers has increased soil fluoride concentrations. Also of possible concern are the effects of fluoride on soil microorganisms.\nRadioactive elements The radioactive content of the fertilizers varies considerably and depends both on their concentrations in the parent mineral and on the fertilizer production process. Uranium-238 concentrations can range from 7 to 100 pCi/g in phosphate rock and from 1 to 67 pCi/g in phosphate fertilizers. Where high annual rates of phosphorus fertilizer are used, this can result in uranium-238 concentrations in soils and drainage waters that are several times greater than are normally present. However, the impact of these increases on the risk to human health from radinuclide contamination of foods is very small .\nOther metals Steel industry wastes, recycled into fertilizers for their high levels of zinc, wastes can include the following toxic metals: lead arsenic, cadmium, These potentially harmful impurities can be removed; however, this significantly increases cost.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0Highly pure fertilizers are widely available and perhaps best known as the highly water-soluble fertilizers containing blue dyes used around households, such as Miracle-Gro. These highly water-soluble fertilizers are used in the plant nursery business and are available in larger packages at significantly less cost than retail quantities. Some inexpensive retail granular garden fertilizers are made with high purity ingredients.\nTrace mineral depletion Attention has been addressed to the decreasing concentrations of elements such as iron, zinc, copper and magnesium in many foods over the last 50\u201360 years. Intensive farming practices, including the use of synthetic fertilizers are frequently suggested as reasons for these declines and organic farming is often suggested as a solution. much of the measured decline can be attributed to the use of progressively higher-yielding crop varieties that produce foods with lower mineral concentrations than their less-productive ancestors. It is, therefore, unlikely that organic farming or reduced use of fertilizers will solve the problem; foods with high nutrient density are posited to be achieved using older, lower-yielding varieties or the development of new high-yield, nutrient-dense varieties.\nFertilizers are, in fact, more likely to solve trace mineral deficiency problems than cause them: In Western Australia deficiencies of zinc, copper, manganese, iron and molybdenum were identified as limiting the growth of broad-acre crops and pastures in the 1940s and 1950s. Soils in Western Australia are very old, highly weathered and deficient in many of the major nutrients and trace elements.\nChanges in soil biology High levels of fertilizer may cause the breakdown of the symbiotic relationships between plant roots and mycorrhizal fungi.\nEnergy consumption and sustainability In the US in 2004, 317 billion cubic feet of natural gas were consumed in the industrial production of ammonia, less than 1.5% of total U.S. annual consumption of natural gas.\nA 2002 report suggested that the production of ammonia consumes about 5% of global natural gas consumption, which is somewhat under 2% of world energy production.\nAmmonia is produced from natural gas and air. The cost of natural gas makes up about 90% of the cost of producing ammonia. The increase in price of natural gases over the past decade, along with other factors such as increasing demand, have contributed to an increase in fertilizer price.\nContribution to climate change The greenhouse gases carbon dioxide, methane and nitrous oxide are produced during the manufacture of nitrogen fertilizer. The effects can be combined into an equivalent amount of carbon dioxide. The amount varies according to the efficiency of the process. The figure for the United Kingdom is over 2 kilograms of carbon dioxide equivalent for each kilogram of ammonium nitrate.\nNitrogen fertilizer can be converted by soil bacteria to nitrous oxide, a greenhouse gas.\nAtmosphere Through the increasing use of nitrogen fertilizer, which was used at a rate of about 110 million tons per year in 2012, adding to the already existing amount of reactive nitrogen, nitrous oxide has become the third most important greenhouse gas after carbon dioxide and methane. It has a global warming potential 296 times larger than an equal mass of carbon dioxide and it also contributes to stratospheric ozone depletion.\nBy changing processes and procedures, it is possible to mitigate some, but not all, of these effects on anthropogenic climate change.\nMethane emissions from crop fields are increased by the application of ammonium-based fertilizers. These emissions contribute to global climate change as methane is a potent greenhouse gas.\nRegulation In Europe, problems with high nitrate concentrations in runoff are being addressed by the European Union's Nitrates Directive. Within Britain, farmers are encouraged to manage their land more sustainably in 'catchment-sensitive farming'. In the US, high concentrations of nitrate and phosphorus in runoff and drainage water are classified as nonpoint source pollutants due to their diffuse origin; this pollution is regulated at the state level. Oregon and Washington, both in the United States, have fertilizer registration programs with on-line databases listing chemical analyses of fertilizers.\nIn China, regulations have been implemented to control the use of N fertilizers in farming. In 2008, Chinese governments began to partially withdraw fertilizer subsidies, including subsidies to fertilizer transportation and to electricity and natural gas use in the industry. In consequence, the price of fertilizer has gone up and large-scale farms have begun to use less fertilizer. If large-scale farms keep reducing their use of fertilizer subsidies, they have no choice but to optimize the fertilizer they have which would therefore gain an increase in both grain yield and profit.\nTwo types of agricultural management practices include organic agriculture and conventional agriculture. The former encourages soil fertility using local resources to maximize efficiency. Organic agriculture avoids synthetic agrochemicals. Conventional agriculture uses all the components that organic agriculture does not use. @baygross");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGU0L2FydGljbGU0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Article4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article4',
                templateUrl: './article4.component.html',
                styleUrls: ['./article4.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/article5/article5.component.ts":
/*!************************************************!*\
  !*** ./src/app/article5/article5.component.ts ***!
  \************************************************/
/*! exports provided: Article5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article5Component", function() { return Article5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Article5Component {
    constructor() { }
    ngOnInit() {
    }
}
Article5Component.ɵfac = function Article5Component_Factory(t) { return new (t || Article5Component)(); };
Article5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Article5Component, selectors: [["app-article5"]], decls: 25, vars: 0, consts: [[1, "separator", 2, "clear", "both", "text-align", "center"], ["href", "https://kj1bcdn.b-cdn.net/media/10153/automatic-in-row-weeder-kj.jpg", 2, "margin-left", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "376", "data-original-width", "640", "src", "https://kj1bcdn.b-cdn.net/media/10153/automatic-in-row-weeder-kj.jpg"], ["href", "https://qph.fs.quoracdn.net/main-qimg-3dc30b9380377fb3a013a3157bf87066", 2, "clear", "left", "float", "left", "margin-bottom", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "336", "data-original-width", "602", "height", "223", "src", "https://qph.fs.quoracdn.net/main-qimg-3dc30b9380377fb3a013a3157bf87066", "width", "400"], ["href", "https://kj1bcdn.b-cdn.net/media/38829/agri-machines-1.jpg", "imageanchor", "1", 2, "clear", "right", "float", "right", "margin-bottom", "1em", "margin-left", "1em"], ["border", "0", "data-original-height", "442", "data-original-width", "800", "height", "221", "src", "https://kj1bcdn.b-cdn.net/media/38829/agri-machines-1.jpg", "width", "400"]], template: function Article5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "The Industrial Revolution\nWith the coming of the Industrial Revolution and the development of more complicated machines, farming methods took a great leap forward.[1] Instead of harvesting grain by hand with a sharp blade, wheeled machines cut a continuous swath. Instead of threshing the grain by beating it with sticks, threshing machines separated the seeds from the heads and stalks. The first tractors appeared in the late 19th century.[2] Steam power\nPower for agricultural machinery was originally supplied by ox or other domesticated animals. With the invention of steam power came the portable engine, and later the traction engine, a multipurpose, mobile energy source that was the ground-crawling cousin to the steam locomotive. Agricultural steam engines took over the heavy pulling work of oxen, and were also equipped with a pulley that could power stationary machines via the use of a long belt. The steam-powered machines were low-powered by today's standards but, because of their size and their low gear ratios, they could provide a large drawbar pull. Their slow speed led farmers to comment that tractors had two speeds: \"slow, and damn slow.\" Internal combustion engines\nThe internal combustion engine; first the petrol engine, and later diesel engines; became the main source of power for the next generation of tractors. These engines also contributed to the development of the self-propelled, combined harvester and thresher, or combine harvester (also shortened to 'combine'). Instead of cutting the grain stalks and transporting them to a stationary threshing machine, these combines cut, threshed, and separated the grain while moving continuously through the field. Agricultural Machinery Types A John Deere cotton harvester at work in a cotton field. From left to right: John Deere 7800 tractor with Houle slurry trailer, Case IH combine harvester, New Holland FX 25 forage harvester with corn head. A New Holland TR85 combine harvester\nCombines\nCombines might have taken the harvesting job away from tractors, but tractors still do the majority of work on a modern farm. They are used to push/pull implements\u2014machines that till the ground, plant seed, and perform other tasks. Tillage implements prepare the soil for planting by loosening the soil and killing weeds or competing plants. The best-known is the plow, the ancient implement that was upgraded in 1838 by John Deere.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Plows are now used less frequently in the U.S. than formerly, with offset disks used instead to turn over the soil, and chisels used to gain the depth needed to retain moisture. Planters\nThe most common type of seeder is called a planter, and spaces seeds out equally in long rows, which are usually two to three feet apart. Some crops are planted by drills, which put out much more seed in rows less than a foot apart, blanketing the field with crops. Transplanters automate the task of transplanting seedlings to the field. With the widespread use of plastic mulch, plastic mulch layers, transplanters, and seeders lay down long rows of plastic, and plant through them automatically. Sprayers\nAfter planting, other agricultural machinery such as self-propelled sprayers can be used to apply fertilizer and pesticides. Agriculture sprayer application is a method to protect crops from weeds by using herbicides, fungicides, and insecticides. Spraying or planting a cover crop are ways to nix weed growth.[3] Balers and other Agriculture Implements\nPlanting crop Hay balers can be used to tightly package grass or alfalfa into a storable form for the winter months. Modern irrigation relies on machinery. Engines, pumps and other specialized gear provide water quickly and in high volumes to large areas of land. Similar types of equipment such as agriculture sprayers can be used to deliver fertilizers and pesticides. Besides the tractor, other vehicles have been adapted for use in farming, including trucks, airplanes, and helicopters, such as for transporting crops and making equipment mobile, to aerial spraying and livestock herd management. A self-propelled Apache Sprayer by Equipment Technologies\nNew technology and the future\nMain articles: Digital agriculture and Precision agriculture\nThe basic technology of agricultural machines has changed little in the last century. Though modern harvesters and planters may do a better job or be slightly tweaked from their predecessors, the US$250,000 combine of today still cuts, threshes, and separates grain in the same way it has always been done. However, technology is changing the way that humans operate the machines, as computer monitoring systems, GPS locators and self-steer programs allow the most advanced tractors and implements to be more precise and less wasteful in the use of fuel, seed, or fertilizer. In the foreseeable future, there may be mass production of driverless tractors, which use GPS maps and electronic sensors. Open source agricultural equipment\nMany farmers are upset by their inability to fix the new types of high-tech farm equipment.[4] This is due mostly to companies using intellectual property law to prevent farmers from having the legal right to fix their equipment (or gain access to the information to allow them to do it).[5] In October 2015 an exemption was added to the DMCA to allow inspection and modification of the software in cars and other vehicles including agricultural machinery.[6]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0The Open Source Agriculture movement counts different initiatives and organizations such as Farm Labs which is a network in Europe,[7] l'Atelier Paysan which is a cooperative to teach farmers in France how to build and repair their tools,[8][9] and Ekylibre which is an open-source company to provide farmers in France with open source software (SaaS) to manage farming operations.[9][10] In the United States, the MIT Media Lab's Open Agriculture Initiative seeks to foster \"the creation of an open-source ecosystem of technologies that enable and promote transparency, networked experimentation, education, and hyper-local production\".[11]\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "It develops the Personal Food Computer, an educational project to create a \"controlled environment agriculture technology platform that uses robotic systems to control and monitor climate, energy, and plant growth inside of a specialized growing chamber\". It includes the development of Open Phenom,[12] an open source library with open data sets for climate recipes which link the phenotype response of plants (taste, nutrition) to environmental variables, biological, genetic and resource-related necessary for cultivation (input).[13] Plants with the same genetics can naturally vary in color, size, texture growth rate, yield, flavor and nutrient density according to the environmental conditions in which they are produced.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGU1L2FydGljbGU1LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Article5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article5',
                templateUrl: './article5.component.html',
                styleUrls: ['./article5.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/articles/articles.component.ts":
/*!************************************************!*\
  !*** ./src/app/articles/articles.component.ts ***!
  \************************************************/
/*! exports provided: ArticlesComponent, Aqua */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aqua", function() { return Aqua; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ArticlesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArticlesComponent.ɵfac = function ArticlesComponent_Factory(t) { return new (t || ArticlesComponent)(); };
ArticlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticlesComponent, selectors: [["app-articles"]], decls: 33, vars: 0, consts: [[1, "separator", 2, "clear", "both", "text-align", "right"], ["href", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Rice_fields_water_tank_in_punjab.jpg/375px-Rice_fields_water_tank_in_punjab.jpg", "imageanchor", "1", 2, "margin-left", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "281", "data-original-width", "375", "src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Rice_fields_water_tank_in_punjab.jpg/375px-Rice_fields_water_tank_in_punjab.jpg"], [1, "separator", 2, "clear", "both", "text-align", "left"], ["href", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Sunflower_farm%2C_Agriculture_in_India%2C_January_2013.jpg/330px-Sunflower_farm%2C_Agriculture_in_India%2C_January_2013.jpg", "imageanchor", "1", 2, "margin-left", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "220", "data-original-width", "330", "src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Sunflower_farm%2C_Agriculture_in_India%2C_January_2013.jpg/330px-Sunflower_farm%2C_Agriculture_in_India%2C_January_2013.jpg"]], template: function ArticlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The history of Agriculture in India dates back to Indus Valley Civilization and even before that in some places of Southern India. India ranks second worldwide in farm outputs. As per 2018, agriculture employed more than 50\u2105 of the Indian work force and contributed 17\u201318% to country's GDP.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "In 2016, agriculture accounted for 15.4% of the GDP (gross domestic product) with about 31% of the workforce in 2014.India ranks first in the world with highest net cropped area followed by US and China. The economic contribution of agriculture to India's GDP is steadily declining with the country's broad-based economic growth. Still, agriculture is demographically the broadest economic sector and plays a significant role in the overall socio-economic fabric of India.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "India exported $38 billion worth of agricultural products in 2013, making it the seventh largest agricultural exporter worldwide and the sixth largest net exporter. Most of its agriculture exports serve developing and least developed nations. Indian agricultural/horticultural and processed foods are exported to more than 120 countries, primarily to the Japan, Southeast Asia, SAARC countries, the European Union and the United States.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "In the years since its independence, India has made immense progress towards food security. Indian population has tripled, and food-grain production more than quadrupled. There has been a substantial increase in available food-grain per capita.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "The state of Punjab led India's Green Revolution and earned the distinction of being the country's bread basket.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Before the mid-1960s India relied on imports and food aid to meet domestic requirements. However, two years of severe drought in 1965 and 1966 convinced India to reform its agricultural policy and that they could not rely on foreign aid and imports for food security. India adopted significant policy reforms focused on the goal of food grain self-sufficiency. This ushered in India's Green Revolution. It began with the decision to adopt superior yielding, disease resistant wheat varieties in combination with better farming knowledge to improve productivity. The state of Punjab led India's green revolution and earned the distinction of being the country's bread basket.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "The initial increase in production was centered on the irrigated areas of the states of Punjab, Haryana and western Uttar Pradesh. With the farmers and the government officials focusing on farm productivity and knowledge transfer, India's total food grain production soared. A hectare of Indian wheat farm that produced an average of 0.8 tonnes in 1948, produced 4.7 tonnes of wheat in 1975 from the same land. Such rapid growth in farm productivity enabled India to become self-sufficient by the 1970s. It also empowered the smallholder farmers to seek further means to increase food staples produced per hectare. By 2000, Indian farms were adopting wheat varieties capable of yielding 6 tonnes of wheat per hectare.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "With agricultural policy success in wheat, India's Green Revolution technology spread to rice. However, since irrigation infrastructure was very poor, Indian farmers innovated with tube-wells, to harvest ground water. When gains from the new technology reached their limits in the states of initial adoption, the technology spread in the 1970s and 1980s to the states of eastern India \u2014 Bihar, Odisha and West Bengal. The lasting benefits of the improved seeds and new technology extended principally to the irrigated areas which account for about one-third of the harvested crop area. In the 1980s, Indian agriculture policy shifted to \"evolution of a production pattern in line with the demand pattern\" leading to a shift in emphasis to other agricultural commodities like oil seed, fruit and vegetables. Farmers began adopting improved methods and technologies in dairying, fisheries and livestock, and meeting the diversified food needs of a growing population.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "As with rice, the lasting benefits of improved seeds and improved farming technologies now largely depends on whether India develops infrastructure such as irrigation network, flood control systems, reliable electricity production capacity, all-season rural and urban highways, cold storage to prevent spoilage, modern retail, and competitive buyers of produce from Indian farmers. This is increasingly the focus of Indian agriculture policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "India ranks 74 out of 113 major countries in terms of food security index. India's agricultural economy is undergoing structural changes. Between 1970 and 2011, the GDP share of agriculture has fallen from 43% to 16%. This isn't because of reduced importance of agriculture or a consequence of agricultural policy. This is largely because of the rapid economic growth in services, industrial output, and non-agricultural sectors in India between 2000 and 2010.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Agricultural scientist MS Swaminathan has played a vital role in the green revolution. In 2013 NDTV awarded him as 25 living legend of India for outstanding contribution to agriculture and making India a food sovereign country.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Two states, Sikkim and Kerala have planned to shift fully to organic farming by 2015 and 2016 respectively.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzL2FydGljbGVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-articles',
                templateUrl: './articles.component.html',
                styleUrls: ['./articles.component.css']
            }]
    }], function () { return []; }, null); })();
class Aqua {
}
Aqua.ɵfac = function Aqua_Factory(t) { return new (t || Aqua)(); };
Aqua.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Aqua, selectors: [["app-aqua"]], decls: 38, vars: 0, consts: [[1, "separator", 2, "clear", "both", "text-align", "center"], ["href", "https://www.aquaculturealliance.org/wp-content/uploads/2019/10/ANAND-India-carp-Pic-2-1280x471.jpg", 2, "clear", "left", "float", "left", "margin-bottom", "1em", "margin-right", "1em"], ["border", "0", "data-original-height", "294", "data-original-width", "800", "height", "471", "src", "https://www.aquaculturealliance.org/wp-content/uploads/2019/10/ANAND-India-carp-Pic-2-1280x471.jpg", "width", "456"]], template: function Aqua_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total fish production in India in 2018 is estimated at 6.24 million metric tons (MMT), which is close to two-thirds of the total fish production in the country from both capture and culture sources. The growth in the fish farming sector mainly comes from the freshwater aquaculture sector, as marine finfish culture is hardly practiced on a large scale. About 12.8 percent of total animal protein consumed in India comes from freshwater fish.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Historically, the Indian freshwater fish farming was based on a multi-species system. Natural fish food organisms were generated by adding organic and inorganic manure to water and the multi-species utilize this food based on the trophic system in the pond.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "A combination of Indian major carps \u2013 including catla (Labeo catla), rohu (Labeo rohita) and mrigala (Cirrhinus mrigala) \u2013 were used as the main target species for culture, as well as a few Chinese carp species like silver carp (Hypophthalmichthys molitrix), grass carp (Ctenopharyngodon idella) and occasionally common carp (Cyprinus carpio). The very high level of technology developed for induced breeding of carps and the abundance of agri-byproducts used as supplemental feed led to the rapid development of freshwater aquaculture in the country.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "For a long time, India did not change from this type of fish farming. Nutritionally poor feed ingredients in loose form were fed to fish using feed bags or by directly broadcasting it into the ponds. The feed conversion ratios (FCR) in this type of feeding systems range from 3 to 4 kg of feed to 1 kg of fish production. Fish are normally harvested at 1 to 1.2 kg body weight after 8 to 10 months. They are marketed in iced condition to important consumption markets, which are about 24 to 48 hours away by road.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The introduction and popularization of feed-based fish farming in India has resulted in many other advantages. The amount of organic loading that supplemental feed contributed to water bodies in the country has significantly been reduced due to introduction of formulated feeds. If 1 MMT of formulated feed has been used in 2019 for fish farming at an approximate FCR yield of 1.5, it has clearly displaced the traditional fish feeds which operated at 3 to 4 FCR to a kilogram of fish production. In other words, about 2 to 3 MMT of nutritionally poor, agri-based feed supplements have not been applied into ponds since the use of formulated feeds began. India has only 4 percent of worlds water resources and 17 percent of world\u2019s population and thus water conservation is of prime importance. Thus, it is imperative to conclude that the feed-based system has contributed significantly to water conservation which is a subject of national importance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "It is estimated that only 10 to 15 percent of Indian freshwater fish have been brought under feed-based farming, and a great majority of freshwater aquaculture still has scope for converting to this system, which if properly addressed will contribute more to resource savings and at the same time increase fish production in the country.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "The feed-based system has clearly led to some recent, small developments in the species diversification efforts. Modern feed mills with good imported equipment can now produce high-protein, high-energy feeds for species like the Asian sea bass or barramundi (Lates calcarifer), snakeheads (largely Channa striatus), pompano (Trachinotus blochii ) and cobia (Rachycentron canadum) and this is seen asencouragement for farming new species.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "With about 30 high-tech feed mills currently operating for fish feed production, the sector has generated significant employment opportunities for skilled as well as non-skilled workers. Allied businesses like feed equipment manufacturers (domestic and international firms), feed additive and raw material suppliers and other infrastructure support for this new sector are helping, which is a major change and development for the industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Aqua, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-aqua",
                templateUrl: "./aqua.html"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthService {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this._registerUrl = "http://localhost:4201/user/title";
        this._loginUrl = "http://localhost:4201/user/login";
    }
    registerUser(user) {
        return this.http.post(this._registerUrl, user);
    }
    // 
    // 
    loginUser(user) {
        return this.http.post(this._loginUrl, user);
    }
    logoutUser() {
        localStorage.removeItem('token');
        this._router.navigate(['/']);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getUserId() {
        return this.http.get("http://localhost:4201/user/userid", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('token', localStorage.getItem('token'))
        });
    }
    getUserName(id) {
        return this.http.get(`http://localhost:4201/user/username/${id}`);
    }
    getProfile(id) {
        return this.http.get(`http://localhost:4201/user/user-profile/${id}`);
    }
    editProfile(id, user) {
        return this.http.patch(`http://localhost:4201/user/user-profile-edit/${id}`, user);
    }
    deleteaccount(id) {
        return this.http.delete(`http://localhost:4201/user/delete/${id}`);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../description/description.component */ "./src/app/description/description.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../slideshow/slideshow.component */ "./src/app/slideshow/slideshow.component.ts");










function ContactComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "explore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About Us ");
} }
function ContactComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "supervisor_account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Developers ");
} }
function ContactComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r6.name1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", name_r6.path1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Photo of a ", name_r6.name1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ID NUMBER : ", name_r6.id, "");
} }
function ContactComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Location ");
} }
function ContactComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Articles ");
} }
function ContactComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sports_esports");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Games ");
} }
class ContactComponent {
    constructor() {
        this.names = [
            { name1: "Pavan Sai Gontina", "path1": "/assets/images/dp_resume.jpeg", id: "190030524" },
            { name1: "Tanuj Andhavarapu", "path1": "/assets/images/tanuj.jpg", id: "190030074" },
            { name1: "Harshith Devata", "path1": "/assets/images/harshith.jpg", id: "190030385" }
        ];
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 57, vars: 1, consts: [[2, "background-image", "url(assets/images/wall3.jpg)", "height", "110vh", "background-size", "cover"], [2, "font-size", "30px", "font-family", "monospace", "font-weight", "bold", "font-variant", "small-caps", "text-align", "center"], [2, "color", "rgb(163, 6, 53)"], ["mat-tab-label", ""], [1, "ca1"], [2, "display", "flex", "flex-direction", "row", "gap", "50px"], [4, "ngFor", "ngForOf"], [1, "locationc"], [1, "location"], ["mat-card-avatar", "", 1, "example-header-image1"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21709.49913723838!2d80.6298265146804!3d16.447399692846705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a7d81943%3A0x8ba5d78f65df94b8!2sK%20L%20University!5e1!3m2!1sen!2sin!4v1603287101172!5m2!1sen!2sin ", "width", "450", "height", "450", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0"], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon"], [1, "example-tab-icon"], [1, "ca"], ["mat-card-image", "", 2, "height", "330px", 3, "src", "alt"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " WE ALWAYS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "<3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "YOU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContactComponent_ng_template_8_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactComponent_ng_template_11_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Let's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Introduce ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactComponent_div_19_Template, 11, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ContactComponent_ng_template_21_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Come ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Meet Us ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Our Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "KL University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "iframe", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "message us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ContactComponent_ng_template_48_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ContactComponent_ng_template_53_Template, 3, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-slideshow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.names);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabLabel"], _description_description_component__WEBPACK_IMPORTED_MODULE_2__["DescriptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["PanelComponent"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_8__["SlideshowComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], styles: [".background[_ngcontent-%COMP%] { \r\n    position: relative; \r\n    height: 100vh;\r\n    width: 100%;\r\n    display: flex;\r\n    background-color: rgb(95, 93, 93);\r\n    background-size: cover;\r\n  }\r\n  .example-card1[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n    position: absolute;\r\n    background-color: honeydew;\r\n  }\r\n  .all[_ngcontent-%COMP%]\r\n  {\r\n    position: relative;\r\n    overflow: visible;\r\n\r\n  }\r\n  .example-header-image1[_ngcontent-%COMP%] {\r\n    background-image: url(/assets/images/pumpkinh.png);\r\n    background-size: cover;\r\n  }\r\n  .example-tab-icon[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n  }\r\n  .tab1[_ngcontent-%COMP%]{\r\n      position: absolute;\r\n      top: 1%;\r\n      left: 10%;\r\n  }\r\n  .icon[_ngcontent-%COMP%] {\r\n    background-image: url(/assets/images/pumpkinh.png);\r\n    background-size: cover;\r\n  }\r\n  .example-card[_ngcontent-%COMP%] {\r\n    max-width: 360px;\r\n  }\r\n  .example-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  .color[_ngcontent-%COMP%]\r\n  {\r\n      color: black;\r\n  }\r\n  .center[_ngcontent-%COMP%] {\r\n      \r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n    align-items: center;\r\n    max-width: 400px;\r\n}\r\n  .ca1[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: flex-end;\r\n\t\r\n\r\n}\r\n  .ca[_ngcontent-%COMP%]\r\n{\r\n  max-width: 300px;\r\n  min-height: 400px;\r\n  box-shadow: 5px 10px 18px #888888;}\r\n  .location[_ngcontent-%COMP%]{\r\n  max-width: 455px;\r\n  min-height: 400px;\r\n  box-shadow: 5px 10px 18px #888888;\r\n  background-color: rgb(28,29,27);\r\n\r\n\r\n}\r\n  .kl[_ngcontent-%COMP%]\r\n  {\r\n    max-width: 400px;\r\n    min-height: 550px;\r\n    \r\n  }\r\n  .locationc[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n  .n[_ngcontent-%COMP%]{\r\n  border-radius: 38px;\r\n  background: #424242;\r\n  box-shadow:  20px 20px 45px #232323, \r\n               -20px -20px 45px #616161;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7RUFDNUI7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsaUJBQWlCOztFQUVuQjtFQUNBO0lBQ0Usa0RBQWtEO0lBQ2xELHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7TUFDSSxrQkFBa0I7TUFDbEIsT0FBTztNQUNQLFNBQVM7RUFDYjtFQUNBO0lBQ0Usa0RBQWtEO0lBQ2xELHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCO0VBQ0E7O01BRUksWUFBWTtFQUNoQjtFQUdBOztDQUVELGFBQWE7Q0FDYix1QkFBdUI7SUFDcEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtFQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsb0NBQW9DOztBQUVyQztFQUNBOztFQUVFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUNBQWlDLENBQUM7RUFFcEM7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQywrQkFBK0I7OztBQUdqQztFQUNFOztJQUVFLGdCQUFnQjtJQUNoQixpQkFBaUI7O0VBRW5CO0VBQ0Y7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtFQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQjt1Q0FDcUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgOTMsIDkzKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNhcmQxIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob25leWRldztcclxuICB9XHJcbiAgLmFsbFxyXG4gIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICB9XHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHVtcGtpbmgucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXRhYi1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuICAudGFiMXtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDElO1xyXG4gICAgICBsZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIC5pY29uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9wdW1wa2luaC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAuY29sb3JcclxuICB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIFxyXG4gIC5jZW50ZXIge1xyXG4gICAgICBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuLmNhMSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0LyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xyXG5cclxufVxyXG4uY2Fcclxue1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O31cclxuICBcclxuLmxvY2F0aW9ue1xyXG4gIG1heC13aWR0aDogNDU1cHg7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwyOSwyNyk7XHJcblxyXG5cclxufVxyXG4gIC5rbFxyXG4gIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1NTBweDtcclxuICAgIFxyXG4gIH1cclxuLmxvY2F0aW9uY3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm57XHJcbiAgYm9yZGVyLXJhZGl1czogMzhweDtcclxuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xyXG4gIGJveC1zaGFkb3c6ICAyMHB4IDIwcHggNDVweCAjMjMyMzIzLCBcclxuICAgICAgICAgICAgICAgLTIwcHggLTIwcHggNDVweCAjNjE2MTYxO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/crops/crops.component.ts":
/*!******************************************!*\
  !*** ./src/app/crops/crops.component.ts ***!
  \******************************************/
/*! exports provided: CropsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropsComponent", function() { return CropsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");






function CropsComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CropsComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.position, " ");
} }
function CropsComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CropsComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.name, " ");
} }
function CropsComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CropsComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.weight, " ");
} }
function CropsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CropsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.symbol, " ");
} }
function CropsComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
function CropsComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
function CropsComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
class CropsComponent {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() {
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
CropsComponent.ɵfac = function CropsComponent_Factory(t) { return new (t || CropsComponent)(); };
CropsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CropsComponent, selectors: [["app-crops"]], decls: 21, vars: 3, consts: [["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function CropsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CropsComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CropsComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CropsComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CropsComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CropsComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CropsComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CropsComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CropsComponent_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CropsComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CropsComponent_tr_18_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CropsComponent_tr_19_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CropsComponent_tr_20_Template, 3, 1, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JvcHMvY3JvcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jcm9wcy9jcm9wcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crops',
                templateUrl: './crops.component.html',
                styleUrls: ['./crops.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/description/description.component.ts":
/*!******************************************************!*\
  !*** ./src/app/description/description.component.ts ***!
  \******************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");



class DescriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
DescriptionComponent.ɵfac = function DescriptionComponent_Factory(t) { return new (t || DescriptionComponent)(); };
DescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescriptionComponent, selectors: [["app-description"]], decls: 32, vars: 0, consts: [[1, "flex-container"], [1, "flex-child"], [1, "container"], [1, "kl"], ["mat-card-image", "", "src", "/assets/images/pumpkin.jpg", "alt", "Photo of a klu logo"], [2, "font-size", "50px", "font-family", "monospace", "font-weight", "bold", "font-variant", "small-caps"], [2, "font-family", "monospace", "font-size", "16px", "font-weight", "bold"], [2, "display", "flex", "justify-content", "center"], ["width", "250", "controls", "", "loop", "", 2, "outline", "none", "border-radius", "5%"], ["src", "/assets/images/pumpkin.mp4", "type", "video/mp4"]], template: function DescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Project done by Team Npm_Sdp_26 , KL University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Pumpkin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Project Pumkin - A Software Innovation Based on Agricultural And Aquacultural Systems ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Where Farmers and Merchants can Know about the Local Markets and Prices for the products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " An Artificial Intelligence based Assistant Can Help You to navigate and Explore the software with ease and Can Get Help from the Assistant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Can Answer Your Queries Without or without connecting to the Human Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " is it's speciality ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " You can find and navigate to the location You wish and Communicate with the local Farmers and Merchants For Developing Your bussiness and sale of your products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Pumpkin Helps You to Explore not only Internally but also Externally, You can get to know about the various Agro and Aqua based Systems by the Blogs provided by the Software ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "video", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "source", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: [".flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.flex-child[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    \r\n}\r\n\r\n.flex-child[_ngcontent-%COMP%]:first-child {\r\n    margin-right: -150px;\r\n}\r\n\r\n.flex-text[_ngcontent-%COMP%]{\r\n    margin-right: 2%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\ttext-align: left;\r\n\tcolor: black;\r\n  }\r\n\r\n.kl[_ngcontent-%COMP%]\r\n  {\r\n    max-width: 400px;\r\n    max-height: 550px;\r\n    background-color: rgb(28,29,27);\r\n\r\n    \r\n  }\r\n\r\n.c[_ngcontent-%COMP%]{\r\n    color: rgb(163, 6, 53);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixZQUFZO0VBQ1g7O0FBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwrQkFBK0I7OztFQUdqQzs7QUFDRjtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZsZXgtY2hpbGQge1xyXG4gICAgZmxleDogMTtcclxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdzsgKi9cclxufSAgXHJcblxyXG4uZmxleC1jaGlsZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNTBweDtcclxufSBcclxuLmZsZXgtdGV4dHtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAua2xcclxuICB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsMjksMjcpO1xyXG5cclxuICAgIFxyXG4gIH1cclxuLmN7XHJcbiAgICBjb2xvcjogcmdiKDE2MywgNiwgNTMpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-description',
                templateUrl: './description.component.html',
                styleUrls: ['./description.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent, Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










function DetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_div_2_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r1.pro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", f_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Photo of ", f_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address : ", f_r1.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Contact : ", f_r1.ph, " ");
} }
class DetailsComponent {
    constructor(route, dialog) {
        this.route = route;
        this.dialog = dialog;
        this.p = this.route.url;
    }
    openDialog() {
        this.dialog.open(Dialog);
    }
    ngOnInit() {
        console.log(this.p);
        if (this.p == '/adetails') {
            this.farmer = [
                { name: "Veeraiah", pro: "Agricultural Farmer", address: "520007, Krishnanagar, Vijayawada", ph: "9382635243", path: "assets/images/farmer1.png" },
                { name: "Narashima murthy", pro: "Aquacultural Farmer", address: "520011, Lakshminagar, Vijayawada", ph: "8934723874", path: "assets/images/farmer2.png" },
                { name: "Sriram", pro: "Aquacultural Farmer", address: "520007, Krishnanagar, Vijayawada", ph: "9382635243", path: "assets/images/farmer2.png" },
                { name: "Nageswara rao", pro: "Agricultural Farmer", address: "520013 ,Panditnehru Bus Station", ph: "8373525698", path: "assets/images/farmer1.png" },
                { name: "Balayya", pro: "Aquacultural Farmer", address: "520015 ,Patamata Lanka, Vijayawada", ph: "9092836252", path: "assets/images/farmer2.png" },
                { name: "Bala Krishna", pro: "Agricultural Farmer", address: "520015 ,Payakapuram, Vijayawada", ph: "9127352619", path: "assets/images/farmer1.png" },
                { name: "Usman sheik", pro: "Aquacultural Farmer", address: "520003, Purnanandampet ,Vijayawada", ph: "9902938736", path: "assets/images/farmer2.png" },
                { name: "Maheswara rao", pro: "Agricultural Farmer", address: "521108, Ramavarappadu, Vijayawada", ph: "8872657726", path: "assets/images/farmer1.png" },
                { name: "Maruthi rao", pro: "Agricultural Farmer", address: "520002, Suryaraopet, Vijayawada", ph: "9028267364", path: "assets/images/farmer1.png" },
                { name: "Brahmana sastry", pro: "Agricultural Farmer", address: "520007 ,Vasanthanagar, Vijayawada", ph: "8988826362", path: "assets/images/farmer1.png" },
            ];
        }
        else if (this.p == "/mdetails") {
            this.farmer = [
                { name: "Ramana Raju", pro: "Merchant", address: "New Rajarajeswari Peta,Andhra Pradesh,520015", ph: "9382625243", path: "assets/images/merchantimg.png" },
                { name: "Veera Raju", pro: "Merchant", address: "Nallakunta,Andhra Pradesh ,521225", ph: "8217625633", path: "assets/images/merchantimg.png" },
                { name: "Rama rao", pro: "Merchant", address: "Undavalli,Amaravati, Andhra Pradesh ,522501", ph: "8373525636", path: "assets/images/merchantimg.png" },
                { name: "Srinivasa rao", pro: "Merchant", address: "520008,A.P.U.H.S,Vijayawada", ph: "9902836252", path: "assets/images/merchantimg.png" },
                { name: "seeta Ram", pro: "Merchant", address: "520002, Arundalpet, Vijayawada", ph: "9127352610", path: "assets/images/merchantimg.png" },
                { name: "satya raju", pro: "Merchant", address: "520012, Bhavanipuram, Vijayawada", ph: "9902937363", path: "assets/images/merchantimg.png" },
                { name: "raja ram", pro: "Merchant", address: "520001, Chittinagar, Vijayawada", ph: "8872652415", path: "assets/images/merchantimg.png" },
                { name: "rajashekar", pro: "Merchant", address: "520002, Civil Coursts, Vijayawada", ph: "9028263536", path: "assets/images/merchantimg.png" },
                { name: "mothi rao", pro: "Merchant", address: "520002 ,Durga Agraharam, Vijayawada", ph: "8888826362", path: "assets/images/merchantimg.png" },
                { name: "Narashimha swamy", pro: "Merchant", address: "520004 ,Gunadala, Vijayawada", ph: "9856065098", path: "assets/images/merchantimg.png" },
            ];
        }
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 3, vars: 1, consts: [[2, "overflow", "auto", "background-image", "url(/assets/images/back2.jpg)", "height", "100vh", "background-size", "cover"], ["cols", "3", "rowHeight", "49%"], ["style", "padding: 0px;outline: none;", 4, "ngFor", "ngForOf"], [2, "padding", "0px", "outline", "none"], [1, "card", 2, "background-color", "#", "opacity", ".9"], ["mat-card-avatar", "", 1, "e-img"], ["mat-card-image", "", 2, "width", "350px", 3, "src", "alt"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Complete Details", 1, "button", 3, "click"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailsComponent_div_2_Template, 19, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.farmer);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".card[_ngcontent-%COMP%]{\r\n    max-width: 340px;\r\n    min-height: 475px;\r\n    margin-top: 40px;\r\n    cursor: pointer;\r\n    transition: 0.5s ease;\r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n    box-shadow: 5px 5px 10px #706b6b;\r\n}\r\n.center[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.e-img[_ngcontent-%COMP%]{\r\n    background-image: url('pumpkin.jpg');\r\n    background-size: cover;\r\n}\r\n.back[_ngcontent-%COMP%]{\r\n    background-image: url(/assets/images/back3.jpg);\r\n    \r\n    background-size: cover;\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0lBQ0ksb0NBQW9EO0lBQ3BELHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksK0NBQStDO0lBQy9DLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gICAgbWluLWhlaWdodDogNDc1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG59XHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggIzcwNmI2YjtcclxufVxyXG4uY2VudGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmUtaW1ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyY1xcYXNzZXRzXFxpbWFnZXNcXHB1bXBraW4uanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmFjazMuanBnKTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM3MDZiNmI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();
class Dialog {
}
Dialog.ɵfac = function Dialog_Factory(t) { return new (t || Dialog)(); };
Dialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dialog, selectors: [["app-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""]], template: function Dialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Project Pumpkin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A Notification will be sent to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\nperson\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " based on your interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog',
                templateUrl: './dialog.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/fcontent/fcontent.component.ts":
/*!************************************************!*\
  !*** ./src/app/fcontent/fcontent.component.ts ***!
  \************************************************/
/*! exports provided: FcontentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcontentComponent", function() { return FcontentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






function FcontentComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u279C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cards_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", cards_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cards_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/", cards_r2.path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FcontentComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u279C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cards_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", cards_r3.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cards_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/", cards_r3.path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class FcontentComponent {
    constructor(router) {
        router.events.subscribe((url) => console.log(url));
        console.log(router.url);
        this.name = router.url;
        this.cardname = [
            { name: "Profile", path: "assets/images/profile.png", link: "/register" },
            { name: "Markets", path: "assets/images/marketimg.png", link: "/markets" }
        ];
        // this.cardname1=[
        //   {name:'Prices',path:"assets/images/pricesimg.png",link:"/sell"},
        //   {name:'Merchants',path:"assets/images/merchantimg.png",link:"/mdetails"}
        // ];
        if (this.name == "/agrifarmer") {
            this.img1 = "assets/images/agrigh.jpg";
            this.cardname1 = [
                { name: 'Prices', path: "assets/images/pricesimg.png", link: "/sell" },
                { name: 'Merchants', path: "assets/images/merchantimg.png", link: "/mdetails" }
            ];
        }
        if (this.name == "/aquafarmer") {
            this.img1 = "assets/images/aquaimg.png";
            this.cardname1 = [
                { name: 'Prices', path: "assets/images/pricesimg.png", link: "/sell" },
                { name: 'Merchants', path: "assets/images/merchantimg.png", link: "/mdetails" }
            ];
        }
        if (this.name == "/agrimerchant") {
            this.img1 = "assets/images/agrif.jpg";
            this.cardname1 = [
                { name: 'Prices', path: "assets/images/pricesimg.png", link: "/sell" },
                { name: 'Farmers', path: "assets/images/farmer1.png", link: "/adetails" }
            ];
        }
        if (this.name == "/aquamerchant") {
            this.img1 = "assets/images/aquaimg.png";
            this.cardname1 = [
                { name: 'Prices', path: "assets/images/pricesimg.png", link: "/sell" },
                { name: 'Farmers', path: "assets/images/farmer1.png", link: "/adetails" }
            ];
        }
        //    if(this.name=="/agrifarmer" || "/aquafarmer")
        //   {
        //     this.cardname1=[
        //     {name:'Prices',path:"assets/images/pricesimg.png",link:"/sell"},
        //     {name:'Merchants',path:"assets/images/merchantimg.png",link:"/mdetails"}
        //   ];
        // }
        // if(this.name=="/agrimerchant" || "/aquamerchant")
        // else{
        // this.cardname1=[
        //   {name:'Prices',path:"assets/images/pricesimg.png",link:"/sell"},
        //   {name:'Farmers',path:"assets/images/farmer1.png",link:"/adetails"}
        // ];
        // }
    }
    ngOnInit() {
    }
}
FcontentComponent.ɵfac = function FcontentComponent_Factory(t) { return new (t || FcontentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FcontentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FcontentComponent, selectors: [["app-fcontent"]], decls: 23, vars: 2, consts: [["behavior", "scroll", "direction", "left", "scrollamount", "8", 2, "font-family", "Lucida Console, Courier, monospace", "font-size", "20px", "text-shadow", "2px 2px 10px grey"], [1, "flex-container"], [1, "flex-child"], [1, "container"], [2, "font-size", "50px", "font-family", "monospace", "font-weight", "bold", "font-variant", "small-caps"], [2, "font-family", "monospace", "font-size", "16px", "font-weight", "bold"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/register"], [2, "display", "flex", "flex-direction", "column", "gap", "20px"], [2, "display", "flex", "flex-direction", "row", "gap", "15px"], ["target", "_blank", "style", "padding: 0px;outline: none;", 3, "routerLink", 4, "ngFor", "ngForOf"], ["style", "padding: 0px;outline: none;", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "flex-text"], ["target", "_blank", 2, "padding", "0px", "outline", "none", 3, "routerLink"], [1, "card"], ["mat-card-image", "", 2, "width", "150px", 3, "src"], ["mat-stroked-button", "", "color", "primary", 1, "b1"], [2, "padding", "0px", "outline", "none", 3, "routerLink"], ["mat-stroked-button", "", "color", "warn", 1, "b1"]], template: function FcontentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "marquee", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Welcome to the Pumpkin Portal // announcements will be updated here // Website is under Maintainance // We Always <3 U ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Pumpkin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Project Pumkin - A Software Innovation Based on Agricultural And Aquacultural Systems ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add More Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FcontentComponent_div_19_Template, 10, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FcontentComponent_div_21_Template, 10, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardname1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"]], styles: [".flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.flex-child[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    \r\n}\r\n\r\n.flex-child[_ngcontent-%COMP%]:first-child {\r\n    margin-right: 30px;\r\n}\r\n\r\n.flex-text[_ngcontent-%COMP%]{\r\n    margin-right: 2%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\ttext-align: left;\r\n\tcolor: black;\r\n  }\r\n\r\n.responsive[_ngcontent-%COMP%] {\r\n\twidth: 60%;\r\n\theight: auto;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    min-width: 310px;\r\n    min-height: 170px;\r\n    border-radius: 5%;\r\n    background-color: rgb(28,29,27);\r\n    cursor: pointer;\r\n    transition: 0.5s ease;\r\n    box-shadow: 3px 3px rgb(24, 156, 165);\r\n}\r\n\r\n.card1[_ngcontent-%COMP%]:hover {\r\n      transition: all 0.5s ease;\r\n      box-shadow:  4px 5px rgba(38, 38, 38, 0.2);\r\n      top: -5px;\r\n      border: 1px solid #5c5a5a;\r\n      background-color: darkslategray;\r\n    }\r\n\r\n.b1[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        top:75%;\r\n        right: 5%;\r\n        cursor: pointer;\r\n        transition: 0.5s ease;\r\n        \r\n        border-radius: 100%;\r\n    }\r\n\r\n.b1[_ngcontent-%COMP%]:hover {\r\n        transform: scale(1.05);\r\n        \r\n        box-shadow: 1px 1px 10px #f01a6c;\r\n\r\n    }\r\n\r\n.background[_ngcontent-%COMP%]{\r\n        background-color: #e7e7e7;\r\n        \r\n    }\r\n\r\n.card1[_ngcontent-%COMP%]{\r\n        width: 350px;\r\n        height: 475px;\r\n        cursor: pointer;\r\n        transition: 0.5s ease;\r\n    }\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n        transform: scale(1.05);\r\n        box-shadow: 5px 5px 10px #2e2f29;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmNvbnRlbnQvZmNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixZQUFZO0VBQ1g7O0FBQ0E7Q0FDRCxVQUFVO0NBQ1YsWUFBWTtFQUNYOztBQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHFDQUFxQztBQUN6Qzs7QUFDSTtNQUNFLHlCQUF5QjtNQUN6QiwwQ0FBMEM7TUFDMUMsU0FBUztNQUNULHlCQUF5QjtNQUN6QiwrQkFBK0I7SUFDakM7O0FBRUE7UUFDSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFNBQVM7UUFDVCxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLCtCQUErQjtRQUMvQixtQkFBbUI7SUFDdkI7O0FBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsc0NBQXNDO1FBQ3RDLGdDQUFnQzs7SUFFcEM7O0FBQ0E7UUFDSSx5QkFBeUI7O0lBRTdCOztBQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlO1FBQ2YscUJBQXFCO0lBQ3pCOztBQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLGdDQUFnQztJQUNwQyIsImZpbGUiOiJzcmMvYXBwL2Zjb250ZW50L2Zjb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZsZXgtY2hpbGQge1xyXG4gICAgZmxleDogMTtcclxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdzsgKi9cclxufSAgXHJcblxyXG4uZmxleC1jaGlsZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn0gXHJcbi5mbGV4LXRleHR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcbi5jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLnJlc3BvbnNpdmUge1xyXG5cdHdpZHRoOiA2MCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4td2lkdGg6IDMxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwyOSwyNyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IHJnYigyNCwgMTU2LCAxNjUpO1xyXG59XHJcbiAgICAuY2FyZDE6aG92ZXIge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICBib3gtc2hhZG93OiAgNHB4IDVweCByZ2JhKDM4LCAzOCwgMzgsIDAuMik7XHJcbiAgICAgIHRvcDogLTVweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzVjNWE1YTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICAgIH1cclxuICBcclxuICAgIC5iMXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjc1JTtcclxuICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI2OTI3OyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYjE6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgLyogYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICMxYWUxZjA7ICovXHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICNmMDFhNmM7XHJcblxyXG4gICAgfVxyXG4gICAgLmJhY2tncm91bmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDF7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDc1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggIzJlMmYyOTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgIFxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FcontentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fcontent',
                templateUrl: './fcontent.component.html',
                styleUrls: ['./fcontent.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "footer1"], ["href", "/contact", 2, "color", "inherit"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 Copyright 2020 Pumpkin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Created and Maintained By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "PROJECT PUMPKIN TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer1[_ngcontent-%COMP%] {\r\n\r\n\tposition: fixed;\r\n\r\n\tbottom: 0%;\r\n\r\n\t padding: 0px; \r\n\r\n\ttext-align: center;\r\n\r\n\twidth: 100%;\r\n\r\n\tbackground: #ddd;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGVBQWU7O0NBRWYsVUFBVTs7RUFFVCxZQUFZOztDQUViLGtCQUFrQjs7Q0FFbEIsV0FBVzs7Q0FFWCxnQkFBZ0I7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcjEge1xyXG5cclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG5cdGJvdHRvbTogMCU7XHJcblxyXG5cdCBwYWRkaW5nOiAwcHg7IFxyXG5cclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRiYWNrZ3JvdW5kOiAjZGRkO1xyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");








class HeaderComponent {
    constructor(router) {
        router.events.subscribe((url) => console.log(url));
        console.log(router.url);
        this.name = router.url;
        if (this.name == "/aquafarmer") {
            this.wish = "AquaFarmer";
        }
        else if (this.name == '/agrifarmer')
            this.wish = "Agrifarmer";
        else if (this.name == '/mdetails')
            this.wish = "Merchant's";
        else if (this.name == '/adetails')
            this.wish = "Farmer's";
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 42, vars: 3, consts: [[2, "opacity", ".9", "background-color", "rgb(8 8 8 )"], ["mat-icon-button", "", 1, "example-icon", 3, "click"], [1, "example-spacer"], [1, "example-space"], [2, "font-size", "30px", "color", "orange"], ["mat-stroked-button", "", "color", "accent", "routerLink", "/contact", 1, "example-icon"], ["mat-stroked-button", "", "color", "warn", "routerLink", "/", 1, "example-icon"], [1, "example-containe", 3, "hasBackdrop"], [1, "example-sidenav"], ["drawer", ""], ["mat-icon-button", "", 3, "click"], [3, "multiple"], ["href", "/profile"], ["href", "/sell"], ["href", "/markets"], ["href", "/contact"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u146D\u144C\u15F0\u146D\u16D5\u13A5\u144E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Find More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "loyalty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-drawer-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-drawer", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-selection-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Prices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-list-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Markets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-list-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.wish, " Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListOption"]], styles: [".header1[_ngcontent-%COMP%] {\r\n\r\n\tpadding: 30px;\r\n\r\n\ttext-align: center;\r\n\r\n\tbackground: #1abc9c;\r\n\r\n\tcolor: white;\r\n\r\n\tbackground-image: radial-gradient(circle 1028px at 3.1% 8.5%, rgba(170, 165, 156, 1) 0%, rgba(77, 74, 70, 1) 90.1%);\r\n\r\n}\r\n.example-spacer[_ngcontent-%COMP%] {\r\n\tflex: 1 1 auto;\r\n  }\r\n.example-container[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    height: 200px;\r\n    margin: 12px;\r\n    border: 1px solid #555;\r\n  }\r\n.mat-drawer-content[_ngcontent-%COMP%] {\r\n    padding: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\na[_ngcontent-%COMP%] {\r\n\r\n\tcolor: inherit;\r\n\r\n\ttext-decoration: none;\r\n\r\n}\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n\r\n\tpadding: 30px;\r\n\r\n\theight: 100%;\r\n\r\n\r\n}\r\n.example-space[_ngcontent-%COMP%] {\r\n\tflex: .1 1 auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Q0FFQyxhQUFhOztDQUViLGtCQUFrQjs7Q0FFbEIsbUJBQW1COztDQUVuQixZQUFZOztDQUVaLG1IQUFtSDs7QUFFcEg7QUFDQTtDQUNDLGNBQWM7RUFDYjtBQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7QUFFRjs7Q0FFQyxjQUFjOztDQUVkLHFCQUFxQjs7QUFFdEI7QUFDQTs7Q0FFQyxhQUFhOztDQUViLFlBQVk7OztBQUdiO0FBQ0E7Q0FDQyxlQUFlO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYWRlcjEge1xyXG5cclxuXHRwYWRkaW5nOiAzMHB4O1xyXG5cclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cdGJhY2tncm91bmQ6ICMxYWJjOWM7XHJcblxyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHJcblx0YmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSAxMDI4cHggYXQgMy4xJSA4LjUlLCByZ2JhKDE3MCwgMTY1LCAxNTYsIDEpIDAlLCByZ2JhKDc3LCA3NCwgNzAsIDEpIDkwLjElKTtcclxuXHJcbn1cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuXHRmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRyYXdlci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuICBcclxuYSB7XHJcblxyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG5cclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG5cclxuXHRwYWRkaW5nOiAzMHB4O1xyXG5cclxuXHRoZWlnaHQ6IDEwMCU7XHJcblxyXG5cclxufVxyXG4uZXhhbXBsZS1zcGFjZSB7XHJcblx0ZmxleDogLjEgMSBhdXRvO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
// import { HttpErrorResponse } from '@angular/common/http';















function LoginComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage());
} }
function LoginComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getError());
} }
function LoginComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getError3());
} }
class LoginComponent {
    constructor(_auth, _router, snackbar) {
        this._auth = _auth;
        this._router = _router;
        this.snackbar = snackbar;
        this.loginUserData = {
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
        };
        this.hide = true;
        this.loginData = { username: "", password: "", role: "" };
    }
    getErrorMessage() {
        if (this.loginUserData.username.hasError('required')) {
            return 'username is required';
        }
        else if (this.loginUserData.username.hasError('username')) {
            return 'username must be a valid';
        }
    }
    getError() {
        if (this.loginUserData.password.hasError('required')) {
            return 'Password is required';
        }
        else if (this.loginUserData.password.hasError('minlength')) {
            return 'Password must be a minimum length of 6';
        }
    }
    getError3() {
        if (this.loginUserData.role.hasError('required')) {
            return 'role is required';
        }
        else if (this.loginUserData.role.hasError('role')) {
            return 'role must be a matched';
        }
    }
    ngOnInit() {
    }
    loginUser() {
        this.loginData.username = this.loginUserData.username.value;
        this.loginData.password = this.loginUserData.password.value;
        this.loginData.role = this.loginUserData.role.value;
        this._auth.loginUser(this.loginData)
            .subscribe(res => {
            this.snackbar.open('LOGIN SUCCESSFULL', 'OK', {
                duration: 3000,
            });
            localStorage.setItem('token', res.token);
            this._router.navigate([this.loginUserData.role.value]);
        }, err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    this.snackbar.open('INVALID username OR PASSWORD', 'OK', {
                        duration: 3000,
                    });
                    this.loginUserData.username.reset();
                    this.loginUserData.password.reset();
                    this.loginUserData.role.reset();
                    this.loginData.username = '';
                    this.loginData.password = '';
                    this.loginData.role = '';
                }
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 30, vars: 11, consts: [["appearance", "fill", 2, "width", "60%"], ["matSuffix", ""], ["matInput", "", "type", "username", "placeholder", "Username", "required", "", 3, "formControl"], [4, "ngIf"], ["matInput", "", "placeholder", "Enter your password", "required", "", 3, "type", "formControl"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [3, "value", "formControl", "valueChange"], ["value", "agrifarmer"], ["value", "agrimerchant"], ["value", "aquafarmer"], ["value", "aquamerchant"], ["mat-raised-button", "", "color", "warn", 2, "width", "70%", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LoginComponent_mat_error_6_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoginComponent_mat_error_14_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Login as");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function LoginComponent_Template_mat_select_valueChange_18_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Agriculture Farmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Agriculture Merchant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Aquaculture Farmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Aquaculture Merchant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, LoginComponent_mat_error_27_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.loginUserData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginUserData.username.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("formControl", ctx.loginUserData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginUserData.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selected)("formControl", ctx.loginUserData.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginUserData.role.invalid);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["html[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    margin: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    background-color: #3a3a3a;\r\n  }\r\n  \r\n  #main-holder[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    height: 70%;\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    background-color: white;\r\n    border-radius: 7px;\r\n    box-shadow: 0px 0px 5px 2px black;\r\n  }\r\n  \r\n  #login-error-msg-holder[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  #login-error-msg[_ngcontent-%COMP%] {\r\n    width: 23%;\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 5px;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    color: #8a0000;\r\n    border: 1px solid #8a0000;\r\n    background-color: #e58f8f;\r\n    opacity: 0;\r\n  }\r\n  \r\n  #error-msg-second-line[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  \r\n  #login-form[_ngcontent-%COMP%] {\r\n    align-self: flex-start;\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .login-form-field[_ngcontent-%COMP%]::placeholder {\r\n    color: #3a3a3a;\r\n  }\r\n  \r\n  .login-form-field[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-bottom: 1px solid #3a3a3a;\r\n    margin-bottom: 10px;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    padding: 0px 0px 5px 5px;\r\n  }\r\n  \r\n  #login-form-submit[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 7px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    font-weight: bold;\r\n    background-color: #3a3a3a;\r\n    cursor: pointer;\r\n    outline: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xyXG4gIH1cclxuICBcclxuICAjbWFpbi1ob2xkZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgI2xvZ2luLWVycm9yLW1zZy1ob2xkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI2xvZ2luLWVycm9yLW1zZyB7XHJcbiAgICB3aWR0aDogMjMlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzhhMDAwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YTAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU4ZjhmO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgI2Vycm9yLW1zZy1zZWNvbmQtbGluZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgI2xvZ2luLWZvcm0ge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybS1maWVsZDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICMzYTNhM2E7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1mb3JtLWZpZWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2EzYTNhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDVweCA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2dpbi1mb3JtLXN1Ym1pdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/markets/markets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/markets/markets.component.ts ***!
  \**********************************************/
/*! exports provided: MarketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketsComponent", function() { return MarketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








function MarketsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Aqua Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "LIKE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", m_r2.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Photo of ", m_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address : ", m_r2.address, " ");
} }
function MarketsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Agricultural Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "LIKE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", m_r3.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Photo of ", m_r3.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address : ", m_r3.address, " ");
} }
class MarketsComponent {
    constructor() {
        this.aquamarkets = [
            { "name": "Mahanti Fish Market",
                "address": "Besant Rd, 2 Town, Governor Peta, Vijayawada, Andhra Pradesh 520002",
                "path": "assets/images/maps/mahanthi.PNG" },
            { "name": "NPK Live Fish",
                "address": "Mahanadu Rd, opp. SML Isuze Service Center, Auto Nagar, Vijayawada, Andhra Pradesh 520007",
                "path": "/assets/images/aquafarmers/image/1.png" },
            { "name": "Kishore Live Fish",
                "address": "21-11-21/1 ,Bapuji Rao Road Opposite to 13th line, Near Old Post Office, Madhuranagar,Vijayawada, Andhra Pradesh 520011",
                "path": "/assets/images/aquafarmers/image/2.png" },
            { "name": "Modern Fish Market",
                "address": "New Rajarajeswari Peta, Rajarajeswari Peta, Vijayawada, Andhra Pradesh 520015",
                "path": "/assets/images/aquafarmers/image/3.png" },
            { "name": "MHM Live Fish and Organic Fish Market",
                "address": "Vijayawada, Tadigadapa Donka Rd, Ramalingeswara Nagar, Vijayawada, Andhra Pradesh 520007",
                "path": "/assets/images/aquafarmers/image/4.png" },
            { "name": "RR Aqua Logistics",
                "address": "Gopavarapugudem, Patamatalanka, Benz Circle, Vijayawada, Andhra Pradesh 520010",
                "path": "/assets/images/aquafarmers/image/5.png" },
            { "name": "1 Town Fish Market",
                "address": "Velagaleti Vari St, Kothapet, Islampet, Vijayawada, Andhra Pradesh 520001",
                "path": "/assets/images/aquafarmers/image/6.png" },
            { "name": "Basheer Khan Dry Fish",
                "address": " Gulam Mohiddin Stree, Kothapet, Kothapet, Vijayawada, Andhra Pradesh 520001",
                "path": "/assets/images/aquafarmers/image/7.png" },
            { "name": "ezyfish - Boneless Fish",
                "address": " Patamata, Benz Circle, Vijayawada, Andhra Pradesh 520010",
                "path": "/assets/images/aquafarmers/image/8.png" },
            { "name": "Kolleru Fish Land",
                "address": "Beside RamPriya Theater, Poranki, Vijayawada, Andhra Pradesh 521137",
                "path": "/assets/images/aquafarmers/image/9.png" }
        ];
        this.agrimarkets = [
            { "name": "Agricultural market committee",
                "address": "Mahendra Nagar, Gollapudi, Vijayawada, Andhra Pradesh 520012",
                "path": "assets/images/maps/agricomittee.png" },
            { "name": "Market Yard, Gollapudi",
                "address": "Mahendra Nagar, Gollapudi, Vijayawada, Andhra Pradesh 520012",
                "path": "assets/images/agrimarkets/marketyard.png" },
            { "name": "Rythu bazar Farmers Vegetable Market",
                "address": "Nunna Rd, Payakapuram, Vijayawada, Andhra Pradesh 520015",
                "path": "assets/images/agrimarkets/rythubazarp.png" },
            { "name": "Rythu Bazar Ajithsinghnagar",
                "address": "Ajit Singh Nagar, Vijayawada, Andhra Pradesh 520015",
                "path": "assets/images/agrimarkets/rythua.png" },
            { "name": "Bhavanipuram Rythu Bazar ( Farmers' Vegetable Market)",
                "address": "Bhavanipura, Chittinagar, Bharathi Teertha Nagar, V D Puram, Vijayawada, Andhra Pradesh 520012",
                "path": "assets/images/agrimarkets/rythub.png" },
            { "name": "Sri Raja Rajeshwari Vegetables",
                "address": "Krishnalanka, Vijayawada, Andhra Pradesh 520001",
                "path": "assets/images/agrimarkets/raja.png" }
        ];
    }
    ngOnInit() {
    }
}
MarketsComponent.ɵfac = function MarketsComponent_Factory(t) { return new (t || MarketsComponent)(); };
MarketsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarketsComponent, selectors: [["app-markets"]], decls: 9, vars: 2, consts: [[2, "overflow", "auto", "background-image", "url(assets/images/back4.jpg)", "height", "100vh", "background-size", "cover"], ["mat-align-tabs", "center"], ["label", "Aqua Markets"], ["cols", "3", "rowHeight", "2.3:3"], [4, "ngFor", "ngForOf"], ["label", "Agri Markets"], ["cols", "3", "rowHeight", "2.5:3"], [1, "example-card", 2, "background-color", "#", "opacity", "1"], ["mat-card-avatar", "", 1, "e-image"], ["mat-card-image", "", 2, "height", "300px", 3, "src", "alt"], ["mat-stroked-button", "", 1, "button"], ["mat-card-avatar", "", 1, "agri-header-img"], ["mat-raised-button", "", 1, "button"]], template: function MarketsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MarketsComponent_div_5_Template, 16, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MarketsComponent_div_8_Template, 16, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aquamarkets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.agrimarkets);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".card[_ngcontent-%COMP%]{\r\n \r\n    max-width: 340px;\r\n    min-height: 475px;\r\n    margin-top: 50px;\r\n    cursor: pointer;\r\n    transition: 0.5s ease;\r\n}  \r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n    box-shadow: 5px 5px 10px #2e2f29;\r\n}  \r\n\r\n.back[_ngcontent-%COMP%]{\r\n    background-color: #8d8d8d;\r\n   \r\n}  \r\n\r\n.example-card[_ngcontent-%COMP%]{\r\n    max-width: 340px;\r\n    min-height: 475px;\r\n    margin-top: 50px;\r\n    cursor: pointer;\r\n    transition: 0.5s ease;\r\n}  \r\n\r\n.example-card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n    box-shadow: 5px 5px 10px #706b6b;\r\n}  \r\n\r\n.button[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom: 3%;\r\n    right: 4%;\r\n    background-color: #f71d00d3;\r\n}  \r\n\r\n.center[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}  \r\n\r\n.e-image[_ngcontent-%COMP%]{\r\nbackground-image: url('aquaimg.png');\r\nbackground-size: cover;\r\n}  \r\n\r\n.agri-header-img[_ngcontent-%COMP%]{\r\n    background-image: url('agrif.jpg');\r\n    background-size: cover;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0cy9tYXJrZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSx5QkFBeUI7O0FBRTdCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCwyQkFBMkI7QUFDL0I7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFDQTtBQUNBLG9DQUFvRDtBQUNwRCxzQkFBc0I7QUFDdEI7O0FBQ0E7SUFDSSxrQ0FBa0Q7SUFDbEQsc0JBQXNCO0lBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbWFya2V0cy9tYXJrZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuIFxyXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ3NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxufSAgXHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICMyZTJmMjk7XHJcbn1cclxuLmJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQ4ZDhkO1xyXG4gICBcclxufVxyXG4uZXhhbXBsZS1jYXJke1xyXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ3NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxufVxyXG4uZXhhbXBsZS1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggIzcwNmI2YjtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzJTtcclxuICAgIHJpZ2h0OiA0JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzFkMDBkMztcclxufVxyXG4uY2VudGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmUtaW1hZ2V7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFxhcXVhaW1nLnBuZyk7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmFncmktaGVhZGVyLWltZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmNcXGFzc2V0c1xcaW1hZ2VzXFxhZ3JpZi5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-markets',
                templateUrl: './markets.component.html',
                styleUrls: ['./markets.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");























const MaterialComponents = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]
        ], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]], exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]
                ],
                exports: [
                    MaterialComponents
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/mdetails/mdetails.component.ts":
/*!************************************************!*\
  !*** ./src/app/mdetails/mdetails.component.ts ***!
  \************************************************/
/*! exports provided: MdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdetailsComponent", function() { return MdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../details/details.component */ "./src/app/details/details.component.ts");




class MdetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MdetailsComponent.ɵfac = function MdetailsComponent_Factory(t) { return new (t || MdetailsComponent)(); };
MdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MdetailsComponent, selectors: [["app-mdetails"]], decls: 2, vars: 0, template: function MdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-details");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21kZXRhaWxzL21kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mdetails',
                templateUrl: './mdetails.component.html',
                styleUrls: ['./mdetails.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../articles/articles.component */ "./src/app/articles/articles.component.ts");
/* harmony import */ var _aquaarticle_aquaarticle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aquaarticle/aquaarticle.component */ "./src/app/aquaarticle/aquaarticle.component.ts");
/* harmony import */ var _article1_article1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article1/article1.component */ "./src/app/article1/article1.component.ts");
/* harmony import */ var _article2_article2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article2/article2.component */ "./src/app/article2/article2.component.ts");
/* harmony import */ var _article3_article3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../article3/article3.component */ "./src/app/article3/article3.component.ts");
/* harmony import */ var _article4_article4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../article4/article4.component */ "./src/app/article4/article4.component.ts");
/* harmony import */ var _article5_article5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../article5/article5.component */ "./src/app/article5/article5.component.ts");










class PanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["app-panel"]], decls: 67, vars: 0, consts: [[2, "font-size", "30px", "font-family", "monospace", "font-weight", "bold", "font-variant", "small-caps", "text-align", "center"], [2, "font-family", "'Quicksand', sans-serif"], ["hideToggle", ""]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Blogs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Articles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " INDIAN AGRICULTURE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Know About Our Agriculture Methods and Cultures \u00A0 - article by Harshith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " INDIAN AQUACULTURE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Know About Our Aquaculture Methods and Cultures \u00A0 - article by Harshith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-aquaarticle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " A Complete History - Agriculture ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Know About the History of Agriculture \u00A0 - article by Pavan Sai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-article1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " A Complete History - Aquaculture ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Know About the History of Aquaculture \u00A0 - article by Pavan Sai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-article2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Irrigation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " - using water Wisely ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Know About the Irrigation \u00A0 - article by Pavan Sai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-article3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Fertilizers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Know About the Fertilizers \u00A0 - article by Pavan Sai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-article4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Agriculture Machinery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Know About the Agriculture Machinery \u00A0 - article by Pavan Sai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-article5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelDescription"], _articles_articles_component__WEBPACK_IMPORTED_MODULE_2__["ArticlesComponent"], _aquaarticle_aquaarticle_component__WEBPACK_IMPORTED_MODULE_3__["AquaarticleComponent"], _article1_article1_component__WEBPACK_IMPORTED_MODULE_4__["Article1Component"], _article2_article2_component__WEBPACK_IMPORTED_MODULE_5__["Article2Component"], _article3_article3_component__WEBPACK_IMPORTED_MODULE_6__["Article3Component"], _article4_article4_component__WEBPACK_IMPORTED_MODULE_7__["Article4Component"], _article5_article5_component__WEBPACK_IMPORTED_MODULE_8__["Article5Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile-edit/profile-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
















function ProfileEditComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getErrorName());
} }
function ProfileEditComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getErrorDob());
} }
function ProfileEditComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getErrorGender());
} }
function ProfileEditComponent_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getErrorPhone());
} }
function ProfileEditComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getErrorEMail());
} }
function ProfileEditComponent_mat_error_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getErrorAddr());
} }
function ProfileEditComponent_mat_error_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getErrorCity());
} }
function ProfileEditComponent_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getErrorPin());
} }
class ProfileEditComponent {
    constructor(auth, _router, snackbar) {
        this.auth = auth;
        this._router = _router;
        this.snackbar = snackbar;
        this.form = { name: null, dob: null, addr: null, city: null, gender: null, pincode: null, phone: null, email: null };
        this.registerUserData = {
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            addr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        };
    }
    getErrorName() {
        if (this.registerUserData.username.hasError('Required')) {
            return 'Name is Required';
        }
        else if (this.registerUserData.username.hasError('minlength')) {
            return 'Name Must be a Minimum Length of 3';
        }
    }
    getErrorDob() {
        if (this.registerUserData.dob.hasError('Required')) {
            return 'Date of Birth is Required';
        }
    }
    getErrorGender() {
        if (this.registerUserData.gender.hasError('Required')) {
            return 'Filling this Field is Required';
        }
    }
    getErrorAddr() {
        if (this.registerUserData.addr.hasError('Required')) {
            return 'Address is Required';
        }
    }
    getErrorCity() {
        if (this.registerUserData.city.hasError('Required')) {
            return 'City is Required';
        }
    }
    getErrorPin() {
        if (this.registerUserData.pincode.hasError('Required')) {
            return 'Pincode is Required';
        }
        else if (this.registerUserData.pincode.hasError('minlength')) {
            return 'Pincode Must be 6 Digits';
        }
        else if (this.registerUserData.pincode.hasError('maxlength')) {
            return 'Pincode Must be 6 Digits';
        }
    }
    getErrorPhone() {
        if (this.registerUserData.phone.hasError('Required')) {
            return 'Mobile No. is Required';
        }
        else if (this.registerUserData.phone.hasError('minlength')) {
            return 'Mobile No. Must be 10 Digits';
        }
        else if (this.registerUserData.phone.hasError('maxlength')) {
            return 'Mobile No. Must be 10 Digits';
        }
    }
    getErrorEMail() {
        if (this.registerUserData.email.hasError('Required')) {
            return 'Email is Required';
        }
        else if (this.registerUserData.email.hasError('email')) {
            return 'Email Must be a Valid E - Mail Address';
        }
    }
    ngOnInit() {
        this.auth.getUserId().subscribe((res) => {
            this.auth.getProfile(res).subscribe((data) => {
                this.registerUserData.username.setValue(data.name);
                this.registerUserData.addr.setValue(data.addr);
                this.registerUserData.dob.setValue(data.dob);
                this.registerUserData.gender.setValue(data.gender);
                this.registerUserData.city.setValue(data.city);
                this.registerUserData.pincode.setValue(data.pincode);
                this.registerUserData.phone.setValue(data.phone);
                this.registerUserData.email.setValue(data.email);
            });
        });
    }
    onSubmit() {
        this.form.name = this.registerUserData.username.value;
        this.form.dob = this.registerUserData.dob.value;
        this.form.addr = this.registerUserData.addr.value;
        this.form.gender = this.registerUserData.gender.value;
        this.form.city = this.registerUserData.city.value;
        this.form.pincode = this.registerUserData.pincode.value;
        this.form.phone = this.registerUserData.phone.value;
        this.form.email = this.registerUserData.email.value;
        this.auth.getUserId().subscribe((res) => {
            this.auth.editProfile(res, this.form).subscribe((res) => {
                this._router.navigate(['/profile']);
                this.snackbar.open('Profile details have been updated', 'Okay!', {
                    duration: 4000,
                });
            });
        });
    }
}
ProfileEditComponent.ɵfac = function ProfileEditComponent_Factory(t) { return new (t || ProfileEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
ProfileEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileEditComponent, selectors: [["app-profile-edit"]], decls: 88, vars: 17, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", "fxLayout.sm", "column", "fxLayout.xs", "column", 2, "background-image", "url(../assets/images/profile.webp)", "background-size", "100% 100%"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "login-card", 2, "padding", "40px"], [1, "example-card"], [1, "title"], [1, "fas", "fa-edit"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "5px"], ["aria-hidden", "true", 1, "fa", "fa-user-circle"], [1, "example"], ["matInput", "", "type", "text", "required", "", "minlength", "3", "onkeypress", "return (event.charCode > 64 && \n                        event.charCode < 91) || (event.charCode == 32) || (event.charCode > 96 && event.charCode < 123)", "placeholder", "Name", "required", "", 3, "formControl"], [4, "ngIf"], ["fxLayout.md", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutAlign", "center center", "fxLayoutGap.gt-sm", "20px"], [1, "material-icons"], ["matInput", "", "type", "date", "placeholder", "Date of Birth", "required", "", 3, "formControl"], [1, "fas", "fa-venus-mars"], [3, "formControl"], ["value", "Male"], ["value", "Female"], ["value", "Transgender"], ["value", "Not Prefer to Say"], ["aria-hidden", "true", 1, "fa", "fa-phone"], ["matInput", "", "type", "number", "pattern", ".{10}", "placeholder", "Phone", "required", "", 3, "formControl"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["matInput", "", "type", "email", "pattern", "[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,}$", "placeholder", "E - Mail", "required", "", 3, "formControl"], ["aria-hidden", "true", 1, "fa", "fa-address-card"], ["matInput", "", "type", "text", "required", "", "minlength", "2", "placeholder", "Address", "required", "", 3, "formControl"], ["matInput", "", "type", "text", "required", "", "minlength", "2", "placeholder", "City", "required", "", 3, "formControl"], [1, "fa", "fa-map-pin"], ["matInput", "", "type", "number", "pattern", ".{6}", "placeholder", "Pincode", "required", "", 3, "formControl"], ["fxLayout", "row", "fxLayoutAlign", "center"], ["mat-raised-button", "", 1, "example-button", 3, "disabled", "click"], ["mat-raised-button", "", "routerLink", "/profile", 1, "cancel-button"]], template: function ProfileEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Time To Edit My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfileEditComponent_mat_error_14_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileEditComponent_mat_error_24_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Select Your Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Transgender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Not Prefer to Say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProfileEditComponent_mat_error_40_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProfileEditComponent_mat_error_49_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "E - Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ProfileEditComponent_mat_error_57_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ProfileEditComponent_mat_error_65_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " location_city ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ProfileEditComponent_mat_error_74_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ProfileEditComponent_mat_error_82_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileEditComponent_Template_button_click_84_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.username.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.dob);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.dob.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.gender.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.phone.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.addr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.addr.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.addr.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.pincode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.pincode.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registerUserData.username.invalid || ctx.registerUserData.addr.invalid || ctx.registerUserData.dob.invalid || ctx.registerUserData.city.invalid || ctx.registerUserData.pincode.invalid || ctx.registerUserData.phone.invalid || ctx.registerUserData.email.invalid || ctx.registerUserData.gender.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".sidebar[_ngcontent-%COMP%] {\r\n    background: #130613ea;\r\n    color: rgb(255, 255, 255);\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed; \r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    overflow-x: hidden;\r\n    padding-top: 60px;\r\n    transition: 0.5s; \r\n  \r\n  } \r\n  .showsidebar[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n  } \r\n  .hidesidebar[_ngcontent-%COMP%] {\r\n    width: 0px;\r\n  } \r\n  .Homebutton[_ngcontent-%COMP%]{\r\n    color:black;\r\n  } \r\n  .example-card[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    padding: 0;\r\n    margin: 0;\r\n} \r\n  .example[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    margin-top: 10px;\r\n} \r\n  .login-card[_ngcontent-%COMP%]{\r\n    margin: 25px;\r\n} \r\n  .title[_ngcontent-%COMP%]{\r\n    font-family: 'Patua One', cursive;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n    color: white;\r\n    letter-spacing: 0.1em;\r\n    background: linear-gradient(to bottom left, #ffff66 0%, #ff0066 100%);\r\n    justify-content: center;\r\n    text-transform: uppercase;\r\n} \r\n  .example-button[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n    font-weight: bold;\r\n    letter-spacing: 0.1em;\r\n    color: white;\r\n    background: linear-gradient(to top right, #ffff66 0%, #ff0066 100%);\r\n    justify-content: center;\r\n    width: 100px;\r\n    outline: none;\r\n    transition: 0.5s ease;\r\n} \r\n  .example-button[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.10);\r\n} \r\n  .example-card[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    padding: 0;\r\n    margin: 0;\r\n    border-radius: 20px;\r\n} \r\n  .example[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    margin-top: 10px;\r\n} \r\n  .login-card[_ngcontent-%COMP%]{\r\n    margin: 25px;\r\n} \r\n  .title[_ngcontent-%COMP%]{\r\n    border-radius: 20px 20px 0px 0px;\r\n    font-family: 'Patua One', cursive;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n    color: white;\r\n    letter-spacing: 0.1em;\r\n    background: linear-gradient(to bottom left, #19d6d6 0%, #84d11f 100%);\r\n    justify-content: center;\r\n    text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osUUFBUTtJQUNSLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7RUFFbEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztBQUNiO0VBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0VBRUE7SUFDSSxZQUFZO0FBQ2hCO0VBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHFFQUFxRTtJQUNyRSx1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCO0VBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUVBQW1FO0lBQ25FLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtFQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0VBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7RUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7RUFFQTtJQUNJLFlBQVk7QUFDaEI7RUFFQTtJQUNJLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHFFQUFxRTtJQUNyRSx1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzEzMDYxM2VhO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzOyBcclxuICBcclxuICB9IFxyXG4gIC5zaG93c2lkZWJhciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIC5oaWRlc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gIH1cclxuICAuSG9tZWJ1dHRvbntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY2FyZCB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZXtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJke1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjZmZmZjY2IDAlLCAjZmYwMDY2IDEwMCUpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b257XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNmZmZmNjYgMCUsICNmZjAwNjYgMTAwJSk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTApO1xyXG59XHJcbi5leGFtcGxlLWNhcmQge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxle1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxvZ2luLWNhcmR7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzE5ZDZkNiAwJSwgIzg0ZDExZiAxMDAlKTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-edit',
                templateUrl: './profile-edit.component.html',
                styleUrls: ['./profile-edit.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");















class ProfileComponent {
    constructor(auth, _router, snackbar, el) {
        this.auth = auth;
        this._router = _router;
        this.snackbar = snackbar;
        this.el = el;
        this.isMenuSmall = true;
        this.sideBarOpen = false;
        this.registerUserData = {
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        };
    }
    ngOnInit() {
        this.auth.getUserId().subscribe((res) => {
            this.auth.getProfile(res).subscribe((data) => {
                this.registerUserData.username.setValue(data.username);
                this.registerUserData.dob.setValue(data.dob);
                this.registerUserData.gender.setValue(data.gender);
                this.registerUserData.phone.setValue(data.phone);
                this.registerUserData.email.setValue(data.email);
                this.registerUserData.addr.setValue(data.addr);
                this.registerUserData.city.setValue(data.city);
                this.registerUserData.pincode.setValue(data.pincode);
            });
        });
    }
    toggleSideBar() {
    }
    Deleteprofile() {
        this.auth.getUserId().subscribe((res) => {
            this.auth.deleteaccount(res).subscribe(() => {
                this.auth.logoutUser();
                this._router.navigate(['/']);
                this.snackbar.open('Your Pumpkin Account is Deleted', 'Okay!', {
                    duration: 4000,
                });
            });
        });
    }
    // Your initial click listener on the host element
    onClick(event) {
        event.stopPropagation();
        if (event.target.id == "collapseBtn") {
            document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
            document.body.classList.add('push');
            this.sideBarOpen = true;
        }
        else {
            if (this.sideBarOpen) {
                document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
                document.body.classList.remove('push');
                this.sideBarOpen = false;
            }
        }
    }
    // Click listener on the window object to handle clicks anywhere on 
    // the screen.
    onOutsideClick(event) {
        if (this.sideBarOpen && !this.el.nativeElement.contains(event.target)) {
            this.sideBarOpen = false;
            document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
            document.body.classList.remove('push');
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], hostBindings: function ProfileComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_click_HostBindingHandler($event) { return ctx.onClick($event); })("click", function ProfileComponent_click_HostBindingHandler($event) { return ctx.onOutsideClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 80, vars: 8, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", "fxLayout.sm", "column", "fxLayout.xs", "column", 2, "background-image", "url(../assets/images/profile.webp)", "background-size", "100% 100%"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "login-card", 2, "padding", "40px"], [1, "example-card"], [1, "title"], ["routerLink", "/profile-edit", "mat-raised-button", "", 2, "margin-left", "5px"], [1, "fas", "fa-edit"], ["mat-raised-button", "", 2, "margin-left", "5px", "color", "tomato", 3, "click"], [1, "material-icons"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "5px"], ["aria-hidden", "true", 1, "fa", "fa-user-circle"], [1, "example"], ["matInput", "", "type", "text", "placeholder", "Name", "readonly", "", 3, "formControl"], ["fxLayout.md", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutAlign", "center center", "fxLayoutGap.gt-sm", "20px"], ["matInput", "", "type", "date", "placeholder", "Date of Birth", "readonly", "", 3, "formControl"], [1, "fas", "fa-venus-mars"], ["disabled", "", 3, "formControl"], ["value", "Male"], ["value", "Female"], ["value", "Transgender"], ["value", "Not Prefer to Say"], ["aria-hidden", "true", 1, "fa", "fa-phone"], ["matInput", "", "type", "number", "placeholder", "Phone", "readonly", "", 3, "formControl"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["matInput", "", "type", "email", "placeholder", "E - Mail", "readonly", "", 3, "formControl"], ["aria-hidden", "true", 1, "fa", "fa-address-card"], ["matInput", "", "type", "text", "placeholder", "Address", "readonly", "", 3, "formControl"], ["matInput", "", "type", "text", "placeholder", "City", "readonly", "", 3, "formControl"], [1, "fa", "fa-map-pin"], ["matInput", "", "type", "number", "placeholder", "Pincode", "readonly", "", 3, "formControl"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_8_listener() { return ctx.Deleteprofile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Select Your Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Transgender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Not Prefer to Say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "E - Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Living Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " location_city ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.dob);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.addr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.pincode);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".sidebar[_ngcontent-%COMP%] {\r\n    background: #130613ea;\r\n    color: rgb(255, 255, 255);\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed; \r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    overflow-x: hidden;\r\n    padding-top: 60px;\r\n    transition: 0.5s; \r\n  \r\n  } \r\n  .showsidebar[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n  } \r\n  .hidesidebar[_ngcontent-%COMP%] {\r\n    width: 0px;\r\n  } \r\n  .Homebutton[_ngcontent-%COMP%]{\r\n    color:black;\r\n  } \r\n  .example-card[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    padding: 0;\r\n    margin: 0;\r\n} \r\n  .example[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    margin-top: 10px;\r\n} \r\n  .login-card[_ngcontent-%COMP%]{\r\n    margin: 25px;\r\n} \r\n  .title[_ngcontent-%COMP%]{\r\n    font-family: 'Patua One', cursive;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n    color: white;\r\n    letter-spacing: 0.1em;\r\n    background: linear-gradient(to bottom left, #ffff66 0%, #ff0066 100%);\r\n    justify-content: center;\r\n    text-transform: uppercase;\r\n} \r\n  .example-button[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n    font-weight: bold;\r\n    letter-spacing: 0.1em;\r\n    color: white;\r\n    background: linear-gradient(to top right, #ffff66 0%, #ff0066 100%);\r\n    justify-content: center;\r\n    width: 100px;\r\n    outline: none;\r\n    transition: 0.5s ease;\r\n} \r\n  .example-button[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.10);\r\n} \r\n  .example-card[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    padding: 0;\r\n    margin: 0;\r\n    border-radius: 20px;\r\n} \r\n  .example[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    margin-top: 10px;\r\n} \r\n  .login-card[_ngcontent-%COMP%]{\r\n    margin: 25px;\r\n} \r\n  .title[_ngcontent-%COMP%]{\r\n    border-radius: 20px 20px 0px 0px;\r\n    font-family: 'Patua One', cursive;\r\n    font-weight: 600;\r\n    font-size: 23px;\r\n    color: white;\r\n    letter-spacing: 0.1em;\r\n    background: linear-gradient(to bottom left, #66faff 0%, #b2f831 100%);\r\n    justify-content: center;\r\n    text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sT0FBTztJQUNQLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCOztFQUVsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0FBQ2I7RUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7RUFFQTtJQUNJLFlBQVk7QUFDaEI7RUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUVBQXFFO0lBQ3JFLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7RUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtRUFBbUU7SUFDbkUsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCO0VBRUE7SUFDSSxzQkFBc0I7QUFDMUI7RUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUNULG1CQUFtQjtBQUN2QjtFQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtFQUVBO0lBQ0ksWUFBWTtBQUNoQjtFQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUVBQXFFO0lBQ3JFLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxMzA2MTNlYTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41czsgXHJcbiAgXHJcbiAgfSBcclxuICAuc2hvd3NpZGViYXIge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICAuaGlkZXNpZGViYXIge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICB9XHJcbiAgLkhvbWVidXR0b257XHJcbiAgICBjb2xvcjpibGFjaztcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNhcmQge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmV4YW1wbGV7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4tY2FyZHtcclxuICAgIG1hcmdpbjogMjVweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgI2ZmZmY2NiAwJSwgI2ZmMDA2NiAxMDAlKTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjZmZmZjY2IDAlLCAjZmYwMDY2IDEwMCUpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEwKTtcclxufVxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZXtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJke1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICM2NmZhZmYgMCUsICNiMmY4MzEgMTAwJSk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }], onOutsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");













class RegisterComponent {
    constructor(auth, _router, snackbar, el) {
        this.auth = auth;
        this._router = _router;
        this.snackbar = snackbar;
        this.el = el;
        this.isMenuSmall = true;
        this.sideBarOpen = false;
        this.registerUserData = {
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        };
        this.hide = true;
        this.details = ["First Name", "Last Name", "Phone Number", "E-mail", "Address", "Zip-code"];
        this.details1 = [
            { head: "First Name", val: "registerUserData.username", v: "username" },
            { head: "last Name", val: "registerUserData.lastname", v: "lastname" },
            { head: "Phone Number", val: "registerUserData.phone", v: "phone" },
            { head: "E-Mail", val: "registerUserData.email" },
            { head: "Address", val: "registerUserData.city" },
            { head: "Zip-Code", val: "registerUserData.pincode" },
        ];
        this.formcontrols = [];
    }
    ngOnInit() {
        this.auth.getUserId().subscribe((res) => {
            this.auth.getProfile(res).subscribe((data) => {
                this.registerUserData.username.setValue(data.username);
                this.registerUserData.dob.setValue(data.dob);
                this.registerUserData.gender.setValue(data.gender);
                this.registerUserData.phone.setValue(data.phone);
                this.registerUserData.email.setValue(data.email);
                this.registerUserData.addr.setValue(data.addr);
                this.registerUserData.city.setValue(data.city);
                this.registerUserData.pincode.setValue(data.pincode);
                this.registerUserData.lastname.setValue(data.lastname);
            });
        });
    }
    toggleSideBar() {
    }
    Deleteprofile() {
        this.auth.getUserId().subscribe((res) => {
            this.auth.deleteaccount(res).subscribe(() => {
                this.auth.logoutUser();
                this._router.navigate(['/']);
                this.snackbar.open('Your Pumpkin Account is Deleted', 'Okay!', {
                    duration: 4000,
                });
            });
        });
    }
    // Your initial click listener on the host element
    onClick(event) {
        event.stopPropagation();
        if (event.target.id == "collapseBtn") {
            document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
            document.body.classList.add('push');
            this.sideBarOpen = true;
        }
        else {
            if (this.sideBarOpen) {
                document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
                document.body.classList.remove('push');
                this.sideBarOpen = false;
            }
        }
    }
    // Click listener on the window object to handle clicks anywhere on 
    // the screen.
    onOutsideClick(event) {
        if (this.sideBarOpen && !this.el.nativeElement.contains(event.target)) {
            this.sideBarOpen = false;
            document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
            document.body.classList.remove('push');
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], hostBindings: function RegisterComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_click_HostBindingHandler($event) { return ctx.onClick($event); })("click", function RegisterComponent_click_HostBindingHandler($event) { return ctx.onOutsideClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 58, vars: 6, consts: [[1, "back"], [1, "m"], ["cols", "2", "rowHeight", "10:1"], ["appearance", "fill", 2, "width", "75%"], ["matInput", "", "placeholder", "User name", "readonly", "", 3, "formControl"], ["matInput", "", "placeholder", "Last name", "readonly", "", 3, "formControl"], ["matInput", "", "placeholder", "E-Mail", "readonly", "", 3, "formControl"], ["matInput", "", "placeholder", "Phone", "readonly", "", 3, "formControl"], ["matInput", "", "placeholder", "City", "readonly", "", 3, "formControl"], ["matInput", "", "placeholder", "Pincode", "readonly", "", 3, "formControl"], [1, "b"], ["mat-stroked-button", "", "color", "accent", "routerLink", "/edit-profile"], ["mat-stroked-button", "", "color", "warn", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome !, Enter Your Full Details , So That We Can Help You More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter Your User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enter Your Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "E- Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enter Your E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Enter Your City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Enter Your City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Enter Your Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_54_listener() { return ctx.Deleteprofile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Delete Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.pincode);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".card[_ngcontent-%COMP%]{\r\n    min-width: 340px;\r\n    min-height: 475px;\r\n}\r\n.back[_ngcontent-%COMP%]{\r\n    \r\n    background-image: url(/assets/images/wall1.jpg);\r\n     height: 100vh;\r\n    background-size: cover;\r\n}\r\n.m[_ngcontent-%COMP%]{\r\n    margin-top: 250px;\r\n}\r\n.b[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDBDQUEwQztJQUMxQywrQ0FBK0M7S0FDOUMsYUFBYTtJQUNkLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1Q0FBdUM7QUFDM0MiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xyXG4gICAgbWluLWhlaWdodDogNDc1cHg7XHJcbn1cclxuLmJhY2t7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvd2FsbDEuanBnKTtcclxuICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ubXtcclxuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xyXG59XHJcbi5ie1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDYwLCAwKTsgKi9cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }], onOutsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/registere/registere.component.ts":
/*!**************************************************!*\
  !*** ./src/app/registere/registere.component.ts ***!
  \**************************************************/
/*! exports provided: RegistereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistereComponent", function() { return RegistereComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");














function RegistereComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getErrorName());
} }
function RegistereComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getErrorDob());
} }
function RegistereComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getErrorEMail());
} }
function RegistereComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getErrorPhone());
} }
function RegistereComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getErrorCity());
} }
function RegistereComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getErrorPin());
} }
class RegistereComponent {
    constructor(auth, _router, snackbar) {
        this.auth = auth;
        this._router = _router;
        this.snackbar = snackbar;
        this.form = { name: null, dob: null, addr: null, city: null, gender: null, pincode: null, phone: null, email: null, lastname: null };
        this.registerUserData = {
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            addr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        };
    }
    getErrorName() {
        if (this.registerUserData.username.hasError('Required')) {
            return 'Name is Required';
        }
        else if (this.registerUserData.username.hasError('minlength')) {
            return 'Name Must be a Minimum Length of 3';
        }
    }
    getErrorDob() {
        if (this.registerUserData.dob.hasError('Required')) {
            return 'Date of Birth is Required';
        }
    }
    getErrorGender() {
        if (this.registerUserData.gender.hasError('Required')) {
            return 'Filling this Field is Required';
        }
    }
    getErrorAddr() {
        if (this.registerUserData.addr.hasError('Required')) {
            return 'Address is Required';
        }
    }
    getErrorCity() {
        if (this.registerUserData.city.hasError('Required')) {
            return 'City is Required';
        }
    }
    getErrorPin() {
        if (this.registerUserData.pincode.hasError('Required')) {
            return 'Pincode is Required';
        }
        else if (this.registerUserData.pincode.hasError('minlength')) {
            return 'Pincode Must be 6 Digits';
        }
        else if (this.registerUserData.pincode.hasError('maxlength')) {
            return 'Pincode Must be 6 Digits';
        }
    }
    getErrorPhone() {
        if (this.registerUserData.phone.hasError('Required')) {
            return 'Mobile No. is Required';
        }
        else if (this.registerUserData.phone.hasError('minlength')) {
            return 'Mobile No. Must be 10 Digits';
        }
        else if (this.registerUserData.phone.hasError('maxlength')) {
            return 'Mobile No. Must be 10 Digits';
        }
    }
    getErrorEMail() {
        if (this.registerUserData.email.hasError('Required')) {
            return 'Email is Required';
        }
        else if (this.registerUserData.email.hasError('email')) {
            return 'Email Must be a Valid E - Mail Address';
        }
    }
    ngOnInit() {
        this.auth.getUserId().subscribe((res) => {
            this.auth.getProfile(res).subscribe((data) => {
                this.registerUserData.username.setValue(data.name);
                this.registerUserData.lastname.setValue(data.lastname);
                this.registerUserData.addr.setValue(data.addr);
                this.registerUserData.dob.setValue(data.dob);
                this.registerUserData.gender.setValue(data.gender);
                this.registerUserData.city.setValue(data.city);
                this.registerUserData.pincode.setValue(data.pincode);
                this.registerUserData.phone.setValue(data.phone);
                this.registerUserData.email.setValue(data.email);
            });
        });
    }
    onSubmit() {
        this.form.name = this.registerUserData.username.value;
        this.form.lastname = this.registerUserData.lastname.value;
        this.form.dob = this.registerUserData.dob.value;
        this.form.addr = this.registerUserData.addr.value;
        this.form.gender = this.registerUserData.gender.value;
        this.form.city = this.registerUserData.city.value;
        this.form.pincode = this.registerUserData.pincode.value;
        this.form.phone = this.registerUserData.phone.value;
        this.form.email = this.registerUserData.email.value;
        this.auth.getUserId().subscribe((res) => {
            this.auth.editProfile(res, this.form).subscribe((res) => {
                this._router.navigate(['/register']);
                this.snackbar.open('Profile details have been updated', 'Okay!', {
                    duration: 4000,
                });
            });
        });
    }
}
RegistereComponent.ɵfac = function RegistereComponent_Factory(t) { return new (t || RegistereComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
RegistereComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistereComponent, selectors: [["app-registere"]], decls: 64, vars: 12, consts: [[1, "back"], [1, "m"], ["cols", "2", "rowHeight", "10:1"], ["appearance", "fill", 2, "width", "75%"], ["matInput", "", "type", "text", "required", "", "minlength", "3", "onkeypress", "return (event.charCode > 64 && \n                        event.charCode < 91) || (event.charCode == 32) || (event.charCode > 96 && event.charCode < 123)", "placeholder", "Name", "required", "", 3, "formControl"], [4, "ngIf"], ["matInput", "", "placeholder", "Last Name", "required", "", 3, "formControl"], ["matInput", "", "type", "email", "pattern", "[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,}$", "placeholder", "E - Mail", "required", "", 3, "formControl"], ["matInput", "", "type", "number", "pattern", ".{10}", "placeholder", "Phone", "required", "", 3, "formControl"], ["matInput", "", "type", "text", "required", "", "minlength", "2", "placeholder", "City", "required", "", 3, "formControl"], ["matInput", "", "type", "number", "pattern", ".{6}", "placeholder", "Pincode", "required", "", 3, "formControl"], [1, "b"], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "routerLink", "/register", "color", "warn"]], template: function RegistereComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter Your Full Details , So That We Can Help You More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegistereComponent_mat_error_11_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter Your User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegistereComponent_mat_error_19_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enter Your Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "E- Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegistereComponent_mat_error_27_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Enter Your E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegistereComponent_mat_error_35_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Enter Your City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RegistereComponent_mat_error_43_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Enter Your City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RegistereComponent_mat_error_51_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Enter Your Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistereComponent_Template_button_click_55_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Save Changes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.username.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.lastname.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.phone.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.addr.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.registerUserData.pincode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerUserData.pincode.invalid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".card[_ngcontent-%COMP%]{\r\n    min-width: 340px;\r\n    min-height: 475px;\r\n}\r\n.back[_ngcontent-%COMP%]{\r\n    \r\n    background-image: url(/assets/images/wall1.jpg);\r\n     height: 100vh;\r\n    background-size: cover;\r\n}\r\n.m[_ngcontent-%COMP%]{\r\n    margin-top: 250px;\r\n}\r\n.b[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXJlL3JlZ2lzdGVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLCtDQUErQztLQUM5QyxhQUFhO0lBQ2Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVDQUF1QztBQUMzQyIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyZS9yZWdpc3RlcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgbWluLXdpZHRoOiAzNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ3NXB4O1xyXG59XHJcbi5iYWNre1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMTcwLCAxNzApOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3dhbGwxLmpwZyk7XHJcbiAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLm17XHJcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcclxufVxyXG4uYntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2MCwgMCk7ICovXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistereComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registere',
                templateUrl: './registere.component.html',
                styleUrls: ['./registere.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sell/sell.component.ts":
/*!****************************************!*\
  !*** ./src/app/sell/sell.component.ts ***!
  \****************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SellComponent {
    constructor() { }
    ngOnInit() {
    }
}
SellComponent.ɵfac = function SellComponent_Factory(t) { return new (t || SellComponent)(); };
SellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SellComponent, selectors: [["app-sell"]], decls: 2, vars: 0, template: function SellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sell works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGwvc2VsbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sell',
                templateUrl: './sell.component.html',
                styleUrls: ['./sell.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/slideshow/slideshow.component.ts":
/*!**************************************************!*\
  !*** ./src/app/slideshow/slideshow.component.ts ***!
  \**************************************************/
/*! exports provided: SlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function() { return SlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SlideshowComponent {
    constructor() {
        this.slide = [
            "/assets/images/show1.jfif", "/assets/images/show2.jfif", "/assets/images/show3.jfif"
        ];
    }
    ngOnInit() {
    }
}
SlideshowComponent.ɵfac = function SlideshowComponent_Factory(t) { return new (t || SlideshowComponent)(); };
SlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideshowComponent, selectors: [["app-slideshow"]], decls: 6, vars: 0, consts: [[2, "display", "flex", "justify-content", "center", "align-items", "center"], ["src", "http://www.staggeringbeauty.com/", "width", "498", "height", "598", 2, "border", "1px inset #ddd"]], template: function SlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Move your cursour to the game page and Have FUN !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlc2hvdy9zbGlkZXNob3cuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideshowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slideshow',
                templateUrl: './slideshow.component.html',
                styleUrls: ['./slideshow.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function TitleComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Sign In ");
} }
function TitleComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "class");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Register ");
} }
function TitleComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getError());
} }
class TitleComponent {
    constructor(_auth, _router, snackbar) {
        this._auth = _auth;
        this._router = _router;
        this.snackbar = snackbar;
        this.registerUserData = { username: "", password: "", phone: "", role: "" };
        //login 
        //register
        this.registerData = {
            // username:new FormControl('',[Validators.required,Validators.minLength(2)]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        };
        this.hide = true;
    }
    getError() {
        if (this.registerData.password.hasError('required')) {
            return 'Password is required';
        }
        else if (this.registerData.password.hasError('minlength')) {
            return 'Password must be a minimum length of 6 & it must contains [A-Z,a-z,!@#$%^&*,0-9] all these atleast one';
        }
    }
    getMessage() {
        if (this.registerData.username.hasError('required')) {
            return 'Name is required';
        }
        else if (this.registerData.username.hasError('minlength')) {
            return 'Name must be a minimum length of 2';
        }
    }
    getMessage1() {
        if (this.registerData.phone.hasError('required')) {
            return 'Name is required';
        }
        else if (this.registerData.phone.hasError('maxlength')) {
            return 'Name must be a maximum length of 10';
        }
    }
    ngOnInit() {
    }
    registerUser() {
        this.registerUserData.username = this.registerData.username.value;
        this.registerUserData.password = this.registerData.password.value;
        this.registerUserData.phone = this.registerData.phone.value;
        this.registerUserData.role = this.selects;
        this._auth.registerUser(this.registerUserData)
            .subscribe(res => {
            this.snackbar.open('USER REGISTERED SUCCESSFULL', 'OK', {
                duration: 3000,
            });
            localStorage.setItem('token', res.token);
            this._router.navigate([this.registerUserData.role]);
        }, err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                if (err.status === 409) {
                    this.snackbar.open('INVALID USER REGESTRATION', 'OK', {
                        duration: 5000,
                    });
                    this.registerData.username.reset();
                    this.registerData.password.reset();
                    this.registerData.phone.reset();
                    this.registerUserData.username = "";
                    this.registerUserData.password = "";
                    this.registerUserData.phone = "";
                }
            }
        });
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], decls: 41, vars: 9, consts: [[1, "center"], [1, "re"], ["mat-tab-label", ""], ["appearance", "fill", 2, "width", "70%"], ["matInput", "", "type", "text", "required", "", "minlength", "3", "onkeypress", "return (event.charCode > 64 && \n                  event.charCode < 91) || (event.charCode == 32) || (event.charCode > 96 && event.charCode < 123)", "placeholder", "Name", "required", "", 3, "formControl"], ["matInput", "", "type", "number", "pattern", ".{10}", "placeholder", "Phone Number", "required", "", 3, "formControl"], ["matInput", "", "pattern", "(?=.*[a-z])(?=.*[A-Z]).{8,}", "placeholder", "Password", "required", "", 3, "type", "formControl"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [4, "ngIf"], [3, "value", "valueChange"], ["value", "agrifarmer"], ["value", "agrimerchant"], ["value", "aquafarmer"], ["value", "aquamerchant"], ["mat-raised-button", "", "color", "warn", 2, "width", "70%", 3, "click"], [1, "example-tab-icon"], [1, "co"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TitleComponent_ng_template_5_Template, 3, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TitleComponent_ng_template_8_Template, 3, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Phonenumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TitleComponent_Template_button_click_22_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TitleComponent_mat_error_25_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Register As");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function TitleComponent_Template_mat_select_valueChange_29_listener($event) { return ctx.selects = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Agriculture Farmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Agriculture Merchant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Aquaculture Farmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Aquaculture Merchant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TitleComponent_Template_button_click_38_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.registerData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.registerData.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("formControl", ctx.registerData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerData.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selects);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabLabel"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: [".re[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tposition: absolute;\r\n\ttop: 30%;\r\n\tmin-width: 200px;\r\n\tmax-width: 300px;\r\n\tfont-family: 'Quicksand', sans-serif;\r\n\r\n}\r\n\r\n.example-tab-icon[_ngcontent-%COMP%] {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0bGUvdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixvQ0FBb0M7O0FBRXJDOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90aXRsZS90aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMzAlO1xyXG5cdG1pbi13aWR0aDogMjAwcHg7XHJcblx0bWF4LXdpZHRoOiAzMDBweDtcclxuXHRmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uZXhhbXBsZS10YWItaWNvbiB7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-title',
                templateUrl: './title.component.html',
                styleUrls: ['./title.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title/title.component */ "./src/app/title/title.component.ts");



class WelcomeComponent {
    constructor() {
        this.hide = true;
    }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 19, vars: 0, consts: [[1, "al"], [1, "background"], [1, "main"], [1, "letter"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "U");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_title_title_component__WEBPACK_IMPORTED_MODULE_1__["TitleComponent"]], styles: [".background[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\theight: 100vh;\r\n\topacity: 0.8;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground-image: url(/assets/images/pumpkinback.jpg);\r\n\t\r\n\tbackground-size: cover;\r\n}\r\n\r\n.all[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\toverflow: visible;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tfont-family: 'Quicksand', sans-serif;\r\n\tfont-size: 42px;\r\n\tbackground: #f7f7f7;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n\tmargin: 0 15px;\r\n\tline-height: 1.5;\r\n\ttext-shadow: 0 0 2px rgba(0, 0, 0, .45);\r\n\tanimation: span 3s ease-in infinite alternate;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 15%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: flex-start;\r\n}\r\n\r\n.letter[_ngcontent-%COMP%] {\r\n\tdisplay: inline-flex;\r\n\theight: 20px;\r\n\twidth: 27px;\r\n\tborder: 2.35px solid black;\r\n\tborder-radius: 14px;\r\n\tbox-shadow: 0 0 2px rgba(0, 0, 0, .75), inset 0 0 2px rgba(0, 0, 0, .45);\r\n\tanimation: letter 3s ease-in-out infinite alternate;\r\n}\r\n\r\n@keyframes span {\r\n\t0%,\r\n\t30% {\r\n\t\tmargin: 0 15px;\r\n\t}\r\n\t70%,\r\n\t100% {\r\n\t\tmargin: 0 5px;\r\n\t}\r\n}\r\n\r\n@keyframes letter {\r\n\t0%,\r\n\t30% {\r\n\t\twidth: 27px;\r\n\t}\r\n\t70%,\r\n\t100% {\r\n\t\twidth: 3vw;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFlBQVk7Q0FDWixXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIscURBQXFEO0NBQ3JEO0NBQ0E7Q0FDQSxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsTUFBTTtDQUNOLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsUUFBUTtDQUNSLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1Qsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixvQ0FBb0M7Q0FDcEMsZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsdUNBQXVDO0NBQ3ZDLDZDQUE2QztBQUM5Qzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsYUFBYTtDQUNiLHVCQUF1QjtDQUN2Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLHdFQUF3RTtDQUN4RSxtREFBbUQ7QUFDcEQ7O0FBRUE7Q0FDQzs7RUFFQyxjQUFjO0NBQ2Y7Q0FDQTs7RUFFQyxhQUFhO0NBQ2Q7QUFDRDs7QUFFQTtDQUNDOztFQUVDLFdBQVc7Q0FDWjtDQUNBOztFQUVDLFVBQVU7Q0FDWDtBQUNEIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0b3BhY2l0eTogMC44O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcHVtcGtpbmJhY2suanBnKTtcclxuXHQvKiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcclxuKi9cclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYWxsIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4qIHtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiA0MnB4O1xyXG5cdGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG5cdG1hcmdpbjogMCAxNXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0dGV4dC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAuNDUpO1xyXG5cdGFuaW1hdGlvbjogc3BhbiAzcyBlYXNlLWluIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuLm1haW4ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDE1JTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ubGV0dGVyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0d2lkdGg6IDI3cHg7XHJcblx0Ym9yZGVyOiAyLjM1cHggc29saWQgYmxhY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgLjc1KSwgaW5zZXQgMCAwIDJweCByZ2JhKDAsIDAsIDAsIC40NSk7XHJcblx0YW5pbWF0aW9uOiBsZXR0ZXIgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwYW4ge1xyXG5cdDAlLFxyXG5cdDMwJSB7XHJcblx0XHRtYXJnaW46IDAgMTVweDtcclxuXHR9XHJcblx0NzAlLFxyXG5cdDEwMCUge1xyXG5cdFx0bWFyZ2luOiAwIDVweDtcclxuXHR9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGV0dGVyIHtcclxuXHQwJSxcclxuXHQzMCUge1xyXG5cdFx0d2lkdGg6IDI3cHg7XHJcblx0fVxyXG5cdDcwJSxcclxuXHQxMDAlIHtcclxuXHRcdHdpZHRoOiAzdnc7XHJcblx0fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pavan\Desktop\mswd\angular_projects\projpumpkin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map