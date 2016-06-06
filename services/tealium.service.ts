import {Injectable, Inject} from "@angular/core";
import {TealiumConfig} from "../interfaces/tealium-config";
import {ViewIdMap} from "../interfaces/view-id-map";
import {TEALIUM_CONFIG_TOKEN} from "../provide";
import {TealiumData} from "./tealium-data.service";


declare var utag: {track(ev: string, data: {})};
declare var utag_data: {};
declare var utag_cfg_ovrd: {noview: boolean};

@Injectable()
export class Tealium {

    constructor(@Inject(TEALIUM_CONFIG_TOKEN) private config:TealiumConfig,
                private tealiumData:TealiumData) {
        this.run();
    }

    private setConfig(newConfig: TealiumConfig): void {
        this.config = newConfig;
    }

    private setConfigValue(key: string, value: any): void {
        this.config[key] = value;
    }

    view(data?:Object): void {
        var data = data || this.tealiumData.getDataLayer(location.pathname);
        this.track("view", data);
    }

    link(data?:Object): void {
        var data = data || this.tealiumData.getDataLayer(location.pathname);
        this.track("link", data);
    }

    track(ev:string, data?:Object): void {
        var data = data || this.tealiumData.getDataLayer(location.pathname);
        var ev = ev || "view";
        var src = this.config.script_src;

        if (typeof utag == "undefined") {
            this.getScript(src, () => utag.track(ev, data))
        } else {
            utag.track(ev, data)
        }
    }

    setViewIdMap(viewIdMap:ViewIdMap) {
        return this.tealiumData.setViewIdMap(viewIdMap);
    }

    addViewIdMapEntry(key:string, func:() => any) {
        return this.tealiumData.addViewIdMapEntry(key, func);
    }

    private run() {
        if (typeof utag_data == "undefined") {
            window['utag_data'] = this.tealiumData.getDataLayer(location.pathname) || {};
        }
        if (this.config.suppress_first_view) {
            window['utag_cfg_ovrd'] = {noview: true};
        } else {
            this.getScript(this.config.script_src);
        }
    }

    private getScript(src:string, callback?:()=>any) {
        var d = document;
        var o = {
            callback: callback || (() => {
            })
        };
        var s, t;

        if (typeof src == "undefined") {
            return;
        }

        if (typeof jQuery != "undefined") {
            // use cross-browser getScript from jQuery by default
            jQuery.ajaxSetup({cache: true});
            jQuery.getScript(src, o.callback);
        } else {
            s = d.createElement("script");
            s.language = "javascript";
            s.type = "text/javascript";
            s.async = 1;
            s.charset = "utf-8";
            s.src = src;
            if (typeof o.callback == "function") {
                if (d.addEventListener) {
                    s.addEventListener("load", () => o.callback(), false);
                } else {
                    // old IE support
                    s.onreadystatechange = function () {
                        if (this.readyState == "complete" || this.readyState == "loaded") {
                            this.onreadystatechange = null;
                            o.callback();
                        }
                    };
                }
            }
            t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s, t);
        }
    }
}
