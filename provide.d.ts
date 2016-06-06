import { TealiumConfig } from "./interfaces/tealium-config";
import { OpaqueToken } from "@angular/core";
import { ViewIdMap } from "./interfaces/view-id-map";
export declare const TEALIUM_CONFIG_TOKEN: OpaqueToken;
export declare function provideTealium(config: TealiumConfig, viewIdMap: ViewIdMap): any[];
