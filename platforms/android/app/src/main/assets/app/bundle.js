require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-app",
            template: "<page-router-outlet></page-router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"color","value":"white"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-angular/http-client");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-ui-listview/angular");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app.routing.ts");









var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__["NativeScriptHttpClientModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["NativeScriptRouterModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["NativeScriptRouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["routes"]),
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIListViewModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ].concat(_app_routing__WEBPACK_IMPORTED_MODULE_7__["navigatableComponents"]),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigatableComponents", function() { return navigatableComponents; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./login/login.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./list/list.component.ts");


var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"] }
];
var navigatableComponents = [
    _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]
];


/***/ }),

/***/ "./list/list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\n\n<GridLayout>\n  <RadListView [items]=\"groceryList\">\n    <ng-template let-item=\"item\">\n      <Label\n        [text]=\"item.name\"\n        class=\"p-15\"></Label>\n    </ng-template>\n  </RadListView>\n</GridLayout>\n"

/***/ }),

/***/ "./list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/grocery/grocery.service.ts");


var ListComponent = /** @class */ (function () {
    function ListComponent(groceryService) {
        this.groceryService = groceryService;
        this.groceryList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groceryService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: _shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] }
    ]; };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gr-list',
            template: __importDefault(__webpack_require__("./list/list.component.html")).default,
            providers: [_shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]],
            styles: [__importDefault(__webpack_require__("./list/list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./login/login.component.css":
/***/ (function(module, exports) {

module.exports = "FlexboxLayout {\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  background-image: url(\"~/images/background.jpg\");\n}\n\nStackLayout {\n  width: 300;\n  padding: 10 16;\n  background-color: #f0f0f0;\n}\n\nImage {\n  margin-bottom: 20;\n  height: 70;\n}\n\nButton,\nTextField {\n  margin-bottom: 10;\n}\n\nTextField {\n  placeholder-color: #c4afb4;\n  color: black;\n}\n\n.btn-primary {\n  background-color: #cb1d00;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.dark {\n  background-color: #301217;\n}\n\n.dark TextField {\n  color: #c4afb4;\n}\n"

/***/ }),

/***/ "./login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout>\n  <StackLayout\n    class=\"form\"\n    [class.dark]=\"!isLoggingIn\">\n    \n    <Image src=\"~/images/logo.png\"></Image>\n\n    <TextField\n      hint=\"Email Address\"\n      keyboardType=\"email\"\n      autocorrect=\"false\"\n      autocapitalizationType=\"none\"\n      [(ngModel)]=\"user.email\"\n      class=\"input input-border\"></TextField>\n    <TextField\n      hint=\"Password\"\n      secure=\"true\"\n      [(ngModel)]=\"user.password\"\n      class=\"input input-border\"></TextField>\n\n    <Button\n      [text]=\"isLoggingIn ?  'Sign in' : 'Sign up'\"\n      class=\"btn btn-primary\"\n      (tap)=\"submit()\"></Button>\n    <Button\n      [text]=\"isLoggingIn ?  'Sign up for Groceries' : 'Back to login'\"\n      (tap)=\"toogleDisplay()\"></Button>\n  </StackLayout>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_user_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./shared/user/user.model.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/user/user.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, userService) {
        this.page = page;
        this.router = router;
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new _shared_user_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        // TODO: apagar antes de commitar
        this.user.email = 'mike_tatsuo@hotmail.com';
        this.user.password = 'N471v35cr1p7';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signup();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () {
            _this.router.navigate(['/list']),
                function (exception) {
                    if (exception.error && exception.error.description) {
                        alert(exception.error.description);
                    }
                    else {
                        alert(exception);
                    }
                };
        });
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toogleDisplay();
        }, function (exception) {
            if (exception.erro && exception.error.description) {
                alert(exception.error.description);
            }
            else {
                alert(exception);
            }
        });
    };
    LoginComponent.prototype.toogleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-login",
            providers: [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]],
            template: __importDefault(__webpack_require__("./login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__("./login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./shared/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.apiUrl = "https://baas.kinvey.com/";
    Config.appKey = "kid_HyHoT_REf";
    Config.authHeader = "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ";
    Config.token = "";
    return Config;
}());



/***/ }),

/***/ "./shared/grocery/grocery.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grocery", function() { return Grocery; });
var Grocery = /** @class */ (function () {
    function Grocery(id, name) {
        this.id = id;
        this.name = name;
    }
    return Grocery;
}());



/***/ }),

/***/ "./shared/grocery/grocery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryService", function() { return GroceryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/config.ts");
/* harmony import */ var _grocery_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./shared/grocery/grocery.model.ts");






var GroceryService = /** @class */ (function () {
    function GroceryService(http) {
        this.http = http;
        this.baseUrl = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + 'appdata/' + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey + '/Groceries';
    }
    GroceryService.prototype.load = function () {
        var params = {
            'sort': '{\"_kmd.lmt\":1}'
        };
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var groceryList = [];
            data.forEach(function (grocery) {
                groceryList.push(new _grocery_model__WEBPACK_IMPORTED_MODULE_5__["Grocery"](grocery._id, grocery.Name));
            });
            return groceryList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.getCommonHeaders = function () {
        return {
            'Content-Type': 'application/json',
            'Authorization': 'Kinvey ' + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].token
        };
    };
    GroceryService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    GroceryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GroceryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GroceryService);
    return GroceryService;
}());



/***/ }),

/***/ "./shared/user/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./shared/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/config.ts");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        if (!user.email || !user.password) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Please privide both an email address and password');
        }
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + 'user/' + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey, JSON.stringify({
            username: user.email,
            email: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    UserService.prototype.getCommonHeaders = function () {
        return {
            "Content-Type": "application/json",
            "Authorization": _config__WEBPACK_IMPORTED_MODULE_4__["Config"].authHeader
        };
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    UserService.prototype.login = function (user) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + 'user/' + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey + '/login', JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _config__WEBPACK_IMPORTED_MODULE_4__["Config"].token = data._kmd.authtoken;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "@angular/common/http":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/http-client":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/http-client");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "nativescript-ui-listview/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview/angular");

/***/ }),

/***/ "rxjs":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvb3BlcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBTTFDO0lBQUE7SUFDQSxDQUFDO0lBRFks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LENBQUMsa0JBQVEsSUFBSSxlQUFRLEVBQVIsQ0FBUSxDQUFDLEVBQ3pCLDBEQUFHLENBQUMsY0FBSTtZQUNOLDhDQUFNLENBQUMsS0FBSyxHQUFTLElBQUssQ0FBQyxJQUFJLENBQUMsU0FBUztRQUMzQyxDQUFDLENBQUMsRUFDRixpRUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDOUI7SUFDSCxDQUFDOztnQkEvQ3lCLCtEQUFVOztJQUZ6QixXQUFXO1FBRnZCLGdFQUFVLEVBQUU7eUNBSWUsK0RBQVU7T0FGekIsV0FBVyxDQWtEdkI7SUFBRCxrQkFBQztDQUFBO0FBbER1Qjs7Ozs7Ozs7QUNWeEIsaUQ7Ozs7Ozs7QUNBQSwwQzs7Ozs7OztBQ0FBLDRDOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsaUM7Ozs7Ozs7QUNBQSwyQzs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSxxRDs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1hcHBcIixcbiAgdGVtcGxhdGU6IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcbiAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9saXN0LmNvbXBvbmVudFwiO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2xpc3QnLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfVxuXTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcbiAgTG9naW5Db21wb25lbnQsXG4gIExpc3RDb21wb25lbnRcbl07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JvY2VyaWVzXFxcIj48L0FjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dD5cXG4gIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJncm9jZXJ5TGlzdFxcXCI+XFxuICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgPExhYmVsXFxuICAgICAgICBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJwLTE1XFxcIj48L0xhYmVsPlxcbiAgICA8L25nLXRlbXBsYXRlPlxcbiAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5tb2RlbFwiO1xuaW1wb3J0IHsgR3JvY2VyeVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dyLWxpc3QnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtHcm9jZXJ5U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ3JvY2VyeUxpc3Q6IEFycmF5PEdyb2Nlcnk+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5U2VydmljZTogR3JvY2VyeVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ3JvY2VyeVNlcnZpY2UubG9hZCgpXG4gICAgICAuc3Vic2NyaWJlKChsb2FkZWRHcm9jZXJpZXM6IFtdKSA9PiB7XG4gICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKChncm9jZXJ5T2JqZWN0OiBHcm9jZXJ5KSA9PiB7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiRmxleGJveExheW91dCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJ+L2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbn1cXG5cXG5TdGFja0xheW91dCB7XFxuICB3aWR0aDogMzAwO1xcbiAgcGFkZGluZzogMTAgMTY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG5cXG5JbWFnZSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMDtcXG4gIGhlaWdodDogNzA7XFxufVxcblxcbkJ1dHRvbixcXG5UZXh0RmllbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7XFxufVxcblxcblRleHRGaWVsZCB7XFxuICBwbGFjZWhvbGRlci1jb2xvcjogI2M0YWZiNDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYjFkMDA7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuLmRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMTIxNztcXG59XFxuXFxuLmRhcmsgVGV4dEZpZWxkIHtcXG4gIGNvbG9yOiAjYzRhZmI0O1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8RmxleGJveExheW91dD5cXG4gIDxTdGFja0xheW91dFxcbiAgICBjbGFzcz1cXFwiZm9ybVxcXCJcXG4gICAgW2NsYXNzLmRhcmtdPVxcXCIhaXNMb2dnaW5nSW5cXFwiPlxcbiAgICBcXG4gICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvbG9nby5wbmdcXFwiPjwvSW1hZ2U+XFxuXFxuICAgIDxUZXh0RmllbGRcXG4gICAgICBoaW50PVxcXCJFbWFpbCBBZGRyZXNzXFxcIlxcbiAgICAgIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiXFxuICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiXFxuICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0RmllbGQ+XFxuICAgIDxUZXh0RmllbGRcXG4gICAgICBoaW50PVxcXCJQYXNzd29yZFxcXCJcXG4gICAgICBzZWN1cmU9XFxcInRydWVcXFwiXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiXFxuICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0RmllbGQ+XFxuXFxuICAgIDxCdXR0b25cXG4gICAgICBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gICdTaWduIGluJyA6ICdTaWduIHVwJ1xcXCJcXG4gICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcbiAgICAgICh0YXApPVxcXCJzdWJtaXQoKVxcXCI+PC9CdXR0b24+XFxuICAgIDxCdXR0b25cXG4gICAgICBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gICdTaWduIHVwIGZvciBHcm9jZXJpZXMnIDogJ0JhY2sgdG8gbG9naW4nXFxcIlxcbiAgICAgICh0YXApPVxcXCJ0b29nbGVEaXNwbGF5KClcXFwiPjwvQnV0dG9uPlxcbiAgPC9TdGFja0xheW91dD5cXG48L0ZsZXhib3hMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1sb2dpblwiLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuY3NzXCJdLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyOiBVc2VyO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwYWdlOlBhZ2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgLy8gVE9ETzogYXBhZ2FyIGFudGVzIGRlIGNvbW1pdGFyXG4gICAgdGhpcy51c2VyLmVtYWlsID0gJ21pa2VfdGF0c3VvQGhvdG1haWwuY29tJztcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSAnTjQ3MXYzNWNyMXA3JztcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaWdudXAoKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9saXN0J10pLFxuICAgICAgICAgIChleGNlcHRpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChleGNlcHRpb24uZXJyb3IgJiYgZXhjZXB0aW9uLmVycm9yLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGVydChleGNlcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgc2lnbnVwKCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgIHRoaXMudG9vZ2xlRGlzcGxheSgpO1xuICAgICAgfSwgKGV4Y2VwdGlvbikgPT4ge1xuICAgICAgICBpZiAoZXhjZXB0aW9uLmVycm8gJiYgZXhjZXB0aW9uLmVycm9yLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgYWxlcnQoZXhjZXB0aW9uLmVycm9yLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChleGNlcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHRvb2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuZW5hYmxlUHJvZE1vZGUoKTtcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwiZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gIHN0YXRpYyBhcGlVcmwgPSBcImh0dHBzOi8vYmFhcy5raW52ZXkuY29tL1wiO1xuICBzdGF0aWMgYXBwS2V5ID0gXCJraWRfSHlIb1RfUkVmXCI7XG4gIHN0YXRpYyBhdXRoSGVhZGVyID0gXCJCYXNpYyBhMmxrWDBoNVNHOVVYMUpGWmpvMU1Ua3hNREpsWldGaE16UTBNek15T0RGak4yTXlPRE0zTUdRNU9USXpNUVwiO1xuICBzdGF0aWMgdG9rZW4gPSBcIlwiO1xufSIsImV4cG9ydCBjbGFzcyBHcm9jZXJ5IHtcbiAgY29uc3RydWN0b3IocHVibGljIGlkOiBzdHJpbmcsIHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4vZ3JvY2VyeS5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JvY2VyeVNlcnZpY2Uge1xuICBiYXNlVXJsID0gQ29uZmlnLmFwaVVybCArICdhcHBkYXRhLycgKyBDb25maWcuYXBwS2V5ICsgJy9Hcm9jZXJpZXMnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgbG9hZCgpIHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgJ3NvcnQnOiAne1xcXCJfa21kLmxtdFxcXCI6MX0nXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCwge1xuICAgICAgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCksXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH0pLnBpcGUoXG4gICAgICBtYXAoKGRhdGE6IFtdKSA9PiB7XG4gICAgICAgIGxldCBncm9jZXJ5TGlzdCA9IFtdO1xuICAgICAgICBkYXRhLmZvckVhY2goZ3JvY2VyeSA9PiB7XG4gICAgICAgICAgZ3JvY2VyeUxpc3QucHVzaChuZXcgR3JvY2VyeSgoPGFueT5ncm9jZXJ5KS5faWQsICg8YW55Pmdyb2NlcnkpLk5hbWUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm9jZXJ5TGlzdDtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICApO1xuICB9XG5cbiAgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0tpbnZleSAnICsgQ29uZmlnLnRva2VuXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICBpZiAoIXVzZXIuZW1haWwgfHwgIXVzZXIucGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdQbGVhc2UgcHJpdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgQ29uZmlnLmFwaVVybCArICd1c2VyLycgKyBDb25maWcuYXBwS2V5LFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICB9KSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgICkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgKTtcbiAgfVxuXG4gIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IENvbmZpZy5hdXRoSGVhZGVyXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgbG9naW4odXNlcjogVXNlcikge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIENvbmZpZy5hcGlVcmwgKyAndXNlci8nICsgQ29uZmlnLmFwcEtleSArICcvbG9naW4nLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgIH0pLFxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgKS5waXBlKFxuICAgICAgbWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSxcbiAgICAgIHRhcChkYXRhID0+IHtcbiAgICAgICAgQ29uZmlnLnRva2VuID0gKDxhbnk+ZGF0YSkuX2ttZC5hdXRodG9rZW5cbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICApXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9vcGVyYXRvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9