import { TealiumData } from "../services/tealium-data.service";
import { Tealium } from "../services/tealium.service";
export declare class TealiumDirective {
    private tealiumData;
    private tealium;
    data: any;
    constructor(tealiumData: TealiumData, tealium: Tealium);
    onNavigate(e: any): void;
    private link(dataLayer);
}
