import {Directive, Input} from "@angular/core";
import {TealiumData} from "../services/tealium-data.service";
import {Tealium} from "../services/tealium.service";

// Add element-specific data to data layer from "data-tealium" attribute
// <input type="button" value="input button" data-tealium='{"event":"input pressed"}'><br>
@Directive({
    selector: 'tealium',
    host: {
        '(mouseclick)': 'onNavigate',
        '(keyup.enter)': 'onNavigate'
    }
})
export class TealiumDirective {
    @Input('tealium') data:any;

    constructor(private tealiumData:TealiumData, private tealium:Tealium) {

    }

    onNavigate(e: any) {
        var dataLayer = this.tealiumData.getDataLayer(location.pathname);
        var target = e.target, event_type: string, event_text: string, event_source: string;

        if (target.nodeName) {
            event_type = `${target.nodeName.toLowerCase() || target.localName || target.tagName.toLowerCase()}`;
            if (event_type === "a") {
                event_type = "link";
            } else if (event_type == "img") {
                event_type = "image";
            }
            dataLayer['event_type'] = `${event_type} click`;
        }
        dataLayer['event_target'] = event_type;
        event_text = target.title || target.innerText || target.innerHTML.trim();
        if (event_text === "" && (target.value && target.value !== "")) {
            event_text = target.value;
        } else if (event_text === "" && (target.alt && target.alt !== "")) {
            event_text = target.alt;
        }
        dataLayer['event_attr1'] = event_text;
        switch (event_type) {
            case "link":
                event_source = target.href;
                break;
            case "button":
                event_source = target.type || "";
                break;
            case "input":
                event_source = target.value || "";
                break;
            default:
                if (target.src && target.src !== "") {
                    event_source = target.src;
                }
                break;
        }
        dataLayer['event_attr2'] = event_source;
        this.link(dataLayer);
    }

    private link(dataLayer: Object) {
        var d = this.data || "{}";
        var b = {};
        try {
            b = jQuery.extend({}, JSON.parse(d), dataLayer)
        } catch (error) {
        }
        this.tealium.link(b);
    }
}
