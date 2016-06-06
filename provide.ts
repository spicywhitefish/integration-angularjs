import {TealiumConfig} from "./interfaces/tealium-config";
import {OpaqueToken, provide} from "@angular/core";
import {Tealium} from "./services/tealium.service";
import {TealiumData} from "./services/tealium-data.service";
import {ViewIdMap} from "./interfaces/view-id-map";

export const TEALIUM_CONFIG_TOKEN = new OpaqueToken('TealiumConfig');

export function provideTealium(config:TealiumConfig, viewIdMap:ViewIdMap):any[] {
    if (typeof config.environment == 'undefined') {
        config.environment = 'dev';
    }
    
    if (typeof config.suppress_first_view == 'undefined') {
        config.suppress_first_view = true;
    }
    
    config.script_src = `//tags.tiqcdn.com/utag/${config.account}/${config.profile}/${config.environment}/utag.js`;

    return [
        provide(TEALIUM_CONFIG_TOKEN, {useValue: config}),
        provide(TealiumData, {
            useFactory: () => {
                new TealiumData(viewIdMap)
            }
        }),
        Tealium
    ];
}
