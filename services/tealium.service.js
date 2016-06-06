"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var provide_1 = require("../provide");
var tealium_data_service_1 = require("./tealium-data.service");
var Tealium = (function () {
    function Tealium(config, tealiumData) {
        this.config = config;
        this.tealiumData = tealiumData;
        this.run();
    }
    Tealium.prototype.setConfig = function (newConfig) {
        this.config = newConfig;
    };
    Tealium.prototype.setConfigValue = function (key, value) {
        this.config[key] = value;
    };
    Tealium.prototype.view = function (data) {
        var data = data || this.tealiumData.getDataLayer(location.pathname);
        this.track("view", data);
    };
    Tealium.prototype.link = function (data) {
        var data = data || this.tealiumData.getDataLayer(location.pathname);
        this.track("link", data);
    };
    Tealium.prototype.track = function (ev, data) {
        var data = data || this.tealiumData.getDataLayer(location.pathname);
        var ev = ev || "view";
        var src = this.config.script_src;
        if (typeof utag == "undefined") {
            this.getScript(src, function () { return utag.track(ev, data); });
        }
        else {
            utag.track(ev, data);
        }
    };
    Tealium.prototype.setViewIdMap = function (viewIdMap) {
        return this.tealiumData.setViewIdMap(viewIdMap);
    };
    Tealium.prototype.addViewIdMapEntry = function (key, func) {
        return this.tealiumData.addViewIdMapEntry(key, func);
    };
    Tealium.prototype.run = function () {
        if (typeof utag_data == "undefined") {
            window['utag_data'] = this.tealiumData.getDataLayer(location.pathname) || {};
        }
        if (this.config.suppress_first_view) {
            window['utag_cfg_ovrd'] = { noview: true };
        }
        else {
            this.getScript(this.config.script_src);
        }
    };
    Tealium.prototype.getScript = function (src, callback) {
        var d = document;
        var o = {
            callback: callback || (function () {
            })
        };
        var s, t;
        if (typeof src == "undefined") {
            return;
        }
        if (typeof jQuery != "undefined") {
            // use cross-browser getScript from jQuery by default
            jQuery.ajaxSetup({ cache: true });
            jQuery.getScript(src, o.callback);
        }
        else {
            s = d.createElement("script");
            s.language = "javascript";
            s.type = "text/javascript";
            s.async = 1;
            s.charset = "utf-8";
            s.src = src;
            if (typeof o.callback == "function") {
                if (d.addEventListener) {
                    s.addEventListener("load", function () { return o.callback(); }, false);
                }
                else {
                    // old IE support
                    s.onreadystatechange = function () {
                        if (this.readyState == "complete" || this.readyState == "loaded") {
                            this.onreadystatechange = null;
                            o.callback();
                        }
                    };
                }
            }
            t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s, t);
        }
    };
    Tealium = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(provide_1.TEALIUM_CONFIG_TOKEN)), 
        __metadata('design:paramtypes', [Object, tealium_data_service_1.TealiumData])
    ], Tealium);
    return Tealium;
}());
exports.Tealium = Tealium;
