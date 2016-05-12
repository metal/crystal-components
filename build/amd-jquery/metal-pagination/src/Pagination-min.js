define(["exports","metal/src/metal","./Pagination.soy","metal-component/src/all/component","metal-soy/src/Soy","metal-jquery-adapter/src/JQueryAdapter"],function(t,e,a,o,r,n){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var p=s(e),f=s(a),c=s(o),h=s(r),d=s(n),g=function(t){function e(){return i(this,e),u(this,t.apply(this,arguments))}return l(e,t),e.prototype.created=function(){this.lastState_={page:this.page},this.on(e.Events.CHANGE_REQUEST,this.defaultChangeRequestFn_,!0)},e.prototype.defaultChangeRequestFn_=function(t){this.setState_(t.state)},e.prototype.dispatchRequest_=function(t){this.emit(e.Events.CHANGE_REQUEST,{lastState:this.lastState_,offset:this.offset,state:t,total:this.total})},e.prototype.getOffsetPageNumber=function(){return this.offset+this.page},e.prototype.getOffsetTotalPages=function(){return this.offset+this.total},e.prototype.next=function(){var t=this.page,e=this.total;this.dispatchRequest_({page:this.circular&&t===e-1?0:Math.min(e,++t)})},e.prototype.onClickItem=function(t){var e=t.delegateTarget;t.preventDefault();var a=parseInt(e.getAttribute("data-index"));this.dispatchRequest_({page:a})},e.prototype.onClickControls=function(t){var e=t.delegateTarget;t.preventDefault();var a=parseInt(e.getAttribute("data-control-index"));switch(a){case 0:this.prev();break;case 1:this.next()}},e.prototype.prev=function(){var t=this.page,e=this.total;this.dispatchRequest_({page:this.circular&&0===t?e-1:Math.max(0,--t)})},e.prototype.setState_=function(t){this.page=t.page,this.lastState_=t},e}(c["default"]);h["default"].register(g,f["default"]),g.STATE={circular:{validator:p["default"].isBoolean,value:!0},offset:{validator:p["default"].isNumber,value:1},page:{validator:p["default"].isNumber,value:0},showControls:{validator:p["default"].isBoolean,value:!0},strings:{validator:p["default"].isObject,value:{next:"Next",prev:"Prev"}},total:{validator:p["default"].isNumber,value:0}},g.Events={CHANGE_REQUEST:"changeRequest"},t["default"]=g,d["default"].register("pagination",g)});