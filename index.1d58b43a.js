!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),a.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){var n=d.default(e,t,"get");return u.default(e,n)};var d=c(a("1UHsN")),u=c(a("ffZzF"));function c(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){f.default(e,t),t.set(e,n)};var l,f=(l=a("5k7tO"))&&l.__esModule?l:{default:l};var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t){p.default(e,t),t.add(e)};var p=function(e){return e&&e.__esModule?e:{default:e}}(a("5k7tO"));var h={};function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){t&&y(e.prototype,t);n&&y(e,n);return e};var _=new WeakMap,g=new WeakSet;function b(){var e=this;this.addButton.addEventListener("click",(function(){e.addItem(e.addInput.value.trim()),e.addInput.value=""})),this.listEl.addEventListener("click",(function(t){t.target.dataset.removeItem&&e.removeItem(t.target.dataset.removeItem)})),this.listEl.addEventListener("change",(function(t){t.target.dataset.itemId&&(t.target.checked?e.markItemAsChecked(t.target.dataset.itemId):e.markItemAsUnchecked(t.target.dataset.itemId))}))}new(function(){"use strict";function t(){e(i)(this,t),e(m)(this,g),e(s)(this,_,{writable:!0,value:[]}),this.addButton=document.querySelector("#addButton"),this.addInput=document.querySelector("#addInput"),this.listEl=document.querySelector("#list"),e(v)(this,g,b).call(this),this.load()}return e(h)(t,[{key:"addItem",value:function(t){if(t){"string"==typeof t&&(t={id:Date.now(),completed:!1,content:t}),e(o)(this,_).push(t);var n=this.createElForItem(t);this.listEl.append(n),this.save()}}},{key:"removeItem",value:function(t){"string"==typeof t&&(t=Number(t));var n=e(o)(this,_).findIndex((function(e){return e.id===t}));n>=0&&e(o)(this,_).splice(n,1);var r=document.querySelector('[data-item-id = "'.concat(t,'"]'));r&&r.remove(),this.save()}},{key:"markItemAsChecked",value:function(t){"string"==typeof t&&(t=Number(t));var n=e(o)(this,_).find((function(e){return e.id===t}));if(n){n.completed=!0;var r=document.querySelector('[data-item-id = "'.concat(t,'"]'));r&&r.classList.add("item_done")}this.save()}},{key:"markItemAsUnchecked",value:function(t){"string"==typeof t&&(t=Number(t));var n=e(o)(this,_).find((function(e){return e.id===t}));if(n){n.completed=!1;var r=document.querySelector('[data-item-id = "'.concat(t,'"]'));r&&r.classList.remove("item_done")}this.save()}},{key:"save",value:function(){var t=JSON.stringify(e(o)(this,_));localStorage.setItem("items",t)}},{key:"load",value:function(){try{var e=this,t=localStorage.getItem("items");JSON.parse(t).forEach((function(t){return e.addItem(t)}))}catch(e){console.error("Error")}}},{key:"createElForItem",value:function(e){var t=document.createElement("div");return t.classList.add("item"),t.dataset.itemId=e.id,e.completed&&t.classList.add("item_done"),t.innerHTML='\n        <input type="checkbox" class="item-checkbox" data-item-id="'.concat(e.id,'" ').concat(e.completed?"checked":"",'>\n        <div class="item-content">').concat(e.content,'</div>\n        <button type="button" class="item-remove-button" data-remove-item="').concat(e.id,'">&times;</button>\n        '),t}}]),t}())}();
//# sourceMappingURL=index.1d58b43a.js.map
