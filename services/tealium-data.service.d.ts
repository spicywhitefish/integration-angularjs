import { ViewIdMap } from "../interfaces/view-id-map";
export declare class TealiumData {
    private view_id_map;
    constructor(view_id_map: ViewIdMap);
    setViewIdMap(map: ViewIdMap): void;
    addViewIdMapEntry(key: string, func: () => any): void;
    getDataLayer(view_id?: string): {
        [key: string]: string;
    };
}
