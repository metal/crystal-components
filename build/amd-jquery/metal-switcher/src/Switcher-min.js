define(["exports","metal/src/metal","./Switcher.soy.js","metal-component/src/all/component","metal-soy/src/Soy","metal-jquery-adapter/src/JQueryAdapter"],function(e,t,r,o,n,c){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(t),f=a(r),p=a(o),d=a(n),h=a(c),y=function(e){function t(){return i(this,t),u(this,e.apply(this,arguments))}return l(t,e),t.prototype.handleClick=function(){this.checked=!this.checked},t}(p["default"]);y.STATE={checked:{validator:s["default"].isBoolean,value:!1}},d["default"].register(y,f["default"]),e["default"]=y,h["default"].register("switcher",y)});