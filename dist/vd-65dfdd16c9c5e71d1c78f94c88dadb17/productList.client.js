webpackJsonp([9],{136:function(e,t,n){"use strict";n(137)},137:function(e,t,n){(function(t){e.exports=t.ProductList=n(138)}).call(t,n(7))},138:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Init=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),l=r(c),f=n(1),s=r(f),p=n(34),d=r(p),b=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return u(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.products,n=e.localizations;return l.default.createElement("div",{className:"product-list"},t&&t.length>0?l.default.createElement(d.default,{products:t,localizations:n}):null)}}]),t}(l.default.Component);b.propTypes={products:s.default.array.isRequired,localizations:s.default.shape({TitlePrefix:s.default.string,ReadMore:s.default.string.isRequired}).isRequired},t.Init=b}},[136]);