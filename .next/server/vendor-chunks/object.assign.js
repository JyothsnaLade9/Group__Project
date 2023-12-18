"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/object.assign";
exports.ids = ["vendor-chunks/object.assign"];
exports.modules = {

/***/ "(ssr)/./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n// modified from https://github.com/es-shims/es6-shim\nvar objectKeys = __webpack_require__(/*! object-keys */ \"(ssr)/./node_modules/object-keys/index.js\");\nvar hasSymbols = __webpack_require__(/*! has-symbols/shams */ \"(ssr)/./node_modules/has-symbols/shams.js\")();\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\nvar toObject = Object;\nvar $push = callBound('Array.prototype.push');\nvar $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable');\nvar originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;\n\n// eslint-disable-next-line no-unused-vars\nmodule.exports = function assign(target, source1) {\n\tif (target == null) { throw new TypeError('target must be an object'); }\n\tvar to = toObject(target); // step 1\n\tif (arguments.length === 1) {\n\t\treturn to; // step 2\n\t}\n\tfor (var s = 1; s < arguments.length; ++s) {\n\t\tvar from = toObject(arguments[s]); // step 3.a.i\n\n\t\t// step 3.a.ii:\n\t\tvar keys = objectKeys(from);\n\t\tvar getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);\n\t\tif (getSymbols) {\n\t\t\tvar syms = getSymbols(from);\n\t\t\tfor (var j = 0; j < syms.length; ++j) {\n\t\t\t\tvar key = syms[j];\n\t\t\t\tif ($propIsEnumerable(from, key)) {\n\t\t\t\t\t$push(keys, key);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// step 3.a.iii:\n\t\tfor (var i = 0; i < keys.length; ++i) {\n\t\t\tvar nextKey = keys[i];\n\t\t\tif ($propIsEnumerable(from, nextKey)) { // step 3.a.iii.2\n\t\t\t\tvar propValue = from[nextKey]; // step 3.a.iii.2.a\n\t\t\t\tto[nextKey] = propValue; // step 3.a.iii.2.b\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to; // step 4\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9pbXBsZW1lbnRhdGlvbi5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLDhEQUFhO0FBQ3RDLGlCQUFpQixtQkFBTyxDQUFDLG9FQUFtQjtBQUM1QyxnQkFBZ0IsbUJBQU8sQ0FBQyx3RUFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qiw0QkFBNEI7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBLDJDQUEyQztBQUMzQyxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWNsaWVudC8uL25vZGVfbW9kdWxlcy9vYmplY3QuYXNzaWduL2ltcGxlbWVudGF0aW9uLmpzP2UxNTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBtb2RpZmllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczYtc2hpbVxudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scy9zaGFtcycpKCk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xudmFyIHRvT2JqZWN0ID0gT2JqZWN0O1xudmFyICRwdXNoID0gY2FsbEJvdW5kKCdBcnJheS5wcm90b3R5cGUucHVzaCcpO1xudmFyICRwcm9wSXNFbnVtZXJhYmxlID0gY2FsbEJvdW5kKCdPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlJyk7XG52YXIgb3JpZ2luYWxHZXRTeW1ib2xzID0gaGFzU3ltYm9scyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgOiBudWxsO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlMSkge1xuXHRpZiAodGFyZ2V0ID09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0Jyk7IH1cblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTsgLy8gc3RlcCAxXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0cmV0dXJuIHRvOyAvLyBzdGVwIDJcblx0fVxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7ICsrcykge1xuXHRcdHZhciBmcm9tID0gdG9PYmplY3QoYXJndW1lbnRzW3NdKTsgLy8gc3RlcCAzLmEuaVxuXG5cdFx0Ly8gc3RlcCAzLmEuaWk6XG5cdFx0dmFyIGtleXMgPSBvYmplY3RLZXlzKGZyb20pO1xuXHRcdHZhciBnZXRTeW1ib2xzID0gaGFzU3ltYm9scyAmJiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyB8fCBvcmlnaW5hbEdldFN5bWJvbHMpO1xuXHRcdGlmIChnZXRTeW1ib2xzKSB7XG5cdFx0XHR2YXIgc3ltcyA9IGdldFN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHN5bXMubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0dmFyIGtleSA9IHN5bXNbal07XG5cdFx0XHRcdGlmICgkcHJvcElzRW51bWVyYWJsZShmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdFx0JHB1c2goa2V5cywga2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHN0ZXAgMy5hLmlpaTpcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdHZhciBuZXh0S2V5ID0ga2V5c1tpXTtcblx0XHRcdGlmICgkcHJvcElzRW51bWVyYWJsZShmcm9tLCBuZXh0S2V5KSkgeyAvLyBzdGVwIDMuYS5paWkuMlxuXHRcdFx0XHR2YXIgcHJvcFZhbHVlID0gZnJvbVtuZXh0S2V5XTsgLy8gc3RlcCAzLmEuaWlpLjIuYVxuXHRcdFx0XHR0b1tuZXh0S2V5XSA9IHByb3BWYWx1ZTsgLy8gc3RlcCAzLmEuaWlpLjIuYlxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bzsgLy8gc3RlcCA0XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/object.assign/implementation.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar defineProperties = __webpack_require__(/*! define-properties */ \"(ssr)/./node_modules/define-properties/index.js\");\nvar callBind = __webpack_require__(/*! call-bind */ \"(ssr)/./node_modules/call-bind/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"(ssr)/./node_modules/object.assign/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(ssr)/./node_modules/object.assign/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"(ssr)/./node_modules/object.assign/shim.js\");\n\nvar polyfill = callBind.apply(getPolyfill());\n// eslint-disable-next-line no-unused-vars\nvar bound = function assign(target, source1) {\n\treturn polyfill(Object, arguments);\n};\n\ndefineProperties(bound, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = bound;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYix1QkFBdUIsbUJBQU8sQ0FBQywwRUFBbUI7QUFDbEQsZUFBZSxtQkFBTyxDQUFDLDBEQUFXOztBQUVsQyxxQkFBcUIsbUJBQU8sQ0FBQyw4RUFBa0I7QUFDL0Msa0JBQWtCLG1CQUFPLENBQUMsa0VBQVk7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLDBEQUFROztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL29iamVjdC5hc3NpZ24vaW5kZXguanM/NThjMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJ2NhbGwtYmluZCcpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgcG9seWZpbGwgPSBjYWxsQmluZC5hcHBseShnZXRQb2x5ZmlsbCgpKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xudmFyIGJvdW5kID0gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlMSkge1xuXHRyZXR1cm4gcG9seWZpbGwoT2JqZWN0LCBhcmd1bWVudHMpO1xufTtcblxuZGVmaW5lUHJvcGVydGllcyhib3VuZCwge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/object.assign/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"(ssr)/./node_modules/object.assign/implementation.js\");\n\nvar lacksProperEnumerationOrder = function () {\n\tif (!Object.assign) {\n\t\treturn false;\n\t}\n\t/*\n\t * v8, specifically in node 4.x, has a bug with incorrect property enumeration order\n\t * note: this does not detect the bug unless there's 20 characters\n\t */\n\tvar str = 'abcdefghijklmnopqrst';\n\tvar letters = str.split('');\n\tvar map = {};\n\tfor (var i = 0; i < letters.length; ++i) {\n\t\tmap[letters[i]] = letters[i];\n\t}\n\tvar obj = Object.assign({}, map);\n\tvar actual = '';\n\tfor (var k in obj) {\n\t\tactual += k;\n\t}\n\treturn str !== actual;\n};\n\nvar assignHasPendingExceptions = function () {\n\tif (!Object.assign || !Object.preventExtensions) {\n\t\treturn false;\n\t}\n\t/*\n\t * Firefox 37 still has \"pending exception\" logic in its Object.assign implementation,\n\t * which is 72% slower than our shim, and Firefox 40's native implementation.\n\t */\n\tvar thrower = Object.preventExtensions({ 1: 2 });\n\ttry {\n\t\tObject.assign(thrower, 'xy');\n\t} catch (e) {\n\t\treturn thrower[1] === 'y';\n\t}\n\treturn false;\n};\n\nmodule.exports = function getPolyfill() {\n\tif (!Object.assign) {\n\t\treturn implementation;\n\t}\n\tif (lacksProperEnumerationOrder()) {\n\t\treturn implementation;\n\t}\n\tif (assignHasPendingExceptions()) {\n\t\treturn implementation;\n\t}\n\treturn Object.assign;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9wb2x5ZmlsbC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixxQkFBcUIsbUJBQU8sQ0FBQyw4RUFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTTtBQUNoRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL29iamVjdC5hc3NpZ24vcG9seWZpbGwuanM/MGQ3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIGxhY2tzUHJvcGVyRW51bWVyYXRpb25PcmRlciA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdC8qXG5cdCAqIHY4LCBzcGVjaWZpY2FsbHkgaW4gbm9kZSA0LngsIGhhcyBhIGJ1ZyB3aXRoIGluY29ycmVjdCBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlclxuXHQgKiBub3RlOiB0aGlzIGRvZXMgbm90IGRldGVjdCB0aGUgYnVnIHVubGVzcyB0aGVyZSdzIDIwIGNoYXJhY3RlcnNcblx0ICovXG5cdHZhciBzdHIgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuXHR2YXIgbGV0dGVycyA9IHN0ci5zcGxpdCgnJyk7XG5cdHZhciBtYXAgPSB7fTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZXR0ZXJzLmxlbmd0aDsgKytpKSB7XG5cdFx0bWFwW2xldHRlcnNbaV1dID0gbGV0dGVyc1tpXTtcblx0fVxuXHR2YXIgb2JqID0gT2JqZWN0LmFzc2lnbih7fSwgbWFwKTtcblx0dmFyIGFjdHVhbCA9ICcnO1xuXHRmb3IgKHZhciBrIGluIG9iaikge1xuXHRcdGFjdHVhbCArPSBrO1xuXHR9XG5cdHJldHVybiBzdHIgIT09IGFjdHVhbDtcbn07XG5cbnZhciBhc3NpZ25IYXNQZW5kaW5nRXhjZXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCFPYmplY3QuYXNzaWduIHx8ICFPYmplY3QucHJldmVudEV4dGVuc2lvbnMpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Lypcblx0ICogRmlyZWZveCAzNyBzdGlsbCBoYXMgXCJwZW5kaW5nIGV4Y2VwdGlvblwiIGxvZ2ljIGluIGl0cyBPYmplY3QuYXNzaWduIGltcGxlbWVudGF0aW9uLFxuXHQgKiB3aGljaCBpcyA3MiUgc2xvd2VyIHRoYW4gb3VyIHNoaW0sIGFuZCBGaXJlZm94IDQwJ3MgbmF0aXZlIGltcGxlbWVudGF0aW9uLlxuXHQgKi9cblx0dmFyIHRocm93ZXIgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoeyAxOiAyIH0pO1xuXHR0cnkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhyb3dlciwgJ3h5Jyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gdGhyb3dlclsxXSA9PT0gJ3knO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdHJldHVybiBpbXBsZW1lbnRhdGlvbjtcblx0fVxuXHRpZiAobGFja3NQcm9wZXJFbnVtZXJhdGlvbk9yZGVyKCkpIHtcblx0XHRyZXR1cm4gaW1wbGVtZW50YXRpb247XG5cdH1cblx0aWYgKGFzc2lnbkhhc1BlbmRpbmdFeGNlcHRpb25zKCkpIHtcblx0XHRyZXR1cm4gaW1wbGVtZW50YXRpb247XG5cdH1cblx0cmV0dXJuIE9iamVjdC5hc3NpZ247XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/object.assign/polyfill.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"(ssr)/./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(ssr)/./node_modules/object.assign/polyfill.js\");\n\nmodule.exports = function shimAssign() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tObject,\n\t\t{ assign: polyfill },\n\t\t{ assign: function () { return Object.assign !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9zaGltLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGFBQWEsbUJBQU8sQ0FBQywwRUFBbUI7QUFDeEMsa0JBQWtCLG1CQUFPLENBQUMsa0VBQVk7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrQkFBa0I7QUFDdEIsSUFBSSxzQkFBc0I7QUFDMUI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1jbGllbnQvLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9zaGltLmpzP2M0NmEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltQXNzaWduKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXHRkZWZpbmUoXG5cdFx0T2JqZWN0LFxuXHRcdHsgYXNzaWduOiBwb2x5ZmlsbCB9LFxuXHRcdHsgYXNzaWduOiBmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3QuYXNzaWduICE9PSBwb2x5ZmlsbDsgfSB9XG5cdCk7XG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/object.assign/shim.js\n");

/***/ })

};
;