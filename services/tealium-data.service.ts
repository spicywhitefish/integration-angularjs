import {ViewIdMap} from "../interfaces/view-id-map";

export class TealiumData {
    constructor(private view_id_map: ViewIdMap) {
    };
    
    setViewIdMap(map: ViewIdMap) {
        this.view_id_map = map;
    }

    addViewIdMapEntry(key:string, func:() => any) {
        this.view_id_map[key] = func;
    }

    getDataLayer(view_id?: string): {[key: string]: string} {
        var dataLayer: {[key: string]: string};
        try {
            if (this.view_id_map[view_id]) {
                dataLayer = this.view_id_map[view_id]();
            }
            else {
                dataLayer = this.view_id_map.generic ? this.view_id_map.generic() : {};
            }
        } catch (err) {
            dataLayer = {
                page_type: "generic dataLayer error",
                error_name: err.name,
                error_message: err.message
            };
        }
        return dataLayer;
    }
}
