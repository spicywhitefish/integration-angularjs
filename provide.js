"use strict";
var core_1 = require("@angular/core");
var tealium_service_1 = require("./services/tealium.service");
var tealium_data_service_1 = require("./services/tealium-data.service");
exports.TEALIUM_CONFIG_TOKEN = new core_1.OpaqueToken('TealiumConfig');
function provideTealium(config, viewIdMap) {
    if (typeof config.environment == 'undefined') {
        config.environment = 'dev';
    }
    if (typeof config.suppress_first_view == 'undefined') {
        config.suppress_first_view = true;
    }
    config.script_src = "//tags.tiqcdn.com/utag/" + config.account + "/" + config.profile + "/" + config.environment + "/utag.js";
    return [
        core_1.provide(exports.TEALIUM_CONFIG_TOKEN, { useValue: config }),
        core_1.provide(tealium_data_service_1.TealiumData, {
            useFactory: function () {
                new tealium_data_service_1.TealiumData(viewIdMap);
            }
        }),
        tealium_service_1.Tealium
    ];
}
exports.provideTealium = provideTealium;
