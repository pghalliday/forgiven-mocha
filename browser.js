/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.mocha = mocha;\nfunction getFunction(base, _ref) {\n  var pending = _ref.pending,\n      only = _ref.only;\n\n  if (pending) {\n    return base.skip;\n  } else if (only) {\n    return base.only;\n  }\n  return base;\n}\n\nfunction setup(_ref2, callback) {\n  var description = _ref2.description,\n      beforeEachCallback = _ref2.beforeEach,\n      afterEachCallback = _ref2.afterEach,\n      pending = _ref2.pending,\n      only = _ref2.only;\n\n  getFunction(describe, { pending: pending, only: only })(description, function () {\n    if (beforeEachCallback) {\n      beforeEach(beforeEachCallback);\n    }\n    if (afterEachCallback) {\n      afterEach(afterEachCallback);\n    }\n    callback(setup, test);\n  });\n}\n\nfunction test(_ref3) {\n  var description = _ref3.description,\n      test = _ref3.test,\n      pending = _ref3.pending,\n      only = _ref3.only;\n\n  getFunction(it, { pending: pending, only: only })(description, test);\n}\n\nfunction mocha(params, callback) {\n  return function () {\n    setup(params, callback);\n  };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJtb2NoYSIsImdldEZ1bmN0aW9uIiwiYmFzZSIsInBlbmRpbmciLCJvbmx5Iiwic2tpcCIsInNldHVwIiwiY2FsbGJhY2siLCJkZXNjcmlwdGlvbiIsImJlZm9yZUVhY2hDYWxsYmFjayIsImJlZm9yZUVhY2giLCJhZnRlckVhY2hDYWxsYmFjayIsImFmdGVyRWFjaCIsImRlc2NyaWJlIiwidGVzdCIsIml0IiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7OztRQWtDZ0JBLEssR0FBQUEsSztBQWxDaEIsU0FBU0MsV0FBVCxDQUFxQkMsSUFBckIsUUFBNEM7QUFBQSxNQUFoQkMsT0FBZ0IsUUFBaEJBLE9BQWdCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUMxQyxNQUFJRCxPQUFKLEVBQWE7QUFDWCxXQUFPRCxLQUFLRyxJQUFaO0FBQ0QsR0FGRCxNQUVPLElBQUlELElBQUosRUFBVTtBQUNmLFdBQU9GLEtBQUtFLElBQVo7QUFDRDtBQUNELFNBQU9GLElBQVA7QUFDRDs7QUFFRCxTQUFTSSxLQUFULFFBTUdDLFFBTkgsRUFNYTtBQUFBLE1BTFhDLFdBS1csU0FMWEEsV0FLVztBQUFBLE1BSkNDLGtCQUlELFNBSlhDLFVBSVc7QUFBQSxNQUhBQyxpQkFHQSxTQUhYQyxTQUdXO0FBQUEsTUFGWFQsT0FFVyxTQUZYQSxPQUVXO0FBQUEsTUFEWEMsSUFDVyxTQURYQSxJQUNXOztBQUNYSCxjQUFZWSxRQUFaLEVBQXNCLEVBQUNWLGdCQUFELEVBQVVDLFVBQVYsRUFBdEIsRUFBdUNJLFdBQXZDLEVBQW9ELFlBQU07QUFDeEQsUUFBSUMsa0JBQUosRUFBd0I7QUFDdEJDLGlCQUFXRCxrQkFBWDtBQUNEO0FBQ0QsUUFBSUUsaUJBQUosRUFBdUI7QUFDckJDLGdCQUFVRCxpQkFBVjtBQUNEO0FBQ0RKLGFBQ0VELEtBREYsRUFFRVEsSUFGRjtBQUlELEdBWEQ7QUFZRDs7QUFFRCxTQUFTQSxJQUFULFFBQWtEO0FBQUEsTUFBbkNOLFdBQW1DLFNBQW5DQSxXQUFtQztBQUFBLE1BQXRCTSxJQUFzQixTQUF0QkEsSUFBc0I7QUFBQSxNQUFoQlgsT0FBZ0IsU0FBaEJBLE9BQWdCO0FBQUEsTUFBUEMsSUFBTyxTQUFQQSxJQUFPOztBQUNoREgsY0FBWWMsRUFBWixFQUFnQixFQUFDWixnQkFBRCxFQUFVQyxVQUFWLEVBQWhCLEVBQWlDSSxXQUFqQyxFQUE4Q00sSUFBOUM7QUFDRDs7QUFFTSxTQUFTZCxLQUFULENBQWVnQixNQUFmLEVBQXVCVCxRQUF2QixFQUFpQztBQUN0QyxTQUFPLFlBQU07QUFDWEQsVUFBTVUsTUFBTixFQUFjVCxRQUFkO0FBQ0QsR0FGRDtBQUdEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRGdW5jdGlvbihiYXNlLCB7cGVuZGluZywgb25seX0pIHtcbiAgaWYgKHBlbmRpbmcpIHtcbiAgICByZXR1cm4gYmFzZS5za2lwO1xuICB9IGVsc2UgaWYgKG9ubHkpIHtcbiAgICByZXR1cm4gYmFzZS5vbmx5O1xuICB9XG4gIHJldHVybiBiYXNlO1xufVxuXG5mdW5jdGlvbiBzZXR1cCh7XG4gIGRlc2NyaXB0aW9uLFxuICBiZWZvcmVFYWNoOiBiZWZvcmVFYWNoQ2FsbGJhY2ssXG4gIGFmdGVyRWFjaDogYWZ0ZXJFYWNoQ2FsbGJhY2ssXG4gIHBlbmRpbmcsXG4gIG9ubHksXG59LCBjYWxsYmFjaykge1xuICBnZXRGdW5jdGlvbihkZXNjcmliZSwge3BlbmRpbmcsIG9ubHl9KShkZXNjcmlwdGlvbiwgKCkgPT4ge1xuICAgIGlmIChiZWZvcmVFYWNoQ2FsbGJhY2spIHtcbiAgICAgIGJlZm9yZUVhY2goYmVmb3JlRWFjaENhbGxiYWNrKTtcbiAgICB9XG4gICAgaWYgKGFmdGVyRWFjaENhbGxiYWNrKSB7XG4gICAgICBhZnRlckVhY2goYWZ0ZXJFYWNoQ2FsbGJhY2spO1xuICAgIH1cbiAgICBjYWxsYmFjayhcbiAgICAgIHNldHVwLFxuICAgICAgdGVzdCxcbiAgICApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdGVzdCh7ZGVzY3JpcHRpb24sIHRlc3QsIHBlbmRpbmcsIG9ubHl9KSB7XG4gIGdldEZ1bmN0aW9uKGl0LCB7cGVuZGluZywgb25seX0pKGRlc2NyaXB0aW9uLCB0ZXN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vY2hhKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBzZXR1cChwYXJhbXMsIGNhbGxiYWNrKTtcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzPzM2OTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar _src = __webpack_require__(0);\n\nglobal.forgiven.mocha = _src.mocha;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbImdsb2JhbCIsImZvcmdpdmVuIiwibW9jaGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBR0FBLE9BQU9DLFFBQVAsQ0FBZ0JDLEtBQWhCLGMiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIG1vY2hhLFxufSBmcm9tICcuL3NyYyc7XG5nbG9iYWwuZm9yZ2l2ZW4ubW9jaGEgPSBtb2NoYTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);