/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var provide_1 = __webpack_require__(1);
	exports.provideTealium = provide_1.provideTealium;
	var tealium_service_1 = __webpack_require__(98);
	exports.Tealium = tealium_service_1.Tealium;
	var tealium_data_service_1 = __webpack_require__(99);
	exports.TealiumData = tealium_data_service_1.TealiumData;
	var directives_1 = __webpack_require__(100);
	exports.TEALIUM_DIRECTIVES = directives_1.TEALIUM_DIRECTIVES;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsd0JBQTZCLGVBQWUsQ0FBQztBQUFyQyxrREFBcUM7QUFDN0MsZ0NBQXNCLGdDQUFnQyxDQUFDO0FBQS9DLDRDQUErQztBQUN2RCxxQ0FBMEIscUNBQXFDLENBQUM7QUFBeEQseURBQXdEO0FBQ2hFLDJCQUFpQyxrQkFBa0IsQ0FBQztBQUE1Qyw2REFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RFQUxJVU1fRElSRUNUSVZFU30gZnJvbSBcIi4vc3JjL2RpcmVjdGl2ZXNcIjtcblxuZXhwb3J0IHtwcm92aWRlVGVhbGl1bX0gZnJvbSBcIi4vc3JjL3Byb3ZpZGVcIjtcbmV4cG9ydCB7VGVhbGl1bX0gZnJvbSBcIi4vc3JjL3NlcnZpY2VzL3RlYWxpdW0uc2VydmljZVwiO1xuZXhwb3J0IHtUZWFsaXVtRGF0YX0gZnJvbSBcIi4vc3JjL3NlcnZpY2VzL3RlYWxpdW0tZGF0YS5zZXJ2aWNlXCI7XG5leHBvcnQge1RFQUxJVU1fRElSRUNUSVZFU30gZnJvbSBcIi4vc3JjL2RpcmVjdGl2ZXNcIjtcbiJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var tealium_service_1 = __webpack_require__(98);
	var tealium_data_service_1 = __webpack_require__(99);
	exports.TEALIUM_CONFIG_TOKEN = new core_1.OpaqueToken('TealiumConfig');
	function provideTealium(config, viewIdMap) {
	    if (typeof config.environment == 'undefined') {
	        config.environment = 'dev';
	    }
	    if (typeof config.suppress_first_view == 'undefined') {
	        config.suppress_first_view = true;
	    }
	    config.script_src = "//tags.tiqcdn.com/utag/" + config.account + "/" + config.profile + "/" + config.environment + "/utag.js";
	    return [
	        core_1.provide(exports.TEALIUM_CONFIG_TOKEN, { useValue: config }),
	        core_1.provide(tealium_data_service_1.TealiumData, {
	            useFactory: function () {
	                new tealium_data_service_1.TealiumData(viewIdMap);
	            }
	        }),
	        tealium_service_1.Tealium
	    ];
	}
	exports.provideTealium = provideTealium;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm92aWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFBbUMsZUFBZSxDQUFDLENBQUE7QUFDbkQsZ0NBQXNCLDRCQUE0QixDQUFDLENBQUE7QUFDbkQscUNBQTBCLGlDQUFpQyxDQUFDLENBQUE7QUFHL0MsNEJBQW9CLEdBQUcsSUFBSSxrQkFBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXJFLHdCQUErQixNQUFvQixFQUFFLFNBQW1CO0lBQ3BFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxtQkFBbUIsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLEdBQUcsNEJBQTBCLE1BQU0sQ0FBQyxPQUFPLFNBQUksTUFBTSxDQUFDLE9BQU8sU0FBSSxNQUFNLENBQUMsV0FBVyxhQUFVLENBQUM7SUFFL0csTUFBTSxDQUFDO1FBQ0gsY0FBTyxDQUFDLDRCQUFvQixFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO1FBQ2pELGNBQU8sQ0FBQyxrQ0FBVyxFQUFFO1lBQ2pCLFVBQVUsRUFBRTtnQkFDUixJQUFJLGtDQUFXLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDOUIsQ0FBQztTQUNKLENBQUM7UUFDRix5QkFBTztLQUNWLENBQUM7QUFDTixDQUFDO0FBcEJlLHNCQUFjLGlCQW9CN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGVhbGl1bUNvbmZpZ30gZnJvbSBcIi4vaW50ZXJmYWNlcy90ZWFsaXVtLWNvbmZpZ1wiO1xuaW1wb3J0IHtPcGFxdWVUb2tlbiwgcHJvdmlkZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VGVhbGl1bX0gZnJvbSBcIi4vc2VydmljZXMvdGVhbGl1bS5zZXJ2aWNlXCI7XG5pbXBvcnQge1RlYWxpdW1EYXRhfSBmcm9tIFwiLi9zZXJ2aWNlcy90ZWFsaXVtLWRhdGEuc2VydmljZVwiO1xuaW1wb3J0IHtWaWV3SWRNYXB9IGZyb20gXCIuL2ludGVyZmFjZXMvdmlldy1pZC1tYXBcIjtcblxuZXhwb3J0IGNvbnN0IFRFQUxJVU1fQ09ORklHX1RPS0VOID0gbmV3IE9wYXF1ZVRva2VuKCdUZWFsaXVtQ29uZmlnJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlVGVhbGl1bShjb25maWc6VGVhbGl1bUNvbmZpZywgdmlld0lkTWFwOlZpZXdJZE1hcCk6YW55W10ge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLmVudmlyb25tZW50ID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbmZpZy5lbnZpcm9ubWVudCA9ICdkZXYnO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5zdXBwcmVzc19maXJzdF92aWV3ID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbmZpZy5zdXBwcmVzc19maXJzdF92aWV3ID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgY29uZmlnLnNjcmlwdF9zcmMgPSBgLy90YWdzLnRpcWNkbi5jb20vdXRhZy8ke2NvbmZpZy5hY2NvdW50fS8ke2NvbmZpZy5wcm9maWxlfS8ke2NvbmZpZy5lbnZpcm9ubWVudH0vdXRhZy5qc2A7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICBwcm92aWRlKFRFQUxJVU1fQ09ORklHX1RPS0VOLCB7dXNlVmFsdWU6IGNvbmZpZ30pLFxuICAgICAgICBwcm92aWRlKFRlYWxpdW1EYXRhLCB7XG4gICAgICAgICAgICB1c2VGYWN0b3J5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3IFRlYWxpdW1EYXRhKHZpZXdJZE1hcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIFRlYWxpdW1cbiAgICBdO1xufVxuIl19

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	* @module
	* @description
	* Starting point to import all public core APIs.
	*/
	__export(__webpack_require__(3));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	var application_ref_1 = __webpack_require__(31);
	exports.createPlatform = application_ref_1.createPlatform;
	exports.assertPlatform = application_ref_1.assertPlatform;
	exports.disposePlatform = application_ref_1.disposePlatform;
	exports.getPlatform = application_ref_1.getPlatform;
	exports.coreBootstrap = application_ref_1.coreBootstrap;
	exports.coreLoadAndBootstrap = application_ref_1.coreLoadAndBootstrap;
	exports.createNgZone = application_ref_1.createNgZone;
	exports.PlatformRef = application_ref_1.PlatformRef;
	exports.ApplicationRef = application_ref_1.ApplicationRef;
	var application_tokens_1 = __webpack_require__(57);
	exports.APP_ID = application_tokens_1.APP_ID;
	exports.APP_INITIALIZER = application_tokens_1.APP_INITIALIZER;
	exports.PACKAGE_ROOT_URL = application_tokens_1.PACKAGE_ROOT_URL;
	exports.PLATFORM_INITIALIZER = application_tokens_1.PLATFORM_INITIALIZER;
	__export(__webpack_require__(79));
	__export(__webpack_require__(80));
	__export(__webpack_require__(81));
	var debug_node_1 = __webpack_require__(86);
	exports.DebugElement = debug_node_1.DebugElement;
	exports.DebugNode = debug_node_1.DebugNode;
	exports.asNativeElements = debug_node_1.asNativeElements;
	exports.getDebugNode = debug_node_1.getDebugNode;
	__export(__webpack_require__(58));
	__export(__webpack_require__(87));
	__export(__webpack_require__(88));
	__export(__webpack_require__(89));
	__export(__webpack_require__(90));
	__export(__webpack_require__(22));
	var profile_1 = __webpack_require__(67);
	exports.wtfCreateScope = profile_1.wtfCreateScope;
	exports.wtfLeave = profile_1.wtfLeave;
	exports.wtfStartTimeRange = profile_1.wtfStartTimeRange;
	exports.wtfEndTimeRange = profile_1.wtfEndTimeRange;
	var lang_1 = __webpack_require__(5);
	exports.Type = lang_1.Type;
	exports.enableProdMode = lang_1.enableProdMode;
	var async_1 = __webpack_require__(33);
	exports.EventEmitter = async_1.EventEmitter;
	var exceptions_1 = __webpack_require__(16);
	exports.ExceptionHandler = exceptions_1.ExceptionHandler;
	exports.WrappedException = exceptions_1.WrappedException;
	exports.BaseException = exceptions_1.BaseException;
	__export(__webpack_require__(91));
	//# sourceMappingURL=index.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	* This indirection is needed to free up Component, etc symbols in the public API
	* to be used by the decorator versions of these annotations.
	*/
	var di_1 = __webpack_require__(4);
	exports.QueryMetadata = di_1.QueryMetadata;
	exports.ContentChildrenMetadata = di_1.ContentChildrenMetadata;
	exports.ContentChildMetadata = di_1.ContentChildMetadata;
	exports.ViewChildrenMetadata = di_1.ViewChildrenMetadata;
	exports.ViewQueryMetadata = di_1.ViewQueryMetadata;
	exports.ViewChildMetadata = di_1.ViewChildMetadata;
	exports.AttributeMetadata = di_1.AttributeMetadata;
	var directives_1 = __webpack_require__(8);
	exports.ComponentMetadata = directives_1.ComponentMetadata;
	exports.DirectiveMetadata = directives_1.DirectiveMetadata;
	exports.PipeMetadata = directives_1.PipeMetadata;
	exports.InputMetadata = directives_1.InputMetadata;
	exports.OutputMetadata = directives_1.OutputMetadata;
	exports.HostBindingMetadata = directives_1.HostBindingMetadata;
	exports.HostListenerMetadata = directives_1.HostListenerMetadata;
	var view_1 = __webpack_require__(10);
	exports.ViewMetadata = view_1.ViewMetadata;
	exports.ViewEncapsulation = view_1.ViewEncapsulation;
	var di_2 = __webpack_require__(4);
	var directives_2 = __webpack_require__(8);
	var view_2 = __webpack_require__(10);
	var decorators_1 = __webpack_require__(11);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ComponentMetadata.
	/**
	 * Declare reusable UI building blocks for an application.
	 *
	 * Each Angular component requires a single `@Component` annotation. The `@Component`
	 * annotation specifies when a component is instantiated, and which properties and hostListeners it
	 * binds to.
	 *
	 * When a component is instantiated, Angular
	 * - creates a shadow DOM for the component.
	 * - loads the selected template into the shadow DOM.
	 * - creates all the injectable objects configured with `providers` and `viewProviders`.
	 *
	 * All template expressions and statements are then evaluated against the component instance.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the component class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the component.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='component'}
	 */
	exports.Component = decorators_1.makeDecorator(directives_2.ComponentMetadata, function (fn) { return fn.View = View; });
	// TODO(alexeagle): remove the duplication of this doc. It is copied from DirectiveMetadata.
	/**
	 * Directives allow you to attach behavior to elements in the DOM.
	 *
	 * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
	 *
	 * A directive consists of a single directive annotation and a controller class. When the
	 * directive's `selector` matches
	 * elements in the DOM, the following steps occur:
	 *
	 * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
	 * arguments.
	 * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
	 * depth-first order,
	 *    as declared in the HTML.
	 *
	 * ## Understanding How Injection Works
	 *
	 * There are three stages of injection resolution.
	 * - *Pre-existing Injectors*:
	 *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
	 * the dependency was
	 *     specified as `@Optional`, returns `null`.
	 *   - The platform injector resolves browser singleton resources, such as: cookies, title,
	 * location, and others.
	 * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
	 * the same parent-child hierarchy
	 *     as the component instances in the DOM.
	 * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
	 * element has an `ElementInjector`
	 *     which follow the same parent-child hierarchy as the DOM elements themselves.
	 *
	 * When a template is instantiated, it also must instantiate the corresponding directives in a
	 * depth-first order. The
	 * current `ElementInjector` resolves the constructor dependencies for each directive.
	 *
	 * Angular then resolves dependencies as follows, according to the order in which they appear in the
	 * {@link ViewMetadata}:
	 *
	 * 1. Dependencies on the current element
	 * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
	 * 3. Dependencies on component injectors and their parents until it encounters the root component
	 * 4. Dependencies on pre-existing injectors
	 *
	 *
	 * The `ElementInjector` can inject other directives, element-specific special objects, or it can
	 * delegate to the parent
	 * injector.
	 *
	 * To inject other directives, declare the constructor parameter as:
	 * - `directive:DirectiveType`: a directive on the current element only
	 * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
	 * element and the
	 *    Shadow DOM root.
	 * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
	 * directives.
	 * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
	 * child directives.
	 *
	 * To inject element-specific special objects, declare the constructor parameter as:
	 * - `element: ElementRef` to obtain a reference to logical element in the view.
	 * - `viewContainer: ViewContainerRef` to control child template instantiation, for
	 * {@link DirectiveMetadata} directives only
	 * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
	 *
	 * ### Example
	 *
	 * The following example demonstrates how dependency injection resolves constructor arguments in
	 * practice.
	 *
	 *
	 * Assume this HTML template:
	 *
	 * ```
	 * <div dependency="1">
	 *   <div dependency="2">
	 *     <div dependency="3" my-directive>
	 *       <div dependency="4">
	 *         <div dependency="5"></div>
	 *       </div>
	 *       <div dependency="6"></div>
	 *     </div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * With the following `dependency` decorator and `SomeService` injectable class.
	 *
	 * ```
	 * @Injectable()
	 * class SomeService {
	 * }
	 *
	 * @Directive({
	 *   selector: '[dependency]',
	 *   inputs: [
	 *     'id: dependency'
	 *   ]
	 * })
	 * class Dependency {
	 *   id:string;
	 * }
	 * ```
	 *
	 * Let's step through the different ways in which `MyDirective` could be declared...
	 *
	 *
	 * ### No injection
	 *
	 * Here the constructor is declared with no arguments, therefore nothing is injected into
	 * `MyDirective`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor() {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with no dependencies.
	 *
	 *
	 * ### Component-level injection
	 *
	 * Directives can inject any injectable instance from the closest component injector or any of its
	 * parents.
	 *
	 * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
	 * from the parent
	 * component's injector.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(someService: SomeService) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a dependency on `SomeService`.
	 *
	 *
	 * ### Injecting a directive from the current element
	 *
	 * Directives can inject other directives declared on the current element.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(dependency: Dependency) {
	 *     expect(dependency.id).toEqual(3);
	 *   }
	 * }
	 * ```
	 * This directive would be instantiated with `Dependency` declared at the same element, in this case
	 * `dependency="3"`.
	 *
	 * ### Injecting a directive from any ancestor elements
	 *
	 * Directives can inject other directives declared on any ancestor element (in the current Shadow
	 * DOM), i.e. on the current element, the
	 * parent element, or its parents.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Host() dependency: Dependency) {
	 *     expect(dependency.id).toEqual(2);
	 *   }
	 * }
	 * ```
	 *
	 * `@Host` checks the current element, the parent, as well as its parents recursively. If
	 * `dependency="2"` didn't
	 * exist on the direct parent, this injection would
	 * have returned
	 * `dependency="1"`.
	 *
	 *
	 * ### Injecting a live collection of direct child directives
	 *
	 *
	 * A directive can also query for other child directives. Since parent directives are instantiated
	 * before child directives, a directive can't simply inject the list of child directives. Instead,
	 * the directive injects a {@link QueryList}, which updates its contents as children are added,
	 * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
	 * `ngIf`, or an `ngSwitch`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
	 * 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
	 *
	 * ### Injecting a live collection of descendant directives
	 *
	 * By passing the descendant flag to `@Query` above, we can include the children of the child
	 * elements.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
	 *
	 * ### Optional injection
	 *
	 * The normal behavior of directives is to return an error when a specified dependency cannot be
	 * resolved. If you
	 * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
	 * with `@Optional()`.
	 * This explicitly permits the author of a template to treat some of the surrounding directives as
	 * optional.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Optional() dependency:Dependency) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a `Dependency` directive found on the current element.
	 * If none can be
	 * found, the injector supplies `null` instead of throwing an error.
	 *
	 * ### Example
	 *
	 * Here we use a decorator directive to simply define basic tool-tip behavior.
	 *
	 * ```
	 * @Directive({
	 *   selector: '[tooltip]',
	 *   inputs: [
	 *     'text: tooltip'
	 *   ],
	 *   host: {
	 *     '(mouseenter)': 'onMouseEnter()',
	 *     '(mouseleave)': 'onMouseLeave()'
	 *   }
	 * })
	 * class Tooltip{
	 *   text:string;
	 *   overlay:Overlay; // NOT YET IMPLEMENTED
	 *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
	 *
	 *   constructor(overlayManager:OverlayManager) {
	 *     this.overlay = overlay;
	 *   }
	 *
	 *   onMouseEnter() {
	 *     // exact signature to be determined
	 *     this.overlay = this.overlayManager.open(text, ...);
	 *   }
	 *
	 *   onMouseLeave() {
	 *     this.overlay.close();
	 *     this.overlay = null;
	 *   }
	 * }
	 * ```
	 * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
	 * `tooltip` selector,
	 * like so:
	 *
	 * ```
	 * <div tooltip="some text here"></div>
	 * ```
	 *
	 * Directives can also control the instantiation, destruction, and positioning of inline template
	 * elements:
	 *
	 * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
	 * runtime.
	 * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
	 * location in the current view
	 * where these actions are performed.
	 *
	 * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
	 * `<template>` element. Thus a
	 * directive in a child view cannot inject the directive that created it.
	 *
	 * Since directives that create views via ViewContainers are common in Angular, and using the full
	 * `<template>` element syntax is wordy, Angular
	 * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
	 * equivalent.
	 *
	 * Thus,
	 *
	 * ```
	 * <ul>
	 *   <li *foo="bar" title="text"></li>
	 * </ul>
	 * ```
	 *
	 * Expands in use to:
	 *
	 * ```
	 * <ul>
	 *   <template [foo]="bar">
	 *     <li title="text"></li>
	 *   </template>
	 * </ul>
	 * ```
	 *
	 * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
	 * the directive
	 * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the directive class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the directive.
	 *
	 * ### Example
	 *
	 * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
	 *
	 * Here is a simple directive that triggers on an `unless` selector:
	 *
	 * ```
	 * @Directive({
	 *   selector: '[unless]',
	 *   inputs: ['unless']
	 * })
	 * export class Unless {
	 *   viewContainer: ViewContainerRef;
	 *   templateRef: TemplateRef;
	 *   prevCondition: boolean;
	 *
	 *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
	 *     this.viewContainer = viewContainer;
	 *     this.templateRef = templateRef;
	 *     this.prevCondition = null;
	 *   }
	 *
	 *   set unless(newCondition) {
	 *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
	 *       this.prevCondition = true;
	 *       this.viewContainer.clear();
	 *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
	 *       this.prevCondition = false;
	 *       this.viewContainer.create(this.templateRef);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * We can then use this `unless` selector in a template:
	 * ```
	 * <ul>
	 *   <li *unless="expr"></li>
	 * </ul>
	 * ```
	 *
	 * Once the directive instantiates the child view, the shorthand notation for the template expands
	 * and the result is:
	 *
	 * ```
	 * <ul>
	 *   <template [unless]="exp">
	 *     <li></li>
	 *   </template>
	 *   <li></li>
	 * </ul>
	 * ```
	 *
	 * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
	 * the instantiated
	 * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
	 */
	exports.Directive = decorators_1.makeDecorator(directives_2.DirectiveMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewMetadata.
	/**
	 * Metadata properties available for configuring Views.
	 *
	 * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
	 * `@View` annotation specifies the HTML template to use, and lists the directives that are active
	 * within the template.
	 *
	 * When a component is instantiated, the template is loaded into the component's shadow root, and
	 * the expressions and statements in the template are evaluated against the component.
	 *
	 * For details on the `@Component` annotation, see {@link ComponentMetadata}.
	 *
	 * ### Example
	 *
	 * ```
	 * @Component({
	 *   selector: 'greet',
	 *   template: 'Hello {{name}}!',
	 *   directives: [GreetUser, Bold]
	 * })
	 * class Greet {
	 *   name: string;
	 *
	 *   constructor() {
	 *     this.name = 'World';
	 *   }
	 * }
	 * ```
	 */
	var View = decorators_1.makeDecorator(view_2.ViewMetadata, function (fn) { return fn.View = View; });
	/**
	 * Specifies that a constant attribute value should be injected.
	 *
	 * The directive can inject constant string literals of host element attributes.
	 *
	 * ### Example
	 *
	 * Suppose we have an `<input>` element and want to know its `type`.
	 *
	 * ```html
	 * <input type="text">
	 * ```
	 *
	 * A decorator can inject string literal `text` like so:
	 *
	 * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
	 */
	exports.Attribute = decorators_1.makeParamDecorator(di_2.AttributeMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from QueryMetadata.
	/**
	 * Declares an injectable parameter to be a live list of directives or variable
	 * bindings from the content children of a directive.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
	 *
	 * Assume that `<tabs>` component would like to get a list its children `<pane>`
	 * components as shown in this example:
	 *
	 * ```html
	 * <tabs>
	 *   <pane title="Overview">...</pane>
	 *   <pane *ngFor="let o of objects" [title]="o.title">{{o.text}}</pane>
	 * </tabs>
	 * ```
	 *
	 * The preferred solution is to query for `Pane` directives using this decorator.
	 *
	 * ```javascript
	 * @Component({
	 *   selector: 'pane',
	 *   inputs: ['title']
	 * })
	 * class Pane {
	 *   title:string;
	 * }
	 *
	 * @Component({
	 *  selector: 'tabs',
	 *  template: `
	 *    <ul>
	 *      <li *ngFor="let pane of panes">{{pane.title}}</li>
	 *    </ul>
	 *    <ng-content></ng-content>
	 *  `
	 * })
	 * class Tabs {
	 *   panes: QueryList<Pane>;
	 *   constructor(@Query(Pane) panes:QueryList<Pane>) {
	 *     this.panes = panes;
	 *   }
	 * }
	 * ```
	 *
	 * A query can look for variable bindings by passing in a string with desired binding symbol.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/sT2j25cH1dURAyBRCKx1?p=preview))
	 * ```html
	 * <seeker>
	 *   <div #findme>...</div>
	 * </seeker>
	 *
	 * @Component({ selector: 'seeker' })
	 * class seeker {
	 *   constructor(@Query('findme') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * In this case the object that is injected depend on the type of the variable
	 * binding. It can be an ElementRef, a directive or a component.
	 *
	 * Passing in a comma separated list of variable bindings will query for all of them.
	 *
	 * ```html
	 * <seeker>
	 *   <div #findMe>...</div>
	 *   <div #findMeToo>...</div>
	 * </seeker>
	 *
	 *  @Component({
	 *   selector: 'seeker'
	 * })
	 * class Seeker {
	 *   constructor(@Query('findMe, findMeToo') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * Configure whether query looks for direct children or all descendants
	 * of the querying element, by using the `descendants` parameter.
	 * It is set to `false` by default.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/wtGeB977bv7qvA5FTYl9?p=preview))
	 * ```html
	 * <container #first>
	 *   <item>a</item>
	 *   <item>b</item>
	 *   <container #second>
	 *     <item>c</item>
	 *   </container>
	 * </container>
	 * ```
	 *
	 * When querying for items, the first container will see only `a` and `b` by default,
	 * but with `Query(TextDirective, {descendants: true})` it will see `c` too.
	 *
	 * The queried directives are kept in a depth-first pre-order with respect to their
	 * positions in the DOM.
	 *
	 * Query does not look deep into any subcomponent views.
	 *
	 * Query is updated as part of the change-detection cycle. Since change detection
	 * happens after construction of a directive, QueryList will always be empty when observed in the
	 * constructor.
	 *
	 * The injected object is an unmodifiable live list.
	 * See {@link QueryList} for more details.
	 */
	exports.Query = decorators_1.makeParamDecorator(di_2.QueryMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ContentChildrenMetadata.
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChildren(ChildDirective) contentChildren: QueryList<ChildDirective>;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChildren is set
	 *   }
	 * }
	 * ```
	 */
	exports.ContentChildren = decorators_1.makePropDecorator(di_2.ContentChildrenMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ContentChildMetadata.
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChild(ChildDirective) contentChild;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChild is set
	 *   }
	 * }
	 * ```
	 */
	exports.ContentChild = decorators_1.makePropDecorator(di_2.ContentChildMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewChildrenMetadata.
	/**
	 * Declares a list of child element references.
	 *
	 * Angular automatically updates the list when the DOM is updated.
	 *
	 * `ViewChildren` takes a argument to select elements.
	 *
	 * - If the argument is a type, directives or components with the type will be bound.
	 *
	 * - If the argument is a string, the string is interpreted as a list of comma-separated selectors.
	 * For each selector, an element containing the matching template variable (e.g. `#child`) will be
	 * bound.
	 *
	 * View children are set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren(ChildCmp) children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp #child1></child-cmp>
	 *     <child-cmp #child2></child-cmp>
	 *     <child-cmp #child3></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren('child1,child2,child3') children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 *
	 * See also: [ViewChildrenMetadata]
	 */
	exports.ViewChildren = decorators_1.makePropDecorator(di_2.ViewChildrenMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewChildMetadata.
	/**
	 * Declares a reference to a child element.
	 *
	 * `ViewChildren` takes a argument to select elements.
	 *
	 * - If the argument is a type, a directive or a component with the type will be bound.
	 *
	 * - If the argument is a string, the string is interpreted as a selector. An element containing the
	 * matching template variable (e.g. `#child`) will be bound.
	 *
	 * In either case, `@ViewChild()` assigns the first (looking from above) element if there are
	 * multiple matches.
	 *
	 * View child is set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild(ChildCmp) child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp #child></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild('child') child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 * See also: [ViewChildMetadata]
	 */
	exports.ViewChild = decorators_1.makePropDecorator(di_2.ViewChildMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewQueryMetadata.
	/**
	 * Similar to {@link QueryMetadata}, but querying the component view, instead of
	 * the content children.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/eNsFHDf7YjyM6IzKxM1j?p=preview))
	 *
	 * ```javascript
	 * @Component({
	 *   ...,
	 *   template: `
	 *     <item> a </item>
	 *     <item> b </item>
	 *     <item> c </item>
	 *   `
	 * })
	 * class MyComponent {
	 *   shown: boolean;
	 *
	 *   constructor(private @Query(Item) items:QueryList<Item>) {
	 *     items.changes.subscribe(() => console.log(items.length));
	 *   }
	 * }
	 * ```
	 *
	 * Supports the same querying parameters as {@link QueryMetadata}, except
	 * `descendants`. This always queries the whole view.
	 *
	 * As `shown` is flipped between true and false, items will contain zero of one
	 * items.
	 *
	 * Specifies that a {@link QueryList} should be injected.
	 *
	 * The injected object is an iterable and observable live list.
	 * See {@link QueryList} for more details.
	 */
	exports.ViewQuery = decorators_1.makeParamDecorator(di_2.ViewQueryMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from PipeMetadata.
	/**
	 * Declare reusable pipe function.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='pipe'}
	 */
	exports.Pipe = decorators_1.makeDecorator(directives_2.PipeMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from InputMetadata.
	/**
	 * Declares a data-bound input property.
	 *
	 * Angular automatically updates data-bound properties during change detection.
	 *
	 * `InputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * The following example creates a component with two input properties.
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'bank-account',
	 *   template: `
	 *     Bank Name: {{bankName}}
	 *     Account Id: {{id}}
	 *   `
	 * })
	 * class BankAccount {
	 *   @Input() bankName: string;
	 *   @Input('account-id') id: string;
	 *
	 *   // this property is not bound, and won't be automatically updated by Angular
	 *   normalizedBankName: string;
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
	 *   `,
	 *   directives: [BankAccount]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 */
	exports.Input = decorators_1.makePropDecorator(directives_2.InputMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from OutputMetadata.
	/**
	 * Declares an event-bound output property.
	 *
	 * When an output property emits an event, an event handler attached to that event
	 * the template is invoked.
	 *
	 * `OutputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Directive({
	 *   selector: 'interval-dir',
	 * })
	 * class IntervalDir {
	 *   @Output() everySecond = new EventEmitter();
	 *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
	 *
	 *   constructor() {
	 *     setInterval(() => this.everySecond.emit("event"), 1000);
	 *     setInterval(() => this.five5Secs.emit("event"), 5000);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
	 *     </interval-dir>
	 *   `,
	 *   directives: [IntervalDir]
	 * })
	 * class App {
	 *   everySecond() { console.log('second'); }
	 *   everyFiveSeconds() { console.log('five seconds'); }
	 * }
	 * bootstrap(App);
	 * ```
	 */
	exports.Output = decorators_1.makePropDecorator(directives_2.OutputMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from HostBindingMetadata.
	/**
	 * Declares a host property binding.
	 *
	 * Angular automatically checks host property bindings during change detection.
	 * If a binding changes, it will update the host element of the directive.
	 *
	 * `HostBindingMetadata` takes an optional parameter that specifies the property
	 * name of the host element that will be updated. When not provided,
	 * the class property name is used.
	 *
	 * ### Example
	 *
	 * The following example creates a directive that sets the `valid` and `invalid` classes
	 * on the DOM element that has ngModel directive on it.
	 *
	 * ```typescript
	 * @Directive({selector: '[ngModel]'})
	 * class NgModelStatus {
	 *   constructor(public control:NgModel) {}
	 *   @HostBinding('[class.valid]') get valid { return this.control.valid; }
	 *   @HostBinding('[class.invalid]') get invalid { return this.control.invalid; }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<input [(ngModel)]="prop">`,
	 *   directives: [FORM_DIRECTIVES, NgModelStatus]
	 * })
	 * class App {
	 *   prop;
	 * }
	 *
	 * bootstrap(App);
	 * ```
	 */
	exports.HostBinding = decorators_1.makePropDecorator(directives_2.HostBindingMetadata);
	// TODO(alexeagle): remove the duplication of this doc. It is copied from HostListenerMetadata.
	/**
	 * Declares a host listener.
	 *
	 * Angular will invoke the decorated method when the host element emits the specified event.
	 *
	 * If the decorated method returns `false`, then `preventDefault` is applied on the DOM
	 * event.
	 *
	 * ### Example
	 *
	 * The following example declares a directive that attaches a click listener to the button and
	 * counts clicks.
	 *
	 * ```typescript
	 * @Directive({selector: 'button[counting]'})
	 * class CountClicks {
	 *   numberOfClicks = 0;
	 *
	 *   @HostListener('click', ['$event.target'])
	 *   onClick(btn) {
	 *     console.log("button", btn, "number of clicks:", this.numberOfClicks++);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<button counting>Increment</button>`,
	 *   directives: [CountClicks]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 */
	exports.HostListener = decorators_1.makePropDecorator(directives_2.HostListenerMetadata);
	//# sourceMappingURL=metadata.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(5);
	var metadata_1 = __webpack_require__(6);
	var forward_ref_1 = __webpack_require__(7);
	/**
	 * Specifies that a constant attribute value should be injected.
	 *
	 * The directive can inject constant string literals of host element attributes.
	 *
	 * ### Example
	 *
	 * Suppose we have an `<input>` element and want to know its `type`.
	 *
	 * ```html
	 * <input type="text">
	 * ```
	 *
	 * A decorator can inject string literal `text` like so:
	 *
	 * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
	 * @ts2dart_const
	 */
	var AttributeMetadata = (function (_super) {
	    __extends(AttributeMetadata, _super);
	    function AttributeMetadata(attributeName) {
	        _super.call(this);
	        this.attributeName = attributeName;
	    }
	    Object.defineProperty(AttributeMetadata.prototype, "token", {
	        get: function () {
	            // Normally one would default a token to a type of an injected value but here
	            // the type of a variable is "string" and we can't use primitive type as a return value
	            // so we use instance of Attribute instead. This doesn't matter much in practice as arguments
	            // with @Attribute annotation are injected by ElementInjector that doesn't take tokens into
	            // account.
	            return this;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AttributeMetadata.prototype.toString = function () { return "@Attribute(" + lang_1.stringify(this.attributeName) + ")"; };
	    return AttributeMetadata;
	}(metadata_1.DependencyMetadata));
	exports.AttributeMetadata = AttributeMetadata;
	/**
	 * Declares an injectable parameter to be a live list of directives or variable
	 * bindings from the content children of a directive.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
	 *
	 * Assume that `<tabs>` component would like to get a list its children `<pane>`
	 * components as shown in this example:
	 *
	 * ```html
	 * <tabs>
	 *   <pane title="Overview">...</pane>
	 *   <pane *ngFor="let o of objects" [title]="o.title">{{o.text}}</pane>
	 * </tabs>
	 * ```
	 *
	 * The preferred solution is to query for `Pane` directives using this decorator.
	 *
	 * ```javascript
	 * @Component({
	 *   selector: 'pane',
	 *   inputs: ['title']
	 * })
	 * class Pane {
	 *   title:string;
	 * }
	 *
	 * @Component({
	 *  selector: 'tabs',
	 *  template: `
	 *    <ul>
	 *      <li *ngFor="let pane of panes">{{pane.title}}</li>
	 *    </ul>
	 *    <ng-content></ng-content>
	 *  `
	 * })
	 * class Tabs {
	 *   panes: QueryList<Pane>;
	 *   constructor(@Query(Pane) panes:QueryList<Pane>) {
	  *    this.panes = panes;
	  *  }
	 * }
	 * ```
	 *
	 * A query can look for variable bindings by passing in a string with desired binding symbol.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/sT2j25cH1dURAyBRCKx1?p=preview))
	 * ```html
	 * <seeker>
	 *   <div #findme>...</div>
	 * </seeker>
	 *
	 * @Component({ selector: 'seeker' })
	 * class Seeker {
	 *   constructor(@Query('findme') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * In this case the object that is injected depend on the type of the variable
	 * binding. It can be an ElementRef, a directive or a component.
	 *
	 * Passing in a comma separated list of variable bindings will query for all of them.
	 *
	 * ```html
	 * <seeker>
	 *   <div #find-me>...</div>
	 *   <div #find-me-too>...</div>
	 * </seeker>
	 *
	 *  @Component({
	 *   selector: 'seeker'
	 * })
	 * class Seeker {
	 *   constructor(@Query('findMe, findMeToo') elList: QueryList<ElementRef>) {...}
	 * }
	 * ```
	 *
	 * Configure whether query looks for direct children or all descendants
	 * of the querying element, by using the `descendants` parameter.
	 * It is set to `false` by default.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/wtGeB977bv7qvA5FTYl9?p=preview))
	 * ```html
	 * <container #first>
	 *   <item>a</item>
	 *   <item>b</item>
	 *   <container #second>
	 *     <item>c</item>
	 *   </container>
	 * </container>
	 * ```
	 *
	 * When querying for items, the first container will see only `a` and `b` by default,
	 * but with `Query(TextDirective, {descendants: true})` it will see `c` too.
	 *
	 * The queried directives are kept in a depth-first pre-order with respect to their
	 * positions in the DOM.
	 *
	 * Query does not look deep into any subcomponent views.
	 *
	 * Query is updated as part of the change-detection cycle. Since change detection
	 * happens after construction of a directive, QueryList will always be empty when observed in the
	 * constructor.
	 *
	 * The injected object is an unmodifiable live list.
	 * See {@link QueryList} for more details.
	 * @ts2dart_const
	 */
	var QueryMetadata = (function (_super) {
	    __extends(QueryMetadata, _super);
	    function QueryMetadata(_selector, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.first, first = _d === void 0 ? false : _d, _e = _b.read, read = _e === void 0 ? null : _e;
	        _super.call(this);
	        this._selector = _selector;
	        this.descendants = descendants;
	        this.first = first;
	        this.read = read;
	    }
	    Object.defineProperty(QueryMetadata.prototype, "isViewQuery", {
	        /**
	         * always `false` to differentiate it with {@link ViewQueryMetadata}.
	         */
	        get: function () { return false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryMetadata.prototype, "selector", {
	        /**
	         * what this is querying for.
	         */
	        get: function () { return forward_ref_1.resolveForwardRef(this._selector); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryMetadata.prototype, "isVarBindingQuery", {
	        /**
	         * whether this is querying for a variable binding or a directive.
	         */
	        get: function () { return lang_1.isString(this.selector); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryMetadata.prototype, "varBindings", {
	        /**
	         * returns a list of variable bindings this is querying for.
	         * Only applicable if this is a variable bindings query.
	         */
	        get: function () { return this.selector.split(','); },
	        enumerable: true,
	        configurable: true
	    });
	    QueryMetadata.prototype.toString = function () { return "@Query(" + lang_1.stringify(this.selector) + ")"; };
	    return QueryMetadata;
	}(metadata_1.DependencyMetadata));
	exports.QueryMetadata = QueryMetadata;
	// TODO: add an example after ContentChildren and ViewChildren are in master
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChildren(ChildDirective) contentChildren: QueryList<ChildDirective>;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChildren is set
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ContentChildrenMetadata = (function (_super) {
	    __extends(ContentChildrenMetadata, _super);
	    function ContentChildrenMetadata(_selector, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.read, read = _d === void 0 ? null : _d;
	        _super.call(this, _selector, { descendants: descendants, read: read });
	    }
	    return ContentChildrenMetadata;
	}(QueryMetadata));
	exports.ContentChildrenMetadata = ContentChildrenMetadata;
	// TODO: add an example after ContentChild and ViewChild are in master
	/**
	 * Configures a content query.
	 *
	 * Content queries are set before the `ngAfterContentInit` callback is called.
	 *
	 * ### Example
	 *
	 * ```
	 * @Directive({
	 *   selector: 'someDir'
	 * })
	 * class SomeDir {
	 *   @ContentChild(ChildDirective) contentChild;
	 *
	 *   ngAfterContentInit() {
	 *     // contentChild is set
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ContentChildMetadata = (function (_super) {
	    __extends(ContentChildMetadata, _super);
	    function ContentChildMetadata(_selector, _a) {
	        var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
	        _super.call(this, _selector, { descendants: true, first: true, read: read });
	    }
	    return ContentChildMetadata;
	}(QueryMetadata));
	exports.ContentChildMetadata = ContentChildMetadata;
	/**
	 * Similar to {@link QueryMetadata}, but querying the component view, instead of
	 * the content children.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/eNsFHDf7YjyM6IzKxM1j?p=preview))
	 *
	 * ```javascript
	 * @Component({
	 *   ...,
	 *   template: `
	 *     <item> a </item>
	 *     <item> b </item>
	 *     <item> c </item>
	 *   `
	 * })
	 * class MyComponent {
	 *   shown: boolean;
	 *
	 *   constructor(private @ViewQuery(Item) items:QueryList<Item>) {
	 *     items.changes.subscribe(() => console.log(items.length));
	 *   }
	 * }
	 * ```
	 *
	 * Supports the same querying parameters as {@link QueryMetadata}, except
	 * `descendants`. This always queries the whole view.
	 *
	 * As `shown` is flipped between true and false, items will contain zero of one
	 * items.
	 *
	 * Specifies that a {@link QueryList} should be injected.
	 *
	 * The injected object is an iterable and observable live list.
	 * See {@link QueryList} for more details.
	 * @ts2dart_const
	 */
	var ViewQueryMetadata = (function (_super) {
	    __extends(ViewQueryMetadata, _super);
	    function ViewQueryMetadata(_selector, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.descendants, descendants = _c === void 0 ? false : _c, _d = _b.first, first = _d === void 0 ? false : _d, _e = _b.read, read = _e === void 0 ? null : _e;
	        _super.call(this, _selector, { descendants: descendants, first: first, read: read });
	    }
	    Object.defineProperty(ViewQueryMetadata.prototype, "isViewQuery", {
	        /**
	         * always `true` to differentiate it with {@link QueryMetadata}.
	         */
	        get: function () { return true; },
	        enumerable: true,
	        configurable: true
	    });
	    ViewQueryMetadata.prototype.toString = function () { return "@ViewQuery(" + lang_1.stringify(this.selector) + ")"; };
	    return ViewQueryMetadata;
	}(QueryMetadata));
	exports.ViewQueryMetadata = ViewQueryMetadata;
	/**
	 * Declares a list of child element references.
	 *
	 * Angular automatically updates the list when the DOM is updated.
	 *
	 * `ViewChildren` takes an argument to select elements.
	 *
	 * - If the argument is a type, directives or components with the type will be bound.
	 *
	 * - If the argument is a string, the string is interpreted as a list of comma-separated selectors.
	 * For each selector, an element containing the matching template variable (e.g. `#child`) will be
	 * bound.
	 *
	 * View children are set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *     <child-cmp></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren(ChildCmp) children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: `
	 *     <child-cmp #child1></child-cmp>
	 *     <child-cmp #child2></child-cmp>
	 *     <child-cmp #child3></child-cmp>
	 *   `,
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChildren('child1,child2,child3') children:QueryList<ChildCmp>;
	 *
	 *   ngAfterViewInit() {
	 *     // children are set
	 *     this.children.toArray().forEach((child)=>child.doSomething());
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ViewChildrenMetadata = (function (_super) {
	    __extends(ViewChildrenMetadata, _super);
	    function ViewChildrenMetadata(_selector, _a) {
	        var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
	        _super.call(this, _selector, { descendants: true, read: read });
	    }
	    return ViewChildrenMetadata;
	}(ViewQueryMetadata));
	exports.ViewChildrenMetadata = ViewChildrenMetadata;
	/**
	 *
	 * Declares a reference of child element.
	 *
	 * `ViewChildren` takes an argument to select elements.
	 *
	 * - If the argument is a type, a directive or a component with the type will be bound.
	 *
	 If the argument is a string, the string is interpreted as a selector. An element containing the
	 matching template variable (e.g. `#child`) will be bound.
	 *
	 * In either case, `@ViewChild()` assigns the first (looking from above) element if there are
	 multiple matches.
	 *
	 * View child is set before the `ngAfterViewInit` callback is called.
	 *
	 * ### Example
	 *
	 * With type selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild(ChildCmp) child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 *
	 * With string selector:
	 *
	 * ```
	 * @Component({
	 *   selector: 'child-cmp',
	 *   template: '<p>child</p>'
	 * })
	 * class ChildCmp {
	 *   doSomething() {}
	 * }
	 *
	 * @Component({
	 *   selector: 'some-cmp',
	 *   template: '<child-cmp #child></child-cmp>',
	 *   directives: [ChildCmp]
	 * })
	 * class SomeCmp {
	 *   @ViewChild('child') child:ChildCmp;
	 *
	 *   ngAfterViewInit() {
	 *     // child is set
	 *     this.child.doSomething();
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ViewChildMetadata = (function (_super) {
	    __extends(ViewChildMetadata, _super);
	    function ViewChildMetadata(_selector, _a) {
	        var _b = (_a === void 0 ? {} : _a).read, read = _b === void 0 ? null : _b;
	        _super.call(this, _selector, { descendants: true, first: true, read: read });
	    }
	    return ViewChildMetadata;
	}(ViewQueryMetadata));
	exports.ViewChildMetadata = ViewChildMetadata;
	//# sourceMappingURL=di.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	var _devMode = true;
	var _modeLocked = false;
	function lockMode() {
	    _modeLocked = true;
	}
	exports.lockMode = lockMode;
	/**
	 * Disable Angular's development mode, which turns off assertions and other
	 * checks within the framework.
	 *
	 * One important assertion this disables verifies that a change detection pass
	 * does not result in additional changes to any bindings (also known as
	 * unidirectional data flow).
	 */
	function enableProdMode() {
	    if (_modeLocked) {
	        // Cannot use BaseException as that ends up importing from facade/lang.
	        throw 'Cannot enable prod mode after platform setup.';
	    }
	    _devMode = false;
	}
	exports.enableProdMode = enableProdMode;
	function assertionsEnabled() {
	    return _devMode;
	}
	exports.assertionsEnabled = assertionsEnabled;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === "boolean";
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === "number";
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === "string";
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === "function";
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf("\n");
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(""); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError("Invalid integer literal when parsing " + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " +
	            radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    RegExpWrapper.replaceAll = function (regExp, input, replace) {
	        var c = regExp.exec(input);
	        var res = '';
	        regExp.lastIndex = 0;
	        var prev = 0;
	        while (c) {
	            res += input.substring(prev, c.index);
	            res += replace(c);
	            prev = c.index + c[0].length;
	            regExp.lastIndex = prev;
	            c = regExp.exec(input);
	        }
	        res += input.substring(prev);
	        return res;
	    };
	    return RegExpWrapper;
	}());
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	}());
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === "function" || typeof o === "object");
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function bitWiseOr(values) {
	    return values.reduce(function (a, b) { return a | b; });
	}
	exports.bitWiseOr = bitWiseOr;
	function bitWiseAnd(values) {
	    return values.reduce(function (a, b) { return a & b; });
	}
	exports.bitWiseAnd = bitWiseAnd;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	/**
	 * A parameter metadata that specifies a dependency.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/6uHYJK?p=preview))
	 *
	 * ```typescript
	 * class Engine {}
	 *
	 * @Injectable()
	 * class Car {
	 *   engine;
	 *   constructor(@Inject("MyEngine") engine:Engine) {
	 *     this.engine = engine;
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([
	 *  provide("MyEngine", {useClass: Engine}),
	 *  Car
	 * ]);
	 *
	 * expect(injector.get(Car).engine instanceof Engine).toBe(true);
	 * ```
	 *
	 * When `@Inject()` is not present, {@link Injector} will use the type annotation of the parameter.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * class Engine {}
	 *
	 * @Injectable()
	 * class Car {
	 *   constructor(public engine: Engine) {} //same as constructor(@Inject(Engine) engine:Engine)
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([Engine, Car]);
	 * expect(injector.get(Car).engine instanceof Engine).toBe(true);
	 * ```
	 * @ts2dart_const
	 */
	var InjectMetadata = (function () {
	    function InjectMetadata(token) {
	        this.token = token;
	    }
	    InjectMetadata.prototype.toString = function () { return "@Inject(" + lang_1.stringify(this.token) + ")"; };
	    return InjectMetadata;
	}());
	exports.InjectMetadata = InjectMetadata;
	/**
	 * A parameter metadata that marks a dependency as optional. {@link Injector} provides `null` if
	 * the dependency is not found.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/AsryOm?p=preview))
	 *
	 * ```typescript
	 * class Engine {}
	 *
	 * @Injectable()
	 * class Car {
	 *   engine;
	 *   constructor(@Optional() engine:Engine) {
	 *     this.engine = engine;
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([Car]);
	 * expect(injector.get(Car).engine).toBeNull();
	 * ```
	 * @ts2dart_const
	 */
	var OptionalMetadata = (function () {
	    function OptionalMetadata() {
	    }
	    OptionalMetadata.prototype.toString = function () { return "@Optional()"; };
	    return OptionalMetadata;
	}());
	exports.OptionalMetadata = OptionalMetadata;
	/**
	 * `DependencyMetadata` is used by the framework to extend DI.
	 * This is internal to Angular and should not be used directly.
	 * @ts2dart_const
	 */
	var DependencyMetadata = (function () {
	    function DependencyMetadata() {
	    }
	    Object.defineProperty(DependencyMetadata.prototype, "token", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return DependencyMetadata;
	}());
	exports.DependencyMetadata = DependencyMetadata;
	/**
	 * A marker metadata that marks a class as available to {@link Injector} for creation.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/Wk4DMQ?p=preview))
	 *
	 * ```typescript
	 * @Injectable()
	 * class UsefulService {}
	 *
	 * @Injectable()
	 * class NeedsService {
	 *   constructor(public service:UsefulService) {}
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
	 * expect(injector.get(NeedsService).service instanceof UsefulService).toBe(true);
	 * ```
	 * {@link Injector} will throw {@link NoAnnotationError} when trying to instantiate a class that
	 * does not have `@Injectable` marker, as shown in the example below.
	 *
	 * ```typescript
	 * class UsefulService {}
	 *
	 * class NeedsService {
	 *   constructor(public service:UsefulService) {}
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
	 * expect(() => injector.get(NeedsService)).toThrowError();
	 * ```
	 * @ts2dart_const
	 */
	var InjectableMetadata = (function () {
	    function InjectableMetadata() {
	    }
	    return InjectableMetadata;
	}());
	exports.InjectableMetadata = InjectableMetadata;
	/**
	 * Specifies that an {@link Injector} should retrieve a dependency only from itself.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/NeagAg?p=preview))
	 *
	 * ```typescript
	 * class Dependency {
	 * }
	 *
	 * @Injectable()
	 * class NeedsDependency {
	 *   dependency;
	 *   constructor(@Self() dependency:Dependency) {
	 *     this.dependency = dependency;
	 *   }
	 * }
	 *
	 * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
	 * var nd = inj.get(NeedsDependency);
	 *
	 * expect(nd.dependency instanceof Dependency).toBe(true);
	 *
	 * var inj = Injector.resolveAndCreate([Dependency]);
	 * var child = inj.resolveAndCreateChild([NeedsDependency]);
	 * expect(() => child.get(NeedsDependency)).toThrowError();
	 * ```
	 * @ts2dart_const
	 */
	var SelfMetadata = (function () {
	    function SelfMetadata() {
	    }
	    SelfMetadata.prototype.toString = function () { return "@Self()"; };
	    return SelfMetadata;
	}());
	exports.SelfMetadata = SelfMetadata;
	/**
	 * Specifies that the dependency resolution should start from the parent injector.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/Wchdzb?p=preview))
	 *
	 * ```typescript
	 * class Dependency {
	 * }
	 *
	 * @Injectable()
	 * class NeedsDependency {
	 *   dependency;
	 *   constructor(@SkipSelf() dependency:Dependency) {
	 *     this.dependency = dependency;
	 *   }
	 * }
	 *
	 * var parent = Injector.resolveAndCreate([Dependency]);
	 * var child = parent.resolveAndCreateChild([NeedsDependency]);
	 * expect(child.get(NeedsDependency).dependency instanceof Depedency).toBe(true);
	 *
	 * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
	 * expect(() => inj.get(NeedsDependency)).toThrowError();
	 * ```
	 * @ts2dart_const
	 */
	var SkipSelfMetadata = (function () {
	    function SkipSelfMetadata() {
	    }
	    SkipSelfMetadata.prototype.toString = function () { return "@SkipSelf()"; };
	    return SkipSelfMetadata;
	}());
	exports.SkipSelfMetadata = SkipSelfMetadata;
	/**
	 * Specifies that an injector should retrieve a dependency from any injector until reaching the
	 * closest host.
	 *
	 * In Angular, a component element is automatically declared as a host for all the injectors in
	 * its view.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/GX79pV?p=preview))
	 *
	 * In the following example `App` contains `ParentCmp`, which contains `ChildDirective`.
	 * So `ParentCmp` is the host of `ChildDirective`.
	 *
	 * `ChildDirective` depends on two services: `HostService` and `OtherService`.
	 * `HostService` is defined at `ParentCmp`, and `OtherService` is defined at `App`.
	 *
	 *```typescript
	 * class OtherService {}
	 * class HostService {}
	 *
	 * @Directive({
	 *   selector: 'child-directive'
	 * })
	 * class ChildDirective {
	 *   constructor(@Optional() @Host() os:OtherService, @Optional() @Host() hs:HostService){
	 *     console.log("os is null", os);
	 *     console.log("hs is NOT null", hs);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'parent-cmp',
	 *   providers: [HostService],
	 *   template: `
	 *     Dir: <child-directive></child-directive>
	 *   `,
	 *   directives: [ChildDirective]
	 * })
	 * class ParentCmp {
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [OtherService],
	 *   template: `
	 *     Parent: <parent-cmp></parent-cmp>
	 *   `,
	 *   directives: [ParentCmp]
	 * })
	 * class App {
	 * }
	 *
	 * bootstrap(App);
	 *```
	 * @ts2dart_const
	 */
	var HostMetadata = (function () {
	    function HostMetadata() {
	    }
	    HostMetadata.prototype.toString = function () { return "@Host()"; };
	    return HostMetadata;
	}());
	exports.HostMetadata = HostMetadata;
	//# sourceMappingURL=metadata.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	/**
	 * Allows to refer to references which are not yet defined.
	 *
	 * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
	 * DI is declared,
	 * but not yet defined. It is also used when the `token` which we use when creating a query is not
	 * yet defined.
	 *
	 * ### Example
	 * {@example core/di/ts/forward_ref/forward_ref.ts region='forward_ref'}
	 */
	function forwardRef(forwardRefFn) {
	    forwardRefFn.__forward_ref__ = forwardRef;
	    forwardRefFn.toString = function () { return lang_1.stringify(this()); };
	    return forwardRefFn;
	}
	exports.forwardRef = forwardRef;
	/**
	 * Lazily retrieves the reference value from a forwardRef.
	 *
	 * Acts as the identity function when given a non-forward-ref value.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
	 *
	 * ```typescript
	 * var ref = forwardRef(() => "refValue");
	 * expect(resolveForwardRef(ref)).toEqual("refValue");
	 * expect(resolveForwardRef("regularValue")).toEqual("regularValue");
	 * ```
	 *
	 * See: {@link forwardRef}
	 */
	function resolveForwardRef(type) {
	    if (lang_1.isFunction(type) && type.hasOwnProperty('__forward_ref__') &&
	        type.__forward_ref__ === forwardRef) {
	        return type();
	    }
	    else {
	        return type;
	    }
	}
	exports.resolveForwardRef = resolveForwardRef;
	//# sourceMappingURL=forward_ref.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(5);
	var metadata_1 = __webpack_require__(6);
	var constants_1 = __webpack_require__(9);
	/**
	 * Directives allow you to attach behavior to elements in the DOM.
	 *
	 * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
	 *
	 * A directive consists of a single directive annotation and a controller class. When the
	 * directive's `selector` matches
	 * elements in the DOM, the following steps occur:
	 *
	 * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
	 * arguments.
	 * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
	 * depth-first order,
	 *    as declared in the HTML.
	 *
	 * ## Understanding How Injection Works
	 *
	 * There are three stages of injection resolution.
	 * - *Pre-existing Injectors*:
	 *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
	 * the dependency was
	 *     specified as `@Optional`, returns `null`.
	 *   - The platform injector resolves browser singleton resources, such as: cookies, title,
	 * location, and others.
	 * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
	 * the same parent-child hierarchy
	 *     as the component instances in the DOM.
	 * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
	 * element has an `ElementInjector`
	 *     which follow the same parent-child hierarchy as the DOM elements themselves.
	 *
	 * When a template is instantiated, it also must instantiate the corresponding directives in a
	 * depth-first order. The
	 * current `ElementInjector` resolves the constructor dependencies for each directive.
	 *
	 * Angular then resolves dependencies as follows, according to the order in which they appear in the
	 * {@link ViewMetadata}:
	 *
	 * 1. Dependencies on the current element
	 * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
	 * 3. Dependencies on component injectors and their parents until it encounters the root component
	 * 4. Dependencies on pre-existing injectors
	 *
	 *
	 * The `ElementInjector` can inject other directives, element-specific special objects, or it can
	 * delegate to the parent
	 * injector.
	 *
	 * To inject other directives, declare the constructor parameter as:
	 * - `directive:DirectiveType`: a directive on the current element only
	 * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
	 * element and the
	 *    Shadow DOM root.
	 * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
	 * directives.
	 * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
	 * child directives.
	 *
	 * To inject element-specific special objects, declare the constructor parameter as:
	 * - `element: ElementRef` to obtain a reference to logical element in the view.
	 * - `viewContainer: ViewContainerRef` to control child template instantiation, for
	 * {@link DirectiveMetadata} directives only
	 * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
	 *
	 * ### Example
	 *
	 * The following example demonstrates how dependency injection resolves constructor arguments in
	 * practice.
	 *
	 *
	 * Assume this HTML template:
	 *
	 * ```
	 * <div dependency="1">
	 *   <div dependency="2">
	 *     <div dependency="3" my-directive>
	 *       <div dependency="4">
	 *         <div dependency="5"></div>
	 *       </div>
	 *       <div dependency="6"></div>
	 *     </div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * With the following `dependency` decorator and `SomeService` injectable class.
	 *
	 * ```
	 * @Injectable()
	 * class SomeService {
	 * }
	 *
	 * @Directive({
	 *   selector: '[dependency]',
	 *   inputs: [
	 *     'id: dependency'
	 *   ]
	 * })
	 * class Dependency {
	 *   id:string;
	 * }
	 * ```
	 *
	 * Let's step through the different ways in which `MyDirective` could be declared...
	 *
	 *
	 * ### No injection
	 *
	 * Here the constructor is declared with no arguments, therefore nothing is injected into
	 * `MyDirective`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor() {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with no dependencies.
	 *
	 *
	 * ### Component-level injection
	 *
	 * Directives can inject any injectable instance from the closest component injector or any of its
	 * parents.
	 *
	 * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
	 * from the parent
	 * component's injector.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(someService: SomeService) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a dependency on `SomeService`.
	 *
	 *
	 * ### Injecting a directive from the current element
	 *
	 * Directives can inject other directives declared on the current element.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(dependency: Dependency) {
	 *     expect(dependency.id).toEqual(3);
	 *   }
	 * }
	 * ```
	 * This directive would be instantiated with `Dependency` declared at the same element, in this case
	 * `dependency="3"`.
	 *
	 * ### Injecting a directive from any ancestor elements
	 *
	 * Directives can inject other directives declared on any ancestor element (in the current Shadow
	 * DOM), i.e. on the current element, the
	 * parent element, or its parents.
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Host() dependency: Dependency) {
	 *     expect(dependency.id).toEqual(2);
	 *   }
	 * }
	 * ```
	 *
	 * `@Host` checks the current element, the parent, as well as its parents recursively. If
	 * `dependency="2"` didn't
	 * exist on the direct parent, this injection would
	 * have returned
	 * `dependency="1"`.
	 *
	 *
	 * ### Injecting a live collection of direct child directives
	 *
	 *
	 * A directive can also query for other child directives. Since parent directives are instantiated
	 * before child directives, a directive can't simply inject the list of child directives. Instead,
	 * the directive injects a {@link QueryList}, which updates its contents as children are added,
	 * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
	 * `ngIf`, or an `ngSwitch`.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
	 * `Dependency` 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
	 *
	 * ### Injecting a live collection of descendant directives
	 *
	 * By passing the descendant flag to `@Query` above, we can include the children of the child
	 * elements.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
	 *
	 * ### Optional injection
	 *
	 * The normal behavior of directives is to return an error when a specified dependency cannot be
	 * resolved. If you
	 * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
	 * with `@Optional()`.
	 * This explicitly permits the author of a template to treat some of the surrounding directives as
	 * optional.
	 *
	 * ```
	 * @Directive({ selector: '[my-directive]' })
	 * class MyDirective {
	 *   constructor(@Optional() dependency:Dependency) {
	 *   }
	 * }
	 * ```
	 *
	 * This directive would be instantiated with a `Dependency` directive found on the current element.
	 * If none can be
	 * found, the injector supplies `null` instead of throwing an error.
	 *
	 * ### Example
	 *
	 * Here we use a decorator directive to simply define basic tool-tip behavior.
	 *
	 * ```
	 * @Directive({
	 *   selector: '[tooltip]',
	 *   inputs: [
	 *     'text: tooltip'
	 *   ],
	 *   host: {
	 *     '(mouseenter)': 'onMouseEnter()',
	 *     '(mouseleave)': 'onMouseLeave()'
	 *   }
	 * })
	 * class Tooltip{
	 *   text:string;
	 *   overlay:Overlay; // NOT YET IMPLEMENTED
	 *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
	 *
	 *   constructor(overlayManager:OverlayManager) {
	 *     this.overlay = overlay;
	 *   }
	 *
	 *   onMouseEnter() {
	 *     // exact signature to be determined
	 *     this.overlay = this.overlayManager.open(text, ...);
	 *   }
	 *
	 *   onMouseLeave() {
	 *     this.overlay.close();
	 *     this.overlay = null;
	 *   }
	 * }
	 * ```
	 * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
	 * `tooltip` selector,
	 * like so:
	 *
	 * ```
	 * <div tooltip="some text here"></div>
	 * ```
	 *
	 * Directives can also control the instantiation, destruction, and positioning of inline template
	 * elements:
	 *
	 * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
	 * runtime.
	 * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
	 * location in the current view
	 * where these actions are performed.
	 *
	 * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
	 * `<template>` element. Thus a
	 * directive in a child view cannot inject the directive that created it.
	 *
	 * Since directives that create views via ViewContainers are common in Angular, and using the full
	 * `<template>` element syntax is wordy, Angular
	 * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
	 * equivalent.
	 *
	 * Thus,
	 *
	 * ```
	 * <ul>
	 *   <li *foo="bar" title="text"></li>
	 * </ul>
	 * ```
	 *
	 * Expands in use to:
	 *
	 * ```
	 * <ul>
	 *   <template [foo]="bar">
	 *     <li title="text"></li>
	 *   </template>
	 * </ul>
	 * ```
	 *
	 * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
	 * the directive
	 * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the directive class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the directive.
	 *
	 * ### Example
	 *
	 * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
	 *
	 * Here is a simple directive that triggers on an `unless` selector:
	 *
	 * ```
	 * @Directive({
	 *   selector: '[unless]',
	 *   inputs: ['unless']
	 * })
	 * export class Unless {
	 *   viewContainer: ViewContainerRef;
	 *   templateRef: TemplateRef;
	 *   prevCondition: boolean;
	 *
	 *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
	 *     this.viewContainer = viewContainer;
	 *     this.templateRef = templateRef;
	 *     this.prevCondition = null;
	 *   }
	 *
	 *   set unless(newCondition) {
	 *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
	 *       this.prevCondition = true;
	 *       this.viewContainer.clear();
	 *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
	 *       this.prevCondition = false;
	 *       this.viewContainer.create(this.templateRef);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * We can then use this `unless` selector in a template:
	 * ```
	 * <ul>
	 *   <li *unless="expr"></li>
	 * </ul>
	 * ```
	 *
	 * Once the directive instantiates the child view, the shorthand notation for the template expands
	 * and the result is:
	 *
	 * ```
	 * <ul>
	 *   <template [unless]="exp">
	 *     <li></li>
	 *   </template>
	 *   <li></li>
	 * </ul>
	 * ```
	 *
	 * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
	 * the instantiated
	 * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
	 * @ts2dart_const
	 */
	var DirectiveMetadata = (function (_super) {
	    __extends(DirectiveMetadata, _super);
	    function DirectiveMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, selector = _b.selector, inputs = _b.inputs, outputs = _b.outputs, properties = _b.properties, events = _b.events, host = _b.host, bindings = _b.bindings, providers = _b.providers, exportAs = _b.exportAs, queries = _b.queries;
	        _super.call(this);
	        this.selector = selector;
	        this._inputs = inputs;
	        this._properties = properties;
	        this._outputs = outputs;
	        this._events = events;
	        this.host = host;
	        this.exportAs = exportAs;
	        this.queries = queries;
	        this._providers = providers;
	        this._bindings = bindings;
	    }
	    Object.defineProperty(DirectiveMetadata.prototype, "inputs", {
	        /**
	         * Enumerates the set of data-bound input properties for a directive
	         *
	         * Angular automatically updates input properties during change detection.
	         *
	         * The `inputs` property defines a set of `directiveProperty` to `bindingProperty`
	         * configuration:
	         *
	         * - `directiveProperty` specifies the component property where the value is written.
	         * - `bindingProperty` specifies the DOM property where the value is read from.
	         *
	         * When `bindingProperty` is not provided, it is assumed to be equal to `directiveProperty`.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/ivhfXY?p=preview))
	         *
	         * The following example creates a component with two data-bound properties.
	         *
	         * ```typescript
	         * @Component({
	         *   selector: 'bank-account',
	         *   inputs: ['bankName', 'id: account-id'],
	         *   template: `
	         *     Bank Name: {{bankName}}
	         *     Account Id: {{id}}
	         *   `
	         * })
	         * class BankAccount {
	         *   bankName: string;
	         *   id: string;
	         *
	         *   // this property is not bound, and won't be automatically updated by Angular
	         *   normalizedBankName: string;
	         * }
	         *
	         * @Component({
	         *   selector: 'app',
	         *   template: `
	         *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
	         *   `,
	         *   directives: [BankAccount]
	         * })
	         * class App {}
	         *
	         * bootstrap(App);
	         * ```
	         *
	         */
	        get: function () {
	            return lang_1.isPresent(this._properties) && this._properties.length > 0 ? this._properties :
	                this._inputs;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "properties", {
	        get: function () { return this.inputs; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "outputs", {
	        /**
	         * Enumerates the set of event-bound output properties.
	         *
	         * When an output property emits an event, an event handler attached to that event
	         * the template is invoked.
	         *
	         * The `outputs` property defines a set of `directiveProperty` to `bindingProperty`
	         * configuration:
	         *
	         * - `directiveProperty` specifies the component property that emits events.
	         * - `bindingProperty` specifies the DOM property the event handler is attached to.
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/d5CNq7?p=preview))
	         *
	         * ```typescript
	         * @Directive({
	         *   selector: 'interval-dir',
	         *   outputs: ['everySecond', 'five5Secs: everyFiveSeconds']
	         * })
	         * class IntervalDir {
	         *   everySecond = new EventEmitter();
	         *   five5Secs = new EventEmitter();
	         *
	         *   constructor() {
	         *     setInterval(() => this.everySecond.emit("event"), 1000);
	         *     setInterval(() => this.five5Secs.emit("event"), 5000);
	         *   }
	         * }
	         *
	         * @Component({
	         *   selector: 'app',
	         *   template: `
	         *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
	         *     </interval-dir>
	         *   `,
	         *   directives: [IntervalDir]
	         * })
	         * class App {
	         *   everySecond() { console.log('second'); }
	         *   everyFiveSeconds() { console.log('five seconds'); }
	         * }
	         * bootstrap(App);
	         * ```
	         *
	         */
	        get: function () {
	            return lang_1.isPresent(this._events) && this._events.length > 0 ? this._events : this._outputs;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "events", {
	        get: function () { return this.outputs; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "providers", {
	        /**
	         * Defines the set of injectable objects that are visible to a Directive and its light DOM
	         * children.
	         *
	         * ## Simple Example
	         *
	         * Here is an example of a class that can be injected:
	         *
	         * ```
	         * class Greeter {
	         *    greet(name:string) {
	         *      return 'Hello ' + name + '!';
	         *    }
	         * }
	         *
	         * @Directive({
	         *   selector: 'greet',
	         *   bindings: [
	         *     Greeter
	         *   ]
	         * })
	         * class HelloWorld {
	         *   greeter:Greeter;
	         *
	         *   constructor(greeter:Greeter) {
	         *     this.greeter = greeter;
	         *   }
	         * }
	         * ```
	         */
	        get: function () {
	            return lang_1.isPresent(this._bindings) && this._bindings.length > 0 ? this._bindings :
	                this._providers;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DirectiveMetadata.prototype, "bindings", {
	        /** @deprecated */
	        get: function () { return this.providers; },
	        enumerable: true,
	        configurable: true
	    });
	    return DirectiveMetadata;
	}(metadata_1.InjectableMetadata));
	exports.DirectiveMetadata = DirectiveMetadata;
	/**
	 * Declare reusable UI building blocks for an application.
	 *
	 * Each Angular component requires a single `@Component` annotation. The
	 * `@Component`
	 * annotation specifies when a component is instantiated, and which properties and hostListeners it
	 * binds to.
	 *
	 * When a component is instantiated, Angular
	 * - creates a shadow DOM for the component.
	 * - loads the selected template into the shadow DOM.
	 * - creates all the injectable objects configured with `providers` and `viewProviders`.
	 *
	 * All template expressions and statements are then evaluated against the component instance.
	 *
	 * For details on the `@View` annotation, see {@link ViewMetadata}.
	 *
	 * ## Lifecycle hooks
	 *
	 * When the component class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
	 * are called by the change detection at defined points in time during the life of the component.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='component'}
	 * @ts2dart_const
	 */
	var ComponentMetadata = (function (_super) {
	    __extends(ComponentMetadata, _super);
	    function ComponentMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, selector = _b.selector, inputs = _b.inputs, outputs = _b.outputs, properties = _b.properties, events = _b.events, host = _b.host, exportAs = _b.exportAs, moduleId = _b.moduleId, bindings = _b.bindings, providers = _b.providers, viewBindings = _b.viewBindings, viewProviders = _b.viewProviders, _c = _b.changeDetection, changeDetection = _c === void 0 ? constants_1.ChangeDetectionStrategy.Default : _c, queries = _b.queries, templateUrl = _b.templateUrl, template = _b.template, styleUrls = _b.styleUrls, styles = _b.styles, directives = _b.directives, pipes = _b.pipes, encapsulation = _b.encapsulation;
	        _super.call(this, {
	            selector: selector,
	            inputs: inputs,
	            outputs: outputs,
	            properties: properties,
	            events: events,
	            host: host,
	            exportAs: exportAs,
	            bindings: bindings,
	            providers: providers,
	            queries: queries
	        });
	        this.changeDetection = changeDetection;
	        this._viewProviders = viewProviders;
	        this._viewBindings = viewBindings;
	        this.templateUrl = templateUrl;
	        this.template = template;
	        this.styleUrls = styleUrls;
	        this.styles = styles;
	        this.directives = directives;
	        this.pipes = pipes;
	        this.encapsulation = encapsulation;
	        this.moduleId = moduleId;
	    }
	    Object.defineProperty(ComponentMetadata.prototype, "viewProviders", {
	        /**
	         * Defines the set of injectable objects that are visible to its view DOM children.
	         *
	         * ## Simple Example
	         *
	         * Here is an example of a class that can be injected:
	         *
	         * ```
	         * class Greeter {
	         *    greet(name:string) {
	         *      return 'Hello ' + name + '!';
	         *    }
	         * }
	         *
	         * @Directive({
	         *   selector: 'needs-greeter'
	         * })
	         * class NeedsGreeter {
	         *   greeter:Greeter;
	         *
	         *   constructor(greeter:Greeter) {
	         *     this.greeter = greeter;
	         *   }
	         * }
	         *
	         * @Component({
	         *   selector: 'greet',
	         *   viewProviders: [
	         *     Greeter
	         *   ],
	         *   template: `<needs-greeter></needs-greeter>`,
	         *   directives: [NeedsGreeter]
	         * })
	         * class HelloWorld {
	         * }
	         *
	         * ```
	         */
	        get: function () {
	            return lang_1.isPresent(this._viewBindings) && this._viewBindings.length > 0 ? this._viewBindings :
	                this._viewProviders;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentMetadata.prototype, "viewBindings", {
	        get: function () { return this.viewProviders; },
	        enumerable: true,
	        configurable: true
	    });
	    return ComponentMetadata;
	}(DirectiveMetadata));
	exports.ComponentMetadata = ComponentMetadata;
	/**
	 * Declare reusable pipe function.
	 *
	 * A "pure" pipe is only re-evaluated when either the input or any of the arguments change.
	 *
	 * When not specified, pipes default to being pure.
	 *
	 * ### Example
	 *
	 * {@example core/ts/metadata/metadata.ts region='pipe'}
	 * @ts2dart_const
	 */
	var PipeMetadata = (function (_super) {
	    __extends(PipeMetadata, _super);
	    function PipeMetadata(_a) {
	        var name = _a.name, pure = _a.pure;
	        _super.call(this);
	        this.name = name;
	        this._pure = pure;
	    }
	    Object.defineProperty(PipeMetadata.prototype, "pure", {
	        get: function () { return lang_1.isPresent(this._pure) ? this._pure : true; },
	        enumerable: true,
	        configurable: true
	    });
	    return PipeMetadata;
	}(metadata_1.InjectableMetadata));
	exports.PipeMetadata = PipeMetadata;
	/**
	 * Declares a data-bound input property.
	 *
	 * Angular automatically updates data-bound properties during change detection.
	 *
	 * `InputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * The following example creates a component with two input properties.
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'bank-account',
	 *   template: `
	 *     Bank Name: {{bankName}}
	 *     Account Id: {{id}}
	 *   `
	 * })
	 * class BankAccount {
	 *   @Input() bankName: string;
	 *   @Input('account-id') id: string;
	 *
	 *   // this property is not bound, and won't be automatically updated by Angular
	 *   normalizedBankName: string;
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
	 *   `,
	 *   directives: [BankAccount]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var InputMetadata = (function () {
	    function InputMetadata(
	        /**
	         * Name used when instantiating a component in the template.
	         */
	        bindingPropertyName) {
	        this.bindingPropertyName = bindingPropertyName;
	    }
	    return InputMetadata;
	}());
	exports.InputMetadata = InputMetadata;
	/**
	 * Declares an event-bound output property.
	 *
	 * When an output property emits an event, an event handler attached to that event
	 * the template is invoked.
	 *
	 * `OutputMetadata` takes an optional parameter that specifies the name
	 * used when instantiating a component in the template. When not provided,
	 * the name of the decorated property is used.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Directive({
	 *   selector: 'interval-dir',
	 * })
	 * class IntervalDir {
	 *   @Output() everySecond = new EventEmitter();
	 *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
	 *
	 *   constructor() {
	 *     setInterval(() => this.everySecond.emit("event"), 1000);
	 *     setInterval(() => this.five5Secs.emit("event"), 5000);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `
	 *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
	 *     </interval-dir>
	 *   `,
	 *   directives: [IntervalDir]
	 * })
	 * class App {
	 *   everySecond() { console.log('second'); }
	 *   everyFiveSeconds() { console.log('five seconds'); }
	 * }
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var OutputMetadata = (function () {
	    function OutputMetadata(bindingPropertyName) {
	        this.bindingPropertyName = bindingPropertyName;
	    }
	    return OutputMetadata;
	}());
	exports.OutputMetadata = OutputMetadata;
	/**
	 * Declares a host property binding.
	 *
	 * Angular automatically checks host property bindings during change detection.
	 * If a binding changes, it will update the host element of the directive.
	 *
	 * `HostBindingMetadata` takes an optional parameter that specifies the property
	 * name of the host element that will be updated. When not provided,
	 * the class property name is used.
	 *
	 * ### Example
	 *
	 * The following example creates a directive that sets the `valid` and `invalid` classes
	 * on the DOM element that has ngModel directive on it.
	 *
	 * ```typescript
	 * @Directive({selector: '[ngModel]'})
	 * class NgModelStatus {
	 *   constructor(public control:NgModel) {}
	 *   @HostBinding('class.valid') get valid { return this.control.valid; }
	 *   @HostBinding('class.invalid') get invalid { return this.control.invalid; }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<input [(ngModel)]="prop">`,
	 *   directives: [FORM_DIRECTIVES, NgModelStatus]
	 * })
	 * class App {
	 *   prop;
	 * }
	 *
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var HostBindingMetadata = (function () {
	    function HostBindingMetadata(hostPropertyName) {
	        this.hostPropertyName = hostPropertyName;
	    }
	    return HostBindingMetadata;
	}());
	exports.HostBindingMetadata = HostBindingMetadata;
	/**
	 * Declares a host listener.
	 *
	 * Angular will invoke the decorated method when the host element emits the specified event.
	 *
	 * If the decorated method returns `false`, then `preventDefault` is applied on the DOM
	 * event.
	 *
	 * ### Example
	 *
	 * The following example declares a directive that attaches a click listener to the button and
	 * counts clicks.
	 *
	 * ```typescript
	 * @Directive({selector: 'button[counting]'})
	 * class CountClicks {
	 *   numberOfClicks = 0;
	 *
	 *   @HostListener('click', ['$event.target'])
	 *   onClick(btn) {
	 *     console.log("button", btn, "number of clicks:", this.numberOfClicks++);
	 *   }
	 * }
	 *
	 * @Component({
	 *   selector: 'app',
	 *   template: `<button counting>Increment</button>`,
	 *   directives: [CountClicks]
	 * })
	 * class App {}
	 *
	 * bootstrap(App);
	 * ```
	 * @ts2dart_const
	 */
	var HostListenerMetadata = (function () {
	    function HostListenerMetadata(eventName, args) {
	        this.eventName = eventName;
	        this.args = args;
	    }
	    return HostListenerMetadata;
	}());
	exports.HostListenerMetadata = HostListenerMetadata;
	//# sourceMappingURL=directives.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	/**
	 * Describes the current state of the change detector.
	 */
	(function (ChangeDetectorState) {
	    /**
	     * `NeverChecked` means that the change detector has not been checked yet, and
	     * initialization methods should be called during detection.
	     */
	    ChangeDetectorState[ChangeDetectorState["NeverChecked"] = 0] = "NeverChecked";
	    /**
	     * `CheckedBefore` means that the change detector has successfully completed at least
	     * one detection previously.
	     */
	    ChangeDetectorState[ChangeDetectorState["CheckedBefore"] = 1] = "CheckedBefore";
	    /**
	     * `Errored` means that the change detector encountered an error checking a binding
	     * or calling a directive lifecycle method and is now in an inconsistent state. Change
	     * detectors in this state will no longer detect changes.
	     */
	    ChangeDetectorState[ChangeDetectorState["Errored"] = 2] = "Errored";
	})(exports.ChangeDetectorState || (exports.ChangeDetectorState = {}));
	var ChangeDetectorState = exports.ChangeDetectorState;
	/**
	 * Describes within the change detector which strategy will be used the next time change
	 * detection is triggered.
	 */
	(function (ChangeDetectionStrategy) {
	    /**
	     * `CheckedOnce` means that after calling detectChanges the mode of the change detector
	     * will become `Checked`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckOnce"] = 0] = "CheckOnce";
	    /**
	     * `Checked` means that the change detector should be skipped until its mode changes to
	     * `CheckOnce`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Checked"] = 1] = "Checked";
	    /**
	     * `CheckAlways` means that after calling detectChanges the mode of the change detector
	     * will remain `CheckAlways`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckAlways"] = 2] = "CheckAlways";
	    /**
	     * `Detached` means that the change detector sub tree is not a part of the main tree and
	     * should be skipped.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Detached"] = 3] = "Detached";
	    /**
	     * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 4] = "OnPush";
	    /**
	     * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 5] = "Default";
	})(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
	var ChangeDetectionStrategy = exports.ChangeDetectionStrategy;
	/**
	 * List of possible {@link ChangeDetectionStrategy} values.
	 */
	exports.CHANGE_DETECTION_STRATEGY_VALUES = [
	    ChangeDetectionStrategy.CheckOnce,
	    ChangeDetectionStrategy.Checked,
	    ChangeDetectionStrategy.CheckAlways,
	    ChangeDetectionStrategy.Detached,
	    ChangeDetectionStrategy.OnPush,
	    ChangeDetectionStrategy.Default
	];
	/**
	 * List of possible {@link ChangeDetectorState} values.
	 */
	exports.CHANGE_DETECTOR_STATE_VALUES = [
	    ChangeDetectorState.NeverChecked,
	    ChangeDetectorState.CheckedBefore,
	    ChangeDetectorState.Errored
	];
	function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
	    return lang_1.isBlank(changeDetectionStrategy) ||
	        changeDetectionStrategy === ChangeDetectionStrategy.Default;
	}
	exports.isDefaultChangeDetectionStrategy = isDefaultChangeDetectionStrategy;
	//# sourceMappingURL=constants.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Defines template and style encapsulation options available for Component's {@link View}.
	 *
	 * See {@link ViewMetadata#encapsulation}.
	 */
	(function (ViewEncapsulation) {
	    /**
	     * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
	     * Element and pre-processing the style rules provided via
	     * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
	     * attribute to all selectors.
	     *
	     * This is the default option.
	     */
	    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
	    /**
	     * Use the native encapsulation mechanism of the renderer.
	     *
	     * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
	     * creating a ShadowRoot for Component's Host Element.
	     */
	    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
	    /**
	     * Don't provide any template or style encapsulation.
	     */
	    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
	})(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
	var ViewEncapsulation = exports.ViewEncapsulation;
	exports.VIEW_ENCAPSULATION_VALUES = [ViewEncapsulation.Emulated, ViewEncapsulation.Native, ViewEncapsulation.None];
	/**
	 * Metadata properties available for configuring Views.
	 *
	 * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
	 * `@View` annotation specifies the HTML template to use, and lists the directives that are active
	 * within the template.
	 *
	 * When a component is instantiated, the template is loaded into the component's shadow root, and
	 * the expressions and statements in the template are evaluated against the component.
	 *
	 * For details on the `@Component` annotation, see {@link ComponentMetadata}.
	 *
	 * ### Example
	 *
	 * ```
	 * @Component({
	 *   selector: 'greet',
	 *   template: 'Hello {{name}}!',
	 *   directives: [GreetUser, Bold]
	 * })
	 * class Greet {
	 *   name: string;
	 *
	 *   constructor() {
	 *     this.name = 'World';
	 *   }
	 * }
	 * ```
	 * @ts2dart_const
	 */
	var ViewMetadata = (function () {
	    function ViewMetadata(_a) {
	        var _b = _a === void 0 ? {} : _a, templateUrl = _b.templateUrl, template = _b.template, directives = _b.directives, pipes = _b.pipes, encapsulation = _b.encapsulation, styles = _b.styles, styleUrls = _b.styleUrls;
	        this.templateUrl = templateUrl;
	        this.template = template;
	        this.styleUrls = styleUrls;
	        this.styles = styles;
	        this.directives = directives;
	        this.pipes = pipes;
	        this.encapsulation = encapsulation;
	    }
	    return ViewMetadata;
	}());
	exports.ViewMetadata = ViewMetadata;
	//# sourceMappingURL=view.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var _nextClassId = 0;
	function extractAnnotation(annotation) {
	    if (lang_1.isFunction(annotation) && annotation.hasOwnProperty('annotation')) {
	        // it is a decorator, extract annotation
	        annotation = annotation.annotation;
	    }
	    return annotation;
	}
	function applyParams(fnOrArray, key) {
	    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function ||
	        fnOrArray === Number || fnOrArray === Array) {
	        throw new Error("Can not use native " + lang_1.stringify(fnOrArray) + " as constructor");
	    }
	    if (lang_1.isFunction(fnOrArray)) {
	        return fnOrArray;
	    }
	    else if (fnOrArray instanceof Array) {
	        var annotations = fnOrArray;
	        var fn = fnOrArray[fnOrArray.length - 1];
	        if (!lang_1.isFunction(fn)) {
	            throw new Error("Last position of Class method array must be Function in key " + key + " was '" + lang_1.stringify(fn) + "'");
	        }
	        var annoLength = annotations.length - 1;
	        if (annoLength != fn.length) {
	            throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + lang_1.stringify(fn));
	        }
	        var paramsAnnotations = [];
	        for (var i = 0, ii = annotations.length - 1; i < ii; i++) {
	            var paramAnnotations = [];
	            paramsAnnotations.push(paramAnnotations);
	            var annotation = annotations[i];
	            if (annotation instanceof Array) {
	                for (var j = 0; j < annotation.length; j++) {
	                    paramAnnotations.push(extractAnnotation(annotation[j]));
	                }
	            }
	            else if (lang_1.isFunction(annotation)) {
	                paramAnnotations.push(extractAnnotation(annotation));
	            }
	            else {
	                paramAnnotations.push(annotation);
	            }
	        }
	        Reflect.defineMetadata('parameters', paramsAnnotations, fn);
	        return fn;
	    }
	    else {
	        throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + lang_1.stringify(fnOrArray) + "'");
	    }
	}
	/**
	 * Provides a way for expressing ES6 classes with parameter annotations in ES5.
	 *
	 * ## Basic Example
	 *
	 * ```
	 * var Greeter = ng.Class({
	 *   constructor: function(name) {
	 *     this.name = name;
	 *   },
	 *
	 *   greet: function() {
	 *     alert('Hello ' + this.name + '!');
	 *   }
	 * });
	 * ```
	 *
	 * is equivalent to ES6:
	 *
	 * ```
	 * class Greeter {
	 *   constructor(name) {
	 *     this.name = name;
	 *   }
	 *
	 *   greet() {
	 *     alert('Hello ' + this.name + '!');
	 *   }
	 * }
	 * ```
	 *
	 * or equivalent to ES5:
	 *
	 * ```
	 * var Greeter = function (name) {
	 *   this.name = name;
	 * }
	 *
	 * Greeter.prototype.greet = function () {
	 *   alert('Hello ' + this.name + '!');
	 * }
	 * ```
	 *
	 * ### Example with parameter annotations
	 *
	 * ```
	 * var MyService = ng.Class({
	 *   constructor: [String, [new Query(), QueryList], function(name, queryList) {
	 *     ...
	 *   }]
	 * });
	 * ```
	 *
	 * is equivalent to ES6:
	 *
	 * ```
	 * class MyService {
	 *   constructor(name: string, @Query() queryList: QueryList) {
	 *     ...
	 *   }
	 * }
	 * ```
	 *
	 * ### Example with inheritance
	 *
	 * ```
	 * var Shape = ng.Class({
	 *   constructor: (color) {
	 *     this.color = color;
	 *   }
	 * });
	 *
	 * var Square = ng.Class({
	 *   extends: Shape,
	 *   constructor: function(color, size) {
	 *     Shape.call(this, color);
	 *     this.size = size;
	 *   }
	 * });
	 * ```
	 */
	function Class(clsDef) {
	    var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
	    var proto = constructor.prototype;
	    if (clsDef.hasOwnProperty('extends')) {
	        if (lang_1.isFunction(clsDef.extends)) {
	            constructor.prototype = proto =
	                Object.create(clsDef.extends.prototype);
	        }
	        else {
	            throw new Error("Class definition 'extends' property must be a constructor function was: " + lang_1.stringify(clsDef.extends));
	        }
	    }
	    for (var key in clsDef) {
	        if (key != 'extends' && key != 'prototype' && clsDef.hasOwnProperty(key)) {
	            proto[key] = applyParams(clsDef[key], key);
	        }
	    }
	    if (this && this.annotations instanceof Array) {
	        Reflect.defineMetadata('annotations', this.annotations, constructor);
	    }
	    if (!constructor['name']) {
	        constructor['overriddenName'] = "class" + _nextClassId++;
	    }
	    return constructor;
	}
	exports.Class = Class;
	var Reflect = lang_1.global.Reflect;
	// Throw statement at top-level is disallowed by closure compiler in ES6 input.
	// Wrap in an IIFE as a work-around.
	(function checkReflect() {
	    if (!(Reflect && Reflect.getMetadata)) {
	        throw 'reflect-metadata shim is required when using class decorators';
	    }
	})();
	function makeDecorator(annotationCls, chainFn) {
	    if (chainFn === void 0) { chainFn = null; }
	    function DecoratorFactory(objOrType) {
	        var annotationInstance = new annotationCls(objOrType);
	        if (this instanceof annotationCls) {
	            return annotationInstance;
	        }
	        else {
	            var chainAnnotation = lang_1.isFunction(this) && this.annotations instanceof Array ? this.annotations : [];
	            chainAnnotation.push(annotationInstance);
	            var TypeDecorator = function TypeDecorator(cls) {
	                var annotations = Reflect.getOwnMetadata('annotations', cls);
	                annotations = annotations || [];
	                annotations.push(annotationInstance);
	                Reflect.defineMetadata('annotations', annotations, cls);
	                return cls;
	            };
	            TypeDecorator.annotations = chainAnnotation;
	            TypeDecorator.Class = Class;
	            if (chainFn)
	                chainFn(TypeDecorator);
	            return TypeDecorator;
	        }
	    }
	    DecoratorFactory.prototype = Object.create(annotationCls.prototype);
	    DecoratorFactory.annotationCls = annotationCls;
	    return DecoratorFactory;
	}
	exports.makeDecorator = makeDecorator;
	function makeParamDecorator(annotationCls) {
	    function ParamDecoratorFactory() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        var annotationInstance = Object.create(annotationCls.prototype);
	        annotationCls.apply(annotationInstance, args);
	        if (this instanceof annotationCls) {
	            return annotationInstance;
	        }
	        else {
	            ParamDecorator.annotation = annotationInstance;
	            return ParamDecorator;
	        }
	        function ParamDecorator(cls, unusedKey, index) {
	            var parameters = Reflect.getMetadata('parameters', cls);
	            parameters = parameters || [];
	            // there might be gaps if some in between parameters do not have annotations.
	            // we pad with nulls.
	            while (parameters.length <= index) {
	                parameters.push(null);
	            }
	            parameters[index] = parameters[index] || [];
	            var annotationsForParam = parameters[index];
	            annotationsForParam.push(annotationInstance);
	            Reflect.defineMetadata('parameters', parameters, cls);
	            return cls;
	        }
	    }
	    ParamDecoratorFactory.prototype = Object.create(annotationCls.prototype);
	    ParamDecoratorFactory.annotationCls = annotationCls;
	    return ParamDecoratorFactory;
	}
	exports.makeParamDecorator = makeParamDecorator;
	function makePropDecorator(annotationCls) {
	    function PropDecoratorFactory() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        var decoratorInstance = Object.create(annotationCls.prototype);
	        annotationCls.apply(decoratorInstance, args);
	        if (this instanceof annotationCls) {
	            return decoratorInstance;
	        }
	        else {
	            return function PropDecorator(target, name) {
	                var meta = Reflect.getOwnMetadata('propMetadata', target.constructor);
	                meta = meta || {};
	                meta[name] = meta[name] || [];
	                meta[name].unshift(decoratorInstance);
	                Reflect.defineMetadata('propMetadata', meta, target.constructor);
	            };
	        }
	    }
	    PropDecoratorFactory.prototype = Object.create(annotationCls.prototype);
	    PropDecoratorFactory.annotationCls = annotationCls;
	    return PropDecoratorFactory;
	}
	exports.makePropDecorator = makePropDecorator;
	//# sourceMappingURL=decorators.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for util
	var decorators_1 = __webpack_require__(11);
	exports.Class = decorators_1.Class;
	//# sourceMappingURL=util.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	* @module
	* @description
	* The `di` module provides dependency injection container services.
	*/
	var metadata_1 = __webpack_require__(6);
	exports.InjectMetadata = metadata_1.InjectMetadata;
	exports.OptionalMetadata = metadata_1.OptionalMetadata;
	exports.InjectableMetadata = metadata_1.InjectableMetadata;
	exports.SelfMetadata = metadata_1.SelfMetadata;
	exports.HostMetadata = metadata_1.HostMetadata;
	exports.SkipSelfMetadata = metadata_1.SkipSelfMetadata;
	exports.DependencyMetadata = metadata_1.DependencyMetadata;
	// we have to reexport * because Dart and TS export two different sets of types
	__export(__webpack_require__(14));
	var forward_ref_1 = __webpack_require__(7);
	exports.forwardRef = forward_ref_1.forwardRef;
	exports.resolveForwardRef = forward_ref_1.resolveForwardRef;
	var injector_1 = __webpack_require__(15);
	exports.Injector = injector_1.Injector;
	var reflective_injector_1 = __webpack_require__(20);
	exports.ReflectiveInjector = reflective_injector_1.ReflectiveInjector;
	var provider_1 = __webpack_require__(28);
	exports.Binding = provider_1.Binding;
	exports.ProviderBuilder = provider_1.ProviderBuilder;
	exports.bind = provider_1.bind;
	exports.Provider = provider_1.Provider;
	exports.provide = provider_1.provide;
	var reflective_provider_1 = __webpack_require__(21);
	exports.ResolvedReflectiveFactory = reflective_provider_1.ResolvedReflectiveFactory;
	exports.ReflectiveDependency = reflective_provider_1.ReflectiveDependency;
	var reflective_key_1 = __webpack_require__(26);
	exports.ReflectiveKey = reflective_key_1.ReflectiveKey;
	var reflective_exceptions_1 = __webpack_require__(27);
	exports.NoProviderError = reflective_exceptions_1.NoProviderError;
	exports.AbstractProviderError = reflective_exceptions_1.AbstractProviderError;
	exports.CyclicDependencyError = reflective_exceptions_1.CyclicDependencyError;
	exports.InstantiationError = reflective_exceptions_1.InstantiationError;
	exports.InvalidProviderError = reflective_exceptions_1.InvalidProviderError;
	exports.NoAnnotationError = reflective_exceptions_1.NoAnnotationError;
	exports.OutOfBoundsError = reflective_exceptions_1.OutOfBoundsError;
	var opaque_token_1 = __webpack_require__(30);
	exports.OpaqueToken = opaque_token_1.OpaqueToken;
	//# sourceMappingURL=di.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(6);
	var decorators_1 = __webpack_require__(11);
	/**
	 * Factory for creating {@link InjectMetadata}.
	 */
	exports.Inject = decorators_1.makeParamDecorator(metadata_1.InjectMetadata);
	/**
	 * Factory for creating {@link OptionalMetadata}.
	 */
	exports.Optional = decorators_1.makeParamDecorator(metadata_1.OptionalMetadata);
	/**
	 * Factory for creating {@link InjectableMetadata}.
	 */
	exports.Injectable = decorators_1.makeDecorator(metadata_1.InjectableMetadata);
	/**
	 * Factory for creating {@link SelfMetadata}.
	 */
	exports.Self = decorators_1.makeParamDecorator(metadata_1.SelfMetadata);
	/**
	 * Factory for creating {@link HostMetadata}.
	 */
	exports.Host = decorators_1.makeParamDecorator(metadata_1.HostMetadata);
	/**
	 * Factory for creating {@link SkipSelfMetadata}.
	 */
	exports.SkipSelf = decorators_1.makeParamDecorator(metadata_1.SkipSelfMetadata);
	//# sourceMappingURL=decorators.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var exceptions_1 = __webpack_require__(16);
	var _THROW_IF_NOT_FOUND = new Object();
	exports.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
	var Injector = (function () {
	    function Injector() {
	    }
	    /**
	     * Retrieves an instance from the injector based on the provided token.
	     * If not found:
	     * - Throws {@link NoProviderError} if no `notFoundValue` that is not equal to
	     * Injector.THROW_IF_NOT_FOUND is given
	     * - Returns the `notFoundValue` otherwise
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/HeXSHg?p=preview))
	     *
	     * ```typescript
	     * var injector = ReflectiveInjector.resolveAndCreate([
	     *   provide("validToken", {useValue: "Value"})
	     * ]);
	     * expect(injector.get("validToken")).toEqual("Value");
	     * expect(() => injector.get("invalidToken")).toThrowError();
	     * ```
	     *
	     * `Injector` returns itself when given `Injector` as a token.
	     *
	     * ```typescript
	     * var injector = ReflectiveInjector.resolveAndCreate([]);
	     * expect(injector.get(Injector)).toBe(injector);
	     * ```
	     */
	    Injector.prototype.get = function (token, notFoundValue) { return exceptions_1.unimplemented(); };
	    Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
	    return Injector;
	}());
	exports.Injector = Injector;
	//# sourceMappingURL=injector.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(17);
	var exception_handler_1 = __webpack_require__(18);
	var exception_handler_2 = __webpack_require__(18);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = "--"; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException, _originalStack, _context) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	* A base class for the WrappedException that can be used to identify
	* a WrappedException from ExceptionHandler without adding circular
	* dependency.
	*/
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var base_wrapped_exception_1 = __webpack_require__(17);
	var collection_1 = __webpack_require__(19);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, [provide(ExceptionHandler, {useClass: MyExceptionHandler})])
	 *
	 * ```
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join("\n");
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError("STACKTRACE:");
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError("ORIGINAL STACKTRACE:");
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError("ERROR CONTEXT:");
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).reduce(function (r, a) {
	            r.push(map[a]);
	            return r;
	        }, []);
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(19);
	var reflective_provider_1 = __webpack_require__(21);
	var reflective_exceptions_1 = __webpack_require__(27);
	var exceptions_1 = __webpack_require__(16);
	var reflective_key_1 = __webpack_require__(26);
	var metadata_1 = __webpack_require__(6);
	var injector_1 = __webpack_require__(15);
	var __unused; // avoid unused import when Type union types are erased
	// Threshold for the dynamic version
	var _MAX_CONSTRUCTION_COUNTER = 10;
	var UNDEFINED = new Object();
	var ReflectiveProtoInjectorInlineStrategy = (function () {
	    function ReflectiveProtoInjectorInlineStrategy(protoEI, providers) {
	        this.provider0 = null;
	        this.provider1 = null;
	        this.provider2 = null;
	        this.provider3 = null;
	        this.provider4 = null;
	        this.provider5 = null;
	        this.provider6 = null;
	        this.provider7 = null;
	        this.provider8 = null;
	        this.provider9 = null;
	        this.keyId0 = null;
	        this.keyId1 = null;
	        this.keyId2 = null;
	        this.keyId3 = null;
	        this.keyId4 = null;
	        this.keyId5 = null;
	        this.keyId6 = null;
	        this.keyId7 = null;
	        this.keyId8 = null;
	        this.keyId9 = null;
	        var length = providers.length;
	        if (length > 0) {
	            this.provider0 = providers[0];
	            this.keyId0 = providers[0].key.id;
	        }
	        if (length > 1) {
	            this.provider1 = providers[1];
	            this.keyId1 = providers[1].key.id;
	        }
	        if (length > 2) {
	            this.provider2 = providers[2];
	            this.keyId2 = providers[2].key.id;
	        }
	        if (length > 3) {
	            this.provider3 = providers[3];
	            this.keyId3 = providers[3].key.id;
	        }
	        if (length > 4) {
	            this.provider4 = providers[4];
	            this.keyId4 = providers[4].key.id;
	        }
	        if (length > 5) {
	            this.provider5 = providers[5];
	            this.keyId5 = providers[5].key.id;
	        }
	        if (length > 6) {
	            this.provider6 = providers[6];
	            this.keyId6 = providers[6].key.id;
	        }
	        if (length > 7) {
	            this.provider7 = providers[7];
	            this.keyId7 = providers[7].key.id;
	        }
	        if (length > 8) {
	            this.provider8 = providers[8];
	            this.keyId8 = providers[8].key.id;
	        }
	        if (length > 9) {
	            this.provider9 = providers[9];
	            this.keyId9 = providers[9].key.id;
	        }
	    }
	    ReflectiveProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function (index) {
	        if (index == 0)
	            return this.provider0;
	        if (index == 1)
	            return this.provider1;
	        if (index == 2)
	            return this.provider2;
	        if (index == 3)
	            return this.provider3;
	        if (index == 4)
	            return this.provider4;
	        if (index == 5)
	            return this.provider5;
	        if (index == 6)
	            return this.provider6;
	        if (index == 7)
	            return this.provider7;
	        if (index == 8)
	            return this.provider8;
	        if (index == 9)
	            return this.provider9;
	        throw new reflective_exceptions_1.OutOfBoundsError(index);
	    };
	    ReflectiveProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function (injector) {
	        return new ReflectiveInjectorInlineStrategy(injector, this);
	    };
	    return ReflectiveProtoInjectorInlineStrategy;
	}());
	exports.ReflectiveProtoInjectorInlineStrategy = ReflectiveProtoInjectorInlineStrategy;
	var ReflectiveProtoInjectorDynamicStrategy = (function () {
	    function ReflectiveProtoInjectorDynamicStrategy(protoInj, providers) {
	        this.providers = providers;
	        var len = providers.length;
	        this.keyIds = collection_1.ListWrapper.createFixedSize(len);
	        for (var i = 0; i < len; i++) {
	            this.keyIds[i] = providers[i].key.id;
	        }
	    }
	    ReflectiveProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function (index) {
	        if (index < 0 || index >= this.providers.length) {
	            throw new reflective_exceptions_1.OutOfBoundsError(index);
	        }
	        return this.providers[index];
	    };
	    ReflectiveProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function (ei) {
	        return new ReflectiveInjectorDynamicStrategy(this, ei);
	    };
	    return ReflectiveProtoInjectorDynamicStrategy;
	}());
	exports.ReflectiveProtoInjectorDynamicStrategy = ReflectiveProtoInjectorDynamicStrategy;
	var ReflectiveProtoInjector = (function () {
	    function ReflectiveProtoInjector(providers) {
	        this.numberOfProviders = providers.length;
	        this._strategy = providers.length > _MAX_CONSTRUCTION_COUNTER ?
	            new ReflectiveProtoInjectorDynamicStrategy(this, providers) :
	            new ReflectiveProtoInjectorInlineStrategy(this, providers);
	    }
	    ReflectiveProtoInjector.fromResolvedProviders = function (providers) {
	        return new ReflectiveProtoInjector(providers);
	    };
	    ReflectiveProtoInjector.prototype.getProviderAtIndex = function (index) {
	        return this._strategy.getProviderAtIndex(index);
	    };
	    return ReflectiveProtoInjector;
	}());
	exports.ReflectiveProtoInjector = ReflectiveProtoInjector;
	var ReflectiveInjectorInlineStrategy = (function () {
	    function ReflectiveInjectorInlineStrategy(injector, protoStrategy) {
	        this.injector = injector;
	        this.protoStrategy = protoStrategy;
	        this.obj0 = UNDEFINED;
	        this.obj1 = UNDEFINED;
	        this.obj2 = UNDEFINED;
	        this.obj3 = UNDEFINED;
	        this.obj4 = UNDEFINED;
	        this.obj5 = UNDEFINED;
	        this.obj6 = UNDEFINED;
	        this.obj7 = UNDEFINED;
	        this.obj8 = UNDEFINED;
	        this.obj9 = UNDEFINED;
	    }
	    ReflectiveInjectorInlineStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
	    ReflectiveInjectorInlineStrategy.prototype.instantiateProvider = function (provider) {
	        return this.injector._new(provider);
	    };
	    ReflectiveInjectorInlineStrategy.prototype.getObjByKeyId = function (keyId) {
	        var p = this.protoStrategy;
	        var inj = this.injector;
	        if (p.keyId0 === keyId) {
	            if (this.obj0 === UNDEFINED) {
	                this.obj0 = inj._new(p.provider0);
	            }
	            return this.obj0;
	        }
	        if (p.keyId1 === keyId) {
	            if (this.obj1 === UNDEFINED) {
	                this.obj1 = inj._new(p.provider1);
	            }
	            return this.obj1;
	        }
	        if (p.keyId2 === keyId) {
	            if (this.obj2 === UNDEFINED) {
	                this.obj2 = inj._new(p.provider2);
	            }
	            return this.obj2;
	        }
	        if (p.keyId3 === keyId) {
	            if (this.obj3 === UNDEFINED) {
	                this.obj3 = inj._new(p.provider3);
	            }
	            return this.obj3;
	        }
	        if (p.keyId4 === keyId) {
	            if (this.obj4 === UNDEFINED) {
	                this.obj4 = inj._new(p.provider4);
	            }
	            return this.obj4;
	        }
	        if (p.keyId5 === keyId) {
	            if (this.obj5 === UNDEFINED) {
	                this.obj5 = inj._new(p.provider5);
	            }
	            return this.obj5;
	        }
	        if (p.keyId6 === keyId) {
	            if (this.obj6 === UNDEFINED) {
	                this.obj6 = inj._new(p.provider6);
	            }
	            return this.obj6;
	        }
	        if (p.keyId7 === keyId) {
	            if (this.obj7 === UNDEFINED) {
	                this.obj7 = inj._new(p.provider7);
	            }
	            return this.obj7;
	        }
	        if (p.keyId8 === keyId) {
	            if (this.obj8 === UNDEFINED) {
	                this.obj8 = inj._new(p.provider8);
	            }
	            return this.obj8;
	        }
	        if (p.keyId9 === keyId) {
	            if (this.obj9 === UNDEFINED) {
	                this.obj9 = inj._new(p.provider9);
	            }
	            return this.obj9;
	        }
	        return UNDEFINED;
	    };
	    ReflectiveInjectorInlineStrategy.prototype.getObjAtIndex = function (index) {
	        if (index == 0)
	            return this.obj0;
	        if (index == 1)
	            return this.obj1;
	        if (index == 2)
	            return this.obj2;
	        if (index == 3)
	            return this.obj3;
	        if (index == 4)
	            return this.obj4;
	        if (index == 5)
	            return this.obj5;
	        if (index == 6)
	            return this.obj6;
	        if (index == 7)
	            return this.obj7;
	        if (index == 8)
	            return this.obj8;
	        if (index == 9)
	            return this.obj9;
	        throw new reflective_exceptions_1.OutOfBoundsError(index);
	    };
	    ReflectiveInjectorInlineStrategy.prototype.getMaxNumberOfObjects = function () { return _MAX_CONSTRUCTION_COUNTER; };
	    return ReflectiveInjectorInlineStrategy;
	}());
	exports.ReflectiveInjectorInlineStrategy = ReflectiveInjectorInlineStrategy;
	var ReflectiveInjectorDynamicStrategy = (function () {
	    function ReflectiveInjectorDynamicStrategy(protoStrategy, injector) {
	        this.protoStrategy = protoStrategy;
	        this.injector = injector;
	        this.objs = collection_1.ListWrapper.createFixedSize(protoStrategy.providers.length);
	        collection_1.ListWrapper.fill(this.objs, UNDEFINED);
	    }
	    ReflectiveInjectorDynamicStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
	    ReflectiveInjectorDynamicStrategy.prototype.instantiateProvider = function (provider) {
	        return this.injector._new(provider);
	    };
	    ReflectiveInjectorDynamicStrategy.prototype.getObjByKeyId = function (keyId) {
	        var p = this.protoStrategy;
	        for (var i = 0; i < p.keyIds.length; i++) {
	            if (p.keyIds[i] === keyId) {
	                if (this.objs[i] === UNDEFINED) {
	                    this.objs[i] = this.injector._new(p.providers[i]);
	                }
	                return this.objs[i];
	            }
	        }
	        return UNDEFINED;
	    };
	    ReflectiveInjectorDynamicStrategy.prototype.getObjAtIndex = function (index) {
	        if (index < 0 || index >= this.objs.length) {
	            throw new reflective_exceptions_1.OutOfBoundsError(index);
	        }
	        return this.objs[index];
	    };
	    ReflectiveInjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function () { return this.objs.length; };
	    return ReflectiveInjectorDynamicStrategy;
	}());
	exports.ReflectiveInjectorDynamicStrategy = ReflectiveInjectorDynamicStrategy;
	/**
	 * A ReflectiveDependency injection container used for instantiating objects and resolving
	 * dependencies.
	 *
	 * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
	 * constructor dependencies.
	 *
	 * In typical use, application code asks for the dependencies in the constructor and they are
	 * resolved by the `Injector`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/jzjec0?p=preview))
	 *
	 * The following example creates an `Injector` configured to create `Engine` and `Car`.
	 *
	 * ```typescript
	 * @Injectable()
	 * class Engine {
	 * }
	 *
	 * @Injectable()
	 * class Car {
	 *   constructor(public engine:Engine) {}
	 * }
	 *
	 * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
	 * var car = injector.get(Car);
	 * expect(car instanceof Car).toBe(true);
	 * expect(car.engine instanceof Engine).toBe(true);
	 * ```
	 *
	 * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
	 * resolve all of the object's dependencies automatically.
	 */
	var ReflectiveInjector = (function () {
	    function ReflectiveInjector() {
	    }
	    /**
	     * Turns an array of provider definitions into an array of resolved providers.
	     *
	     * A resolution is a process of flattening multiple nested arrays and converting individual
	     * providers into an array of {@link ResolvedReflectiveProvider}s.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/AiXTHi?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);
	     *
	     * expect(providers.length).toEqual(2);
	     *
	     * expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
	     * expect(providers[0].key.displayName).toBe("Car");
	     * expect(providers[0].dependencies.length).toEqual(1);
	     * expect(providers[0].factory).toBeDefined();
	     *
	     * expect(providers[1].key.displayName).toBe("Engine");
	     * });
	     * ```
	     *
	     * See {@link ReflectiveInjector#fromResolvedProviders} for more info.
	     */
	    ReflectiveInjector.resolve = function (providers) {
	        return reflective_provider_1.resolveReflectiveProviders(providers);
	    };
	    /**
	     * Resolves an array of providers and creates an injector from those providers.
	     *
	     * The passed-in providers can be an array of `Type`, {@link Provider},
	     * or a recursive array of more providers.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/ePOccA?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
	     * expect(injector.get(Car) instanceof Car).toBe(true);
	     * ```
	     *
	     * This function is slower than the corresponding `fromResolvedProviders`
	     * because it needs to resolve the passed-in providers first.
	     * See {@link Injector#resolve} and {@link Injector#fromResolvedProviders}.
	     */
	    ReflectiveInjector.resolveAndCreate = function (providers, parent) {
	        if (parent === void 0) { parent = null; }
	        var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
	        return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
	    };
	    /**
	     * Creates an injector from previously resolved providers.
	     *
	     * This API is the recommended way to construct injectors in performance-sensitive parts.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/KrSMci?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var providers = ReflectiveInjector.resolve([Car, Engine]);
	     * var injector = ReflectiveInjector.fromResolvedProviders(providers);
	     * expect(injector.get(Car) instanceof Car).toBe(true);
	     * ```
	     */
	    ReflectiveInjector.fromResolvedProviders = function (providers, parent) {
	        if (parent === void 0) { parent = null; }
	        return new ReflectiveInjector_(ReflectiveProtoInjector.fromResolvedProviders(providers), parent);
	    };
	    /**
	     * @deprecated
	     */
	    ReflectiveInjector.fromResolvedBindings = function (providers) {
	        return ReflectiveInjector.fromResolvedProviders(providers);
	    };
	    Object.defineProperty(ReflectiveInjector.prototype, "parent", {
	        /**
	         * Parent of this injector.
	         *
	         * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	         * -->
	         *
	         * ### Example ([live demo](http://plnkr.co/edit/eosMGo?p=preview))
	         *
	         * ```typescript
	         * var parent = ReflectiveInjector.resolveAndCreate([]);
	         * var child = parent.resolveAndCreateChild([]);
	         * expect(child.parent).toBe(parent);
	         * ```
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @internal
	     */
	    ReflectiveInjector.prototype.debugContext = function () { return null; };
	    /**
	     * Resolves an array of providers and creates a child injector from those providers.
	     *
	     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	     * -->
	     *
	     * The passed-in providers can be an array of `Type`, {@link Provider},
	     * or a recursive array of more providers.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/opB3T4?p=preview))
	     *
	     * ```typescript
	     * class ParentProvider {}
	     * class ChildProvider {}
	     *
	     * var parent = ReflectiveInjector.resolveAndCreate([ParentProvider]);
	     * var child = parent.resolveAndCreateChild([ChildProvider]);
	     *
	     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	     * ```
	     *
	     * This function is slower than the corresponding `createChildFromResolved`
	     * because it needs to resolve the passed-in providers first.
	     * See {@link Injector#resolve} and {@link Injector#createChildFromResolved}.
	     */
	    ReflectiveInjector.prototype.resolveAndCreateChild = function (providers) {
	        return exceptions_1.unimplemented();
	    };
	    /**
	     * Creates a child injector from previously resolved providers.
	     *
	     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
	     * -->
	     *
	     * This API is the recommended way to construct injectors in performance-sensitive parts.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/VhyfjN?p=preview))
	     *
	     * ```typescript
	     * class ParentProvider {}
	     * class ChildProvider {}
	     *
	     * var parentProviders = ReflectiveInjector.resolve([ParentProvider]);
	     * var childProviders = ReflectiveInjector.resolve([ChildProvider]);
	     *
	     * var parent = ReflectiveInjector.fromResolvedProviders(parentProviders);
	     * var child = parent.createChildFromResolved(childProviders);
	     *
	     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
	     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
	     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
	     * ```
	     */
	    ReflectiveInjector.prototype.createChildFromResolved = function (providers) {
	        return exceptions_1.unimplemented();
	    };
	    /**
	     * Resolves a provider and instantiates an object in the context of the injector.
	     *
	     * The created object does not get cached by the injector.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/yvVXoB?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	     *
	     * var car = injector.resolveAndInstantiate(Car);
	     * expect(car.engine).toBe(injector.get(Engine));
	     * expect(car).not.toBe(injector.resolveAndInstantiate(Car));
	     * ```
	     */
	    ReflectiveInjector.prototype.resolveAndInstantiate = function (provider) { return exceptions_1.unimplemented(); };
	    /**
	     * Instantiates an object using a resolved provider in the context of the injector.
	     *
	     * The created object does not get cached by the injector.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/ptCImQ?p=preview))
	     *
	     * ```typescript
	     * @Injectable()
	     * class Engine {
	     * }
	     *
	     * @Injectable()
	     * class Car {
	     *   constructor(public engine:Engine) {}
	     * }
	     *
	     * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
	     * var carProvider = ReflectiveInjector.resolve([Car])[0];
	     * var car = injector.instantiateResolved(carProvider);
	     * expect(car.engine).toBe(injector.get(Engine));
	     * expect(car).not.toBe(injector.instantiateResolved(carProvider));
	     * ```
	     */
	    ReflectiveInjector.prototype.instantiateResolved = function (provider) { return exceptions_1.unimplemented(); };
	    return ReflectiveInjector;
	}());
	exports.ReflectiveInjector = ReflectiveInjector;
	var ReflectiveInjector_ = (function () {
	    /**
	     * Private
	     */
	    function ReflectiveInjector_(_proto /* ProtoInjector */, _parent, _debugContext) {
	        if (_parent === void 0) { _parent = null; }
	        if (_debugContext === void 0) { _debugContext = null; }
	        this._debugContext = _debugContext;
	        /** @internal */
	        this._constructionCounter = 0;
	        this._proto = _proto;
	        this._parent = _parent;
	        this._strategy = _proto._strategy.createInjectorStrategy(this);
	    }
	    /**
	     * @internal
	     */
	    ReflectiveInjector_.prototype.debugContext = function () { return this._debugContext(); };
	    ReflectiveInjector_.prototype.get = function (token, notFoundValue) {
	        if (notFoundValue === void 0) { notFoundValue = injector_1.THROW_IF_NOT_FOUND; }
	        return this._getByKey(reflective_key_1.ReflectiveKey.get(token), null, null, notFoundValue);
	    };
	    ReflectiveInjector_.prototype.getAt = function (index) { return this._strategy.getObjAtIndex(index); };
	    Object.defineProperty(ReflectiveInjector_.prototype, "parent", {
	        get: function () { return this._parent; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ReflectiveInjector_.prototype, "internalStrategy", {
	        /**
	         * @internal
	         * Internal. Do not use.
	         * We return `any` not to export the InjectorStrategy type.
	         */
	        get: function () { return this._strategy; },
	        enumerable: true,
	        configurable: true
	    });
	    ReflectiveInjector_.prototype.resolveAndCreateChild = function (providers) {
	        var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
	        return this.createChildFromResolved(ResolvedReflectiveProviders);
	    };
	    ReflectiveInjector_.prototype.createChildFromResolved = function (providers) {
	        var proto = new ReflectiveProtoInjector(providers);
	        var inj = new ReflectiveInjector_(proto);
	        inj._parent = this;
	        return inj;
	    };
	    ReflectiveInjector_.prototype.resolveAndInstantiate = function (provider) {
	        return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
	    };
	    ReflectiveInjector_.prototype.instantiateResolved = function (provider) {
	        return this._instantiateProvider(provider);
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._new = function (provider) {
	        if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
	            throw new reflective_exceptions_1.CyclicDependencyError(this, provider.key);
	        }
	        return this._instantiateProvider(provider);
	    };
	    ReflectiveInjector_.prototype._instantiateProvider = function (provider) {
	        if (provider.multiProvider) {
	            var res = collection_1.ListWrapper.createFixedSize(provider.resolvedFactories.length);
	            for (var i = 0; i < provider.resolvedFactories.length; ++i) {
	                res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
	            }
	            return res;
	        }
	        else {
	            return this._instantiate(provider, provider.resolvedFactories[0]);
	        }
	    };
	    ReflectiveInjector_.prototype._instantiate = function (provider, ResolvedReflectiveFactory) {
	        var factory = ResolvedReflectiveFactory.factory;
	        var deps = ResolvedReflectiveFactory.dependencies;
	        var length = deps.length;
	        var d0;
	        var d1;
	        var d2;
	        var d3;
	        var d4;
	        var d5;
	        var d6;
	        var d7;
	        var d8;
	        var d9;
	        var d10;
	        var d11;
	        var d12;
	        var d13;
	        var d14;
	        var d15;
	        var d16;
	        var d17;
	        var d18;
	        var d19;
	        try {
	            d0 = length > 0 ? this._getByReflectiveDependency(provider, deps[0]) : null;
	            d1 = length > 1 ? this._getByReflectiveDependency(provider, deps[1]) : null;
	            d2 = length > 2 ? this._getByReflectiveDependency(provider, deps[2]) : null;
	            d3 = length > 3 ? this._getByReflectiveDependency(provider, deps[3]) : null;
	            d4 = length > 4 ? this._getByReflectiveDependency(provider, deps[4]) : null;
	            d5 = length > 5 ? this._getByReflectiveDependency(provider, deps[5]) : null;
	            d6 = length > 6 ? this._getByReflectiveDependency(provider, deps[6]) : null;
	            d7 = length > 7 ? this._getByReflectiveDependency(provider, deps[7]) : null;
	            d8 = length > 8 ? this._getByReflectiveDependency(provider, deps[8]) : null;
	            d9 = length > 9 ? this._getByReflectiveDependency(provider, deps[9]) : null;
	            d10 = length > 10 ? this._getByReflectiveDependency(provider, deps[10]) : null;
	            d11 = length > 11 ? this._getByReflectiveDependency(provider, deps[11]) : null;
	            d12 = length > 12 ? this._getByReflectiveDependency(provider, deps[12]) : null;
	            d13 = length > 13 ? this._getByReflectiveDependency(provider, deps[13]) : null;
	            d14 = length > 14 ? this._getByReflectiveDependency(provider, deps[14]) : null;
	            d15 = length > 15 ? this._getByReflectiveDependency(provider, deps[15]) : null;
	            d16 = length > 16 ? this._getByReflectiveDependency(provider, deps[16]) : null;
	            d17 = length > 17 ? this._getByReflectiveDependency(provider, deps[17]) : null;
	            d18 = length > 18 ? this._getByReflectiveDependency(provider, deps[18]) : null;
	            d19 = length > 19 ? this._getByReflectiveDependency(provider, deps[19]) : null;
	        }
	        catch (e) {
	            if (e instanceof reflective_exceptions_1.AbstractProviderError || e instanceof reflective_exceptions_1.InstantiationError) {
	                e.addKey(this, provider.key);
	            }
	            throw e;
	        }
	        var obj;
	        try {
	            switch (length) {
	                case 0:
	                    obj = factory();
	                    break;
	                case 1:
	                    obj = factory(d0);
	                    break;
	                case 2:
	                    obj = factory(d0, d1);
	                    break;
	                case 3:
	                    obj = factory(d0, d1, d2);
	                    break;
	                case 4:
	                    obj = factory(d0, d1, d2, d3);
	                    break;
	                case 5:
	                    obj = factory(d0, d1, d2, d3, d4);
	                    break;
	                case 6:
	                    obj = factory(d0, d1, d2, d3, d4, d5);
	                    break;
	                case 7:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6);
	                    break;
	                case 8:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
	                    break;
	                case 9:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
	                    break;
	                case 10:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
	                    break;
	                case 11:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
	                    break;
	                case 12:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
	                    break;
	                case 13:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
	                    break;
	                case 14:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
	                    break;
	                case 15:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
	                    break;
	                case 16:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
	                    break;
	                case 17:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
	                    break;
	                case 18:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
	                    break;
	                case 19:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
	                    break;
	                case 20:
	                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
	                    break;
	                default:
	                    throw new exceptions_1.BaseException("Cannot instantiate '" + provider.key.displayName + "' because it has more than 20 dependencies");
	            }
	        }
	        catch (e) {
	            throw new reflective_exceptions_1.InstantiationError(this, e, e.stack, provider.key);
	        }
	        return obj;
	    };
	    ReflectiveInjector_.prototype._getByReflectiveDependency = function (provider, dep) {
	        return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional ? null : injector_1.THROW_IF_NOT_FOUND);
	    };
	    ReflectiveInjector_.prototype._getByKey = function (key, lowerBoundVisibility, upperBoundVisibility, notFoundValue) {
	        if (key === INJECTOR_KEY) {
	            return this;
	        }
	        if (upperBoundVisibility instanceof metadata_1.SelfMetadata) {
	            return this._getByKeySelf(key, notFoundValue);
	        }
	        else {
	            return this._getByKeyDefault(key, notFoundValue, lowerBoundVisibility);
	        }
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._throwOrNull = function (key, notFoundValue) {
	        if (notFoundValue !== injector_1.THROW_IF_NOT_FOUND) {
	            return notFoundValue;
	        }
	        else {
	            throw new reflective_exceptions_1.NoProviderError(this, key);
	        }
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._getByKeySelf = function (key, notFoundValue) {
	        var obj = this._strategy.getObjByKeyId(key.id);
	        return (obj !== UNDEFINED) ? obj : this._throwOrNull(key, notFoundValue);
	    };
	    /** @internal */
	    ReflectiveInjector_.prototype._getByKeyDefault = function (key, notFoundValue, lowerBoundVisibility) {
	        var inj;
	        if (lowerBoundVisibility instanceof metadata_1.SkipSelfMetadata) {
	            inj = this._parent;
	        }
	        else {
	            inj = this;
	        }
	        while (inj instanceof ReflectiveInjector_) {
	            var inj_ = inj;
	            var obj = inj_._strategy.getObjByKeyId(key.id);
	            if (obj !== UNDEFINED)
	                return obj;
	            inj = inj_._parent;
	        }
	        if (inj !== null) {
	            return inj.get(key.token, notFoundValue);
	        }
	        else {
	            return this._throwOrNull(key, notFoundValue);
	        }
	    };
	    Object.defineProperty(ReflectiveInjector_.prototype, "displayName", {
	        get: function () {
	            return "ReflectiveInjector(providers: [" + _mapProviders(this, function (b) { return (" \"" + b.key.displayName + "\" "); }).join(", ") + "])";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ReflectiveInjector_.prototype.toString = function () { return this.displayName; };
	    return ReflectiveInjector_;
	}());
	exports.ReflectiveInjector_ = ReflectiveInjector_;
	var INJECTOR_KEY = reflective_key_1.ReflectiveKey.get(injector_1.Injector);
	function _mapProviders(injector, fn) {
	    var res = [];
	    for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
	        res.push(fn(injector._proto.getProviderAtIndex(i)));
	    }
	    return res;
	}
	//# sourceMappingURL=reflective_injector.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(19);
	var reflection_1 = __webpack_require__(22);
	var reflective_key_1 = __webpack_require__(26);
	var metadata_1 = __webpack_require__(6);
	var reflective_exceptions_1 = __webpack_require__(27);
	var forward_ref_1 = __webpack_require__(7);
	var provider_1 = __webpack_require__(28);
	var provider_util_1 = __webpack_require__(29);
	/**
	 * `Dependency` is used by the framework to extend DI.
	 * This is internal to Angular and should not be used directly.
	 */
	var ReflectiveDependency = (function () {
	    function ReflectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
	        this.key = key;
	        this.optional = optional;
	        this.lowerBoundVisibility = lowerBoundVisibility;
	        this.upperBoundVisibility = upperBoundVisibility;
	        this.properties = properties;
	    }
	    ReflectiveDependency.fromKey = function (key) {
	        return new ReflectiveDependency(key, false, null, null, []);
	    };
	    return ReflectiveDependency;
	}());
	exports.ReflectiveDependency = ReflectiveDependency;
	var _EMPTY_LIST = [];
	var ResolvedReflectiveProvider_ = (function () {
	    function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
	        this.key = key;
	        this.resolvedFactories = resolvedFactories;
	        this.multiProvider = multiProvider;
	    }
	    Object.defineProperty(ResolvedReflectiveProvider_.prototype, "resolvedFactory", {
	        get: function () { return this.resolvedFactories[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    return ResolvedReflectiveProvider_;
	}());
	exports.ResolvedReflectiveProvider_ = ResolvedReflectiveProvider_;
	/**
	 * An internal resolved representation of a factory function created by resolving {@link Provider}.
	 */
	var ResolvedReflectiveFactory = (function () {
	    function ResolvedReflectiveFactory(
	        /**
	         * Factory function which can return an instance of an object represented by a key.
	         */
	        factory, 
	        /**
	         * Arguments (dependencies) to the `factory` function.
	         */
	        dependencies) {
	        this.factory = factory;
	        this.dependencies = dependencies;
	    }
	    return ResolvedReflectiveFactory;
	}());
	exports.ResolvedReflectiveFactory = ResolvedReflectiveFactory;
	/**
	 * Resolve a single provider.
	 */
	function resolveReflectiveFactory(provider) {
	    var factoryFn;
	    var resolvedDeps;
	    if (lang_1.isPresent(provider.useClass)) {
	        var useClass = forward_ref_1.resolveForwardRef(provider.useClass);
	        factoryFn = reflection_1.reflector.factory(useClass);
	        resolvedDeps = _dependenciesFor(useClass);
	    }
	    else if (lang_1.isPresent(provider.useExisting)) {
	        factoryFn = function (aliasInstance) { return aliasInstance; };
	        resolvedDeps = [ReflectiveDependency.fromKey(reflective_key_1.ReflectiveKey.get(provider.useExisting))];
	    }
	    else if (lang_1.isPresent(provider.useFactory)) {
	        factoryFn = provider.useFactory;
	        resolvedDeps = constructDependencies(provider.useFactory, provider.dependencies);
	    }
	    else {
	        factoryFn = function () { return provider.useValue; };
	        resolvedDeps = _EMPTY_LIST;
	    }
	    return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
	}
	exports.resolveReflectiveFactory = resolveReflectiveFactory;
	/**
	 * Converts the {@link Provider} into {@link ResolvedProvider}.
	 *
	 * {@link Injector} internally only uses {@link ResolvedProvider}, {@link Provider} contains
	 * convenience provider syntax.
	 */
	function resolveReflectiveProvider(provider) {
	    return new ResolvedReflectiveProvider_(reflective_key_1.ReflectiveKey.get(provider.token), [resolveReflectiveFactory(provider)], provider.multi);
	}
	exports.resolveReflectiveProvider = resolveReflectiveProvider;
	/**
	 * Resolve a list of Providers.
	 */
	function resolveReflectiveProviders(providers) {
	    var normalized = _normalizeProviders(providers, []);
	    var resolved = normalized.map(resolveReflectiveProvider);
	    return collection_1.MapWrapper.values(mergeResolvedReflectiveProviders(resolved, new Map()));
	}
	exports.resolveReflectiveProviders = resolveReflectiveProviders;
	/**
	 * Merges a list of ResolvedProviders into a list where
	 * each key is contained exactly once and multi providers
	 * have been merged.
	 */
	function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
	    for (var i = 0; i < providers.length; i++) {
	        var provider = providers[i];
	        var existing = normalizedProvidersMap.get(provider.key.id);
	        if (lang_1.isPresent(existing)) {
	            if (provider.multiProvider !== existing.multiProvider) {
	                throw new reflective_exceptions_1.MixingMultiProvidersWithRegularProvidersError(existing, provider);
	            }
	            if (provider.multiProvider) {
	                for (var j = 0; j < provider.resolvedFactories.length; j++) {
	                    existing.resolvedFactories.push(provider.resolvedFactories[j]);
	                }
	            }
	            else {
	                normalizedProvidersMap.set(provider.key.id, provider);
	            }
	        }
	        else {
	            var resolvedProvider;
	            if (provider.multiProvider) {
	                resolvedProvider = new ResolvedReflectiveProvider_(provider.key, collection_1.ListWrapper.clone(provider.resolvedFactories), provider.multiProvider);
	            }
	            else {
	                resolvedProvider = provider;
	            }
	            normalizedProvidersMap.set(provider.key.id, resolvedProvider);
	        }
	    }
	    return normalizedProvidersMap;
	}
	exports.mergeResolvedReflectiveProviders = mergeResolvedReflectiveProviders;
	function _normalizeProviders(providers, res) {
	    providers.forEach(function (b) {
	        if (b instanceof lang_1.Type) {
	            res.push(provider_1.provide(b, { useClass: b }));
	        }
	        else if (b instanceof provider_1.Provider) {
	            res.push(b);
	        }
	        else if (provider_util_1.isProviderLiteral(b)) {
	            res.push(provider_util_1.createProvider(b));
	        }
	        else if (b instanceof Array) {
	            _normalizeProviders(b, res);
	        }
	        else if (b instanceof provider_1.ProviderBuilder) {
	            throw new reflective_exceptions_1.InvalidProviderError(b.token);
	        }
	        else {
	            throw new reflective_exceptions_1.InvalidProviderError(b);
	        }
	    });
	    return res;
	}
	function constructDependencies(typeOrFunc, dependencies) {
	    if (lang_1.isBlank(dependencies)) {
	        return _dependenciesFor(typeOrFunc);
	    }
	    else {
	        var params = dependencies.map(function (t) { return [t]; });
	        return dependencies.map(function (t) { return _extractToken(typeOrFunc, t, params); });
	    }
	}
	exports.constructDependencies = constructDependencies;
	function _dependenciesFor(typeOrFunc) {
	    var params = reflection_1.reflector.parameters(typeOrFunc);
	    if (lang_1.isBlank(params))
	        return [];
	    if (params.some(lang_1.isBlank)) {
	        throw new reflective_exceptions_1.NoAnnotationError(typeOrFunc, params);
	    }
	    return params.map(function (p) { return _extractToken(typeOrFunc, p, params); });
	}
	function _extractToken(typeOrFunc, metadata /*any[] | any*/, params) {
	    var depProps = [];
	    var token = null;
	    var optional = false;
	    if (!lang_1.isArray(metadata)) {
	        if (metadata instanceof metadata_1.InjectMetadata) {
	            return _createDependency(metadata.token, optional, null, null, depProps);
	        }
	        else {
	            return _createDependency(metadata, optional, null, null, depProps);
	        }
	    }
	    var lowerBoundVisibility = null;
	    var upperBoundVisibility = null;
	    for (var i = 0; i < metadata.length; ++i) {
	        var paramMetadata = metadata[i];
	        if (paramMetadata instanceof lang_1.Type) {
	            token = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.InjectMetadata) {
	            token = paramMetadata.token;
	        }
	        else if (paramMetadata instanceof metadata_1.OptionalMetadata) {
	            optional = true;
	        }
	        else if (paramMetadata instanceof metadata_1.SelfMetadata) {
	            upperBoundVisibility = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.HostMetadata) {
	            upperBoundVisibility = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.SkipSelfMetadata) {
	            lowerBoundVisibility = paramMetadata;
	        }
	        else if (paramMetadata instanceof metadata_1.DependencyMetadata) {
	            if (lang_1.isPresent(paramMetadata.token)) {
	                token = paramMetadata.token;
	            }
	            depProps.push(paramMetadata);
	        }
	    }
	    token = forward_ref_1.resolveForwardRef(token);
	    if (lang_1.isPresent(token)) {
	        return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	    }
	    else {
	        throw new reflective_exceptions_1.NoAnnotationError(typeOrFunc, params);
	    }
	}
	function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
	    return new ReflectiveDependency(reflective_key_1.ReflectiveKey.get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
	}
	//# sourceMappingURL=reflective_provider.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var reflector_1 = __webpack_require__(23);
	var reflector_2 = __webpack_require__(23);
	exports.Reflector = reflector_2.Reflector;
	exports.ReflectionInfo = reflector_2.ReflectionInfo;
	var reflection_capabilities_1 = __webpack_require__(25);
	/**
	 * The {@link Reflector} used internally in Angular to access metadata
	 * about symbols.
	 */
	exports.reflector = new reflector_1.Reflector(new reflection_capabilities_1.ReflectionCapabilities());
	//# sourceMappingURL=reflection.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(16);
	var collection_1 = __webpack_require__(19);
	var reflector_reader_1 = __webpack_require__(24);
	/**
	 * Reflective information about a symbol, including annotations, interfaces, and other metadata.
	 */
	var ReflectionInfo = (function () {
	    function ReflectionInfo(annotations, parameters, factory, interfaces, propMetadata) {
	        this.annotations = annotations;
	        this.parameters = parameters;
	        this.factory = factory;
	        this.interfaces = interfaces;
	        this.propMetadata = propMetadata;
	    }
	    return ReflectionInfo;
	}());
	exports.ReflectionInfo = ReflectionInfo;
	/**
	 * Provides access to reflection data about symbols. Used internally by Angular
	 * to power dependency injection and compilation.
	 */
	var Reflector = (function (_super) {
	    __extends(Reflector, _super);
	    function Reflector(reflectionCapabilities) {
	        _super.call(this);
	        /** @internal */
	        this._injectableInfo = new collection_1.Map();
	        /** @internal */
	        this._getters = new collection_1.Map();
	        /** @internal */
	        this._setters = new collection_1.Map();
	        /** @internal */
	        this._methods = new collection_1.Map();
	        this._usedKeys = null;
	        this.reflectionCapabilities = reflectionCapabilities;
	    }
	    Reflector.prototype.isReflectionEnabled = function () { return this.reflectionCapabilities.isReflectionEnabled(); };
	    /**
	     * Causes `this` reflector to track keys used to access
	     * {@link ReflectionInfo} objects.
	     */
	    Reflector.prototype.trackUsage = function () { this._usedKeys = new collection_1.Set(); };
	    /**
	     * Lists types for which reflection information was not requested since
	     * {@link #trackUsage} was called. This list could later be audited as
	     * potential dead code.
	     */
	    Reflector.prototype.listUnusedKeys = function () {
	        var _this = this;
	        if (this._usedKeys == null) {
	            throw new exceptions_1.BaseException('Usage tracking is disabled');
	        }
	        var allTypes = collection_1.MapWrapper.keys(this._injectableInfo);
	        return allTypes.filter(function (key) { return !collection_1.SetWrapper.has(_this._usedKeys, key); });
	    };
	    Reflector.prototype.registerFunction = function (func, funcInfo) {
	        this._injectableInfo.set(func, funcInfo);
	    };
	    Reflector.prototype.registerType = function (type, typeInfo) {
	        this._injectableInfo.set(type, typeInfo);
	    };
	    Reflector.prototype.registerGetters = function (getters) { _mergeMaps(this._getters, getters); };
	    Reflector.prototype.registerSetters = function (setters) { _mergeMaps(this._setters, setters); };
	    Reflector.prototype.registerMethods = function (methods) { _mergeMaps(this._methods, methods); };
	    Reflector.prototype.factory = function (type) {
	        if (this._containsReflectionInfo(type)) {
	            var res = this._getReflectionInfo(type).factory;
	            return lang_1.isPresent(res) ? res : null;
	        }
	        else {
	            return this.reflectionCapabilities.factory(type);
	        }
	    };
	    Reflector.prototype.parameters = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).parameters;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.parameters(typeOrFunc);
	        }
	    };
	    Reflector.prototype.annotations = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).annotations;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.annotations(typeOrFunc);
	        }
	    };
	    Reflector.prototype.propMetadata = function (typeOrFunc) {
	        if (this._injectableInfo.has(typeOrFunc)) {
	            var res = this._getReflectionInfo(typeOrFunc).propMetadata;
	            return lang_1.isPresent(res) ? res : {};
	        }
	        else {
	            return this.reflectionCapabilities.propMetadata(typeOrFunc);
	        }
	    };
	    Reflector.prototype.interfaces = function (type) {
	        if (this._injectableInfo.has(type)) {
	            var res = this._getReflectionInfo(type).interfaces;
	            return lang_1.isPresent(res) ? res : [];
	        }
	        else {
	            return this.reflectionCapabilities.interfaces(type);
	        }
	    };
	    Reflector.prototype.getter = function (name) {
	        if (this._getters.has(name)) {
	            return this._getters.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.getter(name);
	        }
	    };
	    Reflector.prototype.setter = function (name) {
	        if (this._setters.has(name)) {
	            return this._setters.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.setter(name);
	        }
	    };
	    Reflector.prototype.method = function (name) {
	        if (this._methods.has(name)) {
	            return this._methods.get(name);
	        }
	        else {
	            return this.reflectionCapabilities.method(name);
	        }
	    };
	    /** @internal */
	    Reflector.prototype._getReflectionInfo = function (typeOrFunc) {
	        if (lang_1.isPresent(this._usedKeys)) {
	            this._usedKeys.add(typeOrFunc);
	        }
	        return this._injectableInfo.get(typeOrFunc);
	    };
	    /** @internal */
	    Reflector.prototype._containsReflectionInfo = function (typeOrFunc) { return this._injectableInfo.has(typeOrFunc); };
	    Reflector.prototype.importUri = function (type) { return this.reflectionCapabilities.importUri(type); };
	    return Reflector;
	}(reflector_reader_1.ReflectorReader));
	exports.Reflector = Reflector;
	function _mergeMaps(target, config) {
	    collection_1.StringMapWrapper.forEach(config, function (v, k) { return target.set(k, v); });
	}
	//# sourceMappingURL=reflector.js.map

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Provides read-only access to reflection data about symbols. Used internally by Angular
	* to power dependency injection and compilation.
	*/
	var ReflectorReader = (function () {
	    function ReflectorReader() {
	    }
	    return ReflectorReader;
	}());
	exports.ReflectorReader = ReflectorReader;
	//# sourceMappingURL=reflector_reader.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(16);
	var ReflectionCapabilities = (function () {
	    function ReflectionCapabilities(reflect) {
	        this._reflect = lang_1.isPresent(reflect) ? reflect : lang_1.global.Reflect;
	    }
	    ReflectionCapabilities.prototype.isReflectionEnabled = function () { return true; };
	    ReflectionCapabilities.prototype.factory = function (t) {
	        switch (t.length) {
	            case 0:
	                return function () { return new t(); };
	            case 1:
	                return function (a1) { return new t(a1); };
	            case 2:
	                return function (a1, a2) { return new t(a1, a2); };
	            case 3:
	                return function (a1, a2, a3) { return new t(a1, a2, a3); };
	            case 4:
	                return function (a1, a2, a3, a4) { return new t(a1, a2, a3, a4); };
	            case 5:
	                return function (a1, a2, a3, a4, a5) { return new t(a1, a2, a3, a4, a5); };
	            case 6:
	                return function (a1, a2, a3, a4, a5, a6) {
	                    return new t(a1, a2, a3, a4, a5, a6);
	                };
	            case 7:
	                return function (a1, a2, a3, a4, a5, a6, a7) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7);
	                };
	            case 8:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8);
	                };
	            case 9:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9);
	                };
	            case 10:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
	                };
	            case 11:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
	                };
	            case 12:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
	                };
	            case 13:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
	                };
	            case 14:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
	                };
	            case 15:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
	                };
	            case 16:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
	                };
	            case 17:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
	                };
	            case 18:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
	                };
	            case 19:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
	                };
	            case 20:
	                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) {
	                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
	                };
	        }
	        ;
	        throw new Error("Cannot create a factory for '" + lang_1.stringify(t) + "' because its constructor has more than 20 arguments");
	    };
	    /** @internal */
	    ReflectionCapabilities.prototype._zipTypesAndAnnotations = function (paramTypes, paramAnnotations) {
	        var result;
	        if (typeof paramTypes === 'undefined') {
	            result = new Array(paramAnnotations.length);
	        }
	        else {
	            result = new Array(paramTypes.length);
	        }
	        for (var i = 0; i < result.length; i++) {
	            // TS outputs Object for parameters without types, while Traceur omits
	            // the annotations. For now we preserve the Traceur behavior to aid
	            // migration, but this can be revisited.
	            if (typeof paramTypes === 'undefined') {
	                result[i] = [];
	            }
	            else if (paramTypes[i] != Object) {
	                result[i] = [paramTypes[i]];
	            }
	            else {
	                result[i] = [];
	            }
	            if (lang_1.isPresent(paramAnnotations) && lang_1.isPresent(paramAnnotations[i])) {
	                result[i] = result[i].concat(paramAnnotations[i]);
	            }
	        }
	        return result;
	    };
	    ReflectionCapabilities.prototype.parameters = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.parameters)) {
	            return typeOrFunc.parameters;
	        }
	        // API of tsickle for lowering decorators to properties on the class.
	        if (lang_1.isPresent(typeOrFunc.ctorParameters)) {
	            var ctorParameters = typeOrFunc.ctorParameters;
	            var paramTypes_1 = ctorParameters.map(function (ctorParam) { return ctorParam && ctorParam.type; });
	            var paramAnnotations_1 = ctorParameters.map(function (ctorParam) { return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators); });
	            return this._zipTypesAndAnnotations(paramTypes_1, paramAnnotations_1);
	        }
	        // API for metadata created by invoking the decorators.
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
	            var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
	            if (lang_1.isPresent(paramTypes) || lang_1.isPresent(paramAnnotations)) {
	                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
	            }
	        }
	        // The array has to be filled with `undefined` because holes would be skipped by `some`
	        var parameters = new Array(typeOrFunc.length);
	        parameters.fill(undefined);
	        return parameters;
	    };
	    ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.annotations)) {
	            var annotations = typeOrFunc.annotations;
	            if (lang_1.isFunction(annotations) && annotations.annotations) {
	                annotations = annotations.annotations;
	            }
	            return annotations;
	        }
	        // API of tsickle for lowering decorators to properties on the class.
	        if (lang_1.isPresent(typeOrFunc.decorators)) {
	            return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);
	        }
	        // API for metadata created by invoking the decorators.
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
	            if (lang_1.isPresent(annotations))
	                return annotations;
	        }
	        return [];
	    };
	    ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
	        // Prefer the direct API.
	        if (lang_1.isPresent(typeOrFunc.propMetadata)) {
	            var propMetadata = typeOrFunc.propMetadata;
	            if (lang_1.isFunction(propMetadata) && propMetadata.propMetadata) {
	                propMetadata = propMetadata.propMetadata;
	            }
	            return propMetadata;
	        }
	        // API of tsickle for lowering decorators to properties on the class.
	        if (lang_1.isPresent(typeOrFunc.propDecorators)) {
	            var propDecorators_1 = typeOrFunc.propDecorators;
	            var propMetadata_1 = {};
	            Object.keys(propDecorators_1)
	                .forEach(function (prop) {
	                propMetadata_1[prop] = convertTsickleDecoratorIntoMetadata(propDecorators_1[prop]);
	            });
	            return propMetadata_1;
	        }
	        // API for metadata created by invoking the decorators.
	        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
	            var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
	            if (lang_1.isPresent(propMetadata))
	                return propMetadata;
	        }
	        return {};
	    };
	    ReflectionCapabilities.prototype.interfaces = function (type) {
	        throw new exceptions_1.BaseException("JavaScript does not support interfaces");
	    };
	    ReflectionCapabilities.prototype.getter = function (name) { return new Function('o', 'return o.' + name + ';'); };
	    ReflectionCapabilities.prototype.setter = function (name) {
	        return new Function('o', 'v', 'return o.' + name + ' = v;');
	    };
	    ReflectionCapabilities.prototype.method = function (name) {
	        var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
	        return new Function('o', 'args', functionBody);
	    };
	    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
	    ReflectionCapabilities.prototype.importUri = function (type) { return "./" + lang_1.stringify(type); };
	    return ReflectionCapabilities;
	}());
	exports.ReflectionCapabilities = ReflectionCapabilities;
	function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
	    if (!decoratorInvocations) {
	        return [];
	    }
	    return decoratorInvocations.map(function (decoratorInvocation) {
	        var decoratorType = decoratorInvocation.type;
	        var annotationCls = decoratorType.annotationCls;
	        var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
	        var annotation = Object.create(annotationCls.prototype);
	        annotationCls.apply(annotation, annotationArgs);
	        return annotation;
	    });
	}
	//# sourceMappingURL=reflection_capabilities.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(16);
	var forward_ref_1 = __webpack_require__(7);
	/**
	 * A unique object used for retrieving items from the {@link ReflectiveInjector}.
	 *
	 * Keys have:
	 * - a system-wide unique `id`.
	 * - a `token`.
	 *
	 * `Key` is used internally by {@link ReflectiveInjector} because its system-wide unique `id` allows
	 * the
	 * injector to store created objects in a more efficient way.
	 *
	 * `Key` should not be created directly. {@link ReflectiveInjector} creates keys automatically when
	 * resolving
	 * providers.
	 */
	var ReflectiveKey = (function () {
	    /**
	     * Private
	     */
	    function ReflectiveKey(token, id) {
	        this.token = token;
	        this.id = id;
	        if (lang_1.isBlank(token)) {
	            throw new exceptions_1.BaseException('Token must be defined!');
	        }
	    }
	    Object.defineProperty(ReflectiveKey.prototype, "displayName", {
	        /**
	         * Returns a stringified token.
	         */
	        get: function () { return lang_1.stringify(this.token); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Retrieves a `Key` for a token.
	     */
	    ReflectiveKey.get = function (token) {
	        return _globalKeyRegistry.get(forward_ref_1.resolveForwardRef(token));
	    };
	    Object.defineProperty(ReflectiveKey, "numberOfKeys", {
	        /**
	         * @returns the number of keys registered in the system.
	         */
	        get: function () { return _globalKeyRegistry.numberOfKeys; },
	        enumerable: true,
	        configurable: true
	    });
	    return ReflectiveKey;
	}());
	exports.ReflectiveKey = ReflectiveKey;
	/**
	 * @internal
	 */
	var KeyRegistry = (function () {
	    function KeyRegistry() {
	        this._allKeys = new Map();
	    }
	    KeyRegistry.prototype.get = function (token) {
	        if (token instanceof ReflectiveKey)
	            return token;
	        if (this._allKeys.has(token)) {
	            return this._allKeys.get(token);
	        }
	        var newKey = new ReflectiveKey(token, ReflectiveKey.numberOfKeys);
	        this._allKeys.set(token, newKey);
	        return newKey;
	    };
	    Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
	        get: function () { return this._allKeys.size; },
	        enumerable: true,
	        configurable: true
	    });
	    return KeyRegistry;
	}());
	exports.KeyRegistry = KeyRegistry;
	var _globalKeyRegistry = new KeyRegistry();
	//# sourceMappingURL=reflective_key.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(19);
	var lang_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(16);
	function findFirstClosedCycle(keys) {
	    var res = [];
	    for (var i = 0; i < keys.length; ++i) {
	        if (collection_1.ListWrapper.contains(res, keys[i])) {
	            res.push(keys[i]);
	            return res;
	        }
	        else {
	            res.push(keys[i]);
	        }
	    }
	    return res;
	}
	function constructResolvingPath(keys) {
	    if (keys.length > 1) {
	        var reversed = findFirstClosedCycle(collection_1.ListWrapper.reversed(keys));
	        var tokenStrs = reversed.map(function (k) { return lang_1.stringify(k.token); });
	        return " (" + tokenStrs.join(' -> ') + ")";
	    }
	    else {
	        return "";
	    }
	}
	/**
	 * Base class for all errors arising from misconfigured providers.
	 */
	var AbstractProviderError = (function (_super) {
	    __extends(AbstractProviderError, _super);
	    function AbstractProviderError(injector, key, constructResolvingMessage) {
	        _super.call(this, "DI Exception");
	        this.keys = [key];
	        this.injectors = [injector];
	        this.constructResolvingMessage = constructResolvingMessage;
	        this.message = this.constructResolvingMessage(this.keys);
	    }
	    AbstractProviderError.prototype.addKey = function (injector, key) {
	        this.injectors.push(injector);
	        this.keys.push(key);
	        this.message = this.constructResolvingMessage(this.keys);
	    };
	    Object.defineProperty(AbstractProviderError.prototype, "context", {
	        get: function () { return this.injectors[this.injectors.length - 1].debugContext(); },
	        enumerable: true,
	        configurable: true
	    });
	    return AbstractProviderError;
	}(exceptions_1.BaseException));
	exports.AbstractProviderError = AbstractProviderError;
	/**
	 * Thrown when trying to retrieve a dependency by `Key` from {@link Injector}, but the
	 * {@link Injector} does not have a {@link Provider} for {@link Key}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/vq8D3FRB9aGbnWJqtEPE?p=preview))
	 *
	 * ```typescript
	 * class A {
	 *   constructor(b:B) {}
	 * }
	 *
	 * expect(() => Injector.resolveAndCreate([A])).toThrowError();
	 * ```
	 */
	var NoProviderError = (function (_super) {
	    __extends(NoProviderError, _super);
	    function NoProviderError(injector, key) {
	        _super.call(this, injector, key, function (keys) {
	            var first = lang_1.stringify(collection_1.ListWrapper.first(keys).token);
	            return "No provider for " + first + "!" + constructResolvingPath(keys);
	        });
	    }
	    return NoProviderError;
	}(AbstractProviderError));
	exports.NoProviderError = NoProviderError;
	/**
	 * Thrown when dependencies form a cycle.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/wYQdNos0Tzql3ei1EV9j?p=info))
	 *
	 * ```typescript
	 * var injector = Injector.resolveAndCreate([
	 *   provide("one", {useFactory: (two) => "two", deps: [[new Inject("two")]]}),
	 *   provide("two", {useFactory: (one) => "one", deps: [[new Inject("one")]]})
	 * ]);
	 *
	 * expect(() => injector.get("one")).toThrowError();
	 * ```
	 *
	 * Retrieving `A` or `B` throws a `CyclicDependencyError` as the graph above cannot be constructed.
	 */
	var CyclicDependencyError = (function (_super) {
	    __extends(CyclicDependencyError, _super);
	    function CyclicDependencyError(injector, key) {
	        _super.call(this, injector, key, function (keys) {
	            return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
	        });
	    }
	    return CyclicDependencyError;
	}(AbstractProviderError));
	exports.CyclicDependencyError = CyclicDependencyError;
	/**
	 * Thrown when a constructing type returns with an Error.
	 *
	 * The `InstantiationError` class contains the original error plus the dependency graph which caused
	 * this object to be instantiated.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/7aWYdcqTQsP0eNqEdUAf?p=preview))
	 *
	 * ```typescript
	 * class A {
	 *   constructor() {
	 *     throw new Error('message');
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([A]);

	 * try {
	 *   injector.get(A);
	 * } catch (e) {
	 *   expect(e instanceof InstantiationError).toBe(true);
	 *   expect(e.originalException.message).toEqual("message");
	 *   expect(e.originalStack).toBeDefined();
	 * }
	 * ```
	 */
	var InstantiationError = (function (_super) {
	    __extends(InstantiationError, _super);
	    function InstantiationError(injector, originalException, originalStack, key) {
	        _super.call(this, "DI Exception", originalException, originalStack, null);
	        this.keys = [key];
	        this.injectors = [injector];
	    }
	    InstantiationError.prototype.addKey = function (injector, key) {
	        this.injectors.push(injector);
	        this.keys.push(key);
	    };
	    Object.defineProperty(InstantiationError.prototype, "wrapperMessage", {
	        get: function () {
	            var first = lang_1.stringify(collection_1.ListWrapper.first(this.keys).token);
	            return "Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InstantiationError.prototype, "causeKey", {
	        get: function () { return this.keys[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InstantiationError.prototype, "context", {
	        get: function () { return this.injectors[this.injectors.length - 1].debugContext(); },
	        enumerable: true,
	        configurable: true
	    });
	    return InstantiationError;
	}(exceptions_1.WrappedException));
	exports.InstantiationError = InstantiationError;
	/**
	 * Thrown when an object other then {@link Provider} (or `Type`) is passed to {@link Injector}
	 * creation.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/YatCFbPAMCL0JSSQ4mvH?p=preview))
	 *
	 * ```typescript
	 * expect(() => Injector.resolveAndCreate(["not a type"])).toThrowError();
	 * ```
	 */
	var InvalidProviderError = (function (_super) {
	    __extends(InvalidProviderError, _super);
	    function InvalidProviderError(provider) {
	        _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " +
	            provider.toString());
	    }
	    return InvalidProviderError;
	}(exceptions_1.BaseException));
	exports.InvalidProviderError = InvalidProviderError;
	/**
	 * Thrown when the class has no annotation information.
	 *
	 * Lack of annotation information prevents the {@link Injector} from determining which dependencies
	 * need to be injected into the constructor.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/rHnZtlNS7vJOPQ6pcVkm?p=preview))
	 *
	 * ```typescript
	 * class A {
	 *   constructor(b) {}
	 * }
	 *
	 * expect(() => Injector.resolveAndCreate([A])).toThrowError();
	 * ```
	 *
	 * This error is also thrown when the class not marked with {@link Injectable} has parameter types.
	 *
	 * ```typescript
	 * class B {}
	 *
	 * class A {
	 *   constructor(b:B) {} // no information about the parameter types of A is available at runtime.
	 * }
	 *
	 * expect(() => Injector.resolveAndCreate([A,B])).toThrowError();
	 * ```
	 */
	var NoAnnotationError = (function (_super) {
	    __extends(NoAnnotationError, _super);
	    function NoAnnotationError(typeOrFunc, params) {
	        _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
	    }
	    NoAnnotationError._genMessage = function (typeOrFunc, params) {
	        var signature = [];
	        for (var i = 0, ii = params.length; i < ii; i++) {
	            var parameter = params[i];
	            if (lang_1.isBlank(parameter) || parameter.length == 0) {
	                signature.push('?');
	            }
	            else {
	                signature.push(parameter.map(lang_1.stringify).join(' '));
	            }
	        }
	        return "Cannot resolve all parameters for '" + lang_1.stringify(typeOrFunc) + "'(" +
	            signature.join(', ') + "). " +
	            "Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" +
	            lang_1.stringify(typeOrFunc) + "' is decorated with Injectable.";
	    };
	    return NoAnnotationError;
	}(exceptions_1.BaseException));
	exports.NoAnnotationError = NoAnnotationError;
	/**
	 * Thrown when getting an object by index.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/bRs0SX2OTQiJzqvjgl8P?p=preview))
	 *
	 * ```typescript
	 * class A {}
	 *
	 * var injector = Injector.resolveAndCreate([A]);
	 *
	 * expect(() => injector.getAt(100)).toThrowError();
	 * ```
	 */
	var OutOfBoundsError = (function (_super) {
	    __extends(OutOfBoundsError, _super);
	    function OutOfBoundsError(index) {
	        _super.call(this, "Index " + index + " is out-of-bounds.");
	    }
	    return OutOfBoundsError;
	}(exceptions_1.BaseException));
	exports.OutOfBoundsError = OutOfBoundsError;
	// TODO: add a working example after alpha38 is released
	/**
	 * Thrown when a multi provider and a regular provider are bound to the same token.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * expect(() => Injector.resolveAndCreate([
	 *   new Provider("Strings", {useValue: "string1", multi: true}),
	 *   new Provider("Strings", {useValue: "string2", multi: false})
	 * ])).toThrowError();
	 * ```
	 */
	var MixingMultiProvidersWithRegularProvidersError = (function (_super) {
	    __extends(MixingMultiProvidersWithRegularProvidersError, _super);
	    function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
	        _super.call(this, "Cannot mix multi providers and regular providers, got: " + provider1.toString() + " " +
	            provider2.toString());
	    }
	    return MixingMultiProvidersWithRegularProvidersError;
	}(exceptions_1.BaseException));
	exports.MixingMultiProvidersWithRegularProvidersError = MixingMultiProvidersWithRegularProvidersError;
	//# sourceMappingURL=reflective_exceptions.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(16);
	/**
	 * Describes how the {@link Injector} should instantiate a given token.
	 *
	 * See {@link provide}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/GNAyj6K6PfYg2NBzgwZ5?p%3Dpreview&p=preview))
	 *
	 * ```javascript
	 * var injector = Injector.resolveAndCreate([
	 *   new Provider("message", { useValue: 'Hello' })
	 * ]);
	 *
	 * expect(injector.get("message")).toEqual('Hello');
	 * ```
	 * @ts2dart_const
	 */
	var Provider = (function () {
	    function Provider(token, _a) {
	        var useClass = _a.useClass, useValue = _a.useValue, useExisting = _a.useExisting, useFactory = _a.useFactory, deps = _a.deps, multi = _a.multi;
	        this.token = token;
	        this.useClass = useClass;
	        this.useValue = useValue;
	        this.useExisting = useExisting;
	        this.useFactory = useFactory;
	        this.dependencies = deps;
	        this._multi = multi;
	    }
	    Object.defineProperty(Provider.prototype, "multi", {
	        // TODO: Provide a full working example after alpha38 is released.
	        /**
	         * Creates multiple providers matching the same token (a multi-provider).
	         *
	         * Multi-providers are used for creating pluggable service, where the system comes
	         * with some default providers, and the user can register additional providers.
	         * The combination of the default providers and the additional providers will be
	         * used to drive the behavior of the system.
	         *
	         * ### Example
	         *
	         * ```typescript
	         * var injector = Injector.resolveAndCreate([
	         *   new Provider("Strings", { useValue: "String1", multi: true}),
	         *   new Provider("Strings", { useValue: "String2", multi: true})
	         * ]);
	         *
	         * expect(injector.get("Strings")).toEqual(["String1", "String2"]);
	         * ```
	         *
	         * Multi-providers and regular providers cannot be mixed. The following
	         * will throw an exception:
	         *
	         * ```typescript
	         * var injector = Injector.resolveAndCreate([
	         *   new Provider("Strings", { useValue: "String1", multi: true }),
	         *   new Provider("Strings", { useValue: "String2"})
	         * ]);
	         * ```
	         */
	        get: function () { return lang_1.normalizeBool(this._multi); },
	        enumerable: true,
	        configurable: true
	    });
	    return Provider;
	}());
	exports.Provider = Provider;
	/**
	 * See {@link Provider} instead.
	 *
	 * @deprecated
	 * @ts2dart_const
	 */
	var Binding = (function (_super) {
	    __extends(Binding, _super);
	    function Binding(token, _a) {
	        var toClass = _a.toClass, toValue = _a.toValue, toAlias = _a.toAlias, toFactory = _a.toFactory, deps = _a.deps, multi = _a.multi;
	        _super.call(this, token, {
	            useClass: toClass,
	            useValue: toValue,
	            useExisting: toAlias,
	            useFactory: toFactory,
	            deps: deps,
	            multi: multi
	        });
	    }
	    Object.defineProperty(Binding.prototype, "toClass", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useClass; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Binding.prototype, "toAlias", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useExisting; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Binding.prototype, "toFactory", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useFactory; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Binding.prototype, "toValue", {
	        /**
	         * @deprecated
	         */
	        get: function () { return this.useValue; },
	        enumerable: true,
	        configurable: true
	    });
	    return Binding;
	}(Provider));
	exports.Binding = Binding;
	/**
	 * Creates a {@link Provider}.
	 *
	 * To construct a {@link Provider}, bind a `token` to either a class, a value, a factory function,
	 * or
	 * to an existing `token`.
	 * See {@link ProviderBuilder} for more details.
	 *
	 * The `token` is most commonly a class or {@link OpaqueToken-class.html}.
	 *
	 * @deprecated
	 */
	function bind(token) {
	    return new ProviderBuilder(token);
	}
	exports.bind = bind;
	/**
	 * Helper class for the {@link bind} function.
	 */
	var ProviderBuilder = (function () {
	    function ProviderBuilder(token) {
	        this.token = token;
	    }
	    /**
	     * Binds a DI token to a class.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/ZpBCSYqv6e2ud5KXLdxQ?p=preview))
	     *
	     * Because `toAlias` and `toClass` are often confused, the example contains
	     * both use cases for easy comparison.
	     *
	     * ```typescript
	     * class Vehicle {}
	     *
	     * class Car extends Vehicle {}
	     *
	     * var injectorClass = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useClass: Car})
	     * ]);
	     * var injectorAlias = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useExisting: Car})
	     * ]);
	     *
	     * expect(injectorClass.get(Vehicle)).not.toBe(injectorClass.get(Car));
	     * expect(injectorClass.get(Vehicle) instanceof Car).toBe(true);
	     *
	     * expect(injectorAlias.get(Vehicle)).toBe(injectorAlias.get(Car));
	     * expect(injectorAlias.get(Vehicle) instanceof Car).toBe(true);
	     * ```
	     */
	    ProviderBuilder.prototype.toClass = function (type) {
	        if (!lang_1.isType(type)) {
	            throw new exceptions_1.BaseException("Trying to create a class provider but \"" + lang_1.stringify(type) + "\" is not a class!");
	        }
	        return new Provider(this.token, { useClass: type });
	    };
	    /**
	     * Binds a DI token to a value.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/G024PFHmDL0cJFgfZK8O?p=preview))
	     *
	     * ```typescript
	     * var injector = Injector.resolveAndCreate([
	     *   provide('message', {useValue: 'Hello'})
	     * ]);
	     *
	     * expect(injector.get('message')).toEqual('Hello');
	     * ```
	     */
	    ProviderBuilder.prototype.toValue = function (value) { return new Provider(this.token, { useValue: value }); };
	    /**
	     * Binds a DI token to an existing token.
	     *
	     * Angular will return the same instance as if the provided token was used. (This is
	     * in contrast to `useClass` where a separate instance of `useClass` will be returned.)
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/uBaoF2pN5cfc5AfZapNw?p=preview))
	     *
	     * Because `toAlias` and `toClass` are often confused, the example contains
	     * both use cases for easy comparison.
	     *
	     * ```typescript
	     * class Vehicle {}
	     *
	     * class Car extends Vehicle {}
	     *
	     * var injectorAlias = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useExisting: Car})
	     * ]);
	     * var injectorClass = Injector.resolveAndCreate([
	     *   Car,
	     *   provide(Vehicle, {useClass: Car})
	     * ]);
	     *
	     * expect(injectorAlias.get(Vehicle)).toBe(injectorAlias.get(Car));
	     * expect(injectorAlias.get(Vehicle) instanceof Car).toBe(true);
	     *
	     * expect(injectorClass.get(Vehicle)).not.toBe(injectorClass.get(Car));
	     * expect(injectorClass.get(Vehicle) instanceof Car).toBe(true);
	     * ```
	     */
	    ProviderBuilder.prototype.toAlias = function (aliasToken) {
	        if (lang_1.isBlank(aliasToken)) {
	            throw new exceptions_1.BaseException("Can not alias " + lang_1.stringify(this.token) + " to a blank value!");
	        }
	        return new Provider(this.token, { useExisting: aliasToken });
	    };
	    /**
	     * Binds a DI token to a function which computes the value.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/OejNIfTT3zb1iBxaIYOb?p=preview))
	     *
	     * ```typescript
	     * var injector = Injector.resolveAndCreate([
	     *   provide(Number, {useFactory: () => { return 1+2; }}),
	     *   provide(String, {useFactory: (v) => { return "Value: " + v; }, deps: [Number]})
	     * ]);
	     *
	     * expect(injector.get(Number)).toEqual(3);
	     * expect(injector.get(String)).toEqual('Value: 3');
	     * ```
	     */
	    ProviderBuilder.prototype.toFactory = function (factory, dependencies) {
	        if (!lang_1.isFunction(factory)) {
	            throw new exceptions_1.BaseException("Trying to create a factory provider but \"" + lang_1.stringify(factory) + "\" is not a function!");
	        }
	        return new Provider(this.token, { useFactory: factory, deps: dependencies });
	    };
	    return ProviderBuilder;
	}());
	exports.ProviderBuilder = ProviderBuilder;
	/**
	 * Creates a {@link Provider}.
	 *
	 * See {@link Provider} for more details.
	 *
	 * <!-- TODO: improve the docs -->
	 */
	function provide(token, _a) {
	    var useClass = _a.useClass, useValue = _a.useValue, useExisting = _a.useExisting, useFactory = _a.useFactory, deps = _a.deps, multi = _a.multi;
	    return new Provider(token, {
	        useClass: useClass,
	        useValue: useValue,
	        useExisting: useExisting,
	        useFactory: useFactory,
	        deps: deps,
	        multi: multi
	    });
	}
	exports.provide = provide;
	//# sourceMappingURL=provider.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var provider_1 = __webpack_require__(28);
	function isProviderLiteral(obj) {
	    return obj && typeof obj == 'object' && obj.provide;
	}
	exports.isProviderLiteral = isProviderLiteral;
	function createProvider(obj) {
	    return new provider_1.Provider(obj.provide, obj);
	}
	exports.createProvider = createProvider;
	//# sourceMappingURL=provider_util.js.map

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Creates a token that can be used in a DI Provider.
	*
	* ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
	*
	* ```typescript
	* var t = new OpaqueToken("value");
	*
	* var injector = Injector.resolveAndCreate([
	*   provide(t, {useValue: "bindingValue"})
	* ]);
	*
	* expect(injector.get(t)).toEqual("bindingValue");
	* ```
	*
	* Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
	* caused by multiple providers using the same string as two different tokens.
	*
	* Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
	* error messages.
	* @ts2dart_const
	*/
	var OpaqueToken = (function () {
	    function OpaqueToken(_desc) {
	        this._desc = _desc;
	    }
	    OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
	    return OpaqueToken;
	}());
	exports.OpaqueToken = OpaqueToken;
	//# sourceMappingURL=opaque_token.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ng_zone_1 = __webpack_require__(32);
	var lang_1 = __webpack_require__(5);
	var di_1 = __webpack_require__(13);
	var application_tokens_1 = __webpack_require__(57);
	var async_1 = __webpack_require__(33);
	var collection_1 = __webpack_require__(19);
	var testability_1 = __webpack_require__(58);
	var component_resolver_1 = __webpack_require__(59);
	var exceptions_1 = __webpack_require__(16);
	var console_1 = __webpack_require__(78);
	var profile_1 = __webpack_require__(67);
	/**
	 * Create an Angular zone.
	 */
	function createNgZone() {
	    return new ng_zone_1.NgZone({ enableLongStackTrace: lang_1.assertionsEnabled() });
	}
	exports.createNgZone = createNgZone;
	var _platform;
	var _inPlatformCreate = false;
	/**
	 * Creates a platform.
	 * Platforms have to be eagerly created via this function.
	 */
	function createPlatform(injector) {
	    if (_inPlatformCreate) {
	        throw new exceptions_1.BaseException('Already creating a platform...');
	    }
	    if (lang_1.isPresent(_platform) && !_platform.disposed) {
	        throw new exceptions_1.BaseException("There can be only one platform. Destroy the previous one to create a new one.");
	    }
	    lang_1.lockMode();
	    _inPlatformCreate = true;
	    try {
	        _platform = injector.get(PlatformRef);
	    }
	    finally {
	        _inPlatformCreate = false;
	    }
	    return _platform;
	}
	exports.createPlatform = createPlatform;
	/**
	 * Checks that there currently is a platform
	 * which contains the given token as a provider.
	 */
	function assertPlatform(requiredToken) {
	    var platform = getPlatform();
	    if (lang_1.isBlank(platform)) {
	        throw new exceptions_1.BaseException('Not platform exists!');
	    }
	    if (lang_1.isPresent(platform) && lang_1.isBlank(platform.injector.get(requiredToken, null))) {
	        throw new exceptions_1.BaseException('A platform with a different configuration has been created. Please destroy it first.');
	    }
	    return platform;
	}
	exports.assertPlatform = assertPlatform;
	/**
	 * Dispose the existing platform.
	 */
	function disposePlatform() {
	    if (lang_1.isPresent(_platform) && !_platform.disposed) {
	        _platform.dispose();
	    }
	}
	exports.disposePlatform = disposePlatform;
	/**
	 * Returns the current platform.
	 */
	function getPlatform() {
	    return lang_1.isPresent(_platform) && !_platform.disposed ? _platform : null;
	}
	exports.getPlatform = getPlatform;
	/**
	 * Shortcut for ApplicationRef.bootstrap.
	 * Requires a platform the be created first.
	 */
	function coreBootstrap(injector, componentFactory) {
	    var appRef = injector.get(ApplicationRef);
	    return appRef.bootstrap(componentFactory);
	}
	exports.coreBootstrap = coreBootstrap;
	/**
	 * Resolves the componentFactory for the given component,
	 * waits for asynchronous initializers and bootstraps the component.
	 * Requires a platform the be created first.
	 */
	function coreLoadAndBootstrap(injector, componentType) {
	    var appRef = injector.get(ApplicationRef);
	    return appRef.run(function () {
	        var componentResolver = injector.get(component_resolver_1.ComponentResolver);
	        return async_1.PromiseWrapper
	            .all([componentResolver.resolveComponent(componentType), appRef.waitForAsyncInitializers()])
	            .then(function (arr) { return appRef.bootstrap(arr[0]); });
	    });
	}
	exports.coreLoadAndBootstrap = coreLoadAndBootstrap;
	/**
	 * The Angular platform is the entry point for Angular on a web page. Each page
	 * has exactly one platform, and services (such as reflection) which are common
	 * to every Angular application running on the page are bound in its scope.
	 *
	 * A page's platform is initialized implicitly when {@link bootstrap}() is called, or
	 * explicitly by calling {@link createPlatform}().
	 */
	var PlatformRef = (function () {
	    function PlatformRef() {
	    }
	    Object.defineProperty(PlatformRef.prototype, "injector", {
	        /**
	         * Retrieve the platform {@link Injector}, which is the parent injector for
	         * every Angular application on the page and provides singleton providers.
	         */
	        get: function () { throw exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(PlatformRef.prototype, "disposed", {
	        get: function () { throw exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return PlatformRef;
	}());
	exports.PlatformRef = PlatformRef;
	var PlatformRef_ = (function (_super) {
	    __extends(PlatformRef_, _super);
	    function PlatformRef_(_injector) {
	        _super.call(this);
	        this._injector = _injector;
	        /** @internal */
	        this._applications = [];
	        /** @internal */
	        this._disposeListeners = [];
	        this._disposed = false;
	        if (!_inPlatformCreate) {
	            throw new exceptions_1.BaseException('Platforms have to be created via `createPlatform`!');
	        }
	        var inits = _injector.get(application_tokens_1.PLATFORM_INITIALIZER, null);
	        if (lang_1.isPresent(inits))
	            inits.forEach(function (init) { return init(); });
	    }
	    PlatformRef_.prototype.registerDisposeListener = function (dispose) { this._disposeListeners.push(dispose); };
	    Object.defineProperty(PlatformRef_.prototype, "injector", {
	        get: function () { return this._injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PlatformRef_.prototype, "disposed", {
	        get: function () { return this._disposed; },
	        enumerable: true,
	        configurable: true
	    });
	    PlatformRef_.prototype.addApplication = function (appRef) { this._applications.push(appRef); };
	    PlatformRef_.prototype.dispose = function () {
	        collection_1.ListWrapper.clone(this._applications).forEach(function (app) { return app.dispose(); });
	        this._disposeListeners.forEach(function (dispose) { return dispose(); });
	        this._disposed = true;
	    };
	    /** @internal */
	    PlatformRef_.prototype._applicationDisposed = function (app) { collection_1.ListWrapper.remove(this._applications, app); };
	    PlatformRef_.decorators = [
	        { type: di_1.Injectable },
	    ];
	    PlatformRef_.ctorParameters = [
	        { type: di_1.Injector, },
	    ];
	    return PlatformRef_;
	}(PlatformRef));
	exports.PlatformRef_ = PlatformRef_;
	/**
	 * A reference to an Angular application running on a page.
	 *
	 * For more about Angular applications, see the documentation for {@link bootstrap}.
	 */
	var ApplicationRef = (function () {
	    function ApplicationRef() {
	    }
	    Object.defineProperty(ApplicationRef.prototype, "injector", {
	        /**
	         * Retrieve the application {@link Injector}.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ApplicationRef.prototype, "zone", {
	        /**
	         * Retrieve the application {@link NgZone}.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
	        /**
	         * Get a list of component types registered to this application.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return ApplicationRef;
	}());
	exports.ApplicationRef = ApplicationRef;
	var ApplicationRef_ = (function (_super) {
	    __extends(ApplicationRef_, _super);
	    function ApplicationRef_(_platform, _zone, _injector) {
	        var _this = this;
	        _super.call(this);
	        this._platform = _platform;
	        this._zone = _zone;
	        this._injector = _injector;
	        /** @internal */
	        this._bootstrapListeners = [];
	        /** @internal */
	        this._disposeListeners = [];
	        /** @internal */
	        this._rootComponents = [];
	        /** @internal */
	        this._rootComponentTypes = [];
	        /** @internal */
	        this._changeDetectorRefs = [];
	        /** @internal */
	        this._runningTick = false;
	        /** @internal */
	        this._enforceNoNewChanges = false;
	        var zone = _injector.get(ng_zone_1.NgZone);
	        this._enforceNoNewChanges = lang_1.assertionsEnabled();
	        zone.run(function () { _this._exceptionHandler = _injector.get(exceptions_1.ExceptionHandler); });
	        this._asyncInitDonePromise = this.run(function () {
	            var inits = _injector.get(application_tokens_1.APP_INITIALIZER, null);
	            var asyncInitResults = [];
	            var asyncInitDonePromise;
	            if (lang_1.isPresent(inits)) {
	                for (var i = 0; i < inits.length; i++) {
	                    var initResult = inits[i]();
	                    if (lang_1.isPromise(initResult)) {
	                        asyncInitResults.push(initResult);
	                    }
	                }
	            }
	            if (asyncInitResults.length > 0) {
	                asyncInitDonePromise =
	                    async_1.PromiseWrapper.all(asyncInitResults).then(function (_) { return _this._asyncInitDone = true; });
	                _this._asyncInitDone = false;
	            }
	            else {
	                _this._asyncInitDone = true;
	                asyncInitDonePromise = async_1.PromiseWrapper.resolve(true);
	            }
	            return asyncInitDonePromise;
	        });
	        async_1.ObservableWrapper.subscribe(zone.onError, function (error) {
	            _this._exceptionHandler.call(error.error, error.stackTrace);
	        });
	        async_1.ObservableWrapper.subscribe(this._zone.onMicrotaskEmpty, function (_) { _this._zone.run(function () { _this.tick(); }); });
	    }
	    ApplicationRef_.prototype.registerBootstrapListener = function (listener) {
	        this._bootstrapListeners.push(listener);
	    };
	    ApplicationRef_.prototype.registerDisposeListener = function (dispose) { this._disposeListeners.push(dispose); };
	    ApplicationRef_.prototype.registerChangeDetector = function (changeDetector) {
	        this._changeDetectorRefs.push(changeDetector);
	    };
	    ApplicationRef_.prototype.unregisterChangeDetector = function (changeDetector) {
	        collection_1.ListWrapper.remove(this._changeDetectorRefs, changeDetector);
	    };
	    ApplicationRef_.prototype.waitForAsyncInitializers = function () { return this._asyncInitDonePromise; };
	    ApplicationRef_.prototype.run = function (callback) {
	        var _this = this;
	        var zone = this.injector.get(ng_zone_1.NgZone);
	        var result;
	        // Note: Don't use zone.runGuarded as we want to know about
	        // the thrown exception!
	        // Note: the completer needs to be created outside
	        // of `zone.run` as Dart swallows rejected promises
	        // via the onError callback of the promise.
	        var completer = async_1.PromiseWrapper.completer();
	        zone.run(function () {
	            try {
	                result = callback();
	                if (lang_1.isPromise(result)) {
	                    async_1.PromiseWrapper.then(result, function (ref) { completer.resolve(ref); }, function (err, stackTrace) {
	                        completer.reject(err, stackTrace);
	                        _this._exceptionHandler.call(err, stackTrace);
	                    });
	                }
	            }
	            catch (e) {
	                _this._exceptionHandler.call(e, e.stack);
	                throw e;
	            }
	        });
	        return lang_1.isPromise(result) ? completer.promise : result;
	    };
	    ApplicationRef_.prototype.bootstrap = function (componentFactory) {
	        var _this = this;
	        if (!this._asyncInitDone) {
	            throw new exceptions_1.BaseException('Cannot bootstrap as there are still asynchronous initializers running. Wait for them using waitForAsyncInitializers().');
	        }
	        return this.run(function () {
	            _this._rootComponentTypes.push(componentFactory.componentType);
	            var compRef = componentFactory.create(_this._injector, [], componentFactory.selector);
	            compRef.onDestroy(function () { _this._unloadComponent(compRef); });
	            var testability = compRef.injector.get(testability_1.Testability, null);
	            if (lang_1.isPresent(testability)) {
	                compRef.injector.get(testability_1.TestabilityRegistry)
	                    .registerApplication(compRef.location.nativeElement, testability);
	            }
	            _this._loadComponent(compRef);
	            var c = _this._injector.get(console_1.Console);
	            if (lang_1.assertionsEnabled()) {
	                c.log("Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.");
	            }
	            return compRef;
	        });
	    };
	    /** @internal */
	    ApplicationRef_.prototype._loadComponent = function (componentRef) {
	        this._changeDetectorRefs.push(componentRef.changeDetectorRef);
	        this.tick();
	        this._rootComponents.push(componentRef);
	        this._bootstrapListeners.forEach(function (listener) { return listener(componentRef); });
	    };
	    /** @internal */
	    ApplicationRef_.prototype._unloadComponent = function (componentRef) {
	        if (!collection_1.ListWrapper.contains(this._rootComponents, componentRef)) {
	            return;
	        }
	        this.unregisterChangeDetector(componentRef.changeDetectorRef);
	        collection_1.ListWrapper.remove(this._rootComponents, componentRef);
	    };
	    Object.defineProperty(ApplicationRef_.prototype, "injector", {
	        get: function () { return this._injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ApplicationRef_.prototype, "zone", {
	        get: function () { return this._zone; },
	        enumerable: true,
	        configurable: true
	    });
	    ApplicationRef_.prototype.tick = function () {
	        if (this._runningTick) {
	            throw new exceptions_1.BaseException("ApplicationRef.tick is called recursively");
	        }
	        var s = ApplicationRef_._tickScope();
	        try {
	            this._runningTick = true;
	            this._changeDetectorRefs.forEach(function (detector) { return detector.detectChanges(); });
	            if (this._enforceNoNewChanges) {
	                this._changeDetectorRefs.forEach(function (detector) { return detector.checkNoChanges(); });
	            }
	        }
	        finally {
	            this._runningTick = false;
	            profile_1.wtfLeave(s);
	        }
	    };
	    ApplicationRef_.prototype.dispose = function () {
	        // TODO(alxhub): Dispose of the NgZone.
	        collection_1.ListWrapper.clone(this._rootComponents).forEach(function (ref) { return ref.destroy(); });
	        this._disposeListeners.forEach(function (dispose) { return dispose(); });
	        this._platform._applicationDisposed(this);
	    };
	    Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
	        get: function () { return this._rootComponentTypes; },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    ApplicationRef_._tickScope = profile_1.wtfCreateScope('ApplicationRef#tick()');
	    ApplicationRef_.decorators = [
	        { type: di_1.Injectable },
	    ];
	    ApplicationRef_.ctorParameters = [
	        { type: PlatformRef_, },
	        { type: ng_zone_1.NgZone, },
	        { type: di_1.Injector, },
	    ];
	    return ApplicationRef_;
	}(ApplicationRef));
	exports.ApplicationRef_ = ApplicationRef_;
	/**
	 * @internal
	 */
	exports.PLATFORM_CORE_PROVIDERS = 
	/*@ts2dart_const*/ [
	    PlatformRef_,
	    /*@ts2dart_const*/ (
	    /* @ts2dart_Provider */ { provide: PlatformRef, useExisting: PlatformRef_ })
	];
	/**
	 * @internal
	 */
	exports.APPLICATION_CORE_PROVIDERS = [
	    /* @ts2dart_Provider */ { provide: ng_zone_1.NgZone, useFactory: createNgZone, deps: [] },
	    ApplicationRef_,
	    /* @ts2dart_Provider */ { provide: ApplicationRef, useExisting: ApplicationRef_ }
	];
	//# sourceMappingURL=application_ref.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var async_1 = __webpack_require__(33);
	var ng_zone_impl_1 = __webpack_require__(56);
	var exceptions_1 = __webpack_require__(16);
	var ng_zone_impl_2 = __webpack_require__(56);
	exports.NgZoneError = ng_zone_impl_2.NgZoneError;
	/**
	 * An injectable service for executing work inside or outside of the Angular zone.
	 *
	 * The most common use of this service is to optimize performance when starting a work consisting of
	 * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
	 * Angular. Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, these tasks
	 * can reenter the Angular zone via {@link #run}.
	 *
	 * <!-- TODO: add/fix links to:
	 *   - docs explaining zones and the use of zones in Angular and change-detection
	 *   - link to runOutsideAngular/run (throughout this file!)
	 *   -->
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
	 * ```
	 * import {Component, View, NgZone} from '@angular/core';
	 * import {NgIf} from '@angular/common';
	 *
	 * @Component({
	 *   selector: 'ng-zone-demo'.
	 *   template: `
	 *     <h2>Demo: NgZone</h2>
	 *
	 *     <p>Progress: {{progress}}%</p>
	 *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
	 *
	 *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
	 *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
	 *   `,
	 *   directives: [NgIf]
	 * })
	 * export class NgZoneDemo {
	 *   progress: number = 0;
	 *   label: string;
	 *
	 *   constructor(private _ngZone: NgZone) {}
	 *
	 *   // Loop inside the Angular zone
	 *   // so the UI DOES refresh after each setTimeout cycle
	 *   processWithinAngularZone() {
	 *     this.label = 'inside';
	 *     this.progress = 0;
	 *     this._increaseProgress(() => console.log('Inside Done!'));
	 *   }
	 *
	 *   // Loop outside of the Angular zone
	 *   // so the UI DOES NOT refresh after each setTimeout cycle
	 *   processOutsideOfAngularZone() {
	 *     this.label = 'outside';
	 *     this.progress = 0;
	 *     this._ngZone.runOutsideAngular(() => {
	 *       this._increaseProgress(() => {
	 *       // reenter the Angular zone and display done
	 *       this._ngZone.run(() => {console.log('Outside Done!') });
	 *     }}));
	 *   }
	 *
	 *
	 *   _increaseProgress(doneCallback: () => void) {
	 *     this.progress += 1;
	 *     console.log(`Current progress: ${this.progress}%`);
	 *
	 *     if (this.progress < 100) {
	 *       window.setTimeout(() => this._increaseProgress(doneCallback)), 10)
	 *     } else {
	 *       doneCallback();
	 *     }
	 *   }
	 * }
	 * ```
	 */
	var NgZone = (function () {
	    /**
	     * @param {bool} enableLongStackTrace whether to enable long stack trace. They should only be
	     *               enabled in development mode as they significantly impact perf.
	     */
	    function NgZone(_a) {
	        var _this = this;
	        var _b = _a.enableLongStackTrace, enableLongStackTrace = _b === void 0 ? false : _b;
	        this._hasPendingMicrotasks = false;
	        this._hasPendingMacrotasks = false;
	        /** @internal */
	        this._isStable = true;
	        /** @internal */
	        this._nesting = 0;
	        /** @internal */
	        this._onUnstable = new async_1.EventEmitter(false);
	        /** @internal */
	        this._onMicrotaskEmpty = new async_1.EventEmitter(false);
	        /** @internal */
	        this._onStable = new async_1.EventEmitter(false);
	        /** @internal */
	        this._onErrorEvents = new async_1.EventEmitter(false);
	        this._zoneImpl = new ng_zone_impl_1.NgZoneImpl({
	            trace: enableLongStackTrace,
	            onEnter: function () {
	                // console.log('ZONE.enter', this._nesting, this._isStable);
	                _this._nesting++;
	                if (_this._isStable) {
	                    _this._isStable = false;
	                    _this._onUnstable.emit(null);
	                }
	            },
	            onLeave: function () {
	                _this._nesting--;
	                // console.log('ZONE.leave', this._nesting, this._isStable);
	                _this._checkStable();
	            },
	            setMicrotask: function (hasMicrotasks) {
	                _this._hasPendingMicrotasks = hasMicrotasks;
	                _this._checkStable();
	            },
	            setMacrotask: function (hasMacrotasks) { _this._hasPendingMacrotasks = hasMacrotasks; },
	            onError: function (error) { return _this._onErrorEvents.emit(error); }
	        });
	    }
	    NgZone.isInAngularZone = function () { return ng_zone_impl_1.NgZoneImpl.isInAngularZone(); };
	    NgZone.assertInAngularZone = function () {
	        if (!ng_zone_impl_1.NgZoneImpl.isInAngularZone()) {
	            throw new exceptions_1.BaseException('Expected to be in Angular Zone, but it is not!');
	        }
	    };
	    NgZone.assertNotInAngularZone = function () {
	        if (ng_zone_impl_1.NgZoneImpl.isInAngularZone()) {
	            throw new exceptions_1.BaseException('Expected to not be in Angular Zone, but it is!');
	        }
	    };
	    NgZone.prototype._checkStable = function () {
	        var _this = this;
	        if (this._nesting == 0) {
	            if (!this._hasPendingMicrotasks && !this._isStable) {
	                try {
	                    // console.log('ZONE.microtaskEmpty');
	                    this._nesting++;
	                    this._onMicrotaskEmpty.emit(null);
	                }
	                finally {
	                    this._nesting--;
	                    if (!this._hasPendingMicrotasks) {
	                        try {
	                            // console.log('ZONE.stable', this._nesting, this._isStable);
	                            this.runOutsideAngular(function () { return _this._onStable.emit(null); });
	                        }
	                        finally {
	                            this._isStable = true;
	                        }
	                    }
	                }
	            }
	        }
	    };
	    ;
	    Object.defineProperty(NgZone.prototype, "onUnstable", {
	        /**
	         * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
	         */
	        get: function () { return this._onUnstable; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "onMicrotaskEmpty", {
	        /**
	         * Notifies when there is no more microtasks enqueue in the current VM Turn.
	         * This is a hint for Angular to do change detection, which may enqueue more microtasks.
	         * For this reason this event can fire multiple times per VM Turn.
	         */
	        get: function () { return this._onMicrotaskEmpty; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "onStable", {
	        /**
	         * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
	         * implies we are about to relinquish VM turn.
	         * This event gets called just once.
	         */
	        get: function () { return this._onStable; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "onError", {
	        /**
	         * Notify that an error has been delivered.
	         */
	        get: function () { return this._onErrorEvents; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
	        /**
	         * Whether there are any outstanding microtasks.
	         */
	        get: function () { return this._hasPendingMicrotasks; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgZone.prototype, "hasPendingMacrotasks", {
	        /**
	         * Whether there are any outstanding microtasks.
	         */
	        get: function () { return this._hasPendingMacrotasks; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Executes the `fn` function synchronously within the Angular zone and returns value returned by
	     * the function.
	     *
	     * Running functions via `run` allows you to reenter Angular zone from a task that was executed
	     * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
	     *
	     * Any future tasks or microtasks scheduled from within this function will continue executing from
	     * within the Angular zone.
	     *
	     * If a synchronous error happens it will be rethrown and not reported via `onError`.
	     */
	    NgZone.prototype.run = function (fn) { return this._zoneImpl.runInner(fn); };
	    /**
	     * Same as #run, except that synchronous errors are caught and forwarded
	     * via `onError` and not rethrown.
	     */
	    NgZone.prototype.runGuarded = function (fn) { return this._zoneImpl.runInnerGuarded(fn); };
	    /**
	     * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
	     * the function.
	     *
	     * Running functions via `runOutsideAngular` allows you to escape Angular's zone and do work that
	     * doesn't trigger Angular change-detection or is subject to Angular's error handling.
	     *
	     * Any future tasks or microtasks scheduled from within this function will continue executing from
	     * outside of the Angular zone.
	     *
	     * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
	     */
	    NgZone.prototype.runOutsideAngular = function (fn) { return this._zoneImpl.runOuter(fn); };
	    return NgZone;
	}());
	exports.NgZone = NgZone;
	//# sourceMappingURL=ng_zone.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(5);
	var promise_1 = __webpack_require__(34);
	exports.PromiseWrapper = promise_1.PromiseWrapper;
	exports.PromiseCompleter = promise_1.PromiseCompleter;
	var Subject_1 = __webpack_require__(35);
	var PromiseObservable_1 = __webpack_require__(54);
	var toPromise_1 = __webpack_require__(55);
	var Observable_1 = __webpack_require__(36);
	exports.Observable = Observable_1.Observable;
	var Subject_2 = __webpack_require__(35);
	exports.Subject = Subject_2.Subject;
	var TimerWrapper = (function () {
	    function TimerWrapper() {
	    }
	    TimerWrapper.setTimeout = function (fn, millis) {
	        return lang_1.global.setTimeout(fn, millis);
	    };
	    TimerWrapper.clearTimeout = function (id) { lang_1.global.clearTimeout(id); };
	    TimerWrapper.setInterval = function (fn, millis) {
	        return lang_1.global.setInterval(fn, millis);
	    };
	    TimerWrapper.clearInterval = function (id) { lang_1.global.clearInterval(id); };
	    return TimerWrapper;
	}());
	exports.TimerWrapper = TimerWrapper;
	var ObservableWrapper = (function () {
	    function ObservableWrapper() {
	    }
	    // TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
	    ObservableWrapper.subscribe = function (emitter, onNext, onError, onComplete) {
	        if (onComplete === void 0) { onComplete = function () { }; }
	        onError = (typeof onError === "function") && onError || lang_1.noop;
	        onComplete = (typeof onComplete === "function") && onComplete || lang_1.noop;
	        return emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
	    };
	    ObservableWrapper.isObservable = function (obs) { return !!obs.subscribe; };
	    /**
	     * Returns whether `obs` has any subscribers listening to events.
	     */
	    ObservableWrapper.hasSubscribers = function (obs) { return obs.observers.length > 0; };
	    ObservableWrapper.dispose = function (subscription) { subscription.unsubscribe(); };
	    /**
	     * @deprecated - use callEmit() instead
	     */
	    ObservableWrapper.callNext = function (emitter, value) { emitter.next(value); };
	    ObservableWrapper.callEmit = function (emitter, value) { emitter.emit(value); };
	    ObservableWrapper.callError = function (emitter, error) { emitter.error(error); };
	    ObservableWrapper.callComplete = function (emitter) { emitter.complete(); };
	    ObservableWrapper.fromPromise = function (promise) {
	        return PromiseObservable_1.PromiseObservable.create(promise);
	    };
	    ObservableWrapper.toPromise = function (obj) { return toPromise_1.toPromise.call(obj); };
	    return ObservableWrapper;
	}());
	exports.ObservableWrapper = ObservableWrapper;
	/**
	 * Use by directives and components to emit custom Events.
	 *
	 * ### Examples
	 *
	 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	 * title gets clicked:
	 *
	 * ```
	 * @Component({
	 *   selector: 'zippy',
	 *   template: `
	 *   <div class="zippy">
	 *     <div (click)="toggle()">Toggle</div>
	 *     <div [hidden]="!visible">
	 *       <ng-content></ng-content>
	 *     </div>
	 *  </div>`})
	 * export class Zippy {
	 *   visible: boolean = true;
	 *   @Output() open: EventEmitter<any> = new EventEmitter();
	 *   @Output() close: EventEmitter<any> = new EventEmitter();
	 *
	 *   toggle() {
	 *     this.visible = !this.visible;
	 *     if (this.visible) {
	 *       this.open.emit(null);
	 *     } else {
	 *       this.close.emit(null);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * Use Rx.Observable but provides an adapter to make it work as specified here:
	 * https://github.com/jhusain/observable-spec
	 *
	 * Once a reference implementation of the spec is available, switch to it.
	 */
	var EventEmitter = (function (_super) {
	    __extends(EventEmitter, _super);
	    /**
	     * Creates an instance of [EventEmitter], which depending on [isAsync],
	     * delivers events synchronously or asynchronously.
	     */
	    function EventEmitter(isAsync) {
	        if (isAsync === void 0) { isAsync = true; }
	        _super.call(this);
	        this._isAsync = isAsync;
	    }
	    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	    /**
	     * @deprecated - use .emit(value) instead
	     */
	    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext.next(value); }); } :
	                function (value) { generatorOrNext.next(value); };
	            if (generatorOrNext.error) {
	                errorFn = this._isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                    function (err) { generatorOrNext.error(err); };
	            }
	            if (generatorOrNext.complete) {
	                completeFn = this._isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                    function () { generatorOrNext.complete(); };
	            }
	        }
	        else {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                function (value) { generatorOrNext(value); };
	            if (error) {
	                errorFn =
	                    this._isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	            }
	            if (complete) {
	                completeFn =
	                    this._isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	            }
	        }
	        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	    };
	    return EventEmitter;
	}(Subject_1.Subject));
	exports.EventEmitter = EventEmitter;
	//# sourceMappingURL=async.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	var PromiseCompleter = (function () {
	    function PromiseCompleter() {
	        var _this = this;
	        this.promise = new Promise(function (res, rej) {
	            _this.resolve = res;
	            _this.reject = rej;
	        });
	    }
	    return PromiseCompleter;
	}());
	exports.PromiseCompleter = PromiseCompleter;
	var PromiseWrapper = (function () {
	    function PromiseWrapper() {
	    }
	    PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
	    PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
	    // Note: We can't rename this method into `catch`, as this is not a valid
	    // method name in Dart.
	    PromiseWrapper.catchError = function (promise, onError) {
	        return promise.catch(onError);
	    };
	    PromiseWrapper.all = function (promises) {
	        if (promises.length == 0)
	            return Promise.resolve([]);
	        return Promise.all(promises);
	    };
	    PromiseWrapper.then = function (promise, success, rejection) {
	        return promise.then(success, rejection);
	    };
	    PromiseWrapper.wrap = function (computation) {
	        return new Promise(function (res, rej) {
	            try {
	                res(computation());
	            }
	            catch (e) {
	                rej(e);
	            }
	        });
	    };
	    PromiseWrapper.scheduleMicrotask = function (computation) {
	        PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) { });
	    };
	    PromiseWrapper.isPromise = function (obj) { return obj instanceof Promise; };
	    PromiseWrapper.completer = function () { return new PromiseCompleter(); };
	    return PromiseWrapper;
	}());
	exports.PromiseWrapper = PromiseWrapper;
	//# sourceMappingURL=promise.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(36);
	var Subscriber_1 = __webpack_require__(41);
	var Subscription_1 = __webpack_require__(43);
	var SubjectSubscription_1 = __webpack_require__(51);
	var rxSubscriber_1 = __webpack_require__(49);
	var throwError_1 = __webpack_require__(52);
	var ObjectUnsubscribedError_1 = __webpack_require__(53);
	/**
	 * @class Subject<T>
	 */
	var Subject = (function (_super) {
	    __extends(Subject, _super);
	    function Subject(destination, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.source = source;
	        this.observers = [];
	        this.isUnsubscribed = false;
	        this.isStopped = false;
	        this.hasErrored = false;
	        this.dispatching = false;
	        this.hasCompleted = false;
	        this.source = source;
	    }
	    Subject.prototype.lift = function (operator) {
	        var subject = new Subject(this.destination || this, this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype.add = function (subscription) {
	        return Subscription_1.Subscription.prototype.add.call(this, subscription);
	    };
	    Subject.prototype.remove = function (subscription) {
	        Subscription_1.Subscription.prototype.remove.call(this, subscription);
	    };
	    Subject.prototype.unsubscribe = function () {
	        Subscription_1.Subscription.prototype.unsubscribe.call(this);
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (this.source) {
	            return this.source.subscribe(subscriber);
	        }
	        else {
	            if (subscriber.isUnsubscribed) {
	                return;
	            }
	            else if (this.hasErrored) {
	                return subscriber.error(this.errorValue);
	            }
	            else if (this.hasCompleted) {
	                return subscriber.complete();
	            }
	            this.throwIfUnsubscribed();
	            var subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	            this.observers.push(subscriber);
	            return subscription;
	        }
	    };
	    Subject.prototype._unsubscribe = function () {
	        this.source = null;
	        this.isStopped = true;
	        this.observers = null;
	        this.destination = null;
	    };
	    Subject.prototype.next = function (value) {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.dispatching = true;
	        this._next(value);
	        this.dispatching = false;
	        if (this.hasErrored) {
	            this._error(this.errorValue);
	        }
	        else if (this.hasCompleted) {
	            this._complete();
	        }
	    };
	    Subject.prototype.error = function (err) {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.isStopped = true;
	        this.hasErrored = true;
	        this.errorValue = err;
	        if (this.dispatching) {
	            return;
	        }
	        this._error(err);
	    };
	    Subject.prototype.complete = function () {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.isStopped = true;
	        this.hasCompleted = true;
	        if (this.dispatching) {
	            return;
	        }
	        this._complete();
	    };
	    Subject.prototype.asObservable = function () {
	        var observable = new SubjectObservable(this);
	        return observable;
	    };
	    Subject.prototype._next = function (value) {
	        if (this.destination) {
	            this.destination.next(value);
	        }
	        else {
	            this._finalNext(value);
	        }
	    };
	    Subject.prototype._finalNext = function (value) {
	        var index = -1;
	        var observers = this.observers.slice(0);
	        var len = observers.length;
	        while (++index < len) {
	            observers[index].next(value);
	        }
	    };
	    Subject.prototype._error = function (err) {
	        if (this.destination) {
	            this.destination.error(err);
	        }
	        else {
	            this._finalError(err);
	        }
	    };
	    Subject.prototype._finalError = function (err) {
	        var index = -1;
	        var observers = this.observers;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.observers = null;
	        this.isUnsubscribed = true;
	        if (observers) {
	            var len = observers.length;
	            while (++index < len) {
	                observers[index].error(err);
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    Subject.prototype._complete = function () {
	        if (this.destination) {
	            this.destination.complete();
	        }
	        else {
	            this._finalComplete();
	        }
	    };
	    Subject.prototype._finalComplete = function () {
	        var index = -1;
	        var observers = this.observers;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.observers = null;
	        this.isUnsubscribed = true;
	        if (observers) {
	            var len = observers.length;
	            while (++index < len) {
	                observers[index].complete();
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    Subject.prototype.throwIfUnsubscribed = function () {
	        if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	    };
	    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return new Subscriber_1.Subscriber(this);
	    };
	    Subject.create = function (destination, source) {
	        return new Subject(destination, source);
	    };
	    return Subject;
	}(Observable_1.Observable));
	exports.Subject = Subject;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectObservable = (function (_super) {
	    __extends(SubjectObservable, _super);
	    function SubjectObservable(source) {
	        _super.call(this);
	        this.source = source;
	    }
	    return SubjectObservable;
	}(Observable_1.Observable));
	//# sourceMappingURL=Subject.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(37);
	var observable_1 = __webpack_require__(39);
	var toSubscriber_1 = __webpack_require__(40);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    /**
	     * Registers handlers for handling emitted values, error and completions from the observable, and
	     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	     * @method subscribe
	     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
	     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	     *  the error will be thrown as unhandled
	     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	     * @return {ISubscription} a subscription reference to the registered handlers
	     */
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        sink.add(operator ? operator.call(sink, this) : this._subscribe(sink));
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` imple will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[observable_1.$$observable] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {"use strict";
	var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
	/* tslint:disable:no-unused-variable */
	var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	var freeGlobal = objectTypes[typeof global] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)(module), (function() { return this; }())))

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(37);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.observable) {
	        exports.$$observable = Symbol.observable;
	    }
	    else {
	        if (typeof Symbol.for === 'function') {
	            exports.$$observable = Symbol.for('observable');
	        }
	        else {
	            exports.$$observable = Symbol('observable');
	        }
	        Symbol.observable = exports.$$observable;
	    }
	}
	else {
	    exports.$$observable = '@@observable';
	}
	//# sourceMappingURL=observable.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(41);
	var rxSubscriber_1 = __webpack_require__(49);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver && typeof nextOrObserver === 'object') {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        else if (typeof nextOrObserver[rxSubscriber_1.$$rxSubscriber] === 'function') {
	            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
	        }
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(42);
	var Subscription_1 = __webpack_require__(43);
	var rxSubscriber_1 = __webpack_require__(49);
	var Observer_1 = __webpack_require__(50);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return this;
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (isFunction_1.isFunction(context.unsubscribe)) {
	                this.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = this.unsubscribe.bind(this);
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(44);
	var isObject_1 = __webpack_require__(45);
	var isFunction_1 = __webpack_require__(42);
	var tryCatch_1 = __webpack_require__(46);
	var errorObject_1 = __webpack_require__(47);
	var UnsubscriptionError_1 = __webpack_require__(48);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.isUnsubscribed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                (errors = errors || []).push(errorObject_1.errorObject.e);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(err.errors);
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `isUnsubscribed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === this) || (teardown === Subscription.EMPTY)) {
	            return;
	        }
	        var sub = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                sub = new Subscription(teardown);
	            case 'object':
	                if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.isUnsubscribed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    (this._subscriptions || (this._subscriptions = [])).push(sub);
	                }
	                break;
	            default:
	                throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        return sub;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        // HACK: This might be redundant because of the logic in `add()`
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.isUnsubscribed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(47);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        this.name = 'UnsubscriptionError';
	        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n') : '';
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(37);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	exports.empty = {
	    isUnsubscribed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(43);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectSubscription = (function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, observer) {
	        _super.call(this);
	        this.subject = subject;
	        this.observer = observer;
	        this.isUnsubscribed = false;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = null;
	        if (!observers || observers.length === 0 || subject.isUnsubscribed) {
	            return;
	        }
	        var subscriberIndex = observers.indexOf(this.observer);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	}(Subscription_1.Subscription));
	exports.SubjectSubscription = SubjectSubscription;
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	function throwError(e) { throw e; }
	exports.throwError = throwError;
	//# sourceMappingURL=throwError.js.map

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an action is invalid because the object has been
	 * unsubscribed.
	 *
	 * @see {@link Subject}
	 * @see {@link BehaviorSubject}
	 *
	 * @class ObjectUnsubscribedError
	 */
	var ObjectUnsubscribedError = (function (_super) {
	    __extends(ObjectUnsubscribedError, _super);
	    function ObjectUnsubscribedError() {
	        _super.call(this, 'object unsubscribed');
	        this.name = 'ObjectUnsubscribedError';
	    }
	    return ObjectUnsubscribedError;
	}(Error));
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(37);
	var Observable_1 = __webpack_require__(36);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var PromiseObservable = (function (_super) {
	    __extends(PromiseObservable, _super);
	    function PromiseObservable(promise, scheduler) {
	        if (scheduler === void 0) { scheduler = null; }
	        _super.call(this);
	        this.promise = promise;
	        this.scheduler = scheduler;
	    }
	    /**
	     * @param promise
	     * @param scheduler
	     * @return {PromiseObservable}
	     * @static true
	     * @name fromPromise
	     * @owner Observable
	     */
	    PromiseObservable.create = function (promise, scheduler) {
	        if (scheduler === void 0) { scheduler = null; }
	        return new PromiseObservable(promise, scheduler);
	    };
	    PromiseObservable.prototype._subscribe = function (subscriber) {
	        var _this = this;
	        var promise = this.promise;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            if (this._isScalar) {
	                if (!subscriber.isUnsubscribed) {
	                    subscriber.next(this.value);
	                    subscriber.complete();
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.next(value);
	                        subscriber.complete();
	                    }
	                }, function (err) {
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.error(err);
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	        else {
	            if (this._isScalar) {
	                if (!subscriber.isUnsubscribed) {
	                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
	                    }
	                }, function (err) {
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	    };
	    return PromiseObservable;
	}(Observable_1.Observable));
	exports.PromiseObservable = PromiseObservable;
	function dispatchNext(arg) {
	    var value = arg.value, subscriber = arg.subscriber;
	    if (!subscriber.isUnsubscribed) {
	        subscriber.next(value);
	        subscriber.complete();
	    }
	}
	function dispatchError(arg) {
	    var err = arg.err, subscriber = arg.subscriber;
	    if (!subscriber.isUnsubscribed) {
	        subscriber.error(err);
	    }
	}
	//# sourceMappingURL=PromiseObservable.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(37);
	/**
	 * @param PromiseCtor
	 * @return {Promise<T>}
	 * @method toPromise
	 * @owner Observable
	 */
	function toPromise(PromiseCtor) {
	    var _this = this;
	    if (!PromiseCtor) {
	        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	            PromiseCtor = root_1.root.Rx.config.Promise;
	        }
	        else if (root_1.root.Promise) {
	            PromiseCtor = root_1.root.Promise;
	        }
	    }
	    if (!PromiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return new PromiseCtor(function (resolve, reject) {
	        var value;
	        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	    });
	}
	exports.toPromise = toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	/**
	* Stores error information; delivered via [NgZone.onError] stream.
	*/
	var NgZoneError = (function () {
	    function NgZoneError(error, stackTrace) {
	        this.error = error;
	        this.stackTrace = stackTrace;
	    }
	    return NgZoneError;
	}());
	exports.NgZoneError = NgZoneError;
	var NgZoneImpl = (function () {
	    function NgZoneImpl(_a) {
	        var _this = this;
	        var trace = _a.trace, onEnter = _a.onEnter, onLeave = _a.onLeave, setMicrotask = _a.setMicrotask, setMacrotask = _a.setMacrotask, onError = _a.onError;
	        this.onEnter = onEnter;
	        this.onLeave = onLeave;
	        this.setMicrotask = setMicrotask;
	        this.setMacrotask = setMacrotask;
	        this.onError = onError;
	        if (Zone) {
	            this.outer = this.inner = Zone.current;
	            if (Zone['wtfZoneSpec']) {
	                this.inner = this.inner.fork(Zone['wtfZoneSpec']);
	            }
	            if (trace && Zone['longStackTraceZoneSpec']) {
	                this.inner = this.inner.fork(Zone['longStackTraceZoneSpec']);
	            }
	            this.inner = this.inner.fork({
	                name: 'angular',
	                properties: { 'isAngularZone': true },
	                onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
	                    try {
	                        _this.onEnter();
	                        return delegate.invokeTask(target, task, applyThis, applyArgs);
	                    }
	                    finally {
	                        _this.onLeave();
	                    }
	                },
	                onInvoke: function (delegate, current, target, callback, applyThis, applyArgs, source) {
	                    try {
	                        _this.onEnter();
	                        return delegate.invoke(target, callback, applyThis, applyArgs, source);
	                    }
	                    finally {
	                        _this.onLeave();
	                    }
	                },
	                onHasTask: function (delegate, current, target, hasTaskState) {
	                    delegate.hasTask(target, hasTaskState);
	                    if (current == target) {
	                        // We are only interested in hasTask events which originate from our zone
	                        // (A child hasTask event is not interesting to us)
	                        if (hasTaskState.change == 'microTask') {
	                            _this.setMicrotask(hasTaskState.microTask);
	                        }
	                        else if (hasTaskState.change == 'macroTask') {
	                            _this.setMacrotask(hasTaskState.macroTask);
	                        }
	                    }
	                },
	                onHandleError: function (delegate, current, target, error) {
	                    delegate.handleError(target, error);
	                    _this.onError(new NgZoneError(error, error.stack));
	                    return false;
	                }
	            });
	        }
	        else {
	            throw new Error('Angular requires Zone.js polyfill.');
	        }
	    }
	    NgZoneImpl.isInAngularZone = function () { return Zone.current.get('isAngularZone') === true; };
	    NgZoneImpl.prototype.runInner = function (fn) { return this.inner.run(fn); };
	    ;
	    NgZoneImpl.prototype.runInnerGuarded = function (fn) { return this.inner.runGuarded(fn); };
	    ;
	    NgZoneImpl.prototype.runOuter = function (fn) { return this.outer.run(fn); };
	    ;
	    return NgZoneImpl;
	}());
	exports.NgZoneImpl = NgZoneImpl;
	//# sourceMappingURL=ng_zone_impl.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var di_1 = __webpack_require__(13);
	var lang_1 = __webpack_require__(5);
	/**
	 * A DI Token representing a unique string id assigned to the application by Angular and used
	 * primarily for prefixing application attributes and CSS styles when
	 * {@link ViewEncapsulation#Emulated} is being used.
	 *
	 * If you need to avoid randomly generated value to be used as an application id, you can provide
	 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
	 * using this token.
	 */
	exports.APP_ID = new di_1.OpaqueToken('AppId');
	function _appIdRandomProviderFactory() {
	    return "" + _randomChar() + _randomChar() + _randomChar();
	}
	/**
	 * Providers that will generate a random APP_ID_TOKEN.
	 */
	exports.APP_ID_RANDOM_PROVIDER = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: exports.APP_ID,
	    useFactory: _appIdRandomProviderFactory,
	    deps: []
	};
	function _randomChar() {
	    return lang_1.StringWrapper.fromCharCode(97 + lang_1.Math.floor(lang_1.Math.random() * 25));
	}
	/**
	 * A function that will be executed when a platform is initialized.
	 */
	exports.PLATFORM_INITIALIZER = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Platform Initializer");
	/**
	 * A function that will be executed when an application is initialized.
	 */
	exports.APP_INITIALIZER = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Application Initializer");
	/**
	 * A token which indicates the root directory of the application
	 */
	exports.PACKAGE_ROOT_URL = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Application Packages Root URL");
	//# sourceMappingURL=application_tokens.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(19);
	var lang_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(16);
	var ng_zone_1 = __webpack_require__(32);
	var async_1 = __webpack_require__(33);
	var decorators_1 = __webpack_require__(14);
	var Testability = (function () {
	    function Testability(_ngZone) {
	        this._ngZone = _ngZone;
	        /** @internal */
	        this._pendingCount = 0;
	        /** @internal */
	        this._isZoneStable = true;
	        /**
	         * Whether any work was done since the last 'whenStable' callback. This is
	         * useful to detect if this could have potentially destabilized another
	         * component while it is stabilizing.
	         * @internal
	         */
	        this._didWork = false;
	        /** @internal */
	        this._callbacks = [];
	        this._watchAngularEvents();
	    }
	    /** @internal */
	    Testability.prototype._watchAngularEvents = function () {
	        var _this = this;
	        async_1.ObservableWrapper.subscribe(this._ngZone.onUnstable, function (_) {
	            _this._didWork = true;
	            _this._isZoneStable = false;
	        });
	        this._ngZone.runOutsideAngular(function () {
	            async_1.ObservableWrapper.subscribe(_this._ngZone.onStable, function (_) {
	                ng_zone_1.NgZone.assertNotInAngularZone();
	                lang_1.scheduleMicroTask(function () {
	                    _this._isZoneStable = true;
	                    _this._runCallbacksIfReady();
	                });
	            });
	        });
	    };
	    Testability.prototype.increasePendingRequestCount = function () {
	        this._pendingCount += 1;
	        this._didWork = true;
	        return this._pendingCount;
	    };
	    Testability.prototype.decreasePendingRequestCount = function () {
	        this._pendingCount -= 1;
	        if (this._pendingCount < 0) {
	            throw new exceptions_1.BaseException('pending async requests below zero');
	        }
	        this._runCallbacksIfReady();
	        return this._pendingCount;
	    };
	    Testability.prototype.isStable = function () {
	        return this._isZoneStable && this._pendingCount == 0 && !this._ngZone.hasPendingMacrotasks;
	    };
	    /** @internal */
	    Testability.prototype._runCallbacksIfReady = function () {
	        var _this = this;
	        if (this.isStable()) {
	            // Schedules the call backs in a new frame so that it is always async.
	            lang_1.scheduleMicroTask(function () {
	                while (_this._callbacks.length !== 0) {
	                    (_this._callbacks.pop())(_this._didWork);
	                }
	                _this._didWork = false;
	            });
	        }
	        else {
	            // Not Ready
	            this._didWork = true;
	        }
	    };
	    Testability.prototype.whenStable = function (callback) {
	        this._callbacks.push(callback);
	        this._runCallbacksIfReady();
	    };
	    Testability.prototype.getPendingRequestCount = function () { return this._pendingCount; };
	    Testability.prototype.findBindings = function (using, provider, exactMatch) {
	        // TODO(juliemr): implement.
	        return [];
	    };
	    Testability.prototype.findProviders = function (using, provider, exactMatch) {
	        // TODO(juliemr): implement.
	        return [];
	    };
	    Testability.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    Testability.ctorParameters = [
	        { type: ng_zone_1.NgZone, },
	    ];
	    return Testability;
	}());
	exports.Testability = Testability;
	var TestabilityRegistry = (function () {
	    function TestabilityRegistry() {
	        /** @internal */
	        this._applications = new collection_1.Map();
	        _testabilityGetter.addToWindow(this);
	    }
	    TestabilityRegistry.prototype.registerApplication = function (token, testability) {
	        this._applications.set(token, testability);
	    };
	    TestabilityRegistry.prototype.getTestability = function (elem) { return this._applications.get(elem); };
	    TestabilityRegistry.prototype.getAllTestabilities = function () { return collection_1.MapWrapper.values(this._applications); };
	    TestabilityRegistry.prototype.getAllRootElements = function () { return collection_1.MapWrapper.keys(this._applications); };
	    TestabilityRegistry.prototype.findTestabilityInTree = function (elem, findInAncestors) {
	        if (findInAncestors === void 0) { findInAncestors = true; }
	        return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
	    };
	    TestabilityRegistry.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    TestabilityRegistry.ctorParameters = [];
	    return TestabilityRegistry;
	}());
	exports.TestabilityRegistry = TestabilityRegistry;
	/* @ts2dart_const */
	var _NoopGetTestability = (function () {
	    function _NoopGetTestability() {
	    }
	    _NoopGetTestability.prototype.addToWindow = function (registry) { };
	    _NoopGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
	        return null;
	    };
	    return _NoopGetTestability;
	}());
	/**
	 * Set the {@link GetTestability} implementation used by the Angular testing framework.
	 */
	function setTestabilityGetter(getter) {
	    _testabilityGetter = getter;
	}
	exports.setTestabilityGetter = setTestabilityGetter;
	var _testabilityGetter = new _NoopGetTestability();
	//# sourceMappingURL=testability.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(16);
	var async_1 = __webpack_require__(33);
	var reflection_1 = __webpack_require__(22);
	var component_factory_1 = __webpack_require__(60);
	var decorators_1 = __webpack_require__(14);
	/**
	 * Low-level service for loading {@link ComponentFactory}s, which
	 * can later be used to create and render a Component instance.
	 */
	var ComponentResolver = (function () {
	    function ComponentResolver() {
	    }
	    return ComponentResolver;
	}());
	exports.ComponentResolver = ComponentResolver;
	function _isComponentFactory(type) {
	    return type instanceof component_factory_1.ComponentFactory;
	}
	var ReflectorComponentResolver = (function (_super) {
	    __extends(ReflectorComponentResolver, _super);
	    function ReflectorComponentResolver() {
	        _super.apply(this, arguments);
	    }
	    ReflectorComponentResolver.prototype.resolveComponent = function (componentType) {
	        var metadatas = reflection_1.reflector.annotations(componentType);
	        var componentFactory = metadatas.find(_isComponentFactory);
	        if (lang_1.isBlank(componentFactory)) {
	            throw new exceptions_1.BaseException("No precompiled component " + lang_1.stringify(componentType) + " found");
	        }
	        return async_1.PromiseWrapper.resolve(componentFactory);
	    };
	    ReflectorComponentResolver.prototype.clearCache = function () { };
	    ReflectorComponentResolver.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    return ReflectorComponentResolver;
	}(ComponentResolver));
	exports.ReflectorComponentResolver = ReflectorComponentResolver;
	//# sourceMappingURL=component_resolver.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(16);
	var view_utils_1 = __webpack_require__(61);
	/**
	 * Represents an instance of a Component created via a {@link ComponentFactory}.
	 *
	 * `ComponentRef` provides access to the Component Instance as well other objects related to this
	 * Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
	 * method.
	 */
	var ComponentRef = (function () {
	    function ComponentRef() {
	    }
	    Object.defineProperty(ComponentRef.prototype, "location", {
	        /**
	         * Location of the Host Element of this Component Instance.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef.prototype, "injector", {
	        /**
	         * The injector on which the component instance exists.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef.prototype, "instance", {
	        /**
	         * The instance of the Component.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef.prototype, "hostView", {
	        /**
	         * The {@link ViewRef} of the Host View of this Component instance.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef.prototype, "changeDetectorRef", {
	        /**
	         * The {@link ChangeDetectorRef} of the Component instance.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef.prototype, "componentType", {
	        /**
	         * The component type.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return ComponentRef;
	}());
	exports.ComponentRef = ComponentRef;
	var ComponentRef_ = (function (_super) {
	    __extends(ComponentRef_, _super);
	    function ComponentRef_(_hostElement, _componentType) {
	        _super.call(this);
	        this._hostElement = _hostElement;
	        this._componentType = _componentType;
	    }
	    Object.defineProperty(ComponentRef_.prototype, "location", {
	        get: function () { return this._hostElement.elementRef; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef_.prototype, "injector", {
	        get: function () { return this._hostElement.injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentRef_.prototype, "instance", {
	        get: function () { return this._hostElement.component; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef_.prototype, "hostView", {
	        get: function () { return this._hostElement.parentView.ref; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef_.prototype, "changeDetectorRef", {
	        get: function () { return this._hostElement.parentView.ref; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentRef_.prototype, "componentType", {
	        get: function () { return this._componentType; },
	        enumerable: true,
	        configurable: true
	    });
	    ComponentRef_.prototype.destroy = function () { this._hostElement.parentView.destroy(); };
	    ComponentRef_.prototype.onDestroy = function (callback) { this.hostView.onDestroy(callback); };
	    return ComponentRef_;
	}(ComponentRef));
	exports.ComponentRef_ = ComponentRef_;
	var EMPTY_CONTEXT = new Object();
	/*@ts2dart_const*/
	var ComponentFactory = (function () {
	    function ComponentFactory(selector, _viewFactory, _componentType) {
	        this.selector = selector;
	        this._viewFactory = _viewFactory;
	        this._componentType = _componentType;
	    }
	    Object.defineProperty(ComponentFactory.prototype, "componentType", {
	        get: function () { return this._componentType; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Creates a new component.
	     */
	    ComponentFactory.prototype.create = function (injector, projectableNodes, rootSelectorOrNode) {
	        if (projectableNodes === void 0) { projectableNodes = null; }
	        if (rootSelectorOrNode === void 0) { rootSelectorOrNode = null; }
	        var vu = injector.get(view_utils_1.ViewUtils);
	        if (lang_1.isBlank(projectableNodes)) {
	            projectableNodes = [];
	        }
	        // Note: Host views don't need a declarationAppElement!
	        var hostView = this._viewFactory(vu, injector, null);
	        var hostElement = hostView.create(EMPTY_CONTEXT, projectableNodes, rootSelectorOrNode);
	        return new ComponentRef_(hostElement, this._componentType);
	    };
	    return ComponentFactory;
	}());
	exports.ComponentFactory = ComponentFactory;
	//# sourceMappingURL=component_factory.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var security_1 = __webpack_require__(62);
	var lang_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(19);
	var exceptions_1 = __webpack_require__(16);
	var element_1 = __webpack_require__(63);
	var exceptions_2 = __webpack_require__(69);
	var change_detection_1 = __webpack_require__(70);
	var api_1 = __webpack_require__(77);
	var application_tokens_1 = __webpack_require__(57);
	var decorators_1 = __webpack_require__(14);
	var change_detection_util_1 = __webpack_require__(76);
	var ViewUtils = (function () {
	    function ViewUtils(_renderer, _appId, sanitizer) {
	        this._renderer = _renderer;
	        this._appId = _appId;
	        this._nextCompTypeId = 0;
	        this.sanitizer = sanitizer;
	    }
	    /**
	     * Used by the generated code
	     */
	    ViewUtils.prototype.createRenderComponentType = function (templateUrl, slotCount, encapsulation, styles) {
	        return new api_1.RenderComponentType(this._appId + "-" + this._nextCompTypeId++, templateUrl, slotCount, encapsulation, styles);
	    };
	    /** @internal */
	    ViewUtils.prototype.renderComponent = function (renderComponentType) {
	        return this._renderer.renderComponent(renderComponentType);
	    };
	    ViewUtils.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    ViewUtils.ctorParameters = [
	        { type: api_1.RootRenderer, },
	        { type: undefined, decorators: [{ type: decorators_1.Inject, args: [application_tokens_1.APP_ID,] },] },
	        { type: security_1.SanitizationService, },
	    ];
	    return ViewUtils;
	}());
	exports.ViewUtils = ViewUtils;
	function flattenNestedViewRenderNodes(nodes) {
	    return _flattenNestedViewRenderNodes(nodes, []);
	}
	exports.flattenNestedViewRenderNodes = flattenNestedViewRenderNodes;
	function _flattenNestedViewRenderNodes(nodes, renderNodes) {
	    for (var i = 0; i < nodes.length; i++) {
	        var node = nodes[i];
	        if (node instanceof element_1.AppElement) {
	            var appEl = node;
	            renderNodes.push(appEl.nativeElement);
	            if (lang_1.isPresent(appEl.nestedViews)) {
	                for (var k = 0; k < appEl.nestedViews.length; k++) {
	                    _flattenNestedViewRenderNodes(appEl.nestedViews[k].rootNodesOrAppElements, renderNodes);
	                }
	            }
	        }
	        else {
	            renderNodes.push(node);
	        }
	    }
	    return renderNodes;
	}
	var EMPTY_ARR = [];
	function ensureSlotCount(projectableNodes, expectedSlotCount) {
	    var res;
	    if (lang_1.isBlank(projectableNodes)) {
	        res = EMPTY_ARR;
	    }
	    else if (projectableNodes.length < expectedSlotCount) {
	        var givenSlotCount = projectableNodes.length;
	        res = collection_1.ListWrapper.createFixedSize(expectedSlotCount);
	        for (var i = 0; i < expectedSlotCount; i++) {
	            res[i] = (i < givenSlotCount) ? projectableNodes[i] : EMPTY_ARR;
	        }
	    }
	    else {
	        res = projectableNodes;
	    }
	    return res;
	}
	exports.ensureSlotCount = ensureSlotCount;
	exports.MAX_INTERPOLATION_VALUES = 9;
	function interpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
	    switch (valueCount) {
	        case 1:
	            return c0 + _toStringWithNull(a1) + c1;
	        case 2:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
	        case 3:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3;
	        case 4:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4;
	        case 5:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
	        case 6:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6;
	        case 7:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6 + _toStringWithNull(a7) + c7;
	        case 8:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
	        case 9:
	            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
	                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
	                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) +
	                c9;
	        default:
	            throw new exceptions_1.BaseException("Does not support more than 9 expressions");
	    }
	}
	exports.interpolate = interpolate;
	function _toStringWithNull(v) {
	    return v != null ? v.toString() : '';
	}
	function checkBinding(throwOnChange, oldValue, newValue) {
	    if (throwOnChange) {
	        if (!change_detection_1.devModeEqual(oldValue, newValue)) {
	            throw new exceptions_2.ExpressionChangedAfterItHasBeenCheckedException(oldValue, newValue, null);
	        }
	        return false;
	    }
	    else {
	        return !lang_1.looseIdentical(oldValue, newValue);
	    }
	}
	exports.checkBinding = checkBinding;
	function arrayLooseIdentical(a, b) {
	    if (a.length != b.length)
	        return false;
	    for (var i = 0; i < a.length; ++i) {
	        if (!lang_1.looseIdentical(a[i], b[i]))
	            return false;
	    }
	    return true;
	}
	exports.arrayLooseIdentical = arrayLooseIdentical;
	function mapLooseIdentical(m1, m2) {
	    var k1 = collection_1.StringMapWrapper.keys(m1);
	    var k2 = collection_1.StringMapWrapper.keys(m2);
	    if (k1.length != k2.length) {
	        return false;
	    }
	    var key;
	    for (var i = 0; i < k1.length; i++) {
	        key = k1[i];
	        if (!lang_1.looseIdentical(m1[key], m2[key])) {
	            return false;
	        }
	    }
	    return true;
	}
	exports.mapLooseIdentical = mapLooseIdentical;
	function castByValue(input, value) {
	    return input;
	}
	exports.castByValue = castByValue;
	exports.EMPTY_ARRAY = [];
	exports.EMPTY_MAP = {};
	function pureProxy1(fn) {
	    var result;
	    var v0;
	    v0 = change_detection_util_1.uninitialized;
	    return function (p0) {
	        if (!lang_1.looseIdentical(v0, p0)) {
	            v0 = p0;
	            result = fn(p0);
	        }
	        return result;
	    };
	}
	exports.pureProxy1 = pureProxy1;
	function pureProxy2(fn) {
	    var result;
	    var v0, v1;
	    v0 = v1 = change_detection_util_1.uninitialized;
	    return function (p0, p1) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1)) {
	            v0 = p0;
	            v1 = p1;
	            result = fn(p0, p1);
	        }
	        return result;
	    };
	}
	exports.pureProxy2 = pureProxy2;
	function pureProxy3(fn) {
	    var result;
	    var v0, v1, v2;
	    v0 = v1 = v2 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            result = fn(p0, p1, p2);
	        }
	        return result;
	    };
	}
	exports.pureProxy3 = pureProxy3;
	function pureProxy4(fn) {
	    var result;
	    var v0, v1, v2, v3;
	    v0 = v1 = v2 = v3 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            result = fn(p0, p1, p2, p3);
	        }
	        return result;
	    };
	}
	exports.pureProxy4 = pureProxy4;
	function pureProxy5(fn) {
	    var result;
	    var v0, v1, v2, v3, v4;
	    v0 = v1 = v2 = v3 = v4 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            result = fn(p0, p1, p2, p3, p4);
	        }
	        return result;
	    };
	}
	exports.pureProxy5 = pureProxy5;
	function pureProxy6(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5;
	    v0 = v1 = v2 = v3 = v4 = v5 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            result = fn(p0, p1, p2, p3, p4, p5);
	        }
	        return result;
	    };
	}
	exports.pureProxy6 = pureProxy6;
	function pureProxy7(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            result = fn(p0, p1, p2, p3, p4, p5, p6);
	        }
	        return result;
	    };
	}
	exports.pureProxy7 = pureProxy7;
	function pureProxy8(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6, v7;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6, p7) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6) || !lang_1.looseIdentical(v7, p7)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            v7 = p7;
	            result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
	        }
	        return result;
	    };
	}
	exports.pureProxy8 = pureProxy8;
	function pureProxy9(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6, v7, v8;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6) || !lang_1.looseIdentical(v7, p7) || !lang_1.looseIdentical(v8, p8)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            v7 = p7;
	            v8 = p8;
	            result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
	        }
	        return result;
	    };
	}
	exports.pureProxy9 = pureProxy9;
	function pureProxy10(fn) {
	    var result;
	    var v0, v1, v2, v3, v4, v5, v6, v7, v8, v9;
	    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = change_detection_util_1.uninitialized;
	    return function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
	        if (!lang_1.looseIdentical(v0, p0) || !lang_1.looseIdentical(v1, p1) || !lang_1.looseIdentical(v2, p2) ||
	            !lang_1.looseIdentical(v3, p3) || !lang_1.looseIdentical(v4, p4) || !lang_1.looseIdentical(v5, p5) ||
	            !lang_1.looseIdentical(v6, p6) || !lang_1.looseIdentical(v7, p7) || !lang_1.looseIdentical(v8, p8) ||
	            !lang_1.looseIdentical(v9, p9)) {
	            v0 = p0;
	            v1 = p1;
	            v2 = p2;
	            v3 = p3;
	            v4 = p4;
	            v5 = p5;
	            v6 = p6;
	            v7 = p7;
	            v8 = p8;
	            v9 = p9;
	            result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
	        }
	        return result;
	    };
	}
	exports.pureProxy10 = pureProxy10;
	//# sourceMappingURL=view_utils.js.map

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	/**
	* A SecurityContext marks a location that has dangerous security implications, e.g. a DOM property
	* like `innerHTML` that could cause Cross Site Scripting (XSS) security bugs when improperly
	* handled.
	*
	* See DomSanitizationService for more details on security in Angular applications.
	*/
	(function (SecurityContext) {
	    SecurityContext[SecurityContext["NONE"] = 0] = "NONE";
	    SecurityContext[SecurityContext["HTML"] = 1] = "HTML";
	    SecurityContext[SecurityContext["STYLE"] = 2] = "STYLE";
	    SecurityContext[SecurityContext["SCRIPT"] = 3] = "SCRIPT";
	    SecurityContext[SecurityContext["URL"] = 4] = "URL";
	    SecurityContext[SecurityContext["RESOURCE_URL"] = 5] = "RESOURCE_URL";
	})(exports.SecurityContext || (exports.SecurityContext = {}));
	var SecurityContext = exports.SecurityContext;
	/**
	 * SanitizationService is used by the views to sanitize potentially dangerous values. This is a
	 * private API, use code should only refer to DomSanitizationService.
	 */
	var SanitizationService = (function () {
	    function SanitizationService() {
	    }
	    return SanitizationService;
	}());
	exports.SanitizationService = SanitizationService;
	//# sourceMappingURL=security.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(19);
	var exceptions_1 = __webpack_require__(16);
	var view_type_1 = __webpack_require__(64);
	var element_ref_1 = __webpack_require__(65);
	var view_container_ref_1 = __webpack_require__(66);
	/**
	 * An AppElement is created for elements that have a ViewContainerRef,
	 * a nested component or a <template> element to keep data around
	 * that is needed for later instantiations.
	 */
	var AppElement = (function () {
	    function AppElement(index, parentIndex, parentView, nativeElement) {
	        this.index = index;
	        this.parentIndex = parentIndex;
	        this.parentView = parentView;
	        this.nativeElement = nativeElement;
	        this.nestedViews = null;
	        this.componentView = null;
	    }
	    Object.defineProperty(AppElement.prototype, "elementRef", {
	        get: function () { return new element_ref_1.ElementRef(this.nativeElement); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppElement.prototype, "vcRef", {
	        get: function () { return new view_container_ref_1.ViewContainerRef_(this); },
	        enumerable: true,
	        configurable: true
	    });
	    AppElement.prototype.initComponent = function (component, componentConstructorViewQueries, view) {
	        this.component = component;
	        this.componentConstructorViewQueries = componentConstructorViewQueries;
	        this.componentView = view;
	    };
	    Object.defineProperty(AppElement.prototype, "parentInjector", {
	        get: function () { return this.parentView.injector(this.parentIndex); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppElement.prototype, "injector", {
	        get: function () { return this.parentView.injector(this.index); },
	        enumerable: true,
	        configurable: true
	    });
	    AppElement.prototype.mapNestedViews = function (nestedViewClass, callback) {
	        var result = [];
	        if (lang_1.isPresent(this.nestedViews)) {
	            this.nestedViews.forEach(function (nestedView) {
	                if (nestedView.clazz === nestedViewClass) {
	                    result.push(callback(nestedView));
	                }
	            });
	        }
	        return result;
	    };
	    AppElement.prototype.attachView = function (view, viewIndex) {
	        if (view.type === view_type_1.ViewType.COMPONENT) {
	            throw new exceptions_1.BaseException("Component views can't be moved!");
	        }
	        var nestedViews = this.nestedViews;
	        if (nestedViews == null) {
	            nestedViews = [];
	            this.nestedViews = nestedViews;
	        }
	        collection_1.ListWrapper.insert(nestedViews, viewIndex, view);
	        var refRenderNode;
	        if (viewIndex > 0) {
	            var prevView = nestedViews[viewIndex - 1];
	            refRenderNode = prevView.lastRootNode;
	        }
	        else {
	            refRenderNode = this.nativeElement;
	        }
	        if (lang_1.isPresent(refRenderNode)) {
	            view.renderer.attachViewAfter(refRenderNode, view.flatRootNodes);
	        }
	        view.addToContentChildren(this);
	    };
	    AppElement.prototype.detachView = function (viewIndex) {
	        var view = collection_1.ListWrapper.removeAt(this.nestedViews, viewIndex);
	        if (view.type === view_type_1.ViewType.COMPONENT) {
	            throw new exceptions_1.BaseException("Component views can't be moved!");
	        }
	        view.renderer.detachView(view.flatRootNodes);
	        view.removeFromContentChildren(this);
	        return view;
	    };
	    return AppElement;
	}());
	exports.AppElement = AppElement;
	//# sourceMappingURL=element.js.map

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";
	(function (ViewType) {
	    // A view that contains the host element with bound component directive.
	    // Contains a COMPONENT view
	    ViewType[ViewType["HOST"] = 0] = "HOST";
	    // The view of the component
	    // Can contain 0 to n EMBEDDED views
	    ViewType[ViewType["COMPONENT"] = 1] = "COMPONENT";
	    // A view that is embedded into another View via a <template> element
	    // inside of a COMPONENT view
	    ViewType[ViewType["EMBEDDED"] = 2] = "EMBEDDED";
	})(exports.ViewType || (exports.ViewType = {}));
	var ViewType = exports.ViewType;
	//# sourceMappingURL=view_type.js.map

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";
	/**
	* A wrapper around a native element inside of a View.
	*
	* An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
	* element.
	*/
	// Note: We don't expose things like `Injector`, `ViewContainer`, ... here,
	// i.e. users have to ask for what they need. With that, we can build better analysis tools
	// and could do better codegen in the future.
	var ElementRef = (function () {
	    function ElementRef(nativeElement) {
	        this.nativeElement = nativeElement;
	    }
	    return ElementRef;
	}());
	exports.ElementRef = ElementRef;
	//# sourceMappingURL=element_ref.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(19);
	var exceptions_1 = __webpack_require__(16);
	var lang_1 = __webpack_require__(5);
	var profile_1 = __webpack_require__(67);
	/**
	 * Represents a container where one or more Views can be attached.
	 *
	 * The container can contain two kinds of Views. Host Views, created by instantiating a
	 * {@link Component} via {@link #createComponent}, and Embedded Views, created by instantiating an
	 * {@link TemplateRef Embedded Template} via {@link #createEmbeddedView}.
	 *
	 * The location of the View Container within the containing View is specified by the Anchor
	 * `element`. Each View Container can have only one Anchor Element and each Anchor Element can only
	 * have a single View Container.
	 *
	 * Root elements of Views attached to this container become siblings of the Anchor Element in
	 * the Rendered View.
	 *
	 * To access a `ViewContainerRef` of an Element, you can either place a {@link Directive} injected
	 * with `ViewContainerRef` on the Element, or you obtain it via a {@link ViewChild} query.
	 */
	var ViewContainerRef = (function () {
	    function ViewContainerRef() {
	    }
	    Object.defineProperty(ViewContainerRef.prototype, "element", {
	        /**
	         * Anchor element that specifies the location of this container in the containing View.
	         * <!-- TODO: rename to anchorElement -->
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef.prototype, "injector", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef.prototype, "parentInjector", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef.prototype, "length", {
	        /**
	         * Returns the number of Views currently attached to this container.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return ViewContainerRef;
	}());
	exports.ViewContainerRef = ViewContainerRef;
	var ViewContainerRef_ = (function () {
	    function ViewContainerRef_(_element) {
	        this._element = _element;
	        /** @internal */
	        this._createComponentInContainerScope = profile_1.wtfCreateScope('ViewContainerRef#createComponent()');
	        /** @internal */
	        this._insertScope = profile_1.wtfCreateScope('ViewContainerRef#insert()');
	        /** @internal */
	        this._removeScope = profile_1.wtfCreateScope('ViewContainerRef#remove()');
	        /** @internal */
	        this._detachScope = profile_1.wtfCreateScope('ViewContainerRef#detach()');
	    }
	    ViewContainerRef_.prototype.get = function (index) { return this._element.nestedViews[index].ref; };
	    Object.defineProperty(ViewContainerRef_.prototype, "length", {
	        get: function () {
	            var views = this._element.nestedViews;
	            return lang_1.isPresent(views) ? views.length : 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef_.prototype, "element", {
	        get: function () { return this._element.elementRef; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef_.prototype, "injector", {
	        get: function () { return this._element.injector; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewContainerRef_.prototype, "parentInjector", {
	        get: function () { return this._element.parentInjector; },
	        enumerable: true,
	        configurable: true
	    });
	    // TODO(rado): profile and decide whether bounds checks should be added
	    // to the methods below.
	    ViewContainerRef_.prototype.createEmbeddedView = function (templateRef, context, index) {
	        if (context === void 0) { context = null; }
	        if (index === void 0) { index = -1; }
	        var viewRef = templateRef.createEmbeddedView(context);
	        this.insert(viewRef, index);
	        return viewRef;
	    };
	    ViewContainerRef_.prototype.createComponent = function (componentFactory, index, injector, projectableNodes) {
	        if (index === void 0) { index = -1; }
	        if (injector === void 0) { injector = null; }
	        if (projectableNodes === void 0) { projectableNodes = null; }
	        var s = this._createComponentInContainerScope();
	        var contextInjector = lang_1.isPresent(injector) ? injector : this._element.parentInjector;
	        var componentRef = componentFactory.create(contextInjector, projectableNodes);
	        this.insert(componentRef.hostView, index);
	        return profile_1.wtfLeave(s, componentRef);
	    };
	    // TODO(i): refactor insert+remove into move
	    ViewContainerRef_.prototype.insert = function (viewRef, index) {
	        if (index === void 0) { index = -1; }
	        var s = this._insertScope();
	        if (index == -1)
	            index = this.length;
	        var viewRef_ = viewRef;
	        this._element.attachView(viewRef_.internalView, index);
	        return profile_1.wtfLeave(s, viewRef_);
	    };
	    ViewContainerRef_.prototype.indexOf = function (viewRef) {
	        return collection_1.ListWrapper.indexOf(this._element.nestedViews, viewRef.internalView);
	    };
	    // TODO(i): rename to destroy
	    ViewContainerRef_.prototype.remove = function (index) {
	        if (index === void 0) { index = -1; }
	        var s = this._removeScope();
	        if (index == -1)
	            index = this.length - 1;
	        var view = this._element.detachView(index);
	        view.destroy();
	        // view is intentionally not returned to the client.
	        profile_1.wtfLeave(s);
	    };
	    // TODO(i): refactor insert+remove into move
	    ViewContainerRef_.prototype.detach = function (index) {
	        if (index === void 0) { index = -1; }
	        var s = this._detachScope();
	        if (index == -1)
	            index = this.length - 1;
	        var view = this._element.detachView(index);
	        return profile_1.wtfLeave(s, view.ref);
	    };
	    ViewContainerRef_.prototype.clear = function () {
	        for (var i = this.length - 1; i >= 0; i--) {
	            this.remove(i);
	        }
	    };
	    return ViewContainerRef_;
	}());
	exports.ViewContainerRef_ = ViewContainerRef_;
	//# sourceMappingURL=view_container_ref.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var impl = __webpack_require__(68);
	// Change exports to const once https://github.com/angular/ts2dart/issues/150
	/**
	 * True if WTF is enabled.
	 */
	exports.wtfEnabled = impl.detectWTF();
	function noopScope(arg0, arg1) {
	    return null;
	}
	/**
	 * Create trace scope.
	 *
	 * Scopes must be strictly nested and are analogous to stack frames, but
	 * do not have to follow the stack frames. Instead it is recommended that they follow logical
	 * nesting. You may want to use
	 * [Event
	 * Signatures](http://google.github.io/tracing-framework/instrumenting-code.html#custom-events)
	 * as they are defined in WTF.
	 *
	 * Used to mark scope entry. The return value is used to leave the scope.
	 *
	 *     var myScope = wtfCreateScope('MyClass#myMethod(ascii someVal)');
	 *
	 *     someMethod() {
	 *        var s = myScope('Foo'); // 'Foo' gets stored in tracing UI
	 *        // DO SOME WORK HERE
	 *        return wtfLeave(s, 123); // Return value 123
	 *     }
	 *
	 * Note, adding try-finally block around the work to ensure that `wtfLeave` gets called can
	 * negatively impact the performance of your application. For this reason we recommend that
	 * you don't add them to ensure that `wtfLeave` gets called. In production `wtfLeave` is a noop and
	 * so try-finally block has no value. When debugging perf issues, skipping `wtfLeave`, do to
	 * exception, will produce incorrect trace, but presence of exception signifies logic error which
	 * needs to be fixed before the app should be profiled. Add try-finally only when you expect that
	 * an exception is expected during normal execution while profiling.
	 *
	 */
	exports.wtfCreateScope = exports.wtfEnabled ? impl.createScope : function (signature, flags) { return noopScope; };
	/**
	 * Used to mark end of Scope.
	 *
	 * - `scope` to end.
	 * - `returnValue` (optional) to be passed to the WTF.
	 *
	 * Returns the `returnValue for easy chaining.
	 */
	exports.wtfLeave = exports.wtfEnabled ? impl.leave : function (s, r) { return r; };
	/**
	 * Used to mark Async start. Async are similar to scope but they don't have to be strictly nested.
	 * The return value is used in the call to [endAsync]. Async ranges only work if WTF has been
	 * enabled.
	 *
	 *     someMethod() {
	 *        var s = wtfStartTimeRange('HTTP:GET', 'some.url');
	 *        var future = new Future.delay(5).then((_) {
	 *          wtfEndTimeRange(s);
	 *        });
	 *     }
	 */
	exports.wtfStartTimeRange = exports.wtfEnabled ? impl.startTimeRange : function (rangeType, action) { return null; };
	/**
	 * Ends a async time range operation.
	 * [range] is the return value from [wtfStartTimeRange] Async ranges only work if WTF has been
	 * enabled.
	 */
	exports.wtfEndTimeRange = exports.wtfEnabled ? impl.endTimeRange : function (r) {
	    return null;
	};
	//# sourceMappingURL=profile.js.map

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var trace;
	var events;
	function detectWTF() {
	    var wtf = lang_1.global['wtf'];
	    if (wtf) {
	        trace = wtf['trace'];
	        if (trace) {
	            events = trace['events'];
	            return true;
	        }
	    }
	    return false;
	}
	exports.detectWTF = detectWTF;
	function createScope(signature, flags) {
	    if (flags === void 0) { flags = null; }
	    return events.createScope(signature, flags);
	}
	exports.createScope = createScope;
	function leave(scope, returnValue) {
	    trace.leaveScope(scope, returnValue);
	    return returnValue;
	}
	exports.leave = leave;
	function startTimeRange(rangeType, action) {
	    return trace.beginTimeRange(rangeType, action);
	}
	exports.startTimeRange = startTimeRange;
	function endTimeRange(range) {
	    trace.endTimeRange(range);
	}
	exports.endTimeRange = endTimeRange;
	//# sourceMappingURL=wtf_impl.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(16);
	/**
	 * An error thrown if application changes model breaking the top-down data flow.
	 *
	 * This exception is only thrown in dev mode.
	 *
	 * <!-- TODO: Add a link once the dev mode option is configurable -->
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'parent',
	 *   template: `
	 *     <child [prop]="parentProp"></child>
	 *   `,
	 *   directives: [forwardRef(() => Child)]
	 * })
	 * class Parent {
	 *   parentProp = "init";
	 * }
	 *
	 * @Directive({selector: 'child', inputs: ['prop']})
	 * class Child {
	 *   constructor(public parent: Parent) {}
	 *
	 *   set prop(v) {
	 *     // this updates the parent property, which is disallowed during change detection
	 *     // this will result in ExpressionChangedAfterItHasBeenCheckedException
	 *     this.parent.parentProp = "updated";
	 *   }
	 * }
	 * ```
	 */
	var ExpressionChangedAfterItHasBeenCheckedException = (function (_super) {
	    __extends(ExpressionChangedAfterItHasBeenCheckedException, _super);
	    function ExpressionChangedAfterItHasBeenCheckedException(oldValue, currValue, context) {
	        _super.call(this, "Expression has changed after it was checked. " +
	            ("Previous value: '" + oldValue + "'. Current value: '" + currValue + "'"));
	    }
	    return ExpressionChangedAfterItHasBeenCheckedException;
	}(exceptions_1.BaseException));
	exports.ExpressionChangedAfterItHasBeenCheckedException = ExpressionChangedAfterItHasBeenCheckedException;
	/**
	 * Thrown when an exception was raised during view creation, change detection or destruction.
	 *
	 * This error wraps the original exception to attach additional contextual information that can
	 * be useful for debugging.
	 */
	var ViewWrappedException = (function (_super) {
	    __extends(ViewWrappedException, _super);
	    function ViewWrappedException(originalException, originalStack, context) {
	        _super.call(this, "Error in " + context.source, originalException, originalStack, context);
	    }
	    return ViewWrappedException;
	}(exceptions_1.WrappedException));
	exports.ViewWrappedException = ViewWrappedException;
	/**
	 * Thrown when a destroyed view is used.
	 *
	 * This error indicates a bug in the framework.
	 *
	 * This is an internal Angular error.
	 */
	var ViewDestroyedException = (function (_super) {
	    __extends(ViewDestroyedException, _super);
	    function ViewDestroyedException(details) {
	        _super.call(this, "Attempt to use a destroyed view: " + details);
	    }
	    return ViewDestroyedException;
	}(exceptions_1.BaseException));
	exports.ViewDestroyedException = ViewDestroyedException;
	//# sourceMappingURL=exceptions.js.map

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var iterable_differs_1 = __webpack_require__(71);
	var default_iterable_differ_1 = __webpack_require__(72);
	var keyvalue_differs_1 = __webpack_require__(73);
	var default_keyvalue_differ_1 = __webpack_require__(74);
	var default_keyvalue_differ_2 = __webpack_require__(74);
	exports.DefaultKeyValueDifferFactory = default_keyvalue_differ_2.DefaultKeyValueDifferFactory;
	exports.KeyValueChangeRecord = default_keyvalue_differ_2.KeyValueChangeRecord;
	var default_iterable_differ_2 = __webpack_require__(72);
	exports.DefaultIterableDifferFactory = default_iterable_differ_2.DefaultIterableDifferFactory;
	exports.CollectionChangeRecord = default_iterable_differ_2.CollectionChangeRecord;
	var constants_1 = __webpack_require__(9);
	exports.ChangeDetectionStrategy = constants_1.ChangeDetectionStrategy;
	exports.CHANGE_DETECTION_STRATEGY_VALUES = constants_1.CHANGE_DETECTION_STRATEGY_VALUES;
	exports.ChangeDetectorState = constants_1.ChangeDetectorState;
	exports.CHANGE_DETECTOR_STATE_VALUES = constants_1.CHANGE_DETECTOR_STATE_VALUES;
	exports.isDefaultChangeDetectionStrategy = constants_1.isDefaultChangeDetectionStrategy;
	var change_detector_ref_1 = __webpack_require__(75);
	exports.ChangeDetectorRef = change_detector_ref_1.ChangeDetectorRef;
	var iterable_differs_2 = __webpack_require__(71);
	exports.IterableDiffers = iterable_differs_2.IterableDiffers;
	var keyvalue_differs_2 = __webpack_require__(73);
	exports.KeyValueDiffers = keyvalue_differs_2.KeyValueDiffers;
	var default_iterable_differ_3 = __webpack_require__(72);
	exports.DefaultIterableDiffer = default_iterable_differ_3.DefaultIterableDiffer;
	var change_detection_util_1 = __webpack_require__(76);
	exports.WrappedValue = change_detection_util_1.WrappedValue;
	exports.ValueUnwrapper = change_detection_util_1.ValueUnwrapper;
	exports.SimpleChange = change_detection_util_1.SimpleChange;
	exports.devModeEqual = change_detection_util_1.devModeEqual;
	exports.looseIdentical = change_detection_util_1.looseIdentical;
	exports.uninitialized = change_detection_util_1.uninitialized;
	/**
	 * Structural diffing for `Object`s and `Map`s.
	 */
	exports.keyValDiff = 
	/*@ts2dart_const*/ [new default_keyvalue_differ_1.DefaultKeyValueDifferFactory()];
	/**
	 * Structural diffing for `Iterable` types such as `Array`s.
	 */
	exports.iterableDiff = 
	/*@ts2dart_const*/ [new default_iterable_differ_1.DefaultIterableDifferFactory()];
	exports.defaultIterableDiffers = new iterable_differs_1.IterableDiffers(exports.iterableDiff);
	exports.defaultKeyValueDiffers = new keyvalue_differs_1.KeyValueDiffers(exports.keyValDiff);
	//# sourceMappingURL=change_detection.js.map

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(16);
	var collection_1 = __webpack_require__(19);
	var di_1 = __webpack_require__(13);
	/**
	 * A repository of different iterable diffing strategies used by NgFor, NgClass, and others.
	 * @ts2dart_const
	 */
	var IterableDiffers = (function () {
	    /*@ts2dart_const*/
	    function IterableDiffers(factories) {
	        this.factories = factories;
	    }
	    IterableDiffers.create = function (factories, parent) {
	        if (lang_1.isPresent(parent)) {
	            var copied = collection_1.ListWrapper.clone(parent.factories);
	            factories = factories.concat(copied);
	            return new IterableDiffers(factories);
	        }
	        else {
	            return new IterableDiffers(factories);
	        }
	    };
	    /**
	     * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
	     * inherited {@link IterableDiffers} instance with the provided factories and return a new
	     * {@link IterableDiffers} instance.
	     *
	     * The following example shows how to extend an existing list of factories,
	           * which will only be applied to the injector for this component and its children.
	           * This step is all that's required to make a new {@link IterableDiffer} available.
	     *
	     * ### Example
	     *
	     * ```
	     * @Component({
	     *   viewProviders: [
	     *     IterableDiffers.extend([new ImmutableListDiffer()])
	     *   ]
	     * })
	     * ```
	     */
	    IterableDiffers.extend = function (factories) {
	        return new di_1.Provider(IterableDiffers, {
	            useFactory: function (parent) {
	                if (lang_1.isBlank(parent)) {
	                    // Typically would occur when calling IterableDiffers.extend inside of dependencies passed
	                    // to
	                    // bootstrap(), which would override default pipes instead of extending them.
	                    throw new exceptions_1.BaseException('Cannot extend IterableDiffers without a parent injector');
	                }
	                return IterableDiffers.create(factories, parent);
	            },
	            // Dependency technically isn't optional, but we can provide a better error message this way.
	            deps: [[IterableDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
	        });
	    };
	    IterableDiffers.prototype.find = function (iterable) {
	        var factory = this.factories.find(function (f) { return f.supports(iterable); });
	        if (lang_1.isPresent(factory)) {
	            return factory;
	        }
	        else {
	            throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + iterable + "' of type '" + lang_1.getTypeNameForDebugging(iterable) + "'");
	        }
	    };
	    return IterableDiffers;
	}());
	exports.IterableDiffers = IterableDiffers;
	//# sourceMappingURL=iterable_differs.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var exceptions_1 = __webpack_require__(16);
	var collection_1 = __webpack_require__(19);
	var lang_1 = __webpack_require__(5);
	/* @ts2dart_const */
	var DefaultIterableDifferFactory = (function () {
	    function DefaultIterableDifferFactory() {
	    }
	    DefaultIterableDifferFactory.prototype.supports = function (obj) { return collection_1.isListLikeIterable(obj); };
	    DefaultIterableDifferFactory.prototype.create = function (cdRef, trackByFn) {
	        return new DefaultIterableDiffer(trackByFn);
	    };
	    return DefaultIterableDifferFactory;
	}());
	exports.DefaultIterableDifferFactory = DefaultIterableDifferFactory;
	var trackByIdentity = function (index, item) { return item; };
	var DefaultIterableDiffer = (function () {
	    function DefaultIterableDiffer(_trackByFn) {
	        this._trackByFn = _trackByFn;
	        this._length = null;
	        this._collection = null;
	        // Keeps track of the used records at any point in time (during & across `_check()` calls)
	        this._linkedRecords = null;
	        // Keeps track of the removed records at any point in time during `_check()` calls.
	        this._unlinkedRecords = null;
	        this._previousItHead = null;
	        this._itHead = null;
	        this._itTail = null;
	        this._additionsHead = null;
	        this._additionsTail = null;
	        this._movesHead = null;
	        this._movesTail = null;
	        this._removalsHead = null;
	        this._removalsTail = null;
	        // Keeps track of records where custom track by is the same, but item identity has changed
	        this._identityChangesHead = null;
	        this._identityChangesTail = null;
	        this._trackByFn = lang_1.isPresent(this._trackByFn) ? this._trackByFn : trackByIdentity;
	    }
	    Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
	        get: function () { return this._collection; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
	        get: function () { return this._length; },
	        enumerable: true,
	        configurable: true
	    });
	    DefaultIterableDiffer.prototype.forEachItem = function (fn) {
	        var record;
	        for (record = this._itHead; record !== null; record = record._next) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachPreviousItem = function (fn) {
	        var record;
	        for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachAddedItem = function (fn) {
	        var record;
	        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachMovedItem = function (fn) {
	        var record;
	        for (record = this._movesHead; record !== null; record = record._nextMoved) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachRemovedItem = function (fn) {
	        var record;
	        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.forEachIdentityChange = function (fn) {
	        var record;
	        for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
	            fn(record);
	        }
	    };
	    DefaultIterableDiffer.prototype.diff = function (collection) {
	        if (lang_1.isBlank(collection))
	            collection = [];
	        if (!collection_1.isListLikeIterable(collection)) {
	            throw new exceptions_1.BaseException("Error trying to diff '" + collection + "'");
	        }
	        if (this.check(collection)) {
	            return this;
	        }
	        else {
	            return null;
	        }
	    };
	    DefaultIterableDiffer.prototype.onDestroy = function () { };
	    // todo(vicb): optim for UnmodifiableListView (frozen arrays)
	    DefaultIterableDiffer.prototype.check = function (collection) {
	        var _this = this;
	        this._reset();
	        var record = this._itHead;
	        var mayBeDirty = false;
	        var index;
	        var item;
	        var itemTrackBy;
	        if (lang_1.isArray(collection)) {
	            var list = collection;
	            this._length = collection.length;
	            for (index = 0; index < this._length; index++) {
	                item = list[index];
	                itemTrackBy = this._trackByFn(index, item);
	                if (record === null || !lang_1.looseIdentical(record.trackById, itemTrackBy)) {
	                    record = this._mismatch(record, item, itemTrackBy, index);
	                    mayBeDirty = true;
	                }
	                else {
	                    if (mayBeDirty) {
	                        // TODO(misko): can we limit this to duplicates only?
	                        record = this._verifyReinsertion(record, item, itemTrackBy, index);
	                    }
	                    if (!lang_1.looseIdentical(record.item, item))
	                        this._addIdentityChange(record, item);
	                }
	                record = record._next;
	            }
	        }
	        else {
	            index = 0;
	            collection_1.iterateListLike(collection, function (item) {
	                itemTrackBy = _this._trackByFn(index, item);
	                if (record === null || !lang_1.looseIdentical(record.trackById, itemTrackBy)) {
	                    record = _this._mismatch(record, item, itemTrackBy, index);
	                    mayBeDirty = true;
	                }
	                else {
	                    if (mayBeDirty) {
	                        // TODO(misko): can we limit this to duplicates only?
	                        record = _this._verifyReinsertion(record, item, itemTrackBy, index);
	                    }
	                    if (!lang_1.looseIdentical(record.item, item))
	                        _this._addIdentityChange(record, item);
	                }
	                record = record._next;
	                index++;
	            });
	            this._length = index;
	        }
	        this._truncate(record);
	        this._collection = collection;
	        return this.isDirty;
	    };
	    Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
	        /* CollectionChanges is considered dirty if it has any additions, moves, removals, or identity
	         * changes.
	         */
	        get: function () {
	            return this._additionsHead !== null || this._movesHead !== null ||
	                this._removalsHead !== null || this._identityChangesHead !== null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Reset the state of the change objects to show no changes. This means set previousKey to
	     * currentKey, and clear all of the queues (additions, moves, removals).
	     * Set the previousIndexes of moved and added items to their currentIndexes
	     * Reset the list of additions, moves and removals
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._reset = function () {
	        if (this.isDirty) {
	            var record;
	            var nextRecord;
	            for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
	                record._nextPrevious = record._next;
	            }
	            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	                record.previousIndex = record.currentIndex;
	            }
	            this._additionsHead = this._additionsTail = null;
	            for (record = this._movesHead; record !== null; record = nextRecord) {
	                record.previousIndex = record.currentIndex;
	                nextRecord = record._nextMoved;
	            }
	            this._movesHead = this._movesTail = null;
	            this._removalsHead = this._removalsTail = null;
	            this._identityChangesHead = this._identityChangesTail = null;
	        }
	    };
	    /**
	     * This is the core function which handles differences between collections.
	     *
	     * - `record` is the record which we saw at this position last time. If null then it is a new
	     *   item.
	     * - `item` is the current item in the collection
	     * - `index` is the position of the item in the collection
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._mismatch = function (record, item, itemTrackBy, index) {
	        // The previous record after which we will append the current one.
	        var previousRecord;
	        if (record === null) {
	            previousRecord = this._itTail;
	        }
	        else {
	            previousRecord = record._prev;
	            // Remove the record from the collection since we know it does not match the item.
	            this._remove(record);
	        }
	        // Attempt to see if we have seen the item before.
	        record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
	        if (record !== null) {
	            // We have seen this before, we need to move it forward in the collection.
	            // But first we need to check if identity changed, so we can update in view if necessary
	            if (!lang_1.looseIdentical(record.item, item))
	                this._addIdentityChange(record, item);
	            this._moveAfter(record, previousRecord, index);
	        }
	        else {
	            // Never seen it, check evicted list.
	            record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
	            if (record !== null) {
	                // It is an item which we have evicted earlier: reinsert it back into the list.
	                // But first we need to check if identity changed, so we can update in view if necessary
	                if (!lang_1.looseIdentical(record.item, item))
	                    this._addIdentityChange(record, item);
	                this._reinsertAfter(record, previousRecord, index);
	            }
	            else {
	                // It is a new item: add it.
	                record =
	                    this._addAfter(new CollectionChangeRecord(item, itemTrackBy), previousRecord, index);
	            }
	        }
	        return record;
	    };
	    /**
	     * This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
	     *
	     * Use case: `[a, a]` => `[b, a, a]`
	     *
	     * If we did not have this check then the insertion of `b` would:
	     *   1) evict first `a`
	     *   2) insert `b` at `0` index.
	     *   3) leave `a` at index `1` as is. <-- this is wrong!
	     *   3) reinsert `a` at index 2. <-- this is wrong!
	     *
	     * The correct behavior is:
	     *   1) evict first `a`
	     *   2) insert `b` at `0` index.
	     *   3) reinsert `a` at index 1.
	     *   3) move `a` at from `1` to `2`.
	     *
	     *
	     * Double check that we have not evicted a duplicate item. We need to check if the item type may
	     * have already been removed:
	     * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
	     * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
	     * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
	     * at the end.
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._verifyReinsertion = function (record, item, itemTrackBy, index) {
	        var reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
	        if (reinsertRecord !== null) {
	            record = this._reinsertAfter(reinsertRecord, record._prev, index);
	        }
	        else if (record.currentIndex != index) {
	            record.currentIndex = index;
	            this._addToMoves(record, index);
	        }
	        return record;
	    };
	    /**
	     * Get rid of any excess {@link CollectionChangeRecord}s from the previous collection
	     *
	     * - `record` The first excess {@link CollectionChangeRecord}.
	     *
	     * @internal
	     */
	    DefaultIterableDiffer.prototype._truncate = function (record) {
	        // Anything after that needs to be removed;
	        while (record !== null) {
	            var nextRecord = record._next;
	            this._addToRemovals(this._unlink(record));
	            record = nextRecord;
	        }
	        if (this._unlinkedRecords !== null) {
	            this._unlinkedRecords.clear();
	        }
	        if (this._additionsTail !== null) {
	            this._additionsTail._nextAdded = null;
	        }
	        if (this._movesTail !== null) {
	            this._movesTail._nextMoved = null;
	        }
	        if (this._itTail !== null) {
	            this._itTail._next = null;
	        }
	        if (this._removalsTail !== null) {
	            this._removalsTail._nextRemoved = null;
	        }
	        if (this._identityChangesTail !== null) {
	            this._identityChangesTail._nextIdentityChange = null;
	        }
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._reinsertAfter = function (record, prevRecord, index) {
	        if (this._unlinkedRecords !== null) {
	            this._unlinkedRecords.remove(record);
	        }
	        var prev = record._prevRemoved;
	        var next = record._nextRemoved;
	        if (prev === null) {
	            this._removalsHead = next;
	        }
	        else {
	            prev._nextRemoved = next;
	        }
	        if (next === null) {
	            this._removalsTail = prev;
	        }
	        else {
	            next._prevRemoved = prev;
	        }
	        this._insertAfter(record, prevRecord, index);
	        this._addToMoves(record, index);
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._moveAfter = function (record, prevRecord, index) {
	        this._unlink(record);
	        this._insertAfter(record, prevRecord, index);
	        this._addToMoves(record, index);
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addAfter = function (record, prevRecord, index) {
	        this._insertAfter(record, prevRecord, index);
	        if (this._additionsTail === null) {
	            // todo(vicb)
	            // assert(this._additionsHead === null);
	            this._additionsTail = this._additionsHead = record;
	        }
	        else {
	            // todo(vicb)
	            // assert(_additionsTail._nextAdded === null);
	            // assert(record._nextAdded === null);
	            this._additionsTail = this._additionsTail._nextAdded = record;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._insertAfter = function (record, prevRecord, index) {
	        // todo(vicb)
	        // assert(record != prevRecord);
	        // assert(record._next === null);
	        // assert(record._prev === null);
	        var next = prevRecord === null ? this._itHead : prevRecord._next;
	        // todo(vicb)
	        // assert(next != record);
	        // assert(prevRecord != record);
	        record._next = next;
	        record._prev = prevRecord;
	        if (next === null) {
	            this._itTail = record;
	        }
	        else {
	            next._prev = record;
	        }
	        if (prevRecord === null) {
	            this._itHead = record;
	        }
	        else {
	            prevRecord._next = record;
	        }
	        if (this._linkedRecords === null) {
	            this._linkedRecords = new _DuplicateMap();
	        }
	        this._linkedRecords.put(record);
	        record.currentIndex = index;
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._remove = function (record) {
	        return this._addToRemovals(this._unlink(record));
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._unlink = function (record) {
	        if (this._linkedRecords !== null) {
	            this._linkedRecords.remove(record);
	        }
	        var prev = record._prev;
	        var next = record._next;
	        // todo(vicb)
	        // assert((record._prev = null) === null);
	        // assert((record._next = null) === null);
	        if (prev === null) {
	            this._itHead = next;
	        }
	        else {
	            prev._next = next;
	        }
	        if (next === null) {
	            this._itTail = prev;
	        }
	        else {
	            next._prev = prev;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addToMoves = function (record, toIndex) {
	        // todo(vicb)
	        // assert(record._nextMoved === null);
	        if (record.previousIndex === toIndex) {
	            return record;
	        }
	        if (this._movesTail === null) {
	            // todo(vicb)
	            // assert(_movesHead === null);
	            this._movesTail = this._movesHead = record;
	        }
	        else {
	            // todo(vicb)
	            // assert(_movesTail._nextMoved === null);
	            this._movesTail = this._movesTail._nextMoved = record;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addToRemovals = function (record) {
	        if (this._unlinkedRecords === null) {
	            this._unlinkedRecords = new _DuplicateMap();
	        }
	        this._unlinkedRecords.put(record);
	        record.currentIndex = null;
	        record._nextRemoved = null;
	        if (this._removalsTail === null) {
	            // todo(vicb)
	            // assert(_removalsHead === null);
	            this._removalsTail = this._removalsHead = record;
	            record._prevRemoved = null;
	        }
	        else {
	            // todo(vicb)
	            // assert(_removalsTail._nextRemoved === null);
	            // assert(record._nextRemoved === null);
	            record._prevRemoved = this._removalsTail;
	            this._removalsTail = this._removalsTail._nextRemoved = record;
	        }
	        return record;
	    };
	    /** @internal */
	    DefaultIterableDiffer.prototype._addIdentityChange = function (record, item) {
	        record.item = item;
	        if (this._identityChangesTail === null) {
	            this._identityChangesTail = this._identityChangesHead = record;
	        }
	        else {
	            this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
	        }
	        return record;
	    };
	    DefaultIterableDiffer.prototype.toString = function () {
	        var list = [];
	        this.forEachItem(function (record) { return list.push(record); });
	        var previous = [];
	        this.forEachPreviousItem(function (record) { return previous.push(record); });
	        var additions = [];
	        this.forEachAddedItem(function (record) { return additions.push(record); });
	        var moves = [];
	        this.forEachMovedItem(function (record) { return moves.push(record); });
	        var removals = [];
	        this.forEachRemovedItem(function (record) { return removals.push(record); });
	        var identityChanges = [];
	        this.forEachIdentityChange(function (record) { return identityChanges.push(record); });
	        return "collection: " + list.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" +
	            "additions: " + additions.join(', ') + "\n" + "moves: " + moves.join(', ') + "\n" +
	            "removals: " + removals.join(', ') + "\n" + "identityChanges: " +
	            identityChanges.join(', ') + "\n";
	    };
	    return DefaultIterableDiffer;
	}());
	exports.DefaultIterableDiffer = DefaultIterableDiffer;
	var CollectionChangeRecord = (function () {
	    function CollectionChangeRecord(item, trackById) {
	        this.item = item;
	        this.trackById = trackById;
	        this.currentIndex = null;
	        this.previousIndex = null;
	        /** @internal */
	        this._nextPrevious = null;
	        /** @internal */
	        this._prev = null;
	        /** @internal */
	        this._next = null;
	        /** @internal */
	        this._prevDup = null;
	        /** @internal */
	        this._nextDup = null;
	        /** @internal */
	        this._prevRemoved = null;
	        /** @internal */
	        this._nextRemoved = null;
	        /** @internal */
	        this._nextAdded = null;
	        /** @internal */
	        this._nextMoved = null;
	        /** @internal */
	        this._nextIdentityChange = null;
	    }
	    CollectionChangeRecord.prototype.toString = function () {
	        return this.previousIndex === this.currentIndex ?
	            lang_1.stringify(this.item) :
	            lang_1.stringify(this.item) + '[' + lang_1.stringify(this.previousIndex) + '->' +
	                lang_1.stringify(this.currentIndex) + ']';
	    };
	    return CollectionChangeRecord;
	}());
	exports.CollectionChangeRecord = CollectionChangeRecord;
	// A linked list of CollectionChangeRecords with the same CollectionChangeRecord.item
	var _DuplicateItemRecordList = (function () {
	    function _DuplicateItemRecordList() {
	        /** @internal */
	        this._head = null;
	        /** @internal */
	        this._tail = null;
	    }
	    /**
	     * Append the record to the list of duplicates.
	     *
	     * Note: by design all records in the list of duplicates hold the same value in record.item.
	     */
	    _DuplicateItemRecordList.prototype.add = function (record) {
	        if (this._head === null) {
	            this._head = this._tail = record;
	            record._nextDup = null;
	            record._prevDup = null;
	        }
	        else {
	            // todo(vicb)
	            // assert(record.item ==  _head.item ||
	            //       record.item is num && record.item.isNaN && _head.item is num && _head.item.isNaN);
	            this._tail._nextDup = record;
	            record._prevDup = this._tail;
	            record._nextDup = null;
	            this._tail = record;
	        }
	    };
	    // Returns a CollectionChangeRecord having CollectionChangeRecord.trackById == trackById and
	    // CollectionChangeRecord.currentIndex >= afterIndex
	    _DuplicateItemRecordList.prototype.get = function (trackById, afterIndex) {
	        var record;
	        for (record = this._head; record !== null; record = record._nextDup) {
	            if ((afterIndex === null || afterIndex < record.currentIndex) &&
	                lang_1.looseIdentical(record.trackById, trackById)) {
	                return record;
	            }
	        }
	        return null;
	    };
	    /**
	     * Remove one {@link CollectionChangeRecord} from the list of duplicates.
	     *
	     * Returns whether the list of duplicates is empty.
	     */
	    _DuplicateItemRecordList.prototype.remove = function (record) {
	        // todo(vicb)
	        // assert(() {
	        //  // verify that the record being removed is in the list.
	        //  for (CollectionChangeRecord cursor = _head; cursor != null; cursor = cursor._nextDup) {
	        //    if (identical(cursor, record)) return true;
	        //  }
	        //  return false;
	        //});
	        var prev = record._prevDup;
	        var next = record._nextDup;
	        if (prev === null) {
	            this._head = next;
	        }
	        else {
	            prev._nextDup = next;
	        }
	        if (next === null) {
	            this._tail = prev;
	        }
	        else {
	            next._prevDup = prev;
	        }
	        return this._head === null;
	    };
	    return _DuplicateItemRecordList;
	}());
	var _DuplicateMap = (function () {
	    function _DuplicateMap() {
	        this.map = new Map();
	    }
	    _DuplicateMap.prototype.put = function (record) {
	        // todo(vicb) handle corner cases
	        var key = lang_1.getMapKey(record.trackById);
	        var duplicates = this.map.get(key);
	        if (!lang_1.isPresent(duplicates)) {
	            duplicates = new _DuplicateItemRecordList();
	            this.map.set(key, duplicates);
	        }
	        duplicates.add(record);
	    };
	    /**
	     * Retrieve the `value` using key. Because the CollectionChangeRecord value may be one which we
	     * have already iterated over, we use the afterIndex to pretend it is not there.
	     *
	     * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
	     * have any more `a`s needs to return the last `a` not the first or second.
	     */
	    _DuplicateMap.prototype.get = function (trackById, afterIndex) {
	        if (afterIndex === void 0) { afterIndex = null; }
	        var key = lang_1.getMapKey(trackById);
	        var recordList = this.map.get(key);
	        return lang_1.isBlank(recordList) ? null : recordList.get(trackById, afterIndex);
	    };
	    /**
	     * Removes a {@link CollectionChangeRecord} from the list of duplicates.
	     *
	     * The list of duplicates also is removed from the map if it gets empty.
	     */
	    _DuplicateMap.prototype.remove = function (record) {
	        var key = lang_1.getMapKey(record.trackById);
	        // todo(vicb)
	        // assert(this.map.containsKey(key));
	        var recordList = this.map.get(key);
	        // Remove the list of duplicates when it gets empty
	        if (recordList.remove(record)) {
	            this.map.delete(key);
	        }
	        return record;
	    };
	    Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
	        get: function () { return this.map.size === 0; },
	        enumerable: true,
	        configurable: true
	    });
	    _DuplicateMap.prototype.clear = function () { this.map.clear(); };
	    _DuplicateMap.prototype.toString = function () { return '_DuplicateMap(' + lang_1.stringify(this.map) + ')'; };
	    return _DuplicateMap;
	}());
	//# sourceMappingURL=default_iterable_differ.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(16);
	var collection_1 = __webpack_require__(19);
	var di_1 = __webpack_require__(13);
	/**
	 * A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
	 * @ts2dart_const
	 */
	var KeyValueDiffers = (function () {
	    /*@ts2dart_const*/
	    function KeyValueDiffers(factories) {
	        this.factories = factories;
	    }
	    KeyValueDiffers.create = function (factories, parent) {
	        if (lang_1.isPresent(parent)) {
	            var copied = collection_1.ListWrapper.clone(parent.factories);
	            factories = factories.concat(copied);
	            return new KeyValueDiffers(factories);
	        }
	        else {
	            return new KeyValueDiffers(factories);
	        }
	    };
	    /**
	     * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
	     * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
	     * {@link KeyValueDiffers} instance.
	     *
	     * The following example shows how to extend an existing list of factories,
	           * which will only be applied to the injector for this component and its children.
	           * This step is all that's required to make a new {@link KeyValueDiffer} available.
	     *
	     * ### Example
	     *
	     * ```
	     * @Component({
	     *   viewProviders: [
	     *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
	     *   ]
	     * })
	     * ```
	     */
	    KeyValueDiffers.extend = function (factories) {
	        return new di_1.Provider(KeyValueDiffers, {
	            useFactory: function (parent) {
	                if (lang_1.isBlank(parent)) {
	                    // Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
	                    // to
	                    // bootstrap(), which would override default pipes instead of extending them.
	                    throw new exceptions_1.BaseException('Cannot extend KeyValueDiffers without a parent injector');
	                }
	                return KeyValueDiffers.create(factories, parent);
	            },
	            // Dependency technically isn't optional, but we can provide a better error message this way.
	            deps: [[KeyValueDiffers, new di_1.SkipSelfMetadata(), new di_1.OptionalMetadata()]]
	        });
	    };
	    KeyValueDiffers.prototype.find = function (kv) {
	        var factory = this.factories.find(function (f) { return f.supports(kv); });
	        if (lang_1.isPresent(factory)) {
	            return factory;
	        }
	        else {
	            throw new exceptions_1.BaseException("Cannot find a differ supporting object '" + kv + "'");
	        }
	    };
	    return KeyValueDiffers;
	}());
	exports.KeyValueDiffers = KeyValueDiffers;
	//# sourceMappingURL=keyvalue_differs.js.map

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(19);
	var lang_1 = __webpack_require__(5);
	var exceptions_1 = __webpack_require__(16);
	/* @ts2dart_const */
	var DefaultKeyValueDifferFactory = (function () {
	    function DefaultKeyValueDifferFactory() {
	    }
	    DefaultKeyValueDifferFactory.prototype.supports = function (obj) { return obj instanceof Map || lang_1.isJsObject(obj); };
	    DefaultKeyValueDifferFactory.prototype.create = function (cdRef) { return new DefaultKeyValueDiffer(); };
	    return DefaultKeyValueDifferFactory;
	}());
	exports.DefaultKeyValueDifferFactory = DefaultKeyValueDifferFactory;
	var DefaultKeyValueDiffer = (function () {
	    function DefaultKeyValueDiffer() {
	        this._records = new Map();
	        this._mapHead = null;
	        this._previousMapHead = null;
	        this._changesHead = null;
	        this._changesTail = null;
	        this._additionsHead = null;
	        this._additionsTail = null;
	        this._removalsHead = null;
	        this._removalsTail = null;
	    }
	    Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
	        get: function () {
	            return this._additionsHead !== null || this._changesHead !== null ||
	                this._removalsHead !== null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DefaultKeyValueDiffer.prototype.forEachItem = function (fn) {
	        var record;
	        for (record = this._mapHead; record !== null; record = record._next) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachPreviousItem = function (fn) {
	        var record;
	        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachChangedItem = function (fn) {
	        var record;
	        for (record = this._changesHead; record !== null; record = record._nextChanged) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachAddedItem = function (fn) {
	        var record;
	        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.forEachRemovedItem = function (fn) {
	        var record;
	        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	            fn(record);
	        }
	    };
	    DefaultKeyValueDiffer.prototype.diff = function (map) {
	        if (lang_1.isBlank(map))
	            map = collection_1.MapWrapper.createFromPairs([]);
	        if (!(map instanceof Map || lang_1.isJsObject(map))) {
	            throw new exceptions_1.BaseException("Error trying to diff '" + map + "'");
	        }
	        if (this.check(map)) {
	            return this;
	        }
	        else {
	            return null;
	        }
	    };
	    DefaultKeyValueDiffer.prototype.onDestroy = function () { };
	    DefaultKeyValueDiffer.prototype.check = function (map) {
	        var _this = this;
	        this._reset();
	        var records = this._records;
	        var oldSeqRecord = this._mapHead;
	        var lastOldSeqRecord = null;
	        var lastNewSeqRecord = null;
	        var seqChanged = false;
	        this._forEach(map, function (value, key) {
	            var newSeqRecord;
	            if (oldSeqRecord !== null && key === oldSeqRecord.key) {
	                newSeqRecord = oldSeqRecord;
	                if (!lang_1.looseIdentical(value, oldSeqRecord.currentValue)) {
	                    oldSeqRecord.previousValue = oldSeqRecord.currentValue;
	                    oldSeqRecord.currentValue = value;
	                    _this._addToChanges(oldSeqRecord);
	                }
	            }
	            else {
	                seqChanged = true;
	                if (oldSeqRecord !== null) {
	                    oldSeqRecord._next = null;
	                    _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
	                    _this._addToRemovals(oldSeqRecord);
	                }
	                if (records.has(key)) {
	                    newSeqRecord = records.get(key);
	                }
	                else {
	                    newSeqRecord = new KeyValueChangeRecord(key);
	                    records.set(key, newSeqRecord);
	                    newSeqRecord.currentValue = value;
	                    _this._addToAdditions(newSeqRecord);
	                }
	            }
	            if (seqChanged) {
	                if (_this._isInRemovals(newSeqRecord)) {
	                    _this._removeFromRemovals(newSeqRecord);
	                }
	                if (lastNewSeqRecord == null) {
	                    _this._mapHead = newSeqRecord;
	                }
	                else {
	                    lastNewSeqRecord._next = newSeqRecord;
	                }
	            }
	            lastOldSeqRecord = oldSeqRecord;
	            lastNewSeqRecord = newSeqRecord;
	            oldSeqRecord = oldSeqRecord === null ? null : oldSeqRecord._next;
	        });
	        this._truncate(lastOldSeqRecord, oldSeqRecord);
	        return this.isDirty;
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._reset = function () {
	        if (this.isDirty) {
	            var record;
	            // Record the state of the mapping
	            for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
	                record._nextPrevious = record._next;
	            }
	            for (record = this._changesHead; record !== null; record = record._nextChanged) {
	                record.previousValue = record.currentValue;
	            }
	            for (record = this._additionsHead; record != null; record = record._nextAdded) {
	                record.previousValue = record.currentValue;
	            }
	            // todo(vicb) once assert is supported
	            // assert(() {
	            //  var r = _changesHead;
	            //  while (r != null) {
	            //    var nextRecord = r._nextChanged;
	            //    r._nextChanged = null;
	            //    r = nextRecord;
	            //  }
	            //
	            //  r = _additionsHead;
	            //  while (r != null) {
	            //    var nextRecord = r._nextAdded;
	            //    r._nextAdded = null;
	            //    r = nextRecord;
	            //  }
	            //
	            //  r = _removalsHead;
	            //  while (r != null) {
	            //    var nextRecord = r._nextRemoved;
	            //    r._nextRemoved = null;
	            //    r = nextRecord;
	            //  }
	            //
	            //  return true;
	            //});
	            this._changesHead = this._changesTail = null;
	            this._additionsHead = this._additionsTail = null;
	            this._removalsHead = this._removalsTail = null;
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._truncate = function (lastRecord, record) {
	        while (record !== null) {
	            if (lastRecord === null) {
	                this._mapHead = null;
	            }
	            else {
	                lastRecord._next = null;
	            }
	            var nextRecord = record._next;
	            // todo(vicb) assert
	            // assert((() {
	            //  record._next = null;
	            //  return true;
	            //}));
	            this._addToRemovals(record);
	            lastRecord = record;
	            record = nextRecord;
	        }
	        for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
	            rec.previousValue = rec.currentValue;
	            rec.currentValue = null;
	            this._records.delete(rec.key);
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._isInRemovals = function (record) {
	        return record === this._removalsHead || record._nextRemoved !== null ||
	            record._prevRemoved !== null;
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._addToRemovals = function (record) {
	        // todo(vicb) assert
	        // assert(record._next == null);
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        // assert(record._nextRemoved == null);
	        // assert(record._prevRemoved == null);
	        if (this._removalsHead === null) {
	            this._removalsHead = this._removalsTail = record;
	        }
	        else {
	            this._removalsTail._nextRemoved = record;
	            record._prevRemoved = this._removalsTail;
	            this._removalsTail = record;
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._removeFromSeq = function (prev, record) {
	        var next = record._next;
	        if (prev === null) {
	            this._mapHead = next;
	        }
	        else {
	            prev._next = next;
	        }
	        // todo(vicb) assert
	        // assert((() {
	        //  record._next = null;
	        //  return true;
	        //})());
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._removeFromRemovals = function (record) {
	        // todo(vicb) assert
	        // assert(record._next == null);
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        var prev = record._prevRemoved;
	        var next = record._nextRemoved;
	        if (prev === null) {
	            this._removalsHead = next;
	        }
	        else {
	            prev._nextRemoved = next;
	        }
	        if (next === null) {
	            this._removalsTail = prev;
	        }
	        else {
	            next._prevRemoved = prev;
	        }
	        record._prevRemoved = record._nextRemoved = null;
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._addToAdditions = function (record) {
	        // todo(vicb): assert
	        // assert(record._next == null);
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        // assert(record._nextRemoved == null);
	        // assert(record._prevRemoved == null);
	        if (this._additionsHead === null) {
	            this._additionsHead = this._additionsTail = record;
	        }
	        else {
	            this._additionsTail._nextAdded = record;
	            this._additionsTail = record;
	        }
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._addToChanges = function (record) {
	        // todo(vicb) assert
	        // assert(record._nextAdded == null);
	        // assert(record._nextChanged == null);
	        // assert(record._nextRemoved == null);
	        // assert(record._prevRemoved == null);
	        if (this._changesHead === null) {
	            this._changesHead = this._changesTail = record;
	        }
	        else {
	            this._changesTail._nextChanged = record;
	            this._changesTail = record;
	        }
	    };
	    DefaultKeyValueDiffer.prototype.toString = function () {
	        var items = [];
	        var previous = [];
	        var changes = [];
	        var additions = [];
	        var removals = [];
	        var record;
	        for (record = this._mapHead; record !== null; record = record._next) {
	            items.push(lang_1.stringify(record));
	        }
	        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	            previous.push(lang_1.stringify(record));
	        }
	        for (record = this._changesHead; record !== null; record = record._nextChanged) {
	            changes.push(lang_1.stringify(record));
	        }
	        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	            additions.push(lang_1.stringify(record));
	        }
	        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	            removals.push(lang_1.stringify(record));
	        }
	        return "map: " + items.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" +
	            "additions: " + additions.join(', ') + "\n" + "changes: " + changes.join(', ') + "\n" +
	            "removals: " + removals.join(', ') + "\n";
	    };
	    /** @internal */
	    DefaultKeyValueDiffer.prototype._forEach = function (obj, fn) {
	        if (obj instanceof Map) {
	            obj.forEach(fn);
	        }
	        else {
	            collection_1.StringMapWrapper.forEach(obj, fn);
	        }
	    };
	    return DefaultKeyValueDiffer;
	}());
	exports.DefaultKeyValueDiffer = DefaultKeyValueDiffer;
	var KeyValueChangeRecord = (function () {
	    function KeyValueChangeRecord(key) {
	        this.key = key;
	        this.previousValue = null;
	        this.currentValue = null;
	        /** @internal */
	        this._nextPrevious = null;
	        /** @internal */
	        this._next = null;
	        /** @internal */
	        this._nextAdded = null;
	        /** @internal */
	        this._nextRemoved = null;
	        /** @internal */
	        this._prevRemoved = null;
	        /** @internal */
	        this._nextChanged = null;
	    }
	    KeyValueChangeRecord.prototype.toString = function () {
	        return lang_1.looseIdentical(this.previousValue, this.currentValue) ?
	            lang_1.stringify(this.key) :
	            (lang_1.stringify(this.key) + '[' + lang_1.stringify(this.previousValue) + '->' +
	                lang_1.stringify(this.currentValue) + ']');
	    };
	    return KeyValueChangeRecord;
	}());
	exports.KeyValueChangeRecord = KeyValueChangeRecord;
	//# sourceMappingURL=default_keyvalue_differ.js.map

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";
	var ChangeDetectorRef = (function () {
	    function ChangeDetectorRef() {
	    }
	    return ChangeDetectorRef;
	}());
	exports.ChangeDetectorRef = ChangeDetectorRef;
	//# sourceMappingURL=change_detector_ref.js.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(19);
	var lang_2 = __webpack_require__(5);
	exports.looseIdentical = lang_2.looseIdentical;
	exports.uninitialized = new Object();
	function devModeEqual(a, b) {
	    if (collection_1.isListLikeIterable(a) && collection_1.isListLikeIterable(b)) {
	        return collection_1.areIterablesEqual(a, b, devModeEqual);
	    }
	    else if (!collection_1.isListLikeIterable(a) && !lang_1.isPrimitive(a) && !collection_1.isListLikeIterable(b) &&
	        !lang_1.isPrimitive(b)) {
	        return true;
	    }
	    else {
	        return lang_1.looseIdentical(a, b);
	    }
	}
	exports.devModeEqual = devModeEqual;
	/**
	 * Indicates that the result of a {@link PipeMetadata} transformation has changed even though the
	 * reference
	 * has not changed.
	 *
	 * The wrapped value will be unwrapped by change detection, and the unwrapped value will be stored.
	 *
	 * Example:
	 *
	 * ```
	 * if (this._latestValue === this._latestReturnedValue) {
	 *    return this._latestReturnedValue;
	 *  } else {
	 *    this._latestReturnedValue = this._latestValue;
	 *    return WrappedValue.wrap(this._latestValue); // this will force update
	 *  }
	 * ```
	 */
	var WrappedValue = (function () {
	    function WrappedValue(wrapped) {
	        this.wrapped = wrapped;
	    }
	    WrappedValue.wrap = function (value) { return new WrappedValue(value); };
	    return WrappedValue;
	}());
	exports.WrappedValue = WrappedValue;
	/**
	 * Helper class for unwrapping WrappedValue s
	 */
	var ValueUnwrapper = (function () {
	    function ValueUnwrapper() {
	        this.hasWrappedValue = false;
	    }
	    ValueUnwrapper.prototype.unwrap = function (value) {
	        if (value instanceof WrappedValue) {
	            this.hasWrappedValue = true;
	            return value.wrapped;
	        }
	        return value;
	    };
	    ValueUnwrapper.prototype.reset = function () { this.hasWrappedValue = false; };
	    return ValueUnwrapper;
	}());
	exports.ValueUnwrapper = ValueUnwrapper;
	/**
	 * Represents a basic change from a previous to a new value.
	 */
	var SimpleChange = (function () {
	    function SimpleChange(previousValue, currentValue) {
	        this.previousValue = previousValue;
	        this.currentValue = currentValue;
	    }
	    /**
	     * Check whether the new value is the first value assigned.
	     */
	    SimpleChange.prototype.isFirstChange = function () { return this.previousValue === exports.uninitialized; };
	    return SimpleChange;
	}());
	exports.SimpleChange = SimpleChange;
	//# sourceMappingURL=change_detection_util.js.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var exceptions_1 = __webpack_require__(16);
	var RenderComponentType = (function () {
	    function RenderComponentType(id, templateUrl, slotCount, encapsulation, styles) {
	        this.id = id;
	        this.templateUrl = templateUrl;
	        this.slotCount = slotCount;
	        this.encapsulation = encapsulation;
	        this.styles = styles;
	    }
	    return RenderComponentType;
	}());
	exports.RenderComponentType = RenderComponentType;
	var RenderDebugInfo = (function () {
	    function RenderDebugInfo() {
	    }
	    Object.defineProperty(RenderDebugInfo.prototype, "injector", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "component", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "providerTokens", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "references", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "context", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RenderDebugInfo.prototype, "source", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return RenderDebugInfo;
	}());
	exports.RenderDebugInfo = RenderDebugInfo;
	var Renderer = (function () {
	    function Renderer() {
	    }
	    return Renderer;
	}());
	exports.Renderer = Renderer;
	/**
	 * Injectable service that provides a low-level interface for modifying the UI.
	 *
	 * Use this service to bypass Angular's templating and make custom UI changes that can't be
	 * expressed declaratively. For example if you need to set a property or an attribute whose name is
	 * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
	 * respectively.
	 *
	 * If you are implementing a custom renderer, you must implement this interface.
	 *
	 * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
	 */
	var RootRenderer = (function () {
	    function RootRenderer() {
	    }
	    return RootRenderer;
	}());
	exports.RootRenderer = RootRenderer;
	//# sourceMappingURL=api.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var decorators_1 = __webpack_require__(14);
	// Note: Need to rename warn as in Dart
	// class members and imports can't use the same name.
	var _warnImpl = lang_1.warn;
	var Console = (function () {
	    function Console() {
	    }
	    Console.prototype.log = function (message) { lang_1.print(message); };
	    // Note: for reporting errors use `DOM.logError()` as it is platform specific
	    Console.prototype.warn = function (message) { _warnImpl(message); };
	    Console.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    return Console;
	}());
	exports.Console = Console;
	//# sourceMappingURL=console.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for Zone
	var ng_zone_1 = __webpack_require__(32);
	exports.NgZone = ng_zone_1.NgZone;
	exports.NgZoneError = ng_zone_1.NgZoneError;
	//# sourceMappingURL=zone.js.map

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for render
	var api_1 = __webpack_require__(77);
	exports.RootRenderer = api_1.RootRenderer;
	exports.Renderer = api_1.Renderer;
	exports.RenderComponentType = api_1.RenderComponentType;
	//# sourceMappingURL=render.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Public API for compiler
	var component_resolver_1 = __webpack_require__(59);
	exports.ComponentResolver = component_resolver_1.ComponentResolver;
	var query_list_1 = __webpack_require__(82);
	exports.QueryList = query_list_1.QueryList;
	var dynamic_component_loader_1 = __webpack_require__(83);
	exports.DynamicComponentLoader = dynamic_component_loader_1.DynamicComponentLoader;
	var element_ref_1 = __webpack_require__(65);
	exports.ElementRef = element_ref_1.ElementRef;
	var template_ref_1 = __webpack_require__(84);
	exports.TemplateRef = template_ref_1.TemplateRef;
	var view_ref_1 = __webpack_require__(85);
	exports.EmbeddedViewRef = view_ref_1.EmbeddedViewRef;
	exports.ViewRef = view_ref_1.ViewRef;
	var view_container_ref_1 = __webpack_require__(66);
	exports.ViewContainerRef = view_container_ref_1.ViewContainerRef;
	var component_factory_1 = __webpack_require__(60);
	exports.ComponentRef = component_factory_1.ComponentRef;
	exports.ComponentFactory = component_factory_1.ComponentFactory;
	var exceptions_1 = __webpack_require__(69);
	exports.ExpressionChangedAfterItHasBeenCheckedException = exceptions_1.ExpressionChangedAfterItHasBeenCheckedException;
	//# sourceMappingURL=linker.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collection_1 = __webpack_require__(19);
	var lang_1 = __webpack_require__(5);
	var async_1 = __webpack_require__(33);
	/**
	 * An unmodifiable list of items that Angular keeps up to date when the state
	 * of the application changes.
	 *
	 * The type of object that {@link QueryMetadata} and {@link ViewQueryMetadata} provide.
	 *
	 * Implements an iterable interface, therefore it can be used in both ES6
	 * javascript `for (var i of items)` loops as well as in Angular templates with
	 * `*ngFor="let i of myList"`.
	 *
	 * Changes can be observed by subscribing to the changes `Observable`.
	 *
	 * NOTE: In the future this class will implement an `Observable` interface.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/RX8sJnQYl9FWuSCWme5z?p=preview))
	 * ```typescript
	 * @Component({...})
	 * class Container {
	 *   constructor(@Query(Item) items: QueryList<Item>) {
	 *     items.changes.subscribe(_ => console.log(items.length));
	 *   }
	 * }
	 * ```
	 */
	var QueryList = (function () {
	    function QueryList() {
	        this._dirty = true;
	        this._results = [];
	        this._emitter = new async_1.EventEmitter();
	    }
	    Object.defineProperty(QueryList.prototype, "changes", {
	        get: function () { return this._emitter; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryList.prototype, "length", {
	        get: function () { return this._results.length; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryList.prototype, "first", {
	        get: function () { return collection_1.ListWrapper.first(this._results); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryList.prototype, "last", {
	        get: function () { return collection_1.ListWrapper.last(this._results); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * returns a new array with the passed in function applied to each element.
	     */
	    QueryList.prototype.map = function (fn) { return this._results.map(fn); };
	    /**
	     * returns a filtered array.
	     */
	    QueryList.prototype.filter = function (fn) { return this._results.filter(fn); };
	    /**
	     * returns a reduced value.
	     */
	    QueryList.prototype.reduce = function (fn, init) { return this._results.reduce(fn, init); };
	    /**
	     * executes function for each element in a query.
	     */
	    QueryList.prototype.forEach = function (fn) { this._results.forEach(fn); };
	    /**
	     * converts QueryList into an array
	     */
	    QueryList.prototype.toArray = function () { return collection_1.ListWrapper.clone(this._results); };
	    QueryList.prototype[lang_1.getSymbolIterator()] = function () { return this._results[lang_1.getSymbolIterator()](); };
	    QueryList.prototype.toString = function () { return this._results.toString(); };
	    /**
	     * @internal
	     */
	    QueryList.prototype.reset = function (res) {
	        this._results = collection_1.ListWrapper.flatten(res);
	        this._dirty = false;
	    };
	    /** @internal */
	    QueryList.prototype.notifyOnChanges = function () { this._emitter.emit(this); };
	    /** internal */
	    QueryList.prototype.setDirty = function () { this._dirty = true; };
	    Object.defineProperty(QueryList.prototype, "dirty", {
	        /** internal */
	        get: function () { return this._dirty; },
	        enumerable: true,
	        configurable: true
	    });
	    return QueryList;
	}());
	exports.QueryList = QueryList;
	//# sourceMappingURL=query_list.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var component_resolver_1 = __webpack_require__(59);
	var lang_1 = __webpack_require__(5);
	var reflective_injector_1 = __webpack_require__(20);
	var decorators_1 = __webpack_require__(14);
	/**
	 * Use ComponentResolver and ViewContainerRef directly.
	 *
	 * @deprecated
	 */
	var DynamicComponentLoader = (function () {
	    function DynamicComponentLoader() {
	    }
	    return DynamicComponentLoader;
	}());
	exports.DynamicComponentLoader = DynamicComponentLoader;
	var DynamicComponentLoader_ = (function (_super) {
	    __extends(DynamicComponentLoader_, _super);
	    function DynamicComponentLoader_(_compiler) {
	        _super.call(this);
	        this._compiler = _compiler;
	    }
	    DynamicComponentLoader_.prototype.loadAsRoot = function (type, overrideSelectorOrNode, injector, onDispose, projectableNodes) {
	        return this._compiler.resolveComponent(type).then(function (componentFactory) {
	            var componentRef = componentFactory.create(injector, projectableNodes, lang_1.isPresent(overrideSelectorOrNode) ? overrideSelectorOrNode : componentFactory.selector);
	            if (lang_1.isPresent(onDispose)) {
	                componentRef.onDestroy(onDispose);
	            }
	            return componentRef;
	        });
	    };
	    DynamicComponentLoader_.prototype.loadNextToLocation = function (type, location, providers, projectableNodes) {
	        if (providers === void 0) { providers = null; }
	        if (projectableNodes === void 0) { projectableNodes = null; }
	        return this._compiler.resolveComponent(type).then(function (componentFactory) {
	            var contextInjector = location.parentInjector;
	            var childInjector = lang_1.isPresent(providers) && providers.length > 0 ?
	                reflective_injector_1.ReflectiveInjector.fromResolvedProviders(providers, contextInjector) :
	                contextInjector;
	            return location.createComponent(componentFactory, location.length, childInjector, projectableNodes);
	        });
	    };
	    DynamicComponentLoader_.decorators = [
	        { type: decorators_1.Injectable },
	    ];
	    DynamicComponentLoader_.ctorParameters = [
	        { type: component_resolver_1.ComponentResolver, },
	    ];
	    return DynamicComponentLoader_;
	}(DynamicComponentLoader));
	exports.DynamicComponentLoader_ = DynamicComponentLoader_;
	//# sourceMappingURL=dynamic_component_loader.js.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(5);
	var EMPTY_CONTEXT = new Object();
	/**
	 * Represents an Embedded Template that can be used to instantiate Embedded Views.
	 *
	 * You can access a `TemplateRef`, in two ways. Via a directive placed on a `<template>` element (or
	 * directive prefixed with `*`) and have the `TemplateRef` for this Embedded View injected into the
	 * constructor of the directive using the `TemplateRef` Token. Alternatively you can query for the
	 * `TemplateRef` from a Component or a Directive via {@link Query}.
	 *
	 * To instantiate Embedded Views based on a Template, use
	 * {@link ViewContainerRef#createEmbeddedView}, which will create the View and attach it to the
	 * View Container.
	 */
	var TemplateRef = (function () {
	    function TemplateRef() {
	    }
	    Object.defineProperty(TemplateRef.prototype, "elementRef", {
	        /**
	         * The location in the View where the Embedded View logically belongs to.
	         *
	         * The data-binding and injection contexts of Embedded Views created from this `TemplateRef`
	         * inherit from the contexts of this location.
	         *
	         * Typically new Embedded Views are attached to the View Container of this location, but in
	         * advanced use-cases, the View can be attached to a different container while keeping the
	         * data-binding and injection context from the original location.
	         *
	         */
	        // TODO(i): rename to anchor or location
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return TemplateRef;
	}());
	exports.TemplateRef = TemplateRef;
	var TemplateRef_ = (function (_super) {
	    __extends(TemplateRef_, _super);
	    function TemplateRef_(_appElement, _viewFactory) {
	        _super.call(this);
	        this._appElement = _appElement;
	        this._viewFactory = _viewFactory;
	    }
	    TemplateRef_.prototype.createEmbeddedView = function (context) {
	        var view = this._viewFactory(this._appElement.parentView.viewUtils, this._appElement.parentInjector, this._appElement);
	        if (lang_1.isBlank(context)) {
	            context = EMPTY_CONTEXT;
	        }
	        view.create(context, null, null);
	        return view.ref;
	    };
	    Object.defineProperty(TemplateRef_.prototype, "elementRef", {
	        get: function () { return this._appElement.elementRef; },
	        enumerable: true,
	        configurable: true
	    });
	    return TemplateRef_;
	}(TemplateRef));
	exports.TemplateRef_ = TemplateRef_;
	//# sourceMappingURL=template_ref.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(16);
	var constants_1 = __webpack_require__(9);
	var ViewRef = (function () {
	    function ViewRef() {
	    }
	    Object.defineProperty(ViewRef.prototype, "destroyed", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return ViewRef;
	}());
	exports.ViewRef = ViewRef;
	/**
	 * Represents an Angular View.
	 *
	 * <!-- TODO: move the next two paragraphs to the dev guide -->
	 * A View is a fundamental building block of the application UI. It is the smallest grouping of
	 * Elements which are created and destroyed together.
	 *
	 * Properties of elements in a View can change, but the structure (number and order) of elements in
	 * a View cannot. Changing the structure of Elements can only be done by inserting, moving or
	 * removing nested Views via a {@link ViewContainerRef}. Each View can contain many View Containers.
	 * <!-- /TODO -->
	 *
	 * ### Example
	 *
	 * Given this template...
	 *
	 * ```
	 * Count: {{items.length}}
	 * <ul>
	 *   <li *ngFor="let  item of items">{{item}}</li>
	 * </ul>
	 * ```
	 *
	 * ... we have two {@link TemplateRef}s:
	 *
	 * Outer {@link TemplateRef}:
	 * ```
	 * Count: {{items.length}}
	 * <ul>
	 *   <template ngFor let-item [ngForOf]="items"></template>
	 * </ul>
	 * ```
	 *
	 * Inner {@link TemplateRef}:
	 * ```
	 *   <li>{{item}}</li>
	 * ```
	 *
	 * Notice that the original template is broken down into two separate {@link TemplateRef}s.
	 *
	 * The outer/inner {@link TemplateRef}s are then assembled into views like so:
	 *
	 * ```
	 * <!-- ViewRef: outer-0 -->
	 * Count: 2
	 * <ul>
	 *   <template view-container-ref></template>
	 *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
	 *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
	 * </ul>
	 * <!-- /ViewRef: outer-0 -->
	 * ```
	 */
	var EmbeddedViewRef = (function (_super) {
	    __extends(EmbeddedViewRef, _super);
	    function EmbeddedViewRef() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(EmbeddedViewRef.prototype, "context", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return EmbeddedViewRef;
	}(ViewRef));
	exports.EmbeddedViewRef = EmbeddedViewRef;
	var ViewRef_ = (function () {
	    function ViewRef_(_view) {
	        this._view = _view;
	        this._view = _view;
	    }
	    Object.defineProperty(ViewRef_.prototype, "internalView", {
	        get: function () { return this._view; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewRef_.prototype, "rootNodes", {
	        get: function () { return this._view.flatRootNodes; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewRef_.prototype, "context", {
	        get: function () { return this._view.context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewRef_.prototype, "destroyed", {
	        get: function () { return this._view.destroyed; },
	        enumerable: true,
	        configurable: true
	    });
	    ViewRef_.prototype.markForCheck = function () { this._view.markPathToRootAsCheckOnce(); };
	    ViewRef_.prototype.detach = function () { this._view.cdMode = constants_1.ChangeDetectionStrategy.Detached; };
	    ViewRef_.prototype.detectChanges = function () { this._view.detectChanges(false); };
	    ViewRef_.prototype.checkNoChanges = function () { this._view.detectChanges(true); };
	    ViewRef_.prototype.reattach = function () {
	        this._view.cdMode = constants_1.ChangeDetectionStrategy.CheckAlways;
	        this.markForCheck();
	    };
	    ViewRef_.prototype.onDestroy = function (callback) { this._view.disposables.push(callback); };
	    ViewRef_.prototype.destroy = function () { this._view.destroy(); };
	    return ViewRef_;
	}());
	exports.ViewRef_ = ViewRef_;
	//# sourceMappingURL=view_ref.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(19);
	var EventListener = (function () {
	    function EventListener(name, callback) {
	        this.name = name;
	        this.callback = callback;
	    }
	    ;
	    return EventListener;
	}());
	exports.EventListener = EventListener;
	var DebugNode = (function () {
	    function DebugNode(nativeNode, parent, _debugInfo) {
	        this._debugInfo = _debugInfo;
	        this.nativeNode = nativeNode;
	        if (lang_1.isPresent(parent) && parent instanceof DebugElement) {
	            parent.addChild(this);
	        }
	        else {
	            this.parent = null;
	        }
	        this.listeners = [];
	    }
	    Object.defineProperty(DebugNode.prototype, "injector", {
	        get: function () { return lang_1.isPresent(this._debugInfo) ? this._debugInfo.injector : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "componentInstance", {
	        get: function () {
	            return lang_1.isPresent(this._debugInfo) ? this._debugInfo.component : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "context", {
	        get: function () { return lang_1.isPresent(this._debugInfo) ? this._debugInfo.context : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "references", {
	        get: function () {
	            return lang_1.isPresent(this._debugInfo) ? this._debugInfo.references : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "providerTokens", {
	        get: function () {
	            return lang_1.isPresent(this._debugInfo) ? this._debugInfo.providerTokens : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugNode.prototype, "source", {
	        get: function () { return lang_1.isPresent(this._debugInfo) ? this._debugInfo.source : null; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Use injector.get(token) instead.
	     *
	     * @deprecated
	     */
	    DebugNode.prototype.inject = function (token) { return this.injector.get(token); };
	    return DebugNode;
	}());
	exports.DebugNode = DebugNode;
	var DebugElement = (function (_super) {
	    __extends(DebugElement, _super);
	    function DebugElement(nativeNode, parent, _debugInfo) {
	        _super.call(this, nativeNode, parent, _debugInfo);
	        this.properties = {};
	        this.attributes = {};
	        this.childNodes = [];
	        this.nativeElement = nativeNode;
	    }
	    DebugElement.prototype.addChild = function (child) {
	        if (lang_1.isPresent(child)) {
	            this.childNodes.push(child);
	            child.parent = this;
	        }
	    };
	    DebugElement.prototype.removeChild = function (child) {
	        var childIndex = this.childNodes.indexOf(child);
	        if (childIndex !== -1) {
	            child.parent = null;
	            this.childNodes.splice(childIndex, 1);
	        }
	    };
	    DebugElement.prototype.insertChildrenAfter = function (child, newChildren) {
	        var siblingIndex = this.childNodes.indexOf(child);
	        if (siblingIndex !== -1) {
	            var previousChildren = this.childNodes.slice(0, siblingIndex + 1);
	            var nextChildren = this.childNodes.slice(siblingIndex + 1);
	            this.childNodes =
	                collection_1.ListWrapper.concat(collection_1.ListWrapper.concat(previousChildren, newChildren), nextChildren);
	            for (var i = 0; i < newChildren.length; ++i) {
	                var newChild = newChildren[i];
	                if (lang_1.isPresent(newChild.parent)) {
	                    newChild.parent.removeChild(newChild);
	                }
	                newChild.parent = this;
	            }
	        }
	    };
	    DebugElement.prototype.query = function (predicate) {
	        var results = this.queryAll(predicate);
	        return results.length > 0 ? results[0] : null;
	    };
	    DebugElement.prototype.queryAll = function (predicate) {
	        var matches = [];
	        _queryElementChildren(this, predicate, matches);
	        return matches;
	    };
	    DebugElement.prototype.queryAllNodes = function (predicate) {
	        var matches = [];
	        _queryNodeChildren(this, predicate, matches);
	        return matches;
	    };
	    Object.defineProperty(DebugElement.prototype, "children", {
	        get: function () {
	            var children = [];
	            this.childNodes.forEach(function (node) {
	                if (node instanceof DebugElement) {
	                    children.push(node);
	                }
	            });
	            return children;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DebugElement.prototype.triggerEventHandler = function (eventName, eventObj) {
	        this.listeners.forEach(function (listener) {
	            if (listener.name == eventName) {
	                listener.callback(eventObj);
	            }
	        });
	    };
	    return DebugElement;
	}(DebugNode));
	exports.DebugElement = DebugElement;
	function asNativeElements(debugEls) {
	    return debugEls.map(function (el) { return el.nativeElement; });
	}
	exports.asNativeElements = asNativeElements;
	function _queryElementChildren(element, predicate, matches) {
	    element.childNodes.forEach(function (node) {
	        if (node instanceof DebugElement) {
	            if (predicate(node)) {
	                matches.push(node);
	            }
	            _queryElementChildren(node, predicate, matches);
	        }
	    });
	}
	function _queryNodeChildren(parentNode, predicate, matches) {
	    if (parentNode instanceof DebugElement) {
	        parentNode.childNodes.forEach(function (node) {
	            if (predicate(node)) {
	                matches.push(node);
	            }
	            if (node instanceof DebugElement) {
	                _queryNodeChildren(node, predicate, matches);
	            }
	        });
	    }
	}
	// Need to keep the nodes in a global Map so that multiple angular apps are supported.
	var _nativeNodeToDebugNode = new Map();
	function getDebugNode(nativeNode) {
	    return _nativeNodeToDebugNode.get(nativeNode);
	}
	exports.getDebugNode = getDebugNode;
	function getAllDebugNodes() {
	    return collection_1.MapWrapper.values(_nativeNodeToDebugNode);
	}
	exports.getAllDebugNodes = getAllDebugNodes;
	function indexDebugNode(node) {
	    _nativeNodeToDebugNode.set(node.nativeNode, node);
	}
	exports.indexDebugNode = indexDebugNode;
	function removeDebugNodeFromIndex(node) {
	    _nativeNodeToDebugNode.delete(node.nativeNode);
	}
	exports.removeDebugNodeFromIndex = removeDebugNodeFromIndex;
	//# sourceMappingURL=debug_node.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	* @module
	* @description
	* Change detection enables data binding in Angular.
	*/
	var change_detection_1 = __webpack_require__(70);
	exports.ChangeDetectionStrategy = change_detection_1.ChangeDetectionStrategy;
	exports.ChangeDetectorRef = change_detection_1.ChangeDetectorRef;
	exports.WrappedValue = change_detection_1.WrappedValue;
	exports.SimpleChange = change_detection_1.SimpleChange;
	exports.DefaultIterableDiffer = change_detection_1.DefaultIterableDiffer;
	exports.IterableDiffers = change_detection_1.IterableDiffers;
	exports.KeyValueDiffers = change_detection_1.KeyValueDiffers;
	exports.CollectionChangeRecord = change_detection_1.CollectionChangeRecord;
	exports.KeyValueChangeRecord = change_detection_1.KeyValueChangeRecord;
	//# sourceMappingURL=change_detection.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var di_1 = __webpack_require__(13);
	/**
	 * A token that can be provided when bootstraping an application to make an array of directives
	 * available in every component of the application.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {PLATFORM_DIRECTIVES} from '@angular/core';
	 * import {OtherDirective} from './myDirectives';
	 *
	 * @Component({
	 *   selector: 'my-component',
	 *   template: `
	 *     <!-- can use other directive even though the component does not list it in `directives` -->
	 *     <other-directive></other-directive>
	 *   `
	 * })
	 * export class MyComponent {
	 *   ...
	 * }
	 *
	 * bootstrap(MyComponent, [provide(PLATFORM_DIRECTIVES, {useValue: [OtherDirective], multi:true})]);
	 * ```
	 */
	exports.PLATFORM_DIRECTIVES = 
	/*@ts2dart_const*/ new di_1.OpaqueToken("Platform Directives");
	/**
	 * A token that can be provided when bootstraping an application to make an array of pipes
	 * available in every component of the application.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {PLATFORM_PIPES} from '@angular/core';
	 * import {OtherPipe} from './myPipe';
	 *
	 * @Component({
	 *   selector: 'my-component',
	 *   template: `
	 *     {{123 | other-pipe}}
	 *   `
	 * })
	 * export class MyComponent {
	 *   ...
	 * }
	 *
	 * bootstrap(MyComponent, [provide(PLATFORM_PIPES, {useValue: [OtherPipe], multi:true})]);
	 * ```
	 */
	exports.PLATFORM_PIPES = new di_1.OpaqueToken("Platform Pipes");
	//# sourceMappingURL=platform_directives_and_pipes.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var console_1 = __webpack_require__(78);
	var reflection_1 = __webpack_require__(22);
	var reflector_reader_1 = __webpack_require__(24);
	var testability_1 = __webpack_require__(58);
	var application_ref_1 = __webpack_require__(31);
	function _reflector() {
	    return reflection_1.reflector;
	}
	var __unused; // prevent missing use Dart warning.
	/**
	 * A default set of providers which should be included in any Angular platform.
	 */
	exports.PLATFORM_COMMON_PROVIDERS = [
	    application_ref_1.PLATFORM_CORE_PROVIDERS,
	    /*@ts2dart_Provider*/ { provide: reflection_1.Reflector, useFactory: _reflector, deps: [] },
	    /*@ts2dart_Provider*/ { provide: reflector_reader_1.ReflectorReader, useExisting: reflection_1.Reflector },
	    testability_1.TestabilityRegistry,
	    console_1.Console
	];
	//# sourceMappingURL=platform_common_providers.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var application_tokens_1 = __webpack_require__(57);
	var application_ref_1 = __webpack_require__(31);
	var change_detection_1 = __webpack_require__(70);
	var view_utils_1 = __webpack_require__(61);
	var component_resolver_1 = __webpack_require__(59);
	var dynamic_component_loader_1 = __webpack_require__(83);
	var __unused; // avoid unused import when Type union types are erased
	/**
	 * A default set of providers which should be included in any Angular
	 * application, regardless of the platform it runs onto.
	 */
	exports.APPLICATION_COMMON_PROVIDERS = 
	/*@ts2dart_const*/ [
	    application_ref_1.APPLICATION_CORE_PROVIDERS,
	    /* @ts2dart_Provider */ { provide: component_resolver_1.ComponentResolver, useClass: component_resolver_1.ReflectorComponentResolver },
	    application_tokens_1.APP_ID_RANDOM_PROVIDER,
	    view_utils_1.ViewUtils,
	    /* @ts2dart_Provider */ { provide: change_detection_1.IterableDiffers, useValue: change_detection_1.defaultIterableDiffers },
	    /* @ts2dart_Provider */ { provide: change_detection_1.KeyValueDiffers, useValue: change_detection_1.defaultKeyValueDiffers },
	    /* @ts2dart_Provider */ { provide: dynamic_component_loader_1.DynamicComponentLoader, useClass: dynamic_component_loader_1.DynamicComponentLoader_ }
	];
	//# sourceMappingURL=application_common_providers.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var constants = __webpack_require__(9);
	var security = __webpack_require__(62);
	var reflective_provider = __webpack_require__(21);
	var lifecycle_hooks = __webpack_require__(92);
	var reflector_reader = __webpack_require__(24);
	var component_resolver = __webpack_require__(59);
	var element = __webpack_require__(63);
	var view = __webpack_require__(93);
	var view_type = __webpack_require__(64);
	var view_utils = __webpack_require__(61);
	var metadata_view = __webpack_require__(10);
	var debug_context = __webpack_require__(94);
	var change_detection_util = __webpack_require__(76);
	var api = __webpack_require__(77);
	var template_ref = __webpack_require__(84);
	var wtf_init = __webpack_require__(96);
	var reflection_capabilities = __webpack_require__(25);
	var decorators = __webpack_require__(11);
	var debug = __webpack_require__(97);
	var provider_util = __webpack_require__(29);
	var console = __webpack_require__(78);
	exports.__core_private__ = {
	    isDefaultChangeDetectionStrategy: constants.isDefaultChangeDetectionStrategy,
	    ChangeDetectorState: constants.ChangeDetectorState,
	    CHANGE_DETECTION_STRATEGY_VALUES: constants.CHANGE_DETECTION_STRATEGY_VALUES,
	    constructDependencies: reflective_provider.constructDependencies,
	    LifecycleHooks: lifecycle_hooks.LifecycleHooks,
	    LIFECYCLE_HOOKS_VALUES: lifecycle_hooks.LIFECYCLE_HOOKS_VALUES,
	    ReflectorReader: reflector_reader.ReflectorReader,
	    ReflectorComponentResolver: component_resolver.ReflectorComponentResolver,
	    AppElement: element.AppElement,
	    AppView: view.AppView,
	    DebugAppView: view.DebugAppView,
	    ViewType: view_type.ViewType,
	    MAX_INTERPOLATION_VALUES: view_utils.MAX_INTERPOLATION_VALUES,
	    checkBinding: view_utils.checkBinding,
	    flattenNestedViewRenderNodes: view_utils.flattenNestedViewRenderNodes,
	    interpolate: view_utils.interpolate,
	    ViewUtils: view_utils.ViewUtils,
	    VIEW_ENCAPSULATION_VALUES: metadata_view.VIEW_ENCAPSULATION_VALUES,
	    DebugContext: debug_context.DebugContext,
	    StaticNodeDebugInfo: debug_context.StaticNodeDebugInfo,
	    devModeEqual: change_detection_util.devModeEqual,
	    uninitialized: change_detection_util.uninitialized,
	    ValueUnwrapper: change_detection_util.ValueUnwrapper,
	    RenderDebugInfo: api.RenderDebugInfo,
	    SecurityContext: security.SecurityContext,
	    SanitizationService: security.SanitizationService,
	    TemplateRef_: template_ref.TemplateRef_,
	    wtfInit: wtf_init.wtfInit,
	    ReflectionCapabilities: reflection_capabilities.ReflectionCapabilities,
	    makeDecorator: decorators.makeDecorator,
	    DebugDomRootRenderer: debug.DebugDomRootRenderer,
	    createProvider: provider_util.createProvider,
	    isProviderLiteral: provider_util.isProviderLiteral,
	    EMPTY_ARRAY: view_utils.EMPTY_ARRAY,
	    EMPTY_MAP: view_utils.EMPTY_MAP,
	    pureProxy1: view_utils.pureProxy1,
	    pureProxy2: view_utils.pureProxy2,
	    pureProxy3: view_utils.pureProxy3,
	    pureProxy4: view_utils.pureProxy4,
	    pureProxy5: view_utils.pureProxy5,
	    pureProxy6: view_utils.pureProxy6,
	    pureProxy7: view_utils.pureProxy7,
	    pureProxy8: view_utils.pureProxy8,
	    pureProxy9: view_utils.pureProxy9,
	    pureProxy10: view_utils.pureProxy10,
	    castByValue: view_utils.castByValue,
	    Console: console.Console,
	};
	//# sourceMappingURL=private_export.js.map

/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";
	(function (LifecycleHooks) {
	    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
	    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
	    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
	    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
	    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
	    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
	    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
	    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
	})(exports.LifecycleHooks || (exports.LifecycleHooks = {}));
	var LifecycleHooks = exports.LifecycleHooks;
	/**
	 * @internal
	 */
	exports.LIFECYCLE_HOOKS_VALUES = [
	    LifecycleHooks.OnInit,
	    LifecycleHooks.OnDestroy,
	    LifecycleHooks.DoCheck,
	    LifecycleHooks.OnChanges,
	    LifecycleHooks.AfterContentInit,
	    LifecycleHooks.AfterContentChecked,
	    LifecycleHooks.AfterViewInit,
	    LifecycleHooks.AfterViewChecked
	];
	//# sourceMappingURL=lifecycle_hooks.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(19);
	var element_1 = __webpack_require__(63);
	var lang_1 = __webpack_require__(5);
	var async_1 = __webpack_require__(33);
	var view_ref_1 = __webpack_require__(85);
	var view_type_1 = __webpack_require__(64);
	var view_utils_1 = __webpack_require__(61);
	var change_detection_1 = __webpack_require__(70);
	var profile_1 = __webpack_require__(67);
	var exceptions_1 = __webpack_require__(69);
	var debug_context_1 = __webpack_require__(94);
	var element_injector_1 = __webpack_require__(95);
	var _scope_check = profile_1.wtfCreateScope("AppView#check(ascii id)");
	/**
	 * Cost of making objects: http://jsperf.com/instantiate-size-of-object
	 *
	 */
	var AppView = (function () {
	    function AppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode) {
	        this.clazz = clazz;
	        this.componentType = componentType;
	        this.type = type;
	        this.viewUtils = viewUtils;
	        this.parentInjector = parentInjector;
	        this.declarationAppElement = declarationAppElement;
	        this.cdMode = cdMode;
	        this.contentChildren = [];
	        this.viewChildren = [];
	        this.viewContainerElement = null;
	        // The names of the below fields must be kept in sync with codegen_name_util.ts or
	        // change detection will fail.
	        this.cdState = change_detection_1.ChangeDetectorState.NeverChecked;
	        this.destroyed = false;
	        this.ref = new view_ref_1.ViewRef_(this);
	        if (type === view_type_1.ViewType.COMPONENT || type === view_type_1.ViewType.HOST) {
	            this.renderer = viewUtils.renderComponent(componentType);
	        }
	        else {
	            this.renderer = declarationAppElement.parentView.renderer;
	        }
	    }
	    AppView.prototype.create = function (context, givenProjectableNodes, rootSelectorOrNode) {
	        this.context = context;
	        var projectableNodes;
	        switch (this.type) {
	            case view_type_1.ViewType.COMPONENT:
	                projectableNodes = view_utils_1.ensureSlotCount(givenProjectableNodes, this.componentType.slotCount);
	                break;
	            case view_type_1.ViewType.EMBEDDED:
	                projectableNodes = this.declarationAppElement.parentView.projectableNodes;
	                break;
	            case view_type_1.ViewType.HOST:
	                // Note: Don't ensure the slot count for the projectableNodes as we store
	                // them only for the contained component view (which will later check the slot count...)
	                projectableNodes = givenProjectableNodes;
	                break;
	        }
	        this._hasExternalHostElement = lang_1.isPresent(rootSelectorOrNode);
	        this.projectableNodes = projectableNodes;
	        return this.createInternal(rootSelectorOrNode);
	    };
	    /**
	     * Overwritten by implementations.
	     * Returns the AppElement for the host element for ViewType.HOST.
	     */
	    AppView.prototype.createInternal = function (rootSelectorOrNode) { return null; };
	    AppView.prototype.init = function (rootNodesOrAppElements, allNodes, disposables, subscriptions) {
	        this.rootNodesOrAppElements = rootNodesOrAppElements;
	        this.allNodes = allNodes;
	        this.disposables = disposables;
	        this.subscriptions = subscriptions;
	        if (this.type === view_type_1.ViewType.COMPONENT) {
	            // Note: the render nodes have been attached to their host element
	            // in the ViewFactory already.
	            this.declarationAppElement.parentView.viewChildren.push(this);
	            this.dirtyParentQueriesInternal();
	        }
	    };
	    AppView.prototype.selectOrCreateHostElement = function (elementName, rootSelectorOrNode, debugInfo) {
	        var hostElement;
	        if (lang_1.isPresent(rootSelectorOrNode)) {
	            hostElement = this.renderer.selectRootElement(rootSelectorOrNode, debugInfo);
	        }
	        else {
	            hostElement = this.renderer.createElement(null, elementName, debugInfo);
	        }
	        return hostElement;
	    };
	    AppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
	        return this.injectorGetInternal(token, nodeIndex, notFoundResult);
	    };
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.injectorGetInternal = function (token, nodeIndex, notFoundResult) {
	        return notFoundResult;
	    };
	    AppView.prototype.injector = function (nodeIndex) {
	        if (lang_1.isPresent(nodeIndex)) {
	            return new element_injector_1.ElementInjector(this, nodeIndex);
	        }
	        else {
	            return this.parentInjector;
	        }
	    };
	    AppView.prototype.destroy = function () {
	        if (this._hasExternalHostElement) {
	            this.renderer.detachView(this.flatRootNodes);
	        }
	        else if (lang_1.isPresent(this.viewContainerElement)) {
	            this.viewContainerElement.detachView(this.viewContainerElement.nestedViews.indexOf(this));
	        }
	        this._destroyRecurse();
	    };
	    AppView.prototype._destroyRecurse = function () {
	        if (this.destroyed) {
	            return;
	        }
	        var children = this.contentChildren;
	        for (var i = 0; i < children.length; i++) {
	            children[i]._destroyRecurse();
	        }
	        children = this.viewChildren;
	        for (var i = 0; i < children.length; i++) {
	            children[i]._destroyRecurse();
	        }
	        this.destroyLocal();
	        this.destroyed = true;
	    };
	    AppView.prototype.destroyLocal = function () {
	        var hostElement = this.type === view_type_1.ViewType.COMPONENT ? this.declarationAppElement.nativeElement : null;
	        for (var i = 0; i < this.disposables.length; i++) {
	            this.disposables[i]();
	        }
	        for (var i = 0; i < this.subscriptions.length; i++) {
	            async_1.ObservableWrapper.dispose(this.subscriptions[i]);
	        }
	        this.destroyInternal();
	        if (this._hasExternalHostElement) {
	            this.renderer.detachView(this.flatRootNodes);
	        }
	        else if (lang_1.isPresent(this.viewContainerElement)) {
	            this.viewContainerElement.detachView(this.viewContainerElement.nestedViews.indexOf(this));
	        }
	        else {
	            this.dirtyParentQueriesInternal();
	        }
	        this.renderer.destroyView(hostElement, this.allNodes);
	    };
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.destroyInternal = function () { };
	    Object.defineProperty(AppView.prototype, "changeDetectorRef", {
	        get: function () { return this.ref; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppView.prototype, "parent", {
	        get: function () {
	            return lang_1.isPresent(this.declarationAppElement) ? this.declarationAppElement.parentView : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppView.prototype, "flatRootNodes", {
	        get: function () { return view_utils_1.flattenNestedViewRenderNodes(this.rootNodesOrAppElements); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AppView.prototype, "lastRootNode", {
	        get: function () {
	            var lastNode = this.rootNodesOrAppElements.length > 0 ?
	                this.rootNodesOrAppElements[this.rootNodesOrAppElements.length - 1] :
	                null;
	            return _findLastRenderNode(lastNode);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.dirtyParentQueriesInternal = function () { };
	    AppView.prototype.detectChanges = function (throwOnChange) {
	        var s = _scope_check(this.clazz);
	        if (this.cdMode === change_detection_1.ChangeDetectionStrategy.Detached ||
	            this.cdMode === change_detection_1.ChangeDetectionStrategy.Checked ||
	            this.cdState === change_detection_1.ChangeDetectorState.Errored)
	            return;
	        if (this.destroyed) {
	            this.throwDestroyedError('detectChanges');
	        }
	        this.detectChangesInternal(throwOnChange);
	        if (this.cdMode === change_detection_1.ChangeDetectionStrategy.CheckOnce)
	            this.cdMode = change_detection_1.ChangeDetectionStrategy.Checked;
	        this.cdState = change_detection_1.ChangeDetectorState.CheckedBefore;
	        profile_1.wtfLeave(s);
	    };
	    /**
	     * Overwritten by implementations
	     */
	    AppView.prototype.detectChangesInternal = function (throwOnChange) {
	        this.detectContentChildrenChanges(throwOnChange);
	        this.detectViewChildrenChanges(throwOnChange);
	    };
	    AppView.prototype.detectContentChildrenChanges = function (throwOnChange) {
	        for (var i = 0; i < this.contentChildren.length; ++i) {
	            this.contentChildren[i].detectChanges(throwOnChange);
	        }
	    };
	    AppView.prototype.detectViewChildrenChanges = function (throwOnChange) {
	        for (var i = 0; i < this.viewChildren.length; ++i) {
	            this.viewChildren[i].detectChanges(throwOnChange);
	        }
	    };
	    AppView.prototype.addToContentChildren = function (renderAppElement) {
	        renderAppElement.parentView.contentChildren.push(this);
	        this.viewContainerElement = renderAppElement;
	        this.dirtyParentQueriesInternal();
	    };
	    AppView.prototype.removeFromContentChildren = function (renderAppElement) {
	        collection_1.ListWrapper.remove(renderAppElement.parentView.contentChildren, this);
	        this.dirtyParentQueriesInternal();
	        this.viewContainerElement = null;
	    };
	    AppView.prototype.markAsCheckOnce = function () { this.cdMode = change_detection_1.ChangeDetectionStrategy.CheckOnce; };
	    AppView.prototype.markPathToRootAsCheckOnce = function () {
	        var c = this;
	        while (lang_1.isPresent(c) && c.cdMode !== change_detection_1.ChangeDetectionStrategy.Detached) {
	            if (c.cdMode === change_detection_1.ChangeDetectionStrategy.Checked) {
	                c.cdMode = change_detection_1.ChangeDetectionStrategy.CheckOnce;
	            }
	            var parentEl = c.type === view_type_1.ViewType.COMPONENT ? c.declarationAppElement : c.viewContainerElement;
	            c = lang_1.isPresent(parentEl) ? parentEl.parentView : null;
	        }
	    };
	    AppView.prototype.eventHandler = function (cb) { return cb; };
	    AppView.prototype.throwDestroyedError = function (details) { throw new exceptions_1.ViewDestroyedException(details); };
	    return AppView;
	}());
	exports.AppView = AppView;
	var DebugAppView = (function (_super) {
	    __extends(DebugAppView, _super);
	    function DebugAppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode, staticNodeDebugInfos) {
	        _super.call(this, clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode);
	        this.staticNodeDebugInfos = staticNodeDebugInfos;
	        this._currentDebugContext = null;
	    }
	    DebugAppView.prototype.create = function (context, givenProjectableNodes, rootSelectorOrNode) {
	        this._resetDebug();
	        try {
	            return _super.prototype.create.call(this, context, givenProjectableNodes, rootSelectorOrNode);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
	        this._resetDebug();
	        try {
	            return _super.prototype.injectorGet.call(this, token, nodeIndex, notFoundResult);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype.destroyLocal = function () {
	        this._resetDebug();
	        try {
	            _super.prototype.destroyLocal.call(this);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype.detectChanges = function (throwOnChange) {
	        this._resetDebug();
	        try {
	            _super.prototype.detectChanges.call(this, throwOnChange);
	        }
	        catch (e) {
	            this._rethrowWithContext(e, e.stack);
	            throw e;
	        }
	    };
	    DebugAppView.prototype._resetDebug = function () { this._currentDebugContext = null; };
	    DebugAppView.prototype.debug = function (nodeIndex, rowNum, colNum) {
	        return this._currentDebugContext = new debug_context_1.DebugContext(this, nodeIndex, rowNum, colNum);
	    };
	    DebugAppView.prototype._rethrowWithContext = function (e, stack) {
	        if (!(e instanceof exceptions_1.ViewWrappedException)) {
	            if (!(e instanceof exceptions_1.ExpressionChangedAfterItHasBeenCheckedException)) {
	                this.cdState = change_detection_1.ChangeDetectorState.Errored;
	            }
	            if (lang_1.isPresent(this._currentDebugContext)) {
	                throw new exceptions_1.ViewWrappedException(e, stack, this._currentDebugContext);
	            }
	        }
	    };
	    DebugAppView.prototype.eventHandler = function (cb) {
	        var _this = this;
	        var superHandler = _super.prototype.eventHandler.call(this, cb);
	        return function (event) {
	            _this._resetDebug();
	            try {
	                return superHandler(event);
	            }
	            catch (e) {
	                _this._rethrowWithContext(e, e.stack);
	                throw e;
	            }
	        };
	    };
	    return DebugAppView;
	}(AppView));
	exports.DebugAppView = DebugAppView;
	function _findLastRenderNode(node) {
	    var lastNode;
	    if (node instanceof element_1.AppElement) {
	        var appEl = node;
	        lastNode = appEl.nativeElement;
	        if (lang_1.isPresent(appEl.nestedViews)) {
	            // Note: Views might have no root nodes at all!
	            for (var i = appEl.nestedViews.length - 1; i >= 0; i--) {
	                var nestedView = appEl.nestedViews[i];
	                if (nestedView.rootNodesOrAppElements.length > 0) {
	                    lastNode = _findLastRenderNode(nestedView.rootNodesOrAppElements[nestedView.rootNodesOrAppElements.length - 1]);
	                }
	            }
	        }
	    }
	    else {
	        lastNode = node;
	    }
	    return lastNode;
	}
	//# sourceMappingURL=view.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(19);
	var view_type_1 = __webpack_require__(64);
	/* @ts2dart_const */
	var StaticNodeDebugInfo = (function () {
	    function StaticNodeDebugInfo(providerTokens, componentToken, refTokens) {
	        this.providerTokens = providerTokens;
	        this.componentToken = componentToken;
	        this.refTokens = refTokens;
	    }
	    return StaticNodeDebugInfo;
	}());
	exports.StaticNodeDebugInfo = StaticNodeDebugInfo;
	var DebugContext = (function () {
	    function DebugContext(_view, _nodeIndex, _tplRow, _tplCol) {
	        this._view = _view;
	        this._nodeIndex = _nodeIndex;
	        this._tplRow = _tplRow;
	        this._tplCol = _tplCol;
	    }
	    Object.defineProperty(DebugContext.prototype, "_staticNodeInfo", {
	        get: function () {
	            return lang_1.isPresent(this._nodeIndex) ? this._view.staticNodeDebugInfos[this._nodeIndex] : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "context", {
	        get: function () { return this._view.context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "component", {
	        get: function () {
	            var staticNodeInfo = this._staticNodeInfo;
	            if (lang_1.isPresent(staticNodeInfo) && lang_1.isPresent(staticNodeInfo.componentToken)) {
	                return this.injector.get(staticNodeInfo.componentToken);
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "componentRenderElement", {
	        get: function () {
	            var componentView = this._view;
	            while (lang_1.isPresent(componentView.declarationAppElement) &&
	                componentView.type !== view_type_1.ViewType.COMPONENT) {
	                componentView = componentView.declarationAppElement.parentView;
	            }
	            return lang_1.isPresent(componentView.declarationAppElement) ?
	                componentView.declarationAppElement.nativeElement :
	                null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "injector", {
	        get: function () { return this._view.injector(this._nodeIndex); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "renderNode", {
	        get: function () {
	            if (lang_1.isPresent(this._nodeIndex) && lang_1.isPresent(this._view.allNodes)) {
	                return this._view.allNodes[this._nodeIndex];
	            }
	            else {
	                return null;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "providerTokens", {
	        get: function () {
	            var staticNodeInfo = this._staticNodeInfo;
	            return lang_1.isPresent(staticNodeInfo) ? staticNodeInfo.providerTokens : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "source", {
	        get: function () {
	            return this._view.componentType.templateUrl + ":" + this._tplRow + ":" + this._tplCol;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DebugContext.prototype, "references", {
	        get: function () {
	            var _this = this;
	            var varValues = {};
	            var staticNodeInfo = this._staticNodeInfo;
	            if (lang_1.isPresent(staticNodeInfo)) {
	                var refs = staticNodeInfo.refTokens;
	                collection_1.StringMapWrapper.forEach(refs, function (refToken, refName) {
	                    var varValue;
	                    if (lang_1.isBlank(refToken)) {
	                        varValue = lang_1.isPresent(_this._view.allNodes) ? _this._view.allNodes[_this._nodeIndex] : null;
	                    }
	                    else {
	                        varValue = _this._view.injectorGet(refToken, _this._nodeIndex, null);
	                    }
	                    varValues[refName] = varValue;
	                });
	            }
	            return varValues;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return DebugContext;
	}());
	exports.DebugContext = DebugContext;
	//# sourceMappingURL=debug_context.js.map

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var injector_1 = __webpack_require__(15);
	var _UNDEFINED = new Object();
	var ElementInjector = (function (_super) {
	    __extends(ElementInjector, _super);
	    function ElementInjector(_view, _nodeIndex) {
	        _super.call(this);
	        this._view = _view;
	        this._nodeIndex = _nodeIndex;
	    }
	    ElementInjector.prototype.get = function (token, notFoundValue) {
	        if (notFoundValue === void 0) { notFoundValue = injector_1.THROW_IF_NOT_FOUND; }
	        var result = _UNDEFINED;
	        if (result === _UNDEFINED) {
	            result = this._view.injectorGet(token, this._nodeIndex, _UNDEFINED);
	        }
	        if (result === _UNDEFINED) {
	            result = this._view.parentInjector.get(token, notFoundValue);
	        }
	        return result;
	    };
	    return ElementInjector;
	}(injector_1.Injector));
	exports.ElementInjector = ElementInjector;
	//# sourceMappingURL=element_injector.js.map

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";
	/**
	* This is here because DART requires it. It is noop in JS.
	*/
	function wtfInit() { }
	exports.wtfInit = wtfInit;
	//# sourceMappingURL=wtf_init.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(5);
	var debug_node_1 = __webpack_require__(86);
	var DebugDomRootRenderer = (function () {
	    function DebugDomRootRenderer(_delegate) {
	        this._delegate = _delegate;
	    }
	    DebugDomRootRenderer.prototype.renderComponent = function (componentProto) {
	        return new DebugDomRenderer(this._delegate.renderComponent(componentProto));
	    };
	    return DebugDomRootRenderer;
	}());
	exports.DebugDomRootRenderer = DebugDomRootRenderer;
	var DebugDomRenderer = (function () {
	    function DebugDomRenderer(_delegate) {
	        this._delegate = _delegate;
	    }
	    DebugDomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
	        var nativeEl = this._delegate.selectRootElement(selectorOrNode, debugInfo);
	        var debugEl = new debug_node_1.DebugElement(nativeEl, null, debugInfo);
	        debug_node_1.indexDebugNode(debugEl);
	        return nativeEl;
	    };
	    DebugDomRenderer.prototype.createElement = function (parentElement, name, debugInfo) {
	        var nativeEl = this._delegate.createElement(parentElement, name, debugInfo);
	        var debugEl = new debug_node_1.DebugElement(nativeEl, debug_node_1.getDebugNode(parentElement), debugInfo);
	        debugEl.name = name;
	        debug_node_1.indexDebugNode(debugEl);
	        return nativeEl;
	    };
	    DebugDomRenderer.prototype.createViewRoot = function (hostElement) { return this._delegate.createViewRoot(hostElement); };
	    DebugDomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
	        var comment = this._delegate.createTemplateAnchor(parentElement, debugInfo);
	        var debugEl = new debug_node_1.DebugNode(comment, debug_node_1.getDebugNode(parentElement), debugInfo);
	        debug_node_1.indexDebugNode(debugEl);
	        return comment;
	    };
	    DebugDomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
	        var text = this._delegate.createText(parentElement, value, debugInfo);
	        var debugEl = new debug_node_1.DebugNode(text, debug_node_1.getDebugNode(parentElement), debugInfo);
	        debug_node_1.indexDebugNode(debugEl);
	        return text;
	    };
	    DebugDomRenderer.prototype.projectNodes = function (parentElement, nodes) {
	        var debugParent = debug_node_1.getDebugNode(parentElement);
	        if (lang_1.isPresent(debugParent) && debugParent instanceof debug_node_1.DebugElement) {
	            var debugElement_1 = debugParent;
	            nodes.forEach(function (node) { debugElement_1.addChild(debug_node_1.getDebugNode(node)); });
	        }
	        this._delegate.projectNodes(parentElement, nodes);
	    };
	    DebugDomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
	        var debugNode = debug_node_1.getDebugNode(node);
	        if (lang_1.isPresent(debugNode)) {
	            var debugParent = debugNode.parent;
	            if (viewRootNodes.length > 0 && lang_1.isPresent(debugParent)) {
	                var debugViewRootNodes = [];
	                viewRootNodes.forEach(function (rootNode) { return debugViewRootNodes.push(debug_node_1.getDebugNode(rootNode)); });
	                debugParent.insertChildrenAfter(debugNode, debugViewRootNodes);
	            }
	        }
	        this._delegate.attachViewAfter(node, viewRootNodes);
	    };
	    DebugDomRenderer.prototype.detachView = function (viewRootNodes) {
	        viewRootNodes.forEach(function (node) {
	            var debugNode = debug_node_1.getDebugNode(node);
	            if (lang_1.isPresent(debugNode) && lang_1.isPresent(debugNode.parent)) {
	                debugNode.parent.removeChild(debugNode);
	            }
	        });
	        this._delegate.detachView(viewRootNodes);
	    };
	    DebugDomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
	        viewAllNodes.forEach(function (node) { debug_node_1.removeDebugNodeFromIndex(debug_node_1.getDebugNode(node)); });
	        this._delegate.destroyView(hostElement, viewAllNodes);
	    };
	    DebugDomRenderer.prototype.listen = function (renderElement, name, callback) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl)) {
	            debugEl.listeners.push(new debug_node_1.EventListener(name, callback));
	        }
	        return this._delegate.listen(renderElement, name, callback);
	    };
	    DebugDomRenderer.prototype.listenGlobal = function (target, name, callback) {
	        return this._delegate.listenGlobal(target, name, callback);
	    };
	    DebugDomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl) && debugEl instanceof debug_node_1.DebugElement) {
	            debugEl.properties[propertyName] = propertyValue;
	        }
	        this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
	    };
	    DebugDomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
	        var debugEl = debug_node_1.getDebugNode(renderElement);
	        if (lang_1.isPresent(debugEl) && debugEl instanceof debug_node_1.DebugElement) {
	            debugEl.attributes[attributeName] = attributeValue;
	        }
	        this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
	    };
	    DebugDomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
	        this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
	    };
	    DebugDomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
	        this._delegate.setElementClass(renderElement, className, isAdd);
	    };
	    DebugDomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
	        this._delegate.setElementStyle(renderElement, styleName, styleValue);
	    };
	    DebugDomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
	        this._delegate.invokeElementMethod(renderElement, methodName, args);
	    };
	    DebugDomRenderer.prototype.setText = function (renderNode, text) { this._delegate.setText(renderNode, text); };
	    return DebugDomRenderer;
	}());
	exports.DebugDomRenderer = DebugDomRenderer;
	//# sourceMappingURL=debug_renderer.js.map

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var provide_1 = __webpack_require__(1);
	var tealium_data_service_1 = __webpack_require__(99);
	var Tealium = (function () {
	    function Tealium(config, tealiumData) {
	        this.config = config;
	        this.tealiumData = tealiumData;
	        this.run();
	    }
	    Tealium.prototype.setConfig = function (newConfig) {
	        this.config = newConfig;
	    };
	    Tealium.prototype.setConfigValue = function (key, value) {
	        this.config[key] = value;
	    };
	    Tealium.prototype.view = function (data) {
	        var data = data || this.tealiumData.getDataLayer(location.pathname);
	        this.track("view", data);
	    };
	    Tealium.prototype.link = function (data) {
	        var data = data || this.tealiumData.getDataLayer(location.pathname);
	        this.track("link", data);
	    };
	    Tealium.prototype.track = function (ev, data) {
	        var data = data || this.tealiumData.getDataLayer(location.pathname);
	        var ev = ev || "view";
	        var src = this.config.script_src;
	        if (typeof utag == "undefined") {
	            this.getScript(src, function () { return utag.track(ev, data); });
	        }
	        else {
	            utag.track(ev, data);
	        }
	    };
	    Tealium.prototype.setViewIdMap = function (viewIdMap) {
	        return this.tealiumData.setViewIdMap(viewIdMap);
	    };
	    Tealium.prototype.addViewIdMapEntry = function (key, func) {
	        return this.tealiumData.addViewIdMapEntry(key, func);
	    };
	    Tealium.prototype.run = function () {
	        if (typeof utag_data == "undefined") {
	            window['utag_data'] = this.tealiumData.getDataLayer(location.pathname) || {};
	        }
	        if (this.config.suppress_first_view) {
	            window['utag_cfg_ovrd'] = { noview: true };
	        }
	        else {
	            this.getScript(this.config.script_src);
	        }
	    };
	    Tealium.prototype.getScript = function (src, callback) {
	        var d = document;
	        var o = {
	            callback: callback || (function () {
	            })
	        };
	        var s, t;
	        if (typeof src == "undefined") {
	            return;
	        }
	        if (typeof jQuery != "undefined") {
	            // use cross-browser getScript from jQuery by default
	            jQuery.ajaxSetup({ cache: true });
	            jQuery.getScript(src, o.callback);
	        }
	        else {
	            s = d.createElement("script");
	            s.language = "javascript";
	            s.type = "text/javascript";
	            s.async = 1;
	            s.charset = "utf-8";
	            s.src = src;
	            if (typeof o.callback == "function") {
	                if (d.addEventListener) {
	                    s.addEventListener("load", function () { return o.callback(); }, false);
	                }
	                else {
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
	    };
	    Tealium = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(provide_1.TEALIUM_CONFIG_TOKEN)), 
	        __metadata('design:paramtypes', [Object, tealium_data_service_1.TealiumData])
	    ], Tealium);
	    return Tealium;
	}());
	exports.Tealium = Tealium;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbGl1bS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZpY2VzL3RlYWxpdW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBR2pELHdCQUFtQyxZQUFZLENBQUMsQ0FBQTtBQUNoRCxxQ0FBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQVFuRDtJQUVJLGlCQUFrRCxNQUFvQixFQUNsRCxXQUF1QjtRQURPLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDbEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVPLDJCQUFTLEdBQWpCLFVBQWtCLFNBQXdCO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFTyxnQ0FBYyxHQUF0QixVQUF1QixHQUFXLEVBQUUsS0FBVTtRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLElBQVk7UUFDYixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBSSxHQUFKLFVBQUssSUFBWTtRQUNiLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHVCQUFLLEdBQUwsVUFBTSxFQUFTLEVBQUUsSUFBWTtRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDdEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFFakMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxjQUFNLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQTtRQUNuRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN4QixDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFZLEdBQVosVUFBYSxTQUFtQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELG1DQUFpQixHQUFqQixVQUFrQixHQUFVLEVBQUUsSUFBYztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVPLHFCQUFHLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxPQUFPLFNBQVMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pGLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDN0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7SUFDTCxDQUFDO0lBRU8sMkJBQVMsR0FBakIsVUFBa0IsR0FBVSxFQUFFLFFBQWlCO1FBQzNDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRztZQUNKLFFBQVEsRUFBRSxRQUFRLElBQUksQ0FBQztZQUN2QixDQUFDLENBQUM7U0FDTCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRVQsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMvQixxREFBcUQ7WUFDckQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztZQUMxQixDQUFDLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1lBQzNCLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDcEIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxjQUFNLE9BQUEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFaLENBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixpQkFBaUI7b0JBQ2pCLENBQUMsQ0FBQyxrQkFBa0IsR0FBRzt3QkFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUMvRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDOzRCQUMvQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ2pCLENBQUM7b0JBQ0wsQ0FBQyxDQUFDO2dCQUNOLENBQUM7WUFDTCxDQUFDO1lBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFoR0w7UUFBQyxpQkFBVSxFQUFFO21CQUdJLGFBQU0sQ0FBQyw4QkFBb0IsQ0FBQzs7ZUFIaEM7SUFpR2IsY0FBQztBQUFELENBQUMsQUFoR0QsSUFnR0M7QUFoR1ksZUFBTyxVQWdHbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtUZWFsaXVtQ29uZmlnfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZWFsaXVtLWNvbmZpZ1wiO1xuaW1wb3J0IHtWaWV3SWRNYXB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3ZpZXctaWQtbWFwXCI7XG5pbXBvcnQge1RFQUxJVU1fQ09ORklHX1RPS0VOfSBmcm9tIFwiLi4vcHJvdmlkZVwiO1xuaW1wb3J0IHtUZWFsaXVtRGF0YX0gZnJvbSBcIi4vdGVhbGl1bS1kYXRhLnNlcnZpY2VcIjtcblxuXG5kZWNsYXJlIHZhciB1dGFnOiB7dHJhY2soZXY6IHN0cmluZywgZGF0YToge30pfTtcbmRlY2xhcmUgdmFyIHV0YWdfZGF0YToge307XG5kZWNsYXJlIHZhciB1dGFnX2NmZ19vdnJkOiB7bm92aWV3OiBib29sZWFufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlYWxpdW0ge1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChURUFMSVVNX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBjb25maWc6VGVhbGl1bUNvbmZpZyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRlYWxpdW1EYXRhOlRlYWxpdW1EYXRhKSB7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRDb25maWcobmV3Q29uZmlnOiBUZWFsaXVtQ29uZmlnKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gbmV3Q29uZmlnO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q29uZmlnVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb25maWdba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHZpZXcoZGF0YT86T2JqZWN0KTogdm9pZCB7XG4gICAgICAgIHZhciBkYXRhID0gZGF0YSB8fCB0aGlzLnRlYWxpdW1EYXRhLmdldERhdGFMYXllcihsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIHRoaXMudHJhY2soXCJ2aWV3XCIsIGRhdGEpO1xuICAgIH1cblxuICAgIGxpbmsoZGF0YT86T2JqZWN0KTogdm9pZCB7XG4gICAgICAgIHZhciBkYXRhID0gZGF0YSB8fCB0aGlzLnRlYWxpdW1EYXRhLmdldERhdGFMYXllcihsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIHRoaXMudHJhY2soXCJsaW5rXCIsIGRhdGEpO1xuICAgIH1cblxuICAgIHRyYWNrKGV2OnN0cmluZywgZGF0YT86T2JqZWN0KTogdm9pZCB7XG4gICAgICAgIHZhciBkYXRhID0gZGF0YSB8fCB0aGlzLnRlYWxpdW1EYXRhLmdldERhdGFMYXllcihsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIHZhciBldiA9IGV2IHx8IFwidmlld1wiO1xuICAgICAgICB2YXIgc3JjID0gdGhpcy5jb25maWcuc2NyaXB0X3NyYztcblxuICAgICAgICBpZiAodHlwZW9mIHV0YWcgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5nZXRTY3JpcHQoc3JjLCAoKSA9PiB1dGFnLnRyYWNrKGV2LCBkYXRhKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHV0YWcudHJhY2soZXYsIGRhdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRWaWV3SWRNYXAodmlld0lkTWFwOlZpZXdJZE1hcCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZWFsaXVtRGF0YS5zZXRWaWV3SWRNYXAodmlld0lkTWFwKTtcbiAgICB9XG5cbiAgICBhZGRWaWV3SWRNYXBFbnRyeShrZXk6c3RyaW5nLCBmdW5jOigpID0+IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZWFsaXVtRGF0YS5hZGRWaWV3SWRNYXBFbnRyeShrZXksIGZ1bmMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcnVuKCkge1xuICAgICAgICBpZiAodHlwZW9mIHV0YWdfZGF0YSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB3aW5kb3dbJ3V0YWdfZGF0YSddID0gdGhpcy50ZWFsaXVtRGF0YS5nZXREYXRhTGF5ZXIobG9jYXRpb24ucGF0aG5hbWUpIHx8IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5zdXBwcmVzc19maXJzdF92aWV3KSB7XG4gICAgICAgICAgICB3aW5kb3dbJ3V0YWdfY2ZnX292cmQnXSA9IHtub3ZpZXc6IHRydWV9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRTY3JpcHQodGhpcy5jb25maWcuc2NyaXB0X3NyYyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNjcmlwdChzcmM6c3RyaW5nLCBjYWxsYmFjaz86KCk9PmFueSkge1xuICAgICAgICB2YXIgZCA9IGRvY3VtZW50O1xuICAgICAgICB2YXIgbyA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayB8fCAoKCkgPT4ge1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHMsIHQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzcmMgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBqUXVlcnkgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgLy8gdXNlIGNyb3NzLWJyb3dzZXIgZ2V0U2NyaXB0IGZyb20galF1ZXJ5IGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIGpRdWVyeS5hamF4U2V0dXAoe2NhY2hlOiB0cnVlfSk7XG4gICAgICAgICAgICBqUXVlcnkuZ2V0U2NyaXB0KHNyYywgby5jYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gZC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgcy5sYW5ndWFnZSA9IFwiamF2YXNjcmlwdFwiO1xuICAgICAgICAgICAgcy50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICAgICAgICAgIHMuYXN5bmMgPSAxO1xuICAgICAgICAgICAgcy5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuICAgICAgICAgICAgcy5zcmMgPSBzcmM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG8uY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICBzLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IG8uY2FsbGJhY2soKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9sZCBJRSBzdXBwb3J0XG4gICAgICAgICAgICAgICAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIgfHwgdGhpcy5yZWFkeVN0YXRlID09IFwibG9hZGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgby5jYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuICAgICAgICAgICAgdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzLCB0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";
	var TealiumData = (function () {
	    function TealiumData(view_id_map) {
	        this.view_id_map = view_id_map;
	    }
	    ;
	    TealiumData.prototype.setViewIdMap = function (map) {
	        this.view_id_map = map;
	    };
	    TealiumData.prototype.addViewIdMapEntry = function (key, func) {
	        this.view_id_map[key] = func;
	    };
	    TealiumData.prototype.getDataLayer = function (view_id) {
	        var dataLayer;
	        try {
	            if (this.view_id_map[view_id]) {
	                dataLayer = this.view_id_map[view_id]();
	            }
	            else {
	                dataLayer = this.view_id_map.generic ? this.view_id_map.generic() : {};
	            }
	        }
	        catch (err) {
	            dataLayer = {
	                page_type: "generic dataLayer error",
	                error_name: err.name,
	                error_message: err.message
	            };
	        }
	        return dataLayer;
	    };
	    return TealiumData;
	}());
	exports.TealiumData = TealiumData;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbGl1bS1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvdGVhbGl1bS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBQ0kscUJBQW9CLFdBQXNCO1FBQXRCLGdCQUFXLEdBQVgsV0FBVyxDQUFXO0lBQzFDLENBQUM7O0lBRUQsa0NBQVksR0FBWixVQUFhLEdBQWM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVELHVDQUFpQixHQUFqQixVQUFrQixHQUFVLEVBQUUsSUFBYztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLE9BQWdCO1FBQ3pCLElBQUksU0FBa0MsQ0FBQztRQUN2QyxJQUFJLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUM1QyxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQzNFLENBQUM7UUFDTCxDQUFFO1FBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNYLFNBQVMsR0FBRztnQkFDUixTQUFTLEVBQUUseUJBQXlCO2dCQUNwQyxVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUk7Z0JBQ3BCLGFBQWEsRUFBRSxHQUFHLENBQUMsT0FBTzthQUM3QixDQUFDO1FBQ04sQ0FBQztRQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTlCWSxtQkFBVyxjQThCdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Vmlld0lkTWFwfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy92aWV3LWlkLW1hcFwiO1xuXG5leHBvcnQgY2xhc3MgVGVhbGl1bURhdGEge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld19pZF9tYXA6IFZpZXdJZE1hcCkge1xuICAgIH07XG4gICAgXG4gICAgc2V0Vmlld0lkTWFwKG1hcDogVmlld0lkTWFwKSB7XG4gICAgICAgIHRoaXMudmlld19pZF9tYXAgPSBtYXA7XG4gICAgfVxuXG4gICAgYWRkVmlld0lkTWFwRW50cnkoa2V5OnN0cmluZywgZnVuYzooKSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy52aWV3X2lkX21hcFtrZXldID0gZnVuYztcbiAgICB9XG5cbiAgICBnZXREYXRhTGF5ZXIodmlld19pZD86IHN0cmluZyk6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9IHtcbiAgICAgICAgdmFyIGRhdGFMYXllcjoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aWV3X2lkX21hcFt2aWV3X2lkXSkge1xuICAgICAgICAgICAgICAgIGRhdGFMYXllciA9IHRoaXMudmlld19pZF9tYXBbdmlld19pZF0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFMYXllciA9IHRoaXMudmlld19pZF9tYXAuZ2VuZXJpYyA/IHRoaXMudmlld19pZF9tYXAuZ2VuZXJpYygpIDoge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZGF0YUxheWVyID0ge1xuICAgICAgICAgICAgICAgIHBhZ2VfdHlwZTogXCJnZW5lcmljIGRhdGFMYXllciBlcnJvclwiLFxuICAgICAgICAgICAgICAgIGVycm9yX25hbWU6IGVyci5uYW1lLFxuICAgICAgICAgICAgICAgIGVycm9yX21lc3NhZ2U6IGVyci5tZXNzYWdlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhTGF5ZXI7XG4gICAgfVxufVxuIl19

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tealium_directive_1 = __webpack_require__(101);
	exports.TEALIUM_DIRECTIVES = [
	    tealium_directive_1.TealiumDirective,
	];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrQ0FBK0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUVuRCwwQkFBa0IsR0FBRztJQUM5QixvQ0FBZ0I7Q0FDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGVhbGl1bURpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy90ZWFsaXVtLmRpcmVjdGl2ZVwiO1xuXG5leHBvcnQgY29uc3QgVEVBTElVTV9ESVJFQ1RJVkVTID0gW1xuICAgIFRlYWxpdW1EaXJlY3RpdmUsXG5dO1xuIl19

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var tealium_data_service_1 = __webpack_require__(99);
	var tealium_service_1 = __webpack_require__(98);
	// Add element-specific data to data layer from "data-tealium" attribute
	// <input type="button" value="input button" data-tealium='{"event":"input pressed"}'><br>
	var TealiumDirective = (function () {
	    function TealiumDirective(tealiumData, tealium) {
	        this.tealiumData = tealiumData;
	        this.tealium = tealium;
	    }
	    TealiumDirective.prototype.onNavigate = function (e) {
	        var dataLayer = this.tealiumData.getDataLayer(location.pathname);
	        var target = e.target, event_type, event_text, event_source;
	        if (target.nodeName) {
	            event_type = "" + (target.nodeName.toLowerCase() || target.localName || target.tagName.toLowerCase());
	            if (event_type === "a") {
	                event_type = "link";
	            }
	            else if (event_type == "img") {
	                event_type = "image";
	            }
	            dataLayer['event_type'] = event_type + " click";
	        }
	        dataLayer['event_target'] = event_type;
	        event_text = target.title || target.innerText || target.innerHTML.trim();
	        if (event_text === "" && (target.value && target.value !== "")) {
	            event_text = target.value;
	        }
	        else if (event_text === "" && (target.alt && target.alt !== "")) {
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
	    };
	    TealiumDirective.prototype.link = function (dataLayer) {
	        var d = this.data || "{}";
	        var b = {};
	        try {
	            b = jQuery.extend({}, JSON.parse(d), dataLayer);
	        }
	        catch (error) {
	        }
	        this.tealium.link(b);
	    };
	    __decorate([
	        core_1.Input('tealium'), 
	        __metadata('design:type', Object)
	    ], TealiumDirective.prototype, "data", void 0);
	    TealiumDirective = __decorate([
	        core_1.Directive({
	            selector: 'tealium',
	            host: {
	                '(mouseclick)': 'onNavigate',
	                '(keyup.enter)': 'onNavigate'
	            }
	        }), 
	        __metadata('design:paramtypes', [tealium_data_service_1.TealiumData, tealium_service_1.Tealium])
	    ], TealiumDirective);
	    return TealiumDirective;
	}());
	exports.TealiumDirective = TealiumDirective;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbGl1bS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy90ZWFsaXVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFDQUEwQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzdELGdDQUFzQiw2QkFBNkIsQ0FBQyxDQUFBO0FBRXBELHdFQUF3RTtBQUN4RSwwRkFBMEY7QUFRMUY7SUFHSSwwQkFBb0IsV0FBdUIsRUFBVSxPQUFlO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUVwRSxDQUFDO0lBRUQscUNBQVUsR0FBVixVQUFXLENBQU07UUFDYixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFrQixFQUFFLFVBQWtCLEVBQUUsWUFBb0IsQ0FBQztRQUVwRixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQixVQUFVLEdBQUcsTUFBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBRSxDQUFDO1lBQ3BHLEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLFVBQVUsR0FBRyxPQUFPLENBQUM7WUFDekIsQ0FBQztZQUNELFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBTSxVQUFVLFdBQVEsQ0FBQztRQUNwRCxDQUFDO1FBQ0QsU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUN2QyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekUsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDOUIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUM1QixDQUFDO1FBQ0QsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUN0QyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssTUFBTTtnQkFDUCxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDM0IsS0FBSyxDQUFDO1lBQ1YsS0FBSyxRQUFRO2dCQUNULFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDakMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDbEMsS0FBSyxDQUFDO1lBQ1Y7Z0JBQ0ksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUM5QixDQUFDO2dCQUNELEtBQUssQ0FBQztRQUNkLENBQUM7UUFDRCxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsWUFBWSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLCtCQUFJLEdBQVosVUFBYSxTQUFpQjtRQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUM7WUFDRCxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUNuRCxDQUFFO1FBQUEsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQXZERDtRQUFDLFlBQUssQ0FBQyxTQUFTLENBQUM7O2tEQUFBO0lBUnJCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRTtnQkFDRixjQUFjLEVBQUUsWUFBWTtnQkFDNUIsZUFBZSxFQUFFLFlBQVk7YUFDaEM7U0FDSixDQUFDOzt3QkFBQTtJQTBERix1QkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6RFksd0JBQWdCLG1CQXlENUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VGVhbGl1bURhdGF9IGZyb20gXCIuLi9zZXJ2aWNlcy90ZWFsaXVtLWRhdGEuc2VydmljZVwiO1xuaW1wb3J0IHtUZWFsaXVtfSBmcm9tIFwiLi4vc2VydmljZXMvdGVhbGl1bS5zZXJ2aWNlXCI7XG5cbi8vIEFkZCBlbGVtZW50LXNwZWNpZmljIGRhdGEgdG8gZGF0YSBsYXllciBmcm9tIFwiZGF0YS10ZWFsaXVtXCIgYXR0cmlidXRlXG4vLyA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiaW5wdXQgYnV0dG9uXCIgZGF0YS10ZWFsaXVtPSd7XCJldmVudFwiOlwiaW5wdXQgcHJlc3NlZFwifSc+PGJyPlxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICd0ZWFsaXVtJyxcbiAgICBob3N0OiB7XG4gICAgICAgICcobW91c2VjbGljayknOiAnb25OYXZpZ2F0ZScsXG4gICAgICAgICcoa2V5dXAuZW50ZXIpJzogJ29uTmF2aWdhdGUnXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBUZWFsaXVtRGlyZWN0aXZlIHtcbiAgICBASW5wdXQoJ3RlYWxpdW0nKSBkYXRhOmFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVhbGl1bURhdGE6VGVhbGl1bURhdGEsIHByaXZhdGUgdGVhbGl1bTpUZWFsaXVtKSB7XG5cbiAgICB9XG5cbiAgICBvbk5hdmlnYXRlKGU6IGFueSkge1xuICAgICAgICB2YXIgZGF0YUxheWVyID0gdGhpcy50ZWFsaXVtRGF0YS5nZXREYXRhTGF5ZXIobG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsIGV2ZW50X3R5cGU6IHN0cmluZywgZXZlbnRfdGV4dDogc3RyaW5nLCBldmVudF9zb3VyY2U6IHN0cmluZztcblxuICAgICAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lKSB7XG4gICAgICAgICAgICBldmVudF90eXBlID0gYCR7dGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgfHwgdGFyZ2V0LmxvY2FsTmFtZSB8fCB0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgICAgICBpZiAoZXZlbnRfdHlwZSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICBldmVudF90eXBlID0gXCJsaW5rXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50X3R5cGUgPT0gXCJpbWdcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50X3R5cGUgPSBcImltYWdlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhTGF5ZXJbJ2V2ZW50X3R5cGUnXSA9IGAke2V2ZW50X3R5cGV9IGNsaWNrYDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhTGF5ZXJbJ2V2ZW50X3RhcmdldCddID0gZXZlbnRfdHlwZTtcbiAgICAgICAgZXZlbnRfdGV4dCA9IHRhcmdldC50aXRsZSB8fCB0YXJnZXQuaW5uZXJUZXh0IHx8IHRhcmdldC5pbm5lckhUTUwudHJpbSgpO1xuICAgICAgICBpZiAoZXZlbnRfdGV4dCA9PT0gXCJcIiAmJiAodGFyZ2V0LnZhbHVlICYmIHRhcmdldC52YWx1ZSAhPT0gXCJcIikpIHtcbiAgICAgICAgICAgIGV2ZW50X3RleHQgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRfdGV4dCA9PT0gXCJcIiAmJiAodGFyZ2V0LmFsdCAmJiB0YXJnZXQuYWx0ICE9PSBcIlwiKSkge1xuICAgICAgICAgICAgZXZlbnRfdGV4dCA9IHRhcmdldC5hbHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YUxheWVyWydldmVudF9hdHRyMSddID0gZXZlbnRfdGV4dDtcbiAgICAgICAgc3dpdGNoIChldmVudF90eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwibGlua1wiOlxuICAgICAgICAgICAgICAgIGV2ZW50X3NvdXJjZSA9IHRhcmdldC5ocmVmO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ1dHRvblwiOlxuICAgICAgICAgICAgICAgIGV2ZW50X3NvdXJjZSA9IHRhcmdldC50eXBlIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW5wdXRcIjpcbiAgICAgICAgICAgICAgICBldmVudF9zb3VyY2UgPSB0YXJnZXQudmFsdWUgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5zcmMgJiYgdGFyZ2V0LnNyYyAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBldmVudF9zb3VyY2UgPSB0YXJnZXQuc3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkYXRhTGF5ZXJbJ2V2ZW50X2F0dHIyJ10gPSBldmVudF9zb3VyY2U7XG4gICAgICAgIHRoaXMubGluayhkYXRhTGF5ZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGluayhkYXRhTGF5ZXI6IE9iamVjdCkge1xuICAgICAgICB2YXIgZCA9IHRoaXMuZGF0YSB8fCBcInt9XCI7XG4gICAgICAgIHZhciBiID0ge307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBiID0galF1ZXJ5LmV4dGVuZCh7fSwgSlNPTi5wYXJzZShkKSwgZGF0YUxheWVyKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGVhbGl1bS5saW5rKGIpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }
/******/ ]);