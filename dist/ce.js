!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Ce={})}(this,function(e){"use strict";var i=function(e){return"string"==typeof e};e.h=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[];if(!i(e))throw new Error("No valid tag given");var o=document.createElement(e);return Object.keys(n).forEach(function(e){var t=n[e];"function"==typeof t?o.addEventListener("click",function(e){t(o,e)}):o.setAttribute(e,t)}),t.forEach(function(e){i(e)?o.appendChild(document.createTextNode(e)):o.appendChild(e)}),o},e.version="0.1.0",Object.defineProperty(e,"__esModule",{value:!0})});