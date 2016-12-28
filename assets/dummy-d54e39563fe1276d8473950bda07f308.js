"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default}),(0,a.default)(i,r.default.modulePrefix),e.default=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n.default.APP.name,r=n.default.APP.version;e.default=t.default.extend({version:r,name:a})}),define("dummy/components/flash-message",["exports","ember-cli-flash/components/flash-message"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/flash/object",["exports","ember-cli-flash/flash/object"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var r,i=n.default.exportApplicationGlobal;r="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),a[r]||(a[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[r]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/initializers/flash-messages",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0],t=n.default||{},a=t.flashMessageDefaults,d=a||[],s=d.injectionFactories,c=i(o,a),u=!(s&&s.length);e.register("config:flash-messages",c,{instantiate:!1}),e.inject("service:flash-messages","flashMessageDefaults","config:flash-messages"),r(l,u,{id:"ember-cli-flash.deprecate-injection-factories",until:"2.0.0"}),c.injectionFactories.forEach(function(t){e.inject(t,"flashMessages","service:flash-messages")})}e.initialize=a;var r=t.default.deprecate,i=t.default.assign||t.default.merge,l="[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.",o={timeout:3e3,extendedTimeout:0,priority:100,sticky:!1,showProgress:!1,type:"info",types:["success","info","warning","danger","alert","secondary"],injectionFactories:["route","controller","view","component"],preventDuplicates:!1};e.default={name:"flash-messages",initialize:a}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});a.map(function(){}),e.default=a}),define("dummy/routes/index",["exports","ember"],function(e,t){var n=t.default.get;e.default=t.default.Route.extend({activate:function(){var e=n(this,"flashMessages");e.success("Route transitioned successfully",{priority:500,showProgress:!0}),e.warning("It is going to rain tomorrow",{priority:1e3}),e.danger("You went offline")}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/flash-messages",["exports","ember-cli-flash/services/flash-messages"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{revision:"Ember@2.7.3",loc:{source:null,start:{line:9,column:4},end:{line:13,column:4}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","alert-progress");var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","alert-progressBar"),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1,1]),r=new Array(1);return r[0]=e.createAttrMorph(a,"style"),r},statements:[["attribute","style",["concat",[["get","component.progressDuration",["loc",[null,[11,48],[11,74]]],0,0,0,0]],0,0,0,0,0],0,0,0,0]],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.7.3",loc:{source:null,start:{line:6,column:2},end:{line:14,column:2}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:2,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("h6"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createElement("p"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a[1]=e.createMorphAt(e.childAt(t,[3]),0,0),a[2]=e.createMorphAt(t,5,5,n),e.insertBoundary(t,null),a},statements:[["content","component.flashType",["loc",[null,[7,8],[7,31]]],0,0,0,0],["content","flash.message",["loc",[null,[8,7],[8,24]]],0,0,0,0],["block","if",[["get","component.showProgressBar",["loc",[null,[9,10],[9,35]]],0,0,0,0]],[],0,null,["loc",[null,[9,4],[13,11]]]]],locals:["component","flash"],templates:[e]}}();return{meta:{revision:"Ember@2.7.3",loc:{source:null,start:{line:5,column:0},end:{line:15,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","flash-message",[],["flash",["subexpr","@mut",[["get","flash",["loc",[null,[6,25],[6,30]]],0,0,0,0]],[],[],0,0]],0,null,["loc",[null,[6,2],[14,20]]]]],locals:["flash"],templates:[e]}}();return{meta:{revision:"Ember@2.7.3",loc:{source:null,start:{line:1,column:0},end:{line:31,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1");e.setAttribute(n,"id","title");var a=e.createTextNode("Ember-CLI-Flash Demo");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Simple, highly configurable flash messages for ember-cli.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("code"),a=e.createElement("pre"),r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createTextNode("{{#each flashMessages.arrangedQueue as |flash|}}\n    ");e.appendChild(a,r);var r=e.createTextNode("{{#flash-message flash=flash as |component flash|}}\n        <h6>");e.appendChild(a,r);var r=e.createTextNode("{{component.flashType}}</h6>\n    <p>");e.appendChild(a,r);var r=e.createTextNode("{{flash.message}}</p>\n      ");e.appendChild(a,r);var r=e.createTextNode('{{#if component.showProgressBar}}\n          <div class="alert-progress">\n              <div class="alert-progressBar" style="');e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode('"></div>\n          </div>\n      ');e.appendChild(a,r);var r=e.createTextNode("{{/if}}\n    ");e.appendChild(a,r);var r=e.createTextNode("{{/flash-message}}\n  ");e.appendChild(a,r);var r=e.createTextNode("{{/each}}\n\n");e.appendChild(a,r),e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,4,4,n),a[1]=e.createMorphAt(e.childAt(t,[6,0]),6,6),a},statements:[["block","each",[["get","flashMessages.arrangedQueue",["loc",[null,[5,8],[5,35]]],0,0,0,0]],[],0,null,["loc",[null,[5,0],[15,9]]]],["content","component.progressDuration",["loc",[null,[24,55],[24,85]]],0,0,0,0]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e.default.$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{default:r}}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-cli-flash",version:"1.4.0"});