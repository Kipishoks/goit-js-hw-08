var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,v=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=a.test(e);return l||f.test(e)?u(e.slice(2),l?2:8):o.test(e)?i:+e}t=function(e,t,i){var r=!0,o=!0;if("function"!=typeof e)throw TypeError(n);return p(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),function(e,t,i){var r,o,a,f,u,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function h(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function j(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function T(){var e,n,i,r=v();if(j(r))return O(r);u=setTimeout(T,(e=r-l,n=r-c,i=t-e,d?g(i,a-n):i))}function O(e){return(u=void 0,b&&r)?h(e):(r=o=void 0,f)}function S(){var e,n=v(),i=j(n);if(r=arguments,o=this,l=n,i){if(void 0===u)return c=e=l,u=setTimeout(T,t),s?h(e):f;if(d)return u=setTimeout(T,t),h(l)}return void 0===u&&(u=setTimeout(T,t)),f}return t=y(t)||0,p(i)&&(s=!!i.leading,a=(d="maxWait"in i)?m(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=o=u=void 0},S.flush=function(){return void 0===u?f:O(v())},S}(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),h="feedback-form-state";let j=JSON.parse(localStorage.getItem(h))||{};j.email&&(b.email.value=j.email),j.message&&(b.message.value=j.message),b.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){j[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(j))},1e3)),b.addEventListener("submit",function(e){if(!j.email||!j.message)return e.preventDefault(),alert("Check the data please");e.preventDefault(),console.log(j),e.currentTarget.reset(),j={},localStorage.removeItem(h)});
//# sourceMappingURL=03-feedback.3bb46a99.js.map