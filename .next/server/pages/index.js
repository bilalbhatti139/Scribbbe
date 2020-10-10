module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PurchaseBox/index.js":
/*!*****************************************!*\
  !*** ./components/PurchaseBox/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/components/PurchaseBox/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import static data\n\n\n\nconst PurchaseBox = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"purchaseBoxContainer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"PurchaseData\"].map((item, index) => {\n    return __jsx(\"div\", {\n      className: \"purchaseBox\",\n      key: index,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"header\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"time\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }\n    }, __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 19\n      }\n    }, item.time)), __jsx(\"div\", {\n      className: \"discountPrice\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, __jsx(\"span\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 19\n      }\n    }, item.discountPrice), __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 19\n      }\n    }, item.originalPrice))), __jsx(\"div\", {\n      className: \"curve\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      src: `../../static/assets/images/${item.curveImage}`,\n      alt: \"curve\",\n      className: \"img-fluid\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }\n    })), __jsx(\"div\", {\n      className: \"purchase\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 15\n      }\n    }, __jsx(\"button\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }\n    }, \"Purchase\")));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PurchaseBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1B1cmNoYXNlQm94L2luZGV4LmpzP2Y4MTMiXSwibmFtZXMiOlsiUHVyY2hhc2VCb3giLCJQdXJjaGFzZURhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aW1lIiwiZGlzY291bnRQcmljZSIsIm9yaWdpbmFsUHJpY2UiLCJjdXJ2ZUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Q0FFQTs7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsTUFBTTtBQUN4QixTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsNkRBQVksQ0FBQ0MsR0FBYixDQUFpQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDakMsV0FDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQTZCLFNBQUcsRUFBRUEsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUQsSUFBSSxDQUFDRSxJQUFULENBREYsQ0FERixFQUlFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0YsSUFBSSxDQUFDRyxhQUFaLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlILElBQUksQ0FBQ0ksYUFBVCxDQUZGLENBSkYsQ0FERixFQVVFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFHLDhCQUE2QkosSUFBSSxDQUFDSyxVQUFXLEVBRHJEO0FBRUUsU0FBRyxFQUFDLE9BRk47QUFHRSxlQUFTLEVBQUMsV0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FWRixFQWlCRTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBakJGLENBREY7QUF1QkQsR0F4QkEsQ0FESCxDQURGLENBREY7QUErQkQsQ0FoQ0Q7O0FBa0NlUiwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHVyY2hhc2VCb3gvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gaW1wb3J0IHN0YXRpYyBkYXRhXG5pbXBvcnQgeyBQdXJjaGFzZURhdGEgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IFB1cmNoYXNlQm94ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyY2hhc2VCb3hDb250YWluZXJcIj5cbiAgICAgICAge1B1cmNoYXNlRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyY2hhc2VCb3hcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY291bnRQcmljZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uZGlzY291bnRQcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS5vcmlnaW5hbFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VydmVcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2AuLi8uLi9zdGF0aWMvYXNzZXRzL2ltYWdlcy8ke2l0ZW0uY3VydmVJbWFnZX1gfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiY3VydmVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJjaGFzZVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24+UHVyY2hhc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZUJveDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PurchaseBox/index.js\n");

/***/ }),

/***/ "./components/SpecialOffer/index.js":
/*!******************************************!*\
  !*** ./components/SpecialOffer/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/components/SpecialOffer/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst SpecialOffer = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"special-offer-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"../../../static/assets/images/badge.png\",\n    width: \"16\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }), \" \", \"Very... VERY Special Offer \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 40\n    }\n  }, \"Until 15th september 2020.\"))), __jsx(\"div\", {\n    className: \"details\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, \"This very special and limited deal offers you Scribbbe for a ONE-TIME payment.\", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }), \" be fast, this offer is for a limited number of users and period of time.\")), __jsx(\"div\", {\n    className: \"learn-more-btn\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, \"Learn More\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpecialOffer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwZWNpYWxPZmZlci9pbmRleC5qcz83MjdjIl0sIm5hbWVzIjpbIlNwZWNpYWxPZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsTUFBTTtBQUN6QixTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMseUNBQVQ7QUFBbUQsU0FBSyxFQUFDLElBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUNtRSxHQURuRSxpQ0FFNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FGN0IsQ0FERixDQURGLEVBT0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsOEVBREYsQ0FQRixFQWVFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBZkYsQ0FERixDQURGO0FBdUJELENBeEJEOztBQTBCZUEsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwZWNpYWxPZmZlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTcGVjaWFsT2ZmZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVjaWFsLW9mZmVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9hc3NldHMvaW1hZ2VzL2JhZGdlLnBuZ1wiIHdpZHRoPVwiMTZcIiAvPntcIiBcIn1cbiAgICAgICAgICAgIFZlcnkuLi4gVkVSWSBTcGVjaWFsIE9mZmVyIDxzcGFuPlVudGlsIDE1dGggc2VwdGVtYmVyIDIwMjAuPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhpcyB2ZXJ5IHNwZWNpYWwgYW5kIGxpbWl0ZWQgZGVhbCBvZmZlcnMgeW91IFNjcmliYmJlIGZvciBhXG4gICAgICAgICAgICBPTkUtVElNRSBwYXltZW50LlxuICAgICAgICAgICAgPGJyIC8+IGJlIGZhc3QsIHRoaXMgb2ZmZXIgaXMgZm9yIGEgbGltaXRlZCBudW1iZXIgb2YgdXNlcnMgYW5kXG4gICAgICAgICAgICBwZXJpb2Qgb2YgdGltZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYXJuLW1vcmUtYnRuXCI+XG4gICAgICAgICAgPGJ1dHRvbj5MZWFybiBNb3JlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWNpYWxPZmZlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SpecialOffer/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SpecialOffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SpecialOffer */ \"./components/SpecialOffer/index.js\");\n/* harmony import */ var _components_PurchaseBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PurchaseBox */ \"./components/PurchaseBox/index.js\");\nvar _jsxFileName = \"/home/bilal/dev/Scribbbe/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import components\n\n\n\n\nconst Home = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(_components_SpecialOffer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), __jsx(_components_PurchaseBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2pCLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FQRDs7QUFTZUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IFNwZWNpYWxPZmZlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGVjaWFsT2ZmZXJcIjtcbmltcG9ydCBQdXJjaGFzZUJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9QdXJjaGFzZUJveFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxTcGVjaWFsT2ZmZXIgLz5cbiAgICAgIDxQdXJjaGFzZUJveCAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: PurchaseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PurchaseData\", function() { return PurchaseData; });\nconst PurchaseData = [{\n  time: \"1 hour\",\n  originalPrice: \"12 euros\",\n  discountPrice: \"6 euros\",\n  curveImage: \"curve.png\"\n}, {\n  time: \"3 hour\",\n  originalPrice: \"36 euros\",\n  discountPrice: \"18 euros\",\n  curveImage: \"curve2.png\"\n}, {\n  time: \"6 hour\",\n  originalPrice: \"72 euros\",\n  discountPrice: \"36 euros\",\n  curveImage: \"curve3.png\"\n}, {\n  time: \"10 hour\",\n  originalPrice: \"120 euros\",\n  discountPrice: \"60 euros\",\n  curveImage: \"curve4.png\"\n}, {\n  time: \"30 hour\",\n  originalPrice: \"360 euros\",\n  discountPrice: \"165 euros\",\n  curveImage: \"curve5.png\"\n}, {\n  time: \"60 hour\",\n  originalPrice: \"780 euros\",\n  discountPrice: \"288 euros\",\n  curveImage: \"curve6.png\"\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMuanM/YzMyMCJdLCJuYW1lcyI6WyJQdXJjaGFzZURhdGEiLCJ0aW1lIiwib3JpZ2luYWxQcmljZSIsImRpc2NvdW50UHJpY2UiLCJjdXJ2ZUltYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sTUFBTUEsWUFBWSxHQUFHLENBQzFCO0FBQ0VDLE1BQUksRUFBRSxRQURSO0FBRUVDLGVBQWEsRUFBRSxVQUZqQjtBQUdFQyxlQUFhLEVBQUUsU0FIakI7QUFJRUMsWUFBVSxFQUFFO0FBSmQsQ0FEMEIsRUFPMUI7QUFDRUgsTUFBSSxFQUFFLFFBRFI7QUFFRUMsZUFBYSxFQUFFLFVBRmpCO0FBR0VDLGVBQWEsRUFBRSxVQUhqQjtBQUlFQyxZQUFVLEVBQUU7QUFKZCxDQVAwQixFQWExQjtBQUNFSCxNQUFJLEVBQUUsUUFEUjtBQUVFQyxlQUFhLEVBQUUsVUFGakI7QUFHRUMsZUFBYSxFQUFFLFVBSGpCO0FBSUVDLFlBQVUsRUFBRTtBQUpkLENBYjBCLEVBbUIxQjtBQUNFSCxNQUFJLEVBQUUsU0FEUjtBQUVFQyxlQUFhLEVBQUUsV0FGakI7QUFHRUMsZUFBYSxFQUFFLFVBSGpCO0FBSUVDLFlBQVUsRUFBRTtBQUpkLENBbkIwQixFQXlCMUI7QUFDRUgsTUFBSSxFQUFFLFNBRFI7QUFFRUMsZUFBYSxFQUFFLFdBRmpCO0FBR0VDLGVBQWEsRUFBRSxXQUhqQjtBQUlFQyxZQUFVLEVBQUU7QUFKZCxDQXpCMEIsRUErQjFCO0FBQ0VILE1BQUksRUFBRSxTQURSO0FBRUVDLGVBQWEsRUFBRSxXQUZqQjtBQUdFQyxlQUFhLEVBQUUsV0FIakI7QUFJRUMsWUFBVSxFQUFFO0FBSmQsQ0EvQjBCLENBQXJCIiwiZmlsZSI6Ii4vdXRpbHMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFB1cmNoYXNlRGF0YSA9IFtcbiAge1xuICAgIHRpbWU6IFwiMSBob3VyXCIsXG4gICAgb3JpZ2luYWxQcmljZTogXCIxMiBldXJvc1wiLFxuICAgIGRpc2NvdW50UHJpY2U6IFwiNiBldXJvc1wiLFxuICAgIGN1cnZlSW1hZ2U6IFwiY3VydmUucG5nXCIsXG4gIH0sXG4gIHtcbiAgICB0aW1lOiBcIjMgaG91clwiLFxuICAgIG9yaWdpbmFsUHJpY2U6IFwiMzYgZXVyb3NcIixcbiAgICBkaXNjb3VudFByaWNlOiBcIjE4IGV1cm9zXCIsXG4gICAgY3VydmVJbWFnZTogXCJjdXJ2ZTIucG5nXCIsXG4gIH0sXG4gIHtcbiAgICB0aW1lOiBcIjYgaG91clwiLFxuICAgIG9yaWdpbmFsUHJpY2U6IFwiNzIgZXVyb3NcIixcbiAgICBkaXNjb3VudFByaWNlOiBcIjM2IGV1cm9zXCIsXG4gICAgY3VydmVJbWFnZTogXCJjdXJ2ZTMucG5nXCIsXG4gIH0sXG4gIHtcbiAgICB0aW1lOiBcIjEwIGhvdXJcIixcbiAgICBvcmlnaW5hbFByaWNlOiBcIjEyMCBldXJvc1wiLFxuICAgIGRpc2NvdW50UHJpY2U6IFwiNjAgZXVyb3NcIixcbiAgICBjdXJ2ZUltYWdlOiBcImN1cnZlNC5wbmdcIixcbiAgfSxcbiAge1xuICAgIHRpbWU6IFwiMzAgaG91clwiLFxuICAgIG9yaWdpbmFsUHJpY2U6IFwiMzYwIGV1cm9zXCIsXG4gICAgZGlzY291bnRQcmljZTogXCIxNjUgZXVyb3NcIixcbiAgICBjdXJ2ZUltYWdlOiBcImN1cnZlNS5wbmdcIixcbiAgfSxcbiAge1xuICAgIHRpbWU6IFwiNjAgaG91clwiLFxuICAgIG9yaWdpbmFsUHJpY2U6IFwiNzgwIGV1cm9zXCIsXG4gICAgZGlzY291bnRQcmljZTogXCIyODggZXVyb3NcIixcbiAgICBjdXJ2ZUltYWdlOiBcImN1cnZlNi5wbmdcIixcbiAgfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/constants.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });