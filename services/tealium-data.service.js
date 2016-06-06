"use strict";
var TealiumData = (function () {
    function TealiumData(view_id_map) {
        this.view_id_map = view_id_map;
    }
    ;
    TealiumData.prototype.setViewIdMap = function (map) {
        this.view_id_map = map;
    };
    TealiumData.prototype.addViewIdMapEntry = function (key, func) {
        this.view_id_map[key] = func;
    };
    TealiumData.prototype.getDataLayer = function (view_id) {
        var dataLayer;
        try {
            if (this.view_id_map[view_id]) {
                dataLayer = this.view_id_map[view_id]();
            }
            else {
                dataLayer = this.view_id_map.generic ? this.view_id_map.generic() : {};
            }
        }
        catch (err) {
            dataLayer = {
                page_type: "generic dataLayer error",
                error_name: err.name,
                error_message: err.message
            };
        }
        return dataLayer;
    };
    return TealiumData;
}());
exports.TealiumData = TealiumData;
