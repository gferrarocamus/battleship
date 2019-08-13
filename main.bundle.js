!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=7)}([function(n,t,e){n.exports=e.p+"68ab8dbc4759ea75a8e0c48f1c209cb0.svg"},function(n,t,e){n.exports=e.p+"07bc50ad38cd25bca5280acfce529eae.svg"},function(n,t,e){var r=e(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(5)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(t=n.exports=e(4)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700,900|Poppins:400,500,700&display=swap);",""]),t.push([n.i,":root {\n  --tile: rgba(129, 204, 184, 0.7);\n  --solid-tile: rgb(129, 204, 184);\n  --bright-purple: #9776a8;\n  --dark-purple: #7d6498;\n  --lilac: #8597cb;\n  --water: #67b9cc;\n  --marine: #28567f;\n  --bright-blue: #0096e7;\n  --light-blue: #d1e8f9;\n  --light-gray: #e6e7e8;\n  --middle-gray: #bdc3c7;\n  --dark-gray: #95a5a5;\n  --slate: #546a78;\n  --pink: #d75e71;\n  --orange: #f29d37;\n  --lime: #a4e868;\n  --green: #41ae5f;\n  --leaf: #31a185;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  background-color: var(--tile);\n}\n\nh1 {\n  font-family: 'Cinzel Decorative', cursive;\n  font-size: 48px;\n  font-weight: 900;\n  text-align: center;\n}\n\nh4 {\n  font-size: 1.3em;\n  margin-bottom: 20px;\n  margin-top: 0px;\n}\n\n.main-container {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-bottom: 50px;\n}\n\n#main {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  align-content: flex-start;\n  width: 100%;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.board-container {\n  position: relative;\n  text-align: center;\n}\n\n.board {\n  background-color: var(--slate);\n  width: 400px;\n  height: 400px;\n  display: grid;\n  margin-bottom: 20px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-gap: 1px;\n  box-sizing: border-box;\n  border: 2px solid black;\n  position: relative;\n}\n\n.playerBoard,\n.computerBoard,\n.computerBoard.inactive {\n  background-color: var(--light-gray);\n}\n\n.playerBoard.ship {\n  background-color: var(--marine);\n}\n\n.playerBoard.ship.horizontal {\n  border-top: 2px solid var(--bright-blue);\n  border-bottom: 2px solid var(--bright-blue);\n}\n\n.playerBoard.ship.vertical {\n  border-right: 2px solid var(--bright-blue);\n  border-left: 2px solid var(--bright-blue);\n}\n\n.playerBoard.ship.first-cell.horizontal {\n  border-left: 2px solid var(--bright-blue);\n}\n\n.playerBoard.ship.last-cell.horizontal {\n  border-right: 2px solid var(--bright-blue);\n}\n\n.playerBoard.ship.first-cell.vertical {\n  border-top: 2px solid var(--bright-blue);\n}\n\n.playerBoard.ship.last-cell.vertical {\n  border-bottom: 2px solid var(--bright-blue);\n}\n\n.hit,\n.miss {\n  pointer-events: none;\n}\n\n.miss {\n  background-color: var(--water);\n}\n\n.computerBoard.hit,\n.playerBoard.hit {\n  background-color: brown;\n}\n\n#message {\n  font-size: 30px;\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.button {\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  font-size: 1em;\n  padding: 15px;\n  min-width: 150px;\n  background-color: var(--slate);\n  border: 2px solid black;\n  color: var(--light-gray);\n  box-shadow: 5px 5px var(--bright-blue);\n}\n\n#play {\n  position: absolute;\n  top: calc(50% - 29.5px);\n  left: calc(50% - 75px);\n  box-shadow: 5px 5px var(--dark-purple);\n}\n\n#restart {\n  margin: 0 auto 50px;\n  width: 150px;\n  background-color: var(--marine);\n  box-shadow: 5px 5px var(--lilac);\n}\n\n.inactive {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.hide {\n  display: none;\n}\n\n.relative {\n  position: relative;\n}\n\n#playerStats,\n#computerStats {\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.shipResults {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 20px;\n}\n\n.shipIcon {\n  width: 26px;\n}\n\n@media (max-width: 880px) {\n  .board-container:first-child {\n    margin-bottom: 50px;\n  }\n\n  .board {\n    width: 300px;\n    height: 300px;\n  }\n\n  .shipIcon {\n    width: 22px;\n  }\n}\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[e].concat(i).concat([o]).join("\n")}var a,s,l;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),l=null,c=0,d=[],u=e(6);function p(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function f(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function h(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),d.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(t,o)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=d.indexOf(n);t>=0&&d.splice(t,1)}function g(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return b(t,n.attrs),h(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function v(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=c++;e=l||(l=g(t)),r=S.bind(null,e,a,!1),o=S.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),h(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),o=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=g(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){m(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=f(n,t);return p(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,r.push(s)}n&&p(f(n,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var y,x=(y=[],function(n,t){return y[n]=t,y.filter(Boolean).join("\n")});function S(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,t,e){"use strict";e.r(t);var r=(n,t)=>{const e=[];e.length=n,e.fill(0);return{length:n,cells:e,isSunk:()=>e.every(n=>"X"===n),hit:n=>(e[n]="X",e),isHorizontal:t}};var o=(n,t,e=null,r=null)=>{return{active:n,board:t,placedShips:e,AI:r,sunkShips:()=>{if(null===e)return e;let n=0;for(let t=0;t<e.length;t++)"object"==typeof e[t]&&e[t].isSunk()&&n++;return n}}};var i=()=>{const n=[];n.length=10;for(let t=0;t<10;t++)n[t]=new Array(10).fill(" ");return{matrix:n,placeShip:(t,e)=>{if(!((t,e,r)=>{if(" "!==n[r[0]][r[1]]||e&&r[1]+t>10||!e&&r[0]+t>10)return!1;const o=r[0],i=r[1];let a=o-1;0===o&&(a=0);let s,l,c=i-1;0===i&&(c=0),e?(s=o+2,9===o&&(s=10),l=i+t+1,i+t===10&&(l=10)):(s=o+t+1,o+t===10&&(s=10),l=i+2,9===i&&(l=10));for(let t=a;t<s;t++)for(let e=c;e<l;e++)if(" "!==n[t][e])return!1;return!0})(t.length,t.isHorizontal,e))return-1;if(t.isHorizontal){const r=e[0];for(let o=e[1],i=0;o<e[1]+t.length;o++,i++)t.cells[i]=[r,o],n[r][o]=t}else{const r=e[1];for(let o=e[0],i=0;o<e[0]+t.length;o++,i++)t.cells[i]=[o,r],n[o][r]=t}return t},receiveAttack:(t,e)=>{if(" "===n[t][e])return n[t][e]="M",!1;const r=n[t][e],o=r.cells.findIndex(n=>n[0]===t&&n[1]===e);return r.hit(o),!0},allSunk:()=>{for(let t=0;t<n.length;t++)for(let e=0;e<n.length;e++)if("object"==typeof n[t][e]&&!n[t][e].isSunk())return!1;return!0}}},a=e(0),s=e.n(a),l=e(1),c=e.n(l);var d={displayBoard:(n,t=null)=>{for(let e=0;e<10;e++)for(let r=0;r<10;r++){const o=document.createElement("div");null===t?(o.setAttribute("data-index",`${e}${r}`),o.classList.add("computerBoard")):(o.setAttribute("id",`${e}${r}`),o.classList.add("playerBoard")," "!==t[e][r]&&"M"!==t[e][r]&&o.classList.add("ship")),n.appendChild(o)}},displayShips:n=>{n.forEach(n=>{for(let t=0;t<n.cells.length;t++){const e=document.getElementById(`${n.cells[t][0]}${n.cells[t][1]}`);0===t&&e.classList.add("first-cell"),t===n.cells.length-1&&e.classList.add("last-cell"),n.isHorizontal?e.classList.add("horizontal"):e.classList.add("vertical")}})},addClassToDiv:(n,t)=>{n.classList.add(t)},cleanBoard:(n,t)=>{const e=document.querySelectorAll(n),r=document.getElementById(t);[...e].forEach(n=>{r.removeChild(n)})},displayMessage:n=>{document.getElementById("message").textContent=n},displayStats:(n,t)=>{const e=t.sunkShips();n.innerHTML=`${e}/10 Ships Sunk`},displayShipIcons:n=>{for(let t=0;t<10;t++){const t=new Image;t.src=s.a,t.classList.add("shipIcon"),n.appendChild(t)}},updateShipIcons:(n,t)=>{if(+t.sunkShips()<1)return;const e=+t.sunkShips()-1;[...n.children][e].src=c.a},displayRestartButton:()=>{const n=document.getElementById("restart");n.classList.remove("hide"),n.addEventListener("click",()=>{location.reload()},!1)}};const u=()=>{return[Math.round(9*Math.random()),Math.round(9*Math.random())]},p=()=>Math.random()>.5;var f=(n={coordinates:[],isHorizontal:null,isSunk:!1},t=[])=>{const e=(n,e)=>-1===t.findIndex(t=>t[0]===n&&t[1]===e),r=n=>[n+1,n-1].filter(n=>n>-1&&n<10),o=()=>{const t=[...n.coordinates].pop(),o=t[0],i=t[1];if(null===n.isHorizontal){const n=r(i);for(let t=0;t<n.length;t++)if(e(o,n[t]))return[o,n[t]];const t=r(o);for(let n=0;n<t.length;n++)if(e(t[n],i))return[t[n],i];return!1}if(n.isHorizontal){const n=r(i);for(let t=0;t<n.length;t++)if(e(o,n[t]))return[o,n[t]]}else{const n=r(o);for(let t=0;t<n.length;t++)if(e(n[t],i))return[n[t],i]}return-1},i=()=>{for(;;){const n=u();if(e(n[0],n[1]))return n}};return{pastMoves:t,getCoordinates:()=>{if(0===n.coordinates.length)return i();let t=o();return console.log(n.coordinates),console.log(t),-1===t&&(n.coordinates=n.coordinates.slice(0,1),t=o()),!1===t||-1===t?(console.log("false"),n={coordinates:[],isHorizontal:null,isSunk:!1},i()):t},learn:(t,e)=>{const r=[...n.coordinates].pop()||null;null!==r&&(null===n.isHorizontal&&"hit"===e?t[0]===r[0]?n.isHorizontal=!0:t[1]===r[1]&&(n.isHorizontal=!1):null!==n.isHorizontal&&"miss"===e&&(n.coordinates=n.coordinates.slice(0,1))),"hit"===e&&n.coordinates.push(t),n.coordinates.length>=4&&(n={coordinates:[],isHorizontal:null,isSunk:!1})}}};e(2);var h=(()=>{const n=n=>{let t=0,e=0,o=0,i=0;const a=[];for(;t<4;){const e=r(1,!0),o=n.placeShip(e,u());-1!==o&&(t++,a.push(o))}for(;e<3;){const t=r(2,p()),o=n.placeShip(t,u());-1!==o&&(e++,a.push(o))}for(;o<2;){const t=r(3,p()),e=n.placeShip(t,u());-1!==e&&(o++,a.push(e))}for(;i<1;){const t=r(4,p()),e=n.placeShip(t,u());-1!==e&&(i++,a.push(e))}return a},t=(n,t)=>{const e=document.getElementById("playerShipResults"),r=document.getElementById("computerShipResults");if(d.updateShipIcons(e,n),d.updateShipIcons(r,t),n.board.allSunk()||t.board.allSunk()){n.active=!1,t.active=!1;const e=t.board.allSunk()?"Human Player Wins!":"The Machine Wins!";d.displayMessage(e);const r=document.getElementById("playerStats"),o=document.getElementById("computerStats");return d.displayStats(r,n),d.displayStats(o,t),d.displayRestartButton(),!0}return!1},e=(n,t,e,r,o)=>{if(!n.active)return;const i=t.board.receiveAttack(e,r)?"hit":"miss";return d.addClassToDiv(o,i),"miss"===i&&(n.active=!1,t.active=!0),i},a=(n,r)=>{console.log("computer");const o=r.AI.getCoordinates();console.log(o);const i=o[0],a=o[1],s=document.getElementById(`${i}${a}`),l=e(r,n,i,a,s);r.AI.pastMoves.push(o),r.AI.learn(o,l),t(n,r)};return{startGame:()=>{const r=document.getElementById("playerBoard"),s=document.getElementById("computerBoard"),l=i(),c=i(),u=n(l),p=n(c),h=o(!0,l,u),m=o(!1,c,p,f());d.displayBoard(r,h.board.matrix),d.displayBoard(s),d.displayShips(u);const g=n=>{const r=n.target.getAttribute("data-index")[0],o=n.target.getAttribute("data-index")[1];if(e(h,m,+r,+o,n.target),!t(h,m))for(;m.active;)a(h,m)};[...document.querySelectorAll(".computerBoard")].forEach(n=>{n.addEventListener("click",g,!1),d.addClassToDiv(n,"inactive")})}}})();const m=document.getElementById("randomize");m.addEventListener("click",()=>{d.cleanBoard(".playerBoard","playerBoard"),d.cleanBoard(".computerBoard","computerBoard"),h.startGame()},!1);const g=document.getElementById("play");g.addEventListener("click",()=>{[...document.querySelectorAll(".computerBoard")].forEach(n=>{n.classList.remove("inactive")}),d.addClassToDiv(m,"hide"),d.addClassToDiv(g,"hide");const n=document.getElementById("playerShipResults"),t=document.getElementById("computerShipResults");d.displayShipIcons(n),d.displayShipIcons(t)},!1),h.startGame()}]);