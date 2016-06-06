import { TealiumConfig } from "../interfaces/tealium-config";
import { ViewIdMap } from "../interfaces/view-id-map";
import { TealiumData } from "./tealium-data.service";
export declare class Tealium {
    private config;
    private tealiumData;
    constructor(config: TealiumConfig, tealiumData: TealiumData);
    private setConfig(newConfig);
    private setConfigValue(key, value);
    view(data?: Object): void;
    link(data?: Object): void;
    track(ev: string, data?: Object): void;
    setViewIdMap(viewIdMap: ViewIdMap): void;
    addViewIdMapEntry(key: string, func: () => any): void;
    private run();
    private getScript(src, callback?);
}
