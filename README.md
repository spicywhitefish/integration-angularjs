##Tealium Angular 2 Integration
Forked from https://github.com/Tealium/integration-angularjs

Contributors

- https://github.com/spicywhitefish/integration-angularjs/graphs/contributors


The Tealium directive binds this data to Tealium's link function on click.
```ts
import {TEALIUM_DIRECTIVES} from 'spicy-tealium';

```
Additional data can be passed to provide details for the specific event:
```html
<button [tealium]='{"event":"button pressed", "button_name":"button2"}'>
  Button
</button>
```

#Modules
This is a sample module to integrate Tealium iQ into your site easily. The main library for Tealium is **spicy-tealium.js** which has the following parts

* provideTealium - Function that Loads the Tealium JavaScript (utag.js) file, sets up tracking function (tealium.track), and enables Tealium providers and directives

* Tealium - Service for performing utag tracking

* TealiumData - Service for retrieving the custom data layer for a specific view

* TealiumDirective- Add element-specific data to data layer from "[tealium]" directive

##Sample usage
In your app bootstrap, provide Tealium 
```ts
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideTealium } from 'spicy-tealium';
import { App } from './myapp';

bootstrap(App, [
    provideTealium({
        account: 'tealiummobile',
        profile: 'demo',
        environment: 'dev',
        suppress_first_view: true
    })
]);
```

Activate a Tealium view when your component is routed to.
```ts
import { ROTUER_DIRECTIVES } from '@angular/router';
import { TEALIUM_DIRECTIVES } from 'spicy-tealium';
import { Tealium } from 'spicy-tealium';

@Component({
    directives: [ROUTER_DIRECTIVES, TEALIUM_DIRECTIVES]
    ...
)
export class MyComponent implements OnRouterActivate {
    constructor(private tealium: Tealium) {
    }
    ...
    routerOnActivate(prev, next) {
        this.tealium.view()
    }
```

Monitor link navigation with the [tealium] directive
```html
...
<a routerLink="['/Login']" [tealium]="{page_name: 'login'}">Login</a>
```
