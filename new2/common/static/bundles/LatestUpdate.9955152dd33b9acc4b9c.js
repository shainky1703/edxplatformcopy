!function(e,n){for(var t in n)e[t]=n[t]}(window,webpackJsonp([59],{"./common/static/js/vendor/jquery.cookie.js":function(e,n,t){(function(e){/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e){e.cookie=function(n,t,o){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(t))||null===t||void 0===t)){if(o=e.extend({},o),null!==t&&void 0!==t||(o.expires=-1),"number"==typeof o.expires){var i=o.expires,r=o.expires=new Date;r.setDate(r.getDate()+i)}return t=String(t),document.cookie=[encodeURIComponent(n),"=",o.raw?t:encodeURIComponent(t),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}o=t||{};for(var s,c=o.raw?function(e){return e}:decodeURIComponent,a=document.cookie.split("; "),u=0;s=a[u]&&a[u].split("=");u++)if(c(s[0])===n)return c(s[1]||"");return null}}(e)}).call(n,t(0))},"./openedx/features/course_experience/static/course_experience/js/LatestUpdate.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,"LatestUpdate",function(){return r});var i=t("./common/static/js/vendor/jquery.cookie.js"),r=(t.n(i),function n(t){o(this,n),"hide"===e.cookie("update-message")&&e(t.messageContainer).hide(),e(t.dismissButton).click(function(){e.cookie("update-message","hide",{expires:1}),e(t.messageContainer).hide()})})}.call(n,t(0))}},["./openedx/features/course_experience/static/course_experience/js/LatestUpdate.js"]));