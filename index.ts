import {TealiumDirective} from "./directives/tealium.directive";

export {provideTealium} from "./provide";
export {Tealium} from "./services/tealium.service";
export {TealiumData} from "./services/tealium-data.service";

export const TEALIUM_DIRECTIVES = [
    TealiumDirective,
];
