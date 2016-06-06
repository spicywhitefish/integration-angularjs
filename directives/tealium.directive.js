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
var core_1 = require("@angular/core");
var tealium_data_service_1 = require("../services/tealium-data.service");
var tealium_service_1 = require("../services/tealium.service");
// Add element-specific data to data layer from "data-tealium" attribute
// <input type="button" value="input button" data-tealium='{"event":"input pressed"}'><br>
var TealiumDirective = (function () {
    function TealiumDirective(tealiumData, tealium) {
        this.tealiumData = tealiumData;
        this.tealium = tealium;
    }
    TealiumDirective.prototype.onNavigate = function (e) {
        var dataLayer = this.tealiumData.getDataLayer(location.pathname);
        var target = e.target, event_type, event_text, event_source;
        if (target.nodeName) {
            event_type = "" + (target.nodeName.toLowerCase() || target.localName || target.tagName.toLowerCase());
            if (event_type === "a") {
                event_type = "link";
            }
            else if (event_type == "img") {
                event_type = "image";
            }
            dataLayer['event_type'] = event_type + " click";
        }
        dataLayer['event_target'] = event_type;
        event_text = target.title || target.innerText || target.innerHTML.trim();
        if (event_text === "" && (target.value && target.value !== "")) {
            event_text = target.value;
        }
        else if (event_text === "" && (target.alt && target.alt !== "")) {
            event_text = target.alt;
        }
        dataLayer['event_attr1'] = event_text;
        switch (event_type) {
            case "link":
                event_source = target.href;
                break;
            case "button":
                event_source = target.type || "";
                break;
            case "input":
                event_source = target.value || "";
                break;
            default:
                if (target.src && target.src !== "") {
                    event_source = target.src;
                }
                break;
        }
        dataLayer['event_attr2'] = event_source;
        this.link(dataLayer);
    };
    TealiumDirective.prototype.link = function (dataLayer) {
        var d = this.data || "{}";
        var b = {};
        try {
            b = jQuery.extend({}, JSON.parse(d), dataLayer);
        }
        catch (error) {
        }
        this.tealium.link(b);
    };
    __decorate([
        core_1.Input('tealium'), 
        __metadata('design:type', Object)
    ], TealiumDirective.prototype, "data", void 0);
    TealiumDirective = __decorate([
        core_1.Directive({
            selector: 'tealium',
            host: {
                '(mouseclick)': 'onNavigate',
                '(keyup.enter)': 'onNavigate'
            }
        }), 
        __metadata('design:paramtypes', [tealium_data_service_1.TealiumData, tealium_service_1.Tealium])
    ], TealiumDirective);
    return TealiumDirective;
}());
exports.TealiumDirective = TealiumDirective;
