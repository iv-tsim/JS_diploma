!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t),function(){document.body.addEventListener("click",(function(e){var t=e.target;console.log(t);var o=document.querySelector(".clubs-list ul"),n=document.querySelectorAll(".popup"),c=document.querySelector(".popup-menu"),s=function(e){document.getElementById(e.slice(1)).classList.toggle("active")};t.closest(".clubs-list")&&o.classList.toggle("active"),t.closest(".clubs-list")||o.classList.remove("active"),"#callback_form"!==t.dataset.popup&&"#free_visit_form"!==t.dataset.popup||s(t.dataset.popup),(t.classList.contains("close_icon")||t.classList.contains("overlay")||t.classList.contains("close-btn"))&&n.forEach((function(e){return e.classList.remove("active")})),t.closest(".fixed-gift")&&(s("#gift"),t.closest(".fixed-gift").remove()),t.closest(".menu-button")&&("none"===getComputedStyle(c).display?c.style.display="flex":c.style.display="none"),(t.closest(".close-menu-btn")||t.closest(".scroll")||t===c)&&(c.style.display="none")}));var e=document.querySelector(".top-menu"),t=e.offsetTop;window.addEventListener("resize",(function(){t=e.offsetTop})),window.addEventListener("scroll",(function(){var o=document.querySelector("header").clientHeight,n=document.querySelector(".head"),c=document.getElementById("totop");window.pageYOffset>o?c.classList.add("active"):c.classList.remove("active"),window.pageYOffset>=t&&document.documentElement.clientWidth<768?(e.style.position="fixed",n.style.paddingBottom="60px"):(e.style.position="",n.style.paddingBottom="0px")}))}(),new Map([["mozaika",[1999,9900,13900,19900]],["schelkovo",[2999,14900,21900,24900]]]),document.querySelector(".time"),document.querySelector(".club"),document.querySelector(".price-message>input"),document.getElementById("price-total")}]);