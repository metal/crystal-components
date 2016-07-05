define(["exports","metal/src/metal","metal-component/src/all/component","metal-soy/src/Soy","./Rating.soy.js","metal-jquery-adapter/src/JQueryAdapter"],function(e,t,a,i,r,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var c=o(t),d=o(a),f=o(i),p=o(r),v=o(n),h=function(e){function t(){return l(this,t),s(this,e.apply(this,arguments))}return u(t,e),t.prototype.created=function(){this.ratingClicked_=this.value},t.prototype.handleClickEvent=function(e){if(!this.disabled){var t=parseInt(e.delegateTarget.getAttribute("data-index"),10);t===this.ratingClicked_&&this.canReset?this.reset():this.value=t,this.ratingClicked_=this.value}},t.prototype.handleMouseLeaveEvent=function(){this.setPreviousRate_()},t.prototype.handleMouseOverEvent=function(e){if(!this.disabled){var t=Number.parseInt(e.delegateTarget.getAttribute("data-index"),10);this.value=t}},t.prototype.reset=function(){this.value=-1,this.ratingClicked_=-1},t.prototype.setPreviousRate_=function(){this.value=this.ratingClicked_},t}(d["default"]);h.STATE={canReset:{value:!0,validator:c["default"].isBoolean},cssClasses:{value:{off:"glyphicon glyphicon-star-empty",on:"glyphicon glyphicon-star"}},disabled:{value:!1,validator:c["default"].isBoolean},inputHiddenName:{value:"rate",validator:c["default"].isString},label:{value:"",validator:c["default"].isString},options:{validator:Array.isArray,value:[{value:1,title:""},{value:2,title:""},{value:3,title:""},{value:4,title:""},{value:5,title:""}]},value:{validator:c["default"].isNumber,value:-1}},f["default"].register(h,p["default"]),e["default"]=h,v["default"].register("rating",h)});