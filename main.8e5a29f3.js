parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return r(e)||a(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return o(e)}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var i=document.querySelector("table"),c=document.querySelector("tbody"),l=document.querySelector("body"),s=-1,u=function(e,n,t){var a=[].slice.call(c.rows);a.sort(function(t,a){var r=t.cells[e].innerHTML,o=a.cells[e].innerHTML;switch(n){case"Name":case"Position":case"Office":return r<o?-1:r>o?1:0;case"Age":return r-o;case"Salary":return parseFloat(r.slice(1))-parseFloat(o.slice(1))}}),t&&a.reverse(),i.removeChild(c);for(var r=0;r<a.length;r++)c.appendChild(a[r]);i.appendChild(c)};i.addEventListener("click",function(e){var n=e.target;if("TH"===n.nodeName){var t=n.cellIndex,a=n.innerHTML;u(t,a,s===t),s=s===t?-1:t}}),c.addEventListener("click",function(n){var t=n.target.closest("TR");"SELECT"!==n.target.nodeName&&"INPUT"!==n.target.nodeName&&(t.classList.contains("active")?t.classList.remove("active"):(e(c.children).forEach(function(e){return e.classList.remove("active")}),t.classList.add("active")))}),l.insertAdjacentHTML("beforeend",'\n  <form class="new-employee-form">\n    <label>\n      Name: \n        <input name="name" type="text" data-qa="name">\n    </label>\n    <label>\n      Position: \n        <input name="position" type="text" data-qa="position">\n    </label>\n    <label>\n      Office: \n        <select name="office">\n          <option value="Tokyo" selected>Tokyo</option>\n          <option value="Singapore">Singapore</option>\n          <option value="London">London</option>\n          <option value="New York">New York</option>\n          <option value="Edinburgh">Edinburgh</option>\n          <option value="San Francisco">San Francisco</option>\n        </select>\n    </label>\n    <label>\n      Age: \n      <input name="age" type="number" data-qa="age">\n    </label>\n    <label>\n      Salary: \n        <input name="salary" type="number"  data-qa="salary" >\n    </label>\n    <button>Save to table</button>\n    </form>\n');var d=document.querySelector(".new-employee-form"),p=d.querySelectorAll("input");function v(e){for(var n=e.toLowerCase(),t=n[0].toUpperCase(),a=1;a<n.length;a++)" "===n[a-1]?t+=n[a].toUpperCase():t+=n[a];return t}function f(e){return""===e?"":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(+e)}var m=function(e){var n=e.value;switch(e.name){case"name":return/^([ \u00c0-\u01ffa-zA-Z-])+$/.test(n)&&n.length>3;case"position":return/^([ \u00c0-\u01ffa-zA-Z-])+$/.test(n);case"age":return parseInt(n)>=18&&parseInt(n)<=90;case"salary":return parseInt(n)>=1;default:return""!==n}},y=function(e,n,t,a,r){l.insertAdjacentHTML("afterbegin",'\n    <div data-qa="notification" class="notification '.concat(r,'">\n      <h2 class="title">\n        ').concat(t,"\n      </h2>\n      <p>").concat(a,"</p>\n    </div>\n  "));var o=document.querySelector(".notification");o.style.marginTop="".concat(e,"px"),o.style.marginLeft="".concat(n,"px"),o.style.width="max-content",setTimeout(function(){o.remove()},2e3)};d.addEventListener("input",function(e){p.forEach(function(e){m(e)||(e.style.border="2px solid red"),m(e)&&(e.style.border="none"),""===e.value&&(e.style.border="none")})}),d.addEventListener("input",function(e){var n=e.target;"INPUT"===n.tagName&&(m(n)||(n.style.color="red"),m(n)&&(n.style.color=""))}),d.addEventListener("submit",function(n){n.preventDefault();var t=0,a="";if(p.forEach(function(e){if(!m(e)){switch(e.name){case"name":0!==e.value.length?a+='\n            "Name" value has <br>less than 4 letters<br><br>':a+='  "Name" input is empty<br><br>';break;case"position":0===e.value.length?a+='\n            "Position" input is empty<br><br>':a+="";break;case"age":0!==e.value.length?a+='\n            "Age" value is less<br>than 18 or more than 90<br><br>':a+='\n            "Age" input is empty<br><br>';break;case"salary":0===e.value.length?a+='\n            "Salary" input is empty<br><br>':a+=""}t++,e.style.border="2px solid red"}}),t&&y(100,10,"Try again",a,"error"),!t){y(100,10,"All is correct!","Good job =)","success");var r=f(e(p)[3].value),o=v(e(p)[0].value),i=v(e(p)[1].value),l=document.getElementsByName("office")[0].value,s=e(p)[2].value;c.insertAdjacentHTML("beforeend","\n      <tr>\n        <td>".concat(o,"</td>\n        <td>").concat(i,"</td>\n        <td>").concat(l,"</td>\n        <td>").concat(s,"</td>\n        <td>").concat(r,"</td>\n      </tr>\n    ")),p.forEach(function(e){e.value=""}),t=!t}}),c.addEventListener("dblclick",function(n){var t=n.target;if("TD"===n.target.tagName){var a=document.createElement("input"),r=document.createElement("select"),o=t.textContent;if(a.value="",a.classList.add("cell-input"),t.removeChild(t.firstChild),0!==t.cellIndex&&1!==t.cellIndex||t.appendChild(a),2===t.cellIndex)r.insertAdjacentHTML("beforeend",'\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh" >Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    '),t.appendChild(r),e(document.querySelectorAll("option")).forEach(function(e){e.value===o&&e.setAttribute("selected","selected")});r.style.border="1px solid #808080",r.style.borderRadius="4px",r.style.color="#808080",r.style.padding="4px",r.style.outlineColor="#808080",3!==t.cellIndex&&4!==t.cellIndex||(t.appendChild(a),a.type="number"),a.focus(),document.addEventListener("click",function(e){e.target.contains(r)||(t.removeChild(r),t.appendChild(document.createTextNode(r.value)))}),r.addEventListener("keydown",function(e){"Enter"===e.code&&(t.removeChild(r),t.appendChild(document.createTextNode(r.value)))});var i=0;a.addEventListener("input",function(){c(a)||(a.style.color="red",i++),c(a)&&(a.style.color="",i=0)}),a.addEventListener("keyup",function(e){if("Enter"===e.code&&(t.removeChild(a),(i||""===a.value)&&t.appendChild(document.createTextNode(o)),!i)){var n=l(a.value,t.cellIndex);t.appendChild(document.createTextNode(n))}}),a.addEventListener("blur",function(){if(t.removeChild(a),(i||""===a.value)&&t.appendChild(document.createTextNode(o)),!i){var e=l(a.value,t.cellIndex);t.appendChild(document.createTextNode(e))}})}function c(e){var n=e.value;switch(e.parentElement.cellIndex){case 0:return/^([ \u00c0-\u01ffa-zA-Z-])+$/.test(n)&&n.length>3;case 1:return/^([ \u00c0-\u01ffa-zA-Z-])+$/.test(n);case 3:return parseInt(n)>=18&&parseInt(n)<=90;case 4:return/^\d+$/.test(n)}}function l(e,n){switch(n){case 0:case 1:return v(e);case 3:return e;case 4:return f(e)}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.8e5a29f3.js.map