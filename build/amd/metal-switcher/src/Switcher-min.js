define(["exports","metal/src/metal","./Switcher.soy.js","metal-component/src/all/component","metal-soy/src/Soy"],function(e,t,o,n,r){"use strict";function c(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var l=c(t),s=c(o),f=c(n),p=c(r),d=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.handleClick=function(){this.checked=!this.checked},t}(f["default"]);d.STATE={checked:{validator:l["default"].isBoolean,value:!1}},p["default"].register(d,s["default"]),e["default"]=d});