define(["exports","./Treeview.soy.js","metal-component/src/all/component","metal-soy/src/Soy"],function(e,t,o,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var p=r(t),u=r(o),s=r(n),l=function(e){function t(){return a(this,t),i(this,e.apply(this,arguments))}return d(t,e),t.prototype.getNodeObj=function(e){for(var t=this.nodes[e[0]],o=1;o<e.length;o++)t=t.children[e[o]];return t},t.prototype.handleNodeClicked_=function(e){this.toggleExpandedState_(e.delegateTarget.parentNode.parentNode)},t.prototype.handleNodeKeyUp_=function(e){13!==e.keyCode&&32!==e.keyCode||this.toggleExpandedState_(e.delegateTarget.parentNode.parentNode)},t.prototype.toggleExpandedState_=function(e){var t=e.getAttribute("data-treeview-path").split("-"),o=this.getNodeObj(t);o.expanded=!o.expanded,this.nodes=this.nodes},t}(u["default"]);s["default"].register(l,p["default"]),l.STATE={nodes:{validator:Array.isArray,valueFn:function(){return[]}}},e["default"]=l});