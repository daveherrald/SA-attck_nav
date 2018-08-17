webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div *ngIf=\"techniques && tactics\"> -->\n<tabs>\n    <!-- <tab [tabTitle]=\"'grid'\">\n        <DataTable></DataTable>\n    </tab> -->\n</tabs>\n<span style=\"font-size: 7pt\">MITRE ATT&CK<sup style=\"font-size: 5pt\">TM</sup> Navigator v{{nav_version}}</span>\n\n<!-- </div> -->\n<!-- <div *ngIf=\"!techniques && !tactics\">\n    loading...\n</div> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "tabs {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 9pt; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs_component__ = __webpack_require__("./src/app/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //import the DataService component so we can use it


var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.nav_version = __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* nav_version */];
        Array.prototype.includes = function (value) {
            // console.log("checking include")
            for (var i = 0; i < this.length; i++) {
                if (this[i] === value)
                    return true;
            }
            return false;
        };
    }
    AppComponent.prototype.promptNavAway = function ($event) {
        //this text only shows in the data, not visible to user as far as I can tell
        //however, if it's not included the window doesn't open.
        $event.returnValue = 'Are you sure you want to navigate away? Your data may be lost!';
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs_component__["a" /* TabsComponent */]),
    __metadata("design:type", Object)
], AppComponent.prototype, "tabsComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "promptNavAway", null);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]] //add this provider to make sure we know we need DataService for this component
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_color_picker__ = __webpack_require__("./node_modules/ngx-color-picker/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ngx_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__datatable_data_table_component__ = __webpack_require__("./src/app/datatable/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tabs_tabs_component__ = __webpack_require__("./src/app/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tabs_dynamic_tabs_directive__ = __webpack_require__("./src/app/tabs/dynamic-tabs.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tab_tab_component__ = __webpack_require__("./src/app/tab/tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__help_help_component__ = __webpack_require__("./src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__exporter_exporter_component__ = __webpack_require__("./src/app/exporter/exporter.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// material
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__datatable_data_table_component__["a" /* DataTableComponent */],
            __WEBPACK_IMPORTED_MODULE_15__tabs_tabs_component__["a" /* TabsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__tab_tab_component__["a" /* TabComponent */],
            __WEBPACK_IMPORTED_MODULE_16__tabs_dynamic_tabs_directive__["a" /* DynamicTabsDirective */],
            __WEBPACK_IMPORTED_MODULE_18__help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_19__exporter_exporter_component__["b" /* ExporterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_tooltip__["a" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material_menu__["a" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material_expansion__["a" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            __WEBPACK_IMPORTED_MODULE_12_ngx_color_picker__["ColorPickerModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_tooltip__["a" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material_menu__["a" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material_expansion__["a" /* MatExpansionModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_17__tab_tab_component__["a" /* TabComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //import the DataService component so we can use it
var ConfigService = (function () {
    function ConfigService(dataService) {
        this.dataService = dataService;
        this.features = new Map();
        this.featureGroups = new Map();
        var self = this;
        dataService.retreiveConfig().subscribe(function (config) {
            //parse feature preferences from config json
            config["features"].forEach(function (featureObject) {
                self.setFeature_object(featureObject);
            });
            //override json preferences with preferences from URL fragment
            self.getAllFragments().forEach(function (value, key) {
                var valueBool = (value == 'true');
                if (self.isFeature(key) || self.isFeatureGroup(key)) {
                    // console.log("setting feature", key, valueBool)
                    self.setFeature(key, valueBool);
                }
                // else {
                //     console.log(key, "is not a feature")
                // }
            });
            self.featureStructure = config["features"];
        });
    }
    ConfigService.prototype.getFeatureList = function () {
        if (!this.featureStructure)
            return [];
        return this.featureStructure;
    };
    ConfigService.prototype.getFeature = function (featureName) {
        return this.features.get(featureName);
    };
    /**
     * Return true if any/all features in the group are enabled
     * @param  featureGroup feature group name
     * @param  type         'any' or 'all' for logical or/and
     * @return              true iffany/all are enabled, false otherwise
     */
    ConfigService.prototype.getFeatureGroup = function (featureGroup, type) {
        if (!this.featureGroups.has(featureGroup))
            return true;
        var subFeatures = this.featureGroups.get(featureGroup);
        var count = this.getFeatureGroupCount(featureGroup);
        return type == "any" ? count > 0 : count === subFeatures.length;
    };
    /**
     * Return the number of enabled features in the group
     * @param  featureGroup feature group name
     * @return              the number of enabled features in the group, or -1 if
     *                      the group does not exist
     */
    ConfigService.prototype.getFeatureGroupCount = function (featureGroup) {
        if (!this.featureGroups.has(featureGroup))
            return -1;
        var count = 0;
        var subFeatures = this.featureGroups.get(featureGroup);
        for (var i = 0; i < subFeatures.length; i++) {
            if (this.getFeature(subFeatures[i]))
                count += 1;
        }
        return count;
    };
    /**
     * Recursively search an object for boolean properties, set these as features
     * Take a key:value pair of an object. If the value is a boolean, set the
     * feature[key] to value. Otherwise recursively walk value to find boolean
     * options.
     *
     * Additionally, if the given feature grouping (where value is an obj)
     * has been previously defined, boolean properties assigned to the grouping
     * name will apply to all subfeatures of the grouping.
     *
     * @param  featureName string, the fieldname the value was found in
     * @param  value       boolean:object the value of the field. If a boolean,
     *                     sets feature[featureName] = value, otherwise walks recursively
     */
    ConfigService.prototype.setFeature = function (featureName, value) {
        var self = this;
        // console.log(featureName, value);
        if (typeof (value) == "boolean") {
            if (this.featureGroups.has(featureName)) {
                this.featureGroups.get(featureName).forEach(function (subFeatureName) {
                    self.setFeature(subFeatureName, value);
                });
            }
            else {
                this.features.set(featureName, value);
            }
            return [featureName];
        }
        if (typeof (value) == "object") {
            var subfeatures_1 = [];
            Object.keys(value).forEach(function (fieldname) {
                subfeatures_1 = Array.prototype.concat(subfeatures_1, self.setFeature(fieldname, value[fieldname]));
            });
            this.featureGroups.set(featureName, subfeatures_1);
            return subfeatures_1;
        }
    };
    /**
     * given a set of feature objects, set the enabledness of that object and all subobjects
     *
     * @param  featureObject {name: string, enabled: boolean, subfeatures?: featureObject[] }
     *                       Of enabled is false and it has subfeatures, they will all be forced to be false too
     * @param  override      Set all subfeatures, and their subfeatures, values to
     *                       this value
     */
    ConfigService.prototype.setFeature_object = function (featureObject, override) {
        if (override === void 0) { override = null; }
        var self = this;
        // base case
        if (!featureObject.hasOwnProperty("subfeatures")) {
            var enabled = override !== null ? override : featureObject.enabled;
            this.features.set(featureObject.name, enabled);
            return [featureObject.name];
        }
        else {
            override = override ? override : !featureObject.enabled ? false : null;
            var subfeatures_2 = [];
            featureObject.subfeatures.forEach(function (subfeature) {
                subfeatures_2 = Array.prototype.concat(subfeatures_2, self.setFeature_object(subfeature, override));
            });
            this.featureGroups.set(featureObject.name, subfeatures_2);
            return subfeatures_2;
        }
    };
    /**
     * Return if the given string corresponds to a defined feature
     * @param  featureName the name of the feature
     * @return             true if the feature exists, false otherwise
     */
    ConfigService.prototype.isFeature = function (featureName) {
        return this.features.has(featureName);
    };
    /**
     * return if the given string corresponds to a defined feature group
     * @param  featureGroupName the name of the feature group
     * @return                  true if it is a feature group, false otherwise
     */
    ConfigService.prototype.isFeatureGroup = function (featureGroupName) {
        return this.featureGroups.has(featureGroupName);
    };
    ConfigService.prototype.getFeatureGroups = function () {
        var keys = [];
        this.featureGroups.forEach(function (value, key) { keys.push(key); });
        return keys;
    };
    ConfigService.prototype.getFeatures = function () {
        var keys = [];
        this.features.forEach(function (value, key) { keys.push(key); });
        return keys;
    };
    /**
     * Get all url fragments
     * @param  url optional, url to parse instead of window location href
     * @return     all fragments as key-value pairs
     */
    ConfigService.prototype.getAllFragments = function (url) {
        if (!url)
            url = window.location.href;
        var fragments = new Map();
        var regex = /[#&](\w+)=(\w+)/g;
        // let results = url.match(regex)
        var match;
        while (match = regex.exec(url)) {
            fragments.set(match[1], match[2]);
        }
        return fragments;
    };
    return ConfigService;
}());
ConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ConfigService);

var _a;
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Technique; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taxii2lib__ = __webpack_require__("./src/app/taxii2lib.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient } from '@angular/common/http'




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        // Order of tactics to be displayed in application
        this.actTacticsOrder = [];
        this.prepareTacticsOrder = [];
        this.totalTacticsOrder = [];
        // URLs in case config file doesn't load properly
        this.enterpriseAttackURL = "https://raw.githubusercontent.com/mitre/cti/master/enterprise-attack/enterprise-attack.json";
        this.pre_attack_URL = "https://raw.githubusercontent.com/mitre/cti/master/pre-attack/pre-attack.json";
        this.mobileDataURL = "https://raw.githubusercontent.com/mitre/cti/master/mobile-attack/mobile-attack.json";
        this.tacticsURL = "assets/tacticsData.json";
        this.useTAXIIServer = false;
        this.taxiiURL = '';
        this.taxiiCollections = [];
    }
    DataService.prototype.setUpURLs = function (eAttackURL, preAttackURL, mURL, tURL, useTAXIIServer, taxiiURL, taxiiCollections) {
        this.enterpriseAttackURL = eAttackURL;
        this.pre_attack_URL = preAttackURL;
        this.mobileDataURL = mURL;
        this.tacticsURL = tURL;
        this.useTAXIIServer = useTAXIIServer;
        this.taxiiURL = taxiiURL;
        this.taxiiCollections = taxiiCollections;
    };
    DataService.prototype.retreiveConfig = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        if (refresh || !this.configData$) {
            console.log("********* GET CONFIG DATA ***********");
            this.configData$ = this.http.get("/splunkd/__raw/services/attck/app_config").map(function (res) { return res.json(); });
        }
        return this.configData$;
    };
    DataService.prototype.getEnterpriseData = function (refresh, useTAXIIServer) {
        if (refresh === void 0) { refresh = false; }
        if (useTAXIIServer === void 0) { useTAXIIServer = false; }
        if (useTAXIIServer) {
            console.log("fetching data from TAXII server");
            var conn = new __WEBPACK_IMPORTED_MODULE_4__taxii2lib__["b" /* TaxiiConnect */](this.taxiiURL, '', '', 5000);
            var enterpriseCollectionInfo = {
                'id': this.taxiiCollections['enterprise_attack'],
                'title': 'Enterprise ATT&CK',
                'description': '',
                'can_read': true,
                'can_write': false,
                'media_types': ['application/vnd.oasis.stix+json']
            };
            var enterpriseCollection = new __WEBPACK_IMPORTED_MODULE_4__taxii2lib__["a" /* Collection */](enterpriseCollectionInfo, this.taxiiURL + 'stix', conn);
            var preattackCollectionInfo = {
                'id': this.taxiiCollections['pre_attack'],
                'title': 'Pre-ATT&CK',
                'description': '',
                'can_read': true,
                'can_write': false,
                'media_types': ['application/vnd.oasis.stix+json']
            };
            var preattackCollection = new __WEBPACK_IMPORTED_MODULE_4__taxii2lib__["a" /* Collection */](preattackCollectionInfo, this.taxiiURL + 'stix', conn);
            this.enterpriseData$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].forkJoin(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__["a" /* fromPromise */])(enterpriseCollection.getObjects('', undefined)), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__["a" /* fromPromise */])(preattackCollection.getObjects('', undefined)));
        }
        else if (refresh || !this.enterpriseData$) {
            this.enterpriseData$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].forkJoin(this.http.get(this.enterpriseAttackURL).map(function (res) { return res.json(); }), this.http.get(this.pre_attack_URL).map(function (res) { return res.json(); }));
        }
        return this.enterpriseData$; //observable
    };
    DataService.prototype.getMobileData = function (refresh, useTAXIIServer) {
        if (refresh === void 0) { refresh = false; }
        if (useTAXIIServer === void 0) { useTAXIIServer = false; }
        //load from remote if not yet loaded or refresh=true
        if (useTAXIIServer) {
            console.log("fetching data from TAXII server");
            var conn = new __WEBPACK_IMPORTED_MODULE_4__taxii2lib__["b" /* TaxiiConnect */](this.taxiiURL, '', '', 5000);
            var mobileCollectionInfo = {
                'id': this.taxiiCollections['mobile_attack'],
                'title': 'Mobile ATT&CK',
                'description': '',
                'can_read': true,
                'can_write': false,
                'media_types': ['application/vnd.oasis.stix+json']
            };
            var mobileCollection = new __WEBPACK_IMPORTED_MODULE_4__taxii2lib__["a" /* Collection */](mobileCollectionInfo, this.taxiiURL + 'stix', conn);
            var preattackCollectionInfo = {
                'id': this.taxiiCollections['pre_attack'],
                'title': 'Pre-ATT&CK',
                'description': '',
                'can_read': true,
                'can_write': false,
                'media_types': ['application/vnd.oasis.stix+json']
            };
            var preattackCollection = new __WEBPACK_IMPORTED_MODULE_4__taxii2lib__["a" /* Collection */](preattackCollectionInfo, this.taxiiURL + 'stix', conn);
            this.mobileData$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].forkJoin(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__["a" /* fromPromise */])(mobileCollection.getObjects('', undefined)), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__["a" /* fromPromise */])(preattackCollection.getObjects('', undefined)));
        }
        else if (refresh || !this.mobileData$) {
            this.mobileData$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].forkJoin(this.http.get(this.mobileDataURL).map(function (res) { return res.json(); }), this.http.get(this.pre_attack_URL).map(function (res) { return res.json(); }));
        }
        return this.mobileData$; //observable
    };
    DataService.prototype.getTactics = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        if (refresh || !this.tacticData$) {
            this.tacticData$ = this.http.get(this.tacticsURL).map(function (res) { return res.json(); });
        }
        return this.tacticData$; //observable
    };
    DataService.prototype.setTacticOrder = function (retrievedTactics) {
        for (var i = 0; i < retrievedTactics.length; i++) {
            var phase = retrievedTactics[i].phase;
            var tactic = retrievedTactics[i].tactic;
            if (phase.localeCompare("prepare") === 0) {
                this.prepareTacticsOrder.push(tactic);
            }
            else {
                this.actTacticsOrder.push(tactic);
            }
            this.totalTacticsOrder.push(tactic);
        }
    };
    /**
     * Convert a list of techniques to a list of tactics, each one containing the techniques of the tactic
     * @param  {[object]} techniques the techniques to convert
     * @return {object}              object with keys of each tactic and values of the techniques of those tactics
     */
    DataService.prototype.techniquesToTactics = function (techniques) {
        if (techniques.length === 0)
            return [];
        var tactics = {};
        techniques.forEach(function (technique) {
            var tt = technique.tactic;
            if (tactics[tt])
                tactics[tt].push(technique);
            else
                tactics[tt] = [technique];
        });
        return tactics;
    };
    /**
     * Extract all tactic names from the list of techniques
     * @param  {[object]} techniques the techniques to extract
     * @return {[string]}            an array of all tactic names
     */
    DataService.prototype.tacticNames = function (techniques) {
        if (techniques.length === 0)
            return [];
        var techniquesFinal = [];
        var seen = new Set();
        techniques.forEach(function (technique) {
            var tt = technique.tactic;
            seen.add(tt);
        });
        for (var i = 0; i < this.totalTacticsOrder.length; i++) {
            var tactic = this.totalTacticsOrder[i];
            if (seen.has(tactic)) {
                techniquesFinal.push(tactic);
            }
        }
        return techniquesFinal;
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataService);

var Technique = (function () {
    function Technique(name, description, tactic, url, platforms, id, tid) {
        this.name = name;
        this.description = description, this.tactic = tactic;
        this.id = id;
        this.platforms = platforms;
        this.external_references_url = url;
        this.technique_id = tid;
        this.technique_tactic_union_id = this.technique_id + "^" + this.tactic;
    }
    return Technique;
}());

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "./src/app/datatable/data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controlsContainer\">\n    <ul class=\"control-sections\">\n        <li *ngIf=\"configService.getFeatureGroup('selection_controls', 'any') && configService.getFeature('selecting_techniques')\">\n            <div *ngIf=\"configService.getFeatureGroupCount('selection_controls') >= 3\" class=\"section-label\">\n                selection controls\n            </div>\n\n\n            <!-- lock selecting all with technique id -->\n            <div *ngIf=\"configService.getFeature('deselect_all')\" class=\"control-row-item\">\n                <div class=\"control-row-button noselect\"\n                     (click)=\"viewModel.changeTechniqueIDSelectionLock(); currentDropdown = null;\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"lock multi-tactic technique selection\">\n                     <img [src]=\"viewModel.selectTechniquesAcrossTactics ? 'assets/icons/ic_lock_black_24px.svg' : 'assets/icons/ic_lock_open_black_24px.svg'\" alt=\"lock\"/>\n                </div>\n            </div>\n\n\n            <!-- Search -->\n            <div *ngIf=\"configService.getFeature('search')\" class=\"control-row-item\">\n\n                <div class=\"control-row-button dropdown noselect\"\n                    (click)=\"currentDropdown = currentDropdown !== 'search' ? 'search' : null;\"\n                    matTooltipPosition=\"below\"\n                    matTooltip=\"search\">\n                    <img src=\"assets/icons/ic_search_black_24px.svg\"/>\n                </div>\n\n                <div class=\"dropdown-container search\" *ngIf=\"currentDropdown === 'search'\" #dropdown [class.left]=\"checkalign(dropdown)\">\n\n                    <mat-form-field style=\"width:100%; margin-top:5px; padding: 10px; padding-bottom:0px;\">\n                        <input matInput\n\n                        [(ngModel)]=\"searchString\"\n                        (input)=\"updateSearchDropdown()\"\n                        placeholder=\"Search for techniques here...\">\n\n                    </mat-form-field>\n                    <div><b>Properties searched:</b></div>\n\n                    <div>\n                        <div class=\"noselect\">\n                            <input id=\"search-name-checkbox\" class=\"checkbox-custom\" type=\"checkbox\" [(ngModel)]=\"searchingName\" (change)=\"updateSearchDropdown()\">\n                            <label for=\"search-name-checkbox\" class=\"checkbox-custom-label\">Name</label>\n                            <input id=\"search-id-checkbox\" class=\"checkbox-custom\" type=\"checkbox\" [(ngModel)]=\"searchingID\" (change)=\"updateSearchDropdown()\">\n                            <label for=\"search-id-checkbox\" class=\"checkbox-custom-label\">ID</label>\n                            <input id=\"search-description-checkbox\" class=\"checkbox-custom\" type=\"checkbox\" [(ngModel)]=\"searchingDescription\" (change)=\"updateSearchDropdown()\">\n                            <label for=\"search-description-checkbox\" class=\"checkbox-custom-label\">Description</label>\n                        </div>\n                    </div>\n\n                    <div>\n                        <button  (click)=\"selectAllInSearch(); populateEditFields();\" style=\"width:48.5%\" class=\"button\">select all</button>\n                        <button (click)=\"deselectAllInSearch(); populateEditFields();\" style=\"width:48.5%; margin-left:2px;\" class=\"button\">deselect all</button>\n                    </div>\n\n                    <div class=\"search-list\">\n                        <table>\n                            <tr  *ngFor=\"let result of searchResults\" class=\"search-list-item\">\n                                <td>\n                                    <div class=\"search-list-item-label\">\n                                        {{result.name}}\n                                    </div>\n                                </td>\n                                <td><a style=\"margin-right:2px\" [href]=\"result.external_references_url\" target=\"_blank\">view</a></td>\n                                <td><button  (click)=\"viewModel.addToTechniqueSelection_technique_id(result.technique_id); populateEditFields();\" class=\"button\">select</button></td>\n                                <td><button (click)=\"viewModel.removeFromTechniqueSelection_technique_id(result.technique_id); populateEditFields();\" class=\"button\">deselect</button></td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n\n\n            <!-- Multi-select -->\n            <div *ngIf=\"configService.getFeature('multiselect')\" class=\"control-row-item\">\n                <div class=\"control-row-button dropdown noselect\"\n                    (click)=\"currentDropdown = currentDropdown !== 'multiselect' ? 'multiselect' : null;\"\n                    matTooltipPosition=\"below\"\n                    [matTooltip]=\"'multi-select'\">\n                    <img src=\"assets/icons/ic_playlist_add_black_24px.svg\"/>\n                </div>\n                <div class=\"dropdown-container multiselect\" *ngIf=\"currentDropdown === 'multiselect'\" #dropdown [class.left]=\"checkalign(dropdown)\">\n                    <div class=\"multiselect-grouping\" *ngFor=\"let multiSelectGroup of [{data: threatGroupList, label: 'Threat Groups'}, {data: softwareGroupList, label: 'Software'}]\">\n                        <div class=\"multiselect-grouping-label\">{{multiSelectGroup.label}}</div>\n                        <div class=\"multiselect-list\">\n                            <table>\n                                <tr  *ngFor=\"let securityInstance of multiSelectGroup.data\" class=\"multiselect-list-item\" [class.selected]=\"isSecurityInstanceSelected(securityInstance)\">\n                                    <td>\n                                        <div class=\"multiselect-list-item-label\">\n                                            {{securityInstance.name}}\n                                        </div>\n                                    </td>\n                                    <td><a *ngIf=\"securityInstance.url\" style=\"margin-right:2px\" [href]=\"securityInstance.url\" target=\"_blank\">view</a><span *ngIf=\"!securityInstance.url\">----</span></td>\n                                    <td><button (click)=\"selectSecurityInstance(securityInstance); populateEditFields();\" class=\"multiselect-list-item-button button\">select</button></td>\n                                    <td><button (click)=\"deselectSecurityInstance(securityInstance); populateEditFields();\" class=\"multiselect-list-item-button button\">deselect</button></td>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n            <!-- deselect all -->\n            <div *ngIf=\"configService.getFeature('deselect_all')\" class=\"control-row-item\">\n                <div class=\"control-row-button noselect\"\n                     (click)=\"viewModel.clearTechniqueSelection(); currentDropdown = null;\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"deselect {{this.viewModel.selectedTechniques.length}} techniques\">\n                    <img src=\"assets/icons/ic_clear_black_24px.svg\" alt=\"deselect all\"/>\n                    <span class=\"deselectNumber\">{{this.viewModel.selectedTechniques.length}}</span>\n                </div>\n            </div>\n\n\n        </li>\n        <li *ngIf=\"configService.getFeatureGroup('layer_controls', 'any')\">\n            <div *ngIf=\"configService.getFeatureGroupCount('layer_controls') >= 2\" class=\"section-label\">\n                layer controls\n            </div>\n\n            <!-- layer description -->\n            <div *ngIf=\"configService.getFeature('layer_info')\" class=\"control-row-item\">\n\n                <div class=\"control-row-button dropdown noselect\"\n                     (click)=\"currentDropdown = currentDropdown !== 'description' ? 'description' : null\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"layer information\">\n                     <img src=\"assets/icons/ic_description_black_24px.svg\" alt=\"layer information\" />\n                 </div>\n\n                 <!-- description input (invisible, absolute) -->\n                 <div class=\"dropdown-container inputfield\" #dropdown [class.left]=\"checkalign(dropdown)\"\n                      *ngIf=\"currentDropdown === 'description'\">\n\n                    <!-- layer name field -->\n                    <mat-form-field>\n                        <input matInput\n                               type=\"text\"\n                               placeholder=\"name\"\n                               [(ngModel)]=\"viewModel.name\" />\n                    </mat-form-field>\n\n                    <!-- layer description field -->\n                    <mat-form-field>\n                        <textarea matInput\n                                    matTextareaAutosize\n                                    placeholder=\"description\"\n                                    [(ngModel)]=\"viewModel.description\">\n                        </textarea>\n                    </mat-form-field>\n                 </div>\n             </div>\n\n\n\n            <!-- save locally -->\n            <div *ngIf=\"configService.getFeature('download_layer')\" class=\"control-row-item\">\n                <div class=\"control-row-button noselect\"\n                    (click)=\"saveLayerLocally()\"\n                    matTooltipPosition=\"below\"\n                    matTooltip=\"download layer\">\n                    <img src=\"assets/icons/ic_file_download_black_24px.svg\" alt=\"save layer\"/>\n                </div>\n            </div>\n\n            <!-- render layer to SVG -->\n            <div *ngIf=\"configService.getFeature('export_render')\" class=\"control-row-item\">\n                <div class=\"control-row-button noselect\"\n                    (click)=\"filteredTechniques.length > 0 ? exportRender() : pass\"\n                    matTooltipPosition=\"below\"\n                    matTooltip=\"render layer to SVG\">\n                    <img src=\"assets/icons/ic_camera_alt_black_24px.svg\" alt=\"export render\"/>\n                </div>\n            </div>\n\n            <!-- Filters -->\n            <div *ngIf=\"configService.getFeature('filters')\" class=\"control-row-item\">\n\n                <div class=\"control-row-button dropdown noselect\"\n                    (click)=\"currentDropdown = currentDropdown !== 'filters' ? 'filters' : null;\"\n                    matTooltipPosition=\"below\"\n                    matTooltip=\"filters\">\n                    <img src=\"assets/icons/ic_filter_list_black_24px.svg\"/>\n                </div>\n                <div class=\"dropdown-container filters\" *ngIf=\"currentDropdown === 'filters'\" #dropdown [class.left]=\"checkalign(dropdown)\">\n                    <div class=\"filter\" *ngFor=\"let filter of ['platforms', 'stages']\">\n                        <b class=\"filter-label\">{{filter}}</b>\n                        <div class=\"filter-option\" *ngFor=\"let filterOption of viewModel.filters[filter].options\" >\n                            <!-- <label class=\"noselect\"><input type=\"checkbox\" (click)=\"viewModel.filters.toggleInFilter(filter, filterOption); filterTechniques()\" [checked]=\"viewModel.filters.inFilter(filter, filterOption)\">{{filterOption}}</label> -->\n                            <input [id]=\"filterOption\" class=\"checkbox-custom\" type=\"checkbox\" (click)=\"viewModel.filters.toggleInFilter(filter, filterOption); filterTechniques()\" [checked]=\"viewModel.filters.inFilter(filter, filterOption)\">\n                            <label for=\"{{filterOption}}\" class=\"checkbox-custom-label noselect\">{{filterOption}}</label>\n                        </div>\n                        <!-- <div class=\"filter-option\" *ngFor=\"let filterOption of viewModel.filters[filter].options\" (click)=\"viewModel.filters.toggleInFilter(filter, filterOption); filterTechniques()\">\n                            {{filterOption}}  {{viewModel.filters.inFilter(filter, filterOption)}}\n                        </div> -->\n                    </div>\n                    <!-- <mat-select placeholder=\"platforms\" [(ngModel)]=\"platformControl\"\n                        multiple disableRipple autofocus (change)=\"filterTechniques(); viewModel.filters.platforms.selection = platformsControl\">\n                        <mat-option *ngFor=\"let platformOption of viewModel.filters.platforms.options\" [value]=\"platformOption\">{{platformOption}}</mat-option>\n                    </mat-select> -->\n                    <!-- <filter-menu [dataTable]=\"this\"></filter-menu> -->\n                </div>\n            </div>\n\n            <!-- sorting -->\n            <div *ngIf=\"configService.getFeature('sorting')\" class=\"control-row-item\">\n                <div class=\"control-row-button noselect\"\n                    (click)=\"viewModel.sorting = (viewModel.sorting + 1) % 4; filterTechniques()\"\n                    matTooltipPosition=\"below\"\n                    [matTooltip]=\"['sorting alphabetically ascending', 'sorting alphabetically descending', 'sorting by score ascending', 'sorting by score descending'][viewModel.sorting]\">\n                    <img [src]=\"['assets/icons/ic_sort_alphabetically_ascending_black_24px.svg', 'assets/icons/ic_sort_alphabetically_descending_black_24px.svg', 'assets/icons/ic_sort_numerically_ascending_black_24px.svg', 'assets/icons/ic_sort_numerically_descending_black_24px.svg'][viewModel.sorting]\" alt=\"sorting\"/>\n                </div>\n            </div>\n\n            <!-- color setup -->\n            <div *ngIf=\"configService.getFeature('color_setup')\" class=\"control-row-item\">\n                <div class=\"control-row-button dropdown noselect\"\n                    (click)=\"currentDropdown = currentDropdown !== 'colorSetup' ? 'colorSetup' : null; viewModel.updateGradient()\"\n                    matTooltipPosition=\"below\"\n                    matTooltip=\"color setup\">\n                    <img src=\"assets/icons/ic_palette_black_24px.svg\"/>\n                </div>\n                <div class=\"dropdown-container colorSetup\" *ngIf=\"currentDropdown === 'colorSetup'\" #dropdown [class.left]=\"checkalign(dropdown)\">\n\n                    <div class=\"tacticRowColor\">\n                        <div class=\"gradient-section-label\">\n                            Tactic Row Background\n                        </div>\n                        <div class=\"gradient-section-content\">\n                            <input id=\"showTacticRowBackground\" type=\"checkbox\" class=\"checkbox-custom\" [(ngModel)]=viewModel.showTacticRowBackground>\n                            <label for=\"showTacticRowBackground\" class=\"checkbox-custom-label noselect\">show</label>\n                            <input class=\"colorpicker\" [(colorPicker)]=\"viewModel.tacticRowBackground\" [(ngModel)]=\"viewModel.tacticRowBackground\" [style.background]=\"viewModel.tacticRowBackground\" cpPosition=\"bottom\" [cpPresetColors]=\"['#ddd', '#aaaaaa', '#205B8F', '#B9482D']\">\n                        </div>\n                    </div>\n                    <div class=\"gradient\">\n                        <div class=\"gradient-section-label\">\n                            Scoring Gradient\n                        </div>\n                        <div class=\"gradient-controls gradient-section-content\">\n                            <table>\n                                <tr class=\"minmax top\">\n                                    <td>Low value:</td>\n                                    <td class=\"col2\"><input type=\"number\" (input)=\"viewModel.updateGradient()\" [(ngModel)]=\"viewModel.gradient.minValue\" [max]=viewModel.gradient.maxValue></td>\n                                </tr>\n                                <tr>\n                                    <td class=\"buttons\">\n                                        <div *ngFor=\"let gradientStep of viewModel.gradient.colors; let $i = index\">\n                                            <div class=\"left\">\n                                                <button (click)=\"viewModel.removeGradientColor($i)\" [disabled]=\"viewModel.gradient.colors.length == 2\">remove</button>\n                                            </div>\n                                            <div class=\"right\">\n                                                <input class=\"colorpicker\" (colorPickerChange)=\"viewModel.updateGradient()\" (cpPresetColorsChange)=\"viewModel.updateGradient()\" (cpSliderChange)=\"viewModel.updateGradient()\" (cpInputChange)=\"viewModel.updateGradient()\" [(colorPicker)]=\"gradientStep.color\" [(ngModel)]=\"gradientStep.color\" [style.background]=\"gradientStep.color\" cpPosition=\"bottom\" [cpPresetColors]=\"viewModel.gradient.options\">\n                                                <!-- <select [(ngModel)]=\"gradientStep.color\" (ngModelChange)=\"viewModel.updateGradient()\">\n                                                    <option *ngFor=\"let color of viewModel.gradient.options\" [ngValue]=\"color\">{{color}}</option>\n                                                    option shows up if a nonstandard option is selected, from uploading a custom layer\n                                                    <option *ngIf=\"!(viewModel.gradient.labelToColor.hasOwnProperty(gradientStep.color))\" [ngValue]=gradientStep.color>{{gradientStep.color}}</option>\n                                                </select> -->\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td class=\"col2\" [style.background-image]=\"sanitize(viewModel.gradient.gradient.css('linear', 'to bottom'))\"> </td>\n                                </tr>\n                                <tr>\n                                    <td><button class=\"addcolor\" (click)=\"viewModel.addGradientColor();\">add another color</button></td>\n                                </tr>\n                                <tr class=\"minmax bottom\">\n                                    <td>High value: </td>\n                                    <td class=\"col2 \"><input type=\"number\" (input)=\"viewModel.updateGradient()\" [(ngModel)]=\"viewModel.gradient.maxValue\" [min]=viewModel.gradient.minValue></td>\n                                </tr>\n                            </table>\n                            <div class=\"display-buttons\">\n                                <div class=\"squarebutton dropdown noselect\" (click)=\"presetsMenuVisible = !presetsMenuVisible\">\n                                    presets<span style=\"font-size:5pt\">▼</span>\n                                </div >\n                                <div class=\"dropdown-container presetsmenu\" *ngIf=\"presetsMenuVisible\">\n                                    <div class=\"squarebutton noselect gradient\" (click)=\"viewModel.gradient.setGradientPreset('redgreen'); presetsMenuVisible = false; viewModel.updateGradient()\" [style.background-image]=\"sanitize(viewModel.gradient.presetToTinyColor('redgreen'))\">red to green</div>\n                                    <div class=\"squarebutton noselect gradient\" (click)=\"viewModel.gradient.setGradientPreset('greenred'); presetsMenuVisible = false; viewModel.updateGradient()\" [style.background-image]=\"sanitize(viewModel.gradient.presetToTinyColor('greenred'))\">green to red</div>\n                                    <div class=\"squarebutton noselect gradient\" (click)=\"viewModel.gradient.setGradientPreset('bluered'); presetsMenuVisible = false; viewModel.updateGradient()\" [style.background-image]=\"sanitize(viewModel.gradient.presetToTinyColor('bluered'))\">blue to red</div>\n                                    <div class=\"squarebutton noselect gradient\" (click)=\"viewModel.gradient.setGradientPreset('redblue'); presetsMenuVisible = false; viewModel.updateGradient()\" [style.background-image]=\"sanitize(viewModel.gradient.presetToTinyColor('redblue'))\">red to blue</div>\n                                    <div class=\"squarebutton noselect gradient\" (click)=\"viewModel.gradient.setGradientPreset('whiteblue'); presetsMenuVisible = false; viewModel.updateGradient()\" [style.background-image]=\"sanitize(viewModel.gradient.presetToTinyColor('whiteblue'))\">white to blue</div>\n                                    <div class=\"squarebutton noselect gradient\" (click)=\"viewModel.gradient.setGradientPreset('whitered'); presetsMenuVisible = false; viewModel.updateGradient()\" [style.background-image]=\"sanitize(viewModel.gradient.presetToTinyColor('whitered'))\">white to red</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- show or hide disabled techniques -->\n            <div *ngIf=\"configService.getFeature('toggle_hide_disabled')\" class=\"control-row-item\">\n                <div class=\"control-row-button noselect\"\n                     (click)=\"viewModel.hideDisabled = !viewModel.hideDisabled; filterTechniques()\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"show/hide disabled\">\n                     <img [src]=\"viewModel.hideDisabled ? 'assets/icons/ic_visibility_off_black_24px.svg' : 'assets/icons/ic_visibility_black_24px.svg'\" [alt]=\"viewModel.hideDisabled ? 'show disabled' : 'hide disabled'\"/>\n                 </div>\n             </div>\n\n             <!-- view mode -->\n            <div *ngIf=\"configService.getFeature('toggle_view_mode')\" class=\"control-row-item\">\n                <div class=\"control-row-button noselect\"\n                     (click)=\"viewModel.viewMode = (viewModel.viewMode + 1) % 3\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"toggle view mode\">\n                      <img [src]=\"['assets/icons/ic_view_large_black_24px.svg', 'assets/icons/ic_view_medium_black_24px.svg', 'assets/icons/ic_view_small_black_24px.svg'][viewModel.viewMode]\" [alt]=\"['full view', 'compact view', 'mini view'][viewModel.viewMode]\"/>\n                 </div>\n             </div>\n\n        </li>\n        <li *ngIf=\"configService.getFeatureGroup('technique_controls', 'any') && configService.getFeature('selecting_techniques')\">\n            <div *ngIf=\"configService.getFeatureGroupCount('technique_controls') >= 3\" class=\"section-label\">\n                technique controls\n            </div>\n            <!-- TECHNIQUE CONTROLS -->\n            <!-- enable/disable technique -->\n            <div *ngIf=\"configService.getFeature('disable_techniques')\" class=\"control-row-item\">\n                <div class=\"control-row-button noselect\"\n                     (click)=\"setSelectedState()\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"toggle state\"\n                     [matTooltipDisabled]=\"!viewModel.isCurrentlyEditing()\">\n                     <img [src]=\"viewModel.isCurrentlyEditing() ? 'assets/icons/ic_texture_black_24px.svg' : 'assets/icons/ic_texture_gray_24px.svg'\" alt=\"toggle state\"/>\n                 </div>\n             </div>\n\n            <!-- background color -->\n            <div *ngIf=\"configService.getFeature('manual_color')\" class=\"control-row-item\">\n\n                <div class=\"control-row-button dropdown noselect\"\n                     (click)=\"viewModel.isCurrentlyEditing() ? currentDropdown = currentDropdown !== 'colorpicker' ? 'colorpicker' : null : continue\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"background color\"\n                     [matTooltipDisabled]=\"!viewModel.isCurrentlyEditing()\"\n                     [style.color]=\"viewModel.isCurrentlyEditing() ? '#000000' : '#aaaaaa'\">\n\n                    <svg border=\"#dddddd\" [attr.fill]=\"viewModel.isCurrentlyEditing() ? '#000000' : '#aaaaaa'\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n                        <path d=\"M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z\"/>\n                        <path [attr.class]=\"viewModel.isCurrentlyEditing() ? viewModel.getEditingCommonValue('color') : none\" d=\"M0 20h24v4H0z\"/>\n                    </svg>\n                </div>\n                <!-- color picker (invisible, absolute)-->\n                <div class=\"colorpicker dropdown-container\" #dropdown [class.left]=\"checkalign(dropdown)\"\n                     *ngIf=\"currentDropdown === 'colorpicker'\">\n\n                    <div class=\"color-block wide noselect dropdown\"\n                         (click)=\"viewModel.editSelectedTechniques('color', '')\">\n                        no color\n                    </div>\n                    <div class=\"color-block square\"\n                         *ngFor=\"let color of viewModel.backgroundPresets\"\n                         [style.background]=\"color\"\n                         (click)=\"viewModel.editSelectedTechniques('color', color)\"></div>\n                </div>\n            </div>\n\n\n            <!-- score -->\n            <div *ngIf=\"configService.getFeature('scoring')\" class=\"control-row-item\" >\n                <div class=\"control-row-button dropdown noselect\"\n                     (click)=\"viewModel.isCurrentlyEditing() ? currentDropdown = currentDropdown !== 'score' ? 'score' : null : continue\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"scoring\"\n                     [matTooltipDisabled]=\"!viewModel.isCurrentlyEditing()\"\n                     [style.color]=\"viewModel.isCurrentlyEditing() ? '#000000' : '#aaaaaa'\">\n                     <img [src]=\"viewModel.isCurrentlyEditing() ? 'assets/icons/ic_insert_chart_black_24px.svg' : 'assets/icons/ic_insert_chart_gray_24px.svg'\" alt=\"score\"/>\n                </div>\n                <div class=\"dropdown-container inputfield\" #dropdown [class.left]=\"checkalign(dropdown)\"\n                     *ngIf=\"currentDropdown === 'score'\">\n                     <mat-form-field>\n                         <!-- update data whenever it is typed in -->\n                         <input matInput\n                                type=\"text\"\n                                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46\"\n                                [(ngModel)]=\"scoreEditField\"\n                                placeholder=\"score\"\n                                (input)=\"viewModel.editSelectedTechniques('score', $event.target.value); viewModel.editSelectedTechniques('scoreColor', viewModel.gradient.getColor($event.target.value)); filterTechniques()\">\n                         <mat-hint style=\"color: red\" align=\"start\" *ngIf=\"validateScoreInput()\">not a number</mat-hint>\n                     </mat-form-field>\n                </div>\n            </div>\n\n\n            <!-- comment -->\n            <div *ngIf=\"configService.getFeature('comments')\"  class=\"control-row-item\">\n\n                <div class=\"control-row-button dropdown noselect\"\n                     (click)=\"viewModel.isCurrentlyEditing() ? currentDropdown = currentDropdown !== 'comment' ? 'comment' : null : continue\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"comment\"\n                     [matTooltipDisabled]=\"!viewModel.isCurrentlyEditing()\"\n                     [style.color]=\"viewModel.isCurrentlyEditing() ? '#000000' : '#aaaaaa'\">\n                     <img [src]=\"viewModel.isCurrentlyEditing() ? 'assets/icons/ic_insert_comment_black_24px.svg' : 'assets/icons/ic_insert_comment_gray_24px.svg'\" alt=\"comment\" />\n                 </div>\n                 <!-- comment input (invisible, absolute) -->\n                 <div class=\"dropdown-container inputfield left\" #dropdown [class.left]=\"checkalign(dropdown)\"\n                      *ngIf=\"currentDropdown === 'comment'\">\n\n                    <mat-form-field>\n                        <textarea matInput\n                                  matTextareaAutosize\n                                  placeholder=\"comment\"\n                                  [(ngModel)]=\"commentEditField\"\n                                  (input)=\"viewModel.editSelectedTechniques('comment', $event.target.value)\">\n                        </textarea>\n                    </mat-form-field>\n                 </div>\n             </div>\n             <!-- remove all annotations -->\n             <div *ngIf=\"configService.getFeature('clear_annotations')\" class=\"control-row-item\">\n                 <div class=\"control-row-button noselect\"\n                      (click)=\"viewModel.resetSelectedTechniques(); populateEditFields()\"\n                      matTooltipPosition=\"below\"\n                      matTooltip=\"clear annotations on selected\"\n                      [matTooltipDisabled]=\"!viewModel.isCurrentlyEditing()\">\n                      <img [src]=\"viewModel.isCurrentlyEditing() ? 'assets/icons/ic_layers_clear_black_24px.svg' : 'assets/icons/ic_layers_clear_gray_24px.svg'\" alt=\"remove all annotations\"/>\n                  </div>\n              </div>\n        </li>\n    </ul>\n</div>\n\n\n<div class=\"tableContainer\" oncontextmenu=\"return false\">\n    <div [class]=\"'dataTable noselect ' + ['full', 'compact', 'mini'][viewModel.viewMode]\">\n        <table>\n            <tr [style.background]=\"viewModel.showTacticRowBackground && viewModel.viewMode != 2  ? sanitize(viewModel.tacticRowBackground) : 'none'\"\n                [style.border-color]=\"viewModel.showTacticRowBackground && viewModel.viewMode != 2  ? sanitize(viewModel.tacticRowBackground) : 'none'\"\n                [style.color]=\"getTacticRowTextColor()\">\n                <td *ngFor=\"let tactic of dataService.tacticNames(filteredTechniques)\"\n                    [class]=\"'header column ' + ['full', 'compact', 'mini'][viewModel.viewMode]\"\n                    [class.anti-highlight]=\"viewModel.highlightedTactic && tactic != viewModel.highlightedTactic\"\n>\n                    <div\n                        [matTooltipDisabled]=\"viewModel.viewMode == 0\"\n                         matTooltip=\"{{tacticDisplayNames[tactic]}}\"\n                         matTooltipPosition=\"right\"\n                         (click)=\"clickTactic(tactic)\"\n                         [class]=\"'cell link header ' + ['full', 'compact', 'mini'][viewModel.viewMode]\"\n                         [style.border-width]=\"viewModel.showTacticRowBackground || viewModel.viewMode == 0 ? '0px' : '1px'\">\n                         {{[tacticDisplayNames[tactic], viewModel.acronym(tacticDisplayNames[tactic]), ''][viewModel.viewMode]}}\n                    </div>\n                </td>\n            </tr>\n            <tr *ngIf=\"viewModel.viewMode != 2\"\n                [style.background]=\"viewModel.showTacticRowBackground && viewModel.viewMode != 2  ? sanitize(viewModel.tacticRowBackground) : 'none'\"\n                [style.border-color]=\"viewModel.showTacticRowBackground && viewModel.viewMode != 2  ? sanitize(viewModel.tacticRowBackground) : 'none'\"\n                [style.color]=\"getTacticRowTextColor()\">\n                <td *ngFor=\"let tactic of dataService.tacticNames(filteredTechniques)\"\n                    [class]=\"'column' + ['full', 'compact', 'mini'][viewModel.viewMode]\"\n                    [class.anti-highlight]=\"viewModel.highlightedTactic && tactic != viewModel.highlightedTactic\">\n\n                    <div class=\"cell itemcount\">\n                        {{tactics[tactic].length}}<span *ngIf=\"viewModel.viewMode == 0\"> items</span>\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td *ngFor=\"let tactic of dataService.tacticNames(filteredTechniques)\"\n                    [class]=\"'techniques column ' + ['full', 'compact', 'mini'][viewModel.viewMode]\"\n                    [class.anti-highlight]=\"viewModel.highlightedTactic && tactic != viewModel.highlightedTactic\">\n\n                    <div *ngFor=\"let technique of tactics[tactic]\"\n\n                        (click)=\"techniqueSelectEvent(technique, $event.shiftKey || $event.ctrlKey || $event.metaKey, tactic, $event)\"\n                         (contextmenu)=\"rightClickTechnique(technique, tactic, $event)\"\n\n                         (mouseenter)=\"viewModel.highlightedTechnique = technique; this.viewModel.hoverTactic = tactic;\"\n                         (mouseleave)=\"viewModel.highlightedTechnique = null; this.viewModel.hoverTactic = tactic;\"\n\n                         [class]=\"getClass(technique, tactic)\"\n                         [ngStyle]=\"getTechniqueBackground(technique)\">\n                         <span [style.color]=\"getTechniqueTextColor(technique, viewModel.highlightedTactic && tactic != viewModel.highlightedTactic)\">{{ [technique.name, viewModel.acronym(technique.name), ''][viewModel.viewMode] }}</span>\n                    </div>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>\n\n\n<!--\n   ___ ___  _  _ _____ _____  _______   __  __ ___ _  _ _   _ ___     _   _  _ ___    _____ ___   ___  _  _____ ___ ___  ___\n  / __/ _ \\| \\| |_   _| __\\ \\/ /_   _| |  \\/  | __| \\| | | | / __|   /_\\ | \\| |   \\  |_   _/ _ \\ / _ \\| ||_   _|_ _| _ \\/ __|\n | (_| (_) | .` | | | | _| >  <  | |   | |\\/| | _|| .` | |_| \\__ \\  / _ \\| .` | |) |   | || (_) | (_) | |__| |  | ||  _/\\__ \\\n  \\___\\___/|_|\\_| |_| |___/_/\\_\\ |_|   |_|  |_|___|_|\\_|\\___/|___/ /_/ \\_\\_|\\_|___/    |_| \\___/ \\___/|____|_| |___|_|  |___/\n -->\n\n\n<!-- Context Menu: page cover -->\n<div *ngIf=\"contextMenuVisible\"\n    (click)=\"contextMenuVisible = false; \"\n    (contextmenu)=\"contextMenuVisible = false;\"\n    class=\"contextMenu-cover\">\n</div>\n<!-- Context Menu: Menu -->\n<div [hidden]=\"!contextMenuVisible\"\n     class=\"contextMenu-box dropdown-container noselect\"\n     (contextmenu)=\"contextMenuVisible = false;\"\n     [id]=\"'contextMenu'+viewModel.uid\">\n    <div *ngIf=\"configService.getFeature('selecting_techniques')\" class=\"contextMenu-section\">\n        <div class=\"contextMenu-button\" (click)=\"viewModel.replaceTechniqueSelection(contextMenuSelectedTechnique); contextMenuVisible = false; populateEditFields();\">\n            select\n        </div>\n        <div class=\"contextMenu-button\" (click)=\"viewModel.addToTechniqueSelection(contextMenuSelectedTechnique); contextMenuVisible = false; populateEditFields();\">\n            add to selection\n        </div>\n        <div class=\"contextMenu-button\" (click)=\"viewModel.removeFromTechniqueSelection(contextMenuSelectedTechnique); contextMenuVisible = false; populateEditFields();\">\n            remove from selection\n        </div>\n    </div>\n    <div *ngIf=\"configService.getFeature('selecting_techniques')\" class=\"contextMenu-section\">\n        <div class=\"contextMenu-button\" (click)=\"viewModel.selectAllTechniques(); contextMenuVisible = false; populateEditFields();\">\n            select all\n        </div>\n        <div class=\"contextMenu-button\" (click)=\"viewModel.clearTechniqueSelection(); contextMenuVisible = false; populateEditFields();\">\n            deselect all\n        </div>\n        <div class=\"contextMenu-button\" (click)=\"viewModel.invertSelection(); contextMenuVisible = false; populateEditFields();\">\n            invert selection\n        </div>\n    </div>\n    <div class=\"contextMenu-section\">\n        <div class=\"contextMenu-button\" (click)=\"openURL($event, contextMenuSelectedTechnique); contextMenuVisible = false; \">\n            view technique\n        </div>\n    </div>\n    <div *ngIf=\"customContextMenuItems.length > 0\" class=\"contextMenu-section\">\n        <div *ngFor=\"let option of customContextMenuItems\" class=\"contextMenu-button\" (click)=\"openCustomURL($event, contextMenuSelectedTechnique, option.url); contextMenuVisible = false; \">\n            {{option.label}}\n        </div>\n    </div>\n</div>\n\n<!-- Tooltip -->\n<div class=\"tooltip noselect\" [id]=\"'tooltip'+viewModel.uid\">\n    <div *ngIf=\"viewModel.highlightedTechnique\">\n        <div>\n            <span *ngIf=\"viewModel.viewMode != 0\">{{viewModel.highlightedTechnique.name}} (</span>{{viewModel.highlightedTechnique.technique_id}}<span *ngIf=\"viewModel.viewMode != 0\">)</span>\n        </div>\n        <!-- <table>\n            <tr *ngIf=\"viewModel.getTechniqueVM(viewModel.highlightedTechnique.technique_id).score\">\n                <td>Score:</td>\n                <td>{{viewModel.getTechniqueVM(viewModel.highlightedTechnique.technique_id).score}}</td>\n            </tr>\n            <tr *ngIf=\"viewModel.getTechniqueVM(viewModel.highlightedTechnique.technique_id).comment\">\n                <td>Comment:</td>\n                <td>{{viewModel.getTechniqueVM(viewModel.highlightedTechnique.technique_id).comment}}</td>\n            </tr>\n        </table> -->\n        <div *ngIf=\"viewModel.getTechniqueVM(viewModel.highlightedTechnique.technique_tactic_union_id).score\">\n            <b>Score:</b> {{viewModel.getTechniqueVM(viewModel.highlightedTechnique.technique_tactic_union_id).score}}\n        </div>\n        <div class=\"comment\" [id]=\"'comment'+viewModel.uid\" *ngIf=\"viewModel.getTechniqueVM(viewModel.highlightedTechnique.technique_tactic_union_id).comment\">\n            <b>Comment:</b> {{viewModel.getTechniqueVM(viewModel.highlightedTechnique.technique_tactic_union_id).comment}}\n        </div>\n        <div class=\"comment-overflow-note\" *ngIf=\"toolTipOverflows\">\n            ...\n        </div>\n\n    </div>\n\n</div>\n\n<div class=\"legendBar\" (click)=\"toggleLegend()\" *ngIf=\"!showingLegend && configService.getFeature('legend')\">\n    <img src=\"assets/icons/ic_keyboard_arrow_up_black_24px.svg\" style=\"position: absolute; left:4px; top: 3px;\">\n    <div class=\"noselect\" style=\"padding:4px; font-size:14px; position: absolue; width: 100%; text-align:center\">\n        legend\n    </div>\n</div>\n\n<div class=\"legend\" *ngIf=\"showingLegend && configService.getFeature('legend')\">\n    <div class=\"legendBar\" (click)=\"toggleLegend()\" style=\"position: absolute; top:0px; left:0px;\">\n        <img src=\"assets/icons/ic_keyboard_arrow_down_black_24px.svg\" style=\"position: absolute; left:4px; top: 3px;\">\n        <div class=\"noselect\" style=\"padding:4px; font-size:14px; position: absolue; width: 100%; text-align:center\">\n            legend\n        </div>\n    </div>\n    <div class=\"itemArea\">\n        <div class=\"item\" *ngFor=\"let item of viewModel.legendItems; let Even=even; let i=index\" [class.even]=\"!Even\">\n            <input [(colorPicker)]=\"item.color\" [(ngModel)]=\"item.color\" [style.background]=\"item.color\" [cpPosition]=\"'top'\" [cpPresetColors]=\"viewModel.legendColorPresets\" style=\"width:75px;\"/>\n            <!-- <input class=\"label\" [(ngModel)]=\"item.label\"> -->\n            <mat-form-field class=\"label\">\n                    <input matInput\n\n                    [(ngModel)]=\"item.label\">\n\n            </mat-form-field>\n            <img src=\"assets/icons/ic_clear_gray_24px.svg\" style=\"position: relative; top:5px; right:0px;\" (click)=\"viewModel.deleteLegendItem(i);\">\n        </div>\n        <button style=\"margin-left:75px; margin-top:10px; margin-bottom:10px;\" class=\"button\" (click)=\"viewModel.addLegendItem();\">Add Item</button>\n        <button style=\"margin-top:10px; margin-bottom:10px;\" class=\"button\" (click)=\"viewModel.clearLegend();\">Clear</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/datatable/data-table.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\n.mat-elevation-z0{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}\n.mat-elevation-z1{-webkit-box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}\n.mat-elevation-z2{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}\n.mat-elevation-z3{-webkit-box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}\n.mat-elevation-z4{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}\n.mat-elevation-z5{-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}\n.mat-elevation-z6{-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}\n.mat-elevation-z7{-webkit-box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12);box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}\n.mat-elevation-z8{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}\n.mat-elevation-z9{-webkit-box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12);box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}\n.mat-elevation-z10{-webkit-box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12);box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}\n.mat-elevation-z11{-webkit-box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12);box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}\n.mat-elevation-z12{-webkit-box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12);box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}\n.mat-elevation-z13{-webkit-box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12);box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}\n.mat-elevation-z14{-webkit-box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12);box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}\n.mat-elevation-z15{-webkit-box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12);box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}\n.mat-elevation-z16{-webkit-box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}\n.mat-elevation-z17{-webkit-box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12);box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}\n.mat-elevation-z18{-webkit-box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12);box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}\n.mat-elevation-z19{-webkit-box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12);box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}\n.mat-elevation-z20{-webkit-box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12);box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}\n.mat-elevation-z21{-webkit-box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12);box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}\n.mat-elevation-z22{-webkit-box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12);box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}\n.mat-elevation-z23{-webkit-box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12);box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}\n.mat-elevation-z24{-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}\n.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h5,.mat-typography h5{font-size:11.62px;font-weight:400;font-family:Roboto,\"Helvetica Neue\",sans-serif;line-height:20px;margin:0 0 12px}\n.mat-h6,.mat-typography h6{font-size:9.38px;font-weight:400;font-family:Roboto,\"Helvetica Neue\",sans-serif;line-height:20px;margin:0 0 12px}\n.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}\n.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}\n.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}\n.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}\n.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}\n.mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-card-title{font-size:24px;font-weight:400}\n.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}\n.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-checkbox-layout .mat-checkbox-label{line-height:24px}\n.mat-chip{font-size:13px;line-height:18px}\n.mat-chip .mat-chip-remove.mat-icon{font-size:18px}\n.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-header-cell{font-size:12px;font-weight:500}\n.mat-cell{font-size:14px}\n.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-calendar-body{font-size:13px}\n.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}\n.mat-calendar-table-header th{font-size:11px;font-weight:400}\n.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}\n.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-form-field{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:inherit;font-weight:400;line-height:1.125}\n.mat-form-field-wrapper{padding-bottom:1.25em}\n.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}\n.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}\n.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}\n.mat-form-field-infix{padding:.4375em 0;border-top:.84375em solid transparent}\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-placeholder{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}\n.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-placeholder-wrapper .mat-form-field-placeholder{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}\n.mat-form-field-placeholder-wrapper{top:-.84375em;padding-top:.84375em}\n.mat-form-field-placeholder{top:1.28125em}\n.mat-form-field-underline{bottom:1.25em}\n.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.54167em;top:calc(100% - 1.66667em)}\n.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}\n.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}\n.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}\ninput.mat-input-element{margin-top:-.0625em}\n.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}\n.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}\n.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-select-trigger{height:1.125em}\n.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}\n.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-step-label{font-size:14px;font-weight:400}\n.mat-step-label-selected{font-size:14px;font-weight:500}\n.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}\n.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}\n.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}\n.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}\n.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}\n.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}\n.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}\n.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}\n.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}\n.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}\n.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}\n.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}\n.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}\n.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}\n.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}\n.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}\n.mat-ripple{overflow:hidden}\n@media screen and (-ms-high-contrast:active){.mat-ripple{display:none}}\n.mat-ripple.mat-ripple-unbounded{overflow:visible}\n.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;-webkit-transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}\n.mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;position:relative;cursor:pointer;outline:0}\n.mat-option[disabled]{cursor:default}\n[dir=rtl] .mat-option{text-align:right}\n.mat-option .mat-icon{margin-right:16px}\n[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}\n.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}\n.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}\n[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}\n.mat-option-text{display:inline-block}\n.mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n@media screen and (-ms-high-contrast:active){.mat-option-ripple{opacity:.5}}\n.mat-option-pseudo-checkbox{margin-right:8px}\n[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n.mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}\n.mat-optgroup-label[disabled]{cursor:default}\n[dir=rtl] .mat-optgroup-label{text-align:right}\n.mat-optgroup-label .mat-icon{margin-right:16px}\n[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}\n.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}\n.cdk-overlay-container{position:fixed;z-index:1000}\n.cdk-global-overlay-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;z-index:1000}\n.cdk-overlay-pane{position:absolute;pointer-events:auto;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1000}\n.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;-webkit-transition:opacity .4s cubic-bezier(.25,.8,.25,1);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}\n.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}\n.cdk-overlay-transparent-backdrop{background:0 0}\n.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n.mat-ripple-element{background-color:rgba(0,0,0,.1)}\n.mat-option{color:rgba(0,0,0,.87)}\n.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}\n.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}\n.mat-optgroup-label{color:rgba(0,0,0,.54)}\n.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}\n.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}\n.mat-pseudo-checkbox::after{color:#fafafa}\n.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}\n.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}\n.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}\n.mat-app-background{background-color:#fafafa}\n.mat-theme-loaded-marker{display:none}\n.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}\n.mat-button,.mat-icon-button{background:0 0}\n.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay{background-color:rgba(63,81,181,.12)}\n.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,64,129,.12)}\n.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}\n.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay{background-color:transparent}\n.mat-button.mat-primary,.mat-icon-button.mat-primary{color:#3f51b5}\n.mat-button.mat-accent,.mat-icon-button.mat-accent{color:#ff4081}\n.mat-button.mat-warn,.mat-icon-button.mat-warn{color:#f44336}\n.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled]{color:rgba(0,0,0,.38)}\n.mat-fab,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}\n.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:rgba(255,255,255,.87)}\n.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}\n.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}\n.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.38)}\n.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}\n.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}\n.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}\n.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}\n.mat-fab.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.2)}\n.mat-fab.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.2)}\n.mat-fab.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.2)}\n.mat-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.1)}\n.mat-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.1)}\n.mat-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}\n.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.2)}\n.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.2)}\n.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}\n.mat-button-toggle{color:rgba(0,0,0,.38)}\n.mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.06)}\n.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}\n.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.38)}\n.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}\n.mat-card{background:#fff;color:rgba(0,0,0,.87)}\n.mat-card-subtitle{color:rgba(0,0,0,.54)}\n.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}\n.mat-checkbox-checkmark{fill:#fafafa}\n.mat-checkbox-checkmark-path{stroke:#fafafa!important}\n.mat-checkbox-mixedmark{background-color:#fafafa}\n.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}\n.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}\n.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}\n.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}\n.mat-chip:not(.mat-basic-chip){background-color:#e0e0e0;color:rgba(0,0,0,.87)}\n.mat-chip:not(.mat-basic-chip) .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}\n.mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:rgba(255,255,255,.87)}\n.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:rgba(255,255,255,.87);opacity:.4}\n.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}\n.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}\n.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}\n.mat-table{background:#fff}\n.mat-header-row,.mat-row{border-bottom-color:rgba(0,0,0,.12)}\n.mat-header-cell{color:rgba(0,0,0,.54)}\n.mat-cell{color:rgba(0,0,0,.87)}\n.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}\n.mat-calendar-next-button,.mat-calendar-previous-button{color:rgba(0,0,0,.54)}\n.mat-calendar-table-header{color:rgba(0,0,0,.38)}\n.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}\n.mat-calendar-body-label{color:rgba(0,0,0,.54)}\n.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}\n.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}\n.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}\n.mat-calendar-body-selected{background-color:#3f51b5;color:rgba(255,255,255,.87)}\n.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}\n.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}\n.mat-calendar-body-today.mat-calendar-body-selected{-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,.87);box-shadow:inset 0 0 0 1px rgba(255,255,255,.87)}\n.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}\n.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}\n.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}\n.mat-action-row{border-top-color:rgba(0,0,0,.12)}\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}\n.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}\n.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}\n.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.38)}\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}\n.mat-form-field{width:200px}\n.mat-form-field-placeholder{color:rgba(0,0,0,.54)}\n.mat-hint{color:rgba(0,0,0,.54)}\n.mat-focused .mat-form-field-placeholder{color:#3f51b5}\n.mat-focused .mat-form-field-placeholder.mat-accent{color:#ff4081}\n.mat-focused .mat-form-field-placeholder.mat-warn{color:#f44336}\n.mat-focused .mat-form-field-required-marker{color:#ff4081}\n.mat-form-field-underline{background-color:rgba(0,0,0,.42)}\n.mat-form-field-underline.mat-disabled{background-image:-webkit-gradient(linear,left top, right top,color-stop(0, rgba(0,0,0,.42)),color-stop(33%, rgba(0,0,0,.42)),color-stop(0, transparent));background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x}\n.mat-form-field-ripple{background-color:#3f51b5}\n.mat-form-field-ripple.mat-accent{background-color:#ff4081}\n.mat-form-field-ripple.mat-warn{background-color:#f44336}\n.mat-form-field-invalid .mat-form-field-placeholder{color:#f44336}\n.mat-form-field-invalid .mat-form-field-placeholder .mat-form-field-required-marker,.mat-form-field-invalid .mat-form-field-placeholder.mat-accent{color:#f44336}\n.mat-form-field-invalid .mat-form-field-ripple{background-color:#f44336}\n.mat-error{color:#f44336}\n.mat-icon.mat-primary{color:#3f51b5}\n.mat-icon.mat-accent{color:#ff4081}\n.mat-icon.mat-warn{color:#f44336}\n.mat-input-element:disabled{color:rgba(0,0,0,.42)}\n.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}\n.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}\n.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}\n.mat-list-item-disabled{background-color:#eee}\n.mat-divider{border-top-color:rgba(0,0,0,.12)}\n.mat-nav-list .mat-list-item{outline:0}\n.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}\n.mat-list-option{outline:0}\n.mat-list-option.mat-list-item-focus,.mat-list-option:hover{background:rgba(0,0,0,.04)}\n.mat-menu-panel{background:#fff}\n.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}\n.mat-menu-item[disabled]{color:rgba(0,0,0,.38)}\n.mat-menu-item .mat-icon,.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}\n.mat-menu-item-highlighted:not([disabled]),.mat-menu-item:focus:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}\n.mat-paginator{background:#fff}\n.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}\n.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}\n.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-increment{border-color:rgba(0,0,0,.38)}\n.mat-progress-bar-background{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23c5cae9%27%2F%3E%3C%2Fsvg%3E\")}\n.mat-progress-bar-buffer{background-color:#c5cae9}\n.mat-progress-bar-fill::after{background-color:#3f51b5}\n.mat-progress-bar.mat-accent .mat-progress-bar-background{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ff80ab%27%2F%3E%3C%2Fsvg%3E\")}\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}\n.mat-progress-bar.mat-warn .mat-progress-bar-background{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\")}\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}\n.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}\n.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}\n.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}\n.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}\n.mat-radio-disabled .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}\n.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}\n.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}\n.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#3f51b5}\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}\n.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ff4081}\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}\n.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}\n.mat-select-arrow,.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.54)}\n.mat-select-content,.mat-select-panel-done-animating{background:#fff}\n.mat-select-value{color:rgba(0,0,0,.87)}\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.54)}\n.mat-select.mat-select-disabled .mat-select-arrow{color:#f44336}\n.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-drawer.mat-drawer-push{background-color:#fff}\n.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#e91e63}\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(233,30,99,.5)}\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle .mat-ripple-element{background-color:rgba(233,30,99,.12)}\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#3f51b5}\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(63,81,181,.5)}\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.12)}\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}\n.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}\n.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}\n.mat-slide-toggle-thumb{background-color:#fafafa}\n.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}\n.mat-slider-track-background{background-color:rgba(0,0,0,.26)}\n.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}\n.mat-primary .mat-slider-thumb-label-text{color:rgba(255,255,255,.87)}\n.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}\n.mat-accent .mat-slider-thumb-label-text{color:#fff}\n.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}\n.mat-warn .mat-slider-thumb-label-text{color:#fff}\n.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}\n.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}\n.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}\n.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}\n.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}\n.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}\n.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}\n.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}\n.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}\n.mat-step-header .mat-step-icon{background-color:#3f51b5;color:rgba(255,255,255,.87)}\n.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:rgba(255,255,255,.87)}\n.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}\n.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}\n.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}\n.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}\n.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}\n.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}\n.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}\n.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}\n.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}\n.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}\n.mat-tab-group.mat-primary .mat-tab-label:focus,.mat-tab-group.mat-primary .mat-tab-link:focus,.mat-tab-nav-bar.mat-primary .mat-tab-label:focus,.mat-tab-nav-bar.mat-primary .mat-tab-link:focus{background-color:rgba(197,202,233,.3)}\n.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:rgba(255,255,255,.87)}\n.mat-tab-group.mat-accent .mat-tab-label:focus,.mat-tab-group.mat-accent .mat-tab-link:focus,.mat-tab-nav-bar.mat-accent .mat-tab-label:focus,.mat-tab-nav-bar.mat-accent .mat-tab-link:focus{background-color:rgba(255,128,171,.3)}\n.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-warn .mat-tab-label:focus,.mat-tab-group.mat-warn .mat-tab-link:focus,.mat-tab-nav-bar.mat-warn .mat-tab-label:focus,.mat-tab-nav-bar.mat-warn .mat-tab-link:focus{background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-label:focus,.mat-tab-group.mat-background-primary .mat-tab-link:focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-label:focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-link:focus{background-color:rgba(197,202,233,.3)}\n.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}\n.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:rgba(255,255,255,.87)}\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.87)}\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-accent .mat-tab-label:focus,.mat-tab-group.mat-background-accent .mat-tab-link:focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-label:focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-link:focus{background-color:rgba(255,128,171,.3)}\n.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}\n.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn .mat-tab-label:focus,.mat-tab-group.mat-background-warn .mat-tab-link:focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-label:focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-link:focus{background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}\n.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}\n.mat-toolbar.mat-primary{background:#3f51b5;color:rgba(255,255,255,.87)}\n.mat-toolbar.mat-accent{background:#ff4081;color:#fff}\n.mat-toolbar.mat-warn{background:#f44336;color:#fff}\n.mat-tooltip{background:rgba(97,97,97,.9)}\n.mat-snack-bar-container{background:#323232;color:#fff}\n.mat-simple-snackbar-action{color:#ff4081}\nbody {\n  padding: 0 15px 15px 15px;\n  margin-top: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }\n.noselect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */ }\n.controlsContainer {\n  background-color: #ddd;\n  text-align: right;\n  display: block; }\n.controlsContainer ul {\n    margin: 0; }\n.controlsContainer .control-sections > li {\n    list-style: none;\n    display: inline-block;\n    border-left: 1px solid #c9c9c9;\n    padding: 0 5px 0 5px;\n    position: relative; }\n.controlsContainer .control-sections > li .section-label {\n      font-size: 8pt;\n      top: -13px;\n      position: absolute;\n      border-color: white;\n      border-style: solid;\n      border-width: 1px 1px 0 1px;\n      padding: 0 5px;\n      background-color: #ddd;\n      border-radius: 2px 2px 0 0;\n      text-align: center;\n      color: #555;\n      cursor: default;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      white-space: nowrap; }\n.controlsContainer .control-sections > li .control-row-item {\n      display: inline-block;\n      position: relative;\n      height: 34px; }\n.controlsContainer .control-sections > li .control-row-item .control-row-button {\n        border-radius: 3px;\n        padding: 5px;\n        height: 24px;\n        cursor: pointer; }\n.controlsContainer .control-sections > li .control-row-item .control-row-button:hover {\n          background-color: #d0d0d0; }\n.controlsContainer .control-sections > li .control-row-item .control-row-button.dropdown::after {\n          font-size: 5pt;\n          content: \"▼\"; }\n.controlsContainer .control-sections > li .control-row-item .dropdown-container {\n        border: 1px solid black;\n        background-color: white;\n        -webkit-box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);\n                box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);\n        position: absolute;\n        z-index: 100;\n        width: -webkit-max-content;\n        width: -moz-max-content;\n        width: max-content; }\n.controlsContainer .control-sections > li .control-row-item .dropdown-container.left {\n          right: 0; }\n.controlsContainer .control-sections > li .control-row-item .dropdown-container.inputfield {\n          width: 150px;\n          padding: 0px 10px; }\n.controlsContainer .control-sections > li .control-row-item .dropdown-container.inputfield mat-form-field {\n            width: 100%; }\n.controlsContainer .control-sections > li .control-row-item .dropdown-container.inputfield mat-form-field:first-child {\n              padding-top: 5px; }\n.checkbox-custom {\n  opacity: 0;\n  position: absolute; }\n.checkbox-custom, .checkbox-custom-label {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 5px;\n  cursor: pointer; }\n.checkbox-custom-label {\n  position: relative; }\n.checkbox-custom-label.disabled {\n    color: rgba(0, 0, 0, 0.46); }\n.checkbox-custom + .checkbox-custom-label:before {\n  content: '';\n  background: #fff;\n  border: 3px solid #ddd;\n  display: inline-block;\n  vertical-align: middle;\n  width: 10px;\n  height: 10px;\n  padding: 2px;\n  margin-right: 5px;\n  text-align: center; }\n.checkbox-custom:checked + .checkbox-custom-label:before {\n  background: #60c5ff;\n  -webkit-box-shadow: inset 0px 0px 0px 1px #60c5ff;\n          box-shadow: inset 0px 0px 0px 1px #60c5ff; }\n.checkbox-custom:checked:disabled + .checkbox-custom-label:before {\n  background: #afb0b0;\n  -webkit-box-shadow: inset 0px 0px 0px 1px #afb0b0;\n          box-shadow: inset 0px 0px 0px 1px #afb0b0; }\n.dataTable {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  font-size: 9pt; }\n.dataTable table {\n    table-layout: fixed;\n    border-collapse: collapse; }\n.dataTable.compact {\n    text-align: center; }\n.dataTable td {\n    vertical-align: top; }\n.dataTable .column {\n    padding-right: 6px;\n    width: 1%; }\n.dataTable .column.mini {\n      line-height: 3px; }\n.dataTable .techniques:hover {\n    background: #ebebeb; }\n.dataTable .cell {\n    width: 100%;\n    display: inline-block;\n    padding: 2px;\n    margin-top: 3px; }\n.dataTable .cell:not(.itemcount) {\n      border: 1px solid; }\n.dataTable .cell:not(.itemcount).mini {\n        width: 2px;\n        height: 2px;\n        margin-right: 1px; }\n.dataTable .cell:not(.itemcount) .editing {\n        border-color: black; }\n.dataTable .cell:not(.itemcount):not(.editing):not(.compact):not(.mini) {\n        border: none;\n        padding: 3px; }\n.dataTable .cell:not(.itemcount):not(.editing).compact, .dataTable .cell:not(.itemcount):not(.editing).mini:not(.header) {\n        border-color: #b8b8b8; }\n.dataTable .cell.itemcount {\n      border: 1px solid;\n      border-color: rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) black rgba(255, 255, 255, 0); }\n.dataTable .cell.editing {\n      border-color: black; }\n.dataTable .cell.header {\n      font-weight: bold; }\n.dataTable .cell.header:hover {\n        color: #60c5ff; }\n.dataTable .cell.header.mini {\n        background-color: black;\n        border-color: black; }\n.dataTable .cell.highlight {\n      background: #60c5ff; }\n.dataTable .cell.highlight span {\n        color: black; }\n.dataTable .cell.disabled:not(.highlight) span {\n      color: #b8b8b8; }\n.dataTable .cell.disabled:not(.highlight).compact {\n      background: url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 10 10'><path d='M 10 0 L 0 10' fill='none' stroke='#cccccc' stroke-width='1' /></svg>\"); }\n.dataTable .cell.disabled:not(.highlight).mini {\n      background: url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 10 10'><path d='M 10 0 L 0 10' fill='none' stroke='#b8b8b8' stroke-width='1' /></svg>\"); }\n.dataTable .cell.has-comment:not(.disabled) span {\n      border-bottom: 2px solid yellow; }\n.dataTable .anti-highlight:not(.highlight) div:not(.editing):not(.has-score-background):not(:hover) {\n    color: #b8b8b8; }\n.link {\n  cursor: pointer; }\n.tableContainer {\n  border: 1px solid #ddd;\n  padding: 10px; }\n.multiselect-dropdown {\n  display: inline-block; }\n.colorpicker {\n  width: 88px !important;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center; }\n.colorpicker .color-block {\n    cursor: pointer;\n    border: 1px solid black;\n    margin: 2.5px; }\n.colorpicker .color-block.square {\n      display: inline-block;\n      width: 15px;\n      height: 15px; }\n.colorpicker .color-block.wide {\n      display: block;\n      height: 15px;\n      font-size: 10pt;\n      color: #807f7f; }\n.colorSetup {\n  font-size: 8pt; }\n.colorSetup .colorpicker {\n    width: 10ex; }\n.colorSetup .gradient-section-label {\n    font-weight: bold;\n    padding: 4px;\n    text-align: center; }\n.colorSetup .gradient-section-content {\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    text-align: left; }\n.colorSetup .display-buttons {\n    text-align: center; }\n.colorSetup .display-buttons .squarebutton {\n      border: 1px solid #ddd;\n      padding: 4px 0;\n      cursor: pointer; }\n.colorSetup .display-buttons .squarebutton:hover {\n        background: #f1f1f1; }\n.colorSetup .display-buttons .squarebutton.gradient:hover {\n        text-decoration: underline; }\n.colorSetup .display-buttons .presetsmenu {\n      width: 90%;\n      display: inline-block; }\n.colorSetup .gradient-controls table {\n    padding: 0;\n    margin: 0;\n    border-collapse: collapse; }\n.colorSetup .gradient-controls table td.buttons > div {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n.colorSetup .gradient-controls table td .left, .colorSetup .gradient-controls table td .right {\n      display: inline-block; }\n.colorSetup .gradient-controls table td .left {\n      float: left; }\n.colorSetup .gradient-controls table td .right {\n      text-align: left; }\n.colorSetup .gradient-controls table td .right select {\n        width: 80px; }\n.colorSetup .gradient-controls table td.col2 {\n      width: 45px; }\n.colorSetup .gradient-controls table td.col2 input[type=number] {\n        width: 40px; }\n.colorSetup .gradient-controls table .minmax {\n      text-align: center;\n      background-color: #f1f1f1; }\n.colorSetup .gradient-controls .addcolor {\n    width: 100%; }\n.contextMenu-cover {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh; }\n.contextMenu-box {\n  position: absolute;\n  border: 1px solid black;\n  background-color: white;\n  -webkit-box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);\n          box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 100;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content; }\n.contextMenu-box.left {\n    right: 0; }\n.contextMenu-box .contextMenu-section:not(:first-child) {\n    border-top: 1px solid #ddd;\n    margin-top: 2px;\n    padding-top: 2px; }\n.contextMenu-box .contextMenu-section .contextMenu-button {\n    padding: 3px;\n    cursor: pointer; }\n.contextMenu-box .contextMenu-section .contextMenu-button:hover {\n      background: #60c5ff; }\n.tooltip {\n  position: absolute;\n  z-index: 100;\n  padding: 6px;\n  border-radius: 3px;\n  background: rgba(80, 80, 80, 0.75);\n  font-size: 8pt;\n  color: white;\n  max-width: 150px;\n  overflow-x: hidden; }\n.tooltip .comment {\n    max-height: 300px;\n    overflow-y: hidden; }\n.mat-select :focus {\n  color: #63961C; }\n.filters {\n  padding: 4px; }\n.filters .filter {\n    text-align: left; }\n.filters .filter:not(:first-child) {\n      margin-top: 4px; }\n.filters .filter .filter-option:hover {\n      background: #60c5ff; }\n.multiselect {\n  text-align: center; }\n.multiselect .multiselect-grouping .multiselect-grouping-label {\n    padding: 4px;\n    font-weight: bold; }\n.multiselect .multiselect-grouping .multiselect-list {\n    text-align: left;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    height: 200px;\n    overflow-y: scroll; }\n.multiselect .multiselect-grouping .multiselect-list table {\n      border-collapse: collapse; }\n.multiselect .multiselect-grouping .multiselect-list .multiselect-list-item:hover {\n      background: #60c5ff; }\n.multiselect .multiselect-grouping .multiselect-list .multiselect-list-item .multiselect-list-item-label {\n      width: 25ex; }\n.multiselect .multiselect-grouping .multiselect-list .multiselect-list-item.selected:not(:hover) {\n      background: #ddd; }\n.search {\n  text-align: center; }\n.search .search-list {\n    margin-top: 2px;\n    text-align: left;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    height: 300px;\n    overflow-y: scroll; }\n.search .search-list table {\n      border-collapse: collapse;\n      width: 325px; }\n.search .search-list .search-list-item:hover {\n      background: #60c5ff; }\n.search .search-list .search-list-item .search-list-item-label {\n      width: 25ex; }\n.search .search-list .search-list-item.selected:not(:hover) {\n      background: #ddd; }\n.search-button:hover {\n  background: #60c5ff; }\n.button {\n  background-color: #ddd;\n  border: none;\n  padding: 4px 10px;\n  text-align: center;\n  margin: 2px 1px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  display: inline-block;\n  text-decoration: none;\n  cursor: pointer; }\n.button:hover {\n    background-color: #b8b8b8; }\n.deselectNumber {\n  font-size: 5pt;\n  bottom: 2px;\n  right: 4px;\n  position: absolute;\n  text-align: right; }\n.legend {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 300px;\n  height: 300px;\n  background-color: white;\n  border-left: 1px solid #ddd; }\n.legend .itemArea {\n    position: static;\n    overflow-y: scroll;\n    margin-top: 30px;\n    height: 270px;\n    width: 100%;\n    overflow-x: hidden; }\n.legend .itemArea .item {\n      width: 100%;\n      height: 40px;\n      padding-left: 5px; }\n.legend .itemArea .item .label {\n        margin-left: 10px;\n        width: 150px; }\n.legend .itemArea .even {\n      background-color: #f1f1f1;\n      width: 100%;\n      height: 40px; }\n.legend .itemArea .even .label {\n        margin-left: 10px;\n        width: 150px; }\n.legendBar {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 300px;\n  height: 30px;\n  background-color: #ddd;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n.legendBar:hover {\n    background: #60c5ff;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/datatable/data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("./src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exporter_exporter_component__ = __webpack_require__("./src/app/exporter/exporter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs_component__ = __webpack_require__("./src/app/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewmodels_service__ = __webpack_require__("./src/app/viewmodels.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DataTableComponent = (function () {
    //////////////////////////////////////////////////////////////////////////
    // RETRIEVES THE TECHNIQUES, TACTICS, AND THREAT DATA FROM DATA SERVICE //
    //     Calls functions to format the data                               //
    //////////////////////////////////////////////////////////////////////////
    function DataTableComponent(dataService, tabs, sanitizer, viewModelsService, configService) {
        var _this = this;
        this.dataService = dataService;
        this.tabs = tabs;
        this.sanitizer = sanitizer;
        this.viewModelsService = viewModelsService;
        this.configService = configService;
        ////////////////
        // DATA TABLE //
        // VARIABLES  //
        ////////////////
        // Stores the techniques and tacticsdisplayed in the dataTable
        this.actTechniques = [];
        this.prepareTechniques = [];
        this.techniques = [];
        this.tactics = {};
        this.tacticStages = {};
        // The techniques and tactics being displayed after filters are applied
        this.filteredTechniques = [];
        this.filteredTactics = {};
        // Stores properly formated tactic names to use in data-table headers
        this.tacticDisplayNames = {};
        // Stores properly formated names for the malware, tools, and threat groups
        this.threatGroupList = [];
        this.softwareGroupList = [];
        this.selectedTechniques = new Set();
        this.searchString = "";
        this.searchResults = [];
        this.searchingName = true;
        this.searchingID = true;
        this.searchingDescription = true;
        this.customContextMenuItems = [];
        this.showingLegend = false;
        this.currentDropdown = ""; //current dropdown menu
        // The data service that delivers the technique/tactic data
        this.ds = null;
        // edit field bindings
        this.commentEditField = "";
        this.scoreEditField = "";
        this.contextMenuVisible = false;
        this.contextMenuSelectedTechnique = null;
        this.contextMenuSelectedTactic = null;
        //tooltip facing, true for right align, false for left align
        // tooltipDirectionHorizontal: boolean = false;
        // tooltipDirectionVertical: boolean = false;
        this.toolTipOverflows = false;
        this.ds = dataService;
        this.ds.retreiveConfig().subscribe(function (config) {
            _this.ds.setUpURLs(config["enterprise_attack_url"], config["pre_attack_url"], config["mobile_data_url"], config["tactics_url"], config["taxii_server"]["enabled"], config["taxii_server"]["url"], config["taxii_server"]["collections"]);
            var domain = config["domain"];
            _this.customContextMenuItems = config["custom_context_menu_items"];
            dataService.getTactics().subscribe(function (tactics) {
                _this.constructTacticList(tactics, domain);
                if (domain === "mitre-enterprise") {
                    dataService.getEnterpriseData(false, config["taxii_server"]["enabled"]).subscribe(function (enterpriseData) {
                        var objects = enterpriseData[1]["objects"].concat(enterpriseData[0]["objects"]);
                        _this.establishData(objects);
                    });
                }
                else if (domain === "mitre-mobile") {
                    dataService.getMobileData(false, config["taxii_server"]["enabled"]).subscribe(function (mobileData) {
                        var objects = mobileData[1]["objects"].concat(mobileData[0]["objects"]);
                        _this.establishData(objects);
                    });
                }
            });
        });
    }
    DataTableComponent.prototype.clickTactic = function (tacticName) {
        // console.log(tacticName, this.viewModel.highlightedTactic)
        if (this.viewModel.highlightedTactic == tacticName)
            this.viewModel.highlightedTactic = null;
        else
            this.viewModel.highlightedTactic = tacticName;
    };
    DataTableComponent.prototype.containsActiveTechnique = function (tacticName) {
        if (this.viewModel.highlightedTechnique == null || this.viewModel.highlightedTactic == null)
            return false;
        for (var i = 0; i < this.techniques.length; i++) {
            if (this.techniques[i].technique_id === this.viewModel.highlightedTechnique.technique_id)
                return this.techniques[i].tactic === tacticName;
        }
    };
    DataTableComponent.prototype.toggleLegend = function () {
        this.showingLegend = !this.showingLegend;
    };
    ////////////////////////////////////////////////////////////////////
    // Updates the search list interface based on the search string.  //
    // Called whenever the input is updated.                          //
    ////////////////////////////////////////////////////////////////////
    DataTableComponent.prototype.updateSearchDropdown = function () {
        // Clear the previous results and initialize result holders
        this.searchResults = [];
        var nameResults = [], idResults = [], descriptionResults = [];
        var techniqueResultIDs = [];
        if (this.searchString === null || this.searchString === "") {
            return;
        }
        // Create a regular expression to search for
        var formattedInput = this.searchString.toLowerCase();
        var re = new RegExp(formattedInput, "g");
        for (var i = 0; i < this.filteredTechniques.length; i++) {
            if (this.searchingName) {
                var name = this.filteredTechniques[i].name.toLowerCase();
                var nameResult = name.search(re);
                if (nameResult !== -1 && !techniqueResultIDs.includes(this.filteredTechniques[i].technique_id)) {
                    nameResults.push(this.filteredTechniques[i]);
                    techniqueResultIDs.push(this.filteredTechniques[i].technique_id);
                }
            }
            if (this.searchingID) {
                var id = this.filteredTechniques[i].technique_id.toLowerCase();
                var idResult = id.search(re);
                if (idResult !== -1 && !techniqueResultIDs.includes(this.filteredTechniques[i].technique_id)) {
                    idResults.push(this.filteredTechniques[i]);
                    techniqueResultIDs.push(this.filteredTechniques[i].technique_id);
                }
            }
            if (this.searchingDescription) {
                var description = this.filteredTechniques[i].description.toLowerCase();
                var descriptionResult = description.search(re);
                if (descriptionResult !== -1 && !techniqueResultIDs.includes(this.filteredTechniques[i].technique_id)) {
                    descriptionResults.push(this.filteredTechniques[i]);
                    techniqueResultIDs.push(this.filteredTechniques[i].technique_id);
                }
            }
        }
        // Add the results in order of name, ID, and description
        var searchSet = new Set(nameResults.concat(idResults, descriptionResults));
        this.searchResults = Array.from(searchSet);
    };
    DataTableComponent.prototype.selectAllInSearch = function () {
        for (var i = 0; i < this.searchResults.length; i++) {
            this.viewModel.addToTechniqueSelection(this.searchResults[i]);
        }
    };
    DataTableComponent.prototype.deselectAllInSearch = function () {
        for (var i = 0; i < this.searchResults.length; i++) {
            this.viewModel.removeFromTechniqueSelection(this.searchResults[i]);
        }
    };
    ///////////////////////////////////////////////////////////
    // FILTERS THE TECHNIQUES TO SHOW WHAT THE USER REQUESTS //
    //   Filters the stages, then platforms, and finally     //
    //   sorts the techniques by name.                       //
    ///////////////////////////////////////////////////////////
    DataTableComponent.prototype.filterTechniques = function () {
        // copies the list of techniques
        var filteredTechniques = this.techniques;
        // filters out using the stages and platforms dropdowns
        filteredTechniques = this.filterStages(filteredTechniques);
        filteredTechniques = this.filterPlatforms(filteredTechniques);
        if (this.viewModel.hideDisabled)
            filteredTechniques = this.removeDisabled(filteredTechniques);
        // sort
        var self = this;
        filteredTechniques.sort(function (t1, t2) {
            var t1vm = self.viewModel.getTechniqueVM(t1.technique_tactic_union_id);
            var t2vm = self.viewModel.getTechniqueVM(t2.technique_tactic_union_id);
            var c1 = String(t1vm.score).length > 0 ? Number(t1vm.score) : 0;
            var c2 = String(t2vm.score).length > 0 ? Number(t2vm.score) : 0;
            switch (self.viewModel.sorting) {
                case 0:
                    return t1.name.localeCompare(t2.name);
                case 1:
                    return t2.name.localeCompare(t1.name);
                case 2:
                    if (c1 === c2)
                        return t1.name.localeCompare(t2.name);
                    else
                        return c1 - c2;
                case 3:
                    if (c1 === c2)
                        return t1.name.localeCompare(t2.name);
                    else
                        return c2 - c1;
                default:
                    return t1.name.localeCompare(t2.name);
            }
        });
        // sets the displayed filteredTechniques to the newly filtered ones
        this.filteredTechniques = filteredTechniques;
        this.tactics = this.ds.techniquesToTactics(filteredTechniques);
    };
    ///////////////////////////////////////////////////////////
    // FILTERS THE TECHNIQUES USING THE VALUES SET BY THE    //
    // STAGES FILTER DROPDOWN                                //
    //     Returns an array of the newly filtered techniques //
    ///////////////////////////////////////////////////////////
    DataTableComponent.prototype.filterStages = function (preFilteredTechniques) {
        var filteredTechniques = [];
        var stagesSelected = this.viewModel.filters.stages.selection;
        var addPrepare = false;
        var addAct = false;
        if (stagesSelected.length === 1) {
            if (stagesSelected[0].localeCompare("act") === 0) {
                addAct = true;
            }
            else {
                addPrepare = true;
            }
        }
        else if (stagesSelected.length > 1) {
            addPrepare = true;
            addAct = true;
        }
        // based on the platforms set, use the preset technique arrays to make a final
        //    filtered array
        if (addPrepare) {
            filteredTechniques = filteredTechniques.concat(this.prepareTechniques);
        }
        if (addAct) {
            filteredTechniques = filteredTechniques.concat(this.actTechniques);
        }
        return filteredTechniques;
    };
    //////////////////////////////////////////////////////////////////////////////////
    // FILTERS THE TECHNIQUES USING THE VALUES SET BY THE PLATFORMS FILTER DROPDOWN //
    //     Returns an array of the newly filtered techniques                        //
    //////////////////////////////////////////////////////////////////////////////////
    DataTableComponent.prototype.filterPlatforms = function (preFilteredTechniques) {
        var selectedPlatforms = this.viewModel.filters.platforms.selection;
        if (selectedPlatforms.length === 0) {
            return [];
        }
        else if (selectedPlatforms.length === this.viewModel.filters.platforms.options.length) {
            return preFilteredTechniques;
        }
        else {
            var filteredTechniques = [];
            // For each technique
            for (var i = 0; i < preFilteredTechniques.length; i++) {
                var technique = preFilteredTechniques[i];
                var techniquePlatforms = technique.platforms;
                if (techniquePlatforms === null || techniquePlatforms === undefined) {
                    filteredTechniques.push(technique);
                }
                else {
                    var matched = false;
                    // For each platform
                    for (var p = 0; p < techniquePlatforms.length; p++) {
                        // For each desiredPlatform
                        var techPlat = techniquePlatforms[p].toLowerCase();
                        for (var f = 0; f < selectedPlatforms.length; f++) {
                            var plat = selectedPlatforms[f].toLowerCase();
                            if (techPlat.indexOf(plat) !== -1) {
                                matched = true;
                                filteredTechniques.push(technique);
                                break;
                            }
                        }
                        if (matched) {
                            break;
                        }
                    }
                }
            }
            return filteredTechniques;
        }
    };
    DataTableComponent.prototype.removeDisabled = function (techniques) {
        var filtered = [];
        var self = this;
        techniques.forEach(function (technique) {
            // TODO other filters
            if (!(!self.viewModel.getTechniqueVM(technique.technique_tactic_union_id).enabled && self.viewModel.hideDisabled))
                filtered.push(technique);
        });
        return filtered;
    };
    //////////////////////////////////////////////////////////
    // Stringifies the current view model into a json string//
    // stores the string as a blob                          //
    // and then saves the blob as a json file               //
    //////////////////////////////////////////////////////////
    DataTableComponent.prototype.saveLayerLocally = function () {
        var json = this.viewModel.serialize(); //JSON.stringify(this.viewModel.serialize(), null, "\t");
        var blob = new Blob([json], { type: "text/json" });
        __WEBPACK_IMPORTED_MODULE_7_file_saver__["saveAs"](blob, this.viewModel.name.replace(/ /g, "_") + ".json");
    };
    /**
     * Angular lifecycle hook
     */
    DataTableComponent.prototype.ngAfterViewInit = function () {
        var element = document.getElementById("tooltip" + this.viewModel.uid);
        element.style.left = -10000 + "px";
    };
    ////////////////////////////////////////////////////
    // Handles the construction of tactic information //
    ////////////////////////////////////////////////////
    DataTableComponent.prototype.constructTacticList = function (totalTactics, domain) {
        var tactics = [];
        var added = false;
        for (var setKey in totalTactics) {
            var set = totalTactics[setKey];
            var domains = set.domains;
            added = false;
            for (var i = 0; i < domains.length; i++) {
                if (domains[i] === domain && !added) {
                    added = true;
                    tactics = tactics.concat(set.tactics);
                }
            }
        }
        this.ds.setTacticOrder(tactics);
        this.setTacticPhases(tactics);
    };
    ////////////////////////////////////////////////////
    // Creates a mapping of each tactic and its phase //
    ////////////////////////////////////////////////////
    DataTableComponent.prototype.setTacticPhases = function (tactics) {
        this.tacticStages = {};
        for (var i = 0; i < tactics.length; i++) {
            var tactic = tactics[i];
            this.tacticStages[tactic.tactic] = tactic.phase;
        }
    };
    //////////////////////////////////////////////////////////////////////
    // Does preliminary sorting before establishing the data structures //
    //////////////////////////////////////////////////////////////////////
    DataTableComponent.prototype.establishData = function (objects) {
        //console.log(objects)
        var techniques = {}, threatGroups = {}, software = {}, relationships = {};
        for (var i = 0; i < objects.length; i++) {
            var object = objects[i];
            if (object.x_mitre_deprecated !== true && object.revoked !== true) {
                if (object.type === "attack-pattern") {
                    techniques[object.id] = object;
                }
                else if (object.type === "intrusion-set") {
                    threatGroups[object.id] = object;
                }
                else if (object.type === "malware" || object.type === "tool") {
                    software[object.id] = object;
                }
                else if (object.type === "relationship") {
                    relationships[object.id] = object;
                }
            }
        }
        this.establishTechniques(techniques);
        this.setTacticDisplayNames();
        // this.loadFilters();
        this.filterTechniques();
        this.establishThreatDataHolders(threatGroups, software);
        this.establishThreatData(techniques, relationships);
        this.searchResults = [];
        if (this.viewModel.needsToConstructTechniqueVMs) {
            this.viewModel.constructLegacyVMs();
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////////
    // Creates the arrays of Technique objects to be handled elsewhere in the application //
    ////////////////////////////////////////////////////////////////////////////////////////
    DataTableComponent.prototype.establishTechniques = function (techniques) {
        var prepareTechniquesParsed = [], actTechniquesParsed = [];
        var techniqueIDToUIDMap = new Map();
        var techniqueUIDToIDMap = new Map();
        var techIDtoUIDMap = {};
        var techUIDtoIDMap = {};
        for (var techniqueID in techniques) {
            var t = techniques[techniqueID];
            // console.log(t)
            var tacticObject = t["kill_chain_phases"];
            var tacticFinal = [];
            if (tacticObject !== undefined) {
                tacticObject.forEach(function (tactic) { tacticFinal.push(tactic.phase_name); });
            }
            var url = "none", tid = "blank";
            if (t.external_references !== undefined) {
                url = t.external_references[0].url;
                tid = t.external_references[0].external_id;
            }
            var stageString = this.tacticStages[tacticObject[0]["phase_name"]];
            for (var i = 0; i < tacticFinal.length; i++) {
                var formattedTechnique = new __WEBPACK_IMPORTED_MODULE_1__data_service__["b" /* Technique */](t.name, t.description, tacticFinal[i], url, t.x_mitre_platforms, t.id, tid);
                if (!techniqueIDToUIDMap.has(tid)) {
                    //techniqueIDToUIDMap[tid] = [formattedTechnique.technique_tactic_union_id];
                    techniqueIDToUIDMap.set(tid, [formattedTechnique.technique_tactic_union_id]);
                }
                else {
                    var arr = techniqueIDToUIDMap.get(tid);
                    arr.push(formattedTechnique.technique_tactic_union_id);
                    techniqueIDToUIDMap.set(tid, arr);
                }
                if (techIDtoUIDMap[tid] === null || techIDtoUIDMap[tid] === undefined) {
                    techIDtoUIDMap[tid] = [formattedTechnique.technique_tactic_union_id];
                }
                else {
                    var arr_1 = techIDtoUIDMap[tid];
                    arr_1.push(formattedTechnique.technique_tactic_union_id);
                    techIDtoUIDMap[tid] = arr_1;
                }
                techUIDtoIDMap[formattedTechnique.technique_tactic_union_id] = tid;
                // techniqueUIDToIDMap[formattedTechnique.technique_tactic_union_id] = tid;
                techniqueUIDToIDMap.set(formattedTechnique.technique_tactic_union_id, tid);
                if (stageString === "act") {
                    actTechniquesParsed.push(formattedTechnique);
                }
                else {
                    prepareTechniquesParsed.push(formattedTechnique);
                }
            }
        }
        ;
        this.viewModel.setTechniqueMaps(techIDtoUIDMap, techUIDtoIDMap);
        // Stores techniques in arrays according to phase
        prepareTechniquesParsed.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        actTechniquesParsed.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        this.actTechniques = actTechniquesParsed, this.prepareTechniques = prepareTechniquesParsed;
        this.techniques = this.actTechniques.concat(this.prepareTechniques);
        this.filteredTechniques = this.techniques;
        this.tactics = this.dataService.techniquesToTactics(this.techniques);
        if (this.viewModel) {
            for (var i_1 = 0; i_1 < this.techniques.length; i_1++) {
                // console.log("initializing VM", this.techniques[i].name)
                if (!this.viewModel.hasTechniqueVM(this.techniques[i_1].technique_tactic_union_id))
                    this.viewModel.setTechniqueVM(new __WEBPACK_IMPORTED_MODULE_5__viewmodels_service__["a" /* TechniqueVM */](this.techniques[i_1].technique_tactic_union_id));
                // don't initialize vms we already have -- from loading or whatever
            }
            this.viewModel.updateGradient();
            this.populateEditFields();
        }
        else {
            console.error("no viewmodel to initialize data for!");
        }
    };
    // Sets a map of properly formated tactic names to display in the data table
    DataTableComponent.prototype.setTacticDisplayNames = function () {
        this.tacticDisplayNames = {};
        for (var tactic in this.tactics) {
            var displayString = tactic.replace(new RegExp("-", 'g'), " ");
            displayString = this.toUpperCase(displayString);
            this.tacticDisplayNames[tactic] = displayString;
        }
    };
    DataTableComponent.prototype.establishThreatDataHolders = function (threatGroups, software) {
        for (var threatGroupID in threatGroups) {
            var threatGroupRawData = threatGroups[threatGroupID];
            // get url from mitre attack
            var url_1 = "";
            for (var i = 0; i < threatGroupRawData.external_references.length; i++) {
                if (threatGroupRawData.external_references[i].source_name === "mitre-attack") {
                    url_1 = threatGroupRawData.external_references[i].url;
                    break;
                }
            }
            var threatGroup = new SecurityInstance(threatGroupRawData.name, "threat-group", threatGroupID, url_1);
            this.threatGroupList.push(threatGroup);
        }
        for (var softwareID in software) {
            var softwareRawData = software[softwareID];
            // get url from mitre attack
            var url = "";
            for (var i = 0; i < softwareRawData.external_references.length; i++) {
                if (softwareRawData.external_references[i].source_name.startsWith("mitre-attack")) {
                    url = softwareRawData.external_references[i].url;
                    break;
                }
            }
            var soft = new SecurityInstance(softwareRawData.name, "software", softwareID, url);
            this.softwareGroupList.push(soft);
        }
        this.threatGroupList.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        this.softwareGroupList.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
    };
    /**
     * Add all techniques in the given security instance to the technique selection
     * @param si SecurityInstance object
     */
    DataTableComponent.prototype.selectSecurityInstance = function (si) {
        var self = this;
        si.techniques.forEach(function (technique_id) {
            // console.log(technique_id);
            self.viewModel.addToTechniqueSelection_technique_id(technique_id);
        });
    };
    /**
     *  Remove all techniques in the given security instance from the technique selection
     * @param si SecurityInstance object
     */
    DataTableComponent.prototype.deselectSecurityInstance = function (si) {
        var self = this;
        si.techniques.forEach(function (technique_id) {
            self.viewModel.removeFromTechniqueSelection_technique_id(technique_id);
        });
    };
    /**
     * Populate SecurityInstance objects' techniques array with relevant techniques
     * @param  techniques    technique list
     * @param  relationships relationship list
     */
    DataTableComponent.prototype.establishThreatData = function (techniques, relationships) {
        // console.log(relationships)
        for (var relationship_id in relationships) {
            var relationship = relationships[relationship_id];
            var targetRef = relationship.target_ref;
            var sourceRef = relationship.source_ref;
            // determine what softwares or threat groups this pertains to
            var relevantSI = null;
            var relevantTechnique = null;
            // find relevant security instance
            var groupList = [this.softwareGroupList, this.threatGroupList];
            for (var i = 0; i < groupList.length && !relevantSI; i++) {
                var groupSecurityInstances = groupList[i];
                for (var j = 0; j < groupSecurityInstances.length && !relevantSI; j++) {
                    var securityInstance = groupSecurityInstances[j];
                    if (securityInstance.id === sourceRef) {
                        relevantSI = securityInstance;
                    }
                }
            }
            // find relevant technique
            for (var i = 0; i < this.techniques.length && !relevantTechnique; i++) {
                if (this.techniques[i].id == targetRef) {
                    relevantTechnique = this.techniques[i];
                }
            }
            if (relevantSI && relevantTechnique) {
                // console.log(relationship, relevantSI, relevantTechnique);
                relevantSI.techniques.push(relevantTechnique.technique_id);
            }
        }
        // cull threat groups and software with no associated techniques
        var culledSoftware = [];
        var culledThreatGroups = [];
        this.softwareGroupList.forEach(function (si) {
            if (si.techniques.length > 0)
                culledSoftware.push(si);
        });
        this.threatGroupList.forEach(function (si) {
            if (si.techniques.length > 0)
                culledThreatGroups.push(si);
        });
        this.softwareGroupList = culledSoftware;
        this.threatGroupList = culledThreatGroups;
        // console.log(this.softwareGroupList, this.threatGroupList);
    };
    // open a url in a new tab
    DataTableComponent.prototype.openURL = function (event, technique) {
        var win = window.open(technique.external_references_url);
        if (win) {
            win.focus();
        }
        else {
            alert('Please allow popups for this website');
        }
    };
    // open custom url in a new tab
    DataTableComponent.prototype.openCustomURL = function (event, technique, url) {
        var formattedTechniqueName = this.contextMenuSelectedTechnique.name.replace(/ /g, "_");
        var formattedURL = url.replace(/~Technique_ID~/g, this.contextMenuSelectedTechnique.technique_id);
        formattedURL = formattedURL.replace(/~Technique_Name~/g, formattedTechniqueName);
        formattedURL = formattedURL.replace(/~Tactic_Name~/g, this.contextMenuSelectedTactic);
        var win = window.open(formattedURL);
        if (win) {
            win.focus();
        }
        else {
            alert('Please allow popups for this website');
        }
    };
    // Capitalizes the first letter of each word in a string
    DataTableComponent.prototype.toUpperCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
    /**
     * triggered on left click of technique
     * @param  technique      technique which was left clicked
     * @param  addToSelection add to the technique selection (shift key) or replace selection?
     */
    DataTableComponent.prototype.techniqueSelectEvent = function (technique, addToSelection, tactic, event) {
        if (!this.configService.getFeature('selecting_techniques')) {
            this.rightClickTechnique(technique, tactic, event);
            return;
        }
        //console.log(technique);
        if (addToSelection) {
            // TODO add/remove from selection
            if (this.viewModel.isTechniqueSelected(technique))
                this.viewModel.removeFromTechniqueSelection(technique);
            else
                this.viewModel.addToTechniqueSelection(technique);
        }
        else {
            if (this.viewModel.getSelectedTechniqueCount() > 1)
                this.viewModel.replaceTechniqueSelection(technique);
            else if (this.viewModel.isTechniqueSelected(technique))
                this.viewModel.clearTechniqueSelection();
            else
                this.viewModel.replaceTechniqueSelection(technique);
        }
        //don't do any control population if nothing is being edited
        if (!this.viewModel.isCurrentlyEditing()) {
            if (["comment", "score", "colorpicker"].includes(this.currentDropdown))
                this.currentDropdown = ""; //remove technique control dropdowns, because everything was deselected
            return;
        }
        //else populate editing controls
        this.populateEditFields();
    };
    /**
     * populate edit fields. Gets common values if common values exist for all editing values
     */
    DataTableComponent.prototype.populateEditFields = function () {
        this.commentEditField = this.viewModel.getEditingCommonValue("comment");
        this.scoreEditField = this.viewModel.getEditingCommonValue("score");
    };
    /**
     * called on right clicking a technique in the view, handles context menu stuff
     * @param  technique technique that was clicked
     * @param  event     click event
     * @return           false to suppress normal context menu
     */
    DataTableComponent.prototype.rightClickTechnique = function (technique, tactic, event) {
        this.contextMenuVisible = true;
        this.contextMenuSelectedTechnique = technique;
        this.contextMenuSelectedTactic = this.tacticDisplayNames[tactic].replace(" ", "_");
        var self = this;
        window.setTimeout(function () {
            // console.log(event, technique)
            var element = document.getElementById("contextMenu" + self.viewModel.uid);
            var directionHorizontal = document.body.clientWidth - event.pageX < element.clientWidth; //determine facing
            var directionVertical = document.body.clientHeight - event.pageY < element.clientHeight; //determine facing
            element.style.left = directionHorizontal ? (event.pageX - element.clientWidth) + "px" : (event.pageX) + "px";
            element.style.top = directionVertical ? (event.pageY - element.clientHeight) + "px" : event.pageY + "px";
        }, 0);
        return false;
    };
    /**
     * On mouse move, move the tooltip to the mouse location
     * @param event teh mouse move event
     */
    DataTableComponent.prototype.onMouseMove = function (event) {
        var element = document.getElementById("tooltip" + this.viewModel.uid);
        var tooltipDirectionHorizontal = document.body.clientWidth - event.pageX < 150; //determine facing of tooltip
        var tooltipDirectionVertical = document.body.clientHeight - event.pageY < 350; //determine facing of tooltip
        if (this.viewModel.highlightedTechnique !== null && event.type == "mousemove") {
            element.style.left = tooltipDirectionHorizontal ? (event.pageX - 20 - element.clientWidth) + "px" : (event.pageX + 20) + "px";
            element.style.top = tooltipDirectionVertical ? (event.pageY - element.clientHeight) + "px" : event.pageY + "px";
        }
        else {
            element.style.left = -10000 + "px";
        }
        if (this.viewModel.highlightedTechnique && this.viewModel.getTechniqueVM(this.viewModel.highlightedTechnique.technique_tactic_union_id).comment) {
            var commentdiv = document.getElementById("comment" + this.viewModel.uid);
            this.toolTipOverflows = commentdiv.clientHeight >= 300;
        }
    };
    /**
     * Set the state (enabled/disabled) of the selected features
     */
    DataTableComponent.prototype.setSelectedState = function () {
        var currentState = this.viewModel.getEditingCommonValue('enabled');
        // console.log(currentState)
        if (currentState === '')
            this.viewModel.editSelectedTechniques('enabled', false);
        else
            this.viewModel.editSelectedTechniques('enabled', !currentState);
        this.filterTechniques();
    };
    //sanitize the given css so that it can be displayed without error
    DataTableComponent.prototype.sanitize = function (css) {
        return this.sanitizer.bypassSecurityTrustStyle(css);
    };
    /**
     * Return css classes for a technique
     * @param  {technique} technique the technique to get the class of
     * @param  {boolean}   mini is it the minitable?
     * @return {string}               the classes the technique should currently have
     */
    DataTableComponent.prototype.getClass = function (technique, tactic) {
        var theclass = 'link noselect cell';
        if (!this.viewModel.getTechniqueVM(technique.technique_tactic_union_id).enabled)
            theclass += " disabled";
        // else theclass += " " + this.viewModel.getTechniqueVM(technique.technique_tactic_union_id).color
        if (this.viewModel.isTechniqueSelected(technique))
            theclass += " editing";
        if (this.viewModel.highlightedTechnique && this.viewModel.highlightedTechnique.technique_id == technique.technique_id) {
            if (this.viewModel.selectTechniquesAcrossTactics) {
                theclass += " highlight";
            }
            else if (this.viewModel.hoverTactic == tactic) {
                theclass += " highlight";
            }
            //console.log(this.viewModel.hoverTactic);
        }
        theclass += [" full", " compact", " mini"][this.viewModel.viewMode];
        if (this.viewModel.getTechniqueVM(technique.technique_tactic_union_id).comment.length > 0)
            theclass += " has-comment";
        if (this.getTechniqueBackground(technique))
            theclass += " has-score-background";
        return theclass;
    };
    /**
     * get the technique background style for ngstyle
     * @param  technique technique
     * @return           background object
     */
    DataTableComponent.prototype.getTechniqueBackground = function (technique) {
        var tvm = this.viewModel.getTechniqueVM(technique.technique_tactic_union_id);
        // don't display if disabled or highlighted
        var highlight = false;
        if (this.viewModel.highlightedTechnique) {
            if (this.viewModel.selectTechniquesAcrossTactics && this.viewModel.highlightedTechnique.technique_id === technique.technique_id) {
                highlight = true;
            }
            else if (!this.viewModel.selectTechniquesAcrossTactics && this.viewModel.highlightedTechnique.technique_tactic_union_id === technique.technique_tactic_union_id) {
                highlight = true;
            }
        }
        if (!tvm.enabled || highlight)
            return {};
        if (tvm.color)
            return { "background": tvm.color };
        if (tvm.score)
            return { "background": tvm.scoreColor };
        // return tvm.enabled && tvm.score && !tvm.color && !(this.viewModel.highlightedTechnique && this.viewModel.highlightedTechnique.technique_id == technique.technique_id)
    };
    /**
     * Get most readable text color for the given technique
     * @param  technique     the technique to get the text color for
     * @param  antihighlight boolean, true if the column is not selected.
     * @return               black, white, or gray, depending on technique and column state
     */
    DataTableComponent.prototype.getTechniqueTextColor = function (technique, antihighlight) {
        var tvm = this.viewModel.getTechniqueVM(technique.technique_tactic_union_id);
        if (!tvm.enabled)
            return "#aaaaaa";
        // don't display if disabled or highlighted
        if (this.viewModel.highlightedTechnique && this.viewModel.highlightedTechnique.technique_tactic_union_id == technique.technique_tactic_union_id)
            return "black";
        if (tvm.color)
            return tinycolor.mostReadable(tvm.color, ["white", "black"]);
        if (tvm.score && !isNaN(Number(tvm.score)))
            return tinycolor.mostReadable(tvm.scoreColor, ["white", "black"]);
        if (antihighlight)
            return "#aaaaaa";
        else
            return "black";
    };
    DataTableComponent.prototype.getTacticRowTextColor = function () {
        if (!this.viewModel.showTacticRowBackground)
            return 'black';
        else
            return tinycolor.mostReadable(this.viewModel.tacticRowBackground, ['white', 'black']);
    };
    /**
     * Is score input valid number
     * @param  event keypress event just in case we need it
     * @return       true if valid number
     */
    DataTableComponent.prototype.validateScoreInput = function (event) {
        // console.log(event)
        var result = isNaN(Number(this.scoreEditField));
        // console.log(result)
        return result;
    };
    /**
     * Return whether all techniques in the security instance are currently selected
     * @param  si SecurityInstance object
     * @return    true if all techniques of the instance are selected, false otherwise
     */
    DataTableComponent.prototype.isSecurityInstanceSelected = function (si) {
        for (var i = 0; i < si.techniques.length; i++) {
            var techniqueID = si.techniques[i];
            if (!this.viewModel.isTechniqueSelected_id(techniqueID))
                return false;
        }
        return true;
    };
    /**
     * Return whether the given dropdown element would overflow the side of the page if aligned to the right of its anchor
     * @param  dropdown the DOM node of the panel
     * @return          true if it would overflow
     */
    DataTableComponent.prototype.checkalign = function (dropdown) {
        // console.log(anchor)
        var anchor = dropdown.parentNode;
        return anchor.getBoundingClientRect().left + dropdown.getBoundingClientRect().width > document.body.clientWidth;
    };
    /**
     * open an export layer render tab for the current layer
     */
    DataTableComponent.prototype.exportRender = function () {
        var viewModelCopy = new __WEBPACK_IMPORTED_MODULE_5__viewmodels_service__["b" /* ViewModel */](this.viewModel.name, this.viewModel.domain, "vm" + this.viewModelsService.getNonce());
        viewModelCopy.deSerialize(this.viewModel.serialize());
        var exportData = new __WEBPACK_IMPORTED_MODULE_3__exporter_exporter_component__["a" /* ExportData */](viewModelCopy, JSON.parse(JSON.stringify(this.tactics)), this.dataService.tacticNames(this.filteredTechniques), JSON.parse(JSON.stringify(this.filteredTechniques)));
        this.tabs.newExporterTab(exportData);
    };
    DataTableComponent.prototype.noncetest = function () {
        console.log(this.viewModelsService.getNonce());
    };
    return DataTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__viewmodels_service__["b" /* ViewModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__viewmodels_service__["b" /* ViewModel */]) === "function" && _a || Object)
], DataTableComponent.prototype, "viewModel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousemove', ['$event']),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseout', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DataTableComponent.prototype, "onMouseMove", null);
DataTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'DataTable',
        template: __webpack_require__("./src/app/datatable/data-table.component.html"),
        styles: [__webpack_require__("./src/app/datatable/data-table.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__tabs_tabs_component__["a" /* TabsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__tabs_tabs_component__["a" /* TabsComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__viewmodels_service__["c" /* ViewModelsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__viewmodels_service__["c" /* ViewModelsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _f || Object])
], DataTableComponent);

var SecurityInstance = (function () {
    function SecurityInstance(name, type, id, url) {
        this.name = name;
        this.type = type;
        this.id = id;
        this.techniques = [];
        this.url = url;
    }
    return SecurityInstance;
}());
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=data-table.component.js.map

/***/ }),

/***/ "./src/app/exporter/exporter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controlsContainer\">\n    <ul class=\"control-sections\">\n        <li>\n            <div class=\"control-row-item noselect\">\n                <!-- {{exportData.tableConfig.unit}} -->\n                <div class=\"control-row-button\"\n                     (click)=\"unitEnum = (unitEnum + 1) % 3; exportData.tableConfig.unit = ['in', 'cm', 'px'][unitEnum]; buildSVG()\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"toggle measurement unit\">\n                    <svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <text x=\"4px\" y=\"50%\" dominant-baseline=\"middle\" style=\"font-size: 14px; font-weight: bold; font-family:monospace\">{{exportData.tableConfig.unit}}</text>\n                    </svg>\n                </div>\n            </div>\n\n        </li>\n        <li>\n            <div class=\"control-row-item\">\n                <div class=\"control-row-button dropdown noselect\"\n                     (click)=\"currentDropdown = currentDropdown !== 'imgsize' ? 'imgsize' : null;\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"image size\">\n                    <img src=\"assets/icons/ic_photo_size_select_large_black_24px.svg\"/>\n                </div>\n                <div class=\"dropdown-container size\" *ngIf=\"currentDropdown === 'imgsize'\" #dropdown [class.left]=\"checkalign(dropdown)\">\n                    <ul>\n                        <li>\n                            <mat-form-field>\n                                <input matInput\n                                       class=\"has-suffix\"\n                                       type=\"number\"\n                                       placeholder=\"width\"\n                                       step=\"0.01\"\n                                       [(ngModel)]=\"exportData.tableConfig.width\"\n                                       (input)=\"buildSVG()\" />\n                                <span matSuffix>{{exportData.tableConfig.unit}}</span>\n                            </mat-form-field>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <input matInput\n                                       class=\"has-suffix\"\n                                       type=\"number\"\n                                       placeholder=\"height\"\n                                       step=\"0.01\"\n                                       [(ngModel)]=\"exportData.tableConfig.height\"\n                                       (input)=\"buildSVG()\" />\n                                <span matSuffix>{{exportData.tableConfig.unit}}</span>\n                            </mat-form-field>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <input matInput\n                                       class=\"has-suffix\"\n                                       type=\"number\"\n                                       placeholder=\"header height\"\n                                       step=\"0.01\"\n                                       [disabled]=\"!exportData.tableConfig.showHeader\"\n                                       [(ngModel)]=\"exportData.tableConfig.headerHeight\"\n                                       (input)=\"buildSVG()\" />\n                                <span matSuffix  [style.color]=\"!exportData.tableConfig.showHeader ? 'rgba(0,0,0,0.42)' : 'black'\">{{exportData.tableConfig.unit}}</span>\n                            </mat-form-field>\n                        </li>\n                        <!-- <li>\n                            <mat-form-field>\n                                <mat-select placeholder=\"measurement unit\" [(ngModel)]=\"exportData.tableConfig.unit\" (change)=\"buildSVG()\">\n                                    <mat-option value=\"px\">pixels</mat-option>\n                                    <mat-option value=\"in\">inches</mat-option>\n                                    <mat-option value=\"cm\">centimeters</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </li> -->\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"control-row-item\">\n                <div class=\"control-row-button dropdown noselect\"\n                     (click)=\"currentDropdown = currentDropdown !== 'font' ? 'font' : null;\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"text\">\n                    <img src=\"assets/icons/ic_format_size_black_24px.svg\"/>\n                </div>\n                <div class=\"dropdown-container font\" *ngIf=\"currentDropdown === 'font'\" #dropdown [class.left]=\"checkalign(dropdown)\">\n                    <ul>\n                        <li>\n                            <mat-form-field>\n                                <input matInput\n                                       class=\"has-suffix\"\n                                       type=\"number\"\n                                       placeholder=\"title font size\"\n                                       step=\"1\"\n                                       [disabled]=\"!showName()\"\n                                       [(ngModel)]=\"exportData.tableConfig.headerLayerNameFontSize\"\n                                       (input)=\"buildSVG()\" />\n                                <span matSuffix [style.color]=\"!showName() ? 'rgba(0,0,0,0.42)' : 'black'\">{{exportData.tableConfig.fontUnit}}</span>\n                            </mat-form-field>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <input matInput\n                                       class=\"has-suffix\"\n                                       type=\"number\"\n                                       placeholder=\"font size in header\"\n                                       step=\"1\"\n                                       [disabled]=\"!exportData.tableConfig.showHeader\"\n                                       [(ngModel)]=\"exportData.tableConfig.headerFontSize\"\n                                       (input)=\"buildSVG()\" />\n                                <span matSuffix [style.color]=\"!exportData.tableConfig.showHeader ? 'rgba(0,0,0,0.42)' : 'black'\">{{exportData.tableConfig.fontUnit}}</span>\n                            </mat-form-field>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <input matInput\n                                       class=\"has-suffix\"\n                                       type=\"number\"\n                                       placeholder=\"tactic header font size\"\n                                       step=\"1\"\n                                       [(ngModel)]=\"exportData.tableConfig.tableTacticFontSize\"\n                                       (input)=\"buildSVG()\" />\n                                <span matSuffix>{{exportData.tableConfig.fontUnit}}</span>\n                            </mat-form-field>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <input matInput\n                                       class=\"has-suffix\"\n                                       type=\"number\"\n                                       placeholder=\"technique font size\"\n                                       step=\"1\"\n                                       [disabled]=\"exportData.tableConfig.tableTextDisplay === 'none'\"\n                                       [(ngModel)]=\"exportData.tableConfig.tableFontSize\"\n                                       (input)=\"buildSVG()\" />\n                                       <span matSuffix [style.color]=\"exportData.tableConfig.tableTextDisplay === 'none' ? 'rgba(0,0,0,0.42)' : 'black'\">{{exportData.tableConfig.fontUnit}}</span>\n                            </mat-form-field>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <mat-select placeholder=\"font size unit\" [(ngModel)]=\"exportData.tableConfig.fontUnit\" (change)=\"buildSVG()\">\n                                    <mat-option value=\"pt\">points</mat-option>\n                                    <mat-option value=\"px\">pixels</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <mat-select placeholder=\"font\" [(ngModel)]=\"exportData.tableConfig.font\" (change)=\"buildSVG()\">\n                                    <mat-option value=\"serif\">serif</mat-option>\n                                    <mat-option value=\"sans-serif\">sans-serif</mat-option>\n                                    <mat-option value=\"monospace\">monospace</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <mat-select placeholder=\"technique text\" [(ngModel)]=\"exportData.tableConfig.tableTextDisplay\" (change)=\"buildSVG()\">\n                                    <mat-option value=\"0\">no text</mat-option>\n                                    <mat-option value=\"1\">technique name</mat-option>\n                                    <mat-option value=\"2\">technique name (acronym)</mat-option>\n                                    <mat-option value=\"3\">technique ID</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"control-row-item\">\n                <div class=\"control-row-button dropdown noselect\"\n                     (click)=\"showLegend()? currentDropdown = currentDropdown !== 'legend' ? 'legend' : null : continue;\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"legend\"\n                     [style.color]=\"showLegend() ? '#000000' : '#aaaaaa'\">\n                    <img [src]=\"showLegend()? 'assets/icons/ic_view_list_black_24px.svg' : 'assets/icons/ic_view_list_grey_24px.svg'\"/>\n                </div>\n                <div class=\"dropdown-container legend\" *ngIf=\"currentDropdown === 'legend'\" #dropdown [class.left]=\"checkalign(dropdown)\">\n                    <ul>\n                        <li>\n                            <input [id]=\"uid + 'legendDockedCheckbox'\"type=\"checkbox\" class=\"checkbox-custom\" [(ngModel)]=\"exportData.tableConfig.legendDocked\" (change)=\"buildSVG()\">\n                            <label [for]=\"uid + 'legendDockedCheckbox'\" class=\"checkbox-custom-label noselect\">\n                                dock legend in header\n                            </label>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <input matInput\n                                       class=\"has-suffix\"\n                                       type=\"number\"\n                                       placeholder=\"legend X position\"\n                                       [disabled]=\"exportData.tableConfig.legendDocked\"\n                                       step=\"1\"\n                                       [(ngModel)]=\"exportData.tableConfig.legendX\"\n                                       (input)=\"buildSVG()\" />\n                                <span [style.color]=\"exportData.tableConfig.legendDocked ? 'rgba(0,0,0,0.42)' : 'black'\" matSuffix>{{exportData.tableConfig.unit}}</span>\n                            </mat-form-field>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <input matInput\n                                       class=\"has-suffix\"\n                                       type=\"number\"\n                                       placeholder=\"legend Y position\"\n                                       [disabled]=\"exportData.tableConfig.legendDocked\"\n                                       step=\"1\"\n                                       [(ngModel)]=\"exportData.tableConfig.legendY\"\n                                       (input)=\"buildSVG()\" />\n                                <span [style.color]=\"exportData.tableConfig.legendDocked ? 'rgba(0,0,0,0.42)' : 'black'\" matSuffix>{{exportData.tableConfig.unit}}</span>\n                            </mat-form-field>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <input matInput\n                                       class=\"has-suffix\"\n                                       type=\"number\"\n                                       placeholder=\"legend width\"\n                                       [disabled]=\"exportData.tableConfig.legendDocked\"\n                                       step=\"1\"\n                                       [(ngModel)]=\"exportData.tableConfig.legendWidth\"\n                                       (input)=\"buildSVG()\" />\n                                <span [style.color]=\"exportData.tableConfig.legendDocked ? 'rgba(0,0,0,0.42)' : 'black'\" matSuffix>{{exportData.tableConfig.unit}}</span>\n                            </mat-form-field>\n                        </li>\n                        <li>\n                            <mat-form-field>\n                                <input matInput\n                                       class=\"has-suffix\"\n                                       type=\"number\"\n                                       placeholder=\"legend height\"\n                                       [disabled]=\"exportData.tableConfig.legendDocked\"\n                                       step=\"1\"\n                                       [(ngModel)]=\"exportData.tableConfig.legendHeight\"\n                                       (input)=\"buildSVG()\" />\n                                <span [style.color]=\"exportData.tableConfig.legendDocked ? 'rgba(0,0,0,0.42)' : 'black'\" matSuffix>{{exportData.tableConfig.unit}}</span>\n                            </mat-form-field>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"control-row-item\">\n                <div class=\"control-row-button dropdown noselect\"\n                     (click)=\"currentDropdown = currentDropdown !== 'visibility' ? 'visibility' : null;\"\n                     matTooltipPosition=\"below\"\n                     matTooltip=\"display settings\">\n                    <img src=\"assets/icons/ic_visibility_black_24px.svg\"/>\n                </div>\n                <div class=\"dropdown-container visibility\" *ngIf=\"currentDropdown === 'visibility'\" #dropdown [class.left]=\"checkalign(dropdown)\">\n                    <ul>\n                        <li>\n                            <input [id]=\"uid+'checkboxheader'\" type=\"checkbox\" class=\"checkbox-custom\" [(ngModel)]=\"exportData.tableConfig.showHeader\" (change)=\"buildSVG()\">\n                            <label [for]=\"uid+'checkboxheader'\" class=\"checkbox-custom-label noselect\">show header</label>\n                        </li>\n                        <li>\n                            <input [id]=\"uid+'checkboxname'\" type=\"checkbox\" [disabled]=\"!hasName() || !exportData.tableConfig.showHeader\" class=\"checkbox-custom\" [(ngModel)]=\"exportData.tableConfig.showName\" (change)=\"buildSVG()\">\n                            <label [for]=\"uid+'checkboxname'\" class=\"checkbox-custom-label noselect\" [class.disabled]=\"!hasName() || !exportData.tableConfig.showHeader\">show title</label>\n                        </li>\n                        <li>\n                            <input [id]=\"uid+'checkboxdescription'\" type=\"checkbox\" [disabled]=\"!hasDescription() || !exportData.tableConfig.showHeader\" class=\"checkbox-custom\" [(ngModel)]=\"exportData.tableConfig.showDescription\" (change)=\"buildSVG()\">\n                            <label [for]=\"uid+'checkboxdescription'\" class=\"checkbox-custom-label noselect\" [class.disabled]=\"!hasDescription() || !exportData.tableConfig.showHeader\">show description</label>\n                        </li>\n                        <li>\n                            <input [id]=\"uid+'checkboxfilters'\" type=\"checkbox\" class=\"checkbox-custom\" [disabled]=\"!exportData.tableConfig.showHeader\"[(ngModel)]=\"exportData.tableConfig.showFilters\" (change)=\"buildSVG()\">\n                            <label [for]=\"uid+'checkboxfilters'\" class=\"checkbox-custom-label noselect\" [class.disabled]=\"!exportData.tableConfig.showHeader\">show filters</label>\n                        </li>\n                        <li>\n                            <input [id]=\"uid+'checkboxgradient'\" type=\"checkbox\" [disabled]=\"!hasScores || !exportData.tableConfig.showHeader\" class=\"checkbox-custom\" [(ngModel)]=\"exportData.tableConfig.showGradient\" (change)=\"buildSVG()\">\n                            <label [for]=\"uid+'checkboxgradient'\" class=\"checkbox-custom-label noselect\" [class.disabled]=\"!hasScores || !exportData.tableConfig.showHeader\">show score gradient</label>\n                        </li>\n                        <li>\n                            <input [id]=\"uid+'checkboxlegend'\" type=\"checkbox\" [disabled]=\"!hasLegendItems()\" class=\"checkbox-custom\" [(ngModel)]=\"exportData.tableConfig.showLegend\" (change)=\"buildSVG()\">\n                            <label [for]=\"uid+'checkboxlegend'\" class=\"checkbox-custom-label noselect\" [class.disabled]=\"!hasLegendItems()\" >show legend</label>\n                        </li>\n                        <li>\n                            <input [id]=\"uid+'tableBorderInput'\" class=\"colorpicker\" [(colorPicker)]=\"exportData.tableConfig.tableBorderColor\" [style.background]=\"exportData.tableConfig.tableBorderColor\" cpPosition=\"bottom\" [cpPresetColors]=\"['#ddd', '#aaaaaa', '#205B8F', '#B9482D', '#ffffff', '#000000']\"\n                             (colorPickerSelect)=\"buildSVG()\" [cpOKButton]=\"true\" [cpOKButtonText]=\"'apply'\" [cpCancelButton]=\"true\" style=\"width: 14px; margin: 5px 0 0 5px;\">\n                             <label [for]=\"uid+'tableBorderInput'\" class=\"noselect\">cell border</label>\n\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"control-row-item\">\n                <div class=\"control-row-button noselect\"\n                [id]=\"'download-button' + exportData.viewModel.uid\"\n                    (click)=\"downloadSVG()\"\n                    matTooltipPosition=\"below\"\n                    matTooltip=\"download SVG\">\n                    <img src=\"assets/icons/ic_file_download_black_24px.svg\" alt=\"save layer\"/>\n                </div>\n            </div>\n\n        </li>\n    </ul>\n<!-- <ul>\n    <li *ngFor=\"let configItem of getKeys(exportData.tableConfig)\">\n        {{configItem}}:\n        <select *ngIf=\"configItem === 'unit'\" [(ngModel)]=\"exportData.tableConfig[configItem]\" (change)=\"buildSVG()\">\n            <option value=\"px\">px</option>\n            <option value=\"in\">in</option>\n            <option value=\"cm\">cm</option>\n        </select>\n        <select *ngIf=\"configItem === 'tableTextDisplay'\" [(ngModel)]=\"exportData.tableConfig[configItem]\" (change)=\"buildSVG()\">\n            <option value=\"none\">No Text</option>\n            <option value=\"name\">Technique Name</option>\n            <option value=\"id\">Technique ID</option>\n        </select>\n        <select *ngIf=\"configItem === 'font'\" [(ngModel)]=\"exportData.tableConfig[configItem]\" (change)=\"buildSVG()\">\n            <option value=\"serif\">serif</option>\n            <option value=\"sans-serif\">sans-serif</option>\n            <option value=\"monospace\">monospace</option>\n        </select>\n\n        <input *ngIf=\"type(exportData.tableConfig[configItem]) == 'number'\" type=\"number\" [(ngModel)]=exportData.tableConfig[configItem] (input)=\"buildSVG()\">\n        <input *ngIf=\"type(exportData.tableConfig[configItem]) == 'boolean'\" type=\"checkbox\" [(ngModel)]=exportData.tableConfig[configItem] (change)=\"buildSVG()\">\n\n    </li>\n</ul> -->\n\n\n</div>\n\n<div class=\"svgcontainer\" [id]=\"'svgInsert' + exportData.viewModel.uid\">\n    loading...\n</div>\n"

/***/ }),

/***/ "./src/app/exporter/exporter.component.scss":
/***/ (function(module, exports) {

module.exports = ".svgcontainer {\n  overflow-x: auto; }\n\n.dropdown-container {\n  padding: 10px; }\n\n.dropdown-container ul {\n    padding-left: 0; }\n\n.dropdown-container ul li {\n      list-style: none;\n      text-align: left; }\n\n.dropdown-container ul li input.has-suffix {\n        text-align: right;\n        -moz-appearance: textfield; }\n\n.dropdown-container ul li input.has-suffix::-webkit-inner-spin-button, .dropdown-container ul li input.has-suffix::-webkit-outer-spin-button {\n          display: none; }\n"

/***/ }),

/***/ "./src/app/exporter/exporter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExporterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("./src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_js__ = __webpack_require__("./node_modules/is_js/is.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_is_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExporterComponent = (function () {
    function ExporterComponent(configService) {
        this.configService = configService;
        this.svgDivName = "svgInsert_tmp";
        this.unitEnum = 0; //counter for unit change ui element
        this.buildSVGDebounce = false;
    }
    ExporterComponent.prototype.ngAfterViewInit = function () {
        this.svgDivName = "svgInsert" + this.exportData.viewModel.uid;
        var self = this;
        this.exportData.filteredTechniques.forEach(function (technique) {
            if (self.exportData.viewModel.hasTechniqueVM(technique.technique_tactic_union_id)) {
                if (self.exportData.viewModel.getTechniqueVM(technique.technique_tactic_union_id).score != "")
                    self.hasScores = true;
            }
        });
        //put at the end of the function queue so that the page can render before building the svg
        window.setTimeout(function () { self.buildSVG(self); }, 0);
    };
    //visibility of SVG parts
    //assess data in viewModel
    ExporterComponent.prototype.hasName = function () { return this.exportData.viewModel.name.length > 0; };
    ExporterComponent.prototype.hasDescription = function () { return this.exportData.viewModel.description.length > 0; };
    ExporterComponent.prototype.hasLegendItems = function () { return this.exportData.viewModel.legendItems.length > 0; };
    //above && user preferences
    ExporterComponent.prototype.showName = function () { return this.exportData.tableConfig.showName && this.hasName() && this.exportData.tableConfig.showHeader; };
    ExporterComponent.prototype.showDescription = function () { return this.exportData.tableConfig.showDescription && this.hasDescription() && this.exportData.tableConfig.showHeader; };
    ExporterComponent.prototype.showLayerInfo = function () { return (this.showName() || this.showDescription()) && this.exportData.tableConfig.showHeader; };
    ExporterComponent.prototype.showFilters = function () { return this.exportData.tableConfig.showFilters && this.exportData.tableConfig.showHeader; };
    ;
    ExporterComponent.prototype.showGradient = function () { return this.exportData.tableConfig.showGradient && this.hasScores && this.exportData.tableConfig.showHeader; };
    ExporterComponent.prototype.showLegend = function () { return this.exportData.tableConfig.showLegend && this.hasLegendItems(); };
    ExporterComponent.prototype.showLegendInHeader = function () { return this.exportData.tableConfig.legendDocked && this.showLegend(); };
    ExporterComponent.prototype.buildSVG = function (self, bypassDebounce) {
        if (bypassDebounce === void 0) { bypassDebounce = false; }
        if (!self)
            self = this; //in case we were called from somewhere other than ngViewInit
        console.log("settings changed");
        if (self.buildSVGDebounce && !bypassDebounce) {
            // console.log("skipping debounce...")
            return;
        }
        if (!bypassDebounce) {
            // console.log("debouncing...");
            self.buildSVGDebounce = true;
            window.setTimeout(function () { self.buildSVG(self, true); }, 500);
            return;
        }
        self.buildSVGDebounce = false;
        console.log("building SVG");
        //check preconditions, make sure they're in the right range
        var margin = { top: 5, right: 5, bottom: 5, left: 5 };
        var width = Math.max(self.convertToPx(self.exportData.tableConfig.width, self.exportData.tableConfig.unit) - (margin.right + margin.left), 10);
        console.log("width", width);
        var height = Math.max(self.convertToPx(self.exportData.tableConfig.height, self.exportData.tableConfig.unit) - (margin.top + margin.bottom), 10);
        console.log("height", height);
        var headerHeight = Math.max(self.convertToPx(self.exportData.tableConfig.headerHeight, self.exportData.tableConfig.unit), 1);
        console.log("headerHeight", headerHeight);
        var legendX = Math.max(self.convertToPx(self.exportData.tableConfig.legendX, self.exportData.tableConfig.unit), 0);
        var legendY = Math.max(self.convertToPx(self.exportData.tableConfig.legendY, self.exportData.tableConfig.unit), 0);
        var legendWidth = Math.max(self.convertToPx(self.exportData.tableConfig.legendWidth, self.exportData.tableConfig.unit), 10);
        var legendHeight = Math.max(self.convertToPx(self.exportData.tableConfig.legendHeight, self.exportData.tableConfig.unit), 10);
        var tableFontSize = Math.max(self.exportData.tableConfig.tableFontSize, 1);
        console.log('tableFontSize', tableFontSize);
        var tableTextYOffset = ((tableFontSize / 2) - (1 / 2));
        var tableTacticFontSize = Math.max(self.exportData.tableConfig.tableTacticFontSize, 1);
        console.log("tableTacticFontSize", tableTacticFontSize);
        var tableTacticTextYOffset = ((tableTacticFontSize / 2) - (1 / 2));
        var headerFontSize = Math.max(self.exportData.tableConfig.headerFontSize, 1);
        console.log("headerFontSize", headerFontSize);
        var headerTextYOffset = ((headerFontSize / 2) - (1 / 2));
        var headerLayerNameFontSize = Math.max(self.exportData.tableConfig.headerLayerNameFontSize, 1);
        console.log("headerLayerNameFontSize", headerLayerNameFontSize);
        var heafderLayerNameTextYOffset = ((headerLayerNameFontSize / 2) - (1 / 2));
        var fontUnits = self.exportData.tableConfig.fontUnit;
        var headerTextPad = 6;
        var bodyTextPad = 3;
        //remove previous graphic
        var element = document.getElementById(self.svgDivName);
        element.innerHTML = "";
        var svg = d3.select("#" + self.svgDivName).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("id", "svg" + self.exportData.viewModel.uid) //Tag for downloadSVG
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .style("font-family", self.exportData.tableConfig.font);
        var stroke_width = 1;
        //  _  _ ___   _   ___  ___ ___
        // | || | __| /_\ |   \| __| _ \
        // | __ | _| / _ \| |) | _||   /
        // |_||_|___/_/ \_\___/|___|_|_\
        //count columns
        var numSections = 0;
        for (var i = 0; i < 4; i++) {
            var option = [self.showLayerInfo(), self.showFilters(), self.showGradient(), self.showLegendInHeader()][i];
            if (option)
                numSections++;
        }
        var headerSectionWidth = width / numSections;
        // console.log(numSections, headerSectionWidth)
        var header = null;
        var posX = 0; //row in the header
        var headerSectionTitleSep = (2 * (headerFontSize + headerTextPad));
        if (self.exportData.tableConfig.showHeader) {
            header = svg.append("g");
            header.append("rect")
                .attr("width", width)
                .attr("height", headerHeight)
                .style("stroke", "black")
                .style("stroke-width", stroke_width)
                .style("fill", "white");
            // layer name
            if (self.showLayerInfo()) {
                var layerAndDescPresent = (self.showName() && self.showDescription());
                var nameDescHeight = layerAndDescPresent ? headerHeight / 2 : headerHeight;
                var descY = layerAndDescPresent ? headerHeight / 2 : 0;
                if (self.showName()) {
                    var titleGroup = header.append("g")
                        .attr("transform", "translate(0,0)");
                    titleGroup.append("rect")
                        .attr("width", headerSectionWidth)
                        .attr("height", nameDescHeight)
                        .style("stroke-width", 1)
                        .style("stroke", "black")
                        .style("fill", "white");
                    titleGroup.append("text")
                        .text(self.exportData.viewModel.name)
                        .attr("transform", "translate(" + headerTextPad + ", " + (headerLayerNameFontSize + headerTextPad) + ")")
                        .attr("dx", 0)
                        .attr("dy", 0)
                        .attr("font-size", headerLayerNameFontSize + fontUnits)
                        .attr("fill", "black")
                        .style("font-weight", "bold")
                        .call(self.wrap, (headerSectionWidth) - 4, nameDescHeight, self);
                }
                if (self.showDescription()) {
                    var descriptionGroup = header.append("g")
                        .attr("transform", "translate(0," + descY + ")");
                    descriptionGroup.append("rect")
                        .attr("width", headerSectionWidth)
                        .attr("height", nameDescHeight)
                        .style("stroke-width", 1)
                        .style("stroke", "black")
                        .style("fill", "white");
                    descriptionGroup.append("text")
                        .text(self.exportData.viewModel.description)
                        .attr("transform", "translate(" + headerTextPad + ", " + (headerTextPad + headerTextYOffset) + ")")
                        .attr("dx", 0)
                        .attr("dy", 0)
                        .attr("font-size", headerFontSize + fontUnits)
                        .attr("fill", "black")
                        .call(self.wrap, (headerSectionWidth) - 4, nameDescHeight, self)
                        .call(self.recenter, nameDescHeight - (2 * headerTextPad), self);
                }
                posX++;
            }
            if (self.showFilters()) {
                //filters
                var filtersGroup = header.append("g")
                    .attr("transform", "translate(" + (headerSectionWidth * posX) + ", 0)");
                filtersGroup.append("rect")
                    .attr("width", headerSectionWidth)
                    .attr("height", headerHeight)
                    .style("stroke-width", 1)
                    .style("stroke", "black")
                    .style("fill", "white");
                filtersGroup.append("text")
                    .text("filters")
                    .attr("transform", "translate(" + headerTextPad + ", " + (headerFontSize + headerTextPad) + ")")
                    .attr("dx", 0)
                    .attr("dy", 0)
                    .attr("font-size", headerFontSize + fontUnits)
                    .attr("fill", "black")
                    .style("font-weight", "bold");
                var filterTextGroup = filtersGroup.append("g")
                    .attr("transform", "translate(" + headerTextPad + "," + (headerSectionTitleSep + 6 + headerTextYOffset) + ")");
                filterTextGroup.append("text")
                    .text(function () {
                    var t = "stages: ";
                    var selection = self.exportData.viewModel.filters.stages.selection;
                    for (var i = 0; i < selection.length; i++) {
                        if (i != 0)
                            t += ", ";
                        t += selection[i];
                    }
                    return t;
                })
                    .attr("font-size", headerFontSize + fontUnits);
                // .attr("dominant-baseline", "middle");
                filterTextGroup.append("text")
                    .text(function () {
                    var t = "platforms: ";
                    var selection = self.exportData.viewModel.filters.platforms.selection;
                    for (var i = 0; i < selection.length; i++) {
                        if (i != 0)
                            t += ", ";
                        t += selection[i];
                    }
                    return t;
                })
                    .attr("font-size", headerFontSize + fontUnits)
                    .attr("dy", "1.1em");
                // .attr("transform", "translate(0, " +(headerFontSize + textPad) + ")");
                posX++;
            }
            if (self.showGradient()) {
                //gradient
                var gradientGroup = header.append("g")
                    .attr("transform", "translate(" + (headerSectionWidth * posX) + ",0)");
                gradientGroup.append("rect")
                    .attr("width", headerSectionWidth)
                    .attr("height", headerHeight)
                    .style("stroke-width", 1)
                    .style("stroke", "black")
                    .style("fill", "white");
                gradientGroup.append("text")
                    .text("score gradient")
                    .attr("transform", "translate(" + headerTextPad + ", " + (headerFontSize + headerTextPad) + ")")
                    .attr("dx", 0)
                    .attr("dy", 0)
                    .attr("font-size", headerFontSize + fontUnits)
                    .attr("fill", "black")
                    .style("font-weight", "bold");
                posX++;
                var gradientContentGroup = gradientGroup.append("g")
                    .attr("transform", "translate(" + headerTextPad + "," + headerSectionTitleSep + ")");
                var leftText = gradientContentGroup.append("text")
                    .text(self.exportData.viewModel.gradient.minValue)
                    .attr("transform", "translate(0, " + (6 + headerTextYOffset) + ")")
                    .attr("font-size", headerFontSize + fontUnits);
                // .attr("dominant-baseline", "middle")
                //set up gradient to bind
                var svgDefs = svg.append('defs');
                var gradientElement = svgDefs.append("linearGradient")
                    .attr("id", self.exportData.viewModel.uid + "gradientElement");
                for (var i = 0; i < self.exportData.viewModel.gradient.gradientRGB.length; i++) {
                    var color = self.exportData.viewModel.gradient.gradientRGB[i];
                    gradientElement.append('stop')
                        .attr('offset', i / 100)
                        .attr("stop-color", color.toHexString());
                    // console.log(color)
                }
                // console.log(gradientElement);
                var gradientDisplayLeft = (leftText.node().getComputedTextLength()) + 2;
                var gradientDisplay = gradientContentGroup.append("rect")
                    .attr("transform", "translate(" + gradientDisplayLeft + ", 0)")
                    .attr("width", 50)
                    .attr("height", 10)
                    .style("stroke-width", 1)
                    .style("stroke", "black")
                    .attr("fill", "url(#" + self.exportData.viewModel.uid + "gradientElement)"); //bind gradient
                gradientContentGroup.append("text")
                    .text(self.exportData.viewModel.gradient.maxValue)
                    .attr("transform", "translate(" + (gradientDisplayLeft + 50 + 2) + ", " + (6 + headerTextYOffset) + ")")
                    .attr("font-size", headerFontSize + fontUnits);
                // .attr("dominant-baseline", "middle")
            }
            header.append("line")
                .attr("x1", 0)
                .attr("x2", width)
                .attr("y1", headerHeight)
                .attr("y2", headerHeight)
                .style("stroke", "black")
                .style("stroke-width", 3);
        }
        else {
            headerHeight = 0;
        }
        //  _____ _   ___ _    ___   ___  ___  _____   __
        // |_   _/_\ | _ ) |  | __| | _ )/ _ \|   \ \ / /
        //   | |/ _ \| _ \ |__| _|  | _ \ (_) | |) \ V /
        //   |_/_/ \_\___/____|___| |___/\___/|___/ |_|
        var tablebody = svg.append("g")
            .attr("transform", "translate(0," + (headerHeight + 1) + ")");
        //calculate cell height: the longest column decides the cell height
        var cellHeight = Number.MAX_VALUE; //Number.MAX_VALUE; //(height - margin.bottom - headerHeight)
        Object.keys(self.exportData.tactics).forEach(function (key) {
            var numVCells = (self.exportData.tactics[key].length) + 2; //extra two cells for the header
            var selfCellHeight = (height - (headerHeight + 1)) / numVCells;
            cellHeight = Math.min(cellHeight, selfCellHeight);
        });
        cellHeight = Math.max(cellHeight, 1); //must be positive number
        // columns
        var columnWidth = (width) / (self.exportData.orderedTactics.length);
        var columns = tablebody.selectAll("g")
            .data(self.exportData.orderedTactics).enter()
            .append("g")
            .attr("transform", function (d, i) {
            // console.log(d,i)
            return "translate(" + columnWidth * i + ", 0)";
        });
        // split columns into headers and bodies
        var showItemCount = self.exportData.tableConfig.tableTextDisplay != 0;
        var colHeaderHeight = showItemCount ? 2 * cellHeight : cellHeight;
        var columnHeaders = columns.append("g")
            .attr("transform", "translate(0,0)");
        columnHeaders.append("rect")
            .attr("width", columnWidth)
            .attr("height", colHeaderHeight)
            .style("stroke", self.exportData.tableConfig.tableBorderColor)
            .style("fill", self.exportData.viewModel.showTacticRowBackground ? self.exportData.viewModel.tacticRowBackground : 'white');
        columnHeaders.append("text")
            .text(function (d) { return self.exportData.tableConfig.tableTextDisplay != 2 ? self.toCamelCase(d.replace(/-/g, " ")) : self.exportData.viewModel.acronym(d.replace(/-/g, " ")); })
            .attr("font-size", tableTacticFontSize + fontUnits)
            .attr("transform", "translate(" + bodyTextPad + ", " + ((self.getSpacing(colHeaderHeight, showItemCount ? 2 : 1)[0]) + tableTacticTextYOffset) + ")")
            .style("fill", self.exportData.viewModel.showTacticRowBackground ? tinycolor.mostReadable(self.exportData.viewModel.tacticRowBackground, ['white', 'black']) : 'black')
            .attr("dx", 0)
            .attr("dy", 0)
            .style("font-weight", "bold")
            .call(self.wrap, columnWidth - 2 - bodyTextPad, cellHeight - 2, self);
        if (showItemCount)
            columnHeaders.append("text")
                .text(function (d) {
                return self.exportData.tableConfig.tableTextDisplay != 2 ? self.exportData.tactics[d].length + " items" : self.exportData.tactics[d].length;
            })
                .attr("font-size", tableTacticFontSize + fontUnits)
                .attr("transform", "translate(" + bodyTextPad + ", " + ((self.getSpacing(colHeaderHeight, 2)[1]) + tableTacticTextYOffset) + ")")
                .style("fill", self.exportData.viewModel.showTacticRowBackground ? tinycolor.mostReadable(self.exportData.viewModel.tacticRowBackground, ['white', 'black']) : 'black')
                .attr("dx", 0)
                .attr("dy", 0)
                .call(self.wrap, columnWidth - bodyTextPad, cellHeight, self);
        //column body
        var columnBodies = columns.append("g")
            .attr("transform", "translate(0," + colHeaderHeight + ")");
        var techniques = columnBodies.selectAll("g")
            .data(function (d) {
            // console.log(d)
            return self.exportData.tactics[d];
        }).enter().append("g")
            .attr("transform", function (d, i) {
            return "translate(0," + i * cellHeight + ")";
        });
        techniques.append("rect")
            .attr("width", columnWidth)
            .attr("height", cellHeight)
            .style("stroke", self.exportData.tableConfig.tableBorderColor)
            .style("fill", function (d) {
            if (!self.exportData.viewModel.hasTechniqueVM(d.technique_tactic_union_id))
                return "white";
            var tvm = self.exportData.viewModel.getTechniqueVM(d.technique_tactic_union_id);
            if (tvm.color)
                return tvm.color;
            else if (tvm.score)
                return tvm.scoreColor;
            else
                return "white";
        });
        if (self.exportData.tableConfig.tableTextDisplay != "none")
            techniques.append("text")
                .text(function (d) {
                return ['', d.name, self.exportData.viewModel.acronym(d.name), d.technique_id][self.exportData.tableConfig.tableTextDisplay];
            })
                .style("fill", function (d) {
                if (!self.exportData.viewModel.hasTechniqueVM(d.technique_tactic_union_id))
                    return "black";
                var tvm = self.exportData.viewModel.getTechniqueVM(d.technique_tactic_union_id);
                if (tvm.color)
                    return tinycolor.mostReadable(tvm.color, ['white', 'black']);
                if (tvm.score)
                    return tinycolor.mostReadable(tvm.scoreColor, ['white', 'black']);
            })
                .attr("font-size", tableFontSize + fontUnits)
                .attr("transform", "translate(" + bodyTextPad + ", " + tableTextYOffset + ")")
                .attr("dx", 0)
                .attr("dy", 0)
                .call(self.wrap, columnWidth - (2 * bodyTextPad), cellHeight, self) //do this before recenter
                .call(self.recenter, cellHeight, self); //fix the tspan children's y locations. MUST CALL AFTER WRAP
        //  _    ___ ___ ___ _  _ ___
        // | |  | __/ __| __| \| |   \
        // | |__| _| (_ | _|| .` | |) |
        // |____|___\___|___|_|\_|___/
        // console.log(showLegend, showLegendInHeader && self.exportData.tableConfig.legendDocked)
        if (self.showLegend() && !(!self.exportData.tableConfig.showHeader && self.exportData.tableConfig.legendDocked)) {
            console.log("building legend");
            //legend
            var legendGroup = self.showLegendInHeader() ? header.append("g")
                .attr("transform", "translate(" + (headerSectionWidth * posX) + ",0)")
                : svg.append("g")
                    .attr("transform", "translate(" + legendX + "," + legendY + ")");
            legendGroup.append("rect")
                .attr("width", self.showLegendInHeader() ? headerSectionWidth : legendWidth)
                .attr("height", self.showLegendInHeader() ? headerHeight : legendHeight)
                .style("stroke-width", 1)
                .style("stroke", "black")
                .style("fill", "white");
            legendGroup.append("text")
                .text("legend")
                .attr("transform", "translate(" + headerTextPad + ", " + (headerFontSize + headerTextPad) + ")")
                .attr("dx", 0)
                .attr("dy", 0)
                .attr("font-size", headerFontSize + fontUnits)
                .attr("fill", "black")
                .style("font-weight", "bold");
            ;
            var legendItemHeight_1 = self.showLegendInHeader() ? ((headerHeight - headerSectionTitleSep) / self.exportData.viewModel.legendItems.length) : ((legendHeight - headerSectionTitleSep) / self.exportData.viewModel.legendItems.length);
            var legendItemsGroup = legendGroup.selectAll("g")
                .data(self.exportData.viewModel.legendItems)
                .enter().append("g")
                .attr("transform", function (d, i) {
                return "translate(" + headerTextPad + "," + (headerSectionTitleSep + (legendItemHeight_1 * i)) + ")";
            });
            legendItemsGroup.append("text")
                .text(function (d) { return d.label; })
                .attr("transform", "translate(" + (headerTextPad + 10) + "," + (6 + headerTextYOffset) + ")")
                .attr("font-size", headerFontSize + fontUnits)
                .attr("fill", "black")
                .attr("dx", 0)
                .attr("dy", 0)
                .call(self.wrap, (self.showLegendInHeader() ? headerSectionWidth : legendWidth - 14), 0, self);
            legendItemsGroup.append("rect")
                .attr("width", 10)
                .attr("height", 10)
                .style("stroke-width", 1)
                .style("stroke", "black")
                .style("fill", function (d) { return d.color; });
            // posX++
        }
    };
    ExporterComponent.prototype.downloadSVG = function () {
        var svgEl = document.getElementById("svg" + this.exportData.viewModel.uid);
        svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        var svgData = new XMLSerializer().serializeToString(svgEl);
        // // var svgData = svgEl.outerHTML;
        // console.log(svgData)
        // let svgData2 = new XMLSerializer().serializeToString(svgEl);
        // console.log(svgData2)
        var filename = this.exportData.viewModel.name.split(' ').join('_');
        filename = filename.replace(/\W/g, "") + ".svg"; // remove all non alphanumeric characters
        var preface = '<?xml version="1.0" standalone="no"?>\r\n';
        var svgBlob = new Blob([preface, svgData], { type: "image/svg+xml;charset=utf-8" });
        if (__WEBPACK_IMPORTED_MODULE_2_is_js__["ie"]()) {
            window.navigator.msSaveBlob(svgBlob, filename);
        }
        else {
            var svgUrl = URL.createObjectURL(svgBlob);
            var downloadLink = document.createElement("a");
            downloadLink.href = svgUrl;
            downloadLink.download = filename;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    };
    /**
     * Convert any length in various units to pixels
     * @param  quantity what length
     * @param  unit     which unit system (in, cm, px?)
     * @return          that length in pixels
     */
    ExporterComponent.prototype.convertToPx = function (quantity, unit) {
        var factor;
        switch (unit) {
            case "in": {
                factor = 96;
                break;
            }
            case "cm": {
                factor = 3.779375 * 10;
                break;
            }
            case "px": {
                factor = 1;
                break;
            }
            case "em": {
                factor = 16;
                break;
            }
            case "pt": {
                factor = 1.33;
            }
            default: {
                console.error("unknown unit", unit);
                factor = 0;
            }
        }
        return quantity * factor;
    };
    // wrap(text, width, padding) {
    //     var self = d3.select(this),
    //     textLength = self.node().getComputedTextLength(),
    //     text = self.text();
    //     while (textLength > (width - 2 * padding) && text.length > 0) {
    //         text = text.slice(0, -1);
    //         self.text(text + '...');
    //         textLength = self.node().getComputedTextLength();
    //     }
    // }
    /**
     * wrap the given text svg element
     * @param  text       element to wrap
     * @param  width      width to wrap to
     * @param  cellheight stop appending wraps after this height
     * @param  self       reference to self this component because of call context
     */
    ExporterComponent.prototype.wrap = function (text, width, cellheight, self) {
        text.each(function () {
            var text = d3.select(this), words = text.text().split(/\s+/).reverse(), word, line = [], lineHeight = 1.1, // ems
            y = text.attr("y"), dy = parseFloat(text.attr("dy")), tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    var thisdy = lineHeight + dy;
                    // if (self.convertToPx(thisdy, "em") > cellheight) return;
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", thisdy + "em").text(word);
                }
            }
            // console.log(text)
            // text.selectAll("tspan").each(function(d, i, j) {
            //     // console.log(this, i, j.length)
            //     console.log(self.getSpacing(cellheight, j.length)[i])
            //     d3.select(this)
            //         .attr("dy", self.getSpacing(cellheight, j.length)[i])
            //         .attr("dominant-baseline", "middle")
            //
            // })
        });
    };
    /**
     * Recenter the selected element's tspan elements
     * @param  height [description]
     * @param  self   [description]
     */
    ExporterComponent.prototype.recenter = function (text, height, self) {
        text.each(function () {
            text.selectAll('tspan').each(function (d, i, els) {
                var numTSpan = els.length;
                var location = self.getSpacing(height, numTSpan)[i];
                var tspan = d3.select(this)
                    .attr("y", (location))
                    .attr("dy", "0");
            });
        });
    };
    // Capitalizes the first letter of each word in a string
    ExporterComponent.prototype.toCamelCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
    //following two functions are only used for iterating over tableconfig options: remove when tableconfig options are hardcoded in html
    ExporterComponent.prototype.getKeys = function (obj) { return Object.keys(obj); };
    ExporterComponent.prototype.type = function (obj) { return typeof (obj); };
    /**
     * Return whether the given dropdown element would overflow the side of the page if aligned to the right of its anchor
     * @param  dropdown the DOM node of the panel
     * @return          true if it would overflow
     */
    ExporterComponent.prototype.checkalign = function (dropdown) {
        // console.log(anchor)
        var anchor = dropdown.parentNode;
        return anchor.getBoundingClientRect().left + dropdown.getBoundingClientRect().width > document.body.clientWidth;
    };
    /**
     * Divide distance into divisions equidestant anchor points S.T they all have equal
     * padding from each other and the beginning and end of the distance
     * @param  distance  distance to divide
     * @param  divisions number of divisions
     * @return           number[] where each number corresponds to a division-center offset
     */
    ExporterComponent.prototype.getSpacing = function (distance, divisions) {
        distance = distance - 1; //1px padding for border
        var spacing = distance / (divisions * 2);
        var res = [];
        for (var i = 1; i <= divisions * 2; i += 2) {
            res.push(1 + (spacing * i));
        }
        return res;
    };
    return ExporterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", ExportData)
], ExporterComponent.prototype, "exportData", void 0);
ExporterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exporter',
        template: __webpack_require__("./src/app/exporter/exporter.component.html"),
        styles: [__webpack_require__("./src/app/exporter/exporter.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === "function" && _a || Object])
], ExporterComponent);

var ExportData = (function () {
    function ExportData(viewModel, tactics, orderedTactics, filteredTechniques) {
        this.viewModel = viewModel;
        this.tactics = tactics;
        this.filteredTechniques = filteredTechniques;
        this.orderedTactics = orderedTactics;
        var tableTextDisplay = "0";
        switch (this.viewModel.viewMode) {
            case 0: {
                tableTextDisplay = "1";
                break;
            }
            case 1: {
                tableTextDisplay = "2";
                break;
            }
            case 2: {
                tableTextDisplay = "0";
                break;
            }
            default: {
                tableTextDisplay = "1";
            }
        }
        this.tableConfig = {
            "width": 11,
            "height": 8.5,
            "headerHeight": 1,
            "unit": "in",
            "fontUnit": "pt",
            "font": 'sans-serif',
            "tableFontSize": 5,
            "tableTacticFontSize": 6,
            "tableTextDisplay": tableTextDisplay,
            "tableBorderColor": "#000000",
            "showHeader": true,
            "headerLayerNameFontSize": 18,
            "headerFontSize": 12,
            "legendDocked": true,
            "legendX": 0,
            "legendY": 0,
            "legendWidth": 2,
            "legendHeight": 2,
            "showLegend": true,
            "showGradient": true,
            "showFilters": true,
            "showDescription": true,
            "showName": true
        };
    }
    return ExportData;
}());

var _a;
//# sourceMappingURL=exporter.component.js.map

/***/ }),

/***/ "./src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nav_version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return layer_version; });
//   ___ _    ___  ___   _   _     __   ___   ___ ___   _   ___ _    ___ ___
//  / __| |  / _ \| _ ) /_\ | |    \ \ / /_\ | _ \_ _| /_\ | _ ) |  | __/ __|
// | (_ | |_| (_) | _ \/ _ \| |__   \ V / _ \|   /| | / _ \| _ \ |__| _|\__ \
//  \___|____\___/|___/_/ \_\____|   \_/_/ \_\_|_\___/_/ \_\___/____|___|___/
//

var nav_version = "2.0";
var layer_version = "2.0";
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "./src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"help\">\n\n    <h1>Table of Contents</h1>\n\n    <ul class=\"toc\">\n        <li>\n            <a href=\"#about\">About</a>\n        </li>\n        <li>\n            <a href=\"#help_Layers\">Layers</a>\n            <ul>\n                <li><a href=\"#help_Creating_New_Layers\">Creating New Layers</a></li>\n                <li><a href=\"#help_Saving_and_Loading_Layers\">Saving and Loading Layers</a></li>\n                <li><a href=\"#help_Creating_Layers_from_Other_Layers\">Creating Layers from Other Layers</a></li>\n            </ul>\n        </li>\n\n        <li>\n            <a href=\"#help_Layer_Controls\">Layer Controls</a>\n            <ul>\n                <li><a href=\"#help_Layer_Information\">Layer Information</a></li>\n                <li><a href=\"#help_Sorting\">Sorting</a></li>\n                <li><a href=\"#help_Filtering\">Filtering</a></li>\n                <li>\n                    <a href=\"#help_Color_Setup\">Color Setup</a>\n                    <ul>\n                        <li><a href=\"#help_Tactic_Row_Background\">Tactic Row Background</a></li>\n                        <li><a href=\"#help_Scoring_Gradient\">Scoring Gradient</a></li>\n                    </ul>\n                </li>\n                <li><a href=\"#help_Hiding_Disabled_Techniques\">Hiding Disabled Techniques</a></li>\n                <li>\n                    <a href=\"#help_Changing_Views\">Changing Views</a>\n                    <ul>\n                        <li><a href=\"#help_Full_View\">Full View</a></li>\n                        <li><a href=\"#help_Compact_View\">Compact View</a></li>\n                        <li><a href=\"#help_Mini_View\">Mini View</a></li>\n                    </ul>\n                </li>\n                <li><a href=\"#help_Legend\">Legend</a></li>\n            </ul>\n        </li>\n        <li>\n            <a href=\"#help_Technique_Controls\">Technique Controls</a>\n            <ul>\n\n                <li><a href=\"#help_Disabling_Techniques\">Disabling Techniques</a></li>\n                <li><a href=\"#help_Assigning_Manual_Colors\">Assigning Manual Colors</a></li>\n                <li><a href=\"#help_Scoring_Techniques\">Scoring Techniques</a></li>\n                <li><a href=\"#help_Adding_Comments_to_Techniques\">Adding Comments to Techniques</a></li>\n                <li><a href=\"#help_Clearing_Selected_Techniques_Annotations\">Clearing Annotations on Techniques</a> </li>\n            </ul>\n        </li>\n        <li>\n            <a href=\"#help_Selecting_Techniques\">Selecting Techniques</a>\n            <ul>\n                <li><a href=\"#help_Selecting_with_the_Mouse\">Selecting with the Mouse</a></li>\n                <li><a href=\"#help_Lock_Multi-Tactic_Technique_Selection\">Lock Multi-Tactic Technique Selection</a></li>\n                <li><a href=\"#help_Search_Interface\">Search Interface</a></li>\n                <li><a href=\"#help_Multiselct_Interface\">Multiselect Interface</a></li>\n            </ul>\n        </li>\n        <li>\n            <a href=\"#help_Customizing_The_Navigator\">Customizing The Navigator</a>\n            <ul>\n                <li><a href=\"#help_Default_Layer\">Default Layer</a></li>\n                <li><a href=\"#help_Disable_Features\">Disabling Features</a></li>\n            </ul>\n        </li>\n        <li>\n            <a href=\"#help_Rendering_Layers_As_SVG\">Exporting Layers as SVG</a>\n            <ul>\n                <li><a href=\"#help_exporting_units\">Measurement Units</a></li>\n                <li><a href=\"#help_exporting_image_size\">Configuring Image Size</a></li>\n                <li><a href=\"#help_exporting_text\">Configuring Text</a></li>\n                <li><a href=\"#help_exporting_legend_config\">Customizing the Legend</a></li>\n                <li><a href=\"#help_exporting_display_settings\">Display Settings</a></li>\n            </ul>\n        </li>\n        <li><a href=\"#notice\">Notice</a></li>\n\n    </ul>\n\n    <h1 id=\"about\"> ATT&CK Navigator Version {{nav_version}}</h1>\n    <p>\n        The ATT&CK Navigator is designed to provide basic navigation and\n        annotation of ATT&CK matrices, something that people are already doing\n        today in tools like Excel. We've designed it to be simple and generic -\n        you can use the Navigator to visualize your defensive coverage, your\n        red/blue team planning, the frequency of detected techniques or anything\n        else you want to do. The Navigator doesn't care - it just allows you to\n        manipulate the cells in the matrix (color coding, adding a comment,\n        assigning a numerical value, etc.). We thought having a simple tool that\n        everyone could use to visualize the matrix would help make it easy to\n        use ATT&CK.\n    </p>\n    <p>\n        The principal feature of the Navigator is the ability for users to\n        define layers - custom views of the ATT&CK knowledge base - e.g. showing\n        just those techniques for a particular platform or highlighting\n        techniques a specific adversary has been known to use. Layers can be\n        created interactively within the Navigator or generated programmatically\n        and then visualized via the Navigator.\n    </p>\n    <p>\n        Bug reports and feature requests can be submitted to our <a href=\"https://github.com/mitre/attack-navigator/issues\">GitHub Issue Tracker</a>.\n        The source code for the ATT&CK Navigator can be retrieved from our\n        <a href=\"https://github.com/mitre/attack-navigator\">GitHub repository</a>.\n    </p>\n\n\n    <!-- sections -->\n    <h1 id=\"help_Layers\">Layers</h1>\n    <p>\n      A layer constitutes a view of the tactics and techniques matrix for a\n      specific technology domain. Version {{nav_version}} of the Navigator can manipulate\n      either the Enterprise (Windows, Linux & Mac) or Mobile (Android & iOS)\n      ATT&CK technology domain knowledge bases. Within a technology domain, the\n      Navigator allows you to filter your view of the matrix in a variety of\n      ways, displaying the tactics and techniques that are important to you.\n    </p>\n    <p>\n      You can view the definition of any technique in the visible matrix by\n      right-clicking on the technique and selecting \"view technique\" in the\n      pop-up menu. A new browser tab will be opened displaying the definition of\n      the technique. In this way the Navigator allows you to explore a given\n      ATT&CK matrix and access the definitions of the techniques.\n    </p>\n    <p>\n      Beyond the filters, layers also provide a means to customize your view of\n      the matrix. To that end you can <a href=\"#help_Assigning_Manual_Colors\">color</a>, <a href=\"#help_Hiding_Disabled_Techniques\">hide</a>, <a href=\"#help_Adding_Comments_to_Techniques\">comment</a>, and assign <a href=\"#help_Scoring_Techniques\">numeric\n      scores</a> to techniques to aid in analysis of threats and your defenses\n      against those threats. As stated earlier, the Navigator is designed to be\n      simple, allowing you to assign whatever meaning you want to the\n      color-codings, scores, and comments. This way the Navigator can support\n      whatever you want to do without requiring changes to the Navigator code\n      itself.\n    </p>\n    <p>\n      Each layer created is independent of other layers. However, layers can be\n      <a href=\"#help_Creating_Layers_from_Other_Layers\">combined</a> in ways to support analysis, or <a href=\"#help_Saving_and_Loading_Layers\">saved locally</a>. Layer files are\n      saved in easy to parse and easy to generate JSON file so that ATT&CK data\n      can be used in other applications, analyzed beyond the capability of the\n      ATT&CK Navigator, and generated by tools for import into the Navigator.\n      The Layer file format is described <a href=\"assets/NavigatorLayerFileFormatv2.pdf\">here</a>.\n    </p>\n\n\n    <h2 id=\"help_Creating_New_Layers\">Creating New Layers</h2>\n    <p>\n        To create a new layer, open a new tab and click the \"Create New Layer\" button.\n        Note that for performance reasons, the Navigator currently imposes a limit of\n        ten (10) active layers at any given point in time.\n    </p>\n    <h2 id=\"help_Saving_and_Loading_Layers\">Saving and Loading Layers</h2>\n    <p>\n        Layers can be saved by clicking the \"save layer\" button (<img src=\"assets/icons/ic_file_download_black_24px.svg\">). This will open a dialog\n        to save a layer configuration file to your local computer. This contains\n        the configuration for the techniques that have been customized\n        (commented, colored, assigned a score, or disabled) as well as the\n        scoring gradient setup, filter selection, layer name, layer description,\n        view configuration.\n    </p>\n    <p>\n        Saved layer configuration files can be opened in the ATT&CK navigator to\n        restore a layer you've worked on previously. To do so, open a new tab\n        and open the \"Open Existing Layer\" panel. Then click \"Upload from\n        local\", and select your saved configuration file. Doing so will restore\n        your saved layer to the ATT&CK navigator. This interface also has a \"load from URL\"\n        input allowing you to open a layer json from a remote source.\n    </p>\n    <h2 id=\"help_Creating_Layers_from_Other_Layers\">Creating Layers from Other Layers</h2>\n    <p>\n        Layers can be created which inherit properties from other layers. Several fields\n        exist which can be used to choose which layers to inherit properties from:\n    </p>\n    <ul>\n        <li>\n            <p>\n                <b>Score Expression:</b> Technique <a href=\"#help_Scoring_Techniques\">scores</a>  in the created layer are\n                initialized to the result of this expression. This field should take\n                the form of an equation or constant, using variables for layers.\n                Layer variables are shown in yellow on tabs when the \"create layer\n                from other layers\" panel is opened:\n            </p>\n            <img src=\"assets/image_scoreVariableExample.png\" height=\"100px\">\n            <p>\n                Each technique's score is created independently using the score expression. For example,\n                with a score expression of <code>a+b</code>, some technique <i>t</i> in the output layer would\n                be the sum of <i>t<sub>a</sub></i> and <i>t<sub>b</sub></i>.\n            </p>\n            <p>\n                Expressions can also be comparative, for example <code>a>b</code>\n                will create a layer with a score of 1 whereever <code>a>b</code> and\n                0 whereever <code>a<=b</code>. Such boolean expressions can be\n                extended using <code>and</code>, <code>or</code>, <code>xor</code>\n                and <code>not</code>. See <a href=\"http://mathjs.org/docs/expressions/syntax.html#operators\">\n                    this page</a> for a  full list of operators.\n                </p>\n                Some example score expressions:\n                <ul>\n                    <li>\n                        <code>(a+b)/2</code> (average two layers)\n                    </li>\n                    <li>\n                        <code>a+b+c</code>\n                    </li>\n                    <li>\n                        <code>a*(b+c)</code>\n                    </li>\n                    <li>\n                        <code>100-a</code> (reverse the scoring of <code>a</code>, assuming <code>a</code> is on a 0-100 scale)\n                    </li>\n                    <li>\n                        <code>(a>b) and (a>=75)</code>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <b>Coloring:</b> choose which layer to inherit <a href=\"#help_Assigning_Manual_Colors\">manually assigned technique colors</a> from.\n            </li>\n            <li>\n                <b>Comments:</b> choose which layer to inherit <a href=\"#help_Adding_Comments_to_Techniques\">technique comments</a> from.\n            </li>\n            <li>\n                <b>States:</b> choose which layer to inherit technique <a href=\"#help_Disabling_Techniques\">enabled/disabled states</a> from.\n            </li>\n            <li>\n                <b>Filters:</b> choose which layer to inherit <a href=\"#help_Filtering\">layer filter configuration</a> from.\n            </li>\n            <li>\n                <b>Legend:</b> choose which layer to inherit <a href=\"#help_Legend\">legend items</a> from.\n            </li>\n        </ul>\n        <p>\n            <!-- TODO: update this with links to main doc section for feature -->\n            Tactic-spanning Techniques are evaluated individually: if a technique is annotated differently\n            in two tactics, the output layers' techniques will honor this difference.\n        </p>\n        <p>\n            <b>Tip:</b> Score expressions don't need to use variables! You can use\n            this to create a new layer with a constant score for each technique. For\n            example, if you wanted a new layer where all techniques are scored 50, you\n            could simply type 50 into the score expression input.\n        </p>\n\n        <h1 id=\"help_Layer_Controls\">Layer Controls</h1>\n        <h2 id=\"help_Layer_Information\">\n            <img src=\"assets/icons/ic_description_black_24px.svg\">\n            Layer Information\n        </h2>\n        The layer name and description can be edited in the layer information dropdown.\n        The layer name can also be edited where it appears in the tab title.\n\n        <h2 id=\"help_Sorting\">\n            Sorting\n        </h2>\n        <p>\n            There are four modes of sorting. Clicking the sorting button will toggle between the modes.\n        </p>\n\n        <ul>\n            <li>\n                <img src=\"assets/icons/ic_sort_alphabetically_ascending_black_24px.svg\"/>\n                The table will sort techniques alphabietically by name in ascending order.\n            </li>\n            <li>\n                <img src=\"assets/icons/ic_sort_alphabetically_descending_black_24px.svg\"/>\n                The table will sort techniques alphabetically by name in descending order.\n            </li>\n            <li>\n                <img src=\"assets/icons/ic_sort_numerically_ascending_black_24px.svg\"/>\n                The table will sort techniques by their score in ascending order. Techniques with no score are treated as if their score is 0.\n            </li>\n            <li>\n                <img src=\"assets/icons/ic_sort_numerically_descending_black_24px.svg\"/>\n                The table will sort techniques by their score in descending order. Techniques with no score are treated as if their score is 0.\n            </li>\n        </ul>\n\n\n\n        <h2 id=\"help_Filtering\">\n            <img src=\"assets/icons/ic_filter_list_black_24px.svg\"/>\n            Filtering\n        </h2>\n        <p>\n            The list of techniques and tactics can be filtered in the filtering menu.\n            Filters are additive - the displayed set of techniques is the logical <i>or</i>\n            of the techniques of the filters selected. There are two categories of filters that you can apply to a layer - a platform filter and a stages filter.\n        </p>\n        <h3>Platform Filter</h3>\n        <p>\n            The platform filter allows the user to control which techniques are\n            included in a layer based on whether or not a particular technique\n            applies to a particular technology platform.  Technology platforms\n            are tied to the specific technology domain you are visualizing. For\n            the Enterprise technology domain, the defined platforms are:\n            Windows, Linux and Mac.  For the Mobile technology domain, the\n            defined platforms are: Android and iOS.  By default, all platforms\n            for a given technology domain are selected in a newly-created layer.\n        </p>\n        <p>\n            Each technique in an ATT&CK matrix is tied to one or more platforms.\n            In the Navigator, if you wanted to see only those techniques in\n            Enterprise ATT&CK which applied to the Linux platform, you would\n            deselect \"Windows\" and \"Mac\" under the platform filter. If later you\n            decided to also include techniques known to apply to MacOS\n            platforms, you could select \"Mac\" as well and those techniques would\n            be added to the visible layer.\n        </p>\n        <h3>Stage Filter</h3>\n        <p>\n            In addition to filtering based on technology platform, you can also\n            control which techniques to include in a layer based on where they\n            fall in the cyber attack lifecycle.  The Navigator defines two\n            \"stages\" in this lifecycle: \"prepare\" - those tactics that an\n            adversary uses prior to compromise of their target and \"act\" - those\n            tactic categories at and after the launch of a compromise attempt.\n            By default, only the \"act\" stage is selected in a newly-created\n            layer to help keep the visible matrix to a manageable size. Note\n            that when viewing a layer with both the prepare and act stages\n            selected, you may find the \"compact\" matrix view particularly\n            useful.\n        </p>\n\n        <p>\n            <b>Tip:</b> Techniques can also be hidden from your view by using the <a href=\"#help_Hiding_Disabled_Techniques\">hide disabled techniques</a>\n            button. Couple this with the <a href=\"#help_Multiselct_Interface\">multiselect interface</a>\n            to hide techniques which are contained in specific threat or software groupings.\n        </p>\n\n        <h2 id=\"help_Color_Setup\">\n            <img src=\"assets/icons/ic_palette_black_24px.svg\"/>\n            Color Setup\n        </h2>\n        <h3 id=\"help_Tactic_Row_Background\">\n            Tactic Row Background\n        </h3>\n        <p>\n            The background color of the tactic row can be set in the tactic row background section of the color setup menu. The color\n            will only be displayed if the \"show\" checkbox is selected. The tactic row background will not be shown when in the <a href=\"#help_Mini_View\">mini view</a>.\n        </p>\n\n\n        <h3 id=\"help_Scoring_Gradient\">Scoring Gradient</h3>\n        <p>\n            Techniques which are assigned a score will be colored according to a\n            gradient defined in the scoring gradient section in the color setup menu. Technique scores are\n            mapped to a color scaled linearly between the \"low value\" and \"high value\"\n            inputs. For example, on a red-green scale, if \"low value\" were set to 0 and\n            \"high value\" were set to 50, a score of 25 would fall on yellow -- exactly\n            halfway between red and green. Scores below the low value are colored as if\n            they have the low value, and scores above the high value are colored as if\n            they have the high value.\n        </p>\n        <p>\n            Several preset gradients are present within the preset dropdown. If no preset\n            matches your desired gradient, you can create your own by adding and removing\n            colors using the interface.\n        </p>\n        <p>\n            <b>Tip:</b> If your scores are binary (0 or 1), consider setting the low\n            value of 0 to white and the high of 1 to some other\n            color to only color the techniques which have the value of 1.\n        </p>\n\n        <h2 id=\"help_Hiding_Disabled_Techniques\">\n            <img src=\"assets/icons/ic_visibility_off_black_24px.svg\">\n            Hiding Disabled Techniques\n        </h2>\n        <p>\n            Techniques that are <a href=\"#help_Disabling_Techniques\">disabled</a> can be hidden by toggling the \"hide disabled techniques\" button.\n            Hidden techniques are still present in the data when saved and can still be annotated, but won't be visible in the view.\n        </p>\n        <p>\n            <b>Tip:</b> This button has powerful synergy with the <a\n            href=\"#help_Multiselct_Interface\">multiselect interface</a>. Use the\n            multiselect interface to select techniques which match your criteria,\n            disable them, and then turn on hiding disabled techniques to remove entire\n            groups of techniques from your view.\n        </p>\n\n        <h2 id=\"help_Changing_Views\">\n            Changing Views\n        </h2>\n        <p>\n            The ATT&CK Navigator has multiple ways to view the data. Toggle between these views\n            with the \"toggle view mode\" button.\n        </p>\n        <h3 id=\"help_Full_View\">\n            <img src=\"assets/icons/ic_view_large_black_24px.svg\">\n            Full View\n        </h3>\n        <p>\n            The full view (default), shows the full names of tactics\n            (column headers) and techniques (column cells). It also shows the\n            number of displayed techniques inside of each tactic. Techniques that are\n            hidden by filtering or by hiding disabled techniques do not count towards\n            this count.\n        </p>\n        <h3 id=\"help_Compact_View\">\n            <img src=\"assets/icons/ic_view_medium_black_24px.svg\">\n            Compact View\n        </h3>\n        <p>\n            The compact view is designed to fit more techniques\n            on the screen simultaneously by reducing their size. To do so all text is\n            abbreviated to acronyms. Full technique and tactic names are displayed as tooltips when you hover over a technique. Otherwise it behaves the same as the <a href=\"#help_Full_View\">full view</a>.\n        </p>\n\n        <h3 id=\"help_Mini_View\">\n            <img src=\"assets/icons/ic_view_small_black_24px.svg\">\n            Mini View\n        </h3>\n        <p>\n            The mini view is designed to fit more techniques on the screen\n            simultaneously by reducing their size. To do so all text is removed\n            and techniques are visualized as boxes. In this view techniques can arrange themselves\n            as grids inside of each tactic column to conserve space. Tactic headers\n            are visualized as black cells above the columns. Technique\n            and tactic names are displayed as tooltips when you hover over a\n            technique or tactic-header cell. The presence of a comment upon a technique\n            is not displayed in this mode, but comments can still be seen inside of\n            tooltips.\n        </p>\n        <h2 id=\"help_Legend\">\n            Legend\n        </h2>\n        <p>\n            The legend helps associate meanings with colors displayed by customized techniques in the ATT&CK Navigator.\n            To open the legend, click on the bar labled \"legend\" in the bottom-right corner of the screen. Click on the same bar to close the legend. To add an item to the legend, click the \"Add Item\"\n            button. To clear all items in the legend, click \"Clear\".\n            <br/><br/>\n            An item's color can be changed by either clicking in the color field and typing a hex color value, or by clicking in the field and choosing a color from the color picker. Click and type in the\n            text field to change the item's label. To remove an item, click on the (<img src=\"assets/icons/ic_clear_gray_24px.svg\"/>) button on the right side. Legend items are saved to the layer file and will be\n            loaded when a layer with saved legend items is loaded.\n        </p>\n\n        <h1 id=\"help_Technique_Controls\">Technique Controls</h1>\n        <p>\n            Techniques in the layer can be annotated. The technique controls on the menubar\n            are only enabled when one or more techniques are <a href=\"#help_Selecting_Techniques\">selected</a>.\n            If multiple techniques are selected, they will all be annotated simultaneously.\n        </p>\n\n\n\n        <h2 id=\"help_Disabling_Techniques\">\n            <img src=\"assets/icons/ic_texture_black_24px.svg\">\n            Disabling Techniques\n        </h2>\n        <p>\n            Clicking the \"toggle state\" button toggles selected techniques between an\n            enabled and disabled state. In the disabled state, the technique text is greyed\n            out and no colors (<a href=\"#help_Assigning_Manual_Colors\">assigned manually</a> or via <a href=\"#help_Scoring_Techniques\">score</a>)\n            will be displayed.\n        </p>\n        <p>\n            The <a href=\"#help_Hiding_Disabled_Techniques\">hide disabled techniques</a>\n            button can be used to hide disabled techniques from the view.\n        </p>\n\n        <h2 id=\"help_Assigning_Manual_Colors\">\n            <img src=\"assets/icons/ic_format_color_fill_black_24px.svg\">\n            Assigning Manual Colors\n        </h2>\n        <p>\n            Techniques can be assigned colors manually. Manually assigned colors supersede\n            colors created by score. To remove a manually assigned color, select the \"no color\"\n            box at the top of the interface.\n        </p>\n\n        <h2 id=\"help_Scoring_Techniques\">\n            <img src=\"assets/icons/ic_insert_chart_black_24px.svg\">\n            Scoring Techniques\n        </h2>\n        <p>\n            A score is a numeric value assigned to a technique. The meaning or\n            interpretation of scores is completely up to the user user - the\n            Navigator simply visualizes the matrix based on any scores you have\n            assigned. Some possible uses of scores include:\n        </p>\n        <ul>\n            <li>\n                Assigning a score to techniques based on whether or not a given\n                adversary group has been observed to use that technique.\n            </li>\n            <li>\n                Assigning a score to techniques based on your organization's\n                ability to detect, prevent and/or mitigate the use of a\n                particular technique.\n            </li>\n             <li>\n                 Assigning a score to those techniques that a red-team has\n                 successfully employed during an exercise.\n             </li>\n        </ul>\n        <p>\n            By default, techniques are \"unscored\" meaning that no score has been\n            assigned to the technique.  Note that \"unscored\" and a score of zero\n            are not the same, specifically with respect to automatically\n            assigned colors. Scores show up in technique tooltips if a score has\n            been assigned. To change a technique with a numeric score to\n            unscored, select the technique and delete the score value in the score\n            control. The technique will revert to unscored.\n        </p>\n        <p>\n            Techniques are automatically assigned a color according to its\n            score. This color is determined according to the <a href=\"#help_Scoring\">scoring gradient setup interface</a>. Colors\n            assigned <a href=\"#help_Assigning_Manual_Colors\">manually</a>\n            supersede the score-generated color. It is a good idea to assign\n            techniques scores inside of a given range, such as 0-1 or 0-100. Set\n            the \"high value\" and \"low value\" inputs in the <a href=\"#help_Scoring\">scoring gradient setup interface</a> to this\n            range to make sure that the color for the score is properly mapped\n            to the gradient. Techniques that are unscored are not assigned a\n            color based on the gradient - they are displayed with a white\n            background in the matrix.\n        </p>\n\n        <h2 id=\"help_Adding_Comments_to_Techniques\">\n            <img src=\"assets/icons/ic_insert_comment_black_24px.svg\">\n            Adding Comments to Techniques\n        </h2>\n        <p>\n            A text comment can be added to techniques. This comment will show up in the technique tooltip if a comment has been added.\n            Techniques with a comment will be given a yellow underline.\n        </p>\n        <h2 id=\"help_Clearing_Selected_Techniques_Annotations\">\n            <img src=\"assets/icons/ic_clear_black_24px.svg\">\n            Clearing Annotations on Techniques\n        </h2>\n        <p>\n            Clicking the \"clear annotations on selected\" button removes comments,\n            colors, scores, and enabled/disabled state from all selected techniques.\n        </p>\n\n        <h1 id=\"help_Selecting_Techniques\">Selecting Techniques</h1>\n\n        <p>\n            In order to be annotated, techniques must first be selected. There are multiple ways\n            to select techniques.\n        </p>\n        <h2 id=\"help_Selecting_with_the_Mouse\">Selecting with the Mouse</h2>\n        <p>\n            Techniques can be selected using the mouse. Left click a technique to select\n            it. Pressing control (windows) command (mac) or shift (both) while left-clicking a technique will add it to or remove it from the selection. Right\n            clicking a technique will bring up a context menu with more options:\n        </p>\n        <ul>\n            <li><b>select:</b> Select only this technique.</li>\n            <li><b>add to selection:</b> Add this technique to the selection.</li>\n            <li><b>remove from selection:</b> remove this technique from the selection.</li>\n            <li><b>invert selection:</b> Select all techniques that are not currently selected and unselect all techniques that are currently selected.</li>\n            <li><b>select all:</b> Select all techniques.</li>\n            <li><b>deselect all:</b> Deselect all techniques. This action can also be completed by the \"deselect\" (<img src=\"assets/icons/ic_clear_black_24px.svg\"/>) button.</li>\n            <li><b>view technique:</b> For more information / details on the technique.</li>\n        </ul>\n\n        <h2 id=\"help_Lock_Multi-Tactic_Technique_Selection\">\n            <img src=\"assets/icons/ic_lock_black_24px.svg\">\n            Lock Multi-Tactic Technique Selection\n        </h2>\n        <p>\n            This control toggles whether selecting a technique selects that technique across all tactics or just that one instance.\n        </p>\n\n        <h2 id=\"help_Search_Interface\">\n            <img src=\"assets/icons/ic_search_black_24px.svg\">\n            Search Interface\n        </h2>\n        <p>\n            The search interface provides a text input to search through techniques in the matrix.\n            Toggles in the interface allow for searching of specific technique fields (name, ID, and description).\n        </p>\n        <p>\n            The interface provides\n            buttons to select and deselect techniques. These buttons modify the currently selected techniques rather\n            than replacing then, allowing for the selection of the multiple techniques by selecting them in sequence.\n            There are 'view' links that lead to more info on each technique.\n        </p>\n        <p>\n            Buttons labelled 'select all' and 'deselect all' are provided to quickly select/deselect all techniques in the results\n            area.\n        </p>\n\n        <h2 id=\"help_Multiselct_Interface\">\n            <img src=\"assets/icons/ic_playlist_add_black_24px.svg\">\n            Multiselect Interface\n        </h2>\n        <p>\n            The multiselect interface provides a way to quickly select and deselect\n            groups of techniques. The interface provides two types of groupings, threat\n            groups and software. Threat groups constitute related intrusion activity\n            tracked by a common name. Software constitutes software, malware\n            or utilities that use known techniques for intrusion.\n        </p>\n        <p>\n            The interface provides\n            buttons to select and deselect techniques associated with each software or\n            threat group. These buttons modify the currently selected techniques rather\n            than replacing then, allowing for the selection of the techniques of multiple\n            threat groups or software by selecting them in sequence.\n        </p>\n        <p>\n            Threat groups and software in the list are given a gray background when all\n            of their techniques are selected, even if the selection was not made using\n            the multiselect interface.\n        </p>\n\n        <h1 id=\"help_Customizing_The_Navigator\">Customizing The Navigator</h1>\n        <p>\n            The ATT&CK Navigator can be customized by modifying the fragment (e.g <code>example.com<b>#fragment</b></code>) of the URL.\n            A panel on the new tab page exists to build a properly formatted ATT&CK Navigator URL\n            such that, when opened, it will create an ATT&CK Navigator instance with the desired\n            customizations. This feature may be useful for sharing or embedding the ATT&CK Navigator.\n        </p>\n\n\n        <h2 id=\"help_Default_Layer\">Default Layer</h2>\n        <p>\n            Enter the URL of a layer hosted on the web into the \"default layer URL\" field\n            will cause the customized ATT&CK Navigator to initialize with this layer open by default.\n            This is especially useful for embedding or sharing specific layers.\n        </p>\n        <p>\n            The following is an example ATT&CK Navigator URL with the default layer specified to be the *Bear APTs layer from <a href=\"https://github.com/mitre/attack-navigator\">our github repo</a>: <br /><code>https://mitre.github.io/attack-navigator/enterprise/<b>#layerURL=https%3A%2F%2Fraw.githubusercontent.com%2Fmitre%2Fattack-navigator%2Fmaster%2Flayers%2Fdata%2Fsamples%2FBear_APT.json</b></code>\n        </p>\n\n\n        <h2 id=\"help_Disable_Features\">Disabling Features</h2>\n        <p>\n            Individual ATT&CK Navigator features can be disabled with the checkboxes. Removing\n            a feature only removes the interface elements of the feature -- opened\n            layers utilizing those features will still have them present. For example,\n            even if comments are disabled layers with comments present will still display\n            them visually and in tooltips.\n        </p>\n        <p>\n            If you are hosting your own navigator instance, you can also disable\n            features by editing the configuration file <code>assets/config.json</code>.\n        </p>\n        <p>\n            The following is an example ATT&CK Navigator URL with the ability to download the layer and add comments disabled: <br /><code>https://mitre.github.io/attack-navigator/enterprise/<b>#download_layer=false&comments=false</b></code>\n        </p>\n\n        <h1 id=\"help_Rendering_Layers_As_SVG\">\n            <img src=\"assets/icons/ic_camera_alt_black_24px.svg\">\n            Rendering Layers as SVG\n        </h1>\n        <p>\n            Clicking the \"render layer to SVG\" button will open a new tab allowing the current layer\n            to be rendered to an SVG image. Changes to the layer after opening the render tab\n            will not be reflected in the render layer.\n        </p>\n        <p>\n            Clicking the <i>download svg</i> button (<img src=\"assets/icons/ic_file_download_black_24px.svg\">) will download\n            the image, as displayed, in SVG format.\n        </p>\n        <p>\n            The Microsoft Edge browser has a bug where the downloaded SVG\n            will have the <code>.txt</code> extension. Renaming the extension to <code>.svg</code> will\n            restore it as a valid svg file.\n        </p>\n\n        <h2 id=\"help_exporting_units\">Measurement Units</h2>\n        <p>\n            Clicking the \"toggle measurement unit\" button will toggle between\n            measuring in inches (in), centimeters (cm), and pixels (px). This unit\n            applies to controls for image size and legend position.\n        </p>\n\n        <h2 id=\"help_exporting_image_size\">\n            <img src=\"assets/icons/ic_photo_size_select_large_black_24px.svg\">\n            Configuring Image Size\n        </h2>\n        <p>\n            The image size controls allow you to specify the width and height of\n            the image, as well as the height of the header if one is present.\n            The measurements are in units specified by the <a href=\"#help_exporting_units\">measurement units</a> control.\n        </p>\n        <p>\n            The header height contributes to the total image height: if you have specified\n            the image height to be 8.5 inches and the header height to be 1 inch,\n            the technique table will be 7.5 inches and the header 1 inch for a total height of 8.5 inches.\n            If the header is disabled this control will not be editable.\n        </p>\n        <h2 id=\"help_exporting_text\">\n            <img src=\"assets/icons/ic_format_size_black_24px.svg\">\n            Configuring Text\n        </h2>\n        <p>\n            The text configuration dropdown allows for the configuration of various\n            aspects of the text in the rendered layer.\n        </p>\n        <ul>\n            <li>\n                <b>Title font size</b> controls the font size of rendered layer title,\n                which is the same as the layer name. If the title or header are disabled this control\n                will not be editable.\n            </li>\n            <li>\n                <b>Font size in header</b> controls the size of the font size in\n                the table header: description, filters, score gradient, and legend.\n                If the header is disabled this control will not be editable.\n            </li>\n            <li>\n                <b>Tactic header font size</b> controls the font size of the tactic names\n                and technique count in the header of each tactic column.\n            </li>\n            <li>\n                <b>Technique font size</b> controls the size of the text in the technique\n                cells. If no text is displayed in the technique cells this control\n                will not be editable.\n            </li>\n            <li>\n                <b>Font size unit</b> controls whether the font-size controls are\n                measured in points (pt) or pixels (px).\n            </li>\n            <li>\n                <b>Font</b> controls the font used in the entire table. Options are given\n                for serif, sans-serif and monospace.\n            </li>\n            <li>\n                <b>Technique text</b> controls which text is shown in the technique\n                cells. Technique name or ID can be shown, or all text can be removed.\n            </li>\n        </ul>\n\n        <h2 id=\"help_exporting_legend_config\">\n            <img src=\"assets/icons/ic_view_list_black_24px.svg\">\n            Customizing the Legend\n        </h2>\n        <p>\n            This menu can only be opened if a <a href=\"#help_Legend\">legend</a> is present on the layer.\n            The checkbox allows you to undock the legend from the SVG header.\n            Once undocked, the X and Y position controls can be used to position\n            the legend in the image. The width and height inputs control\n            the size of the legend when it is undocked. The measurements are in units specified by the <a href=\"#help_exporting_units\">measurement units</a> control.\n        </p>\n\n        <h2 id=\"help_exporting_display_settings\">\n            <img src=\"assets/icons/ic_visibility_black_24px.svg\">\n            Display Settings\n        </h2>\n        <p>\n            The header itself, or specific parts of the header, can be hidden\n            using the controls in this dropdown. The color of table cell borders\n            can also be edited.\n        </p>\n        <ul>\n            <li>\n                <b>Show header</b> controls whether the header is shown at all. If\n                the legend is undocked from the header it will still be shown.\n            </li>\n            <li>\n                <b>Show title</b> controls whether the layer name is visible in\n                the header. If the layer has no title, the control will be disabled and the description section automatically hidden.\n            </li>\n            <li>\n                <b>Show description</b> controls whether the layer description is visible in\n                the header. If the layer has no description, the control will be disabled and the description section automatically hidden.\n            </li>\n            <li>\n                <b>Show filters</b> controls whether the current filters (selected stages and platforms) are visible in\n                the header. This control will be disabled if the header is hidden in entirety.\n            </li>\n            <li>\n                <b>Show score gradient</b> controls whether the score gradient is visible in the header.\n                If none of the techniques in the layer have a score, the control will be disabled and the score gradient section automatically hidden.\n            </li>\n            <li>\n                <b>Show Legend</b> controls whether the layer legend is visible.\n                If the layer has no defined legend items, the control will be disabled and the legend will be automatically hidden.\n            </li>\n            <li>\n                <b>Cell border</b> controls the border of cells in the body of the table.\n                The borders in the header are not modified by this control.\n            </li>\n        </ul>\n\n        <h1 id=\"notice\">Notice</h1>\n        <p>Copyright 2018 The MITRE Corporation</p>\n        <p>Approved for Public Release; Distribution Unlimited. Case Number 18-0128.</p>\n        <p>\n            Licensed under the Apache License, Version 2.0 (the \"License\"); you may not\n            use this file except in compliance with the License. You may obtain a copy\n            of the License at\n        </p>\n        <ul style=\"list-style: none\">\n            <li>http://www.apache.org/licenses/LICENSE-2.0</li>\n        </ul>\n\n        <p>\n            Unless required by applicable law or agreed to in writing, software\n            distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT\n            WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the\n            License for the specific language governing permissions and limitations\n            under the License.\n        </p>\n\n        <p>This project makes use of ATT&CK™</p>\n        <a href=\"https://attack.mitre.org/wiki/enterprise:Terms_of_Use\">ATT&CK™ Terms of Use</a>\n    </div>\n"

/***/ }),

/***/ "./src/app/help/help.component.scss":
/***/ (function(module, exports) {

module.exports = ".help {\n  font-size: 11pt; }\n\n.content {\n  padding: 5px; }\n\n.toc {\n  list-style: none; }\n\n.toc ul {\n    list-style: none; }\n\ncode {\n  color: black;\n  border: 1px solid #ddd;\n  padding: 1px 2px; }\n"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpComponent = (function () {
    function HelpComponent() {
        this.nav_version = __WEBPACK_IMPORTED_MODULE_1__globals__["b" /* nav_version */];
    }
    return HelpComponent;
}());
HelpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'help',
        template: __webpack_require__("./src/app/help/help.component.html"),
        styles: [__webpack_require__("./src/app/help/help.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);

//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ "./src/app/tab/tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!active\" class=\"pane\">\n    <ng-content></ng-content>\n    <ng-container *ngIf=\"template\" [ngTemplateOutlet]=\"template\"  [ngOutletContext]=\"{ data: dataContext, active: active }\"></ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/tab/tab.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tab/tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// https://embed.plnkr.co/wWKnXzpm8V31wlvu64od/s

var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
        this.isCloseable = false;
        this.showScoreVariables = false;
    }
    return TabComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tabTitle'),
    __metadata("design:type", String)
], TabComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TabComponent.prototype, "active", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TabComponent.prototype, "isCloseable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TabComponent.prototype, "template", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TabComponent.prototype, "dataContext", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TabComponent.prototype, "showScoreVariables", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TabComponent.prototype, "isDataTable", void 0);
TabComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tab',
        template: __webpack_require__("./src/app/tab/tab.component.html"),
        styles: [__webpack_require__("./src/app/tab/tab.component.scss")]
    })
], TabComponent);

//# sourceMappingURL=tab.component.js.map

/***/ }),

/***/ "./src/app/tabs/dynamic-tabs.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicTabsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/**
 * This directive is used as an anchor to get access
 * to the ViewContainerRef which here is exposed via
 * the public member `viewContainer`
 *
 * Theres an ALTERNATIVE to explicitly using the anchor directive.
 * Read in the blog post
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicTabsDirective = (function () {
    function DynamicTabsDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    return DynamicTabsDirective;
}());
DynamicTabsDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[dynamic-tabs]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
], DynamicTabsDirective);

var _a;
//# sourceMappingURL=dynamic-tabs.directive.js.map

/***/ }),

/***/ "./src/app/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto+Mono:500\" rel=\"stylesheet\">\n<div *ngIf=\"configService.getFeature('header')\" [style.margin-bottom]=\"configService.getFeature('tabs') ? '0px' : '15px'\" class=\"header\" >\n    <div class=\"logo\">\n        <a href=\"http://attack.mitre.org\">MITRE ATT&CK<sup style=\"font-size: 6pt\">TM</sup> Navigator</a>\n    </div>\n    <div *ngIf=\"configService.getFeature('tabs')\" class=\"helpButton\" matTooltip=\"help\" (click)=\"newHelpTab(forceNew=false)\">\n        ?\n    </div>\n</div>\n<div [style.margin-top]=\"configService.getFeature('header') ? '0px' : '15px'\" *ngIf=\"dynamicTabs.length > 0 && configService.getFeature('tabs')\">\n    <ul class=\"tabs\">\n        <!-- dynamic tabs (can be opened and closed) -->\n        <li *ngFor=\"let tab of dynamicTabs; let $i = index\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n            <!-- <input *ngIf=\"tab.dataContext\" [disabled]=\"!tab.active\" [style.cursor]=\"tab.active ? 'text' : 'pointer'\" type=\"text\" [(ngModel)]=\"tab.dataContext.name\" [style.width]=\"tab.dataContext ? ((tab.dataContext.name.length) * 8.4) + 'px' : ''\"> -->\n            <!-- <a   *ngIf=\"!tab.dataContext\" href=\"#\" [style.cursor]=\"tab.active ? 'default' : 'pointer'\">{{tab.title}}</a> -->\n\n            <!-- <input [disabled]=\"!tab.active || !tab.dataContext\" (click)=\"!tab.active || !tab.dataContext ? selectTab(tab) : selectTab(tab)\" [style.cursor]=\"tab.active ? tab.dataContext ? 'text' : 'default' : 'pointer'\" type=\"text\" [(ngModel)]=\"tab.dataContext ? tab.dataContext.name : tab.title\" [style.width]=\"tab.dataContext ? ((tab.dataContext.name.length) * 8.4) + 'px' : (tab.title.length * 8.4) + 'px' \"> -->\n            <!-- <input [id]=\"'tabtitleinput' + $i\" (click)=\"!tab.active || !tab.dataContext ? selectTab(tab, 'tabtitleinput' + $i) : continue\" [style.cursor]=\"tab.active ? tab.dataContext ? 'text' : 'default' : 'pointer'\" type=\"text\" [(ngModel)]=\"tab.dataContext ? tab.dataContext.name : tab.title\" [style.width]=\"tab.dataContext ? ((tab.dataContext.name.length) * 8.4) + 'px' : (tab.title.length * 8.4) + 'px' \"> -->\n\n            <a *ngIf=\"!tab.active || !tab.isDataTable\" href=\"#\" [style.cursor]=\"tab.active ? 'default' : 'pointer'\">{{tab.isDataTable ? tab.dataContext.name : tab.title}}</a>\n            <input *ngIf=\"!(!tab.active || !tab.isDataTable)\" [style.cursor]=\"tab.active ? tab.isDataTable ? 'text' : 'default' : 'pointer'\" type=\"text\" [(ngModel)]=\"tab.dataContext.name\" [style.width]=\"tab.isDataTable ? ((tab.dataContext.name.length) * 8.4) + 'px' : (tab.title.length * 8.4) + 'px' \">\n            <span class=\"tab-close\" *ngIf=\"tab.isCloseable\" (click)=\"closeTab(tab)\">x</span>\n\n            <span class=\"tabEnumerator\" *ngIf=\"getActiveTab().showScoreVariables && tab.isDataTable && alphabetical(indexToChar($i))\">{{indexToChar($i)}}</span>\n        </li>\n        <!-- open new tab button -->\n        <!-- <li (click)=\"openTab('new tab', blankTab, null, true, false, true)\"> -->\n        <li *ngIf=\"dynamicTabs.length < 10\" class=\"addTab\" (click)=\"newBlankTab()\">\n            +\n        </li>\n    </ul>\n</div>\n<div *ngIf=\"dynamicTabs.length == 0\" class=\"newTab\">\n    <!-- you shouldn't ever see this, but just in case -->\n    <button (click)=\"newBlankTab()\">Start</button>\n</div>\n\n\n<div [style.margin-top]=\"configService.getFeature('tabs') || configService.getFeature('header') ? '0px' : '15px'\">\n    <ng-content></ng-content>\n</div>\n\n<ng-template dynamic-tabs #container></ng-template>\n\n\n<ng-template #blankTab>\n    <!-- <div style=\"background-color: #ddd; height: 3px;\">\n    </div> -->\n    <div class=\"newTab border\">\n        <mat-accordion class=\"headers-align\">\n            <mat-expansion-panel #newlayer hideToggle=\"true\" (click)=\"newLayer(); newlayer.close()\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Create New Layer\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Create a new empty layer\n                    </mat-panel-description>\n\n                </mat-expansion-panel-header>\n                <!-- this content will never be shown because clicking opens a new layer tab -->\n            </mat-expansion-panel>\n\n            <!-- <mat-expansion-panel #uploadlayer hideToggle=\"true\" (click)=\"openUploadPrompt(); uploadlayer.close()\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Upload Existing Layer\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Upload a layer from your computer\n                    </mat-panel-description>\n\n                </mat-expansion-panel-header>\n                <input id=\"uploader\" type=\"file\" style=\"display: none\" (change)=\"loadLayer()\"/>\n                <!-- this content will never be shown because clicking opens a new layer tab -->\n            <!--</mat-expansion-panel> -->\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                    Open Existing Layer\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Load a layer from your computer or a URL\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <table class=\"inputTable\">\n                    <tr>\n                        <td><button mat-button (click)=\"openUploadPrompt()\">Upload from local</button>\n                        <input id=\"uploader\" type=\"file\" style=\"display: none\" (change)=\"loadLayerFromFile()\"/></td>\n\n                        <td><b style=\"font-size: 8pt\">OR</b></td>\n                        <td><mat-form-field>\n                            <input type=\"text\"\n                                   matInput\n                                   placeholder=\"Load from URL\"\n                                   [(ngModel)]=\"loadURL\"/>\n                            <button mat-button matSuffix mat-icon-button aria-label=\"go\" *ngIf=\"loadURL\" (click)=\"loadLayerFromURL()\">></button>\n                        </mat-form-field></td>\n                    </tr>\n                </table>\n\n\n\n            </mat-expansion-panel>\n\n            <!-- <mat-expansion-panel [disabled]=\"viewModelsService.viewModels.length < 2\"> -->\n            <mat-expansion-panel (opened)=\"getActiveTab().showScoreVariables = true\" (closed)=\"getActiveTab().showScoreVariables = false\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Create Layer from other layers\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Choose layers to inherit properties from\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n\n                <table class=\"layerOpTable\">\n                    <tr>\n                        <td>\n                            <mat-form-field>\n                                <input type=\"text\"\n                                       matInput\n                                       placeholder=\"score expression\"\n                                       [(ngModel)]=\"scoreExpression\"\n                                       (keyup)=\"scoreExpression = scoreExpression.toLowerCase()\"\n                                       style=\"letter-spacing: 2px\" />\n                                <mat-hint style=\"color: red\" align=\"start\">{{getScoreExpressionError()}}</mat-hint>\n                            </mat-form-field>\n                        </td>\n                        <td>\n                            Use constants (numbers) and layer variables (yellow, above) to write an expression for the initial value of scores in the new layer. A full list of supported operations can be found <a href=\"http://mathjs.org/docs/expressions/syntax.html#operators\">here</a>. Leave blank to initialize scores to 0.\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <mat-form-field>\n                                <mat-select placeholder=\"coloring\" [(ngModel)]=\"coloring\">\n                                    <mat-option [value]=\"null\">none</mat-option>\n                                    <mat-option *ngFor=\"let vm of viewModelsService.viewModels\" [value]=vm>{{vm.name}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </td>\n                        <td>\n                            Choose which layer to import manually assigned colors from. Leave blank to initialze with no colors.\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <mat-form-field>\n                                <mat-select placeholder=\"comments\" [(ngModel)]=\"comments\">\n                                    <mat-option [value]=\"null\">none</mat-option>\n                                    <mat-option *ngFor=\"let vm of viewModelsService.viewModels\" [value]=vm>{{vm.name}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </td>\n                        <td>\n                            Choose which layer to import comments from. Leave blank to initialize with no comments.\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <mat-form-field>\n                                <mat-select placeholder=\"states\" [(ngModel)]=\"enabledness\">\n                                    <mat-option [value]=\"null\">none</mat-option>\n                                    <mat-option *ngFor=\"let vm of viewModelsService.viewModels\" [value]=vm>{{vm.name}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </td>\n                        <td>\n                            Choose which layer to import enabled/disabled states from. Leave blank to initialize all to enabled.\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <mat-form-field>\n                                <mat-select placeholder=\"filters\" [(ngModel)]=\"filters\">\n                                    <mat-option [value]=\"null\">none</mat-option>\n                                    <mat-option *ngFor=\"let vm of viewModelsService.viewModels\" [value]=vm>{{vm.name}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </td>\n                        <td>\n                            Choose which layer to import filters - stages and platforms - from. Leave blank to initialize with no filters.\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <mat-form-field>\n                                <mat-select placeholder=\"legend\" [(ngModel)]=\"legendItems\">\n                                    <mat-option [value]=\"null\">none</mat-option>\n                                    <mat-option *ngFor=\"let vm of viewModelsService.viewModels\" [value]=vm>{{vm.name}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </td>\n                        <td>\n                            Choose which layer to import the legend from. Leave blank to initialize with an empty legend.\n                        </td>\n                    </tr>\n                </table>\n\n                <button mat-button [disabled]=\"getScoreExpressionError()\" (click)=\"layerByOperation(); showScoreVariables = false\">Create</button>\n\n            </mat-expansion-panel>\n\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Create Customized Navigator\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Create a hyperlink to a customized ATT&CK Navigator\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n\n\n                <table class=\"inputTable\">\n                    <tr>\n                        <td><h1>Default Layer</h1></td>\n                        <td></td>\n                    </tr>\n                    <tr class=\"custom_nav_inputsection\">\n                        <td><mat-form-field>\n                            <input type=\"text\"\n                            matInput\n                            placeholder=\"default layer URL\"\n                            [(ngModel)]=\"layerLinkURL\"/>\n                        </mat-form-field></td>\n                        <td>Enter the URL of a layer hosted on the web. The custom navigator will open this layer by default.</td>\n                    </tr>\n                    <tr>\n                        <td><h1>Navigator Features</h1></td>\n                        <td></td>\n                    </tr>\n                    <ng-template ngFor let-featureItem [ngForOf]=\"customizedConfig\" let-featureItemIndex=\"index\">\n                        <tr class=\"featureRow noselect\" *ngIf=\"!featureItem.subfeatures\"  (click)=\"featureItem.enabled = !featureItem.enabled\">\n                            <td class=\"featureRow-button\">\n                                <img height=\"16px\" [src]=\"featureItem.enabled ? 'assets/icons/ic_check_box_black_24px.svg' : 'assets/icons/ic_check_box_outline_blank_black_24px.svg'\"/> {{featureItem.name.split(\"_\").join(\" \")}}\n                            </td>\n                            <td>{{featureItem.description}}</td>\n\n                        </tr>\n                        <tr *ngIf=\"featureItem.subfeatures\">\n                            <td>\n                                <h2>{{featureItem.name.split(\"_\").join(\" \")}}</h2>\n                            </td>\n                            <td></td>\n                        </tr>\n                        <ng-template ngFor let-subfeature [ngForOf]=\"featureItem.subfeatures\" let-subfeatureIndex=\"index\" let-last=\"last\">\n                            <tr class=\"featureRow noselect\" (click)=\"subfeature.enabled = !subfeature.enabled\">\n                                <td class=\"featureRow-button subfeature\" [class.last]=\"last\" style=\"padding-left: 20px\" >\n                                    <img height=\"16px\" [src]=\"subfeature.enabled ? 'assets/icons/ic_check_box_black_24px.svg' : 'assets/icons/ic_check_box_outline_blank_black_24px.svg'\"/> {{subfeature.name.split(\"_\").join(\" \")}}\n                                </td>\n                                <td class=\"subfeature\" [class.last]=\"last\">{{subfeature.description}}</td>\n                            </tr>\n                        </ng-template>\n                    </ng-template>\n                </table>\n                <div style=\"text-align: center; margin-top: 20px\">\n                    <mat-form-field id=\"layerlinkfield\">\n                        <input id=\"layerLink\" type=\"text\"\n                        matInput\n                        readonly=\"readonly\"\n                        (click)=\"selectLayerLink()\"\n                        [value]=\"getLayerLink()\"\n                        placeholder=\"custom navigator URL\"/>\n                        <button (click)=\"copyLayerLink()\" mat-button matSuffix mat-icon-button aria-label=\"copy\"><img src=\"assets/icons/ic_content_copy_black_24px.svg\" width=\"14px\" alt=\"copy\" matTooltip=\"copy\" matTooltipPosition=\"right\"></button>\n                        <mat-hint *ngIf=\"copiedRecently\">copied</mat-hint>\n                    </mat-form-field>\n                </div>\n\n\n\n            </mat-expansion-panel>\n        </mat-accordion>\n\n        <div class=\"helpButtonContainer\">\n            <button mat-button (click)=\"newHelpTab(replace=false, forceNew=false)\">help</button>\n        </div>\n\n    </div>\n\n</ng-template>\n\n<ng-template #layerTab let-data=\"data\" let-active=\"active\">\n    <DataTable *ngIf=\"active\" [viewModel]=data></DataTable>\n</ng-template>\n\n<ng-template #helpTab>\n    <div class=\"border help\">\n        <help></help>\n    </div>\n\n</ng-template>\n\n<ng-template #exporterTab let-data=\"data\">\n    <div class=\"border\">\n        <exporter [exportData]=data></exporter>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.component.scss":
/***/ (function(module, exports) {

module.exports = ".tabs {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-top: 0; }\n  .tabs > li {\n    bottom: 0;\n    position: relative;\n    display: block;\n    float: left;\n    margin-bottom: 0;\n    cursor: pointer;\n    height: 23px;\n    position: relative;\n    display: block;\n    padding: 10px 15px;\n    margin-right: 2px;\n    border: 1px solid transparent;\n    border-radius: 4px 4px 0 0; }\n  .tabs > li a {\n      font-family: 'Roboto Mono', monospace;\n      font-size: 14px;\n      text-decoration: none;\n      color: black; }\n  .tabs > li input[type=text] {\n      font-family: 'Roboto Mono', monospace;\n      font-size: 14px;\n      border: none;\n      background: none; }\n  .tabs > li input[type=text]:not(:disabled):focus {\n        background: #f1f1f1; }\n  .tabs > li.addTab {\n      font-size: 12pt;\n      cursor: pointer;\n      color: #aaaaaa; }\n  .tabs > li.addTab:hover {\n        color: black; }\n  .tabs > li:hover:not(.active), .tabs > li:focus:not(.active) {\n      text-decoration: none; }\n  .tabs > li:hover:not(.active):not(.addTab), .tabs > li:focus:not(.active):not(.addTab) {\n        border-color: #ddd #ddd #f1f1f1 #ddd;\n        background-color: #f1f1f1; }\n  .tabs > li > .tabEnumerator {\n      position: absolute;\n      top: -10px;\n      right: 5px;\n      padding: 2px 4px;\n      background: yellow;\n      border-radius: 5px; }\n  .tabs > li.active {\n      color: #555;\n      cursor: default;\n      background-color: #ddd;\n      border: 1px solid transparent; }\n  .tabs:before {\n    display: table;\n    content: \" \"; }\n  .tabs:after {\n    display: table;\n    clear: both;\n    content: \" \"; }\n  .tab-close {\n  margin-left: 10px;\n  color: gray;\n  text-align: right;\n  cursor: pointer; }\n  .tab-close:hover {\n    color: black; }\n  .newTab {\n  padding: 5% 20%; }\n  .border {\n  border: 1px solid #ddd; }\n  .layerOpTable td {\n  padding: 5px; }\n  .headers-align .mat-expansion-panel-header-title,\n.headers-align .mat-expansion-panel-header-description {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0; }\n  .headers-align .mat-expansion-panel-header-description {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  input[type=file] {\n  padding: 5px;\n  margin: 5px;\n  width: 300px;\n  background-color: #f1f1f1;\n  border-radius: 0px; }\n  input[type=file]:hover {\n    background-color: #ddd; }\n  .helpButtonContainer {\n  text-align: center;\n  margin-top: 20px; }\n  .help {\n  padding: 10px; }\n  .header {\n  text-align: right; }\n  .header div {\n    display: inline-block;\n    cursor: pointer; }\n  .header .logo {\n    text-align: right;\n    margin-right: 40px;\n    padding: 5px;\n    height: 2ex; }\n  .header .logo a {\n      text-decoration: none;\n      color: #b01a1a;\n      font-weight: 500; }\n  .header .helpButton {\n    position: fixed;\n    top: 0;\n    right: 0;\n    background: white;\n    border-style: solid;\n    border-color: #ddd;\n    border-width: 0 0 1px 1px;\n    border-radius: 0 0 0 50%;\n    text-align: center;\n    width: 2ex;\n    height: 2ex;\n    padding: 5px; }\n  .header .helpButton:hover {\n      background: #f1f1f1; }\n  .inputTable {\n  width: 100%;\n  border-collapse: collapse; }\n  .inputTable tr {\n    -webkit-transition: ease 0.2s;\n    transition: ease 0.2s;\n    width: 100%;\n    margin-top: 5px;\n    border-radius: 5px; }\n  .inputTable tr.featureRow:hover {\n      background: #f2f2f2; }\n  .inputTable tr td {\n      text-align: left;\n      width: 1%;\n      padding: 5px; }\n  .inputTable tr td.featureRow-button img {\n        vertical-align: middle;\n        margin-bottom: 2px; }\n  .inputTable tr td.subfeature:first-child {\n        border-left: 1px solid #ddd; }\n  .inputTable tr td.subfeature.last {\n        border-bottom: 1px solid #ddd; }\n  #layerlinkfield {\n  color: rgba(0, 0, 0, 0.42); }\n  #layerlinkfield /deep/.mat-input-underline {\n    background: none;\n    background-image: -webkit-gradient(linear, left top, right top, color-stop(0, rgba(0, 0, 0, 0.42)), color-stop(33%, rgba(0, 0, 0, 0.42)), color-stop(0, transparent));\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0, rgba(0, 0, 0, 0.42) 33%, transparent 0);\n    background-size: 4px 1px;\n    background-repeat: repeat-x; }\n  #layerlinkfield #layerLink {\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_tabs_directive__ = __webpack_require__("./src/app/tabs/dynamic-tabs.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_tab_component__ = __webpack_require__("./src/app/tab/tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_service__ = __webpack_require__("./src/app/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewmodels_service__ = __webpack_require__("./src/app/viewmodels.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// https://embed.plnkr.co/wWKnXzpm8V31wlvu64od/



 //import the DataService component so we can use it



var TabsComponent = (function () {
    function TabsComponent(_componentFactoryResolver, viewModelsService, dataService, http, configService) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this.viewModelsService = viewModelsService;
        this.dataService = dataService;
        this.http = http;
        this.configService = configService;
        this.ds = null;
        this.vms = null;
        this.techniques = [];
        this.dynamicTabs = [];
        this.coloring = null;
        this.comments = null;
        this.enabledness = null;
        this.filters = null;
        this.scoreExpression = "";
        this.legendItems = null;
        this.loadURL = "";
        //   ___ _   _ ___ _____ ___  __  __ ___ _______ ___    _  _   ___   _____ ___   _ _____ ___  ___   ___ _____ _   _ ___ ___
        //  / __| | | / __|_   _/ _ \|  \/  |_ _|_  / __|   \  | \| | /_\ \ / /_ _/ __| /_\_   _/ _ \| _ \ / __|_   _| | | | __| __|
        // | (__| |_| \__ \ | || (_) | |\/| || | / /| _|| |) | | .` |/ _ \ V / | | (_ |/ _ \| || (_) |   / \__ \ | | | |_| | _|| _|
        //  \___|\___/|___/ |_| \___/|_|  |_|___/___|___|___/  |_|\_/_/ \_\_/ |___\___/_/ \_\_| \___/|_|_\ |___/ |_|  \___/|_| |_|
        this.layerLinkURL = ""; //the user inputted layer link which will get parsed into a param
        this.customizedConfig = [];
        this.copiedRecently = false; // true if copyLayerLink has been called recently -- reverts to false after 2 seconds
        var self = this;
        this.ds = dataService;
        this.viewModelsService = viewModelsService;
    }
    TabsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.ds.retreiveConfig().subscribe(function (config) {
            _this.viewModelsService.domain = config["domain"];
            // console.log("INITIALIZING APPLICATION FOR DOMAIN: " + this.viewModelsService.domain);
            if (_this.getNamedFragmentValue("layerURL")) {
                _this.loadURL = _this.getNamedFragmentValue("layerURL");
                console.log(_this.loadURL);
                _this.loadLayerFromURL();
                if (_this.dynamicTabs.length == 0)
                    _this.newLayer(); // failed load from url, so create new blank layer
            }
            else if (config["default_layer"]["enabled"]) {
                _this.loadURL = config["default_layer"]["location"];
                console.log(_this.loadURL);
                _this.loadLayerFromLocalFile();
                if (_this.dynamicTabs.length == 0)
                    _this.newLayer(); // failed load from url, so create new blank layer
            }
            else {
                _this.newLayer();
            }
            var activeTabs = _this.dynamicTabs.filter(function (tab) { return tab.active; });
            // if there is no active tab set, activate the first
            if (activeTabs.length === 0) {
                _this.selectTab(_this.dynamicTabs[0]);
            }
            _this.customizedConfig = _this.configService.getFeatureList();
        });
    };
    /**
     * Open a new tab
     * @param  {[type]}  title               title of new tab
     * @param  {[type]}  template            template of content
     * @param  {[type]}  data                data to put in template
     * @param  {Boolean} [isCloseable=false] can this tab be closed?
     * @param  {Boolean} [replace=false]     replace the current tab with the new tab, TODO
     * @param  {Boolean} [forceNew=false]    force open a new tab even if a tab of that name already exists
     * @param  {Boolean} [dataTable=false]   is this a data-table tab? if so tab text should be editable

     */
    TabsComponent.prototype.openTab = function (title, template, data, isCloseable, replace, forceNew, dataTable) {
        if (isCloseable === void 0) { isCloseable = false; }
        if (replace === void 0) { replace = true; }
        if (forceNew === void 0) { forceNew = false; }
        if (dataTable === void 0) { dataTable = false; }
        if (!template) {
            console.error("ERROR: no template defined for tab titled ''", title, "''");
        }
        // determine if tab is already open. If it is, just change to that tab
        if (!forceNew) {
            for (var i = 0; i < this.dynamicTabs.length; i++) {
                if (this.dynamicTabs[i].title === title) {
                    this.selectTab(this.dynamicTabs[i]);
                    return;
                }
            }
        }
        // get a component factory for our TabComponent
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__tab_tab_component__["a" /* TabComponent */]);
        // fetch the view container reference from our anchor directive
        var viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
        // alternatively...
        // let viewContainerRef = this.dynamicTabPlaceholder;
        // create a component instance
        var componentRef = viewContainerRef.createComponent(componentFactory);
        // set the according properties on our component instance
        var instance = componentRef.instance;
        instance.title = title;
        instance.template = template;
        instance.dataContext = data;
        instance.isCloseable = isCloseable;
        instance.showScoreVariables = false;
        instance.isDataTable = dataTable;
        // remember the dynamic component for rendering the
        // tab navigation headers
        // this.dynamicTabs.push(componentRef.instance as TabComponent); //don't replace
        if (!replace || this.dynamicTabs.length === 0) {
            this.dynamicTabs.push(componentRef.instance); //don't replace
            this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
        }
        else {
            // find active tab index
            for (var i = 0; i < this.dynamicTabs.length; i++) {
                if (this.dynamicTabs[i].active) {
                    this.closeActiveTab(true); //close current and don't let it create a replacement tab
                    this.dynamicTabs.splice(i, 0, componentRef.instance); //replace
                    this.selectTab(this.dynamicTabs[i]);
                    return;
                }
            }
        }
    };
    /**
     * Select a given tab: deselects other tabs.
     * @param  {TabComponent} tab tab to select
     */
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.dynamicTabs.forEach(function (tab) { return tab.active = false; });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    /**
     * close a tab
     * @param  {TabComponent} tab              tab to close
     * @param  {[type]}       allowNoTab=false if true, doesn't select another tab, and won't open a new tab if there are none
     */
    TabsComponent.prototype.closeTab = function (tab, allowNoTab) {
        if (allowNoTab === void 0) { allowNoTab = false; }
        var action = 0; //controls post close-tab behavior
        // destroy tab viewmodel
        this.viewModelsService.destroyViewModel(tab.dataContext);
        for (var i = 0; i < this.dynamicTabs.length; i++) {
            if (this.dynamicTabs[i] === tab) {
                if (this.dynamicTabs[i].active) {
                    if (i == 0 && this.dynamicTabs.length > 1) {
                        action = 1;
                    }
                    else if (i > 0) {
                        action = 2;
                    }
                    else {
                        action = 3;
                    }
                }
                // remove the tab from our array
                this.dynamicTabs.splice(i, 1);
                // destroy our dynamically created component again
                var viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
                // let viewContainerRef = this.dynamicTabPlaceholder;
                viewContainerRef.remove(i);
                break;
            }
        }
        // post close-tab behavior: select new tab?
        if (!allowNoTab) {
            switch (action) {
                case 0:
                    break;
                case 1:
                    this.selectTab(this.dynamicTabs[0]); // select first tab
                    break;
                case 2:
                    this.selectTab(this.dynamicTabs[0]); //select first tab
                    break;
                case 3:
                    this.newBlankTab(); //make a new blank tab, automatically opens this tab
                    break;
                default:
                    console.error("post closetab action not specified (this should never happen)");
            }
        }
    };
    /**
     * Close the currently selected tab
     * @param  {[type]} allowNoTab=false if true, doesn't select another tab, and won't open a new tab if there are none
     */
    TabsComponent.prototype.closeActiveTab = function (allowNoTab) {
        if (allowNoTab === void 0) { allowNoTab = false; }
        var activeTabs = this.dynamicTabs.filter(function (tab) { return tab.active; });
        if (activeTabs.length > 0) {
            // close the 1st active tab (should only be one at a time)
            this.closeTab(activeTabs[0], allowNoTab);
        }
    };
    TabsComponent.prototype.getActiveTab = function () {
        var activeTabs = this.dynamicTabs.filter(function (tab) { return tab.active; });
        return activeTabs[0];
    };
    //  _      ___   _____ ___   ___ _____ _   _ ___ ___
    // | |    /_\ \ / / __| _ \ / __|_   _| | | | __| __|
    // | |__ / _ \ V /| _||   / \__ \ | | | |_| | _|| _|
    // |____/_/ \_\_| |___|_|_\ |___/ |_|  \___/|_| |_|
    /**
     * open a new "blank" tab showing a new layer button and an open layer button
     * @param  {[type]} replace=false replace the current tab with this blank tab?
     */
    TabsComponent.prototype.newBlankTab = function (replace) {
        if (replace === void 0) { replace = false; }
        this.openTab('new tab', this.blankTab, null, true, replace, true, false);
    };
    /**
     * create a new help tab
     * @param replace=false  replace currently open tab?
     * @param forceNew=false if false, select currently open help tab if possible
     */
    TabsComponent.prototype.newHelpTab = function (replace, forceNew) {
        if (replace === void 0) { replace = false; }
        if (forceNew === void 0) { forceNew = false; }
        if (replace)
            this.closeActiveTab();
        this.openTab('help', this.helpTab, null, true, replace, false);
    };
    TabsComponent.prototype.newExporterTab = function (exportData) {
        this.openTab('render: ' + exportData.viewModel.name, this.exporterTab, exportData, true, false, true);
    };
    /**
     * Given a unique root, returns a layer name that does not conflict any existing layers, e.g 'new layer' -> 'new layer 1'
     * @param  {string} root the root string to get the non-conflicting version of
     * @return {string}      non-conflicted version
     */
    TabsComponent.prototype.getUniqueLayerName = function (root) {
        var conflictNumber = 0;
        var viewModels = this.viewModelsService.viewModels;
        function isInteger(str) {
            var n = Math.floor(Number(str));
            return String(n) === str;
        }
        for (var i = 0; i < viewModels.length; i++) {
            if (!viewModels[i].name.startsWith(root))
                continue;
            if (viewModels[i].name === root) {
                conflictNumber = Math.max(conflictNumber, 1);
                continue;
            }
            var numberPortion = viewModels[i].name.substring(root.length, viewModels[i].name.length);
            //find lowest number higher than existing number
            if (isInteger(numberPortion)) {
                conflictNumber = Math.max(conflictNumber, Number(numberPortion) + 1);
            }
        }
        // if no layers of this name exist (conflictNumber == 0) just return root
        if (conflictNumber != 0)
            root = root + conflictNumber;
        return root;
    };
    /**
     * Open a new blank layer tab
     */
    TabsComponent.prototype.newLayer = function () {
        // find non conflicting name
        var name = this.getUniqueLayerName("layer");
        // create and open VM
        var vm = this.viewModelsService.newViewModel(name);
        this.openTab(name, this.layerTab, vm, true, true, true, true);
    };
    /**
     * Get a layer score expression variable for a tab
     * @param  index index of tab
     * @return       char expression variable
     */
    TabsComponent.prototype.indexToChar = function (index) {
        var realIndex = 0;
        for (var i = 0; i < index; i++) {
            if (this.dynamicTabs[i].dataContext)
                realIndex++;
        }
        return String.fromCharCode(97 + realIndex);
    };
    /**
     * Inverse of indextoChar, maps char to the tab it corresponds to
     * @param  char score expression variable
     * @return      tab index
     */
    TabsComponent.prototype.charToIndex = function (char) {
        // console.log("searching for char", char)
        var realIndex = 0;
        for (var i = 0; i < this.dynamicTabs.length; i++) {
            if (this.dynamicTabs[i].dataContext) {
                var charHere = String.fromCharCode(97 + realIndex);
                // console.log(charHere, this.dynamicTabs[i].dataContext.name)
                realIndex++;
                if (charHere == char)
                    return i;
            }
        }
    };
    /**
     * layer layer operation
     */
    TabsComponent.prototype.layerByOperation = function () {
        // build score expression map, mapping inline variables to their actual VMs
        var scoreVariables = new Map();
        var regex = /\b[a-z]\b/g; //\b matches word boundary
        var matches = this.scoreExpression.match(regex);
        var self = this;
        if (matches) {
            matches.forEach(function (match) {
                // trim
                var index = self.charToIndex(match);
                // console.log(match, index)
                var vm = self.dynamicTabs[index].dataContext;
                scoreVariables.set(match, vm);
            });
        }
        // console.log(scoreVariables);
        var layerName = this.getUniqueLayerName("layer by operation");
        try {
            var vm = this.viewModelsService.layerLayerOperation(this.scoreExpression, scoreVariables, this.comments, this.coloring, this.enabledness, layerName, this.filters, this.legendItems);
            this.openTab(layerName, this.layerTab, vm, true, true, true, true);
        }
        catch (err) {
            console.log(err);
            alert("Layer Layer operation error: " + err.message);
        }
    };
    /**
     * Check if there's an error in the score expression (syntax, etc)
     * @return error or null if no error
     */
    TabsComponent.prototype.getScoreExpressionError = function () {
        var self = this;
        try {
            // build fake scope
            var regex = /\b[a-z]\b/g; //\b matches word boundary
            var matches = self.scoreExpression.match(regex);
            var scope_1 = {};
            if (matches) {
                var noMatch_1 = "";
                matches.forEach(function (match) {
                    // trim
                    scope_1[match] = 0;
                    // check if letter is too large
                    // console.log("chartoindex["+match+"]", self.charToIndex(match))
                    if (typeof (self.charToIndex(match)) == "undefined") {
                        noMatch_1 = "Variable " + match + " does not match any layers";
                    }
                });
                // console.log(noMatch)
                if (noMatch_1.length > 0)
                    return noMatch_1;
            }
            var result = math.eval(self.scoreExpression, scope_1);
            // console.log(result)
            return null;
        }
        catch (err) {
            // console.log(err.message)
            return err.message;
        }
    };
    /**
     * open upload new layer prompt
     */
    TabsComponent.prototype.openUploadPrompt = function () {
        var input = document.getElementById("uploader");
        input.click();
    };
    /**
     * Loads an existing layer into a tab
     */
    TabsComponent.prototype.loadLayerFromFile = function () {
        var input = document.getElementById("uploader");
        if (input.files.length < 1) {
            alert("You must select a file to upload!");
            return;
        }
        this.readJSONFile(input.files[0]);
    };
    /**
     * Retrieves a file from the input element,
     * reads the json,
     * and adds the properties to a new viewModel, and loads that viewmodel into a new layer.
     */
    TabsComponent.prototype.readJSONFile = function (file) {
        var _this = this;
        // var input = (<HTMLInputElement>document.getElementById("uploader"));
        var reader = new FileReader();
        var viewModel = this.viewModelsService.newViewModel("loading layer...");
        reader.onload = function (e) {
            var string = reader.result;
            try {
                viewModel.deSerialize(string);
                _this.openTab("new layer", _this.layerTab, viewModel, true, true, true, true);
            }
            catch (err) {
                console.error("ERROR: Either the file is not JSON formatted, or the file structure is invalid.", err);
                alert("ERROR: Either the file is not JSON formatted, or the file structure is invalid.");
                _this.viewModelsService.destroyViewModel(viewModel);
            }
        };
        reader.readAsText(file);
    };
    /**
     * attempt an HTTP GET to loadURL, and load the response (if it exists) as a layer.
     */
    TabsComponent.prototype.loadLayerFromURL = function () {
        var _this = this;
        if (!this.loadURL.startsWith("http://") && !this.loadURL.startsWith("https://") && !this.loadURL.startsWith("FTP://"))
            this.loadURL = "https://" + this.loadURL;
        this.http.get(this.loadURL).subscribe(function (res) {
            var viewModel = _this.viewModelsService.newViewModel("loading layer...");
            var content = res.text();
            try {
                viewModel.deSerialize(content);
                _this.openTab("new layer", _this.layerTab, viewModel, true, true, true, true);
            }
            catch (err) {
                console.log(err);
                alert("ERROR: Failed to load layer file from URL");
                _this.viewModelsService.destroyViewModel(viewModel);
            }
        }, function (err) {
            console.error(err);
            if (err.status == 0) {
                // no response
                alert("ERROR: no HTTP response from " + _this.loadURL);
            }
            else {
                // response, but not a good one
                alert("ERROR: HTTP response " + err.status + " (" + err.statusText + ") for URL " + err.url);
            }
        });
    };
    TabsComponent.prototype.loadLayerFromLocalFile = function () {
        var _this = this;
        this.http.get(this.loadURL).subscribe(function (res) {
            var viewModel = _this.viewModelsService.newViewModel("loading layer...");
            var content = res.text();
            try {
                viewModel.deSerialize(content);
                _this.openTab("new layer", _this.layerTab, viewModel, true, true, true);
            }
            catch (err) {
                console.log(err);
                alert("ERROR: Failed to load layer file from local path");
                _this.viewModelsService.destroyViewModel(viewModel);
            }
        }, function (err) {
            console.error(err);
            alert("ERROR: HTTP response " + err.status + " (" + err.statusText + ") for path " + err.url);
        });
    };
    /**
     * Convert layerLinkURL to a query string value for layerURL query string
     * @return URL such that when opened will create navigator instance with a query String
     *         specifying layerLinkURL as the URL to fetch the default layer from
     */
    TabsComponent.prototype.getLayerLink = function () {
        // if (!this.layerLinkURL) return "";
        var str = window.location.href.split("#")[0];
        var join = "#"; //hash first, then ampersand
        if (this.layerLinkURL) {
            str += join + "layerURL=" + encodeURIComponent(this.layerLinkURL);
            join = "&";
        }
        for (var i = 0; i < this.customizedConfig.length; i++) {
            if (this.customizedConfig[i].subfeatures) {
                for (var j = 0; j < this.customizedConfig[i].subfeatures.length; j++) {
                    if (!this.customizedConfig[i].subfeatures[j].enabled) {
                        str += join + this.customizedConfig[i].subfeatures[j].name + "=false";
                        join = "&";
                    }
                }
            }
            else {
                if (!this.customizedConfig[i].enabled) {
                    str += join + this.customizedConfig[i].name + "=false";
                    join = "&";
                }
            }
        }
        return str;
    };
    /**
     * Select the layer link field text
     */
    TabsComponent.prototype.selectLayerLink = function () {
        var copyText = document.getElementById("layerLink");
        console.log(copyText);
        console.log(copyText.value);
        copyText.select();
    };
    /**
     * copy the created layer link to the user's clipboard
     */
    TabsComponent.prototype.copyLayerLink = function () {
        console.log("attempting copy");
        this.selectLayerLink();
        document.execCommand("Copy");
        this.copiedRecently = true;
        var self = this;
        window.setTimeout(function () { self.copiedRecently = false; }, 2000);
    };
    /**
     * Return true if the text is only letters a-z, false otherwise
     * @param  text text to eval
     * @return      true if a-z, false otherwise
     */
    TabsComponent.prototype.alphabetical = function (text) {
        return /^[a-z]+$/.test(text);
    };
    /**
     * get a key=value fragment value by key
     * @param  {string} name name of param to get the value of
     * @param  {string} url  optional, if unspecified searches in current window location. Otherwise searches this string
     * @return {string}      fragment param value
     */
    TabsComponent.prototype.getNamedFragmentValue = function (name, url) {
        if (!url)
            url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[#&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    return TabsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('blankTab'),
    __metadata("design:type", Object)
], TabsComponent.prototype, "blankTab", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('layerTab'),
    __metadata("design:type", Object)
], TabsComponent.prototype, "layerTab", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('helpTab'),
    __metadata("design:type", Object)
], TabsComponent.prototype, "helpTab", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('exporterTab'),
    __metadata("design:type", Object)
], TabsComponent.prototype, "exporterTab", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__dynamic_tabs_directive__["a" /* DynamicTabsDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dynamic_tabs_directive__["a" /* DynamicTabsDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dynamic_tabs_directive__["a" /* DynamicTabsDirective */]) === "function" && _a || Object)
], TabsComponent.prototype, "dynamicTabPlaceholder", void 0);
TabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tabs',
        template: __webpack_require__("./src/app/tabs/tabs.component.html"),
        styles: [__webpack_require__("./src/app/tabs/tabs.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__viewmodels_service__["c" /* ViewModelsService */], __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* ConfigService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__viewmodels_service__["c" /* ViewModelsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__viewmodels_service__["c" /* ViewModelsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* ConfigService */]) === "function" && _f || Object])
], TabsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "./src/app/taxii2lib.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TaxiiConnect; });
/* unused harmony export Server */
/* unused harmony export Collections */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collection; });
/* unused harmony export Status */
/**
 * @file
 * A TAXII 2.0 Javascript client library. Converted to Typescript by Josh Trahan 24 May 2018
 *
 * @see https://oasis-open.github.io/cti-documentation/
 *
 * @author R. Wathelet, September 2017, modified by J Trahan 24 May 2018
 * @version 0.2
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Provide asynchronous network communications to a TAXII 2.0 server.
 *
 */
var TaxiiConnect = (function () {
    /**
     * provide network communication to a Taxii 2.0 server.
     * @param {String} url - the base url of the Taxii2 server, for example https://example.com/
     * @param {String} user - the user name required for authentication.
     * @param {String} password - the user password required for authentication.
     * @param {Integer} timeout - the connection timeout in millisec
     */
    function TaxiiConnect(url, user, password, timeout) {
        this.baseURL = TaxiiConnect.withoutLastSlash(url);
        this.user = user;
        this.password = password;
        this.hash = btoa(this.user + ":" + this.password);
        this.timeout = timeout ? timeout : 10000; // default timeout
        this.version = '2.0';
        // default headers configurations
        this.getConfig = {
            'method': 'get',
            'headers': new Headers({
                'Accept': 'application/vnd.oasis.taxii+json',
                'version': this.version,
                'Authorization': 'Basic ' + this.hash
            })
        };
        this.postConfig = {
            'method': 'post',
            'headers': new Headers({
                'Accept': 'application/vnd.oasis.taxii+json',
                'Content-Type': 'application/vnd.oasis.stix+json',
                'version': this.version,
                'Authorization': 'Basic ' + this.hash
            })
        };
        this.getStixConfig = {
            'method': 'get',
            'headers': new Headers({
                'Accept': 'application/vnd.oasis.stix+json',
                'version': this.version,
                'Authorization': 'Basic ' + this.hash
            })
        };
    }
    // original code from: https://github.com/jkomyno/fetch-timeout
    TaxiiConnect.prototype.timeoutPromise = function (promise, timeout, error) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return reject(error); }, timeout);
            promise.then(resolve, reject);
        });
    };
    // original code from: https://github.com/jkomyno/fetch-timeout
    TaxiiConnect.prototype.fetchTimeout = function (url, options, timeout, error) {
        error = error || 'Timeout error';
        options = options || {};
        timeout = timeout || 10000;
        return this.timeoutPromise(fetch(url, options), timeout, error);
    };
    /**
     * send an async request (GET or POST) to the taxii2 server.
     *
     * @param {String} path - the full path to connect to.
     * @param {Object} config - the request configuration, see getConfig and postConfig for examples
     * @param {Object} filter - the filter object describing the filtering requested, this is added to the path as a query string
     * @returns {Promise} the server response in json.
     */
    TaxiiConnect.prototype.asyncFetch = function (path, config, filter) {
        return __awaiter(this, void 0, void 0, function () {
            var fullPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fullPath = (filter === undefined) ? path : path + "?" + TaxiiConnect.asQueryString(filter);
                        return [4 /*yield*/, (this.fetchTimeout(fullPath, config, this.timeout, 'connection timeout')
                                .then(function (res) { return res.json(); })
                                .catch(function (err) { throw new Error("fetch error: " + err); }))];
                    case 1: return [4 /*yield*/, (_a.sent())];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * send a GET async request to the taxii2 server.
     *
     * The server response is assigned to the cache attribute of the options object, and
     * the options flag attribute is set to true if a server request was performed.
     * Otherwise if the options.flag is initially true, the cached response (options.cache) is returned and
     * no server request is performed.
     * To force a server request used invalidate(), for example: server.invalidate()
     *
     * @param {String} path - the path to connect to.
     * @param {Object} options - an option object of the form: { "cache": {}, "flag": false }
     * @param {Object} filter - the filter object describing the filtering requested, this is added to the path as a query string
     * @param {Object} config - the request configuration
     * @returns {Promise} the server response object
     */
    TaxiiConnect.prototype.fetchThis = function (path, options, filter, config) {
        return __awaiter(this, void 0, void 0, function () {
            var conf, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        conf = config === undefined ? this.getConfig : config;
                        if (!!options.flag) return [3 /*break*/, 2];
                        _a = options;
                        return [4 /*yield*/, (this.asyncFetch(path, conf, filter))];
                    case 1:
                        _a.cache = _b.sent();
                        options.flag = true;
                        _b.label = 2;
                    case 2: return [2 /*return*/, options.cache];
                }
            });
        });
    };
    /**
     * return the url without the last slash.
     * @param {String} url - the URL string to process.
     * @returns {String} the url without the last slash.
     */
    TaxiiConnect.withoutLastSlash = function (url) {
        return (url.substr(-1) === '/') ? url.substr(0, url.length - 1) : url;
    };
    /**
     * return the url with a terminating slash.
     * @param {String} url - the URL string to process.
     * @returns {String} the url with a terminating slash.
     */
    TaxiiConnect.withLastSlash = function (url) {
        return (url.substr(-1) === '/') ? url : url + "/";
    };
    /**
     * convert a filter object into a query string.
     * @param {Object} filter - the filter object to process.
     * @returns {String} the query string corresponding to the filter object.
     */
    TaxiiConnect.asQueryString = function (filter) {
        return Object.keys(filter).map(function (k) {
            var value = (k === "added_after") ? k : "match[" + k + "]";
            return encodeURIComponent(value) + '=' + encodeURIComponent(filter[k]);
        }).join('&');
    };
    return TaxiiConnect;
}());

/**
 * Server encapsulates a discovery and api roots endpoints.
 */
var Server = (function () {
    /**
     * A TAXII Server endpoint representation.
     * @param {String} path - the path to the server discovery endpoint, for example "/taxii/"
     * @param {TaxiiConnect} conn - a TaxiiConnection instance providing network communications.
     */
    function Server(path, conn) {
        this.path = TaxiiConnect.withLastSlash(path);
        this.conn = conn;
        // cache represents the cached results and flag determines if it needs a re-fetch
        this.disOptions = { "cache": {}, "flag": false };
        this.apiOptions = { "cache": [], "flag": false };
    }
    /**
     * determine if the obj is empty, {}
     * @param {Object} obj - the object to test
     * @returns {Boolean} - true if empty else false
     */
    Server.isEmpty = function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    /**
     * reset the internal options flags so that the next method call of this class will
     * send a request to the server rather than retreive the results from cache.
     */
    Server.prototype.invalidate = function () {
        this.disOptions.flag = false;
        this.apiOptions.flag = false;
    };
    /**
     * retrieve the information about a TAXII Server and the list of API Roots.
     * @returns {Promise} the server discovery information object.
     */
    Server.prototype.discovery = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.conn.fetchThis(this.conn.baseURL + this.path, this.disOptions)];
            });
        });
    };
    /**
     * retrieve the api roots information objects.
     * Note: unreachable roots are not part of the results.
     *
     * API Roots are logical groupings of TAXII Channels, Collections, and related functionality.
     * Each API Root contains a set of Endpoints that a TAXII Client contacts in order to interact with the TAXII Server.
     * This returns the api roots information objects from the string urls.
     * @returns {Promise} the Array of api roots information objects
     */
    Server.prototype.api_roots = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.discovery().then(function (discovery) { return _this._getApiRoots(discovery); })];
            });
        });
    };
    /**
     * retrieve a map of key=the api root url and value=the api root object.
     *
     * API Roots are logical groupings of TAXII Channels, Collections, and related functionality.
     * Each API Root contains a set of Endpoints that a TAXII Client contacts in order to interact with the TAXII Server.
     * @returns {Promise} a Map of key=the url and value=the api root object.
     */
    Server.prototype.api_rootsMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var apiRootMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apiRootMap = new Map();
                        return [4 /*yield*/, this.discovery().then(function (discovery) { return _this._getApiRoots(discovery, apiRootMap); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, apiRootMap];
                }
            });
        });
    };
    /**
     * private function to retrieve the api roots
     * @param {discovery} discovery - a discovery object
     * @param {Map} apiRootMap - a map of key=url, value=api root object
     * @returns {Promise} the Array of api roots information objects
     */
    Server.prototype._getApiRoots = function (discovery, apiRootMap) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.apiOptions.flag) return [3 /*break*/, 2];
                        // clear the cache
                        this.apiOptions.cache = [];
                        // fetch all the api_roots in parallel
                        return [4 /*yield*/, Promise.all(discovery.api_roots.map(function (url) { return __awaiter(_this, void 0, void 0, function () {
                                var apiroot;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.conn.asyncFetch(url, this.conn.getConfig)];
                                        case 1:
                                            apiroot = _a.sent();
                                            // add to the map
                                            if (apiRootMap !== undefined) {
                                                apiRootMap.set(url, apiroot);
                                            }
                                            // add to the array of results
                                            this.apiOptions.cache.push(apiroot);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        // fetch all the api_roots in parallel
                        _a.sent();
                        // remove the undefined and empty elements, that is those we could not connect to.
                        this.apiOptions.cache = this.apiOptions.cache.filter(function (element) { return (element !== undefined && !Server.isEmpty(element)); });
                        this.apiOptions.flag = true;
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.apiOptions.cache];
                }
            });
        });
    };
    return Server;
}());

/**
 * Collections resource endpoint.
 * A TAXII Collections is an interface to a logical repository of CTI objects
 * provided by a TAXII Server and is used by TAXII Clients to send information
 * to the TAXII Server or request information from the TAXII Server.
 * A TAXII Server can host multiple Collections per API Root, and Collections
 * are used to exchange information in a request–response manner.
 */
var Collections = (function () {
    // hash: string;
    /**
     * A TAXII Collections for a specific api root path.
     * The collections resource is a simple wrapper around a list of collection resources.
     * @param {String} api_root_path - the full path to the desired api root endpoint
     * @param {TaxiiConnection} conn a TaxiiConnection class instance.
     */
    function Collections(api_root_path, conn) {
        this.api_root_path = TaxiiConnect.withLastSlash(api_root_path);
        this.conn = conn;
        // cache represents the cached results and flag determines if it needs a re-fetch
        this.options = { "cache": {}, "flag": false };
    }
    /**
     * reset the internal options flags so that the next method call of this class will
     * send a request to the server rather than retreive the results from cache.
     */
    Collections.prototype.invalidate = function () {
        this.options.flag = false;
    };
    /**
     * provide information about a specific Collection hosted under this API Root.
     *
     * @param {Integer} index - the index of the desired collection object.
     * @returns {Object} a specific collection object.
     */
    Collections.prototype.get = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (Number.isInteger(index) && index >= 0) {
                    // return a specific collection info
                    if (!this.collectionsFlag) {
                        return [2 /*return*/, this.collections().then(function (cols) {
                                if (index < _this.options.cache.collections.length) {
                                    return _this.options.cache.collections[index];
                                }
                                else {
                                    console.log("----> in Collections get(index) invalid index value: " + index);
                                }
                            })];
                    }
                    else {
                        if (index < this.options.cache.collections.length) {
                            return [2 /*return*/, this.options.cache.collections[index]];
                        }
                        else {
                            console.log("----> in Collections get(index) invalid index value: " + index);
                        }
                    }
                }
                else {
                    console.log("----> in Collections get(index) invalid index value: " + index);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * provide information about the Collections hosted under this API Root.
     *
     * @param {String} range - a pagination range string, for example "0-10"
     * @returns {Array} an array of collection objects
     */
    Collections.prototype.collections = function (range) {
        return __awaiter(this, void 0, void 0, function () {
            var theConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        theConfig = this.conn.getConfig;
                        if (range !== undefined) {
                            theConfig = {
                                'method': 'get',
                                'headers': new Headers({
                                    'Accept': 'application/vnd.oasis.taxii+json',
                                    'version': this.conn.version,
                                    'Authorization': 'Basic ' + this.conn.hash,
                                    'Range': 'items=' + range
                                })
                            };
                        }
                        // return a list of collection info
                        return [4 /*yield*/, this.conn.fetchThis(this.api_root_path + "collections/", this.options, "", theConfig)];
                    case 1:
                        // return a list of collection info
                        _a.sent();
                        return [2 /*return*/, this.options.cache.collections];
                }
            });
        });
    };
    return Collections;
}());

/**
 * A Collection resource endpoint.
 */
var Collection = (function () {
    /**
     * Collection resource endpoint.
     * @param {CollectionInfoObject} collectionInfo - the collection object of this endpoint.
     * @param {String} api_root_path - the full path to the desired api root endpoint.
     * @param {TaxiiConnection} conn - a TaxiiConnection class instance.
     */
    function Collection(collectionInfo, api_root_path, conn) {
        this.collectionInfo = collectionInfo;
        this.api_root_path = TaxiiConnect.withLastSlash(api_root_path);
        this.conn = conn;
        // construct the path
        this.path = this.api_root_path + "collections/" + collectionInfo.id + "/";
        // cache represents the cached results and flag determines if it needs a re-fetch
        this.colOptions = { "cache": {}, "flag": false };
        this.objsOptions = { "cache": {}, "flag": false };
        this.objOptions = { "cache": {}, "flag": false };
        this.manOptions = { "cache": {}, "flag": false };
    }
    /**
     * reset the internal options flags so that the next method call of this class will
     * send a request to the server rather than retreive the results from cache.
     */
    Collection.prototype.invalidate = function () {
        this.colOptions.flag = false;
        this.objsOptions.flag = false;
        this.objOptions.flag = false;
        this.manOptions.flag = false;
    };
    /**
     * check that the collection allows reading, if true then return the function passed in
     * else log an error
     * @param {Function} func - the function to return if the collection allows reading it
     * @returns {Function} the function if this collection allow reading else undefined
     */
    Collection.prototype.ifCanRead = function (func) {
        if (this.collectionInfo.can_read) {
            return func;
        }
        else {
            console.log("this collection does not allow reading: \n" + JSON.stringify(this.collectionInfo));
        }
    };
    /**
     * check that the collection allows writing, if true then return the function passed in else log an error
     * @param {Function} func - the function to return if the collection allows writing it
     * @returns {Function} the function if this collection allow writing else undefined
     */
    Collection.prototype.ifCanWrite = function (func) {
        if (this.collectionInfo.can_write) {
            return func;
        }
        else {
            console.log("this collection does not allow writing: \n" + JSON.stringify(this.collectionInfo));
        }
    };
    /**
     * retrieve this Collection object.
     * @returns {Promise} the Collection object
     */
    Collection.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.ifCanRead(this.conn.fetchThis(this.path, this.colOptions))];
            });
        });
    };
    /**
     * retrieve a STIX-2 bundle from this Collection.
     *
     * @param {Object} filter - the filter object describing the filtering requested, this is added to the path as a query string.
     * For example: {"added_after": "2016-02-01T00:00:01.000Z"}
     *              {"type": ["incident","ttp","actor"]}
     * @param {String} range - a pagination range string, for example "0-10"
     * @returns {Promise} the Bundle with the STIX-2 objects of this collection
     */
    Collection.prototype.getObjects = function (filter, range) {
        return __awaiter(this, void 0, void 0, function () {
            var theConfig;
            return __generator(this, function (_a) {
                theConfig = this.conn.getStixConfig;
                if (range !== undefined) {
                    theConfig = {
                        'method': 'get',
                        'headers': new Headers({
                            'Accept': 'application/vnd.oasis.stix+json',
                            'version': this.conn.version,
                            'Authorization': 'Basic ' + this.conn.hash,
                            'Range': 'items=' + range
                        })
                    };
                }
                return [2 /*return*/, this.ifCanRead(this.conn.fetchThis(this.path + "objects/", this.objsOptions, filter, theConfig))];
            });
        });
    };
    /**
     * retrieve a specific STIX-2 object from this collection objects bundle.
     *
     * @param {String} obj_id - the STIX-2 object id to retrieve
     * @param {Object} filter - the filter object describing the filtering requested, this is added to the path as a query string.
     * For example: {"version": "2016-01-01T01:01:01.000Z"}
     */
    Collection.prototype.getObject = function (obj_id, filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.ifCanRead(this.conn.fetchThis(this.path + "objects/" + obj_id + "/", this.objOptions, filter, this.conn.getStixConfig)
                            .then(function (bundle) { return bundle.objects.find(function (obj) { return obj.id === obj_id; }); })))];
                    case 1: return [4 /*yield*/, (_a.sent())];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * add a STIX-2 bundle object to this Collection objects.
     * @param {Bundle} bundle - the STIX-2 bundle object to add
     * @return {Status} a status object
     */
    Collection.prototype.addObject = function (bundle) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.ifCanWrite(this.conn.asyncFetch(this.path + "objects/", this.conn.postConfig))];
            });
        });
    };
    /**
     * retrieve all manifests about objects from this Collection.
     * Manifests are metadata about the objects.
     *
     * @param {Object} filter - the filter object describing the filtering requested, this is added to the path as a query string.
     * @param {String} range - a pagination range string, for example "0-10"
     * @return {Array} an array of manifest entries object
     */
    Collection.prototype.getManifests = function (filter, range) {
        return __awaiter(this, void 0, void 0, function () {
            var theConfig, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        theConfig = this.conn.getConfig;
                        if (range !== undefined) {
                            theConfig = {
                                'method': 'get',
                                'headers': new Headers({
                                    'Accept': 'application/vnd.oasis.taxii+json',
                                    'version': this.conn.version,
                                    'Authorization': 'Basic ' + this.conn.hash,
                                    'Range': 'items=' + range
                                })
                            };
                        }
                        _a = this.ifCanRead;
                        return [4 /*yield*/, this.conn.fetchThis(this.path + "manifest/", this.manOptions, filter, theConfig)];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        return [2 /*return*/, this.manOptions.cache.objects];
                }
            });
        });
    };
    /**
     * retrieve the manifest about a specific object (obj_id) from this Collection.
     * Manifests are metadata about the objects.
     *
     * @param {String} obj_id - the STIX-2 object id of the manifest to retrieve.
     * @param {Object} filter - the filter object describing the filtering requested, this is added to the path as a query string.
     * @return {Object} a manifest entry of the desired STIX-2 object.
     */
    Collection.prototype.getManifest = function (obj_id, filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.getManifests(filter).then(function (objects) { return objects.find(function (obj) { return obj.id === obj_id; }); }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Collection;
}());

/**
 * This Endpoint provides information about the status of a previous request.
 * In TAXII 2.0, the only request that can be monitored is one to add objects to a Collection.
 */
var Status = (function () {
    /**
     * provide information about the status of a previous request.
     * @param {String} api_root_path - the full path to the desired api root
     * @param {String} status_id - the identifier of the status message being requested, for STIX objects, their id.
     * @param {TaxiiConnection} conn - a TaxiiConnection class instance.
     */
    function Status(api_root_path, status_id, conn) {
        this.api_root_path = TaxiiConnect.withLastSlash(api_root_path);
        this.status_id = status_id;
        this.conn = conn;
        this.path = this.api_root_path + "status/" + status_id + "/";
    }
    /**
     * retrieve the Status information about a request to add objects to a Collection.
     * @return {Promise} the status object
     */
    Status.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.conn.asyncFetch(this.path, this.conn.getConfig)];
            });
        });
    };
    return Status;
}());

//# sourceMappingURL=taxii2lib.js.map

/***/ }),

/***/ "./src/app/viewmodels.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ViewModelsService; });
/* unused harmony export Gradient */
/* unused harmony export Gcolor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechniqueVM; });
/* unused harmony export Filter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //global variables
var ViewModelsService = (function () {
    function ViewModelsService(dataService) {
        this.dataService = dataService;
        this.domain = "mitre-mobile";
        this.viewModels = [];
        this.nonce = 0;
        // attempt to restore viewmodels
        // console.log(this.getCookie("viewModels"))
        // this.saveViewModelsCookies()
    }
    /**
     * Create and return a new viewModel
     * @param {string} name the viewmodel name
     * @return {ViewModel} the created ViewModel
     */
    ViewModelsService.prototype.newViewModel = function (name) {
        var vm = new ViewModel(name, this.domain, "vm" + this.getNonce());
        this.viewModels.push(vm);
        // console.log("created new viewModel", this.viewModels)
        // this.saveViewModelsCookies()
        return vm;
    };
    /**
     * Get a nonce.
     * @return a number that will never be regenerated by sequential calls to getNonce.
     *         Note: this applies on a session-by-session basis, nonces are not
     *         unique between app instances.
     */
    ViewModelsService.prototype.getNonce = function () {
        return this.nonce++;
    };
    /**
     * Destroy the viewmodel completely Nessecary if tab is closed!
     * @param vm viewmodel to destroy.
     */
    ViewModelsService.prototype.destroyViewModel = function (vm) {
        for (var i = 0; i < this.viewModels.length; i++) {
            if (this.viewModels[i] == vm) {
                // console.log("destroying viewmodel", vm)
                this.viewModels.splice(i, 1);
                return;
            }
        }
    };
    /**
     * layer combination operation
     * @param  scoreExpression math expression of score expression
     * @param  scoreVariables  variables in math expression, mapping to viewmodel they correspond to
     * @param  comments           what viewmodel to inherit comments from
     * @param  coloring           what viewmodel to inherit manual colors from
     * @param  enabledness        what viewmodel to inherit state from
     * @param  layerName          new layer name
     * @param  filters            viewmodel to inherit filters from
     * @return                    new viewmodel inheriting above properties
     */
    ViewModelsService.prototype.layerLayerOperation = function (scoreExpression, scoreVariables, comments, coloring, enabledness, layerName, filters, legendItems) {
        var result = new ViewModel("layer by operation", this.domain, "vm" + this.getNonce());
        if (scoreExpression) {
            scoreExpression = scoreExpression.toLowerCase(); //should be enforced by input, but just in case
            //Build maps
            var index_1 = 0;
            var indexToTechniqueVM_1 = new Map();
            var techniqueIDToIndex_1 = new Map();
            // assign unique integer ID to each score varaible technique
            scoreVariables.forEach(function (vm, key) {
                vm.techniqueVMs.forEach(function (tvm, key) {
                    if (!techniqueIDToIndex_1.has(tvm.technique_tactic_union_id)) {
                        indexToTechniqueVM_1.set(index_1, tvm);
                        techniqueIDToIndex_1.set(tvm.technique_tactic_union_id, index_1);
                        index_1 += 1;
                    }
                });
                // techniqueList.forEach(function(technique) {
                //     console.log(technique)
                //     if (!techniqueIDToIndex.has(technique.technique_id)) {
                //         indexToTechnique.set(index, technique)
                //         techniqueIDToIndex.set(technique.technique_id, index);
                //         index += 1;
                //     }
                // });
            });
            // console.log(techniqueIDToIndex, indexToTechniqueVM)
            var scope_1 = {};
            // build arrays where each index is mapped to a specific techniqueVM.
            // build scope for mathjs
            var missingTechniques_1 = new Map(); //count of how many viewModels are missing each technique
            var countMissingTechnique_1 = function (technique_tactic_union_id) {
                if (missingTechniques_1.has(technique_tactic_union_id)) {
                    var value = missingTechniques_1.get(technique_tactic_union_id);
                    value++;
                    missingTechniques_1.set(technique_tactic_union_id, value);
                }
                else {
                    missingTechniques_1.set(technique_tactic_union_id, 1);
                }
            };
            scoreVariables.forEach(function (vm, key) {
                var scoreArray = [];
                for (var i = 0; i < index_1; i++) {
                    var scoreValue = void 0;
                    // parse weird possible values. All non-numbers become 0. Count empty scores so that if all vms have no score it can omit them
                    if (!vm.hasTechniqueVM(indexToTechniqueVM_1.get(i).technique_tactic_union_id)) {
                        scoreValue = 0;
                        // console.log(vm, "doesn't have TVM", indexToTechniqueVM.get(i));
                        countMissingTechnique_1(indexToTechniqueVM_1.get(i).technique_tactic_union_id);
                    }
                    else {
                        var storedValue = vm.getTechniqueVM(indexToTechniqueVM_1.get(i).technique_tactic_union_id).score;
                        if (storedValue == "") {
                            // console.log("empty score",  indexToTechniqueVM.get(i))
                            scoreValue = 0;
                            countMissingTechnique_1(indexToTechniqueVM_1.get(i).technique_tactic_union_id);
                        }
                        else if (isNaN(Number(storedValue))) {
                            // console.log("NaN score:", storedValue, indexToTechniqueVM.get(i))
                            scoreValue = 0;
                            countMissingTechnique_1(indexToTechniqueVM_1.get(i).technique_tactic_union_id);
                        }
                        else {
                            scoreValue = Number(storedValue);
                        }
                    }
                    scoreArray[i] = scoreValue;
                }
                scope_1[key] = scoreArray;
            });
            // console.log(scoreExpression, scope)
            //evaluate math
            var mathResult_1 = math.eval(scoreExpression, scope_1);
            // console.log(scoreExpression, "(",scoreVariables,")", "->", scope, "->", mathResult)
            if (!(typeof (mathResult_1) === "number")) {
                // console.log("matrix result")
                // assign the reult to new viewmodel
                for (var i = 0; i < mathResult_1.length; i++) {
                    var techniqueVM = indexToTechniqueVM_1.get(i);
                    var vm = new TechniqueVM(techniqueVM.technique_tactic_union_id);
                    if (typeof (mathResult_1[i]) === "boolean") {
                        mathResult_1[i] = mathResult_1[i] ? "1" : "0"; //parse booleans to binary
                        result.gradient.maxValue = 1;
                        result.gradient.minValue = 0;
                        result.gradient.setGradientPreset("whiteblue");
                    }
                    vm.score = String(mathResult_1[i]);
                    result.setTechniqueVM(vm);
                }
            }
            else {
                if (typeof (mathResult_1) === "boolean") {
                    mathResult_1 = mathResult_1 ? "1" : "0"; //parse booleans to binary
                    result.gradient.maxValue = 1;
                    result.gradient.minValue = 0;
                    result.gradient.setGradientPreset("whiteblue");
                }
                // console.log("non-matrix result")
                indexToTechniqueVM_1.forEach(function (tvm, index) {
                    var new_tvm = new TechniqueVM(tvm.technique_tactic_union_id);
                    new_tvm.score = mathResult_1;
                    result.setTechniqueVM(new_tvm);
                });
            }
            missingTechniques_1.forEach(function (count, technique_tactic_union_id) {
                // console.log(result.getTechniqueVM(technique_tactic_union_id).techniqueName, count)
                if (count == scoreVariables.size) {
                    // enough misses that this technique had no score in any viewmodels
                    result.getTechniqueVM(technique_tactic_union_id).score = "";
                }
            });
        }
        /**
         * Inherit a field from a vm
         * @param  {ViewModel} inherit_vm the viewModel to inherit from
         * @param  {string}    fieldname  the field to inherit from the viewmodel
         */
        function inherit(inherit_vm, fieldname) {
            // console.log("inherit", fieldname)
            inherit_vm.techniqueVMs.forEach(function (inherit_TVM) {
                var tvm = result.hasTechniqueVM(inherit_TVM.technique_tactic_union_id) ? result.getTechniqueVM(inherit_TVM.technique_tactic_union_id) : new TechniqueVM(inherit_TVM.technique_tactic_union_id);
                tvm[fieldname] = inherit_TVM[fieldname];
                // console.log(inherit_TVM.techniqueName, "->", tvm)
                result.techniqueVMs.set(inherit_TVM.technique_tactic_union_id, tvm);
            });
        }
        if (comments)
            inherit(comments, "comment");
        if (coloring)
            inherit(coloring, "color");
        if (enabledness)
            inherit(enabledness, "enabled");
        if (filters) {
            result.filters = JSON.parse(JSON.stringify(filters.filters));
        }
        if (legendItems) {
            result.legendItems = JSON.parse(JSON.stringify(legendItems.legendItems));
        }
        result.name = layerName;
        // console.log(result)
        this.viewModels.push(result);
        result.updateGradient();
        return result;
    }; //end layer layer operation
    return ViewModelsService;
}());
ViewModelsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ViewModelsService);

/**
 * Gradient class used by viewmodels
 */
var Gradient = (function () {
    function Gradient() {
        //official colors used in gradients:
        this.colors = [new Gcolor("red"), new Gcolor("green")]; //current colors
        // options: string[] = ["white", "red", "orange", "yellow", "green", "blue", "purple"]; //possible colors
        this.options = ["#ffffff", "#ff6666", "#ffaf66", "#ffe766", "#8ec843", "#66b1ff", "#ff66f4"]; //possible colors
        this.minValue = 0;
        this.maxValue = 100;
        //presets in dropdown menu
        this.presets = {
            redgreen: [new Gcolor("#ff6666"), new Gcolor("#ffe766"), new Gcolor("#8ec843")],
            greenred: [new Gcolor("#8ec843"), new Gcolor("#ffe766"), new Gcolor("#ff6666")],
            bluered: [new Gcolor("#66b1ff"), new Gcolor("#ff66f4"), new Gcolor("#ff6666")],
            redblue: [new Gcolor("#ff6666"), new Gcolor("#ff66f4"), new Gcolor("#66b1ff")],
            whiteblue: [new Gcolor("#ffffff"), new Gcolor("#66b1ff")],
            whitered: [new Gcolor("#ffffff"), new Gcolor("#ff6666")]
        };
        this.setGradientPreset('redgreen');
    }
    /**
     * Create a string version of this gradient
     * @return string version of gradient
     */
    Gradient.prototype.serialize = function () {
        var colorList = [];
        var self = this;
        this.colors.forEach(function (gColor) {
            var hexstring = (tinycolor(gColor.color).toHexString());
            colorList.push(hexstring);
        });
        var rep = {
            "colors": colorList,
            "minValue": this.minValue,
            "maxValue": this.maxValue,
        };
        return JSON.stringify(rep, null, "\t");
    };
    /**
     * Restore this gradient from the given serialized representation
     * @param  rep serialized gradient
     */
    Gradient.prototype.deSerialize = function (rep) {
        var obj = JSON.parse(rep);
        var isColorStringArray = function (check) {
            for (var i = 0; i < check.length; i++) {
                if (typeof (check[i]) !== "string" || !tinycolor(check[i]).isValid()) {
                    console.error("TypeError:", check[i], "(", typeof (check[i]), ")", "is not a color-string");
                    return false;
                }
            }
            return true;
        };
        if (isColorStringArray(obj.colors)) {
            this.colors = [];
            var self_1 = this;
            obj.colors.forEach(function (hex) {
                self_1.colors.push(new Gcolor(hex));
            });
        }
        else
            console.error("TypeError: gradient colors field is not a color-string[]");
        this.minValue = obj.minValue;
        this.maxValue = obj.maxValue;
        this.updateGradient();
    };
    /**
     * Convert a preset to tinycolor array
     * @param  preset preset name from preset array
     * @return        [description]
     */
    Gradient.prototype.presetToTinyColor = function (preset) {
        var colorarray = [];
        var self = this;
        this.presets[preset].forEach(function (gcolor) {
            colorarray.push(gcolor.color);
        });
        return tinygradient(colorarray).css('linear', 'to right');
    };
    /**
     * set this gradient to use the preset
     * @param  preset preset to use
     */
    Gradient.prototype.setGradientPreset = function (preset) {
        this.colors = this.presets[preset];
        this.updateGradient();
    };
    /**
     * recompute gradient
     */
    Gradient.prototype.updateGradient = function () {
        var colorarray = [];
        var self = this;
        this.colors.forEach(function (colorobj) {
            // figure out what kind of color this is
            // let format = tinycolor(colorobj.color).getFormat();
            // if (format == "name" && colorobj.color in self.labelToColor)
            colorarray.push(colorobj.color);
        });
        this.gradient = tinygradient(colorarray);
        this.gradientRGB = this.gradient.rgb(100);
    };
    /**
     * Add a color to the end of the gradient
     */
    Gradient.prototype.addColor = function () {
        this.colors.push(new Gcolor(this.colors[this.colors.length - 1].color));
    };
    /**
     * Remove color at the given index
     * @param index index to remove color at
     */
    Gradient.prototype.removeColor = function (index) {
        this.colors.splice(index, 1);
    };
    // get the gradient color for a given value in the scale. Value is string format number
    Gradient.prototype.getColor = function (valueString) {
        if (!this.gradient)
            this.updateGradient();
        var value;
        if (valueString.length == 0)
            return;
        else
            value = Number(valueString);
        if (value >= this.maxValue) {
            return this.gradientRGB[this.gradientRGB.length - 1];
        }
        if (value <= this.minValue) {
            return this.gradientRGB[0];
        }
        var index = (value - this.minValue) / (this.maxValue - this.minValue) * 100;
        // console.log(value, "->", index)
        return this.gradientRGB[Math.round(index)];
    };
    return Gradient;
}());

//a color in the gradient
var Gcolor = (function () {
    function Gcolor(color) {
        this.color = color;
    }
    return Gcolor;
}());

;
//semi-synonymous with "layer"
var ViewModel = (function () {
    function ViewModel(name, domain, uid) {
        this.description = ""; //layer description
        this.version = "";
        /*
         * sorting int meanings (see data-table.filterTechniques()):
         * 0: ascending alphabetically
         * 1: descending alphabetically
         * 2: ascending numerically
         * 3: descending numerically
         */
        this.sorting = 0;
        /*
         * viewMode int meanings
         * 0: full table
         * 1: compact table (previosly: minitable)
         * 2: mini table
         */
        this.viewMode = 0;
        this.hideDisabled = false; //are disabled techniques hidden?
        this.highlightedTactic = "";
        this.highlightedTechnique = null;
        this.hoverTactic = "";
        this.gradient = new Gradient(); //gradient for scores
        this.backgroundPresets = ['#e60d0d', '#fc3b3b', '#fc6b6b', '#fca2a2', '#e6550d', '#fd8d3c', '#fdae6b', '#fdd0a2', '#e6d60d', '#fce93b', '#fcf26b', '#fcf3a2', '#31a354', '#74c476', '#a1d99b', '#c7e9c0', '#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#756bb1', '#9e9ac8', '#bcbddc', '#dadaeb', '#636363', '#969696', '#bdbdbd', '#d9d9d9'];
        this.legendColorPresets = [];
        this.selectTechniquesAcrossTactics = true;
        this.needsToConstructTechniqueVMs = false;
        this.legacyTechniques = [];
        this.techIDtoUIDMap = {};
        this.techUIDtoIDMap = {};
        this.showTacticRowBackground = false;
        this.tacticRowBackground = "#dddddd";
        //  _____ ___ ___ _  _ _  _ ___ ___  _   _ ___     _   ___ ___
        // |_   _| __/ __| || | \| |_ _/ _ \| | | | __|   /_\ | _ \_ _|
        //   | | | _| (__| __ | .` || | (_) | |_| | _|   / _ \|  _/| |
        //   |_| |___\___|_||_|_|\_|___\__\_\\___/|___| /_/ \_\_| |___|
        this.techniqueVMs = new Map(); //configuration for each technique
        //  ___ ___ ___ _____ ___ _  _  ___     _   ___ ___
        // | __|   \_ _|_   _|_ _| \| |/ __|   /_\ | _ \_ _|
        // | _|| |) | |  | |  | || .` | (_ |  / _ \|  _/| |
        // |___|___/___| |_| |___|_|\_|\___| /_/ \_\_| |___|
        this.selectedTechniques = []; //technique_id array of selected techniques
        this.legendItems = [];
        this.domain = domain;
        // console.log("INITIALIZING VIEW MODEL FOR DOMAIN: " + this.domain);
        this.filters = new Filter(this.domain);
        this.name = name;
        this.version = __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* layer_version */];
        this.uid = uid;
    }
    ViewModel.prototype.changeTechniqueIDSelectionLock = function () {
        this.selectTechniquesAcrossTactics = !this.selectTechniquesAcrossTactics;
    };
    ViewModel.prototype.getTechniqueIDFromUID = function (technique_tactic_union_id) {
        return this.techIDtoUIDMap[technique_tactic_union_id];
    };
    ViewModel.prototype.getTechniquesUIDFromID = function (technique_id) {
        return this.techIDtoUIDMap[technique_id];
    };
    ViewModel.prototype.setTechniqueMaps = function (techIDtoUIDMapt, techUIDtoIDMapt) {
        this.techIDtoUIDMap = Object.freeze(techIDtoUIDMapt);
        this.techUIDtoIDMap = Object.freeze(techUIDtoIDMapt);
    };
    // Getter
    ViewModel.prototype.getTechniqueVM = function (technique_tactic_union_id) {
        return this.techniqueVMs.get(technique_tactic_union_id);
    };
    // Setter
    ViewModel.prototype.setTechniqueVM = function (techniqueVM) {
        if (this.techniqueVMs.has(techniqueVM.technique_tactic_union_id))
            this.techniqueVMs.delete(techniqueVM.technique_tactic_union_id);
        this.techniqueVMs.set(techniqueVM.technique_tactic_union_id, techniqueVM);
    };
    //checker
    ViewModel.prototype.hasTechniqueVM = function (technique_tactic_union_id) {
        return this.techniqueVMs.has(technique_tactic_union_id);
    };
    /**
     * Add a technique to the current selection
     * @param {Technique} technique technique to add
     */
    ViewModel.prototype.addToTechniqueSelection = function (technique) {
        if (!this.selectTechniquesAcrossTactics) {
            if (!this.isTechniqueSelected(technique))
                this.selectedTechniques.push(technique.technique_tactic_union_id);
        }
        else {
            var map = Object.freeze(this.techIDtoUIDMap);
            var allTechniquesWithID = JSON.parse(JSON.stringify(map[technique.technique_id]));
            for (var i = 0; i < allTechniquesWithID.length; i++) {
                var item = JSON.parse(JSON.stringify(allTechniquesWithID[i]));
                if (!this.isTechniqueSelected_id(item))
                    this.selectedTechniques.push(item);
            }
        }
    };
    /**
     * Add a technique to the current selection
     * @param {string} technique_tactic_union_id techniqueID of technique to add
     */
    ViewModel.prototype.addToTechniqueSelection_id = function (technique_tactic_union_id) {
        if (!this.selectTechniquesAcrossTactics) {
            if (!this.isTechniqueSelected_id(technique_tactic_union_id))
                this.selectedTechniques.push(technique_tactic_union_id);
        }
        else {
            var map = Object.freeze(this.techIDtoUIDMap);
            //var map = Object.freeze(this.techUIDtoIDMap);
            var technique_id = this.techUIDtoIDMap[technique_tactic_union_id];
            var allTechniquesWithID = JSON.parse(JSON.stringify(map[technique_id]));
            for (var i = 0; i < allTechniquesWithID.length; i++) {
                var item = JSON.parse(JSON.stringify(allTechniquesWithID[i]));
                if (!this.isTechniqueSelected_id(item))
                    this.selectedTechniques.push(item);
            }
        }
    };
    ViewModel.prototype.addToTechniqueSelection_technique_id = function (technique_id) {
        var mapIDtoUID = Object.freeze(this.techIDtoUIDMap);
        var allTechniquesWithID = JSON.parse(JSON.stringify(mapIDtoUID[technique_id]));
        for (var i = 0; i < allTechniquesWithID.length; i++) {
            var item = JSON.parse(JSON.stringify(allTechniquesWithID[i]));
            if (!this.isTechniqueSelected_id(item))
                this.selectedTechniques.push(item);
        }
    };
    ViewModel.prototype.removeFromTechniqueSelection_technique_id = function (technique_id) {
        var map = Object.freeze(this.techIDtoUIDMap);
        var allTechniquesWithID = JSON.parse(JSON.stringify(map[technique_id]));
        for (var i = 0; i < allTechniquesWithID.length; i++) {
            this.removeFromTechniqueSelectionIndividual(allTechniquesWithID[i]);
        }
    };
    /**
     * Remove the technique from the current selection
     * @param {Technique} technique technique to remove
     */
    ViewModel.prototype.removeFromTechniqueSelection = function (technique) {
        if (!this.selectTechniquesAcrossTactics) {
            if (this.isTechniqueSelected(technique)) {
                var index = this.selectedTechniques.indexOf(technique.technique_tactic_union_id);
                this.selectedTechniques.splice(index, 1);
            }
        }
        else {
            var map = Object.freeze(this.techIDtoUIDMap);
            var allTechniquesWithID = JSON.parse(JSON.stringify(map[technique.technique_id]));
            for (var i = 0; i < allTechniquesWithID.length; i++) {
                this.removeFromTechniqueSelectionIndividual(allTechniquesWithID[i]);
            }
        }
    };
    ViewModel.prototype.removeFromTechniqueSelectionIndividual = function (technique_tactic_union_id) {
        if (this.isTechniqueSelected_id(technique_tactic_union_id)) {
            if (this.selectedTechniques.length > 1) {
                var index = this.selectedTechniques.indexOf(technique_tactic_union_id);
                this.selectedTechniques.splice(index, 1);
            }
            else {
                this.clearTechniqueSelection();
            }
        }
    };
    /**
     * Remove the technique from the current selection
     * @param {Technique} technique techniqueID of technique to remove
     */
    ViewModel.prototype.removeFromTechniqueSelection_id = function (technique_tactic_union_id) {
        if (!this.selectTechniquesAcrossTactics) {
            if (this.isTechniqueSelected_id(technique_tactic_union_id)) {
                var index = this.selectedTechniques.indexOf(technique_tactic_union_id);
                this.selectedTechniques.splice(index, 1);
            }
        }
        else {
            var map1 = Object.freeze(this.techUIDtoIDMap);
            var map = Object.freeze(this.techIDtoUIDMap);
            var technique_id = map1[technique_tactic_union_id];
            var allTechniquesWithID = JSON.parse(JSON.stringify(map[technique_id]));
            for (var i = 0; i < allTechniquesWithID.length; i++) {
                this.removeFromTechniqueSelectionIndividual(allTechniquesWithID[i]);
            }
        }
    };
    /**
     * Replace the current selection of techniques with the given technique
     * @param {Technique} technique technique to replace selection with
     */
    ViewModel.prototype.replaceTechniqueSelection = function (technique) {
        if (!this.selectTechniquesAcrossTactics) {
            this.selectedTechniques = [technique.technique_tactic_union_id];
        }
        else {
            this.selectedTechniques = JSON.parse(JSON.stringify(this.techIDtoUIDMap[technique.technique_id]));
        }
    };
    /**
     * Unselect all techniques
     */
    ViewModel.prototype.clearTechniqueSelection = function () {
        this.selectedTechniques = [];
    };
    /**
     * Select all techniques
     */
    ViewModel.prototype.selectAllTechniques = function () {
        this.clearTechniqueSelection();
        this.invertSelection();
        // console.log(self.selectedTechniques)
    };
    /**
     * Set all selected techniques to deselected, and select all techniques not currently selected
     */
    ViewModel.prototype.invertSelection = function () {
        var backup_selected = JSON.parse(JSON.stringify(this.selectedTechniques)); // deep copy
        var self = this;
        this.clearTechniqueSelection();
        this.techniqueVMs.forEach(function (tvm, key) {
            if (!backup_selected.includes(tvm.technique_tactic_union_id))
                self.selectedTechniques.push(tvm.technique_tactic_union_id);
        });
    };
    /**
     * are all techniques currently being edited?
     * @return [description]
     */
    ViewModel.prototype.isEditingAllTechniques = function () {
        var backup_selected = JSON.stringify(this.selectedTechniques); // deep copy
        this.selectAllTechniques();
        var all = JSON.stringify(this.selectedTechniques); // deep copy
        this.selectedTechniques = JSON.parse(backup_selected);
        return backup_selected == all;
    };
    /**
     * Return true if the given technique is selected, false otherwise
     * @param  {[type]}  technique the technique to check
     * @return {boolean}           true if selected, false otherwise
     */
    ViewModel.prototype.isTechniqueSelected = function (technique) {
        return this.selectedTechniques.includes(technique.technique_tactic_union_id);
    };
    /**
     * Return true if the given technique is selected, false otherwise
     * @param  {string}  technique_tactic_union_id the techniqueID to check
     * @return {boolean}           true if selected, false otherwise
     */
    ViewModel.prototype.isTechniqueSelected_id = function (technique_tactic_union_id) {
        return this.selectedTechniques.includes(technique_tactic_union_id);
    };
    /**
     * return the number of selected techniques
     * @return {number} the number of selected techniques
     */
    ViewModel.prototype.getSelectedTechniqueCount = function () {
        var result = 0;
        if (this.selectTechniquesAcrossTactics) {
            var techniqueIDs = [];
            for (var i = 0; i < this.selectedTechniques.length; i++) {
                var techniqueID = this.techUIDtoIDMap[this.selectedTechniques[i]];
                if (!techniqueIDs.includes(techniqueID)) {
                    techniqueIDs.push(techniqueID);
                }
            }
            result = techniqueIDs.length;
        }
        else {
            return this.selectedTechniques.length;
        }
        return result;
    };
    /**
     * Return true if currently editing any techniques, false otherwise
     * @return {boolean} true if currently editing any techniques, false otherwise
     */
    ViewModel.prototype.isCurrentlyEditing = function () {
        return this.getSelectedTechniqueCount() > 0;
    };
    /**
     * edit the selected techniques
     * @param {string} field the field to edit
     * @param {any}    value the value to place in the field
     */
    ViewModel.prototype.editSelectedTechniques = function (field, value) {
        for (var i = 0; i < this.selectedTechniques.length; i++) {
            var tvm = this.getTechniqueVM(this.selectedTechniques[i]);
            tvm[field] = value;
        }
    };
    /**
     * Reset the selected techniques' annotations to their default values
     */
    ViewModel.prototype.resetSelectedTechniques = function () {
        for (var i = 0; i < this.selectedTechniques.length; i++) {
            this.getTechniqueVM(this.selectedTechniques[i]).score = "";
            this.getTechniqueVM(this.selectedTechniques[i]).comment = "";
            this.getTechniqueVM(this.selectedTechniques[i]).color = "";
            this.getTechniqueVM(this.selectedTechniques[i]).enabled = true;
        }
    };
    /**
     * Get get a common value from the selected techniques
     * @param  field the field to get the common value from
     * @return       the value of the field if all selected techniques have the same value, otherwise ""
     */
    ViewModel.prototype.getEditingCommonValue = function (field) {
        if (!this.isCurrentlyEditing())
            return "";
        var commonValue = this.getTechniqueVM(this.selectedTechniques[0])[field];
        for (var i = 1; i < this.selectedTechniques.length; i++) {
            if (this.getTechniqueVM(this.selectedTechniques[i])[field] != commonValue)
                return "";
        }
        return commonValue;
    };
    //  ___ ___ ___ ___   _   _    ___ ____  _ _____ ___ ___  _  _
    // / __| __| _ \_ _| /_\ | |  |_ _|_  / /_\_   _|_ _/ _ \| \| |
    // \__ \ _||   /| | / _ \| |__ | | / / / _ \| |  | | (_) | .` |
    // |___/___|_|_\___/_/ \_\____|___/___/_/ \_\_| |___\___/|_|\_|
    /**
     * stringify this vm
     * @return string representation
     */
    ViewModel.prototype.serialize = function () {
        var modifiedTechniqueVMs = [];
        var self = this;
        this.techniqueVMs.forEach(function (value, key) {
            if (value.modified())
                modifiedTechniqueVMs.push(JSON.parse(value.serialize())); //only save techniqueVMs which have been modified
        });
        var rep = {};
        rep.name = this.name;
        rep.version = String(this.version);
        rep.domain = this.domain;
        rep.description = this.description;
        rep.filters = JSON.parse(this.filters.serialize());
        rep.sorting = this.sorting;
        rep.viewMode = this.viewMode;
        rep.hideDisabled = this.hideDisabled;
        rep.techniques = modifiedTechniqueVMs;
        rep.gradient = JSON.parse(this.gradient.serialize());
        rep.legendItems = JSON.parse(JSON.stringify(this.legendItems));
        rep.showTacticRowBackground = this.showTacticRowBackground;
        rep.tacticRowBackground = this.tacticRowBackground;
        rep.selectTechniquesAcrossTactics = this.selectTechniquesAcrossTactics;
        return JSON.stringify(rep, null, "\t");
    };
    /**
     * restore this vm from a string
     * @param  rep string to restore from
     */
    ViewModel.prototype.deSerialize = function (rep) {
        var obj = JSON.parse(rep);
        this.name = obj.name;
        this.domain = obj.domain;
        if (obj.version !== __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* layer_version */]) {
            alert("WARNING: Uploaded layer version (" + String(obj.version) + ") does not match Navigator's layer version ("
                + String(__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* layer_version */]) + "). The layer configuration may not be fully restored.");
        }
        if ("description" in obj) {
            if (typeof (obj.description) === "string")
                this.description = obj.description;
            else
                console.error("TypeError: description field is not a string");
        }
        if ("filters" in obj) {
            this.filters.deSerialize(obj.filters);
        }
        if ("sorting" in obj) {
            if (typeof (obj.sorting) === "number")
                this.sorting = obj.sorting;
            else
                console.error("TypeError: sorting field is not a number");
        }
        if ("viewMode" in obj) {
            if (typeof (obj.viewMode) === "number")
                this.viewMode = obj.viewMode;
            else
                console.error("TypeError: viewMode field is not a number");
        }
        if ("hideDisabled" in obj) {
            if (typeof (obj.hideDisabled) === "boolean")
                this.hideDisabled = obj.hideDisabled;
            else
                console.error("TypeError: hideDisabled field is not a boolean");
        }
        if ("gradient" in obj) {
            this.gradient = new Gradient();
            this.gradient.deSerialize(JSON.stringify(obj.gradient));
        }
        if ("legendItems" in obj) {
            for (var i = 0; i < obj.legendItems.length; i++) {
                var legendItem = {
                    color: "#defa217",
                    label: "default label"
                };
                if (!("label" in obj.legendItems[i])) {
                    console.error("Error: LegendItem required field 'label' not present");
                    continue;
                }
                if (!("color" in obj.legendItems[i])) {
                    console.error("Error: LegendItem required field 'label' not present");
                    continue;
                }
                if (typeof (obj.legendItems[i].label) === "string") {
                    legendItem.label = obj.legendItems[i].label;
                }
                else {
                    console.error("TypeError: legendItem label field is not a string");
                    continue;
                }
                if (typeof (obj.legendItems[i].color) === "string" && tinycolor(obj.legendItems[i].color).isValid()) {
                    legendItem.color = obj.legendItems[i].color;
                }
                else {
                    console.error("TypeError: legendItem color field is not a color-string:", obj.legendItems[i].color, "(", typeof (obj.legendItems[i].color), ")");
                    continue;
                }
                this.legendItems.push(legendItem);
            }
        }
        if ("showTacticRowBackground" in obj) {
            if (typeof (obj.showTacticRowBackground) === "boolean")
                this.showTacticRowBackground = obj.showTacticRowBackground;
            else
                console.error("TypeError: showTacticRowBackground field is not a boolean");
        }
        if ("tacticRowBackground" in obj) {
            if (typeof (obj.tacticRowBackground) === "string" && tinycolor(obj.tacticRowBackground).isValid())
                this.tacticRowBackground = obj.tacticRowBackground;
            else
                console.error("TypeError: tacticRowBackground field is not a color-string:", obj.tacticRowBackground, "(", typeof (obj.tacticRowBackground), ")");
        }
        if ("selectTechniquesAcrossTactics" in obj) {
            if (typeof (obj.selectTechniquesAcrossTactics) === "boolean")
                this.selectTechniquesAcrossTactics = obj.selectTechniquesAcrossTactics;
            else
                console.error("TypeError: selectTechniquesAcrossTactics field is not a boolean");
        }
        if ("techniques" in obj) {
            if (obj.techniques.length > 0) {
                if ("tactic" in obj.techniques[0]) {
                    for (var i = 0; i < obj.techniques.length; i++) {
                        var technique = obj.techniques[i];
                        var tvm = new TechniqueVM("");
                        tvm.deSerialize(JSON.stringify(technique), technique.techniqueID, technique.tactic);
                        this.setTechniqueVM(tvm);
                    }
                }
                else {
                    this.needsToConstructTechniqueVMs = true;
                    this.legacyTechniques = obj.techniques;
                }
            }
        }
        this.updateGradient();
    };
    ViewModel.prototype.constructLegacyVMs = function () {
        if (this.needsToConstructTechniqueVMs) {
            for (var i = 0; i < this.legacyTechniques.length; i++) {
                var techniqueID = this.legacyTechniques[i].techniqueID;
                var techniqueTactics = this.techIDtoUIDMap[techniqueID];
                if (techniqueTactics) {
                    for (var t = 0; t < techniqueTactics.length; t++) {
                        var tactic = techniqueTactics[t].split("^")[1];
                        var tvm = new TechniqueVM("");
                        tvm.deSerialize(JSON.stringify(this.legacyTechniques[i]), techniqueID, tactic);
                        this.setTechniqueVM(tvm);
                    }
                }
            }
        }
        this.updateGradient();
    };
    /**
     * Add a color to the end of the gradient
     */
    ViewModel.prototype.addGradientColor = function () {
        this.gradient.addColor();
        this.updateGradient();
    };
    /**
     * Remove color at the given index
     * @param index index to remove color at
     */
    ViewModel.prototype.removeGradientColor = function (index) {
        this.gradient.removeColor(index);
        this.updateGradient();
    };
    /**
     * Update this vm's gradient
     */
    ViewModel.prototype.updateGradient = function () {
        console.log("updating gradient");
        this.gradient.updateGradient();
        var self = this;
        this.techniqueVMs.forEach(function (tvm, key) {
            tvm.scoreColor = self.gradient.getColor(tvm.score);
        });
        this.updateLegendColorPresets();
    };
    ViewModel.prototype.addLegendItem = function () {
        var newObj = {
            label: "NewItem",
            color: '#00ffff'
        };
        this.legendItems.push(newObj);
    };
    ViewModel.prototype.deleteLegendItem = function (index) {
        this.legendItems.splice(index, 1);
    };
    ViewModel.prototype.clearLegend = function () {
        this.legendItems = [];
    };
    ViewModel.prototype.updateLegendColorPresets = function () {
        this.legendColorPresets = [];
        for (var i = 0; i < this.backgroundPresets.length; i++) {
            this.legendColorPresets.push(this.backgroundPresets[i]);
        }
        for (var i = 0; i < this.gradient.colors.length; i++) {
            this.legendColorPresets.push(this.gradient.colors[i].color);
        }
    };
    /**
     * return an acronym version of the given string
     * @param  words the string of words to get the acrnoym of
     * @return       the acronym string
     */
    ViewModel.prototype.acronym = function (words) {
        var skipWords = ["on", "and", "the", "with", "a", "an", "of", "in", "for", "from"];
        var result = "";
        var wordSplit = words.split(" ");
        if (wordSplit.length > 1) {
            var wordIndex = 0;
            // console.log(wordSplit);
            while (result.length < 4 && wordIndex < wordSplit.length) {
                if (skipWords.includes(wordSplit[wordIndex].toLowerCase())) {
                    wordIndex++;
                    continue;
                }
                //find first legal char of word
                for (var charIndex = 0; charIndex < wordSplit[wordIndex].length; charIndex++) {
                    var code = wordSplit[wordIndex].charCodeAt(charIndex);
                    if (code < 48 || (code > 57 && code < 65) || (code > 90 && code < 97) || code > 122) {
                        continue;
                    }
                    else {
                        result += wordSplit[wordIndex].charAt(charIndex).toUpperCase();
                        break;
                    }
                }
                wordIndex++;
            }
            return result;
        }
        else {
            return wordSplit[0].charAt(0).toUpperCase();
        }
    };
    return ViewModel;
}());

// the viewmodel for a specific technique
var TechniqueVM = (function () {
    function TechniqueVM(technique_tactic_union_id) {
        this.score = "";
        this.color = ""; //manually assigned color-class name
        this.enabled = true;
        this.comment = "";
        this.technique_tactic_union_id = technique_tactic_union_id;
        var idSplit = technique_tactic_union_id.split("^");
        this.techniqueID = idSplit[0];
        this.tactic = idSplit[1];
    }
    //print this object to the console
    TechniqueVM.prototype.print = function () {
        console.log(this.serialize());
        console.log(this);
    };
    /**
     * Has this TechniqueVM been modified from its initialized state?
     * @return true if it has been modified, false otherwise
     */
    TechniqueVM.prototype.modified = function () {
        return (this.score != "" || this.color != "" || !this.enabled || this.comment != "");
    };
    /**
     * Convert to string representation
     * @return string representation
     */
    TechniqueVM.prototype.serialize = function () {
        var rep = {};
        rep.techniqueID = this.techniqueID;
        rep.tactic = this.tactic;
        if (this.score !== "" && !(isNaN(Number(this.score))))
            rep.score = Number(this.score);
        rep.color = this.color;
        rep.comment = this.comment;
        rep.enabled = this.enabled;
        //rep.technique_tactic_union_id = this.technique_tactic_union_id;
        //console.log(rep);
        return JSON.stringify(rep, null, "\t");
    };
    /**
     * Restore this technique from serialized technique
     * @param rep serialized technique string
     */
    TechniqueVM.prototype.deSerialize = function (rep, techniqueID, tactic) {
        var obj = JSON.parse(rep);
        if (techniqueID !== undefined)
            this.techniqueID = techniqueID;
        else
            console.error("ERROR: TechniqueID field not present in technique");
        // if ("technique_tactic_union_id" in obj) this.technique_tactic_union_id = obj.technique_tactic_union_id;
        // else console.error("ERROR: technique_tactic_union_id field not present in technique")
        if ("tactic" !== undefined)
            this.tactic = tactic;
        else
            console.error("ERROR: tactic field not present in technique");
        if ("comment" in obj) {
            if (typeof (obj.comment) === "string")
                this.comment = obj.comment;
            else
                console.error("TypeError: technique comment field is not a number:", obj.comment, "(", typeof (obj.comment), ")");
        }
        if ("color" in obj && obj.color !== "") {
            if (typeof (obj.color) === "string" && tinycolor(obj.color).isValid())
                this.color = obj.color;
            else
                console.error("TypeError: technique color field is not a color-string:", obj.color, "(", typeof (obj.color), ")");
        }
        if ("score" in obj) {
            if (typeof (obj.score) === "number")
                this.score = String(obj.score);
            else
                console.error("TypeError: technique score field is not a number:", obj.score, "(", typeof (obj.score), ")");
        }
        if ("enabled" in obj) {
            if (typeof (obj.enabled) === "boolean")
                this.enabled = obj.enabled;
            else
                console.error("TypeError: technique enabled field is not a boolean:", obj.enabled, "(", typeof (obj.enabled), ")");
        }
        if (this.tactic !== undefined && this.techniqueID !== undefined) {
            this.technique_tactic_union_id = this.techniqueID + "^" + this.tactic;
        }
        else {
            console.log("ERROR: Tactic and TechniqueID field needed.");
        }
    };
    return TechniqueVM;
}());

// the data for a specific filter
var Filter = (function () {
    function Filter(domain) {
        this.stages = { options: ["prepare", "act"], selection: ["act"] };
        // this.stages.selection = ["act"];
        // this.stages.options = ["prepare", "act"];
        if (domain == "mitre-enterprise") {
            this.platforms = { selection: ["windows", "linux", "mac"], options: ["windows", "linux", "mac"] };
        }
        else if (domain == "mitre-mobile") {
            this.platforms = { selection: ["android", "ios"], options: ["android", "ios"] };
        }
    }
    Filter.prototype.toggleInFilter = function (filterName, value) {
        if (!this[filterName].options.includes(value)) {
            console.log("not a valid option to toggle", value, this[filterName]);
            return;
        }
        if (this[filterName].selection.includes(value)) {
            var index = this[filterName].selection.indexOf(value);
            this[filterName].selection.splice(index, 1);
        }
        else {
            this[filterName].selection.push(value);
        }
    };
    Filter.prototype.inFilter = function (filterName, value) {
        return this[filterName].selection.includes(value);
    };
    /**
     * Return the string representation of this filter
     * @return [description]
     */
    Filter.prototype.serialize = function () {
        return JSON.stringify({ "stages": this.stages.selection, "platforms": this.platforms.selection });
    };
    /**
     * Replace the properties of this object with those of the given serialized filter
     * @param rep filter object
     */
    Filter.prototype.deSerialize = function (rep) {
        // console.log(rep)
        var isStringArray = function (check) {
            for (var i = 0; i < check.length; i++) {
                if (typeof (check[i]) !== "string") {
                    console.error("TypeError:", check[i], "(", typeof (check[i]), ")", "is not a string");
                    return false;
                }
            }
            return true;
        };
        // let obj = JSON.parse(rep);
        if (rep.platforms) {
            if (isStringArray(rep.platforms))
                this.platforms.selection = rep.platforms;
            else
                console.error("TypeError: filter platforms field is not a string[]");
        }
        if (rep.stages) {
            if (isStringArray(rep.stages))
                this.stages.selection = rep.stages;
            else
                console.error("TypeError: filter stages field is not a string[]");
        }
    };
    return Filter;
}());

var _a;
//# sourceMappingURL=viewmodels.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map