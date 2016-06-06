"use strict";
var tealium_directive_1 = require("./directives/tealium.directive");
var provide_1 = require("./provide");
exports.provideTealium = provide_1.provideTealium;
var tealium_service_1 = require("./services/tealium.service");
exports.Tealium = tealium_service_1.Tealium;
var tealium_data_service_1 = require("./services/tealium-data.service");
exports.TealiumData = tealium_data_service_1.TealiumData;
exports.TEALIUM_DIRECTIVES = [
    tealium_directive_1.TealiumDirective,
];
