define(["exports","metal-component/src/all/component","metal-soy/src/Soy"],function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.Rating=void 0;var s,r=a(t),u=a(n);goog.loadModule(function(e){function t(e,t,o){n.asserts.assertType(null==e.label||e.label instanceof Function||e.label instanceof goog.soy.data.SanitizedContent||e.label instanceof a.UnsanitizedText||goog.isString(e.label),"label",e.label,"?soydata.SanitizedHtml|string|undefined");var s=e.label;if(l("div",null,null,"aria-valuemin",e.options[0].value,"aria-valuemax",e.options[e.options.length-1].value,"aria-valuenow",e.options[e.value]?e.options[e.value].value:"","aria-valuetext",e.options[e.value]?e.options[e.value].title:"","class","rating","data-onmouseleave","handleMouseLeaveEvent"),s){l("label",null,null,"class","rate-label");var d=s;"function"==typeof d?d():null!=d&&u(d),i("label")}l("div",null,null,"class","rating-items");for(var p=e.options.length,c=0;c<p;c++)r("button",null,null,"aria-disabled",e.disabled,"aria-pressed",c<=e.value?"true":"false","aria-label",e.options[c].title?e.options[c].title:c,"class","btn rating-item "+(c<=e.value?e.cssClasses.on:e.cssClasses.off),"data-index",c,"data-onclick","handleClickEvent","data-onmouseover","handleMouseOverEvent","disabled",e.disabled,"title",e.options[c].title,"type","button");i("div"),l("input",null,null,"type","hidden","aria-hidden","true","name",e.inputHiddenName,"value",e.options[e.value]?e.options[e.value].value:e.value),i("input"),i("div")}goog.module("Rating.incrementaldom");var n=goog.require("soy"),a=goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),l=o.elementOpen,i=o.elementClose,r=o.elementVoid,u=(o.elementOpenStart,o.elementOpenEnd,o.text);o.attr;return e.render=t,goog.DEBUG&&(t.soyTemplateName="Rating.render"),e.render.params=["label","cssClasses","disabled","inputHiddenName","options","value"],e.render.types={label:"html|string",cssClasses:"any",disabled:"any",inputHiddenName:"any",options:"any",value:"any"},e.templates=s=e,e});var d=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(r["default"]);u["default"].register(d,s),e.Rating=d,e.templates=s,e["default"]=s});